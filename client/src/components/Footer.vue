<template>
    <div>
        <div class="ft-ban">
            <div class="row">
                <div class="fit10 fltLeftStyle"><p/></div>
                <div class="fit5 fltLeftStyle"><p/></div>
                <div class="fit20 fltLeftStyle">
                    <h2> About </h2>

                    <a href=""> Our company</a>
                    <a href=""> Our features</a>
                    <a href=""> Pricing</a>
                </div>
                <div class="fit20 fltLeftStyle">
                    <h2> Download </h2>

                    <a href=""> Windows OS</a>
                    <a href=""> Mac OS</a>
                    <a href=""> Linux OS</a>
                </div>
                <div class="fit20 fltLeftStyle">
                    <h2> Support </h2>

                    <a href=""> Contact us </a>
                </div>
                <div class="fit20 fltLeftStyle">
                    <h2> Legal </h2>

                    <a href=""> Privacy policy</a>
                    <a href=""> Cookies policy</a>
                    <a href=""> Terms and conditions</a>
                </div>

            </div>
            <div class="row">
                <div class="fit10 fltLeftStyle"><p/></div>
                <div class="fit5 fltLeftStyle"><p/></div>
                <div class="fit60 fltLeftStyle">
                    <p class="text-bot"> Copyright ©2020 SeeYou Video Communications, Inc. All rights reserved. </p>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .text-bot{
        margin: 5vh 0 0 0;
        padding: 0 0 5vh 0;
    }
    .ft-ban{
        background-color: #39394d;
        color: white;
        padding: 5vh 0 0 0;
    }
    a{
        text-decoration: none;
        color: #d6d6d6;
    }
    a::after{
        content: "";
        display: table;
    }
</style>