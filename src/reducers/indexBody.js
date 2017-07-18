const initialState={
    MenuItems:[],
    Navs:{
        ActiveCode:100
    }
}

export default (state=initialState,actions)=>{
    debugger;
    //头部相关
   switch(actions.type){
        case 'INDEX_GETPOWER':
            const {MenuItems}=actions.payload;
            var menuStates={
                MenuItems:MenuItems
            }
            return Object.assign({},state,menuStates);
        case 'INDEX_CHANGE_NAV':
            const activeCode=actions.payload;
            debugger;
            var menuStates={
                Navs:{
                    ActiveCode:activeCode
                }
            }
            return Object.assign({},state,menuStates);
        default :
            return state;
        
   }
}