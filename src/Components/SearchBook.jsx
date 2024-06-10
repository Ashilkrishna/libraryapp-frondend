import React from 'react'
import NaviBar from './NaviBar'

const SearchBook = () => {
  return (
    <div>
        <NaviBar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Book Name</label>
                    <input type="text" className="form-control" />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default SearchBook
