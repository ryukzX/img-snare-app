<script setup>
import TopNotice from "./components/header/TopNotice.vue";
import TopHeader from "./components/header/TopHeader.vue";
</script>

<template>
  <TopNotice />
  <TopHeader />
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");

body {
  color: var(--text-color);
  background: var(--bg-color);
  font-family: "Lato", sans-serif;
  font-size: 14px;
  height: 100vh;
  margin: auto;
}

main {
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
