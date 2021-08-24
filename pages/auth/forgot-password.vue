<template>
  <!-- forgot password form -->
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
            <p class="text-muted mb-4 mt-3">
              Enter your email address and we'll send you an email with instructions to reset your password.
            </p>
          </div>

          <b-form @submit.prevent="sendForgotPasswordEmail">
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
                type="text"
                placeholder="Enter Email"
              />
              <b-form-invalid-feedback
                id="input-email-feedback"
              />
            </b-form-group>

            <!-- button-->
            <div class="form-group mb-0 text-center">
              <button
                class="btn btn-primary btn-block"
                type="submit"
              >
                Send Reset Link
              </button>
            </div>
          </b-form>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">
            Back to <nuxt-link
              to="/"
              class="text-primary font-weight-medium ml-1"
            >
              Log in
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
