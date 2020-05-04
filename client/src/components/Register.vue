<template>
    <div class="banner">
        <h1 class="text-banner"> Register </h1>

        <div class="row">
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle">
                <form id="app" @submit="checkForm" method="post">

                    <!-- Error checking
                    <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                            <li v-for="error in errors" :key="error.id">{{ error }}</li>
                        </ul>
                    </p>
                    -->

                    <p>
                        <label for="email" class="row">Email address </label>
                        <input
                                id="email"
                                v-model="email"
                                type="text"
                                name="email"
                                placeholder="example@gmail.com"
                        >
                    </p>
                    <p>
                        <label for="password" class="row">Password</label>
                        <input
                                id="password"
                                v-model="password"
                                type="password"
                                name="password"
                                placeholder="***********"
                        >
                    </p>
                    <p>
                        <label for="confirmpassword" class="row">Confirm password</label>
                        <input
                                id="confirmpassword"
                                v-model="password"
                                type="password"
                                name="password"
                                placeholder="***********"
                        >
                    </p>

                    <p>
                        <input
                                type="submit"
                                value="Sign Up"
                        >
                    </p>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle">
                <div class="hr-text">
                  <span class="for-hr-text">
                    OR
                  </span>
                </div>
            </div>
        </div>
        <div class="row some-space-top">
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle">
                <button class="google-button"> Sign up with Google </button>
                <button class="google-button"> Sign up with Facebook </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }

</script>

<style scoped>
    .google-button{
        background-color: #ffffff;
        color: black;
        transition: 0.3s ease-in;
        font-size: 0.8vw;
        border: 1px solid black;
        border-radius: 2px;
        padding: 0.4vw;
        width: 100%;
        margin-bottom: 2vh;
    }
    .google-button:hover{
        background-color: #d3d3d3;
    }
    .some-space-top{
        margin: 4vh 0 0 0;
    }
    .for-hr-text{
        font-size: 1.2vw;
        background-color: #EFEFEF;
        color: black;
        padding: 0 0.5vw 0 0.5vw;
    }
    .hr-text{
        width: 100%;
        height: 1.6vh;
        border-bottom: 1px solid black;
        text-align: center;
    }
    label{
        font-size: 1vw;
        color: black;
    }
    label:after{
        margin: 0 0 1.2vh 0 !important;
    }

    input[type=text] {
        width: 100%;
        padding: 0.6vw;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin: 0.4vh 0 0.6vh 0;
        resize: vertical;
    }

    input[type=email]{
        width: 100%;
        padding: 0.6vw;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin: 0.4vh 0 0.6vh 0;
        resize: vertical;
    }

    input[type=password] {
        width: 100%;
        padding: 0.6vw;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin: 0.4vh 0 0.6vh 0;
        resize: vertical;
    }

    input[type=submit] {
        background-color: #4ca2ec;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: ease-in-out 0.4s;
        width: 100%;
    }

    input[type=submit]:hover {
        background-color: #3974ac;
    }
</style>