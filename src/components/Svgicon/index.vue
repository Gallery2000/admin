<template>
    <svg :class="svgClass" aria-hidden="true">>
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
props:{
    iconClass:{
        type:String,
        default:''
    },
    className:{
        type:String,
        default:''
    }
},
computed:{
    iconName(){
        return `#icon-${this.iconClass}`
    },
    svgClass(){
        if(this.className){
            return 'svg-icon'+this.className
        }else{
            return 'svg-icon'
        }
    }
}
}
</script>

<style>

</style>
