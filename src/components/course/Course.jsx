import React from 'react'
import { USERS } from '../../static'

const Course = () => {
  return (
    <section className='mb-[120px]'>
        <div className='container mx-auto max-w-[1262px] dod'>
            <div className='flex items-center justify-between mb-[60px]'>
            <div>
                <h5 className='text-[#1E212C] text-base font-bold mb-2'>Ready to learn?</h5>
                <h2 className='text-[#1E212C] font-black text-[46px]'>Featured Courses</h2>
            </div>
            <div>
                <button className='w-[203px] h-[52px] text-[#FF3F3A] border-[1px] border-[#FF3F3A] text-base font-bold rounded'>View all courses</button>
            </div>
            </div>

            <div className='grid grid-cols-2 gap-[32px]'>
                {
                    USERS.map((user) => {
                      return <div key={user.id} className='flex items-center gap-3 border-[1px] border-[solid] rounded'>
                            <img src={user.url} alt="image" />

                            <div className='p-4'>
                                <h4 className='p-[1px] rounded text-[#fff] text-sm font-normal mb-[21px] inline-block' style={{background: user.profession.bg}}>{user.profession.title}</h4>
                                <h2 className='text-[#1E212C] mb-5 text-xl font-bold'>{user.title}</h2>
                                <strong className='text-[#FF4242] text-lg font-bold'>${user.price}</strong>
                                <strong className='text[#787A80] text-lg font-normal'>{user.name}</strong>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Course