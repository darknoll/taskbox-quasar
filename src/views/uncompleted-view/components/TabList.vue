<template>
  <div class="list-container">
    <q-page-container>
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
    </q-page-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  mounted() {
    this.$store
      .dispatch('task/getUncompletedTasks')
      .then(() => {
        console.log('success');
      })
      .catch(() => {
        console.log('fail');
      })
      .finally(() => {
        this.visible = false;
      });
  }
};
</script>

<style lang="scss" scoped>
.list-container ::v-deep .q-page-container {
  padding-top: 0 !important;
}
</style>
