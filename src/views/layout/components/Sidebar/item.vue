<script>
export default {
functional:true,
props:{
    icon:{
        type:String,
        default:''
    },
    title:{
        type:String,
        default:''
    }
},
render(h,content){
    const {title,icon} = content.props;
    const vnode = [];
    if(icon){
        vnode.push(<svg-icon icon-class={icon}/>)
    }
    if(title){
        vnode.push(<span slot="title">{title}</span>)
    }
}
}
</script>

