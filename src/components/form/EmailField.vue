<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);

import { ref } from "vue";
import useFormValidation from "@modules/useFormValidation";

export default {
  setup() {
    let input = ref("");
    const { validateEmailField, errors } = useFormValidation();
    const validateInput = () => {
      validateEmailField("email", input.value);
    };
    return { input, errors, validateInput };
  },
};
</script>

<template>
  <div id="email-field">
    <div class="field">
      <fa icon="fa-envelope"></fa>
      <input
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="off"
        v-model="input"
        @keyup="validateInput"
        @blur="validateInput"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <div v-if="errors.email">
      {{ errors.email }}
    </div>
  </div>
</template>
