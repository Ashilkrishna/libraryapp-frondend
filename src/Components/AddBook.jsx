import React from 'react'
import NaviBar from './NaviBar'

const AddBook = () => {
    return (
        <div>
            <NaviBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Book Title</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Categorie</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Publish Year</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Author Name</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Book Description</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Distributer Name</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Publish Name</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Edition</label>
                                <input type="text" className="form-control" /></div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <button className="btn btn-success">Add</button>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
            )
}

            export default AddBook
