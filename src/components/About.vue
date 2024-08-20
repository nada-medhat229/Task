<template>
  <v-row
    style="margin-top: 70px"
    class="justify-sm-space-between justify-center align-content-stretch"
  >
    <!-- Left Image Column -->
    <v-col cols="7" sm="6" class="px-0">
      <img src="@/assets/images/about.svg" class="imgabout" />
    </v-col>

    <!-- Right Content Column -->
    <v-col cols="12" sm="6" class="px-5">
      <div class="about-content">
        <h1 class="heading">{{ $t('About') }}</h1>
        <p class="mb-xl-5 mb-1">
          {{ $t("From_Ancient") }}
        </p>
        <h2 class="font-weight-bold pt-xl-5 pt-1 values-title">
          {{ $t("Values") }}
        </h2>
        <v-list dense>
          <v-list-item class="value-item">{{
            $t("Sustainability")
          }}</v-list-item>
          <v-list-item class="value-item">{{
            $t("WomenEmpowerment")
          }}</v-list-item>
          <v-list-item class="value-item">{{ $t("Innovation") }}</v-list-item>
          <v-list-item class="value-item"
            >{{ $t("ExcellentCustomer") }}
          </v-list-item>
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
[dir="rtl"] .heading {
  letter-spacing: 0;
}
.about-content {
  width: 85%;
  margin-right: auto;
  margin-left: 0;
}

[dir="rtl"] .about-content {
  margin-left: auto;
  margin-right: 0;
}
.values-title {
  font-size: 2.6rem;
}

.value-item {
  background-color: #f4f4f4;
  border-radius: 10px !important;
  margin-bottom: 20px;
  padding: 8px;
}
.imgabout {
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
  .imgabout {
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
