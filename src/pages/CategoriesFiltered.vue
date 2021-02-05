<template>
  <div>
    <md-card v-if="randomJokesByCategory"> 
        <md-card-header>
            <div class="md-title">Joke</div>
            <div class="md-subhead">Chuck Norris fact:</div>
        </md-card-header>

        <md-card-content>
        {{ randomJokesByCategory.value.joke }}
        </md-card-content>
        <md-card-actions>
          <ShareNetwork
            network="email"
            title="Chuck Norris Joke"
            url=""
            :description= "randomJokesByCategory.value.joke"
            quote="Did you like the joke?"
          >
            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </ShareNetwork>
        </md-card-actions>
    </md-card>
    <div>
      <md-button @click="generateCategoryJokes" class="md-icon-button md-dense md-raised md-primary">
          <md-icon>cached</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
// import SocialSharingSection from '../components/SocialSharingSection.vue'

export default {
  name: 'CategoriesFilteredPage',
//   components: {
//     SocialSharingSection
//   },
  computed: {
    selectedCategory () {
      return this.$store.getters.selectedCategory
    },
    randomJokesByCategory () {
      return this.$store.getters.randomJokesByCategory
    }   
  },
  methods: {
    generateCategoryJokes: function () {
      this.$store.dispatch('getRandomJokesByCategory', this.selectedCategory)
    }
  },
  mounted () {
    this.generateCategoryJokes()
  }
}

</script>

<style lang="scss" scoped>
.md-button {
  margin-top: 20px;
}
</style>
