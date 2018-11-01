<template>
    <div>
        <span>Webcomponent</span><br/>
        <slot name="slot-in-first-layer">first layer</slot>
        <sub-component>
            <slot name="slot-in-second-layer" slot="slot-in-second-layer"></slot>
        </sub-component>
    </div>
</template>

<script>
import SubComponent from "./components/sub-component.vue"

export default {
    name: "slots-in-webcomponents",
    data( ){
        return { };
    },
    components: { SubComponent },
}
</script>
