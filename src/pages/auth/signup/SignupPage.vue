<script>
import { reactive } from "vue";
import NameField from "@components/form/NameField.vue";
import EmailField from "@components/form/EmailField.vue";
import PasswordField from "@components/form/PasswordField.vue";

import useFormValidation from "@modules/useFormValidation";
import useSubmitButtonState from "@modules/useSubmitButtonState";

export default {
  components: {
    NameField,
    EmailField,
    PasswordField,
  },
  setup() {
    let user = reactive({
      name: "",
      email: "",
      password: "",
    });

    const { error } = useFormValidation();
    const { isSignupButtonDisabled } = useSubmitButtonState(user, error);
    const signUpButtonPressed = () => {
      console.log(user);
    };
    return { user, isSignupButtonDisabled, signUpButtonPressed };
  },
};
</script>

<template>
  <section id="signup-form">
    <h1>Signup Page</h1>
    <form @submit.prevent class="form">
      <NameField v-model="user.name" />
      <EmailField v-model="user.email" />
      <PasswordField v-model="user.password" />
      <button :disabled="isSignupButtonDisabled" @click="signUpButtonPressed">
        Signup
      </button>
    </form>
  </section>
</template>

<style scoped>
#signup-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 450px;
}
</style>
