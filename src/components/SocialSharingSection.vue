<template>
  <ShareNetwork
    :network="network.network"
    :key="network.network"
    :style="{backgroundColor: network.color}"
    :url="sharing.url"
    :title="sharing.title"
    :description="sharing.description"
    :quote="sharing.quote"
    :hashtags="sharing.hashtags"
    :twitterUser="sharing.twitterUser"
  >
    <i :class="network.icon"></i>
    <span>{{ network.name }}</span>
  </ShareNetwork>
</template>

<script>
export default {
  data () {
    return {
      sharing: {
        url: 'https://news.vuejs.org/issues/180',
        title: 'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
        description: 'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
        quote: 'The hot reload is so fast it\'s near instant. - Evan You',
        hashtags: 'vuejs,vite,javascript',
        twitterUser: 'youyuxi'
      },
      networks: { 
        network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' 
      }, 
    }
  }
}
</script>