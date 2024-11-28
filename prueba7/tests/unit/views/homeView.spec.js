import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'


describe('HomeView', () =>{
    test('Probando la existencia de la vista Homeview', async ()=>{
        const router = createRouter({ //Se define la ruta del componente que vamos a testear
            history: createWebHistory(),
            routes: [{
                path: '/home',
                name: 'HomeViewVue',
                component: HomeView
            }],
        })
        router.push('/home') // empuja a la ruta home
        await router.isReady() //espera que la ruta se haya cargado antes de montar el componente

        const wrapper = mount(HomeView, { 
            global:{
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(HomeView).exists()).toBe(true) //Se espera encontrar el componente Home
    })
})