<template>
  <q-tab-panel :name="name">
    <q-page padding>
      <q-tree :nodes="nodes" node-key="label" default-expand-all />
    </q-page>
  </q-tab-panel>
</template>

<script>
import { getFileTypeImg } from '@/utils/helper';
export default {
  name: 'AssObj',
  props: {
    name: {
      type: String,
      default: ''
    },
    assObjs: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      nodes: []
    };
  },
  methods: {
    handleClick(node) {
      console.log(node);
    },
    getTreeNodes() {
      this.nodes = [
        {
          label: `任务关联对象(${this.assObjs.length})`,
          header: 'root',
          icon: 'tv',
          selectable: false,
          children: []
        }
      ];
      this.assObjs.forEach(obj => {
        let node = {};
        node.label = obj.name;
        node.icon = getFileTypeImg(obj.ClassID);
        node.selectable = true;
        node.handler = this.handleClick;
        this.nodes[0].children.push(node);
      });
    }
  },
  created() {
    this.getTreeNodes();
  }
};
</script>
