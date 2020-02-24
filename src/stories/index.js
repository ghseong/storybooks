import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Button from './Button.vue'
storiesOf('Button', module)
.add('Button as a template', () => (
    '<my-button>button as template</my-button>'
))
.add('Button as a component', () =>({
    components: {'the-button': Button},
    template: '<the-button>button as component</the-button>'
}))

// import { storiesOf } from '@storybook/vue'
// import StoryRouter from 'storybook-vue-router'
// import App from '@/App'
// //import your router
// // import router from '@/router'
// storiesOf('App', module)
//  .addDecorator(StoryRouter({}))
//  .add('app', () => ({
//      render: h => h(App)
//  }))