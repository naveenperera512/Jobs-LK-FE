<template>
  <div>
    <div class="row bg-info mb-5">
      <b-col
        md="1"
      />
      <b-col
        md="10"
      />
      <b-col
        md="1"
      />
    </div>

    <div class="row">
      <b-col
        md="2"
      />
      <b-col
        md="8"
      >
        <div>
          <div>
            <h1>category</h1>
            {{ beta }}
            <category
              v-for="(category, index) in categories"
              :key="category.id"
              v-observe-visibility="index === categories.length - 1 "
              :category="category"
              :current-page="currentPage"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-muted mt-3">Showing {{ beta.from }} to {{ beta.to }} of {{ beta.total }} entries</div>
            <div class="dataTables_paginate paging_simple_numbers float-right mt-n2">
              <ul class="pagination pagination-rounded">
                <!-- pagination -->
                <b-pagination v-model="currentPage" :total-rows="beta.total" :per-page="perPage" />
              </ul>
            </div>
          </div>
        </div>
      </b-col>
      <b-col
        md="2"
      />
    </div>
  </div>
</template>
<script>
import Category from '@/components/Category'
export default {

  components: {
    Category
  },
  layout: 'auth',

  data () {
    return {
      perPage: 10,
      currentPage: 1,
      categories: [],
      beta: []
    }
  },
  created () {
    this.getCategorytList()
  },

  methods: {

    getCategorytList () {
      try {
        this.$axios.get('api/vacancies')
          .then((response) => {
            this.categories = (response.data).data
            this.beta = (response.data).meta
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  }
}
</script>
