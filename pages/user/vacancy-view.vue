<template>
  <div>
    <div class="row mb-5">
      <b-col
        md="3"
      />
      <b-col
        md="6"
      >
        <div class="row">
          <div class="col-lg-8">
            <div class="row mb-3">
                <div>
                  <div class="p-2 mb-lg-0 ml-5">
                    <div>
                      <nuxt-link to="/user" class="btn bg-info ml-2">
                        Back
                      </nuxt-link>
                    </div>
                    <table class="table table-borderless table-sm mb-0">
                      <tbody>
                      <tr>
                        <th scope="row">
                          Employeer:
                        </th>
                        <td>{{  }}</td>
                      </tr>
                      <th scope="row">
                        Job type:
                      </th>
                      <td>Full Time</td>
                      <tr>
                        <th scope="row">
                          Aplication deadline:
                        </th>
                        <td>2021-10-31</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Location:
                        </th>
                        <td>Colombo</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Email address:
                        </th>
                        <td>naveen@joblk.com</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Phone :
                        </th>
                        <td>(123) 456-7890</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
                <div class="row">
                  <div class="row justify-content-center ml-5">
                    <div>
                      <img id="myImage" alt="product-img" width="600px" height="1000px" src="~/assets/images/vacancy.png">
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </b-col>
      <b-col
        md="3"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'auth',
  methods: {}
}
</script>
