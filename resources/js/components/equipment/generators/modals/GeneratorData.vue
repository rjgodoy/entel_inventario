<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head has-text-centered">
            <div class="modal-card-title">
                <div class="is-size-4 has-text-weight-semibold">Datos generador {{ generator.pop.nombre }}<br/>
                    <div class="is-size-5 has-text-weight-normal p-2">CRM {{ generator.pop.zona.crm.nombre_crm }} - {{ generator.pop.zona.cod_zona }} - {{ generator.pop.zona.nombre_zona }}</div>
                </div>
            </div>
        </header>

        <section class="modal-card-body">
            <div class="p-4">
                <div class="columns">
                    <div class="is-size-5 has-text-weight-semibold">Datos POP</div>
                </div>
                <div class="columns is-multiline">
                    <div class="column is-3" v-for="data in popData" :key="data.id">
                        <div class="is-size-6 has-text-weight-semibold">{{ data.title }}</div>
                        <div class="is-size-5 has-text-weight-normal">{{ data.info }}</div>
                    </div>
                </div>
            </div>

            <hr/>

            <div class="p-4">
                <div class="columns">
                    <div class="is-size-5 has-text-weight-semibold">Datos Grupo</div>
                </div>
                <div class="columns is-multiline">
                    <div class="column is-3" v-for="data in genData" :key="data.id">
                        <div class="is-size-6 has-text-weight-semibold">{{ data.title }}</div>
                        <div class="is-size-5 has-text-weight-normal">{{ data.info }}</div>
                    </div>
                </div>
            </div>

        </section>

        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Cerrar</button>
            <!-- <button class="button is-primary">Guardar</button> -->
        </footer>
    </div>
</template>

<script>    
    export default {
        props : [
            'generator',
            'last_day_data'
        ],

        data() {
            return {
                popData: [
                    {
                        "title": "Nombre POP",
                        "info": this.generator.pop.nombre,
                    },{
                        "title": "Código movil",
                        "info": this.generator.pop ? this.generator.pop.sites[0].nem_site : '-',
                    },{
                        "title": "Código fijo",
                        "info": this.generator.generator_platform.fixed_code ? this.generator.generator_platform.fixed_code : '-',
                    },{
                        "title": "Dirección",
                        "info": this.generator.generator_platform.address ? this.generator.generator_platform.address : 'Pendiente',
                    },{
                        "title": "Comuna",
                        "info": this.generator.pop ? this.generator.pop.comuna.nombre_comuna : '-',
                    },{
                        "title": "Region",
                        "info": this.generator.pop ? this.generator.pop.comuna.region.nombre_region : '-',
                    },{
                        "title": "Zona",
                        "info": this.generator.pop.zona ? this.generator.pop.zona.nombre_zona : '-',
                    },{
                        "title": "CRM",
                        "info": this.generator.pop.zona ? this.generator.pop.zona.crm.nombre_crm : '-',
                    },{
                        "title": "Sub Zona",
                        "info": this.generator.generator_platform.sub_zone ? this.generator.generator_platform.sub_zone : '-',
                    },{
                        "title": "Categoría",
                        "info": this.generator.generator_platform.category ? this.generator.generator_platform.category : 'Pendiente',
                    },{
                        "title": "Red mínima",
                        "info": this.generator.generator_platform.minimum_network ? 'Si' : 'No',
                    },{
                        "title": "Autonomía teórica",
                        "info": this.generator.generator_platform.theorical_authonomy ? this.generator.generator_platform.theorical_authonomy : '-',
                    }
                ],

                
            }
        },

        computed: {
            genData() {
                return [
                    {
                        "title": "Marca grupo",
                        "info": this.generator.generator_model ? this.generator.generator_model.generator_brand.name : '-',
                    },{
                        "title": "Modelo grupo",
                        "info": this.generator.generator_model ? this.generator.generator_model.name : '-',
                    },{
                        "title": "Marca motor",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_motor.name : '-',
                    },{
                        "title": "Modelo motor",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_motor.model : '-',
                    },{
                        "title": "Tipo estanque",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_fuel_pond.type : '-',
                    },{
                        "title": "Capacidad estanque",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_fuel_pond.capacity + ' Lts' : '-',
                    },{
                        "title": "Consumo estanque",
                        "info": this.last_day_data && this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_fuel_pond.capacity - this.last_day_data.fuel_level + ' Lts' : '-',
                    },{
                        "title": "Autonomía estanque",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_fuel_pond.autonomy : '-',
                    },{
                        "title": "Nombre sistema gestión",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_management_system.name : '-',
                    },{
                        "title": "Modelo sistema gestión",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_management_system.model : '-',
                    },{
                        "title": "Remoto",
                        "info": this.generator.generator_platform.g_model && this.generator.generator_platform.g_model.g_management_system.remote ? 'Si' : 'No',
                    },{
                        "title": "",
                        "info": null,
                    },{
                        "title": "Marca generador",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_generator_detail.brand : '-',
                    },{
                        "title": "Modelo generador",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_generator_detail.model : '-',
                    },{
                        "title": "Potencia generador",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_generator_detail.power : '-',
                    },{
                        "title": "Conexión generador",
                        "info": this.generator.generator_platform.g_model ? this.generator.generator_platform.g_model.g_generator_detail.connection : '-',
                    },{
                        "title": "IP SNMP",
                        "info": this.generator.pop.sites[0].nem_site,
                    },{
                        "title": "IP Individual",
                        "info": this.generator.ip ? this.generator.ip : '-',
                    },{
                        "title": "SSID",
                        "info": this.generator.ssid ? this.generator.ssid : '-',
                    },{
                        "title": "SUID",
                        "info": this.generator.suid ? this.generator.suid : '-',
                    },{
                        "title": "Protocolo",
                        "info": this.generator.generator_platform.g_protocol ? this.generator.generator_platform.g_protocol.name : '-',
                    },{
                        "title": "MIB nivel combustible",
                        "info": this.fuelMib(this.generator.generator_model ? generator.generator_model.generator_brand.mib : ''),
                    },{
                        "title": "MIB horometro",
                        // "info": this.horometerMib(this.generator.generator_platform.hurmeter.brand_id),
                    },{
                        "title": "Fecha instalación",
                        "info": this.generator.generator_platform.installation_date ? this.generator.generator_platform.installation_date : '-',
                    },
                ]
            }
        },

        watch: {

        },

        created() {
        },

        mounted() {
        },

        methods: {
            fuelMib(brand_id) {
                let spid = this.generator.generator_platform.fuel_level_spid; 
                let suid = this.generator.generator_platform.suid; 
                let ssid = this.generator.generator_platform.ssid; 
                let mib = this.generator.generator_model ? generator.generator_model.generator_brand.mib : '';

                switch(brand_id) {
                    case 1,4:
                        if (spid) {
                            mib = mib.replace("spid", spid);
                            return mib;
                        } else return '-'
                    case 2:
                        if (spid && suid && ssid) {
                            mib = mib.replace("spid", spid);
                            mib = mib.replace("suid", suid);
                            mib = mib.replace("ssid", ssid);
                            return mib;
                        } else return '-';
                    default:
                        return '-';
                }
            },

            horometerMib(brand_id) {
                let spid = this.generator.horometer_spid; 
                let suid = this.generator.suid; 
                let ssid = this.generator.ssid; 
                let mib = this.generator.generator_model ? generator.generator_model.generator_brand.mib : '';
                switch(brand_id) {
                    case 1,4:
                        if (spid) {
                            mib = mib.replace("spid", spid);
                            return mib;
                        } else return '-';
                    case 2:
                        if (spid && suid && ssid) {
                            mib = mib.replace("spid", spid);
                            mib = mib.replace("suid", suid);
                            mib = mib.replace("ssid", ssid);
                            return mib;
                        } else return '-';
                    default:
                        return '-';
                }
            }
        }
    }
</script>
