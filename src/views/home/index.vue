<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-white shadow-4 bg-main">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleDrawer" />
        <q-toolbar-title>
          <q-input standout="text-white" placeholder="搜索" dense dark>
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar-title>
        <q-btn dense flat round icon="more_vert">
          <more-menu />
        </q-btn>
      </q-toolbar>
      <div class="tab-toolbar">
        <q-toolbar inset>
          <q-tabs
            v-model="tab"
            dense
            class="bg-transparent text-white"
            active-color="orange"
            indicator-color="orange"
            align="left"
            narrow-indicator
          >
            <q-tab name="uncompleted" label="未完成任务" />
            <q-tab name="completed" label="已完成任务" />
          </q-tabs>

          <q-toolbar-title />

          <uncompleted-tool-bar v-if="this.tab === 'uncompleted'" />
          <completed-tool-bar v-else />
        </q-toolbar>
      </div>
    </q-header>

    <!--左侧抽屉-->
    <main-drawer ref="drawer"></main-drawer>

    <q-page-container>
      <q-tab-panels v-model="tab" animated class="text-primary">
        <uncompleted-view name="uncompleted" />
        <completed-view name="completed" />
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<script>
import MainDrawer from './components/MainDrawer';
import MoreMenu from './components/MoreMenu';
import UncompletedToolBar from '@/views/uncompleted-view/components/ToolBar';
import CompletedToolBar from '@/views/completed-view/components/ToolBar';
import UncompletedView from '@/views/uncompleted-view';
import CompletedView from '@/views/completed-view';
export default {
  components: {
    MainDrawer,
    MoreMenu,
    UncompletedView,
    UncompletedToolBar,
    CompletedView,
    CompletedToolBar
  },
  data() {
    return {
      left: true,
      tab: 'uncompleted'
    };
  },
  methods: {
    toggleDrawer() {
      this.$refs.drawer.drawer = !this.$refs.drawer.drawer;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .q-toolbar {
  min-height: 60px;
}
::v-deep .q-field--dense .q-field__control,
::v-deep .q-field--dense .q-field__marginal {
  height: 32px;
}

.tab-toolbar ::v-deep .q-toolbar {
  min-height: 30px;
}
.tab-toolbar .q-toolbar--inset {
  padding-left: 0;
}

::v-deep .q-tab-panel {
  padding: 0;
}
</style>
