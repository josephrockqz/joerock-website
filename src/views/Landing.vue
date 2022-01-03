<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">

    <img src="../../public/headshot.jpg" style="width: 300px; height: auto; margin: auto; padding: 25px; border-radius: 50%; text-align: center;" class="w3-circle" />

    <vue-typer class="headline" :repeat="0" text="Joseph Rock"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>

    <br>

    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About </span>
              <span style="color: #CD7F32">Me</span>
            </h3>
            <div>
                Hi. My name is Joseph Rock. I am currently studying computer science & mathematics at the University of Virginia. I am passionate about
                software engineering and am hopeful to use my skills to make a positive impact on others. When I'm not programming I am usually at the gym,
                playing golf, or trying new food.
            </div>
          </div>
        </v-card-title>

        <v-layout column justify-center align-center>

          <v-card-actions class="hidden-sm-and-down">
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              fab
              dark
              outline
              color="blue"
              :href="icon.href"
              target="_blank"
            >
              <v-icon dark>{{icon.icon}}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-actions class="hidden-md-and-up justify-center">
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              small
              fab
              dark
              outline
              color="blue"
              :href="icon.href"
              target="_blank"
            >
              <v-icon dark>{{icon.icon}}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  components: {
    'vue-typer': VueTyper
  },
  data () {
    return {
      icons: [
        { href: 'https://github.com/josephrockqz', icon: 'fab fa-github' },
        {
          href: 'https://www.linkedin.com/in/joseph-rock',
          icon: 'fab fa-linkedin-in'
        },
        {
          href: 'https://www.facebook.com/joseph.rock.372',
          icon: 'fab fa-facebook-f'
        },
        { href: 'https://www.instagram.com/joerock00', icon: 'fab fa-instagram' }
      ],
      text1: ['Software Engineer', 'Web Developer', 'Front-End Developer'],
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    }
  }
}
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: #CD7F32;
}
.vue-typer .custom.char.selected {
  color: blue;
}

.vue-typer .custom.caret {
  animation: 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #CD7F32;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: blue;
}
</style>
