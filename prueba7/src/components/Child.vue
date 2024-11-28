<script>
export default {
    data() {
        return {
            texto: '', // Guardamos el texto del input
        }
    },
    methods: {
        enviandoMensaje(){ 
            this.$emit('mensaje', this.texto) //Se emite un evento personalizado que envia al padre el texto ingresado en el input
        }
    },
}
</script>


<template>
    <div>
        <input v-model="texto" placeholder="Ingresar texto"/>
        <button @click="enviandoMensaje">Enviar</button>
    </div>
</template>
