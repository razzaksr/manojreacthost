import { useState } from "react"
import { callCreate } from "./API"

export const Create=()=>{

    const[mydata,setMydata]=useState({
        "order":0,
        "name":"",
        "price":0
    })

    const onTrack=(eve)=>{
        const{name,value}=eve.target
        setMydata((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const sub=()=>{
        callCreate(mydata)
    }

    return(
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow p-3">
                        <input onChange={onTrack} type="text" name="order" value={mydata.order} placeholder="Order id" className="form-control"/>
                        <input onChange={onTrack} type="text" name="name" value={mydata.name} placeholder="Order id" className="form-control"/>
                        <input onChange={onTrack} type="text" name="price" value={mydata.price} placeholder="Order id" className="form-control"/>
                        <div className="mt-2 row justify-content-around">
                            <button className="col-3 btn btn-outline-info" onClick={()=>{
                                sub()
                            }}>
                                <i class="bi bi-cloud-upload-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}