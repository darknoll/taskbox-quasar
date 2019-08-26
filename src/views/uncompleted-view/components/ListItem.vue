<template>
  <q-slide-item @left="onLeft" @right="onRight">
    <template v-slot:left>
      <q-icon name="ion-mail-unread" v-if="hasReceived" />
      <q-icon name="ion-mail-open" v-else />
    </template>
    <template v-slot:right>
      <q-icon name="more_horiz" />
    </template>
    <q-item>
      <q-item-section>
        <q-item-label>工艺评审报告-审核</q-item-label>
        <q-item-label>yyc</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-item-label caption>2019-03-28</q-item-label>
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>

<script>
export default {
  name: 'ListItem',
  data() {
    return {
      hasReceived: false
    };
  },
  props: {
    task: {
      type: Object,
      default: null
    }
  },
  computed: {
    getTaskName() {}
  },
  methods: {
    onLeft({ reset }) {
      setTimeout(() => {
        this.hasReceived = !this.hasReceived;
        this.$q.notify('接收/取消接收任务成功！');
        reset();
      }, 1000);
    },

    onRight({ reset }) {
      this.$q
        .bottomSheet({
          message: 'Bottom Sheet message',
          actions: [
            {
              label: 'Drive',
              img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
              id: 'drive'
            },
            {
              label: 'Keep',
              img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
              id: 'keep'
            },
            {
              label: 'Google Hangouts',
              img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
              id: 'calendar'
            },
            {
              label: 'Calendar',
              img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
              id: 'calendar'
            },
            {},
            {
              label: 'Share',
              icon: 'share',
              id: 'share'
            },
            {
              label: 'Upload',
              icon: 'cloud_upload',
              color: 'primary',
              id: 'upload'
            },
            {},
            {
              label: 'John',
              avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
              id: 'john'
            }
          ]
        })
        .onOk(action => {
          reset();
          console.log('Action chosen:', action.id);
        })
        .onCancel(() => {
          reset();
          console.log('Dismissed');
        })
        .onDismiss(() => {
          reset();
          console.log('I am triggered on both OK and Cancel');
        });
    },

    finalize(reset) {
      this.timer = setTimeout(() => {
        reset();
      }, 10000);
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
  border-left: 4px solid #fb8c;
}
</style>
