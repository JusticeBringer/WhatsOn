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
    <Download id="download_section">
    </Download>
    <Register id="register_section">
    </Register>
    <Login id="login_section">
    </Login>
    <Contact id="contact_section">
    </Contact>
    <Users>

    </Users>

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
import Download from "./components/Download";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact";
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
    Download,
    Register,
    Login,
    Contact,

    Footer
  }

}
</script>

<style>
    @import "assets/vue_css/vueStyle.css";
    @import "assets/vue_css/fonts.css";
</style>
