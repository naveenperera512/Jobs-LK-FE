<!--<template>-->
<!--  <div>-->
<!--    <div class="row bg-info mb-5">-->
<!--      <b-col-->
<!--        md="1"-->
<!--      />-->
<!--      <b-col-->
<!--        md="10"-->
<!--      />-->
<!--      <b-col-->
<!--        md="1"-->
<!--      />-->
<!--    </div>-->

<!--    <div class="row">-->
<!--      <b-col-->
<!--        md="2"-->
<!--      />-->
<!--      <b-col-->
<!--        md="8"-->
<!--      >-->
<!--        <div>-->
<!--          <div>-->
<!--            <h1>category</h1>-->
<!--            {{ $route.params.id }}-->
<!--            <h3>{{ categories.name }}</h3>-->
<!--          </div>-->
<!--        </div>-->
<!--      </b-col>-->
<!--      <b-col-->
<!--        md="2"-->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->

<!--  components: {-->
<!--  },-->
<!--  layout: 'auth',-->

<!--  data () {-->
<!--    return {-->
<!--      categories: []-->
<!--    }-->
<!--  },-->

<!--  created () {-->
<!--    try {-->
<!--      this.$axios.get(`api/categories/${this.$route.params.id}`)-->
<!--        .then((response) => {-->
<!--          this.categories = (response.data).data-->
<!--        })-->
<!--    } catch (error) {-->
<!--      // eslint-disable-next-line no-console-->
<!--      console.log(error)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<template>-->
<!--  <div>-->
<!--    <div class="row mb-5">-->
<!--      <b-col-->
<!--        md="3"-->
<!--      />-->
<!--      <b-col-->
<!--        md="6"-->
<!--      >-->
<!--        <div class="row">-->
<!--          <div class="col-lg-8">-->
<!--            <div class="row mb-3">-->
<!--              <div>-->
<!--                <div class="p-2 mb-lg-0 ml-5">-->
<!--                  <div>-->
<!--                    <nuxt-link to="/client" class="btn bg-info ml-2">-->
<!--                      Back-->
<!--                    </nuxt-link>-->
<!--                  </div>-->
<!--                  <table class="table table-borderless table-sm mb-0">-->
<!--                    <tbody>-->
<!--                      <tr>-->
<!--                        <th scope="row">-->
<!--                          Employeer:-->
<!--                        </th>-->
<!--                        <td>{{ categories.employee_name }}</td>-->
<!--                      </tr>-->
<!--                      <th scope="row">-->
<!--                        Job type:-->
<!--                      </th>-->
<!--&lt;!&ndash;                      <td>{{ categories.jobs.id }}</td>&ndash;&gt;-->
<!--                      <tr>-->
<!--                        <th scope="row">-->
<!--                          Aplication deadline:-->
<!--                        </th>-->
<!--                        <td>2021-10-31</td>-->
<!--                      </tr>-->
<!--                      <tr>-->
<!--                        <th scope="row">-->
<!--                          Location:-->
<!--                        </th>-->
<!--&lt;!&ndash;                        <td>{{ categories.district.name }} , {{ categories.cities.name }}</td>&ndash;&gt;-->
<!--                      </tr>-->
<!--                      <tr>-->
<!--                        <th scope="row">-->
<!--                          Email address:-->
<!--                        </th>-->
<!--                        <td>{{ categories.employee_email }}</td>-->
<!--                      </tr>-->
<!--                      <tr>-->
<!--                        <th scope="row">-->
<!--                          Phone :-->
<!--                        </th>-->
<!--                        <td>{{ categories.telephone }}</td>-->
<!--                      </tr>-->
<!--                    </tbody>-->
<!--                  </table>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="row justify-content-center ml-5">-->
<!--                <div>-->
<!--                  <img id="myImage" alt="product-img" width="600px" height="1000px" src="~/assets/images/vacancy.png">-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </b-col>-->
<!--      <b-col-->
<!--        md="3"-->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->

<!--  components: {-->
<!--  },-->
<!--  layout: 'auth',-->

<!--  data () {-->
<!--    return {-->
<!--      categories: []-->
<!--    }-->
<!--  },-->

<!--  created () {-->
<!--    try {-->
<!--      this.$axios.get(`api/vacancies/${this.$route.params.id}`)-->
<!--        .then((response) => {-->
<!--          this.categories = (response.data)-->
<!--          console.log(this.categories)-->
<!--        })-->
<!--    } catch (error) {-->
<!--      // eslint-disable-next-line no-console-->
<!--      console.log(error)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<template>
  <div>
    <b-form>
      <div class="card mt-2">
        <div class="card-body pb-1">
          <div class="row">
            <div class="col-md-7">
              <div class="ml-2">
                <h4 class="bx-bold">
<!--                  {{ category.data.id }}-->
                  {{ category.title }}
                </h4>
                <h4 class="bx-bold">
                  {{ jobs.name }}
                </h4>
              </div>
            </div>
            <div class="col-md-2 mt-3">
            </div>
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {

  components: {
  },
  layout: 'auth',

  data () {
    return {
      category: [],
      jobs: []
    }
  },

  created () {
    try {
      this.$axios.get(`api/vacancies/${this.$route.params.id}`)
        .then((response) => {
          this.category = (response).data
          this.jobs = this.category.jobs
          console.log(this.category)
        })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}
</script>
