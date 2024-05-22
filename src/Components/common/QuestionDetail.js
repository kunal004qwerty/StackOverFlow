import React from 'react'
import PrimaryHeading from './PrimaryHeading'
import Button from './button'

export default function QuestionDetail() {
    return (
        <>
            <div className='dark:text-white flex gap-3 '>
                {/* left_side */}
                <div className=' h-[109px]'>
                    <div className='flex flex-col items-end justify-center text-sm space-y-2 w-[30px]'>
                        <div className='w-[30px] h-[30px] border dark:border-[#5b636a] rounded-full flex items-center justify-center'>
                            <p>+</p>
                        </div>
                        <div className='w-[30px] h-[30px] font-semibold flex items-center justify-center'>
                            <p>0</p>
                        </div>

                        <div className='w-[30px] h-[30px] border dark:border-[#5b636a] rounded-full flex items-center justify-center'>
                            <p>-</p>
                        </div>
                    </div>
                </div>

                {/* right_side */}
                <div className='-mt-1 space-y-3 grow '>
                    <p className='text-sm'>
                        I am working on a project that I need to draw, for example, a rectangle every time the QPushButton is pressed using QPainter. This is the first problem, the second one here is that I need some information to be sent to the drawing function too, for example, a list containing tuples, each tuple has 4 elements: x1, y1, x2, y2 - the locations of top-left and right-down point (aka. the function is able to draw multiple rectangles).
                        <br></br>
                        <br></br>
                        So, how do I implement it? or use anything other than QPainter but can do thing like that is also good.
                    </p>

                    <div className='flex gap-4'>
                        <Button title={'JavaScript'} />
                        <Button title={'JavaScript'} />
                        <Button title={'JavaScript'} />
                        <Button title={'Python'} />
                        <Button title={'java'} />
                    </div>

                    <div className='text-xs flex items-start py-6 justify-between'>

                        <div>
                            <p className='text-[#9199a1] '>
                                Share
                                Improve this question
                                Follow
                            </p>
                        </div>

                        <div className='w-[200px]  p-2 bg-[#d9eaf7] dark:bg-[#3c4951] rounded-sm'>
                            <p className='text-[#9199a1] mb-1'>asked 3 min ago</p>
                            <div className='flex gap-2'>
                                <div className='w-[32px] h-[32px] bg-black'></div>
                                <div className='text-xs'>
                                    <p className='text-[#098df2]'>Phill Legg</p>
                                    <p>11 . 2</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export function Content({ children }) {
    return (
        <>
            <p className='text-xs'>{children}</p>
        </>
    )
}