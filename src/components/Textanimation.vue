<template>
    <section class="scrolling-text">
    <p class="loop-text">be the best you can be.</p>
    <span class="loop-text">be the best you can be.</span>
    <p class="loop-text">be the best you can be.</p>
    <span class="loop-text">be the best you can be.</span>
   
</section>
  
</template>
<style scoped>
 .loop-text {
         animation: loopText 5s infinite linear;      
    }

    @keyframes loopText {

       from {
           transform: translateX(-100%);
        }

       to {
           transform: translateX(0);
        }

    }
    
  .scrolling-text {
padding: 50px 0;
display: flex;
white-space: nowrap;
width: 100%;
text-transform: uppercase;
overflow: hidden;

}


.loop-text {
font-size: 3.3rem;
text-transform: uppercase;
padding: 0 0.1em;
}
.scrolling-text span {
  font-weight: 600;
}
</style>
