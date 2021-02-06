<template>
  <div>
   <md-card class="md-primary" md-theme="purple-card" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">About</div>
          <div class="md-subhead">Created with VueJs for educational propuses by:
            <a href="https://github.com/GHernandez2410" target="_blank">
              https://github.com/GHernandez2410
            </a>
          </div>
        </md-card-header>

        <md-card-content>
          <h5>Source code:
            <a class="align" href="https://github.com/GHernandez2410/mychucknorrisapp.git" target="_blank">
              https://github.com/GHernandez2410/mychucknorrisapp.git
            </a>
          </h5>
          <h5>API by icndb.com:
            <a href="http://www.icndb.com/api/" target="_blank">
              http://www.icndb.com/api/
            </a>
          </h5>
          <h5>API by ChuckNorris.io:
            <a href="https://api.chucknorris.io/" target="_blank">
              https://api.chucknorris.io/
            </a>
          </h5>
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage'
  }
</script>

<style lang="scss" scoped>
.align {
  width: max-content;
}
</style>