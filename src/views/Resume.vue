<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="#CD7F32" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">August 2015 -</div>
                <div class="caption font-weight-bold blue--text">May 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Rockford Auburn High School</strong>
                <div class="caption mb-2">National AP Scholar</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="#CD7F32" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">August 2018 -</div>
                <div class="caption font-weight-bold blue--text">Present</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>University of Virginia</strong>
                <div class="caption mb-2">Computer Science & Mathematics</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="#CD7F32" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">May 2020 -</div>
                <div class="caption font-weight-bold blue--text">January 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Web Developer</strong>
                <div class="caption mb-2">Montel Technologies</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="#CD7F32" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">June 2021 -</div>
                <div class="caption font-weight-bold blue--text">August 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Technical Intern</strong>
                <div class="caption mb-2">Capital One</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Software</span>

          <span style="color: #CD7F32;">Skills</span>
        </h2>
        <br>
        <strong>AWS</strong>
        <v-progress-linear v-model="buffer1" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Docker</strong>
        <v-progress-linear v-model="buffer2" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Git</strong>
        <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>MongoDB</strong>
        <v-progress-linear v-model="buffer4" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding</span>
          <span style="color: #CD7F32;">Skills</span>
        </h2>
        <br>
        <strong>HTML/CSS</strong>
        <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Python</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>TypeScript</strong>
        <v-progress-linear v-model="buffer7" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Vue.js/Node.js</strong>
        <v-progress-linear v-model="buffer8" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="/resume_joseph_rock.pdf"
          target="_blank"
          color="#CD7F32"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      buffer7: 0,
      buffer8: 0,
      bufferValue: 100,
      interval: 0
    }
  },
  mounted () {
    this.startBuffer()
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    startBuffer () {
      this.interval = setInterval(() => {
        this.buffer1 = 72
        this.buffer2 = 70
        this.buffer3 = 75
        this.buffer4 = 65
        this.buffer5 = 70
        this.buffer6 = 82
        this.buffer7 = 65
        this.buffer8 = 86
      }, 800)
    }
  }
}
</script>
<style >
</style>
