import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SummaryApi from '../common';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import displayINRCurrency from '../helpers/displayCurrency';

const ProductDetails = () => {
    const [data, setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        sellingPrice: ""
    })
    const params = useParams()
    const [loading,setLoading] = useState(true)
    const productImageListLoading = new Array(4).fill(null)
    const [activeImage,setActiveImage] = useState("")

    const fetchProductDetails = async () => {
        setLoading(true)
        const response = await fetch(SummaryApi.productDetails.url, {
            method: SummaryApi.productDetails.method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                productId: params?.id
            })
        })
        setLoading(false)
        const dataResponse = await response.json()
        setData(dataResponse?.data)
        setActiveImage(dataResponse?.data?.productImage[0])
    }
    console.log("data",data)
    useEffect(()=>{
        fetchProductDetails()
    },[])

    const handleMouseEnterProduct = (imageURL)=>{
        setActiveImage(imageURL)
    }

    return (
        <div className='container mx-auto p-4'>
            <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
                {/* product image */}
                <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
                    <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200">
                        <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' alt="" />
                    </div>
                    <div className='h-full'>
                        {
                            loading ? (
                                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                                    {
                                        productImageListLoading.map((el)=>{
                                            return(
                                                <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage"}>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                            ): (
                                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                                    {
                                        data?.productImage?.map((imgURL,index)=>{
                                            return(
                                                <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                                                    <img src={imgURL} className='h-full w-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={()=>handleMouseEnterProduct(imgURL)} onClick={()=>handleMouseEnterProduct(imgURL)} alt="" />
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                            )
                        }
                    </div>
                </div>
                {/* product details */}
                {
                    loading ? (
                        <div className='flex flex-col gap-1'>
                    <p className='bg-green-100 text-green-600 px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
                    <h2 className='text-2xl lg:text-4xl font-medium'>{data?.productName}</h2>
                    <p className='capitalize text-slate-400'>{data?.category}</p>
                    <div className='text-green-600 flex items-center gap-1'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf/>
                    </div>
                    <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
                        <p className='text-green-600'>{displayINRCurrency(data.sellingPrice)}</p>
                        <p className='text-slate-400 line-through'>{displayINRCurrency(data.price)}</p>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <button className='border-2 border-green-600 rounded px-3 py-1 min-w-[120px] text-green-600 font-medium hover:bg-green-600 hover:text-white'>Buy</button>
                        <button className='border-2 border-green-600 rounded px-3 py-1 min-w-[120px]  bg-green-600 text-white font-medium hover:bg-white hover:text-green-600'>Add to Cart</button>
                    </div>
                    <div>
                        <p className='text-slate-600 font-medium my-1'>Description: </p>
                        <p>{data?.description}</p>
                    </div>
                </div>
                    ):(
                        <div className='flex flex-col gap-1'>
                    <p className='bg-green-100 text-green-600 px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
                    <h2 className='text-2xl lg:text-4xl font-medium'>{data?.productName}</h2>
                    <p className='capitalize text-slate-400'>{data?.category}</p>
                    <div className='text-green-600 flex items-center gap-1'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf/>
                    </div>
                    <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
                        <p className='text-green-600'>{displayINRCurrency(data.sellingPrice)}</p>
                        <p className='text-slate-400 line-through'>{displayINRCurrency(data.price)}</p>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <button className='border-2 border-green-600 rounded px-3 py-1 min-w-[120px] text-green-600 font-medium hover:bg-green-600 hover:text-white'>Buy</button>
                        <button className='border-2 border-green-600 rounded px-3 py-1 min-w-[120px]  bg-green-600 text-white font-medium hover:bg-white hover:text-green-600'>Add to Cart</button>
                    </div>
                    <div>
                        <p className='text-slate-600 font-medium my-1'>Description: </p>
                        <p>{data?.description}</p>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductDetails