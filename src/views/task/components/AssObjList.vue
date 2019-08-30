<template>
  <q-tab-panel :name="name">
    <q-page>
      <q-pull-to-refresh @refresh="refresh">
        <q-list separator style="min-height: 100px">
          <template v-for="(item, index) in assObjs">
            <q-item
              :key="index"
              v-ripple
              :clickable="isCanBeRead(item)"
              @click="onClick"
            >
              <q-item-section avatar>
                <q-img
                  :src="getFileTypeImg(item.ClassID)"
                  :ratio="1"
                  style="width: 16px"
                ></q-img>
              </q-item-section>
              <q-item-section>{{ item.name }}</q-item-section>
              <template v-if="isCanBeRead(item)">
                <q-item-section side>
                  <q-badge color="blue">
                    可读
                  </q-badge>
                </q-item-section>
              </template>
            </q-item>
          </template>
          <q-separator />

          <q-inner-loading :showing="visible">
            <q-spinner-puff size="50px" color="primary" />
          </q-inner-loading>
        </q-list>
      </q-pull-to-refresh>
    </q-page>
  </q-tab-panel>
</template>

<script>
import { mapActions } from 'vuex';
import { getFileTypeImg } from '@/utils/helper';
export default {
  name: 'AssObjList',
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      assObjs: [],
      visible: true
    };
  },
  methods: {
    ...mapActions('task', ['getTaskAssObjs']),
    getFileTypeImg,
    fetchData() {
      this.getTaskAssObjs(this.id)
        .then(response => {
          this.assObjs = response.data.data;
        })
        .catch(() => {
          console.log('get task ass objs failed!');
        })
        .finally(() => {
          this.visible = false;
        });
    },
    refresh(done) {
      this.getTaskAssObjs(this.id)
        .then(response => {
          this.assObjs = response.data.data;
        })
        .catch(() => {
          console.log('get task ass objs failed!');
        })
        .finally(() => {
          done();
        });
    },
    isCanBeRead(assObj) {
      let results = assObj.name.match(/.*\.pdf/);
      return results !== null;
    },
    onClick() {
      console.log('test');
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
::v-deep .q-item__section--avatar {
  min-width: 0 !important;
}
</style>
