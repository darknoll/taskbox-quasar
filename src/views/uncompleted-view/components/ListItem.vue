<template>
  <q-slide-item @left="onLeft" @right="onRight">
    <template v-slot:left>
      <q-icon name="ion-mail-unread" v-if="task.receive_state != 1" />
      <q-icon name="ion-mail-open" v-else />
    </template>
    <template v-slot:right>
      <q-icon name="more_horiz" />
    </template>
    <div :class="task.receive_state ? 'read' : 'unread'">
      <q-item>
        <q-item-section>
          <q-item-label>{{ taskName }}</q-item-label>
          <q-item-label caption>{{ task.sender }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>{{ taskDate }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </q-slide-item>
</template>

<script>
import { getDateFromStamp } from '@/utils/helper';
export default {
  name: 'ListItem',
  data() {
    return {};
  },
  props: {
    task: {
      type: Object,
      default: null
    }
  },
  computed: {
    taskName() {
      if (this.task) {
        return this.task.wfp_name === ''
          ? this.task.name
          : `${this.task.wfp_name}-${this.task.name}`;
      }
      return '';
    },
    taskDate() {
      return getDateFromStamp(this.task.creationdate);
    }
  },
  methods: {
    onLeft({ reset }) {
      let option = this.task.receive_state ? 1 : 0;
      let command = this.task.receive_state ? '取消接收' : '接收';
      this.$store
        .dispatch('task/pickTask', { id: this.task.ObjectID, option: option })
        .then(() => {
          console.log(this.task.receive_state);
          this.$q.notify({
            icon: 'done',
            color: 'positive',
            message: `${command}任务成功！`
          });
        })
        .catch(() => {
          this.$q.notify({
            icon: 'warning',
            color: 'warning',
            message: `${command}任务失败！`,
            timeout: 100
          });
        })
        .finally(() => {
          reset();
        });
    },

    onRight({ reset }) {
      this.$store
        .dispatch('task/getTaskOpList', this.task.ObjectID)
        .then(response => {
          let commands = response.data.data;
          let actions = [
            {
              label: '退回',
              icon: 'replay',
              id: '退回'
            }
          ];
          commands.forEach(command => {
            let action = {
              label: command,
              icon: 'call_made',
              id: command
            };
            actions.push(action);
          });
          this.$q
            .bottomSheet({
              message: '操作列表',
              actions: actions
            })
            .onOk(action => {
              console.log('Action chosen:', action.id);
            })
            .onCancel(() => {})
            .onDismiss(() => {});
        })
        .catch(() => {
          this.$q.notify({
            icon: 'warning',
            color: 'warning',
            message: '获取操作列表失败！',
            timeout: 100
          });
        })
        .finally(() => {
          reset();
        });
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
::v-deep .q-item {
  padding: 12px 16px;
}
.unread {
  ::v-deep .q-item {
    border-left: 4px solid #fb8c;
  }
}
.read {
  ::v-deep .q-item {
    border-left: 0;
  }
}
</style>
