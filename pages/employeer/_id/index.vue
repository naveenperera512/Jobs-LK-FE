<template>
  <div>
    <div class="container">
      <div class="row card mt-3 shadow">
          <div class="col-12">
              <div class="p-2 mb-lg-0 ml-2">
                <div class="col-md-12">
                  <nuxt-link to="/employeer">
                    <b-button
                      class="bg-primary btn-sm mt-3"
                      type="submit"
                    >
                      Back
                    </b-button>
                  </nuxt-link>
                </div>
                <div class="row ml-1 mt-3">
                <table class="table table-borderless table-sm mb-0 col-md-6">
                  <tbody>
                    <tr>
                    <th scope="row">
                      Title:
                    </th>
                    <td>{{ vacancies.title }}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Employeer:
                    </th>
                    <td>{{ vacancies.employee_name }}</td>
                  </tr>
                  <th scope="row">
                    Job type:
                  </th>
                  <td>{{ jobs.name }}</td>
                  <tr>
                    <th scope="row">
                      Aplication deadline:
                    </th>
                    <td>{{ vacancies.deadline_date }}</td>
                  </tr>
                  </tbody>
                </table>
                <table class="table table-borderless table-sm mb-0 col-md-6">
                  <tbody>
                  <tr>
                    <th scope="row">
                      Location:
                    </th>
                    <td>{{ district.name }} , {{ cities.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Email address:
                    </th>
                    <td>{{ vacancies.employee_email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Phone :
                    </th>
                    <td>{{ vacancies.telephone }}</td>
                  </tr>
                  </tbody>
                </table>
                </div>
                </div>
                </div>
                <div>
                    <div class="row justify-content-center mb-3">
                      <h5>Description:</h5>
                    </div>
                    <div class="row justify-content-center mb-4 ml-4 mr-4">{{ vacancies.description }}</div>
          </div>
          <div class="row justify-content-center mb-4">
            <div class="shadow-lg">
              <img 
              id="myImage" 
              alt="product-img" 
              width="500px" 
              height="800px" 
              src="https://eschoolsl.s3.us-east-2.amazonaws.com/download.jfif">
            </div>
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
      vacancies: [],
      jobs: [],
      categories: [],
      district: [],
      cities: []
    }
  },

  created () {
    try {
      this.$axios.get(`api/vacancies/${this.$route.params.id}`)
        .then((response) => {
          this.vacancies = (response.data)
          this.categories = this.vacancies.category
          this.jobs = this.vacancies.jobs
          this.district = this.vacancies.district
          this.cities = this.vacancies.cities
          console.log(this.vacancies)
        })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}
</script>
