<template>
  <q-pull-to-refresh @refresh="refresh">
    <q-list separator style="min-height: 100px">
      <template v-for="(item, index) in uncompletedTasks">
        <list-item :task="item" :key="index" @changeVisible="changeVisible" />
      </template>
      <q-separator />

      <q-inner-loading :showing="visible">
        <q-spinner-puff size="50px" color="primary" />
      </q-inner-loading>
    </q-list>
  </q-pull-to-refresh>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ListItem from '../components/ListItem';
export default {
  name: 'TabList',
  components: {
    ListItem
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    ...mapState('task', ['uncompletedTasks'])
  },
  methods: {
    ...mapActions('task', ['getUncompletedTasks']),
    fetchData() {
      this.getUncompletedTasks()
        .catch(() => {
          this.$q.notify({
            icon: 'warning',
            color: 'warning',
            message: '获取数据失败！',
            timeout: 500
          });
        })
        .finally(() => {
          this.visible = false;
        });
    },
    refresh(done) {
      this.getUncompletedTasks()
        .catch(() => {
          this.$q.notify({
            icon: 'warning',
            color: 'warning',
            message: '刷新失败！',
            timeout: 500
          });
        })
        .finally(() => {
          done();
        });
    },
    changeVisible(status) {
      this.visible = status;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
