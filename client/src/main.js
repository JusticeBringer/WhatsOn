import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

const apiUrl = 'https://vuecookbook.netlify.com/.netlify/functions/product-name?name=';

new Vue({
  render: h =>h(App),
  el: '#app',
  data: {
    errors: [],
    name: ''
  },
  methods:{
    checkForm: function (e) {
      e.preventDefault();

      this.errors = [];

      if (this.name === '') {
        this.errors.push('Product name is required.');
      } else {
        fetch(apiUrl + encodeURIComponent(this.name))
            .then(async res => {
              if (res.status === 204) {
                alert('OK');
              } else if (res.status === 400) {
                let errorResponse = await res.json();
                this.errors.push(errorResponse.error);
              }
            });
      }
    }
  }
}).$mount('#app');