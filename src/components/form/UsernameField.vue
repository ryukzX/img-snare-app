<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

import { ref } from "vue";
import useFormValidation from "../../modules/useFormValidation";

export default {
  setup() {
    let input = ref("");

    const { validateUsernameField, errors } = useFormValidation();

    const validateInput = () => {
      validateUsernameField("username", input.value);
    };
    return { input, errors, validateInput };
  },
};
</script>

<template>
  <div id="username-field">
    <div class="field">
      <fa icon="fa-user"></fa>
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
    <div v-if="errors.username">
      {{ errors.username }}
    </div>
  </div>
</template>
