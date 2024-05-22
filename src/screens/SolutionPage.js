import React from 'react'
import LargeHeading from '../Components/common/LargeHeading'
import PrimaryButton from '../Components/common/PrimaryButton'
import QuestionCards from '../Components/common/QuestionCards'
import Instruction from '../Components/Right_side/Instruction'
import TagsList from '../Components/Right_side/TagsList'
import QuestionDetail from '../Components/common/QuestionDetail'
import Comments from '../Components/Comments/Comments'
import AnswerDetail from '../Components/common/AnswerDetail'
import Button from '../Components/common/button'

export default function SolutionPage() {
    return (
        <>
            <div className='flex flex-col'>

                <div className='px-3'>
                    <div className='flex items-center justify-between gap-1'>
                        <LargeHeading>PyQt - Create a function that draws something with parameters provided</LargeHeading>
                        <PrimaryButton>Ask Question</PrimaryButton>
                    </div>
                    <div className='flex gap-3 dark:text-white text-sm my-3'>
                        <p className='text-[#9199a1] '>Asked <span className='text-black dark:text-white'>today</span></p>
                        <p className='text-[#9199a1] '>Modified <span className='text-black dark:text-white'>today</span></p>
                        <p className='text-[#9199a1] '>Viewed <span className='text-black dark:text-white'>10 times</span></p>
                    </div>
                </div>

                {/* section_02 */}
                <div className='flex w-full pt-4 '>

                    {/* middle_section */}
                    <div className='w-[727px] px-3'>

                        {/* questions */}

                        <div className='px-3 py-3 border-b border-t dark:border-[#5b636a]'>
                            <QuestionDetail />
                            <div className='ml-11 border-t dark:border-[#5b636a] '>
                                <Comments />
                                <p className='text-xs mt-3 text-[#9199a1] '>Add a comment</p>
                            </div>

                        </div>

                        {/* Answers */}
                        <div className='my-3 text-white font-semibold'>
                            Answers
                        </div>
                        <div className='px-3 py-3 border-b dark:border-[#5b636a]'>
                            <AnswerDetail />
                            <div className='ml-11 border-t dark:border-[#5b636a] '>
                                <Comments />
                                <p className='text-xs mt-3 text-[#9199a1] '>Add a comment</p>
                            </div>

                        </div>

                        {/* Answers */}
                        <div className='px-3 py-3 border-b border-[#5b636a]'>
                            <AnswerDetail />
                            <div className='ml-11 border-t border-[#5b636a] '>
                                <Comments />
                                <p className='text-xs mt-3 text-[#9199a1] '>Add a comment</p>
                            </div>

                        </div>

                        {/* Submit_Answer */}
                        <p className='text-sm text-white my-3'>Your Answer</p>

                        <PrimaryButton>Post Your Answer</PrimaryButton>

                        <div className='my-3'>
                            <p className='text-xs text-[#9199a1] italic '>By clicking “Post Your Answer”, you agree to our
                                <span className='text-[#0a95ff]'> terms of service</span> and acknowledge that you have read and understand our <span className='text-[#0a95ff]'>privacy policy</span> and
                                <span className='text-[#0a95ff]'> code of conduct</span>.</p>
                        </div>

                        <div className='my-3 text-sm text-white flex items-center gap-2 flex-wrap'>
                            <p>Browse other questions tagged </p>
                            <div className='flex gap-4'>
                                <Button title={'JavaScript'} />
                                <Button title={'JavaScript'} />
                                <Button title={'JavaScript'} />
                                <Button title={'Python'} />
                                <Button title={'java'} />
                            </div>
                            <span className='text-[#0a95ff]'> ask your own question</span>
                        </div>


                    </div>




                    {/* right_side_bar */}
                    <div className="w-[300px] bg-[#232629] pb-3">
                        <Instruction />

                        <div className="px-3 mt-4">
                            <TagsList />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
