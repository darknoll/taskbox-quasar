<template>
  <q-item>
    <q-item-section>
      <q-item-label>{{ infoName }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-item-label>{{ infoValue }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'InfoItem',
  props: {
    infoName: {
      type: String,
      default: ''
    },
    infoValue: {
      type: String,
      default: ''
    }
  }
};
</script>
