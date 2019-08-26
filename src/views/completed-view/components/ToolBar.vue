<template>
  <div>
    <q-btn dense flat round icon="sort">
      <sort-menu />
    </q-btn>
    <q-btn dense flat round icon="filter_list">
      <filter-menu />
    </q-btn>
    <q-btn dense flat round icon="add">
      <more-menu />
    </q-btn>
  </div>
</template>

<script>
import SortMenu from '../components/SortMenu';
import FilterMenu from '../components/FilterMenu';
import MoreMenu from '../components/MoreMenu';
export default {
  name: 'ToolBar',
  components: {
    SortMenu,
    FilterMenu,
    MoreMenu
  }
};
</script>
