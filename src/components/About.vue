<template>
  <v-row style="margin-top: 70px" class="justify-sm-space-between justify-center align-content-stretch ">
    <!-- Left Image Column -->
    <v-col cols="7" sm="6" class="px-0">
      <img src="@/assets/images/about.svg" class="imgabout" />
    </v-col>

    <!-- Right Content Column -->
    <v-col cols="12" sm="6" class="px-5">
      <div class="about-content">
        <h1 class="heading">ABOUT US</h1>
        <p class="mb-xl-5 mb-1">
          From Ancient Times To The Present Day, Our Journey Continues To Bring
          The Best To The Modern Woman. We Draw Inspiration From Our Rich
          Heritage And Blend It With Contemporary Touches To Offer You A Diverse
          Range Of Products That Reflect The Elegance And Sophistication Of The
          Past With A Modern Twist.
        </p>
        <h2 class="font-weight-bold pt-xl-5 pt-1 values-title">Values</h2>
        <v-list dense>
          <v-list-item class="value-item">Sustainability</v-list-item>
          <v-list-item class="value-item">Women's Empowerment</v-list-item>
          <v-list-item class="value-item"
            >Innovation And Creativity</v-list-item
          >
          <v-list-item class="value-item"
            >Excellent Customer Service</v-list-item
          >
        </v-list>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped>
.heading {
  letter-spacing: 0.2em;
  font-size: 5rem;
  font-weight: 100;
  margin-bottom: 20px;
}

.about-content {
  width: 85%;
  margin-right: auto;
}

.values-title {
  font-size: 2.6rem;
}

.value-item {
  background-color: #F4F4F4; /* light grey */
  border-radius: 10px !important;
  margin-bottom: 20px;
  padding: 8px;
}
.imgabout{
    width: 85%;
    margin-right: auto;
    object-fit: cover;
}
@media (max-width: 1200px) {
  .heading {
  letter-spacing: 0.2em;
  font-size: 3.8rem;
  margin-bottom: 0px;
}
.imgabout{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
}
@media (max-width: 992px) {
    .heading {
  letter-spacing: 0.2em;
  font-size: 2.8rem;
  margin-bottom: 0px;

  }
  .about-content {
  width: 95%;
}

}
</style>
