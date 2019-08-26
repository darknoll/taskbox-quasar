<template>
  <div class="list-container">
    <q-page-container>
      <q-page>
        <q-list>
          <template v-for="i in 20">
            <list-item :key="i" />
            <q-separator />
          </template>
        </q-list>

        <!-- place QPageScroller at end of page -->
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
export default {
  name: 'TabList',
  components: {
    ListItem
  }
};
</script>

<style lang="scss" scoped>
.list-container ::v-deep .q-page-container {
  padding-top: 0 !important;
}
</style>
