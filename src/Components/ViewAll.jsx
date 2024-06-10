import React, { useState } from 'react'
import NaviBar from './NaviBar'

const ViewAll = () => {
    const [data,changeData]=useState(

    
    [
        {"bookname":"Digital proccessing","price":900,"img":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdzRNKF8WRwAtzXPC5WWvis3Atdw5a70eiSUn6OsRdkk3IS8QIRtnIv_ER5GOacrMgOWQLbA4zqyuFiIS2LdouQ3zbbphU-0-RoQ14yDbJ&usqp=CAE"},
        {"bookname":"Amjath","price":1100,"img":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRX_C73QoP69smhkV60IhrveG07naSofEYG9IebXfvvHxu8Y_cu0Hlyz4DVKlOQNTqITxXLHeQsUIjCYY9kaFDV6xy2PrUS3TCItwTNRVF6&usqp=CAE"}
    ]


    )


  return (
    <div>
      <div>
            <NaviBar/>
            <div className="container">
                <br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            
                            {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div class="card">
                                        <img src={value.img} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{value.bookname}</h5>
                                            <p class="card-text">{value.price}</p>
                                            <a href="#" class="btn btn-primary">Buy</a>
                                        </div>
                                    </div>
                                </div>
                                }
                                )
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewAll
