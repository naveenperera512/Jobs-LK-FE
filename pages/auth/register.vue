<template>
  <!-- Register  form -->
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5 mt-5">
      <div class="card">
        <div class="card-body p-4">
          <div class="text-center w-75 m-auto">
            <div class="auth-logo">
              <div class="logo logo-dark text-center">
                <!-- <span class="logo-lg">
                  <img
                    src=""
                    width="50"
                  >
                </span>
                <span class="logo-lg mt-2">
                  <img
                    src=""
                    width="200"
                  >
                </span> -->
              </div>
            </div>
            <p class="text-muted mb-4 mt-3">
              Don't have an account? Create your own account, it takes less than a minute
            </p>
          </div>
          <!-- form -->
          <b-form @submit.prevent="register">
            <!-- username-->
            <b-form-group label-for="input-username">
              <template #label>
                Username
              </template>
              <b-form-input
                id="input-username"
                type="text"
                placeholder="Enter username"
              />
              <b-form-invalid-feedback
                id="input-username-feedback"
              />
            </b-form-group>

            <!-- email address-->
            <b-form-group label-for="input-email">
              <template #label>
                Email
              </template>
              <b-form-input
                id="input-email"
                type="email"
                placeholder="Enter Email"
              />
              <b-form-invalid-feedback
                id="input-email-feedback"
              />
            </b-form-group>

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

            <!-- Comfirm password -->
            <b-form-group label-for="password_confirmation">
              <template #label>
                Confirmed password <span class="text-danger">*</span>
              </template>
              <b-form-input
                id="password_confirmation"
                type="password"
                placeholder="Enter password confirmation"
                required
              />
              <b-form-invalid-feedback
                id="password_confirmation-feedback"
              />
            </b-form-group>

            <!-- checkbox  -->
            <div class="form-group mb-3">
              <div class="custom-control custom-checkbox">
                <input
                  id="checkbox-login"
                  type="checkbox"
                  class="custom-control-input"
                  checked
                >
                <label
                  class="custom-control-label"
                  for="checkbox-login"
                >I accept Terms and Conditions</label>
              </div>
            </div>

            <!-- login button -->
            <div class="form-group mb-0 text-center">
              <button
                class="btn btn-primary btn-block"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <!-- social media -->
            <div class="text-center">
              <ul class="social-list list-inline mt-3 mb-0">
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item border-purple text-purple"
                  >
                    <i class="mdi mdi-facebook" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item border-danger text-danger"
                  >
                    <i class="mdi mdi-google" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item border-info text-info"
                  >
                    <i class="mdi mdi-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </b-form>
        </div>
      </div>

      <!-- sign in  -->
      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">
            Already have account?
            <nuxt-link
              to="/"
              class="text-primary font-weight-medium ml-1"
            >
              Sign In
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
