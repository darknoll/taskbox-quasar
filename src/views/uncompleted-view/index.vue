<template>
  <q-tab-panel :name="name">
    <tab-list :uncompletedTasks="uncompletedTasks" :visible="visible" />
  </q-tab-panel>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TabList from './components/TabList';
export default {
  name: 'UncompletedView',
  components: {
    TabList
  },
  props: {
    name: {
      type: String,
      default: ''
    }
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
      this.getUncompletedTasks().finally(() => {
        this.visible = false;
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
