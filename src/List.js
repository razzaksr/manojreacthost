import { useEffect, useState } from "react"
import { callList } from "./API"

export const List=()=>{

    const[tmpArr,setTmpArr]=useState([])

    useEffect(()=>{
        const t =callList()
        setTmpArr(t)
    },[])

    return(
        <>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="table-responsive-lg">
                        <table className="table table-hover col-lg-6 col-md-8 col-sm-12 shadow p-3">
                            <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>NAme</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tmpArr.map((ele,ind)=>(
                                        <tr>
                                            <td>{ele.order}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.price}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}