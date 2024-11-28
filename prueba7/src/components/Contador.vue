<script>
import { mapState } from "vuex";

export default {
    computed: {
    ...mapState(["contador"]),
    },
    methods: {
        sumar() {
        this.$store.commit("incrementar");
    },
        restar() {
        this.$store.commit("decrementar");
    },
    },
};
</script>

<template>
  <div>
    <h2>{{ contador }}</h2>
  </div>
  <button class="sumar" @click="sumar">+1</button>
  <button class="restar" @click="restar">-1</button>
</template>
