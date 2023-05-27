<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faMoon,
  faSun,
  faUser,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faMoon, faSun, faUser, faUpload);

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({});
const toggleDark = useToggle(isDark);

import { ref } from "vue";

const toggleMenu = ref(false);
</script>

<template>
  <header>
    <nav id="navbar">
      <div class="logo">
        <a href="/">ImgSnare</a>
      </div>
      <div class="menu-button">
        <button @click="toggleMenu = !toggleMenu">
          <fa icon="fa-bars" />
        </button>
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
      <div class="menu-content" v-show="toggleMenu">
        <p style="font-weight: bold; font-size: medium; margin-bottom: 5px;">Menu</p>
        <a href="/home">Home</a>
        <a href="/user/upload">Upload</a>
        <a href="/about">About</a>
        <a href="/tos">Terms of Service</a>
        <a href="/privacy">Privacy</a> <br />
        <p style="font-weight: bold; font-size: medium; margin-bottom: 5px">Profile</p>
        <a href="/auth/login">Login</a>
        <a href="/auth/signup">Signup</a>
      </div>
    </nav>
  </header>
</template>

<style scope>
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

#navbar {
  position: relative;
  display: grid;
  width: 100%;
  height: 48px;
  margin-bottom: 20px;
  padding: 0 20px;
  align-items: center;
  grid-template-areas: "logo theme-button upload-button profile-button menu-button";
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  box-shadow: 0 0 3px var(--shadow-color);
}

#navbar > .logo {
  grid-area: logo;
  font-family: "Itim", cursive;
  font-size: 32px;
  letter-spacing: -2px;
}

#navbar > .menu-button {
  grid-area: menu-button;
  justify-self: end;
  font-size: 24px;
}

#navbar > .menu-content {
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 15px 15px;
  margin-top: 350px;
  background: var(--bg-color);
  box-shadow: 0 0 3px var(--shadow-color);
}

#navbar > .menu-content > a {
  padding: 5px;
  display: block;
}

#navbar > .upload-button {
  grid-area: upload-button;
  justify-self: end;
  font-size: 24px;
}

#navbar > .profile-button {
  grid-area: profile-button;
  justify-self: end;
  font-size: 24px;
}

#navbar > .theme-button {
  grid-area: theme-button;
  justify-self: end;
  font-size: 24px;
}
</style>
