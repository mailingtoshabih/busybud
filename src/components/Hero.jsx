import people from "../assets/people.png"

export const Hero = () => {
  return (
    <div className='mt-10 md:flex justify-center'>
        


            <div className='w-full md:w-1/2 '>

                <p className='my-5 text-5xl font-bold text-gray-800'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <p className='my-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum corrupti ipsam quis voluptatum distinctio vero magni ad veritatis mollitia sit ipsa accusamus nihil, quidem velit sunt non enim perspiciatis! Quam corrupti voluptas, amet quas consectetur quasi sequi ab eos voluptatum id illo odit autem deserunt voluptate, dicta, fugit ducimus impedit.
                </p>

                <button className='my-5 bg-violet-900 text-white font-semibold p-3 px-5 rounded-full'>
                    Check Pricing
                </button>

            </div>








            <div className='w-full md:w-1/2'>
                <img src={people} alt="" />
            </div>











    </div>
  )
}
