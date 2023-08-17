import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = ({theme,switchTheme}) => {
const [nav, setNav] = useState(false)


  return (
    <div className={theme==='light'?'w-full':'w-full  bg-[#151515]'}>
    <div className={theme==='light'? 'max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-white '
                      : 'max-w-[1640px] mx-auto flex justify-between items-center p-4   bg-[#151515] '}>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} style={{color:'rgb(249 115 22)'}} />
        </div>
        <h1 className={theme==='light'?'text-2xl sm:text-3xl lg:text-4xl px-2':'text-2xl sm:text-3xl lg:text-4xl px-2 text-white'}>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className={theme==='light'?'hidden lg:flex items-center bg-gray-200 rounded-full p-1 ml-2 text-[14px]':'hidden lg:flex items-center ml-2 bg-white/20 rounded-full p-1 text-[14px]'}>
          <p className={theme==='light'?'bg-black font-bold cursor-pointer text-white rounded-full p-2':'bg-gray-200 font-bold cursor-pointer text-black rounded-full p-2'}>ارسال با پیک</p>
          <p className={theme==='light'?'p-2 font-bold cursor-pointer':'p-2 font-bold cursor-pointer text-white'}>دریافت حضوری</p>
        </div>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none rtl placeholder:font-bold'
          type='text'
          placeholder='جستجوی غذا...'
        />
      </div>
      {/* Cart button */}
      <button className={theme==='light'?'bg-black text-white hidden md:flex items-center py-2 rounded-full':'bg-gray-200 text-black hidden md:flex items-center py-2 rounded-full'}>
        <BsFillCartFill size={20} className='mr-2' /> سبد خرید
      </button>
      <div>
      <label className="ui-switch">
                    <input type="checkbox" onClick={switchTheme}/>
                    <div className="slider">
                        <div className={theme !== 'dark' ? "circle" : "circle checked"}></div>
                    </div>
                </label>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav && theme==='light' ? 'rtl fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : nav && theme!=='light' ?'rtl fixed top-0 left-0 w-[300px] h-screen bg-black z-10 duration-300':'rtl fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30} style={{color:'rgb(249 115 22)'}}
          className='absolute left-4 top-4 cursor-pointer font-extrabold'
        />
        <h2 className={theme==='light'?'text-2xl p-4':'text-2xl p-4 text-white'}>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className={theme==='light'?'flex flex-col p-4 text-gray-800':'flex flex-col p-4 text-gray-200'}>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='ml-4' /> سفارشات</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='ml-4' /> مورد علاقه ها</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='ml-4' /> کیف پول</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='ml-4' /> پشتیبانی</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='ml-4' /> ارتقاء حساب</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='ml-4' /> بهترین ها</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='ml-4' /> دعوت از دوستان</li>
            </ul>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Navbar;