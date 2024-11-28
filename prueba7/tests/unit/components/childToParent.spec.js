import { mount } from '@vue/test-utils'
import Child from '@/components/Child.vue'

describe('Child', () => {
  test('Verificar que al apretar el botón se envíe un texto', async () => {
    const wrapper = mount(Child); // Se monta el componente hijo
    
    const texto = 'Hola Hola'; // Creamos una variable para simular un texto
    await wrapper.find('input').setValue(texto); // Escribimos el texto en el input
    await wrapper.find('button').trigger('click'); // Simulamos el click en el botón

    // Verificamos que el evento 'mensaje' haya sido emitido correctamente y que el texto sea el escrito
    expect(wrapper.emitted('mensaje')[0][0]).toBe(texto);
  });
});


