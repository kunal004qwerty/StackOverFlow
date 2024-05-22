import React from 'react'

export default function Comments() {
    return (
        <>
            <div className=''>
                {/* comment_01 */}
                <div className=' border-b  p-2 dark:border-[#5b636a] flex items-center justify-between' >
                    <p className='text-xs dark:text-white'>
                        Maybe use a QFrame with a visible border?
                    </p>
                    <div className='text-xs flex items-center gap-2 justify-end'>
                        <div className='w-[16px] h-[16px] bg-slate-200'></div>
                        <p className='text-[#098df2]'>Phill Legg</p>
                        <p className='text-[#9199a1]'>20 min ago</p>
                    </div>
                </div>

                {/* comment_02 */}
                <div className=' border-b  p-2 dark:border-[#5b636a] flex items-center justify-between' >
                    <p className='text-xs dark:text-white'>
                        Maybe use a QFrame with a visible border?
                    </p>
                    <div className='text-xs flex items-center gap-2 justify-end'>
                        <div className='w-[16px] h-[16px] bg-slate-200'></div>
                        <p className='text-[#098df2]'>Phill Legg</p>
                        <p className='text-[#9199a1]'>52 min ago</p>
                    </div>
                </div>

                {/* comment_03 */}
                <div className=' border-b  p-2 dark:border-[#5b636a] flex items-center justify-between' >
                    <p className='text-xs dark:text-white'>
                        Maybe use a QFrame with a visible border?
                    </p>
                    <div className='text-xs flex items-center gap-2 justify-end'>
                        <div className='w-[16px] h-[16px] bg-slate-200'></div>
                        <p className='text-[#098df2]'>Phill Legg</p>
                        <p className='text-[#9199a1]'>52 min ago</p>
                    </div>
                </div>

            </div>

        </>
    )
}
