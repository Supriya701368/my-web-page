"use client"
import { useSelector } from 'react-redux'
import React, { Fragment, useState } from 'react'
import styles from './Count.module.css'
export const Count = () => {
    const [count, setConnt] = useState(0)
    const{photos}=useSelector((state)=>{
       return{
        photos: state.appReducer.photos
       }
    })
    const fnIncrement = () => {
        setConnt(count + 1);
    }
    return (<Fragment >
        <div data-testid="count" className={styles.clr}>Count</div>
        <h1>{count}</h1>
        <button onClick={fnIncrement}>Increment</button>
        {
            photos.length > 0 && <ol>
                {
                    photos.map(({ title, thumbnailUrl }, index) => {

                        return <li key={index}>
                            <div>{title}</div>
                            <img src={thumbnailUrl} />
                        </li>

                    })
                }
            </ol>
        }
    </Fragment>
    )
}
