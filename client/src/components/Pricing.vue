<template>
    <div>
        <div class="banner">
            <div class="row">
                <h1 class="text-banner"> Pricing </h1>
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit1 fltLeftStyle"><p/></div>
                <div class="fit1 fltLeftStyle"><p/></div>
                <div class="fit1 fltLeftStyle"><p/></div>
                <div class="fit15 fltLeftStyle">
                    <div class="pricing-box">
                        <h3 class="pricing-plan"> Basic </h3>
                        <p class="pricing-detail"> Personal Meeting</p>
                        <h2 class="price-text"> Free </h2>
                        <button class="pricing-button"> Sign up for free</button>
                        <p class="pricing-detail">Host up to 100 participants</p>
                        <p class="pricing-detail">Unlimited 1 to 1 meetings  </p>
                        <p class="pricing-detail">40 mins limit on group meetings</p>
                        <p class="pricing-detail">Unlimited number of meetings  </p>
                        <p class="pricing-detail">Ticket Support</p>
                    </div>
                </div>
                <div class="fit5 fltLeftStyle"><p/></div>
                <div class="fit15 fltLeftStyle">
                    <div class="pricing-box">
                        <h3 class="pricing-plan"> Pro </h3>
                        <p class="pricing-detail"> Great for Small Teams</p>
                        <h2 class="price-text"> $14.99 <span>/mo/host</span> </h2>\
                        <button class="pricing-button-pro"> Buy Now</button>
                        <p class="plus-features">All Basic features + </p>
                        <p class="pricing-detail">Includes 100 participants </p>
                        <p class="pricing-detail">Meeting duration limit is 24 hrs</p>
                        <p class="pricing-detail">User management  </p>
                        <p class="pricing-detail">Admin feature controls</p>
                        <p class="pricing-detail">Reporting</p>
                        <p class="pricing-detail">Custom Personal Meeting ID</p>
                        <p class="pricing-detail">Assign scheduler</p>
                        <p class="pricing-detail">1GB of MP4 or M4A cloud recording</p>
                    </div>
                </div>
                <div class="fit5 fltLeftStyle"><p/></div>
                <div class="fit15 fltLeftStyle">
                    <div class="pricing-box">
                        <h3 class="pricing-plan"> Business </h3>
                        <p class="pricing-detail"> Small & Med Businesses</p>
                        <h2 class="price-text"> $19.99 <span>/mo/host</span> </h2>
                        <button class="pricing-button-business"> Buy Now</button>
                        <p class="plus-features">All Pro features + </p>
                        <p class="pricing-detail">Includes 300 participants</p>
                        <p class="pricing-detail">Dedicated phone support  </p>
                        <p class="pricing-detail">Admin dashboard</p>
                        <p class="pricing-detail">Vanity URL  </p>
                        <p class="pricing-detail">Managed domains</p>
                        <p class="pricing-detail">Single sign-on</p>
                        <p class="pricing-detail">Company branding</p>
                        <p class="pricing-detail">Custom emails</p>
                        <p class="pricing-detail">LTI integration</p>
                        <p class="pricing-detail">Cloud Recording Transcripts</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pricing"
    }
</script>

<style scoped>
    .pricing-banner{

    }
    .pricing-button-pro{
        background-color: #e1c061;
        color: black;
        transition: 0.3s ease-in;
        font-size: 1.2vw;
        border: 1px solid black;
        border-radius: 10px;
        padding: 0.5vw;
        margin-bottom: 2vh;
    }
    .pricing-button-pro:hover{
        background-color: #fff6a6;
    }
    .pricing-button-business{
        background-color: #8ad2e1;
        color: black;
        transition: 0.3s ease-in;
        font-size: 1.2vw;
        border: 1px solid black;
        border-radius: 10px;
        padding: 0.5vw;
        margin-bottom: 2vh;
    }
    .pricing-button-business:hover{
        background-color: #4bb5f4;
    }
    .pricing-button{
        background-color: #f9ffc3;
        color: black;
        transition: 0.3s ease-in;
        font-size: 1.2vw;
        border: 1px solid black;
        border-radius: 10px;
        padding: 0.5vw;
        margin-bottom: 2vh;
    }
    .pricing-button:hover{
        background-color: #b8c976;
    }
    .pricing-plan{
        color: black;
        text-align: left;
        font-size: 1.3vw;
    }
    .plus-features{
        color: black;
        text-align: left;
        font-size: 1vw;
        text-decoration: underline;
    }
    .pricing-detail{
        color: black;
        text-align: left;
        font-size: 0.8vw;
    }
    .price-text{
        color: black;
        text-align: left;
        font-size: 2vw;
    }
    .pricing-box{
        border: 1px solid black;
        padding: 1vw;
        background-color: white;

        box-shadow: 5px 5px 8px #888888;
        border-radius: 5px;
    }
</style>