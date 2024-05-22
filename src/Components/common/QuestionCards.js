import React from 'react'
import PrimaryHeading from './PrimaryHeading'
import Button from './button'
import { Link } from 'react-router-dom'

export default function QuestionCards() {
    return (
        <>
            <div className='dark:text-white flex gap-3 '>
                {/* left_side */}
                <div className='w-[108px] h-[109px]'>
                    <div className='flex flex-col text-right text-sm space-y-2'>
                        <p>0 votes</p>
                        <p className='text-[#6a737c] dark:text-white'>0 answers</p>
                        <p className='text-[#6a737c] dark:text-white'>2 views</p>
                    </div>
                </div>

                {/* right_side */}
                <div className='-mt-1 space-y-3'>
                    <Link to={'/questions/1'}>
                        <PrimaryHeading>props._state is undefined in store.js, can someone help me out please? React JS</PrimaryHeading>
                    </Link>
                    <Content>I'm working on a social media app for a course, and I'm encountering several issues with Redux and state management. Initially, I fixed a props.dispatch is not a function error by using connect in ...</Content>

                    <div className='flex gap-4'>
                        <Button title={'JavaScript'} />
                        <Button title={'JavaScript'} />
                        <Button title={'JavaScript'} />
                        <Button title={'Python'} />
                        <Button title={'java'} />
                    </div>

                    <div className='text-xs flex items-center gap-2 justify-end'>
                        <div className='w-[16px] h-[16px] bg-slate-200'></div>
                        <p className='text-[#098df2]'>Phill Legg</p>
                        <p className='text-[#9199a1]'>asked 3 min ago</p>
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