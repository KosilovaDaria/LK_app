import { useCallback } from "react";

const useService = () => {
  const _api = './db.json';

  const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
    // setLoading(true);
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();
      // setLoading(false);
      return data;
    } catch (e) {
      // setLoading(false);
      // setError(e.message);
      throw e;
    }
  }, []);

  const getAllApartments = async () => {
    const res = await request(`${_api}`);
    // console.log(res.apartment)                                                                                                                                                                ;
    return res.apartment.map(_transformApartment);
  }

  const getApartment = async (id) => {
    const res = await fetch('/db.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res.apartment?.find(item => item.urlparam === id);
      });
    return _transformApartment(res);
  }
  //doesnt work?           
  // const getApartment = async (id) => {
  //   const res = await request(`${_api}`)
  //   .then(res => res.apartment)
  //   .then(res => res.find(item => item.id === id ))
  //   return res;             
  // }     

  const getStatistic = async (id) => {
    const res = await fetch('/db.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res.apartment?.find(item => item.urlparam === id);
      });
    return res.statistic;
  }


  const getReportsList = async (id) => {
    const res = await request(`${_api}`);;
    return res.apartment.map(_transformStatistic);
  }

  const getNotifications = async () => {
    const res = await request(`${_api}`);;
    return res.notifications;
  }

  const getNewNotifCount = async () => {
    const res = await request(`${_api}`)
      .then(res => res.notifications.filter(item => item.new === true));
    return res;
  }

  const _transformApartment = (apartment) => {
    return {
      id: apartment.id,
      name: apartment.name,
      urlparam: apartment.urlparam,
      adress: apartment.adress,
      contract: apartment.contract,
      ownership: apartment.ownership,
      occupancy: apartment.statistic[0].occupancy,

    }
  }
  const _transformStatistic = (statistic) => {
    return {
      id: statistic.id,
      name: statistic.name,
      urlparam: statistic.urlparam,
      adress: statistic.adress,
      contract: statistic.contract,
      ownership: statistic.ownership,
      occupancy: statistic.statistic[0].occupancy,
      reports: statistic.reports,
      statistic: statistic.statistic,
    }
  }

  const _transformReport = (report) => {
    return {
      id: report.id,
      month: report.month,
      read: report.read,
      accept: report.accept,
      personalaccount: report.personalaccount,
      principal: report.principal,
      agent: report.agent,
      director: report.director,
      title: report.title,
      // indicator:report.indicator,
      // sum:report.sum,
    }
  }

  return { getAllApartments, getApartment, getStatistic, getReportsList, getNotifications, getNewNotifCount }

}

export default useService;
