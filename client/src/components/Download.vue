<template>
    <div>
        <h1 class="text-banner"> Download SeeYou client  </h1>

        <div class="row">
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit1 fltLeftStyle"><p/></div>
            <div class="fit1 fltLeftStyle"><p/></div>
            <div class="fit1 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle">
                <h2 class="text-client"> Windows 10 </h2>

                <button class="download-button"> <img src="../assets/pictures/windows_logo.png" class="img-resize"> Download  </button>
            </div>
            <div class="fit20 fltLeftStyle">
                <h2 class="text-client"> Mac OS</h2>

                <button class="download-button"> <img src="../assets/pictures/mac_logo.png" class="img-resize"> Download  </button>
            </div>
            <div class="fit20 fltLeftStyle">
                <h2 class="text-client"> Linux OS</h2>

                <button class="download-button"> <img src="../assets/pictures/linux_logo.png" class="img-resize"> Download  </button>
            </div>
        </div>
        <div class="row some-space-bottom">
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit1 fltLeftStyle"><p/></div>
            <div class="fit1 fltLeftStyle"><p/></div>
            <div class="fit1 fltLeftStyle"><p/></div>
            <div class="fit70 fltLeftStyle">
                <p> For all the available downloads current version of SeeYou client is 5.0.1 (23502.0430) </p>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Download"
    }
</script>

<style scoped>
    .some-space-bottom{
        margin-bottom: 10vh;
    }
    .img-resize{
        width: 1.7vw;
        height: 3vh;
        margin-right: 0.4vw;
    }
    .text-client{
        font-size: 1.3vw;
        font-weight: 400;
    }
    .download-button{
        background-color: #2d70e1;
        color: white;
        transition: 0.3s ease-in;
        font-size: 1.2vw;
        border: 1px solid black;
        border-radius: 2px;
        padding: 0.5vw;
        margin: 2vh 0 2vh 0;
    }
    .download-button:hover{

    }
</style>