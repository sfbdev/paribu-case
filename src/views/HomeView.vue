<template>
  <div class="page home">
    <p-card>
      <slot> <p-tab :tabs="tabs"></p-tab> </slot>
    </p-card>
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
