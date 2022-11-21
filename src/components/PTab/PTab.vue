<template>
  <div class="p-tab">
    <ul class="p-tab__list">
      <li class="nav-item" v-for="tab in tabs" :key="tab.id">
        <a
          @click="currentTab(tab.id)"
          class="nav-link"
          :class="[tab.id == activeTab ? `active nav-link--${tab.id}` : '']"
          :href="`#${tab.id}`"
        >
          {{ $t(tab.title) }}</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane">
        <div
          class="form"
          v-if="activeTab === 'login'"
          :class="activeTab === 'login' ? 'active' : ''"
        >
          <app-p-input
            v-model="loginModel.email"
            type="email"
            :placeholder="$t('E-Post Adresiniz')"
          ></app-p-input>
          <app-p-input
            v-model="loginModel.password"
            type="password"
            :placeholder="$t('Parolanız')"
          ></app-p-input>
          <app-p-button @click="submitLogin()" label="Giriş Yap"></app-p-button>
        </div>

        <div class="form" v-if="activeTab === 'register'">
          <app-p-input
            v-model="registerModel.fullName"
            type="text"
            :placeholder="$t('Adınız Soyadınız')"
          ></app-p-input>
          <app-p-input
            v-model="registerModel.email"
            type="email"
            :placeholder="$t('E-Post Adresiniz')"
          ></app-p-input>
          <app-p-input
            v-model="registerModel.password"
            type="password"
            :placeholder="$t('Parolanız')"
          ></app-p-input>
          <app-p-button
            :secondary="true"
            @click="submitRegister()"
            label="Giriş Yap"
          ></app-p-button>
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
