<template>
  <footer padless class="pt-5">
      <v-row class="pb-5 ma-auto mx-md-5 mx-1 px-md-5 px-1">
        <!-- Informations Column -->
        <v-col cols="12" md="2">
          <h3 class="footer-title">Informations</h3>
          <v-list class="bg-transparent">
            <v-list-item>Home</v-list-item>
            <v-list-item>About Us</v-list-item>
            <v-list-item>Our Service</v-list-item>
            <v-list-item>Our Product</v-list-item>
          </v-list>
        </v-col>

        <!-- Support Column -->
        <v-col cols="12" md="2" class="d-flex  justify-md-center">
            <div>
                <h3 class="footer-title">Support</h3>
         <v-list dense class="bg-transparent">
            <v-list-item>FAQs</v-list-item>
            <v-list-item>Terms & Conditions</v-list-item>
            <v-list-item>Privacy policy</v-list-item>
          </v-list>
            </div>
       
        </v-col>

        <!-- Logo and Contacts Column -->
        <v-col cols="12" md="3" class="d-flex flex-column align-center justify-center">
            <img
            src="@/assets/images/logo.svg"
            alt="Logo"
            max-width="150"
            class="mb-4"
          />
</v-col>
        <v-col cols="12" md="2" >

                <h3 class="footer-title">Contacts</h3>
                <v-list dense class="bg-transparent">
            <v-list-item>00966 444 673 56</v-list-item>
            <v-list-item>support@womansecrets.com</v-list-item>
          </v-list>
         
          <div>
            
            <v-icon large class="mx-2">mdi-snapchat</v-icon>
            <v-icon large class="mx-2">mdi-instagram</v-icon>
            <v-icon large class="mx-2">mdi-facebook</v-icon>
          </div>
         

        </v-col>

        <!-- Subscribe Column -->
        <v-col cols="12" md="3" >
          <h3 class="footer-title">Subscribe For More</h3>
     
          <v-text-field variant="solo"   
          hide-details
          placeholder="Enter your mail"
          class="rounded-xl"
          ></v-text-field>

          <button class="btnfooter">Send</button>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div  class="pa-5 mx-4 text-md-end text-center">
        <span>2010 © All Rights Reserved</span>
      </div>
  </footer>
</template>
<style>
footer{
    background: #DEEBF6;
}
footer .v-list-item--density-default.v-list-item--one-line {
    min-height: 40px;
    padding-left: 0;
    padding-right: 0;
  
}
footer .footer-title{
    font-weight: 600;
}
footer .btnfooter{
    background: #F4F4F4;
      border-radius: 50px;
  padding: 6px 20px 3px;
  text-transform: uppercase;

}
footer .v-input--density-default .v-field--variant-outlined, .v-input--density-default .v-field--single-line, .v-input--density-default .v-field--no-label {
    border-radius: 50px;
    margin-bottom: 15px;
    margin-top: 15px;
}
footer .v-input {
    width: 80%;

}
footer .v-field {
    border-radius: 50px;
    --v-field-input-padding-top: 4px;
    --v-field-input-padding-bottom: 4px;
    
}
footer .v-field__input {
    min-height: 35px;
}
footer .v-field--variant-solo, .v-field--variant-solo-filled {
    box-shadow: none;
}
</style>
