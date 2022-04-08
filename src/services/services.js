import { useCallback } from "react";

const useService = () => {
  const _api = './db.json';

  const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    // setLoading(true);
    try {
        const response = await fetch(url, {method, body, headers});

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        // setLoading(false);
        return data;
    } catch(e) {
        // setLoading(false);
        // setError(e.message);
        throw e;
    }
}, []);

const getAllApartments = async () => {
  const res = await request(`${_api}`);
  // console.log(res)                                                                                                                                                                ;
  return res.apartment.map(_transformApartment);
}
               
const getApartment = async (id) => {
  const res = await request(`${_api}`);
  return _transformApartment(res.apartment[0]);             
}     

const getReportsList = async () => {
  const res = await request(`${_api}`);
  // console.log(res)                                                                                                                                                                ;
  return res.apartment.map(_transformApartment); 
}



const _transformApartment = (apartment) => {
  return {
    id: apartment.id,
    name: apartment.name,
    urlparam:apartment.urlparam,
    adress: apartment.adress,
    contract: apartment.contract,
    ownership: apartment.ownership,
    occupancy:apartment.statistic[0].occupancy,
    reports:apartment.reports
  }
}

const _transformReport = (report) =>{
  return {
    id: report.id,
    month: report.month,
    read:report.read,
    accept:report.accept,
    personalaccount:report.personalaccount,
    principal:report.principal,
    agent:report.agent,
    director:report.director,
    title:report.title,
    // indicator:report.indicator,
    // sum:report.sum,
  }
}

return {getAllApartments, getApartment, getReportsList}

}

export default useService;
  