import React from 'react'

export default function Instruction01() {
    return (
        <>
            <div className='shadow-lg'>
                {/* container_01 */}
                <FieldContainer title={'Write a good title'} >
                    <div>
                        <Fields>Your title should summarize the problem.<br></br>
                            <br></br>
                            You might find that you have a better idea of your title after writing out the rest of the question.
                        </Fields>
                        {/* <Fields>You might find that you have a better idea of your title after writing out the rest of the question.</Fields> */}
                    </div>

                </FieldContainer>
                {/* container_02 */}
                <FieldContainer title={'Introduce the problem'} >
                    <Fields>Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.
                    </Fields>
                </FieldContainer>

                {/* container_03 */}
                <FieldContainer title={'Expand on the problem'}>
                    <Fields>
                        Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.
                    </Fields>
                    <Fields>
                        Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a{" "}
                        <span className='text-[#0074cc]'>minimal, reproducible example</span>.
                    </Fields>
                    <Fields>
                        Please make sure to post code and errors as text directly to the question (and not as <span className='text-[#0074cc]'>images</span>), and <span className='text-[#0074cc]'>format them appropriately</span>.
                    </Fields>
                </FieldContainer>

                {/* container_04 */}
                <FieldContainer title={'Adding tags'}>
                    <Fields>Tags help ensure that your question will get attention from the right people</Fields>
                    <Fields>Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.
                    </Fields>
                    <Fields>
                        <span className='text-[#0074cc]'>Learn more about tagging</span>
                    </Fields>
                </FieldContainer>
            </div>
        </>
    )
}


export function FieldContainer({ title, children }) {
    return (
        <>
            <div className='border border-[#d6d9dc] dark:border-[#5b636a]'>
                <div className='text-sm text-black dark:text-white bg-[#f8f9f9] dark:bg-[#363636] px-3 py-4  font-semibold border-b-[1px] border-b-[#d6d9dc] dark:border-b-[#5b636a]'>{title}</div>
                <div className='text-sm text-black dark:text-white bg-white dark:bg-[#232629] '>
                    {children}
                </div>
            </div>
        </>

    )
}


export function Fields({ title, icon, data, children }) {
    return (
        <>
            <div className='px-3 py-2 '>
                {children}
            </div>
        </>
    )
}