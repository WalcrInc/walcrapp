import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export const BASE_URL = "https://reluctant-jean-cliqpod-e187c94a.koyeb.app/v1";

const useFetchData = ({ url }) => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : null;
  const router = useRouter()
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
          },
        });
        return response.data;
      } catch (error) {
        if (error.response && error.response.status === 403) {
          router.push("/login")
        } else {
          console.error("Error fetching data:", error);
        }
        throw error;
      }
    },
    cacheTime: 600000, // 10 minutes
    staleTime: 300000, // 5 minutes
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });
};

export default useFetchData;
