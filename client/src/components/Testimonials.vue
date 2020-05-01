<template>
    <div>
        <div class="banner empty-all">
            <h1 class="text-banner"> Hear our users voice </h1>
            <div class="row">
                <div class="fit10 fltLeftStyle"><p/></div>
                <div class="fit5 fltLeftStyle"><p/></div>
                <div class="fit30 fltLeftStyle">
                    <figure>
                        <img src="../assets/pictures/avatar.jpg" alt="" class="img-details" >
                        <figcaption> John the Hero </figcaption>
                    </figure>

                </div>
                <div class="fit50 fltLeftStyle">
                    <blockquote>It is an awesome experience. I recommend this platform from all my heart!</blockquote>

                </div>

                <div class="fit5 fltLeftStyle"><p/></div>
            </div>
        </div>
        <div class="second-banner">
            <div class="row">
                <div class="fit10 fltLeftStyle"><p/></div>
                <div class="fit5 fltLeftStyle"><p/></div>
                <div class="fit20 fltLeftStyle">
                    <div class="row">
                        <div class="fit50 fltLeftStyle">
                            <figure>
                                <img src="../assets/pictures/avatar.jpg" alt="" class="img-details-little">
                            </figure>
                        </div>
                        <div class="fit30 fltLeftStyle">
                            <p  class="change-how"> John the Hero </p>
                            <figure class="img-logo">
                                <a href="https://www.google.ro/?hl=ro">
                                <img src="../assets/pictures/logo.png" alt="" class="img-logo-dimensions" >
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="fit20 fltLeftStyle">
                    <div class="row">
                        <div class="fit50 fltLeftStyle">
                            <figure>
                                <img src="../assets/pictures/avatar.jpg" alt="" class="img-details-little" >
                            </figure>
                        </div>
                        <div class="fit30 fltLeftStyle">
                            <p  class="change-how"> John the Hero </p>
                            <figure class="img-logo">
                                <a href="https://www.google.ro/?hl=ro">
                                    <img src="../assets/pictures/logo.png" alt="" class="img-logo-dimensions" >
                                </a>
                            </figure>
                        </div>
                    </div>
                </div> <div class="fit20 fltLeftStyle">
                <div class="row">
                    <div class="fit50 fltLeftStyle">
                        <figure>
                            <img src="../assets/pictures/avatar.jpg" alt="" class="img-details-little" >
                        </figure>
                    </div>
                    <div class="fit30 fltLeftStyle">
                        <p  class="change-how"> John the Hero </p>
                        <figure class="img-logo">
                            <a href="https://www.google.ro/?hl=ro">
                                <img src="../assets/pictures/logo.png" alt="" class="img-logo-dimensions" >
                            </a>
                        </figure>
                    </div>
                </div>
            </div> <div class="fit20 fltLeftStyle">
                <div class="row">
                    <div class="fit50 fltLeftStyle">
                        <figure>
                            <img src="../assets/pictures/avatar.jpg" alt="" class="img-details-little" >
                        </figure>
                    </div>
                    <div class="fit30 fltLeftStyle">
                        <p  class="change-how"> John the Hero </p>
                        <figure class="img-logo">
                            <a href="https://www.google.ro/?hl=ro">
                                <img src="../assets/pictures/logo.png" alt="" class="img-logo-dimensions" >
                            </a>
                        </figure>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Testimonials"
    }
</script>

<style scoped>
    .empty-all{
        margin: 0;
        padding: 0;
    }
    .second-banner{
        background-color: #cacaca;

    }
    .change-how{
        font-size: 0.8vw;
        display: block;
    }
    .img-logo-dimensions{
        width: 3vw;
        height: 6vh;
    }
    .img-logo{
        display: table-cell;
    }
    .img-details-little{
        width: 5vw;
        height: 10vh;
    }
    .img-details{
        width: 15vw;
        height: 30vh;
    }
    blockquote::before {
        content: open-quote;
        font-size: 13vw;
    }
    blockquote::after {
        content: close-quote;
        font-size: 13vw;
        display: table;
        clear: both;
        float: right;
    }
    blockquote {
        quotes: "“" "”" "‘" "’";
        font-size: 2vw;
        margin: 0;
        padding: 0;
        color: black;
    }
    figcaption{
        color: black;
        font-size: 1.5vw;
        margin: 2vh 0 0 0;
    }

</style>