const axiosResponse = (response) => {
    if (response.status === 401) {
        console.log('401');;
    }
    
    return response;
  };
  
  export default axiosResponse