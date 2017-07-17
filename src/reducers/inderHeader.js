const initialState={
    NowCompanyId:localStorage.getItem('NowCompanyId')||'',
    Username:localStorage.getItem('Username')||'',
    CompanyList:localStorage.getItem('Companys')
}

export default (state=initialState,actions)=>{
    //头部相关
   switch(actions.type){
        case 'INDEX_HEADER_COMPANYBOX':
            var isShow=!state.CompanyBox.isShow;
            return Object.assign({},state,{
                CompanyBox:{
                    isShow:isShow
                }
             })
        default :
            return state;
        
   }
}