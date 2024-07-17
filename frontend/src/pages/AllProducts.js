import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct] = useState(false)
  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className='text-bold text-lg'>All Products</h2>
        <button className='border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all py-1 px-3 rounded-full' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
      </div>
      {/* Upload Product component */}
      {
        openUploadProduct && (
          <UploadProduct onClose={()=>setOpenUploadProduct(false)}/>
        )
      }
    </div>
  )
}

export default AllProducts