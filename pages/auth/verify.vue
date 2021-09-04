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
              Hey you're almost ready to start enjoying Template.
              Please check your email and verify confirmation message
            </p>
          </div>
          <!-- form -->

          <b-form @submit.prevent="resendEmailVerification">
            <!--alert-->
            <div>
              <b-alert
                variant="white"
              >
                <div class="text-success ">
                  Please check your Email .....
                </div>
              </b-alert>
            </div>

            <!-- login button -->
            <div class="form-group mb-0 text-center">
              <button class="btn btn-primary btn-block" type="submit">
                Verify email address
              </button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
