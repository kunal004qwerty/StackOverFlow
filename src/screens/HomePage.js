import React from 'react'
import Instruction from '../Components/Right_side/Instruction'
import TagsList from '../Components/Right_side/TagsList'
import LargeHeading from '../Components/common/LargeHeading'
import PrimaryButton from '../Components/common/PrimaryButton'
import QuestionCards from '../Components/common/QuestionCards'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <div className='flex w-full pt-4 '>

                {/* middle_section */}
                <div className='w-[727px] px-3'>

                    <div className='flex items-center justify-between'>
                        <LargeHeading>Top Question</LargeHeading>
                        <Link to={'/questions/ask'}>
                            <PrimaryButton>Ask Question</PrimaryButton>
                        </Link>
                    </div>

                    <p className='dark:text-white text-[18px] mt-6 mb-2'>5 question</p>

                    {/* questions */}
                    {/* question_01 */}
                    <div className='px-3 py-3 border-b border-t  dark:border-[#5b636a]'>
                        <QuestionCards />
                    </div>

                    {/* question_02 */}
                    <div className='px-3 py-3 border-b  dark:border-[#5b636a]'>
                        <QuestionCards />
                    </div>

                    {/* question_03 */}
                    <div className='px-3 py-3 border-b  dark:border-[#5b636a]'>
                        <QuestionCards />
                    </div>

                    {/* question_03 */}
                    <div className='px-3 py-3 border-b  dark:border-[#5b636a]'>
                        <QuestionCards />
                    </div>

                    {/* question_03 */}
                    <div className='px-3 py-3 border-b  dark:border-[#5b636a]'>
                        <QuestionCards />
                    </div>
                </div>




                {/* right_side_bar */}
                <div className="w-[300px] dark:bg-[#232629] pb-3">
                    <Instruction />

                    <div className="px-3 mt-4">
                        <TagsList />
                    </div>
                </div>
            </div>
        </>
    )
}
