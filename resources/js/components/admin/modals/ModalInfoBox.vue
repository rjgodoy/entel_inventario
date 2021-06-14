<template>
    <div class="modal-card" style="width: 800px;">
        <header class="modal-card-head has-text-centered">
            <p class="modal-card-title has-text-weight-bold">Carga Información Efizity</p>
        </header>

        <section class="modal-card-body">
            <div class="is-size-5">Paso 1: Entrar con credenciales a <a href="http://entel.efizity.com" target="_black">entel.efizity.com</a></div>
            <div class="has-text-centered"><img width="500" src="/img/infoAdmin/info_1.png"></div>
            <div class="is-size-5">Paso 2: Entrar en "Consumos", seleccionar el período de tiempo y xportar en planilla excel (Exportar a XLS).</div>
            <div class="has-text-centered"><img width="700" src="/img/infoAdmin/info_2.png"></div>
            <div class="is-size-5">Paso 3: Arrastrar la planilla descargada al box de carga.</div>
            <div class="has-text-centered"><img width="400" src="/img/infoAdmin/info_3.png"></div>
            <div class="has-text-centered"><img width="400" src="/img/infoAdmin/info_4.png"></div>
        </section>

        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
        </footer>
    </div>
</template>

<script>    
    export default {
        components: {
        },

        props : [
        ],

        data() {
            return {
                
            }
        },
    }
</script>
