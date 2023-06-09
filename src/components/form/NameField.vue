<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

import { ref } from "vue";
import useFormValidation from "@modules/useFormValidation";

export default (await import("vue")).defineComponent({
  setup() {
    let input = ref("");
    const { validateNameField, errors } = useFormValidation();
    const validateInput = () => {
      validateNameField("Username", input.value);
    };
    return { input, errors, validateInput };
  },
});
</script>

<template>
  <div id="form-field">
    <fa icon="fa-user" style="margin-right: 10px"></fa>
    <input
      type="text"
      placeholder="Username"
      autocomplete="off"
      v-model="input"
      @keyup="validateInput"
      @blur="validateInput"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="error" v-if="errors.Username">
      {{ errors.Username }}
    </div>
  </div>
</template>

<style scope>
@import "./FormField.scss";
</style>
