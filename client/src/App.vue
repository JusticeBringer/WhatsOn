<template>
  <div>
    <HeadLinks/>
    <Header/>

    <HeroImage/>
    <Servicii/>
    <Ranking/>
    <WhySeeYou/>
    <Testimonials/>
    <About/>
    <Pricing/>

    <Footer/>

  </div>
</template>

<script>

import HeadLinks from "./components/HeadLinks";
import Header from './components/Header';
import HeroImage from "./components/HeroImage";
import Servicii from "./components/Services";
import Ranking from "./components/Ranking";
import WhySeeYou from "./components/WhySeeYou";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";
import Pricing from "./components/Pricing";

export default {
  name: 'App',
  components: {
    HeadLinks,
    Header,
    HeroImage,
    Servicii,
    Ranking,
    WhySeeYou,
    Testimonials,
    About,
    Pricing,
    Footer
  }
}
</script>

<style>
    @import "assets/vue_css/vueStyle.css";
    @import "assets/vue_css/fonts.css";
</style>
