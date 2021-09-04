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
              Enter your email address and password to register.
            </p>
          </div>
          <!-- form -->

          <b-form
            @submit.prevent="register"
          >
            <!-- name -->
            <b-form-group label-for="name">
              <template #label>
                Name <span class="text-danger">*</span>
              </template>
              <b-form-input
                id="name"
                v-model="form.name"
                type="text"
                :state="errors && errors.name ? false : null"
                placeholder="Enter name"
                required
              />
              <b-form-invalid-feedback
                v-if="errors && errors.name"
                id="name-feedback"
              >
                {{ errors.name[0] }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- email -->
            <b-form-group label-for="email">
              <template #label>
                Email <span class="text-danger">*</span>
              </template>
              <b-form-input
                id="email"
                v-model="form.email"
                type="text"
                :state="errors && errors.email ? false : null"
                placeholder="Enter email"
                required
              />
              <b-form-invalid-feedback
                v-if="errors && errors.email"
                id="email-feedback"
              >
                {{ errors.email[0] }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- password -->
            <b-form-group label-for="password">
              <template #label>
                Password <span class="text-danger">*</span>
              </template>
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                :state="errors && errors.password ? false : null"
                placeholder="Enter password"
                required
              />
              <b-form-invalid-feedback
                v-if="errors && errors.password"
                id="password-feedback"
              >
                {{ errors.password[0] }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- Comfirm password -->
            <b-form-group label-for="password_confirmation">
              <template #label>
                Confirmed password <span class="text-danger">*</span>
              </template>
              <b-form-input
                id="password_confirmation"
                v-model="form.password_confirmation"
                type="password"
                :state="errors && errors.name ? false : null"
                placeholder="Enter password confirmation"
                required
              />
              <b-form-invalid-feedback
                v-if="errors && errors.password_confirmation"
                id="password_confirmation-feedback"
              >
                {{ errors.password_confirmation[0] }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- checkbox  -->
            <div class="form-group mb-3">
              <div class="custom-control custom-checkbox">
                <input id="checkbox-login" type="checkbox" class="custom-control-input" checked>
                <label class="custom-control-label" for="checkbox-login">I agree to the...</label>
              </div>
            </div>

            <!-- login button -->
            <div class="form-group mb-0 text-center">
              <button class="btn btn-primary btn-block" type="submit">
                Register
              </button>
            </div>
          </b-form>

          <!--footer-->
          <div
            class="d-flex justify-content-center mt-3"
          >
            Already have an account?
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
  layout: 'default',
  data () {
    return {
      errors: {},
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    async register () {
      try {
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('register', this.form)
        await this.$auth.loginWith('laravelSanctum', {
          data: { email: this.form.email, password: this.form.password }
        })
        await this.$router.replace({ path: '/' })
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
