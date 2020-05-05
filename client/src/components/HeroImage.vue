<template>
    <div>
        <div class="row">
            <div class="fit15 fltLeftStyle"><p/></div>
            <div class="fit30 fltLeftStyle">
                <div class="hero-text">
                    <h1 class="hero-Size">SeeYou</h1>
                    <p class="p-size"> So you can easily talk to your friends wherever you are.</p>
                </div>
                <div class="row">
                    <div class="fit30 fltLeftStyle">
                        <div class="some-space-hero">
                            <form>
                                <p>
                                    <label for="meetinglink" class=""/>
                                    <input
                                            id="meetinglink"
                                            type="text"
                                            name="meetinglink"
                                            placeholder="Insert meeting link"
                                    >
                                </p>
                            </form>
                            <button class="button-sign-up"> Join meeting</button>
                        </div>
                    </div>
                    <div class="fit40 fltLeftStyle">
                        <div class="some-space-hero">
                            <div class="vertical-divider">
                                <h3 class="or-details"> OR </h3>
                            </div>
                        </div>
                    </div>
                    <div class="fit30 fltLeftStyle">
                        <div class="some-space-hero">
                            <h2 class="host-or-join"> Host your own meetings</h2>
                            <button class="button-sign-up"> Sign up today </button>
                        </div>
                    </div>
                </div>


            </div>
            <div class="fit15 fltLeftStyle"><p/></div>
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
            <div class="fit15 fltLeftStyle"><p/></div>
            <div class="fit60 fltLeftStyle">

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
    .or-details{
        font-size: 1.3vw;
        text-align: center;
        margin-top: 15vh;
    }
    /*.vertical-divider{*/
    /*    border-left: 1px solid #38546d;*/
    /*    background: #16222c;*/
    /*    width: 1px;*/
    /*    height: 100%;*/
    /*    position: absolute;*/
    /*    top: 80%;*/
    /*    left: 40%;*/
    /*}*/
    .host-or-join{
        font-size: 1vw;
        text-align: left;
    }
    .some-space-hero{
        margin: 10vh 0 0 0;
    }
    .banner{
        background-color: #83abb7;
        color: white;
        padding: 2.5vw 0 2.5vw 0;
    }
    .hero-Size{
        font-size: 4vw;
    }

    .hero-text {

        color: #000000;
    }
    .button-sign-up {
        width: 100%;
        border: none;
        outline: 0;
        display: block;
        padding: 0.7vw;
        margin: 2vw 0 2vw 0;
        color: white;
        background-color: #0d8edd;
        text-align: center;
        cursor: pointer;
        font-size: 1vw;
        transition: 0.3s ease-in;
    }
    .button-sign-up:hover {
        background-color: #073656;
        color: white;
    }

</style>