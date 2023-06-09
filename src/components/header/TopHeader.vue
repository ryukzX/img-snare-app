<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faMoon,
  faSun,
  faUser,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faMoon, faSun, faUser, faUpload);

const isDark = useDark({});
const toggleDark = useToggle(isDark);
const toggleMenu = ref(false);
</script>

<template>
  <header>
    <nav id="navbar">
      <div class="logo">
        <a href="/">ImgSnare</a>
      </div>
      <div class="upload-button">
        <a href="/user/upload">
          <fa icon="fa-upload" />
        </a>
      </div>
      <div class="profile-button">
        <a href="/user/profile">
          <fa icon="fa-user" />
        </a>
      </div>
      <div class="theme-button">
        <button @click="toggleDark()">
          <fa v-if="isDark" icon="fa-sun" />
          <fa v-else icon="fa-moon" />
        </button>
      </div>
      <div class="menu-button">
        <button @click="toggleMenu = !toggleMenu">
          <fa icon="fa-bars" />
        </button>
      </div>
      <div class="menu-content" v-show="toggleMenu">
        <p style="font-weight: bold; font-size: medium; margin-bottom: 5px">
          Menu
        </p>
        <a class="menu-link" href="/home">Home</a>
        <a class="menu-link" href="/user/upload">Upload</a>
        <a class="menu-link" href="/about">About</a>
        <a class="menu-link" href="/tos">Terms of Service</a>
        <a class="menu-link" href="/privacy">Privacy</a> <br />
        <p style="font-weight: bold; font-size: medium; margin-bottom: 5px">
          Profile
        </p>
        <a class="menu-link" href="/auth/login">Login</a>
        <a class="menu-link" href="/auth/signup">Signup</a>
      </div>
    </nav>
  </header>
</template>

<style scope>
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

#navbar {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  height: 48px;
  margin-bottom: 20px;
  padding: 0 20px;
  box-shadow: 0 0 3px var(--shadow-color);
}

.logo {
  font-family: "Itim", cursive;
  font-size: 32px;
  letter-spacing: -2px;
  margin-right: auto;
}

.menu-button,
.upload-button,
.profile-button,
.theme-button {
  font-size: 24px;
}

.menu-content {
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 15px 20px;
  top: 140%;
  right: 0;
  background: var(--bg-color);
  box-shadow: 0 0 3px var(--shadow-color);
}

.menu-link {
  padding: 5px;
  display: block;
}
</style>
