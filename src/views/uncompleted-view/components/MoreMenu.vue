<template>
  <q-menu transition-show="flip-right" transition-hide="flip-left">
    <q-list dense flat class="drop-list text-blue-8">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="clear_all"></q-icon>
        </q-item-section>
        <q-item-section>批量处理</q-item-section>
      </q-item>
      <q-separator />
    </q-list>
  </q-menu>
</template>

<script>
export default {
  name: 'MoreMenu'
};
</script>

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
