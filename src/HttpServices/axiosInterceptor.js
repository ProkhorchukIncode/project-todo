const createSetAuthInterceptor = options => config => {
      if (options) {
        config.headers.Authorization = `Bearer ${options}`;
      } else {
        delete config.headers.Authorization;
      }
      return config;
}

export default createSetAuthInterceptor