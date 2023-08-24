<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex v-for="project in projects" :key="project.src" xs12 sm12 md4 lg4 xl4>
        <v-card
          @click="openProject(project.url)"
          hover
          flat
          color="transparent"
          height="251"
        >
          <v-card-title>Developed with&nbsp;<span style="color: rgb(205, 127, 50);">{{project.framework}}</span></v-card-title>
          <v-img :src="project.src" aspect-ratio="2.75" height="130" contain></v-img>
          <v-card-title primary-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{project.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          framework: 'React',
          src: '/landmark.png',
          title: 'Landmarker',
          url: 'https://landmarkergame.com'
        },
        {
          framework: 'Vue',
          src: '/mine.png',
          title: 'Speed Miner',
          url: 'https://speedminer.joerock.dev'
        },

        {
          framework: 'Vue',
          src: '/blue2red.png',
          title: 'Blue2Red',
          url: 'https://blue2red.joerock.dev'
        }
      ]
    }
  },
  methods: {
    openProject (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
