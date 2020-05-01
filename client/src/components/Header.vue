<template>
    <div class="row barLooks">
        <div class="fit10 fltLeft"><p/></div>
        <div class="fit80 fltLeft">
            <nav>
                <ul class="menu" id="">
                    <li> <a href="/"> SeeYou </a> </li>
                    <li class="icon" href="javascript:void(0)" onclick="">
                        <i class="fa fa-bars"></i>
                    </li>
                    <!-- HeaderLinks -->
                    <li class="fltRight"> <a href="/login"> Login </a> </li>
                    <li class="fltRight"> <a href="/register"> Register </a> </li>
                    <li class="fltRight"> <a href="/download"> Download </a> </li>
                    <li class="fltRight"> <a href="#pricing_section"> Pricing </a> </li>
                    <li class="fltRight"> <a href="#about_section"> About </a> </li>
                </ul>
            </nav>
        </div>
        <div class="fit10 fltLeft">
            <p/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .barLooks{
        background-color: #ffffff;
        box-shadow: 5px 2px 5px #888888;
        padding: 0.7vw 0.4vw 0.7vw 0.6vw;
        margin: 0 0 2vw 0;
    }

    .menu {
        list-style-type: none;
        overflow: hidden;
    }

    .menu .icon{
        display: none;
    }

    .row:after {
         content: "";
         display: table;
         clear: both;
     }

    li {
        float: left;
        line-height: 2vh;
    }

    a{
        font-size: 1.1vw !important;
        text-decoration: none;
        margin-right: 1.3vw;
        color: #44b4d2;
    }
    a:hover{
        color: #1441b0;
    }

    .fltLeft{
        float: left;
    }

    .fltRight{
        float: right;
    }
</style>