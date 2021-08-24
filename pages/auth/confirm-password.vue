<template>
  <!-- confirm password form -->
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5 mt-5">
      <div class="card">
        <div class="card-body p-4">
          <div class="text-center w-75 m-auto">
            <div class="auth-logo">
              <!-- <span class="logo-lg">
                <img
                  src=""
                  width="50"
                >
              </span>
            </div>
            <div class="logo-lg mt-2">
              <span>
                <img
                  src=""
                  width="200"
                >
              </span> -->
            </div>
          </div>

          <b-form @submit.prevent="confirmPassword">
            <!-- password -->
            <b-form-group label-for="input-password">
              <template #label>
                Password
              </template>
              <b-form-input
                id="input-password"
                type="password"
                placeholder="Enter password"
              />
              <b-form-invalid-feedback
                id="input-password-feedback"
              />
            </b-form-group>

            <!-- button-->
            <div class="form-group mb-0 text-center">
              <button
                class="btn btn-primary btn-block"
                type="submit"
              >
                Confirm Password
              </button>
            </div>
          </b-form>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">
            Back to <nuxt-link
              to="/account_settings/profile"
              class="text-primary font-weight-medium ml-1"
            >
              profile
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
