import React from 'react'

export default function UserProfile() {
    return (
        <>
            <div className='mx-3 w-full'>

                {/* top-section */}
                <div className='flex gap-4 '>
                    <div className=' border-[0.5px] border-[#5b636a] px-4 py-7 
                   PicFrame
                    ' >

                        <div className='w-[128px] h-[128px] bg-slate-300 rounded-lg'>ImAGE</div>
                    </div>

                    <div>
                        <p className='font-semibold text-[#1484db] text-[24px]'>VonC</p>

                        <div className='text-[#9199a1] text-sm leading-5'>
                            <p>Member for 14 years, 11 months</p>
                            <p>Last seen this week</p>
                            <p>devtory.fyi/vonc</p>
                            <p>France</p>
                        </div>
                    </div>

                </div>


                {/* selection_tab */}
                <div className='flex gap-5 my-4'>
                    <div className='text-sm px-3 py-1 font-semibold tracking-wide  rounded-full bg-[#f48225] w-fit'>
                        Profile
                    </div>

                    <div className='text-sm px-3 py-1 font-semibold tracking-wide  rounded-full  w-fit  border-[0.5px] border-[#5b636a] text-[#9eb7b6]'>
                        Activity
                    </div>
                </div>


                {/* Profile */}
                <Profile />

                {/* Activty */}
                <Activity />
            </div>

        </>
    )
}


export function Profile() {
    return (
        <>
            <div>

                {/* section_01 */}
                <div className='flex gap-9 '>


                    <div>
                        <p className='font-semibold text-lg text-[#9199a1] mb-3'>Stats</p>
                        <div className='border border-[#5b636a] p-2 w-[254px] rounded-md'>
                            <div className='grid grid-cols-2 gap-2 '>
                                <div>
                                    <p className='text-sm font-semibold text-[#cbd5e1]'>1,255,637</p>
                                    <p className='text-sm text-[#9199a1]'>reputation</p>
                                </div>

                                <div>
                                    <p className='text-sm font-semibold text-[#cbd5e1]'>330.4m</p>
                                    <p className='text-sm text-[#9199a1]'>reached</p>
                                </div>


                                <div>
                                    <p className='text-sm font-semibold text-[#cbd5e1]'>30,317</p>
                                    <p className='text-sm text-[#9199a1]'>answer</p>
                                </div>

                                <div>
                                    <p className='text-sm font-semibold text-[#cbd5e1]'>16</p>
                                    <p className='text-sm text-[#9199a1]'>questions</p>
                                </div>
                            </div>

                            <div className='mt-2'>
                                <p className='text-[#9199a1] text-sm'>top <span className='font-semibold'>0.01%</span> this year</p>
                            </div>


                        </div>
                    </div>

                    <div className='text-[#9199a1] text-sm'>
                        <p className='font-semibold text-lg  mb-3'>About</p>
                        <div className='space-y-1'>
                            <p>
                                <span className='text-[#1e84d2] font-bold underline underline-offset-2'>Development Architect</span>, which involves:</p>
                            <ul className='list-disc list-outside ml-5 '>
                                <li>tools support around <span className='text-[#1e84d2] underline underline-offset-2'>java technologies</span>, including <span className='text-[#1e84d2] underline underline-offset-2'>eclipse</span>.</li>
                                <li>code quality evaluation, including <span className='text-[#1e84d2] underline underline-offset-2'>
                                    metrics definitions
                                </span>,  and
                                    <span className='text-[#1e84d2] underline underline-offset-2'> code static</span>    tools for
                                    <span className='text-[#1e84d2] underline underline-offset-2'>different populations</span>.
                                </li>
                                <li>code management ({" "}
                                    <span className='text-[#1e84d2] underline underline-offset-2'>Jira</span>,{" "}
                                    <span className='text-[#1e84d2] underline underline-offset-2'>FishEye/Crucible</span>,{" "}
                                    <span className='text-[#1e84d2] underline underline-offset-2'> Maven</span>,{" "}
                                    <span className='text-[#1e84d2] underline underline-offset-2'>Hudson</span>,{" "}
                                    <span className='text-[#1e84d2] underline underline-offset-2'>Sonar</span>{" "}
                                    ). </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* section_02 */}

            </div>

        </>
    )
}

export function Activity() {
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>

                {/* Answers */}
                <div>
                    <div className='mb-3  text-[#9199a1]'>
                        <p className='font-semibold text-lg '>Answers</p>
                        <p className='text-xs'>View all 30,317 answers</p>
                    </div>
                    
                    <div className='border border-[#5b636a]  rounded-md'>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>

                    </div>
                </div>

                {/* Questoins */}
                <div>
                    <div className='mb-3  text-[#9199a1]'>
                        <p className='font-semibold text-lg '>Question</p>
                        <p className='text-xs'>View all 16 questions</p>
                    </div>

                    <div className='border border-[#5b636a]  rounded-md'>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>
                        <div className='flex gap-3 text-sm items-center justify-between p-2 border-b-[0.5px] border-[#5b636a]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#f48225] rounded-sm px-4 py-1 font-semibold'>2624</div>
                                <div className='text-[#9199a1]'>How do i remove a submodule ...</div>
                            </div>

                            <div className='text-[#9199a1]'>Apr 23, 2013</div>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}