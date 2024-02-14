import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext";

const useFetch = (uri) => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const headers = {};

      if (user) {
        headers.Authorization = `Bearer ${user?.jwt}`;
      }

      try {
        const res = await fetch(uri, {
          headers,
        });
        const json = await res.json();

        // console.log('API Response:', json); // Lo

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri]);

  return { loading, data, error, setData, setError, setLoading };
};

export default useFetch;
