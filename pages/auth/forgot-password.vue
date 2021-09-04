<template>
  <!-- Login form -->
  <div class="row justify-content-center mt-5">
    <div class="col-md-8 col-lg-6 col-xl-4 mt-5">
      <div class="card">
        <div class="card-body p-4">
          <div class="text-center w-75 m-auto">
            <div class="auth-logo">
              <div class="logo logo-dark text-center">
                <div class="logo-lg mt-5 ">
                  <img src="~/assets/images/favicon.png" width="50">
                </div>
                <div class="logo-lg mt-4">
                  <img src="~/assets/images/logo-new.png" width="200">
                </div>
              </div>
            </div>
            <p class="text-muted mb-4 mt-3">
              Enter your email address forgot your password.
            </p>
          </div>
          <b-card>
            <!-- form -->
            <b-form @submit.prevent="sendForgotPasswordEmail">
              <div class="mb-2 text-center">
                If you can't remember your password. please provide your email address and we will send you
                a link which you use to change your password.
              </div>

              <!--alert-->
              <div>
                <b-alert
                  variant="white"
                  fade
                  :show="showDismissibleAlert"
                >
                  <div class="text-success ">
                    Please check your Email .....
                  </div>
                </b-alert>
              </div>

              <!-- email -->
              <b-form-group label-for="input-email">
                <template #label>
                  Email
                </template>
                <b-form-input
                  id="input-email"
                  v-model="form.email"
                  type="text"
                  :state="errors && errors.email ? false : null"
                  placeholder="Enter Email"
                />
                <b-form-invalid-feedback
                  v-if="errors && errors.email"
                  id="input-email-feedback"
                >
                  {{ errors.email[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- login button -->
              <div class="form-group mb-0 text-center">
                <button class="btn btn-primary btn-block" type="submit">
                  send reset link
                </button>
              </div>
            </b-form>
          </b-card>

          <!--footer-->
          <div class="d-flex justify-content-center mt-3">
            Back to
            <nuxt-link
              :to="{ path: '/auth/login'}"
              class="px-1 "
            >
              <u>Sign in</u>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ $auth, redirect }) {
    if ($auth.loggedIn) {
      redirect('/')
    }
  },
  data () {
    return {
      errors: {},
      showDismissibleAlert: false,
      form: {
        email: ''
      }
    }
  },
  methods: {
    async sendForgotPasswordEmail () {
      try {
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('forgot-password', this.form)

        this.showDismissibleAlert = true
      } catch (error) {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }
    }
  }
}
</script>

<style>

</style>
