import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import slots_in_wc from "./slots-in-webcomponents";

Object
    .entries({ "slots-in-webcomponent" : slots_in_wc })
    .map( ([ key, component ]) => [ key, wrap( Vue, component ) ] )
    .forEach( ([ name, element ]) => window.customElements.define( name, element ) );
