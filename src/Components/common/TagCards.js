import React from 'react'
import Button from './button'

export default function TagCards() {
    return (
        <div className='border dark:border-[#5b636a] max-w-[250px] h-[200px] rounded-sm p-2 flex flex-col justify-between'>
            <div>
                <Button title={"JavaScript"} />
            </div>
            <div className='dark:text-white text-sm'>
                For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that
            </div>
            <div className='flex text-sm text-[#838c95] dark:text-[#5b636a] gap-4'>
                <div className='flex flex-col'>
                    <p>3295</p>
                    <p>questions</p>
                </div>
                <div>
                    40 asked this week, 209 this month
                </div>
            </div>
        </div>
    )
}
