<template>
  <div class="my-row row items-center justify-center q-pa-md">
    <div class="col-xs-12 col-sm-6 col-md-4">
      <q-card class="my-card text-white shadow-12">
        <q-card-section class="bg-primary">
          <div class="text-h6">任务箱登录</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input
            ref="username"
            v-model="username"
            label="请输入用户名 *"
            clearable
            :rules="[val => (val && val.length > 0) || '用户名不能为空']"
          >
            <template v-slot:before>
              <q-avatar icon="person" font-size="24px"> </q-avatar>
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ username }}
              </div>
            </template>
          </q-input>
          <q-input
            ref="password"
            v-model="password"
            type="password"
            label="请输入密码"
            clearable
          >
            <template v-slot:before>
              <q-avatar icon="lock" font-size="24px"> </q-avatar>
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ password }}
              </div>
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            style="width:70px"
            flat
            color="primary"
            class="q-mr-xs text-primary"
            @click="onReset"
            >重置</q-btn
          >
          <q-btn
            style="width:70px"
            color="primary"
            class="q-mr-xs text-primary"
            @click="onSubmit"
            >登录</q-btn
          >
          <q-inner-loading :showing="visible">
            <q-spinner-puff size="50px" color="primary" />
          </q-inner-loading>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      visible: false
    };
  },
  methods: {
    onReset() {
      this.username = '';
      this.password = '';
      this.$refs.username.resetValidation();
      this.$refs.password.resetValidation();
    },
    onSubmit() {
      this.$refs.username.validate();
      this.$refs.password.validate();

      if (this.$refs.username.hasError || this.$refs.password.hasError) {
        this.formHasError = true;
      } else {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
          this.$q.notify({
            icon: 'done',
            color: 'positive',
            message: '登录成功！'
          });
          this.$router.push({
            name: 'index',
            params: {
              username: this.username
            }
          });
        }, 3000);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-row
  height calc(100vh)
.my-card
  width 100%
  max-height 350px
</style>
