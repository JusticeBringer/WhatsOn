<template>
    <div>
        <div class="">
            <h1 class="text-banner"> Login </h1>

            <div class="row">
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit20 fltLeftStyle">
                    <div v-if="$v.form.$error">
                        <p> Form has following errors: </p>
                        <div v-if="$v.form.user_email.$error">
                            <h2> Please enter a correct email address </h2>
                        </div>
                        <div v-if="$v.form.user_password.$error">
                            <h2> Please enter a password </h2>
                        </div>
                    </div>
                    <form @submit.prevent="checkFormLogin">

                        <!-- Error checking
                        <p v-if="errors.length">
                            <b>Please correct the following error(s):</b>
                            <ul>
                                <li v-for="error in errors" :key="error.id">{{ error }}</li>
                            </ul>
                        </p>
                        -->

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

                        <p>
                            <input
                                    type="submit"
                                    value="Sign In"
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
            <div class="row some-space-login">
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit20 fltLeftStyle">
                    <button class="google-button"> Sign in with Google </button>
                    <button class="google-button"> Sign in with Facebook </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import UserService from "../UserService";
    import { required, email, minLength } from "vuelidate/lib/validators";

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    errors: [],
                    users: [],
                    error_users: '',
                    user_email: '',
                    user_password: ''
                }
            }
        },
        validations:{
            form: {
                user_email: {required, email},
                user_password: {required, min: minLength(2)}
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
            async checkFormLogin(){
                this.$v.form.$touch();
                if(this.$v.form.$error)
                    return;

                console.log("User in check form login", this.form.user_email, this.form.user_password);
                let itIs = false;

                await UserService.loginUser(this.form.user_email, this.form.user_password, 2)
                    .catch(() => {
                        console.log("User already in database");
                        alert("Account was not found. Please register!");
                        itIs = true;
                    });
                if (itIs === false)
                    alert('Login succesfull');
                itIs = false;
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
    .some-space-login{
        margin: 4vh 0 8vh 0;
    }
    .for-hr-text{
        font-size: 1.2vw;
        background-color: #ffffff;
        color: black;
        padding: 0 0.5vw 0 0.5vw;
    }
    .hr-text{
        width: 100%;
        height: 1.6vh;
        border-bottom: 1px solid black;
        text-align: center;
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
</style>