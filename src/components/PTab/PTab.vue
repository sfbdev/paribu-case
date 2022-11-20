<template>
  <div class="p-tab-wrapper">
    <ul>
      <li class="nav-item" v-for="tab in tabs" :key="tab.id">
        <a
          @click="currentTab(tab.id)"
          class="nav-link"
          :class="[tab.id == activeTab ? `active ${tab.id}` : '']"
          href="#tab-id"
        >
          {{ $t(tab.title) }}</a
        >
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane">
        <div
          class="login form"
          v-if="activeTab === 'login'"
          :class="activeTab === 'login' ? 'active' : ''"
        >
          <app-p-input
            type="email"
            :placeholder="$t('E-Post Adresiniz')"
          ></app-p-input>
          <app-p-input
            type="email"
            :placeholder="$t('Parolanız')"
          ></app-p-input>
          <app-p-button label="Giriş Yap"></app-p-button>
        </div>

        <div class="register form" v-if="activeTab === 'register'">
          <app-p-input
            type="text"
            :placeholder="$t('Adınız Soyadınız')"
          ></app-p-input>
          <app-p-input
            type="email"
            :placeholder="$t('E-Post Adresiniz')"
          ></app-p-input>
          <app-p-input
            type="email"
            :placeholder="$t('Parolanız')"
          ></app-p-input>
          <app-p-button class="secondary" label="Giriş Yap"></app-p-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PTab",

  data() {
    return {
      activeTab: "login",
    };
  },

  props: {
    tabs: {
      type: Array,
    },
  },

  methods: {
    currentTab(id) {
      this.activeTab = id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
