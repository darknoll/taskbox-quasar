<template>
  <div>
    <q-btn dense flat round icon="sort">
      <sort-menu />
    </q-btn>
    <q-btn dense flat round icon="add">
      <more-menu />
    </q-btn>
  </div>
</template>

<script>
import SortMenu from '../components/SortMenu';
import MoreMenu from '../components/MoreMenu';
export default {
  name: 'ToolBar',
  components: {
    SortMenu,
    MoreMenu
  }
};
</script>
