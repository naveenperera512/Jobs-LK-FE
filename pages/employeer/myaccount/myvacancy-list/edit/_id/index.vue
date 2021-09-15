<template>
  <div class="container card mt-3">
    <div class="row container card-body ">
      <div class="col-lg-12">
        <div>
          <h4 class="header-title mb-3">
            <NuxtLink to="/employeer/myaccount">
              <b-button
                class="bg-primary btn-sm mr-2"
                  type="submit"
              >
                Back
              </b-button>
            </NuxtLink>
            <span class="mr-3">
              Fill in the details
            </span>
          </h4>
          <h6 class="sub-header">
            About the job
          </h6>

          <b-form @submit.prevent="vacancies">

            <div class="row mb-2">
            <table class="table table-borderless table-sm mb-0 col-md-6 ml-1">
            <tbody>
                    <tr>
                    <th scope="row">
                      Title:
                    </th>
                    <td>{{ vacans.title }}</td>
                  </tr>
                  </tbody>
                </table>

            <table class="table table-borderless table-sm mb-0 col-md-6 ml-1">
            <tbody>
                    <tr>
                  <th scope="row">
                    Job type:
                  </th>
                  <td>{{ jobs.name }}</td>
                  </tr>
                  </tbody>
                  </table>

            <table class="table table-borderless table-sm mb-0 col-md-6 ml-1">
            <tbody> 
                  <tr>
                  <th scope="row">
                    Location:
                  </th>
                  <td>{{ district.name }} , {{ cities.name }}</td>
                  </tr>
                  </tbody>
                  </table>
            </div>

            <!-- description -->
            <div class="row">
            <b-form-group class="col-md-12" label-for="input-description">
                <template #label>
                  Description
                  <span class="text-danger">*</span>
                </template>
                <b-form-textarea 
                  id="description"
                  rows="4"
                  v-model="vacans.description"
                  type="text"
                  :state="errors && errors.description ? false : null"
                  placeholder="Description">
                </b-form-textarea>
              
                <b-form-invalid-feedback
                  v-if="errors && errors.description"
                  id="input-description-feedback"
                >
                  {{ errors.description[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </div>

            <!-- file upload -->
            <!-- <div class="row">
              <div class="col-md-12">
                <div class="form-group mt-3">
                  <label>Image Upload</label>
                  <p class="text-muted font-13 m-b-30">DropzoneJS is an open source library that provides drag’n’drop
                    file
                    uploads with image previews.</p>
                  <vue-dropzone id="cv_image" ref="myVueDropzone" :options="dropzoneOptions" v-model="form.cv_image" :use-custom-slot="true">
                    <div class="dz-message needsclick">
                      <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                      <h3>Drop files here or click to upload.</h3>
                      <span class="text-muted font-13">(This is just a demo cv_image. Selected files are
                                <strong>not</strong> actually uploaded.)</span>
                    </div>
                  </vue-dropzone>

                </div>
              </div>
            </div> -->

            <h6 class="sub-header">
              Employee details
            </h6>

            <div class="row">
              <!-- employee name-->
              <b-form-group class="col-md-6" label-for="input-employee_name">
                <template #label>
                  Employeer name
                  <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="input-employee_name"
                  v-model="vacans.employee_name"
                  type="text"
                  :state="errors && errors.employee_name ? false : null"
                  placeholder="Enter Name"
                />
                <b-form-invalid-feedback
                  v-if="errors && errors.employee_name"
                  id="input-employee_name-feedback"
                >
                  {{ errors.employee_name[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- email address-->
              <b-form-group class="col-md-6" label-for="employee_email">
                <template #label>
                  Email Address
                  <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="employee-email"
                  v-model="vacans.employee_email"
                  type="email"
                  :state="errors && errors.employee_email ? false : null"
                  placeholder="Enter your email"
                />
                <b-form-invalid-feedback
                  v-if="errors && errors.employee_email"
                  id="employee-email-feedback"
                >
                  {{ errors.employee_email[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- telephone-->
              <b-form-group class="col-md-6" label-for="telephone">
                <template #label>
                  Telephone
                  <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="telephone"
                  v-model="vacans.telephone"
                  type="phone"
                  :state="errors && errors.telephone ? false : null"
                  placeholder="(xx) xxx xxxx xxx"
                />
                <b-form-invalid-feedback
                  v-if="errors && errors.telephone"
                  id="telephone-feedback"
                >
                  {{ errors.telephone[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </div>

            <!-- button -->
            <div class="form-group mb-0 d-flex justify-content-end">
              <button
                class="btn btn-success "
                type="submit"
              >
                Post vacancy
              </button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  components: {
  },

  data () {
    return {
      errors: {},
      vacans: {
        employee_name: 'naveen',
        employee_email: '',
        telephone: '',
        description: '',
        is_approved: '0'
      },
      jobs: [],
      categories: [],
      district: [],
      cities: [],
    }
  },

  created () {
    try {
      this.$axios.get(`api/vacancies/${this.$route.params.id}`)
        .then((response) => {
          this.vacans = (response.data)
          this.categories = this.vacans.category
          this.jobs = this.vacans.jobs
          this.district = this.vacans.district
          this.cities = this.vacans.cities
          console.log(this.vacans)
        })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  methods: {
    async vacancies () {
      try {
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.put(`api/employee/vacancies/${this.$route.params.id}`, this.vacans)
        await this.$router.replace({ path: '/employeer/myaccount' })
      } catch (error) {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }
    }
  }
}
</script>