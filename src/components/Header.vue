<template>
  <v-row class="d-flex align-sm-center overflow-hidden align-content-stretch" style="margin-top: 50px" v-if="header">
    <v-col cols="12" sm="4" class="p-0">
      <!-- Video only shown if videoPlaying is true -->
      <video
        v-if="videoPlaying"
        ref="videoElement"
        :src="header?header.video:''"
        class="cover-video"
        autoplay
        muted
        loop
      ></video>
    </v-col>

    <!-- Center Text -->
    <v-col cols="12" sm="4" class="text-center py-10">
      <h1 class="font-weight-medium textheader" style="font-size: 3rem">
        {{ header?header.desc:'' }}
      </h1>
      <router-link class="mt-4 btncontact" :to="header?header.btn_link:''" >{{ header?header.btn_text:'' }}</router-link>
    </v-col>

    <!-- Right Side - Products Image -->
    <v-col cols="12" sm="4" class="p-0">
      <img
        class="headerimg"
        :src="header?header.img:''"
        alt="headerimg"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, nextTick, computed  } from "vue";
import { useStore } from 'vuex';

// Access the Vuex store
const store = useStore();

// Use Vuex getters as computed properties
const data = computed(() => store.getters.getData);
const videoElement = ref(null);
const videoPlaying = ref(true); // Ensure videoPlaying is true for testing

const playVideo = async () => {
  videoPlaying.value = true;
  await nextTick();
  if (videoElement.value) {
    videoElement.value.style.display = "block";
    videoElement.value.play();
  } else {
    console.error("Video element not found");
  }
};
const header = computed(() => {
  if (data.value && data.value.data && data.value.data.header) {
    return data.value.data.header;
  }
  return null;
});

onMounted(() => {
  playVideo();
  store.dispatch('fetchData');

});
</script>

<style>
.cover-video {
  width: 100%;
  height: 760px;
  object-fit: cover;
}
.btncontact {
  background: #deebf6;
  border-radius: 50px;
  box-shadow: none;
  padding: 15px 35px;
  text-transform: capitalize;
  font-weight: 500;
  text-decoration: none;
  color: black;
}
@media (max-width: 1200px) {
    .textheader {
    font-size: 2rem !important;
  }
}
@media (max-width: 576px) {
  .cover-video {
    width: 100%;
    height: 350px;
    object-fit: none;
  }
  .textheader {
    font-size: 1.2rem !important;
  }
  .headerimg {
    height: 350px;
    width: 100% !important;
    object-fit: cover;

  }
}
</style>
