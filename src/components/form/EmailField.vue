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
  <div id="email-field">
    <div class="field">
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
    </div>
    <div class="error" v-if="errors.Email">
      {{ errors.Email }}
    </div>
  </div>
</template>

<style scope>
#email-field input {
  padding: 5px 0;
  margin: 10px 0;
  box-shadow: 0 0 3px var(--shadow-color);
}

#email-field input::placeholder {
  padding-left: 5px;
}

.error {
  font-size: 12px;
}
</style>
