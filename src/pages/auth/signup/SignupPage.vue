<script>
import UsernameField from "../../../components/form/UsernameField.vue";
import EmailField from "../../../components/form/EmailField.vue";
import PasswordField from "../../../components/form/PasswordField.vue";

import useFormValidation from "../../../modules/useFormValidation";
import useSubmitButtonState from "../../../modules/useSubmitButtonState";

export default {
  components: {
    UsernameField,
    EmailField,
    PasswordField,
  },
  setup() {
    let user = reactive({
      username: "",
      email: "",
      password: "",
    });

    const { errors } = useFormValidation();
    const { isSignupButtonDisabled } = useSubmitButtonState(user, errors);

    return { user, isSignupButtonDisabled };
  },
};
</script>

<template>
  <section id="signup-form">
    <h1>Signup Page</h1>
    <form @submit.prevent novalidate class="form">
      <UsernameField v-model="user.username" />
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
