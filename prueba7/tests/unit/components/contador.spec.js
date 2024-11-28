import { shallowMount } from "@vue/test-utils";
import Contador from '@/components/Contador.vue';
import store from '@/store/index.js';

describe('Componente Contador.vue', () => {
    test('Contador recibe un número inicial', () => {
        const wrapper = shallowMount(Contador, { //Montamos el componente 
            global: {
                plugins: [store] //Aquí pasamos el store para poder gestionar el estado
            }
        });
        expect(wrapper.find('h2').text()).toBe('0'); 
        //Encontramos el h2 que contiene el contador y el digito inicial del contador es 0.
    });

    test('El contador incrementa', async () => {
        const wrapper = shallowMount(Contador, {
            global: {
                plugins: [store]
            }
        });
        await wrapper.find('.sumar').trigger('click')// Buscamos el boton que aumenta el contador y ejecutamos el metodo click
        expect(wrapper.find('h2').text()).toBe('1')
         ///Se busca el h2 que contiene el contador y se espera que quede en 1
    });

    test('El contador disminuye', async() =>{
        const wrapper = shallowMount(Contador, {
            global: {
                plugins: [store]
            }
        });
        await wrapper.find('.restar').trigger('click')// Buscamos el boton que resta el contador y ejecutamos el metodo click

        //Se busca el h2 que contiene el contador y se espera que quede en 0, ya que el test
        //anterior sumo 1 al contador y cuando uno ejecuta este test lo resta y queda en cero, así que cumple su función.
        expect(wrapper.find('h2').text()).toBe('0')
    });
});