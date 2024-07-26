import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
    return (
        <div>
            <CategoryList/>
            <BannerProduct/>
            <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpods"}/>
            <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>
            <VerticalCardProduct category={"refrigerator"} heading={"Top's Refrigerator"}/>
            <VerticalCardProduct category={"mouse"} heading={"Top's Mouse"}/>
            <VerticalCardProduct category={"camera"} heading={"Top's Camera"}/>
            <VerticalCardProduct category={"printers"} heading={"Top's Printer"}/>
            <VerticalCardProduct category={"processor"} heading={"Top's Processor"}/>
            <VerticalCardProduct category={"speakers"} heading={"Top's Speaker"}/>
            <VerticalCardProduct category={"television"} heading={"Top's Television"}/>
            <VerticalCardProduct category={"earphones"} heading={"Top's Earphone"}/>
            <VerticalCardProduct category={"mobiles"} heading={"Top's Mobiles"}/>
            <VerticalCardProduct category={"trimmers"} heading={"Top's Trimmers"}/>
        </div>
    )
}

export default Home