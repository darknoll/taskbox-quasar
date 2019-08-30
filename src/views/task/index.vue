<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="text-white shadow-4 bg-main">
      <q-toolbar class="text-white">
        <q-btn flat round dense icon="arrow_back" @click="onBack" />
        <q-toolbar-title v-if="selectedUncompletedTask" class="text-body1">{{
          taskTitle
        }}</q-toolbar-title>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        dense
        inline-label
        class="bg-transparent text-white no-padding"
        active-color="orange"
        indicator-color="orange"
        align="justify"
      >
        <q-tab
          name="processInfo"
          icon="apps"
          label="流程信息"
          class="no-padding"
        />
        <q-tab
          name="assObj"
          icon="camera"
          label="关联对象"
          class="no-padding"
        />
      </q-tabs>
    </q-header>
    <q-page-container>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        keep-alive
        class="text-primary"
      >
        <process-info name="processInfo" :id="id" />
        <ass-obj-list name="assObj" :id="id" />
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex';
import ProcessInfo from './components/ProcessInfo';
import AssObjList from './components/AssObjList';
export default {
  name: 'Task',
  components: {
    ProcessInfo,
    AssObjList
  },
  data() {
    return {
      id: parseInt(this.$route.params.id),
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
    onBack() {
      this.$router.go(-1);
    }
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
