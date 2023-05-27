<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe, faServer } from "@fortawesome/free-solid-svg-icons";

library.add(faGlobe, faServer);

import { ref } from "vue";

const apiStatus = ref({});
const webStage = ref({});

fetch(`/api/v1/server`)
  .then((r) => r.json())
  .then(({ message }) => {
    apiStatus.value = message;
  });

fetch(`/api/v1/web`)
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
  display: grid;
  width: 100%;
  height: 24px;
  margin-bottom: 9px;
  align-items: center;
  text-align: center;
  grid-template-areas: "notice stage";
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  box-shadow: 0 0 3px var(--shadow-color);
}

#notice > .api-status,
.web-stage {
  grid-area: notice stage;
  font-size: 12px;
  font-weight: 700;
}

.status {
  color: #22c55e;
}

.stage {
  color: #3b82f6;
}
</style>
