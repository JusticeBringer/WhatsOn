<template>
    <div>
        <div class="banner">
            <h1 class="text-banner"> SeeYou is Ranked #3 in Customer Reviews</h1>
            <div class="row">
                <div class="fit20 fltLeftStyle"> <p/></div>
                <div class="fit5 fltLeftStyle"> <p/></div>
                <div class="fit20 fltLeftStyle">
                    <img src="../assets/pictures/gartner.png" class="details" alt="">
                    <p/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star stars-size"/>
                    <p class="rating-dts"> 4.0 out of 5.0</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.gartner.com/reviews/market/meeting-solutions-web-conferencing" class="lrn-more"> Learn more &#8690; </a>
                </div>
                <div class="fit20 fltLeftStyle">
                    <img src="../assets/pictures/trustradius_logo.png" class="details" alt="">
                    <p/><br>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star stars-size"/>
                    <span class="fa fa-star stars-size"/>
                    <p class="rating-dts"> 3.0 out of 5.0</p>
                    <a  target="_blank" rel="noopener noreferrer" href="https://www.trustradius.com/web-conferencing" class="lrn-more"> Learn more &#8690;</a>
                </div>
                <div class="fit20 fltLeftStyle">
                    <img src="../assets/pictures/g_two_crowd.png" class="details" alt="">
                    <p class="more-bot"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star checked stars-size"/>
                    <span class="fa fa-star stars-size"/>
                    <p class="rating-dts"> 4.0 out of 5.0</p>
                    <a  target="_blank" rel="noopener noreferrer" href="https://www.g2crowd.com/categories/video-conferencing?trending=" class="lrn-more"> Learn more &#8690;</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ranking"
    }
</script>

<style scoped>

    .checked {
        color: orange;
    }
    .more-bot{
        min-height: 0.01vh;
    }
    .lrn-more{
        text-decoration: none ;
        color: #0d8edd;
        font-size: 0.9vw;
    }
    .stars-size{
        margin: 2vh 0 0 0;
        font-size: 1vw;
    }
    .rating-dts{
        margin: 3vh 0 2vh 0;
        color: black;
        font-size: 1vw;
    }

    .details{
        text-align: center;
    }
</style>