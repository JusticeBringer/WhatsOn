<template>
    <div class="banner">
        <h1 class="text-banner"> Contact us  <br>
            <span class="read-mail"> - We read every email - </span>
        </h1>

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
                        <label for="email" class="row">Your email address </label>
                        <input
                                id="email"
                                v-model="email"
                                type="text"
                                name="email"
                                placeholder="example@gmail.com"
                        >
                    </p>
                    <p>
                        <label for="subject" class="row">Subject </label>
                        <input
                                id="subject"
                                type="text"
                                name="subject"
                                placeholder="Enter subject here"
                        >
                    </p>

                    <p>
                        <label for="description" class="row">Description </label>
                        <textarea
                                id="description"
                                name="description"
                                placeholder="I'm writing this email because ... "
                                rows = 10
                                cols = 50
                        >
                        </textarea>

                    </p>

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
    export default {
        name: "Contact"
    }
</script>

<style scoped>
    .read-mail{
        font-size: 1.2vw;
        text-align: center;
    }
</style>