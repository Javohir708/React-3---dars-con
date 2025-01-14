import React from 'react'
import logo from '../../assets/logo.svg'
import person from '../../assets/Person.svg'
import { LINKS } from '../../static'

const Header = () => {
  return (
    <header className='pt-5 bg-[#FEDAD4]'>
        <div className='container mx-auto max-w-[1262px]'>
            <nav className='flex items-center justify-between h-[52px]'>
                <div className='flex gap-14'>
                    <img src={logo} alt="logo image" />
                <ul className='flex gap-10 text-base font-bold text-[#424551]'>
                  {
                    LINKS.map((item, inx) => {
                      return <li key={inx}>
                        <a className='hover:text-[#F75E05] duration-150' href="#"><span>{item}</span></a>
                      </li>
                    })
                  }
                </ul>
                </div>
                <div className='flex gap-9 items-center'>
                  <button className='w-64 h-[48px] bg-[#F75E05] text-[#fff] font-bold text-base rounded-[4px]'>Get consultation</button>
                  <strong className='cursor-pointer'><img className='inline-block' src={person} alt="" /> Log in / Register</strong>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header