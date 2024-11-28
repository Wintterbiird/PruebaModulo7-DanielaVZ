<script>
import Child from './Child.vue';

export default {
    components:{
        Child
    },
    data() {
        return {
            mensajeRecibido: ''//Guardamos el texto proveniente de componente hijo
        }
    },
    methods: {
        textoRecibido(texto){ //Actualiza los datos de la propiedad textoRecibido
        this.mensajeRecibido = texto 
        }
    },



    
}
</script>

<template>
    <div>
    <Child @mensaje="textoRecibido"/>
        <h3>{{mensajeRecibido}}</h3>
    </div>
</template>