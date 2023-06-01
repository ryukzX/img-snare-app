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
      validatePasswordField("Password", input.value);
    };
    return { input, errors, validateInput };
  },
};
</script>

<template>
  <div id="password-field">
    <div class="field">
      <fa icon="fa-lock" style="margin-right: 5px"></fa>
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
    <div class="error" v-if="errors.Password">
      {{ errors.Password }}
    </div>
  </div>
</template>

<style scope>
#password-field input {
  padding: 10px 0;
}

.error {
  font-size: 12px;
}
</style>
