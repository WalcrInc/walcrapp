import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useFetchData = ({url, token}) => {
  return useQuery({
    queryKey:[url],
    queryFn:async()=>{
        try {
           const response  = await axios.get(url,{
            headers:{
                Authorization:`Bearer ${token}`
            }

           }) 
           return response.data
        } catch (error) {
            // console.log(response?.data.error)

        }
    },
    cacheTime:600000,
  })
}



export default useFetchData