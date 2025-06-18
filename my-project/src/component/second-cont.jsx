
import teramisu from "./../assets/image-tiramisu-desktop.jpg"
import baklava from "./../assets/image-baklava-desktop.jpg"
import meringue from "./../assets/image-meringue-desktop.jpg"
import cart from "./../assets/icon-add-to-cart.svg"

function Second(){

    return(
        
        <div className="flex gap-9 relative left-64 bottom-[260px] ">
        
                   <div>
                    <img className="rounded-xl w-[300px] " src={teramisu} alt="" />
        
                    <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                        <img className="w-7" src={cart} alt="" /> 
                        <span className="font-semibold">Add to Cart</span>
                    </div>
        
                    <div className="leading-snug">
                        <p className="text-red-950">Tiramisu</p>
                        <p className="font-semibold text-2xl">Classic Tiramisu</p>
                        <p className="font-semibold text-2xl text-red-800">$5.50</p>
                    </div>
                   </div>
        
                   {/*  */}
        
                   <div>
                    <img className="rounded-xl w-[300px]" src={baklava} alt="" />
        
                    <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                        <img className="w-7" src={cart} alt="" /> 
                        <span className="font-semibold">Add to Cart</span>
                    </div>
        
                    <div className="leading-snug">
                        <p className="text-red-950">Baklava</p>
                        <p className="font-semibold text-2xl">Pistachio Baklava</p>
                        <p className="font-semibold text-2xl text-red-800">$4.00</p>
                    </div>
                   </div>
        
                   {/*  */}
        
                   <div>
                    <img className="rounded-xl w-[300px]" src={meringue} alt="" />
        
                    <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                        <img className="w-7" src={cart} alt="" /> 
                        <span className="font-semibold">Add to Cart</span>
                    </div>
        
                    <div className="leading-snug">
                        <p className="text-red-950">Pie</p>
                        <p className="font-semibold text-2xl">Lemon Meringue Pie</p>
                        <p className="font-semibold text-2xl text-red-800">$5.00</p>
                    </div>
                   </div>
        
        
                </div>
    )
}

export default Second