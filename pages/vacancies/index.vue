<template>
  <div>
    <Joke v-for="joke in jokes" :id="joke.id" :key="joke.id" :joke="joke.joke" />
  </div>
</template>

<script>
import Joke from '../../components/vacancy'

export default {
  components: {
    Joke
  },
  data () {
    return {
      jokes: []
    }
  },
  head () {
    return {
      title: 'Dad Jokes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for corny dad jokes'
        }
      ]
    }
  },
  created () {
    try {
      this.$axios.get('api/categories')
        .then((response) => {
          this.jokes = (response.data).data
        })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
    // try {
    //   const res = await axios.get('https://icanhazdadjoke.com/search')
    //
    //   this.jokes = res.data.results
    // } catch (err) {
    //   console.log(err)
    // }
  },
  methods: {
    // async searchText (text) {
    //   const config = {
    //     headers: {
    //       Accept: 'application/json'
    //     }
    //   }
    //
    //   try {
    //     const res = await axios.get(
    //       `https://icanhazdadjoke.com/search?term=${text}`,
    //       config
    //     )
    //
    //     this.jokes = res.data.results
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
  }
}
</script>

<style>
</style>
