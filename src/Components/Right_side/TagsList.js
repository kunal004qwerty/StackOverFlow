import React from 'react'
import Button from '../common/button'

export default function TagsList() {
    return (
        <>

            <div className=''>
                <p className='dark:text-white font-bold'>Top Tags</p>
            </div>
            <div className=' mt-3 flex flex-col gap-3'>
                {/* tag01 */}
                <div className='flex items-center gap-3'>
                    <Button title={'JavaScript'} />
                    <p className='text-[12px] text-[#5b636a]'>X{" "}24</p>
                </div>
                {/* tag01 */}
                <div className='flex items-center gap-3'>
                    <Button title={'JavaScript'} />
                    <p className='text-[12px] text-[#5b636a]'>X{" "}24</p>
                </div>
                {/* tag01 */}
                <div className='flex items-center gap-3'>
                    <Button title={'JavaScript'} />
                    <p className='text-[12px] text-[#5b636a]'>X{" "}24</p>
                </div>
                {/* tag01 */}
                <div className='flex items-center gap-3'>
                    <Button title={'JavaScript'} />
                    <p className='text-[12px] text-[#5b636a]'>X{" "}24</p>
                </div>

            </div>
            <div className=' mt-3'>
                <p className='text-[12px] text-[#1d99fb]'>more related tags</p>
            </div>
        </>
    )
}
