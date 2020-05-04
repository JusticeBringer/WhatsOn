<template>
  <div id="container">
    <HeadLinks/>
    <Header/>

    <HeroImage id="first_section">
    </HeroImage>
    <Servicii id="services_section">
    </Servicii>
    <Ranking id="ranking_section">
    </Ranking>
    <WhySeeYou id="why_section">
    </WhySeeYou>
    <Testimonials id="testimonials_section">
    </Testimonials>
    <About id="about_section">
    </About>
    <Pricing id="pricing_section">
    </Pricing>

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
