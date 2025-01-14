import React from 'react'
import { CREATEX } from '../../static'
import check from '../../assets/check.svg'
import about from '../../assets/about-image.svg'

const About = () => {
  return (
    <section className='mt-[180px] mb-[180px]'>
        <div className='container mx-auto max-w-[1262px]'>
            <div className='flex items-center justify-center gap-[135px] rounded'>
                <div>
                    <img src={about} alt="operator image" />
                </div>

                <div>
                    <h5 className='text-[#1E212C] text-base font-bold mb-2 text uppercase'>Who we are</h5>
                    <h2 className='text-[#1E212C] text-[46px] font-black mb-10'>Why Createx?</h2>
                    <ul>
                        {
                            CREATEX.map((item, inx) => {
                                return <li className='text-[#424551] text-base font-normal leading-6 mb-3' key={inx}>
                                <img className='inline-block' src={check} alt="" /> {item}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About