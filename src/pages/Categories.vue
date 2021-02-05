<template>
  <div>
    <div 
        v-for="cat in categories" 
        :key="cat.id"
        >
        <b-button class="category" block variant="primary" @click="setCategoryJokes(cat)">
        {{ cat }}
        </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesPage',
    data () {
      return {
      }
    },
  computed: {
    iamChuckNorris () {
      return this.$store.getters.iamChuckNorris
    },
    categories () {
      return this.$store.getters.categories
    } 
  },
  methods: {
    getCategories: function () {
      this.$store.dispatch('getCategories')
    },
    setCategoryJokes: function (category) {
      this.$store.commit('setSelectedCategory', category)
      this.$store.dispatch('getRandomJokesByCategory', category)
      this.$router.push(`/filterbycategory`)
    }
  },
  mounted () {
    this.getCategories()
  }
}
</script>

<style lang="scss" scoped>
.category{
  background-color: seagreen ;
  color: #fff;
  margin-top: 20px;
}
</style>
