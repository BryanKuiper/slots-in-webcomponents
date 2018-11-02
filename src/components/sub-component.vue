<template>
    <div>
        <span>Sub component</span><br/>
        <multiselect
            name="ms_field" 
            v-model="ms_value"
            placeholder="MS"
            label="name"
            track-by="name"
            :multiple="false"
            :showLabels="false"
            :hideSelected="true"
            :disabled="false"
            open-direction="bottom"
            :options="ms_options"
            :class="{ 'ms-class': true, 'dynamic-ms-class': show_dynamic_ms_class }"
        >
            <span slot="noResult">No results</span>
        </multiselect>
        <slot name="slot-in-second-layer">Slot in second layer</slot>
    </div>
</template>

<script>
    import Multiselect from "vue-multiselect";

    export default {

        data( ){

            return {
                ms_value: "",
             };

        },

        components: { Multiselect, },

        computed: {
            ms_options( ){
                return [
                    { name: "option_1", value: "value_1" },
                    { name: "option_2", value: "value_2" },
                    { name: "option_3", value: "value_3" },
                    { name: "option_4", value: "value_4" },
                ]
            },
            show_dynamic_ms_class( ){
                return true;
            },
        },
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
