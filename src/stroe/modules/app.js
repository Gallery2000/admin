import Cookie from 'js-cookie';

const app = {
    state:{
        sidebar:{
            opened:Cookie.get('sidebarStatus')?!!+Cookie.get('sidebarStatus'):true,
            withoutAnimation:true
        },
        device: 'desktop'
    },
    mutations:{
        TOGGLE_SIDEBAR:state=>{
            state.sidebar.opened = !state.sidebar.opened ;
            state.sidebar.withoutAnimation = false;
            if(state.sidebar.opened){
                Cookie.set('sidebarStatus',1);
            } else{
                Cookie.set('sidebarStatus',0);
            }
        },
        CLOSE_SIDEBAR:(state,withoutAnimation)=>{
            state.sidebar.opened  = false;
            Cookie.set('sidebarStatus',0);
            state.sidebar.withoutAnimation = withoutAnimation
        },
        actions:{
            toggleSldeBar({commit}){
                commit('TOGGLE_SIDEBAR');
            },
            closeSideBar({commit},{withoutAnimation}){
                commit('CLOSE_SIDEBAR',withoutAnimation);
            }
        }
    }
}
export default app;