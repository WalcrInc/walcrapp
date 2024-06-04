import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

export const BASE_URL = "https://reluctant-jean-cliqpod-e187c94a.koyeb.app/v1";

const useFetchData = ({ url }) => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : null;

  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return response.data;
      } catch (error) {
        // console.log(response?.data.error)
      }
    },
    cacheTime: 600000,
  });
};

export default useFetchData;
