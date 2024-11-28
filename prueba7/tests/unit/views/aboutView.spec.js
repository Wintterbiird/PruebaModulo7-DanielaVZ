import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'


describe('AboutView', () =>{
    test('Probando la existencia de la vista AboutView', async ()=>{
        const router = createRouter({ //Se define la ruta del componente que vamos a testear
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'AboutViewVue',
                component: AboutView
            }],
        })
        router.push('/about')  // empuja a la ruta about
        await router.isReady() //espera que la ruta se haya cargado antes de montar el componente

        const wrapper = mount(AboutView, { //Montamos el componente 
            global:{
                plugins: [router] 
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true) //Se espera encontrar el componente About
    })
})
