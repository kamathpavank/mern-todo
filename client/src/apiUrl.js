let apiUrl = '';
if(process.env.REACT_APP_ENV === 'development'){
    apiUrl = 'http://localhost:3050/api/'
}else if(process.env.REACT_APP_ENV === 'qa'){
    apiUrl = 'http://localhost:3050/api/'
}else{
    apiUrl = 'http://localhost:3050/api/'
}
export  {apiUrl}
