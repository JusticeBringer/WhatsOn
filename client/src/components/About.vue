<template>
    <div>
        <div class="about-banner">
            <div class="row">
                <h1 class="text-banner-about"> About us</h1>
                <p class="p-text"> - We strive to deliver the best performance - </p>
            </div>
            <div class="row">
                <div class="fit30 fltLeftStyle"><p/></div>
                <div class="fit5 fltLeftStyle"><p/></div>
                <div class="fit30 fltLeftStyle">
                    <figure>
                        <img src="../assets/pictures/office.jpg" alt="">
                        <figcaption> Photo from our office </figcaption>
                    </figure>
                </div>
            </div>
            <div class="row some-space">
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit10 fltLeftStyle"><p/></div>
                <div class="fit10 fltLeftStyle">
                    <h2 class="h2-text"> Our mission </h2>
                    <p class="under-h2-text"> Make video communications frictionless </p>
                </div>
                <div class="fit1 fltLeftStyle"><p/></div>
                <div class="fit10 fltLeftStyle">
                    <h2 class="h2-text"> Our vision </h2>
                    <p class="under-h2-text"> Video communications empowering people to accomplish more </p>
                </div>
                <div class="fit1 fltLeftStyle"><p/></div>
                <div class="fit10 fltLeftStyle">
                    <h2 class="h2-text"> Our values </h2>
                    <p class="under-h2-text"> We care for our company, customers, community, teammates, and ourselves </p>
                </div>
                <div class="fit1 fltLeftStyle"><p/></div>
                <div class="fit10 fltLeftStyle">
                    <h2 class="h2-text"> Our culture </h2>
                    <p class="under-h2-text"> Delivering happiness </p>
                </div>
            </div>
            <div class="row some-space">
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit10 fltLeftStyle"><p/></div>
                <div class="fit40 fltLeftStyle">
                    <p class="under-h2-text"> SeeYou is maybe the upcoming leader in modern enterprise video communications,
                        with an easy, reliable cloud platform for video and audio conferencing, collaboration,
                        chat, and webinars across mobile devices, desktops, telephones, and room systems.
                        Founded in 2020, SeeYou helps businesses and organizations bring their teams together
                        in a frictionless environment to get more done.
                        SeeYou is not (yet) a publicly traded company on Nasdaq (ticker: ZM)
                        and headquartered in Romania, Bucharest. </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    figcaption{
        text-align: center;
        margin-top: 1vh;
    }
    .some-space{
        margin: 5vh 0 0 0;
    }
    .h2-text{
        font-size: 1.3vw;
    }
    .under-h2-text{
        font-size: 0.8vw;
        padding: 0 0.5vw 0 0;
        text-align: left;
        line-height: 2.5vh;
    }

    .text-banner-about{
        text-align: center;
        font-size: 2.5vw;
        color: black;
        font-weight: 500;
        padding-top: 5vh;
        margin: 0 0 0 0;
    }
    .about-banner{

    }
    .p-text{
        color: black;
        font-size: 1.2vw;
        text-align: center;
    }
</style>