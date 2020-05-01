<template>
  <div>
    <h1 class="text-banner"> What does our platform provide </h1>

    <div class="row">
        <div class="fit35 fltLeftStyle"> <p/></div>
        <div class="fit10 fltLeftStyle">
            <img src="../assets/pictures/serviciu_unu.png" class="details" alt="">
            <p class=""> Real-time Meetings</p>
            <a href="/" class="lrn-more"> Learn more </a>
        </div>
        <div class="fit10 fltLeftStyle">
            <img src="../assets/pictures/serviciu_doi.png" class="details" alt="">
            <p> Audio calls </p>
            <a href="/" class="lrn-more"> Learn more </a>
        </div>
        <div class="fit10 fltLeftStyle">
            <img src="../assets/pictures/serviciu_trei.png" class="details" alt="">
            <p> Contacts chat </p>
            <a href="/" class="lrn-more"> Learn more </a>
        </div>
    </div>
    <div class="space-bottom"><p/></div>
  </div>
</template>

<script>
  export default {
    name: "Servicii"
  }
</script>


<style scoped>
  .space-bottom{
      margin: 0 0 15vh 0;
  }

  .lrn-more{
      text-decoration: none ;
      color: #0d8edd;
      font-size: 0.9vw;
  }
  .details{
      text-align: center;
      width: 100px;
      height: 100px;
  }

</style>
