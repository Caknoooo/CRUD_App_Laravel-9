import React from 'react'

export const New = () => {
  return (
    <div className='container'>
      <div className="product_create">
        
        <div className="titlebar">

          <div className="titlebar_item">
            <h1>Add Product</h1>
          </div>

          <div className="titlebar_item">
            <div className="btn">
              Save
            </div>
          </div>

        </div>

        <div className="card-wrapper">
          <div className="wrapper-left">
            <div className="card">
              <p>Name</p>
              <input type="text" name="" id="" />

              <p>Description (Optional)</p>
              <textarea cols="10" rows="5"></textarea>
            </div>
          </div>
          <div className="wrapper-right">
            Wrapper Right
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;