<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock } from "@fortawesome/free-solid-svg-icons";

library.add(faLock);

import { ref } from "vue";
import useFormValidation from "@modules/useFormValidation";

export default {
  setup() {
    let input = ref("");
    const { validatePasswordField, errors } = useFormValidation();
    const validateInput = () => {
      validatePasswordField("password", input.value);
    };
    return { input, errors, validateInput };
  },
};
</script>

<template>
  <div class="password-field">
    <div class="field">
      <fa icon="fa-lock"></fa>
      <input
        type="password"
        placeholder="Password"
        autocomplete="off"
        v-model="input"
        @keyup="validateInput"
        @blur="validateInput"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <div v-if="errors.password">
      {{ errors.password }}
    </div>
  </div>
</template>
