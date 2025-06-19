import comfirm from "./../assets/icon-order-confirmed.svg"
import teramisu from "./../assets/image-tiramisu-desktop.jpg"
import panna from "./../assets/image-panna-cotta-desktop.jpg"
import brulee from "./../assets/image-creme-brulee-desktop.jpg"

function Comfirmation(){

    return(

        <div className="flex justify-center">
            <div className="bg-white w-[700px] rounded-2xl">
            <img className="p-12" src={comfirm} alt="" />

            <div className="px-12">
                <h1 className="text-5xl font-semibold pb-5">Order Comfirmed</h1>
                <p className="text-red-950">We hope you enjoy your food!</p>
            </div>

            
        <div className="p-12">

        <div className="bg-red-50 w-[600px] rounded-xl ">

<div className="flex items-center justify-between  px-8 p-5" >
    <div className="flex items-center gap-3">
        <img className="w-14 rounded-md" src={teramisu} alt="" />

        <div className="leading-7"> 
            <span className="font-semibold">Classic Tiramisu</span>
            <br />
            <span className="text-red-800 font-medium">1x </span> &nbsp; &nbsp; &nbsp; <span className="font-light"> @$5.50</span>
        </div>

        
    </div>
    <span className="font-semibold text-xl">$5.50</span>
</div>

<hr />
{/*  */}

<div className="flex items-center justify-between  px-8 p-5" >
    <div className="flex items-center gap-3">
        <img className="w-14 rounded-md" src={brulee} alt="" />

        <div className="leading-7"> 
            <span className="font-semibold">Vanilla Bean Creme Brulee</span>
            <br />
            <span className="text-red-800 font-medium">4x </span> &nbsp; &nbsp; &nbsp; <span className="font-light"> @$7.00</span>
        </div>

        
    </div>
    <span className="font-semibold text-xl">$28.00</span>
</div>

<hr />
{/*  */}

<div className="flex items-center justify-between  px-8 p-5" >
    <div className="flex items-center gap-3">
        <img className="w-14 rounded-md" src={panna} alt="" />

        <div className="leading-7"> 
            <span className="font-semibold">Vanilla Panna Cotta</span>
            <br />
            <span className="text-red-800 font-medium">2x </span> &nbsp; &nbsp; &nbsp; <span className="font-light"> @$6.50</span>
        </div>

        
    </div>
    <span className="font-semibold text-xl">$13.00</span>
</div>
<hr />
{/*  */}

        <div className="flex items-center justify-between  p-8">
            <span>Order Total</span>
            <span className="text-3xl font-bold">$46.50</span>
        </div>

        </div>

        <div className="pt-12"><button className="bg-[#c83b0e] hover:bg-[#86452f]  text-white text-2xl p-3 px-[210px] rounded-full">Start New Order</button></div>
        </div>
        </div>
        </div>
    )
}

export default Comfirmation