<template>
  <div>
    <b-form>
      <div class="card mt-2">
        <div class="card-body pb-1">
          <div class="row">
            <div class="col-md-7">
              <div class="ml-2">
                <h4 class="bx-bold">
                  {{ category.title }}
                </h4>
                <h4 class="bx-bold">
                  {{ category.jobs.name }}
                </h4>
              </div>
            </div>
            <div class="col-md-2 mt-3">
              <NuxtLink :to="'/client/' + category.id">
                <p>{{ category.id }}</p>
              </NuxtLink>
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
  props: {
    category: {
      type: Object,
      default: null
    }
  }
}
</script>
