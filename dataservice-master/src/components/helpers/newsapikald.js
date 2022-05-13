import React from 'react'
import axios from 'axios'

const api = {
    baseURL: "https://newsapi.org/v2/",
    apiKey: "&apiKey=33233ce6a04e43cb8c145d0732187d93"
    
  };

  /* https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=33233ce6a04e43cb8c145d0732187d93 */
export const hentNyheder = (soegeord, sprog) => {
   


    let endpoint = "everything?";
    let xtra = 'q=' + soegeord + '&sortBy=publishedAt&language=' + sprog
  
    let response = axios.get(api.baseURL + endpoint + xtra + api.apiKey)
      .then( res => {
        console.log(res);
        return res.data;
  
      })
  
      .catch((fejl) => {
        console.log("FEJL", fejl);
        return null;
  
      });
  
      return response;
  };
