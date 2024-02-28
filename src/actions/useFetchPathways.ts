import { useState, useEffect } from "react";
import { IPathway } from "../interfaces/pathway";

const useFetchPathways = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPathway[]>([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.blackbullion.com/api/_dev/pathways"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { isLoading, data, isError, refetch };
};

export default useFetchPathways;
