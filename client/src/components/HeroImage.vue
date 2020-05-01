<template>
    <div>
        <div class="row">
            <div class="fit60 fltLeftStyle">
                <div class="hero-image">
                    <div class="hero-text">
                        <h1 class="hero-Size">SeeYou</h1>
                        <p class="p-size"> So you can easily talk to your friends wherever you are.</p>
                        <button> Sign up today</button>
                    </div>
                </div>
            </div>
            <div class="fit30 fltLeftStyle">
                <div>
                    <img src="../assets/pictures/image_hero.jpg" alt="image describing a video call">
                </div>
            </div>
            <div class="fit10 fltLeftStyle">
                <p/>
            </div>
        </div>
        <div class="row">
            <div class="fit100 banner"></div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "HeroImage"
    }
</script>

<style scoped>
    .banner{
        background-color: #83abb7;
        color: white;
        padding: 2.5vw 0 2.5vw 0;
    }

    .hero-image {
        background-color: #ffffff;
        height: 50%;
        min-height: 60vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .hero-Size{
        font-size: 4vw;
    }

    .hero-text {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #000000;
    }

    .hero-text button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 1vw;
        margin: 2vw 0 2vw 0;
        color: white;
        background-color: #0d8edd;
        text-align: center;
        cursor: pointer;
        font-size: 1vw;
        transition: 0.3s ease-in;
    }

    .hero-text button:hover {
        background-color: #073656;
        color: white;
    }
</style>