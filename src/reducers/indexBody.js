const initialState={
    MenuItems:[],
    Navs:{
        ActiveCode:100
    },
    FolderItems:[]
}

export default (state=initialState,actions)=>{
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
            var menuStates={
                Navs:{
                    ActiveCode:activeCode
                }
            }
            return Object.assign({},state,menuStates);
        case 'INDEX_GETFOLDERS':
            const folders=actions.payload;
            var newStates={
                FolderItems:folders
            }
            return Object.assign({},state,newStates);
        default :
            return state;
        
   }
}