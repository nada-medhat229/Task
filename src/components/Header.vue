<template>
  <v-row class="d-flex align-sm-center overflow-hidden align-content-stretch" style="margin-top: 50px">
    <!-- Left Side - Video or Image -->
    <v-col cols="12" sm="4" class="p-0">
      <!-- Video only shown if videoPlaying is true -->
      <video
        v-if="videoPlaying"
        ref="videoElement"
        src="@/assets/images/vid.mp4"
        class="cover-video"
        autoplay
        muted
        loop
      ></video>
    </v-col>

    <!-- Center Text -->
    <v-col cols="12" sm="4" class="text-center py-10">
      <h1 class="font-weight-medium textheader" style="font-size: 3rem">
        Enhancing everything related to women's charm and allure is our mission.
      </h1>
      <button class="mt-4 btncontact">Contact us</button>
    </v-col>

    <!-- Right Side - Products Image -->
    <v-col cols="12" sm="4" class="p-0">
      <img
        class="headerimg"
        src="@/assets/images/header.svg"
        alt="headerimg"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
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

onMounted(() => {
  playVideo();
});
</script>

<style>
.cover-video {
  width: 100%;
  height: 760px;
  object-fit: cover; /* Maintain aspect ratio while covering container */
}
.btncontact {
  background: #deebf6;
  border-radius: 50px;
  box-shadow: none;
  padding: 10px 35px;
  text-transform: capitalize;
  font-weight: 500;
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
    width: 100%;
  }
}
</style>
