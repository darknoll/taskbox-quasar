<template>
  <q-tab-panel :name="name">
    <q-page>
      <tab-list />
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page>
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
