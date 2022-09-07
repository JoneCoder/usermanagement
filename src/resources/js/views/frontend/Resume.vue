<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">JAN 2013 -</div>
                <div class="caption font-weight-bold green--text">MAY 2016</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Bachelor's of Social Science</strong>
                <div class="caption mb-2">Kabi Nazrul Government College</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">JAN 2011 -</div>
                <div class="caption font-weight-bold green--text">MAY 2013</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Intermediate</strong>
                <div class="caption mb-2">Habibullah Bahar University College</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">JAN 2010 -</div>
                <div class="caption font-weight-bold green--text">DEC 2011</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>SSC</strong>
                <div class="caption mb-2">Ibrahimpur I C High School</div>
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
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">JAN 2021 -</div>
                <div class="caption font-weight-bold green--text">PRESENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Full Stack Software Developer</strong>
                <div class="caption mb-2">Nogor Solutions Limited.</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">NOV 2019 -</div>
                <div class="caption font-weight-bold green--text">DEC 2020</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Software Developer</strong>
                <div class="caption mb-2">Innovation IT</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">APR 2019 -</div>
                <div class="caption font-weight-bold green--text">NOV 2019</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Web Application Developer</strong>
                <div class="caption mb-2">Felix Tech Limited</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Design/Frontend</span>

          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong>VUE/NUXT</strong>
        <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>

        <strong>HTML/CSS</strong>
        <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>

        <strong>JavaScript</strong>
        <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>

        <strong>Photoshop</strong>
        <v-progress-linear v-model="buffer1" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Illustrator</strong>
        <v-progress-linear v-model="buffer2" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding</span>
          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong>PHP</strong>
        <v-progress-linear v-model="buffer4" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Laravel</strong>
        <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>MySQL</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Git</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Linux Server</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="/assets/frontend/files/Md._Shariful_Islam_CV.pdf"
          target="_blank"
          color="green"
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
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Eldin' Space" },
      { property: "og:site_name", content: "Eldin' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eldin.space" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      {
        property: "og:description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      }
    ]
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 90;
        this.buffer2 = 85;
        this.buffer3 = 80;
        this.buffer4 = 80;
        this.buffer5 = 90;
        this.buffer6 = 70;
      }, 800);
    }
  }
};
</script>
<style >
</style>

