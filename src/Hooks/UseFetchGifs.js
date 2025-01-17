import { useState,useEffect } from "react";
import { getGift } from "../Helpers/getGifts";

export const UseFetchGifs=({category})=>{

    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const getInfo=async()=>{
       const info=await getGift(category);
       setData(info);
       setIsLoading(false);
    }
     
    useEffect(()=>{
        getInfo();
      },[]) ///Frena que se redibuje todo continuamente.y no puede ser asincrono por eso hacemos esta funcion
    
     return(
     {
       data,//data:data por ello se pone solo data cuando es igual a lo mismo
       isLoading   

     })



}

