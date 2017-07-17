import cookie from 'js-cookie';

const initialState={
    SystemPostion:'Login',
    loginType:'userLogin',
    companyList:localStorage.getItem('Companys'),
    isLogin:cookie.get('isLogin')?true:false
}
export default (state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN_CG':
            var comItems= action.payload;
            localStorage.setItem('Companys',JSON.stringify(comItems));
            const newState={
                loginType:'companySelect',
                companyList:comItems
            }
            return Object.assign({},state,newState);
        case 'LOGIN_INDEX':
            debugger;
            localStorage.setItem('NowCompanyId',action.payload.CompanyId);
            localStorage.setItem('Username',action.payload.Name);
            const indexState={
                SystemPostion:'Index'
            }
            var test=Object.assign({},state,indexState);
            return test;
        default:
            return state;
    }
}