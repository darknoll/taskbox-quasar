<template>
  <q-menu transition-show="flip-right" transition-hide="flip-left">
    <q-list flat class="drop-list text-blue-8 bg-transparent">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="refresh"></q-icon>
        </q-item-section>
        <q-item-section>刷新</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="explore"></q-icon>
        </q-item-section>
        <q-item-section>查询</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="exit_to_app"></q-icon>
        </q-item-section>
        <q-item-section>退出</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<style lang="scss" scoped>
.drop-list {
  ::v-deep .q-item__section--avatar {
    min-width: 0 !important;
    max-width: 30px !important;
  }
  ::v-deep .q-item {
    min-height: 30px;
    padding: 6px 10px;
  }
}
</style>
