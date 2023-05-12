<template>
  <!-- App Header -->
  <div class="appHeader no-border transparent header-app">
    <div class="left">
      <!-- <a href="#" class="headerButton goBack">
<ion-icon name="chevron-back-outline"></ion-icon>
</a> -->
      <button id="headerBtn" @click="back" class="headerButton goBack">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
    </div>
    <div class="pageTitle">
      <h1 class="pTitle">{{ title }}</h1>
    </div>
    <div class="right"></div>
  </div>
  <!-- * App Header -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
#headerBtn {
  background-color: #fe5919;
  color: white;
  border: none;
}

.header-app {
  position: fixed;
}
</style>