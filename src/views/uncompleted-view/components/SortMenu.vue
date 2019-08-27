<template>
  <q-menu transition-show="flip-right" transition-hide="flip-left">
    <q-list class="drop-list">
      <q-item-label header>排序</q-item-label>
      <q-separator />
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label title>未接收的任务优先</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="taskToggle" @input="onToggle" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label title>日期最近的任务优先</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="green" v-model="dateToggle" @input="onToggle" />
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
      taskToggle: true,
      dateToggle: true
    };
  },
  methods: {
    onToggle() {
      if (this.taskToggle === false && this.dateToggle === true) {
        this.$store.dispatch('task/sortTaskByDateDesc');
      } else if (this.taskToggle === true && this.dateToggle === false) {
        this.$store.dispatch('task/sortTaskByNotReceive');
      } else if (this.taskToggle === true && this.dateToggle === true) {
        this.$store.dispatch('task/sortTaskByDateDesc');
        this.$store.dispatch('task/sortTaskByNotReceive');
      } else {
        this.$store.dispatch('task/sortTaskByDateAsc');
        this.$store.dispatch('task/sortTaskByReceived');
      }
    }
  }
};
</script>
