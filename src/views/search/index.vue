<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="text-white shadow-4 bg-main">
      <q-toolbar class="text-white">
        <q-btn flat round dense icon="arrow_back" @click="onBack" />
        <q-toolbar-title>
          <q-input
            clearable
            standout="text-white"
            placeholder="输入流程名、结点名"
            v-model="search"
            dense
            dark
            autofocus
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar-title>
        <q-select v-model="model" :options="options" label="任务类型" dense />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <uncompleted-view v-if="this.model === '未完成任务'" />
      <completed-view v-else />
    </q-page-container>
  </q-layout>
</template>

<script>
import UncompletedView from '@/views/uncompleted-view';
import CompletedView from '@/views/completed-view';
export default {
  name: 'Search',
  components: {
    UncompletedView,
    CompletedView
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onClick() {}
  },
  data() {
    return {
      search: '',
      history: ['yyc', 'wyl', 'waq'],
      model: '未完成任务',
      options: ['已完成任务', '未完成任务']
    };
  }
};
</script>

<style lang="scss" scoped>
::v-deep .q-toolbar {
  min-height: 60px;
  border-bottom-color: transparent;
}
::v-deep .q-field--dense .q-field__control,
::v-deep .q-field--dense .q-field__marginal {
  height: 32px;
}

::v-deep .q-tab-panel {
  padding: 0;
}
</style>
