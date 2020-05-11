<template>
    <div>

        <div class="about-banner">
            <div class="row">
                <h1 class="text-banner"> Users</h1>
            </div>
            <div class="row">
                <div class="fit30 fltLeftStyle"><p/></div>
                <div class="fit5 fltLeftStyle"><p/></div>
                <div class="fit30 fltLeftStyle">
                    <p v-if="error">
                        {{error}}
                    </p>

                    <div
                        v-for="(user, index) in users"
                        v-bind:item="user"
                        v-bind:index="index"
                        v-bind:key="user._id"
                    >
                        {{`${user.username}`}}

                    </div>

                </div>
            </div>
            <div class="row some-space">
                <div class="fit20 fltLeftStyle"><p/></div>
                <div class="fit10 fltLeftStyle"><p/></div>
                <div class="fit10 fltLeftStyle">
                 </div>

            </div>

        </div>

    </div>
</template>

<script>
    import UserService from "../UserService";

    export default {
        name: "Users",
        data(){
            return {
                users: [],
                error: '',
                text: ''
            }
        },
        async created() {
            try {
                this.users = await UserService.getUsers();
                console.log(this.users)

            } catch (err) {
                this.error = err.message;
            }
        }
    }
</script>

<style scoped>

</style>