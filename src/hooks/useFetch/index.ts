import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_HOST } from './constants';
import { ItemType } from '../../types/item.type';

type Response = {
  data: any;
  error: string;
  showLoading: boolean;
  getItems: () => void;
};

const useFetch = (urlPath: string): Response => {
  const [data, setData] = useState<ItemType[]>([]);
  const [err, setErr] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    madeRequest();
  }, []);

  const madeRequest = () => {
    setLoading(true);
    axios
      .get(urlPath, {
        baseURL: `http://${API_HOST}/api`,
        headers: {
          'x-rapidapi-host': API_HOST,
        },
      })
      .then((res) => setData(res.data.data))
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  };

  return {
    data,
    error: err,
    showLoading: loading,
    getItems: madeRequest,
  };
};

export default useFetch;
