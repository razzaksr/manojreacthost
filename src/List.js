import { useEffect, useState } from "react"
import { callList } from "./API"
import { Create } from "./Create"

export const List=()=>{

    const[tmpArr,setTmpArr]=useState([])

    const[cview,setCview]=useState(false)

    useEffect(()=>{
        const t =callList()
        setTmpArr(t)
    },[])

    return(
        <>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    {(cview)?
                    <>
                        <Create/>
                        <button className="btn btn-outline-dark" onClick={()=>{
                            setCview(false)
                        }}>
                            <i class="bi bi-skip-backward-circle-fill"></i>
                        </button>
                    </>
                    :
                    <>
                        <button className="btn btn-outline-primary" onClick={()=>{
                            setCview(true)
                        }}>
                            <i class="bi bi-cloud-plus-fill"></i>
                        </button>
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
                    </>
                    }
                </div>
            </div>
        </>
    )
}