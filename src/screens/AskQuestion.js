import React from 'react'
import Instruction from '../Components/Right_side/Instruction'
import TagsList from '../Components/Right_side/TagsList'
import LargeHeading from '../Components/common/LargeHeading'
import Instruction01 from '../Components/Right_side/Instruction01'
import PrimaryButton from '../Components/common/PrimaryButton'

export default function AskQuestion() {
    return (
        <>
            <div className='flex w-full py-4 bg-[#f8f9f9] dark:bg-dark_bg_1'>

                {/* middle_Section */}
                <div className='w-full px-3'>
                    <div className='flex items-center  bg-[url("https://cdn.sstatic.net/img/ask/background.svg?v=2e9a8205b368")] bg-no-repeat bg-right-bottom h-[130px]'>
                        <LargeHeading>Ask a public question</LargeHeading>
                    </div>

                    <div>

                        <div className='mt-3 p-6 border border-[#a6cee3] dark:border-[#5b636a] bg-[#ebf4fb] dark:bg-[#232629] rounded-md'>
                            <p className='text-lg text-[#3b4045] dark:text-white'>Writing a good question</p>
                            <p className='text-sm mt-2 text-[#3b4045] dark:text-white'>You’re ready to <span className='text-[#0074cc]'>ask</span> a <span className='text-[#0074cc]'>programming-related question</span> and this form will help guide you through the process.
                                Looking to ask a non-programming question? <span className='text-[#0074cc]'>See the topics</span> here to find a relevant site</p>

                            <p className='mt-2 text-sm text-[#3b4045] dark:text-white'>Steps</p>
                            <ur className='mt-1 text-sm text-[#3b4045] dark:text-white'>
                                <li>Summarize your problem in a one-line title</li>
                                <li>Describe your problem in more detail</li>
                                <li>Describe what you tried and what you expected to happen</li>
                                <li>Add 'tags' wjich help surface your question to members of the communnity.</li>
                                <li>Review yor question and pst it to the site</li>
                            </ur>

                        </div>

                        {/* asked questions */}

                        <div className='flex  mt-3'>
                            <div className='w-full space-y-3'>
                                {/* title */}
                                <div className='flex-grow p-[24px] rounded-lg border dark:border-[#5b636a] bg-white dark:bg-[#232629] mr-4 h-fit'>
                                    <p className='text-black dark:text-white text-lg font-semibold'>Title</p>
                                    <p className='text-black dark:text-white text-xs'>Be Specific and imagine your're asking a question to another person</p>

                                    <div className='mt-2'>
                                        <input className='border rounded-md p-2 text-sm w-full focus:outline-none dark:bg-[#232629]  dark:text-white   focus:ring-1 focus:ring-[#0a95ff] '
                                            placeholder='e.g Is there an R function for finding the index of an element in a vector'
                                        ></input>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className='flex-grow p-[24px] rounded-lg border dark:border-[#5b636a] bg-white dark:bg-[#232629] mr-4 h-fit'>
                                    <p className='text-black dark:text-white text-lg font-semibold'>What are the details of your problem?</p>
                                    <p className='text-black dark:text-white text-xs'>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>

                                    <div className='mt-2'>
                                        <textarea rows="4" className='border rounded-md p-2 text-sm w-full focus:outline-none dark:bg-[#232629]  dark:text-white   focus:ring-1 focus:ring-[#0a95ff] '
                                            placeholder='e.g Is there an R function for finding the index of an element in a vector'
                                        ></textarea >
                                    </div>
                                </div>

                                {/* tags */}
                                <div className='flex-grow p-[24px] rounded-lg border dark:border-[#5b636a] bg-white dark:bg-[#232629] mr-4 h-fit'>
                                    <p className='text-black dark:text-white text-lg font-semibold'>Tags</p>
                                    <p className='text-black dark:text-white text-xs'>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>

                                    <div className='mt-2'>
                                        <input className='border rounded-md p-2 text-sm w-full focus:outline-none dark:bg-[#232629]  dark:text-white   focus:ring-1 focus:ring-[#0a95ff] '
                                            placeholder='e.g (mongoDb Ajax arrays)'
                                        ></input>
                                    </div>
                                </div>

                                <PrimaryButton>Post Your Question</PrimaryButton>
                            </div>

                            {/* right-side */}
                            <div className='w-[300px]'>
                                <Instruction01 />
                            </div>
                        </div>

                    </div>
                </div>

                {/* right_side_bar */}
                {/* <div className="w-[300px] dark:bg-[#232629] pb-3">
                    <Instruction />

                    <div className="px-3 mt-4">
                        <TagsList />
                    </div>
                </div> */}
            </div>
        </>
    )
}


export function Heading02({ children }) {
    return (
        <>
            <p>{children}</p>
        </>
    )
}