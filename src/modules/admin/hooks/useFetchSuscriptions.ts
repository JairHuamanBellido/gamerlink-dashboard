import axios from "axios";
import { useEffect, useState } from "react";
import { Suscription } from "../models/Suscription.model";

export const useFetchSuscriptions = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSucces] = useState<boolean>(false);
  const [suscriptions, setSuscriptions] = useState<Suscription[]>([]);

  const getSuscriptions = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    setError(false);
    try {
      const res = await axios.get<Suscription[]>("https://api.gamerlink.xyz");
      setSuscriptions(res.data);
      setSucces(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSuscriptions();
  }, []);

  return { loading, error, success, suscriptions };
};
