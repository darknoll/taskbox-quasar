<template>
  <q-menu transition-show="flip-right" transition-hide="flip-left">
    <q-list class="drop-list">
      <q-item-label header>排序</q-item-label>
      <q-separator />
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label title>日期最近的任务优先</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="blue" v-model="dateToggle" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script>
export default {
  name: 'SortMenu',
  data() {
    return {
      dateToggle: true
    };
  }
};
</script>
