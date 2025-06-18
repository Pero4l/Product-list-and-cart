import waffles from "./../assets/image-waffle-desktop.jpg"
import brulee from "./../assets/image-creme-brulee-desktop.jpg"
import macaron from "./../assets/image-macaron-desktop.jpg"
import cart from "./../assets/icon-add-to-cart.svg"

function First(){

    return(

        <div className="flex gap-9 relative bottom-80 left-64">

           <div>
            <img className="rounded-xl w-[300px] " src={waffles} alt="" />

            <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                <img className="w-7" src={cart} alt="" /> 
                <span className="font-semibold">Add to Cart</span>
            </div>

            <div className="leading-snug">
                <p className="text-red-950">Waffle</p>
                <p className="font-semibold text-2xl">Waffle with Berries</p>
                <p className="font-semibold text-2xl text-red-800">$6.50</p>
            </div>
           </div>

           {/*  */}

           <div>
            <img className="rounded-xl w-[300px]" src={brulee} alt="" />

            <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                <img className="w-7" src={cart} alt="" /> 
                <span className="font-semibold">Add to Cart</span>
            </div>

            <div className="leading-snug">
                <p className="text-red-950">Creme Brulee</p>
                <p className="font-semibold text-2xl">Vanilla Bean Creme Brulee</p>
                <p className="font-semibold text-2xl text-red-800">$7.00</p>
            </div>
           </div>

           {/*  */}

           <div>
            <img className="rounded-xl w-[300px]" src={macaron} alt="" />

            <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                <img className="w-7" src={cart} alt="" /> 
                <span className="font-semibold">Add to Cart</span>
            </div>

            <div className="leading-snug">
                <p className="text-red-950">Maracon</p>
                <p className="font-semibold text-2xl">Macaron Mix of Five</p>
                <p className="font-semibold text-2xl text-red-800">$8.00</p>
            </div>
           </div>


        </div>
    )
}

export default First