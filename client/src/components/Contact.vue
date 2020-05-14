<template>
    <div class="banner">
        <h1 class="text-banner"> Contact us  <br>
            <span class="read-mail"> - We read every email - </span>
        </h1>

        <div class="row">
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle"><p/></div>
            <div class="fit20 fltLeftStyle">
                <div v-if="$v.form.$error">
                    <p> Form has following errors: </p>
                    <div v-if="$v.form.user_email.$error">
                        <h2> Please enter a correct email address </h2>
                    </div>
                    <div v-if="$v.form.user_subject.$error">
                        <h2> Subject must have at least 5 characters </h2>
                    </div>
                    <div v-if="$v.form.user_description.$error">
                        <h2> Description must have at least 10 characters </h2>
                    </div>
                </div>
                <form @submit.prevent="checkFormContact">

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
                            :class="{ 'hasError': $v.form.user_subject.$error }"
                    >
                        <label for="subject" class="row">Subject </label>
                        <input
                                id="subject"
                                v-model="form.user_subject"
                                type="text"
                                name="subject"
                                placeholder="Enter subject here"
                        >
                    </div>

                    <div
                            :class="{ 'hasError': $v.form.user_description.$error }"
                    >
                        <label for="description" class="row" id="desc">Description </label>
                        <textarea
                                id="description"
                                v-model="form.user_description"
                                name="description"
                                placeholder="I'm writing this email because ... "
                                rows = 10
                                cols = 50
                        >
                        </textarea>

                    </div>

                    <p>
                        <input
                                type="submit"
                                value="Send your request"
                        >
                    </p>
                </form>
            </div>
        </div>

    </div>
</template>

<script>

    import {email, minLength, required} from "vuelidate/lib/validators";

    export default {
        name: "Contact",
        data() {
            return {
                form: {
                    user_email: '',
                    user_subject: '',
                    user_description: ''
                }
            }
        },
        validations:{
            form: {
                user_email: {required, email},
                user_subject: {required, min: minLength(5)},
                user_description: {required, min: minLength(10)}
            }
        },
        methods:{
            async checkFormContact(){
                this.$v.form.$touch();
                if(this.$v.form.$error)
                    return;

                console.log("User in check form contact", this.form.user_email, this.form.user_subject, this.form.user_description);

                window.location.href = "mailto:gabithebigg@gmail.com"
                    + "?cc=" + this.form.user_email
                    + "&subject=" + escape(this.form.user_subject)
                    + "&body=" + escape(this.form.user_description);
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
    .read-mail{
        font-size: 1.2vw;
        text-align: center;
    }
</style>