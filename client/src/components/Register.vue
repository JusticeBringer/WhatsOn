<template>
    <div class="banner">
        <h1 class="text-banner"> Register </h1>

        <div class="row">
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle"><p/></div>

            <div class="fit20 fltLeftStyle">
                <div class="summary text-red" v-if="$v.form.$error">
                    <p> Form has following errors: </p>
                    <div v-if="$v.form.user_email.$error">
                        <h2> Please enter a correct email address </h2>
                    </div>
                    <div v-if="$v.form.user_username.$error">
                        <h2> Please enter an username</h2>
                    </div>
                    <div v-if="$v.form.user_password.$error">
                        <h2> Please enter a password </h2>
                    </div>
                    <div v-if="$v.form.user_confirmpassword.$error">
                        <h2> Please confirm your password </h2>
                    </div>
                </div>
                <form @submit.prevent="checkForm">

                    <div
                            :class="{ 'hasError': $v.form.user_email.$error }"
                    >
                        <label for="email" class="row">Email address </label>
                        <input
                                id="email"
                                v-model="form.user_email"
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                        >
                    </div>

                    <div
                            :class="{ 'hasError': $v.form.user_username.$error }"
                    >
                        <label for="username" class="row">Username </label>
                        <input
                                id="username"
                                v-model="form.user_username"
                                type="text"
                                name="username"
                                placeholder="Username"
                        >
                    </div>

                    <div
                            :class="{ 'hasError': $v.form.user_password.$error }"
                    >
                        <label for="password" class="row">Password</label>
                        <input
                                id="password"
                                v-model="form.user_password"
                                type="password"
                                name="password"
                                placeholder="***********"
                        >
                    </div>

                    <div
                            :class="{ 'hasError': $v.form.user_confirmpassword.$error }"
                    >
                        <label for="confirmpassword" class="row">Confirm password</label>
                        <input
                                id="confirmpassword"
                                v-model="form.user_confirmpassword"
                                type="password"
                                name="confirmpassword"
                                placeholder="***********"
                        >
                    </div>

                    <p>
                        <input
                                type="submit"
                                value="Sign up"
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

    import UserService from "../UserService";
    import { required, email, minLength } from "vuelidate/lib/validators";

    export default {
        name: "Register",
        data() {
            return {
                form: {
                    errors: [],
                    users: [],
                    error_users: '',
                    user_email: '',
                    user_username: '',
                    user_password: '',
                    user_confirmpassword: ''
                }
            }
        },
        validations:{
          form: {
              user_email: {required, email},
              user_username: { required, min: minLength(2)},
              user_password: {required, min: minLength(2)},
              user_confirmpassword: {required, min: minLength(2)}
          }
        },

        async created() {
            try {
                this.form.users = await UserService.getUsers();
                console.log("Users in register.vue ", this.form.users)

            } catch (err) {
                this.form.error_users = err.message;
            }
        },
        methods:{
            async checkForm(){
                this.$v.form.$touch();
                if(this.$v.form.$error)
                    return;

                console.log("User in check form ", this.form.user_email, this.form.user_password, this.form.user_username);

                if (await UserService.insertUser(this.form.user_email, this.form.user_password, this.form.user_username, 1)
                    .catch((r)  => {
                        console.log(r);
                    })){
                    alert('Registration completed. You will be redirected to login page.');
                    window.location = 'http://localhost:5000/login'
                }
                else{
                    console.log("User already in database");
                    alert("Email address is already in use");
                }

            },
        }
    }

</script>

<style scoped>
    p{
        color: red;
        font-size: 1.5vw;
    }
    h2{
        color: #964e45;
        font-size: 1.5vh;
    }

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
        background-color: #54b6d3;
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

</style>