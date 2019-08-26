<template>
  <q-tab-panel :name="name">
    <tab-list />
  </q-tab-panel>
</template>

<script>
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
  }
};
</script>
