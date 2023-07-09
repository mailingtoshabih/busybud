import check from "../assets/check.png"
import money from "../assets/money.png"
import target from "../assets/target.png"
import { Pricing } from "./Pricing"



export const Snake = () => {
    return (
        <div className='relatve'>


            <p className='my-16 font-semibold text-3xl w-full text-center '>
                Possimus voluptatem
            </p>


            <div className='w-full p-5 md:w-1/2 shadow-xl shadow-violet-50 rounded-xl'>

                <div className="flex justify-between">
                    <img src={check} className="h-10 w-10 my-auto" alt="" />

                    <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deleniti consectetur minus excepturi quos, atque nihil! Velit obcaecati quaerat fuga?
                </p>

                <Pricing />
            </div>





            <div className='md:absolute right-0 w-full p-5 md:w-1/2 shadow-xl shadow-violet-50 rounded-xl'>

                <div className="flex justify-between">
                    <img src={money} className="h-10 w-10 my-auto" alt="" />

                    <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deleniti consectetur minus excepturi quos, atque nihil! Velit obcaecati quaerat fuga?
                </p>

                <Pricing />
            </div>



            <div className='md:mt-72 w-full p-5 md:w-1/2 shadow-xl shadow-violet-50 rounded-xl'>

                <div className="flex justify-between">
                    <img src={target} className="h-10 w-10 my-auto" alt="" />

                    <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deleniti consectetur minus excepturi quos, atque nihil! Velit obcaecati quaerat fuga?
                </p>

                <Pricing />
            </div>



            <div className='md:absolute right-0 w-full p-5 md:w-1/2 shadow-xl shadow-violet-50 rounded-xl'>

                <div className="flex justify-between">
                    <img src={money} className="h-10 w-10 my-auto" alt="" />

                    <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deleniti consectetur minus excepturi quos, atque nihil! Velit obcaecati quaerat fuga?
                </p>

                <Pricing />
            </div>








        </div>
    )
}
