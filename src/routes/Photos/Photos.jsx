"use client"
import { useDispatch } from 'react-redux'
import React from 'react'
import './Photos.css'
import axios from "axios";

export const Photos = () => {
    const dispatch=useDispatch()
    const handleclick=async()=>{
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
        dispatch({type:'updatephotos',payload:res.data})
    }
    catch(ex){
        console.log(ex)
    }
}
    return (
        <div>
            <div className="photos">Photos</div>
            <button onClick={handleclick}>getPhotos</button>
        </div>
    )
}
