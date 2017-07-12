const initialState={
    loginType:'userLogin'
}

export default (state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN_CG':
            debugger;
            var companyList=[];
            var comItems= action.payload.Result;
            for (var i = 0; i < comItems.length; i++) {
                companyList.push(comItems[i]);
            }
            console.log(companyList);
            let newState={
                loginType:'companySelect'
            }
            return Object.assign({},state,newState);
        default:
            return state;
    }
}