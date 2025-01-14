import React from 'react'
import play from '../../assets/hover.svg'
import illustration from '../../assets/illustration.svg'
import dot from '../../assets/dot.svg'

const Hero = () => {
  return (
    <section className='pt-32 bg-[#FEDAD4]'>
        <div className='container mx-auto max-w-[1262px]'>
            <div className='flex gap-[180px]'>
                <div className='w-[600px]'>
                    <h4 className='text-sm font-semibold'><img className='inline-block mb-6 translate-y-2' src={play} alt="Play image" /> Play showreel</h4>
                    <h2 className='text-[64px] font-black mb-[60px]'>Enjoy studying with Createx Online Courses</h2>
                    <div className='flex gap-6'>
                        <button className='w-[148px] h-[52px] border-solid border-2 border-[#F75E05] text-[#FF3F3A] rounded'>About us</button>
                        <button className='w-[201px] h-[52px] border-none bg-[#F75E05] text-[#fff] rounded'>Explore courses</button>
                    </div>
                </div>

                <div className='w-3/6 mb-[189px]'>
                    <img src={illustration} alt="image" />
                </div>
            </div>

            <div className='flex gap-[66px] pb-20'>
                <h2 className='text-[46px] font-black text-[#1E212C]'>1200 <strong className='inline-block text-base font-normal -translate-y-[10px]'>Students graduated</strong></h2>
                <img src={dot} alt="image" />
                <h2 className='text-[46px] font-black text-[#1E212C]'>84 <strong className='inline-block text-base font-normal -translate-y-[10px]'>Completed courses</strong></h2>
                <img src={dot} alt="image" />
                <h2 className='text-[46px] font-black text-[#1E212C]'>16 <strong className='inline-block text-base font-normal -translate-y-[10px]'>Qualified tutors</strong></h2>
                <img src={dot} alt="image" />
                <h2 className='text-[46px] font-black text-[#1E212C]'>5 <strong className='inline-block text-base font-normal -translate-y-[10px]'>Years of experience</strong></h2>
            </div>
        </div>
    </section>
  )
}

export default Hero