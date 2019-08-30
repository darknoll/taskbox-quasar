<template>
  <q-tab-panel :name="name">
    <q-page padding>
      <div class="text-h6">Completed</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-page>
  </q-tab-panel>
</template>

<script>
export default {
  name: 'CompletedView',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>
