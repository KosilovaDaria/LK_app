import { useCallback } from "react";

const useService = () => {
  const _api = './db.json';
  // const _api = 'http://lk.local';

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
//Получение списка апартаментов
  const getAllApartments = async (id) => {
    const res = await request(`${_api}`);
    // console.log(res.apartment)                                                                                                                                                                ;
    return res.apartment.map(_transformApartment);
  }
//получение апартамента по id
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
//получение статистики
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

//получение списка отчетов
  const getReportsList = async (id) => {
    const res = await fetch('/db.json')
      .then(res => {
        return res.json();
      })
      // .then(res => {
      //   return res.apartment?.find(item => item.id === id);
      // });
      //поиск по URL-параметрам
      .then(res => {
        return res.apartment?.find(item => item.urlparam === id);
      });
    return res.reports;
  }

  const getReport = async (apartmentId, reportId) => {
    const res = await fetch('/db.json')
      .then(res => {
        return res.json();
      })
      //поиск по URL-параметрам
      .then(res => {
        return res.apartment?.find(item => item.urlparam === apartmentId);
      })
      .then(res => {
        return res.reports?.find(item => item.urlparam === reportId);
      });
      //поиск по айдишникам
      // .then(res => {
      //   return res.apartment?.find(item => item.id === apartmentId);
      // })
      // .then(res => {
      //   return res.reports?.find(item => item.reportId === reportId);
      // });
    return res;
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
      chartdata:apartment.chartData,
      // statistic:apartment.statistic

    }
  }


  return { getAllApartments, getApartment, getStatistic, getReportsList, getReport, getNotifications, getNewNotifCount }

}

export default useService;
