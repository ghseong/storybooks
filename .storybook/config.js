import { configure } from '@storybook/vue'
import Vue from 'vue'

// import your vue plugins
import Vuex from 'vuex'

// import your custom components
import Button from '../src/stories/Button.vue'

// install your vue plugins
Vue.use(Vuex);
// register your custom components
Vue.component('my-button', Button);
function loadStories() {
    // you can require as many stories as you need
    require('../src/stories');
}
configure(loadStories, module);