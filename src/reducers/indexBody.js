const initialState={
    MenuItems:[]
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
        default :
            return state;
        
   }
}