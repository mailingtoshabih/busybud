
import { Card } from "./Card"



export const Testimonials = () => {
    return (
        <div className='mt-10 md:mt-80'>


            <p className='my-10 font-semibold text-3xl w-full text-center '>
                Ullam eos possimus voluptatem
            </p>



            <div className='md:flex md:justify-center md:space-x-5 rounded-3xl p-3 md:p-10 shadow-xl shadow-violet-100 bg-violet-50'>

                <Card/>

                <Card/>

                <Card/>

            </div>




        </div>
    )
}
