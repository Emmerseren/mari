import axios from "axios";

const api = {
  baseURL: "https://swapi.dev/api/",
  
};

export const hentPeople = () => {

  let endpoint = "people/";

  let response = axios

    .get(api.baseURL + endpoint)
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

export const hentStarships = () => {

  let endpoint = "starships/";

  let response = axios

    .get(api.baseURL + endpoint)
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

