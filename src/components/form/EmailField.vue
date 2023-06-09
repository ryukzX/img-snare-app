<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);

import { ref } from "vue";
import useFormValidation from "@modules/useFormValidation";

export default (await import("vue")).defineComponent({
  setup() {
    let input = ref("");
    const { validateEmailField, errors } = useFormValidation();
    const validateInput = () => {
      validateEmailField("Email", input.value);
    };
    return { input, errors, validateInput };
  },
});
</script>

<template>
  <div id="form-field">
    <fa icon="fa-envelope" style="margin-right: 10px"></fa>
    <input
      type="email"
      placeholder="Email"
      autocomplete="off"
      v-model="input"
      @keyup="validateInput"
      @blur="validateInput"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="error" v-if="errors.Email">
      {{ errors.Email }}
    </div>
  </div>
</template>

<style scope>
@import "./FormField.scss";
</style>
