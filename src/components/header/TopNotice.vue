<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe, faServer } from "@fortawesome/free-solid-svg-icons";

library.add(faGlobe, faServer);

import { ref } from "vue";

const apiStatus = ref({});
const webStage = ref({});

fetch(`/api/server`)
  .then((r) => r.json())
  .then(({ message }) => {
    apiStatus.value = message;
  });

fetch(`/api/web`)
  .then((r) => r.json())
  .then(({ message }) => {
    webStage.value = message;
  });
</script>

<template>
  <div id="notice">
    <div class="api-status">
      <fa icon="fa-server" style="margin-right: 5px" />Server status:
      <span class="status">{{ apiStatus }}</span>
    </div>
    <div class="web-stage">
      <fa icon="fa-globe" style="margin-right: 5px" />Web stage:
      <span class="stage">{{ webStage }}</span>
    </div>
  </div>
</template>

<style scope>
#notice {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 24px;
  margin-bottom: 20px;
  box-shadow: 0 0 3px var(--shadow-color);
}

.api-status,
.web-stage {
  font-size: 12px;
  font-weight: 700;
}

.status {
  color: #22c55e;
  margin-left: 3px
}

.stage {
  color: #3b82f6;
  margin-left: 3px
}
</style>
