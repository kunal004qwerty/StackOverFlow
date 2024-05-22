import React from 'react'

export default function UsersCards() {
  return (
    <div className='border dark:border-[#5b636a] flex p-2 gap-3 w-[300px]'>
        <div className='w-[48px] h-[48px] rounded-md bg-slate-100'>IMG</div>
        <div>
            <p className='text-sm text-[#1484db] font-semibold tracking-wide'>Martijn Pieters</p>
            <p className='text-xs text-[#9199a1]'>Cambidge, UK</p>
            <p className='text-xs text-[#9199a1] font-bold'>3,283</p>
            <p className='text-[#1484db] text-[10px] tracking-wider'>git, gitHub, eclipse</p>
        </div>
    </div>
  )
}
