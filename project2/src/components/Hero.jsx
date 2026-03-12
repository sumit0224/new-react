import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='w-full  rounded-2xl bg-green-200 flex justify-center gap-5 items-center ' style={{ backgroundImage: 'url("/bg.avif")', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="left w-[48vw] h-[80vh] flex flex-col justify-center text-white items-start px-12 gap-8">
                    <p>#1 Energy Provider in the world</p>
                    <h1 className='text-8xl'>New Energy <br />
                        for the world</h1>
                    <div className='flex gap-[50px]'>
                        <div className='border-b-2'>
                            Get in touch ↗
                        </div>
                        <div className='border-b-2'>
                            Our service ↗
                        </div>
                    </div>
                </div>
                <div className="right  w-[48vw] h-[80vh] relative flex flex-col justify-center items-center ">

                    <div className="card w-[250px] h-[270px] rounded-2xl relative bg-white/25 p-2">
                        <img src="/card.avif" alt="" className='w-[150px] h-[150px] rounded-2xl ' />
                        <div className='flex justify-between gap-[50px] items-center absolute bottom-0 mb-3 '>
                            <p className='px-2 rounded-full text-white border'>
                                ↗
                            </p>
                            <p className='w-40 text-white'>
                                Discover our recent project
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-[100px] absolute bottom-0 bg-amber-50 flex justify-evenly rounded-tl-2xl p-3'>
                        <div className='w-[120px] '>
                            <h2 className='text-xl text-center'> 6 mil</h2>
                            <p className='text-sm'> the company's annual net income</p>
                        </div>
                        <div className='w-[120px] '>
                            <h2 className='text-xl text-center'>315</h2>
                            <p className='text-sm'>project completed worldwide</p>
                        </div>
                        <div className='w-[120px] '>
                            <h2 className='text-xl text-center'>120K</h2>
                            <p className='text-sm'>employes work in the world wide</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero
