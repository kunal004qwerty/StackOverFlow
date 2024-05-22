import React from 'react'

export default function Instruction() {
    return (
        <>
            <div>
                {/* container_01 */}
                <FieldContainer title={'The Overflow Blog'} >
                    <Fields>Tales from documentation: Write for your clueless users </Fields>
                    <Fields>Podcast 252: a conversation on diversity and representation</Fields>
                </FieldContainer>
                {/* container_02 */}
                <FieldContainer title={'Featured on Meta'} >
                    <Fields>Feedback post: New moderator reinstatement and appleal process revision </Fields>
                    <Fields>The new moderator agreement is now live moderators to accept across the...</Fields>
                    <Fields>Allow bountied questions to be closed by regular users</Fields>
                    <Fields>2020 Community Moderator Election - Questionnaire</Fields>
                </FieldContainer>
            </div>
        </>

    )
}

export function FieldContainer({ title, children }) {
    return (
        <>
            <div className='border border-[#f1e5bc] dark:border-[#5f5634]'>
                <div className='text-sm text-black dark:text-white bg-[#fbf3d5] dark:bg-[#514a35] px-3 py-4  font-semibold border-b-[1px] border-b-[#f1e5bc] dark:border-b-[#5f5634]'>{title}</div>
                <div className='text-sm text-black dark:text-white bg-[#fdf7e2] dark:bg-[#444033] '>
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