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
    <h1>Login</h1>
    <form @submit.prevent class="form">
      <EmailField v-model="user.email" />
      <PasswordField v-model="user.password" />
      <button
        class="button-primary"
        :disabled="isSignupButtonDisabled"
        @click="loginButtonPressed"
      >
        Login
      </button>
    </form>
  </section>
</template>

<style scoped>
#login-form,
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 360px;
  padding: 20px;
  box-shadow: 0 0 3px var(--shadow-color);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.button-primary {
  color: var(--bg-color);
  background: var(--text-color);
  margin-top: 15px;
  padding: 5px 10px;
}
</style>
