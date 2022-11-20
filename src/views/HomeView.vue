<template>
  <div class="page home">
    <app-p-card>
      <slot> <app-p-tab :tabs="tabs"></app-p-tab> </slot>
    </app-p-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      tabs: [
        {
          id: "login",
          title: "Giriş Yap",
        },
        {
          id: "register",
          title: "Üye Ol",
        },
      ],
    };
  },
};
</script>
