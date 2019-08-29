<template>
  <div class="list-container">
    <q-page>
      <q-list>
        <template v-for="(item, index) in uncompletedTasks">
          <list-item :task="item" :key="index" />
          <q-separator />
        </template>
        <q-inner-loading :showing="visible">
          <q-spinner-puff size="50px" color="primary" />
        </q-inner-loading>
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
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
export default {
  name: 'TabList',
  components: {
    ListItem
  },
  props: {
    uncompletedTasks: {
      type: Array,
      default: function() {
        return [];
      }
    },
    visible: {
      type: Boolean,
      default: true
    }
  }
};
</script>
