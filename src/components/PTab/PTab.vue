<template>
  <div class="p-tab">
    <ul class="p-tab__list">
      <li class="p-tab__list__item" v-for="tab in tabs" :key="tab.id">
        <a
          @click="currentTab(tab.id)"
          class="p-tab__list__item__link"
          :class="[
            tab.id == activeTab
              ? `active p-tab__list__item__link--${tab.id}`
              : '',
          ]"
          :href="`#${tab.id}`"
        >
          {{ $t(tab.title) }}</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-content__pane">
        <div
          class="form"
          v-if="activeTab === 'login'"
          :class="activeTab === 'login' ? 'active' : ''"
        >
          <p-input
            v-model="loginModel.email"
            type="email"
            :placeholder="$t('E-Posta Adresiniz')"
          ></p-input>
          <p-input
            v-model="loginModel.password"
            type="password"
            :placeholder="$t('Parolanız')"
          ></p-input>
          <p-button @click="submitLogin()" :label="$t('Giriş Yap')"></p-button>
        </div>

        <div class="form" v-if="activeTab === 'register'">
          <p-input
            v-model="registerModel.fullName"
            type="text"
            :placeholder="$t('Adınız Soyadınız')"
          ></p-input>
          <p-input
            v-model="registerModel.email"
            type="email"
            :placeholder="$t('E-Posta Adresiniz')"
          ></p-input>
          <p-input
            v-model="registerModel.password"
            type="password"
            :placeholder="$t('Parolanız')"
          ></p-input>
          <p-button
            :secondary="true"
            @click="submitRegister()"
            :label="$t('Üye Ol')"
          ></p-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PTab",

  data() {
    return {
      activeTab: "login",
      registerModel: {
        email: null,
        fullName: null,
        password: null,
      },
      loginModel: {
        email: null,
        password: null,
      },
    };
  },

  props: {
    tabs: {
      type: Array,
    },
  },

  methods: {
    ...mapActions({
      register: "register",
      login: "login",
    }),
    currentTab(id) {
      this.activeTab = id;
    },

    submitLogin() {
      this.login(this.loginModel);
    },

    submitRegister() {
      this.register(this.registerModel);
    },
  },
};
</script>

<style lang="scss" scoped></style>
