import React from 'react';
export const TokenContext = React.createContext();

export default ({children})=> {
  const [token,setToken]=React.useState(null);
  React.useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    console.log(params.get('redirecturl'))
if(params.get('redirecturl')){
  localStorage.getItem("token")  && (window.location.href=`${params.get('redirecturl')}/?token=${localStorage.getItem("token")}`) 
}
  //localStorage.getItem("token")  && (window.location.href=`${params.get('redirecturl')}/?token=${localStorage.getItem("token")}`) 
  },[])
    return (
      <TokenContext.Provider value={{token,setToken}}>
       {children}
      </TokenContext.Provider>
    )
}