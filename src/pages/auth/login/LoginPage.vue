<script>
import { reactive } from "vue";
import EmailField from "@components/form/EmailField.vue";
import PasswordField from "@components/form/PasswordField.vue";

import useFormValidation from "@modules/useFormValidation";
import useSubmitButtonState from "@modules/useSubmitButtonState";

export default {
  components: {
    EmailField,
    PasswordField,
  },
  setup() {
    let user = reactive({
      email: "",
      password: "",
    });

    const { errors } = useFormValidation();
    const { isSignupButtonDisabled } = useSubmitButtonState(user, errors);

    const loginButtonPressed = () => {
      console.log(user);
    };

    return {
      user,
      isSignupButtonDisabled,
      loginButtonPressed,
    };
  },
};
</script>

<template>
  <section id="login-form">
    <h1>Login Page</h1>
    <form @submit.prevent class="form">
      <EmailField v-model="user.email" />
      <PasswordField v-model="user.password" />
      <button :disabled="isSignupButtonDisabled" @click="loginButtonPressed">
        Login
      </button>
    </form>
  </section>
</template>

<style scoped>
#login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 450px;
}
</style>
