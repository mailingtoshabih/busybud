import free from "../assets/freelance.png"
import wfh from "../assets/work-from-home.png"
import work from "../assets/working.png"

export const Colour = () => {
    return (
        <div className='mt-10'>


            <p className='my-16 font-semibold text-3xl w-full text-center '>
                Ullam eos possimus voluptatem
            </p>


            <div className='flex md:space-x-5 justify-center text-center'>


                <div className='w-full md:w-60 p-2 md:p-5 rounded-xl shadow-xl shadow-violet-100'>
                    <img src={work} alt="" className="max-h-30" />

                    <p className='mt-5 text-xs md:text-sm'>
                        Lorem ipsum dolor sit amet consectetur nam?
                    </p>
                </div>

                <div className='w-full md:w-60 p-2 md:p-5 rounded-xl shadow-xl shadow-violet-100'>
                    <img src={wfh} alt="" className="max-h-30" />

                    <p className='mt-5 text-xs md:text-sm'>
                        Lorem ipsum dolor sit amet consectef fm nam?
                    </p>
                </div>
                <div className='w-full md:w-60 p-2 md:p-5 rounded-xl shadow-xl shadow-violet-100'>
                    <img src={free} alt="" className="max-h-30" />

                    <p className='mt-5 text-xs md:text-sm'>
                        Lorem ipsum dolor sit amet consecmquam nam?
                    </p>
                </div>

               


              





            </div>




        </div>
    )
}
