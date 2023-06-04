<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

import { ref } from "vue";
import useFormValidation from "@modules/useFormValidation";

export default {
  setup() {
    let input = ref("");
    const { validateNameField, errors } = useFormValidation();
    const validateInput = () => {
      validateNameField("Username", input.value);
    };
    return { input, errors, validateInput };
  },
};
</script>

<template>
  <div id="name-field">
    <div class="field">
      <fa icon="fa-user" style="margin-right: 5px"></fa>
      <input
        type="text"
        placeholder="Username"
        autocomplete="off"
        v-model="input"
        @keyup="validateInput"
        @blur="validateInput"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <div class="error" v-if="errors.Username">
      {{ errors.Username }}
    </div>
  </div>
</template>

<style scope>
#name-field input {
  padding: 5px 0;
  margin: 10px 0;
  box-shadow: 0 0 3px var(--shadow-color);
}

#name-field input::placeholder {
  padding-left: 5px;
}

.error {
  font-size: 12px;
}
</style>
