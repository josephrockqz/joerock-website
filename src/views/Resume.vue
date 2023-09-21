<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Learning</h2>
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
                <div class="caption font-weight-bold blue--text">May 2022</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>University of Virginia</strong>
                <div class="caption mb-2">Computer Science & Mathematics</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="#CD7F32" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">September 2023 -</div>
                <div class="caption font-weight-bold blue--text">Present</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Amazon Web Services</strong>
                <div class="caption mb-2">Solutions Architect - Associate</div>
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

          <v-timeline-item color="#CD7F32" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">August 2022 -</div>
                <div class="caption font-weight-bold blue--text">Present</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Software Engineer</strong>
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
          <span>Development</span>

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
        <strong>Nginx</strong>
        <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Splunk</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding</span>
          <span style="color: #CD7F32;">Skills</span>
        </h2>
        <br>
        <strong>Python</strong>
        <v-progress-linear v-model="buffer7" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>TypeScript</strong>
        <v-progress-linear v-model="buffer8" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Vue</strong>
        <v-progress-linear v-model="buffer9" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>React</strong>
        <v-progress-linear v-model="buffer10" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Node</strong>
        <v-progress-linear v-model="buffer11" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Kotlin</strong>
        <v-progress-linear v-model="buffer12" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
      </v-flex>
      <!-- <div class="mt-4 pt-2 pb-2">
        <v-btn
          href="resume_joseph_rock.pdf"
          target="_blank"
          color="#CD7F32"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div> -->
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
      buffer9: 0,
      buffer10: 0,
      buffer11: 0,
      buffer12: 0,
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
        this.buffer1 = 81
        this.buffer2 = 70
        this.buffer3 = 75
        this.buffer4 = 65
        this.buffer5 = 75
        this.buffer6 = 77
        this.buffer7 = 82
        this.buffer8 = 70
        this.buffer9 = 86
        this.buffer10 = 73
        this.buffer11 = 76
        this.buffer12 = 88
      }, 800)
    }
  }
}
</script>
<style >
</style>
