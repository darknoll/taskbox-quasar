<template>
  <q-drawer v-model="drawer" side="left" elevated content-class="bg-main">
    <q-scroll-area
      style="height: calc(100% - 180px); 
      margin-top: 180px;
      "
    >
      <q-list padding dark>
        <template v-for="(item, i) in items">
          <q-separator spaced v-if="item.divider" :key="i" />
          <q-item clickable v-ripple :key="i" v-else>
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              {{ item.text }}
            </q-item-section>
          </q-item>
        </template>
        <q-item class="absolute-bottom">
          <q-item-section>
            <q-btn color="primary" class="full-width" label="退出登录" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      style="height: 180px"
    >
      <q-list
        padding
        dark
        class="absolute-top bg-transparent q-mt-md text-center"
      >
        <q-item class="person-icon">
          <q-item-section>
            <q-img
              src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
              style="max-width: 64px"
              :ratio="1"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list padding dark class="absolute-bottom bg-transparent q-mb-sm">
        <q-item>
          <q-item-section avatar>
            <q-icon name="person"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>杨玉成</q-item-label>
            <q-item-label>图文档开发</q-item-label>
            <q-item-label>Caxa</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-img>
  </q-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { icon: 'lightbulb_outline', text: '启动流程' },
        { icon: 'touch_app', text: '流程定义' },
        { icon: 'free_breakfast', text: '流程监控' },
        { icon: 'notifications_active', text: '新任务提醒' },
        { divider: true },
        { icon: 'settings', text: '设置' },
        { icon: 'help', text: '帮助' }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
::v-deep .q-img__content > div {
  padding: 0;
}
.person-icon ::v-deep .column {
  flex-direction: row;
}
</style>
