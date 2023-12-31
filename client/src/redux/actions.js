import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRIES_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
    ORDER_BY_NAME, POST_ACTIVITY, GET_ACTIVITIES, ORDER_BY_POPULATION } from "./actions-types";
    
import axios from "axios";


export const getCountries = () => async (dispatch) => {
try {
    let response = await axios.get("/countries");
    return dispatch({ type: GET_COUNTRIES, payload: response.data});
} catch (error) {
    alert('Country not found')
}
};

export const getCountriesByName = (name) => {
    return async function (dispatch) {
      try {
        let response = await axios.get(`countries/name?name=${name}`);
        console.log(response.data);
  
        if (response.data.length !== 0) {
            dispatch({ type: GET_COUNTRIES_BY_NAME, payload: response.data });
        }else{
            alert('No se encontraron resultados.');
        }
  
      } catch (error) {
        alert('Country not found');
      }
    };
  };


export const getCountry = (id) => {
return async function (dispatch){
    const json = await axios.get(`/countries/${id}`);
    const country = json.data;
    dispatch({ type: GET_COUNTRY, payload: country})
}
}

export const getActivities = () => {
return async function (dispatch){
    let json = await axios.get("/activities");
    const activity = json.data
    return dispatch({type: GET_ACTIVITIES, payload: activity})
}
}

export const postActivity = (payload) => {
return async function(dispatch){
    let json = await axios.post("/activities", payload);
    const activity = json.data
    return dispatch({type: POST_ACTIVITY, payload: activity})
}
};


export const filterByContinent = (payload) => {
return {type: FILTER_BY_CONTINENT, payload}
}

export const filterByActivity = (payload) => {
return {type: FILTER_BY_ACTIVITY, payload}
}

export const orderByName = (payload) => {
return {type: ORDER_BY_NAME, payload}
}

export const orderByPopulation = (payload) => {
return {type: ORDER_BY_POPULATION, payload}
}
