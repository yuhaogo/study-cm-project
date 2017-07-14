const initialState={
    FileManager:{
        IsView:false,
        FilePower:{

        },
        FolderPower:{

        }
    }
}

export default (state=initialState,actions)=>{
    //头部相关
   switch(actions.type){
        case 'INDEX_GETPOWER':
            const {MenuItems,SystemType}=actions.payload;
            console.log(MenuItems);
            console.log(SystemType);

            return state
        default :
            return state;
        
   }
}