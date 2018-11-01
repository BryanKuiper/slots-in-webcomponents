<template>
    <div>
        <span>Sub component</span><br/>
        <slot name="slot-in-second-layer">Slot in second layer</slot>
    </div>
</template>

<script>

    export default {

        data( ){

            return { };

        }
    }
    
</script>
