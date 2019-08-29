<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal class="text-white shadow-4 bg-main">
      <q-toolbar class="text-white">
        <q-btn flat round dense icon="arrow_back" @click="onBack" />
        <q-toolbar-title
          v-if="selectedUncompletedTask"
          class="text-subtitle1"
          >{{ taskTitle }}</q-toolbar-title
        >
      </q-toolbar>

      <q-tabs
        v-model="tab"
        dense
        class="bg-transparent text-white no-padding"
        active-color="orange"
        indicator-color="orange"
        align="justify"
      >
        <q-tab name="processInfo" label="流程信息" class="no-padding" />
        <q-tab name="assObj" label="关联对象" class="no-padding" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <q-tab-panels v-model="tab" animated swipeable class="text-primary">
        <process-info name="processInfo" />
        <ass-obj name="assObj" :assObjs="assObjs" />
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProcessInfo from './components/ProcessInfo';
import AssObj from './components/AssObj';
export default {
  name: 'Task',
  components: {
    ProcessInfo,
    AssObj
  },
  data() {
    return {
      tab: 'processInfo',
      assObjs: []
    };
  },
  computed: {
    ...mapState('task', ['selectedUncompletedTask']),
    taskTitle() {
      return this.selectedUncompletedTask.wfp_name === ''
        ? this.selectedUncompletedTask.name
        : `${this.selectedUncompletedTask.wfp_name}-${this.selectedUncompletedTask.name}`;
    }
  },
  methods: {
    ...mapActions('task', ['getUncompletedTask', 'getTaskAssObjs']),
    onBack() {
      this.$router.go(-1);
    },
    fetchData() {
      let taskID = this.$route.params.id;
      if (this.selectedUncompletedTask === null) {
        this.getUncompletedTask(taskID).then(() => {
          this.getTaskAssObjs(taskID).then(response => {
            this.$nextTick(() => {
              this.assObjs = response.data.data;
            });
          });
        });
      } else {
        this.getTaskAssObjs(taskID).then(response => {
          this.$nextTick(() => {
            this.assObjs = response.data.data;
          });
        });
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
::v-deep .q-toolbar {
  min-height: 60px;
}
::v-deep .q-tab-panel {
  padding: 0;
}
</style>
