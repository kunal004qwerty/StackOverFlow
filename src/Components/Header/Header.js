import React, { useState } from 'react'
import PrimaryButton from '../common/PrimaryButton'
import SecondryButton from '../common/SecondryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/slices/ThemeSlice'
import { useSelector } from "react-redux";

export default function Header() {

    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.theme);

    const [Toggle, setToggle] = useState(true)

    function ToggleTheme() {
        setToggle(prev => !prev)
        dispatch(toggleTheme())
        console.log("theme", theme);
    }

    return (
        <>
            <div className=' w-[1212px] mx-auto flex items-center justify-between py-3 text-[#525960] dark:text-white  '>
                <div className='text-red-500 dark:text-green-500'>Logo</div>
                <div className='flex gap-5' >
                    <div className='text-sm px-3 py-1  tracking-wide  rounded-full hover:bg-[#f1f2f3] dark:hover:bg-[#f48225] duration-200 ease-linear w-fit'>
                        Profile
                    </div>
                    <div className='text-sm px-3 py-1  tracking-wide  rounded-full hover:bg-[#f1f2f3] dark:hover:bg-[#f48225] duration-200 w-fit'>
                        Pproducts
                    </div>
                    <div className='text-sm px-3 py-1  tracking-wide  rounded-full hover:bg-[#f1f2f3] dark:hover:bg-[#f48225] duration-200 w-fit'>
                        For Teams
                    </div>
                </div>

                {/* buttons */}
                <div className='flex gap-3 items-center'>

                    <SecondryButton>Log in</SecondryButton>
                    <PrimaryButton>Sign Up</PrimaryButton>

                    {
                        Toggle ?
                            (
                                <div className=' w-[26px] h-[26px] text-white  bg-[#f48225]  rounded-md text-sm  flex items-center justify-center' onClick={ToggleTheme}>
                                    <FontAwesomeIcon icon={faSun} />
                                </div>
                            ) :
                            (
                                <div className=' w-[26px] h-[26px] text-white  bg-[#0a95ff]  rounded-md text-sm  flex items-center justify-center' onClick={ToggleTheme}>
                                    <FontAwesomeIcon icon={faMoon} />
                                </div>

                            )
                    }

                </div>

            </div>
        </>
    )
}
