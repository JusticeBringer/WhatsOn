<template>
    <div>
        <div class="">
            <h1 class="text-banner"> Login </h1>

            <div class="row">
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit20 fltLeftStyle">
                    <button class="btLog" onclick="window.location = 'http://localhost:5000/login'">
                        Go to Login Area
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Login"
    }

</script>

<style scoped>
    .btLog{
        background-color: #4ca2ec;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: ease-in-out 0.4s;
        width: 100%;
        margin-bottom: 10vh;
    }
    .btLog:hover{
        background-color: #3974ac;
    }
    p{
        color: red;
        font-size: 1.5vw;
    }
    h2{
        color: #964e45;
        font-size: 1.5vh;
    }
</style>