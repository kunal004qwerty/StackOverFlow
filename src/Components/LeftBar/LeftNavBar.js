import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LeftNavBar() {
    const location = useLocation();
    return (
        <>
            <div className='h-full bg-[#ffff]  dark:bg-[#3a3a3a]  dark:text-[#9eb7b6]' >
                <Link to={'/'}>
                    <div
                        className={` text-sm  py-4 pl-4  ${location.pathname === '/' ? 'bg-[#f1f2f3] text-[black] dark:text-white dark:bg-[#232629]  border-r-4 border-r-[#f48225] font-semibold' : 'text-[#525960] dark:text-[#9eb7b6]  '
                            }`}
                    >
                        Home
                    </div>
                </Link>

                <p className='text-[#525960] dark:text-[#9eb7b6]  px-2 py-4'>PUBLIC</p>
                <div className='text-[#9eb7b6]  text-sm'>
                    <Link to={'/questions'}>
                        <div
                            className={` text-sm  py-2 pl-4  ${location.pathname === '/questions' ? 'bg-[#f1f2f3] text-[black] dark:text-white dark:bg-[#232629]  border-r-4 border-r-[#f48225] font-semibold' : 'text-[#525960] dark:text-[#9eb7b6]  '

                                }`}
                        >
                            Stack Overflow
                        </div>
                    </Link>
                    <Link to={'/tags'}>
                        <div
                            className={`text-sm  py-2 pl-4  ${location.pathname === '/tags' ? 'bg-[#f1f2f3] text-[black] dark:text-white dark:bg-[#232629]  border-r-4 border-r-[#f48225] font-semibold' : 'text-[#525960] dark:text-[#9eb7b6]  '
                                }`}
                        >
                            tags
                        </div>
                    </Link>
                    <Link to={'/users'}>
                        <div
                            className={` text-sm  py-2 pl-4  ${location.pathname === '/users' ? 'bg-[#f1f2f3] text-[black] dark:text-white dark:bg-[#232629]  border-r-4 border-r-[#f48225] font-semibold' : 'text-[#525960] dark:text-[#9eb7b6]  '
                                }`}
                        >
                            users
                        </div>
                    </Link>
                    <p className='text-[#525960] dark:text-[#9eb7b6]  py-2 pl-4'>Jobs</p>
                </div >
                <p className='text-[#525960] dark:text-[#9eb7b6]  px-2 py-4'>TEAMS</p>
            </div >
        </>
    )
}
