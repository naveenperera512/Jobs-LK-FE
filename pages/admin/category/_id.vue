<!--<template>-->
<!--  <div class="row">-->
<!--    <b-col-->
<!--      md="3"-->
<!--    />-->
<!--    <b-col-->
<!--      md="6"-->
<!--    >-->
<!--      <div class="col-12 my-3">-->
<!--        <h5>-->
<!--          <nuxt-link to="/admin" class="btn bg-info ml-2">-->
<!--            Back-->
<!--          </nuxt-link><span class="ml-2">Add Category</span>-->
<!--        </h5>-->
<!--      </div>-->

<!--      <div class="col-sm-12 col-md-11">-->
<!--        <b-form-->
<!--          @submit.prevent="addCategoryInformation"-->
<!--        >-->
<!--          &lt;!&ndash; name &ndash;&gt;-->
<!--          <b-form-group label-for="name">-->
<!--            <template #label>-->
<!--              Category Name <span class="text-danger">*</span>-->
<!--            </template>-->
<!--            <b-form-input-->
<!--              id="name"-->
<!--              v-model="form.name"-->
<!--              type="text"-->
<!--              :state="errors && errors.name ? false : null"-->
<!--              placeholder="Enter name"-->
<!--              required-->
<!--            />-->
<!--            <b-form-invalid-feedback-->
<!--              v-if="errors && errors.name"-->
<!--              id="name-feedback"-->
<!--            >-->
<!--              {{ errors.name[0] }}-->
<!--            </b-form-invalid-feedback>-->
<!--          </b-form-group>-->
<!--          &lt;!&ndash; description &ndash;&gt;-->
<!--          <b-form-group label-for="description">-->
<!--            <template #label>-->
<!--              Category Description <span class="text-danger">*</span>-->
<!--            </template>-->
<!--            <b-form-input-->
<!--              id="description"-->
<!--              v-model="form.description"-->
<!--              type="text"-->
<!--              :state="errors && errors.description ? false : null"-->
<!--              placeholder="Enter Category Description"-->
<!--              required-->
<!--            />-->
<!--            <b-form-invalid-feedback-->
<!--              v-if="errors && errors.description"-->
<!--              id="description-feedback"-->
<!--            >-->
<!--              {{ errors.description[0] }}-->
<!--            </b-form-invalid-feedback>-->
<!--          </b-form-group>-->

<!--          &lt;!&ndash; slug &ndash;&gt;-->
<!--          <b-form-group label-for="slug">-->
<!--            <template #label>-->
<!--              Slug <span class="text-danger">*</span>-->
<!--            </template>-->
<!--            <b-form-input-->
<!--              id="slug"-->
<!--              v-model="form.slug"-->
<!--              type="text"-->
<!--              :state="errors && errors.slug ? false : null"-->
<!--              placeholder="Enter slug"-->
<!--              required-->
<!--            />-->
<!--            <b-form-invalid-feedback-->
<!--              v-if="errors && errors.slug"-->
<!--              id="slug-feedback"-->
<!--            >-->
<!--              {{ errors.slug[0] }}-->
<!--            </b-form-invalid-feedback>-->
<!--          </b-form-group>-->

<!--          &lt;!&ndash; button&ndash;&gt;-->
<!--          <div-->
<!--            class="d-flex justify-content-end"-->
<!--          >-->
<!--            <b-button-->
<!--              type="submit"-->
<!--              variant="primary"-->
<!--              class="mt-n2 ml-2"-->
<!--            >-->
<!--              Save-->
<!--            </b-button>-->
<!--          </div>-->
<!--        </b-form>-->
<!--      </div>-->
<!--      <div><hr></div>-->
<!--    </b-col>-->
<!--    <b-col-->
<!--      md="3"-->
<!--    />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  components: {-->

<!--  },-->
<!--  layout: 'auth',-->
<!--  async asyncData ({ params, $axios }) {-->
<!--    const post = await $axios.$get(`/api/categories/${params.id}`)-->
<!--    const category = post.data-->
<!--    return { category }-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      errors: {},-->
<!--      form: {-->
<!--        name: '',-->
<!--        slug: '',-->
<!--        description: ''-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    async addCategoryInformation (params) {-->
<!--      try {-->
<!--        await this.$axios.get('sanctum/csrf-cookie')-->
<!--        await this.$axios.$get(`/api/categories/${params.id}`, this.form)-->
<!--        await this.$router.replace({ path: '/' })-->
<!--      } catch (error) {-->
<!--        if (error.response.status === 422) {-->
<!--          this.errors = error.response.data.errors-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<template>
  <div>dfgdf</div>
</template>
