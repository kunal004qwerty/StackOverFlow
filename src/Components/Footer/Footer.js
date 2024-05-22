import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='w-[1212px]  mx-auto text-stone-100'>
                <div className='grid grid-flow-col-dense py-7'>

                    <div>ICON</div>

                    <div>

                        <Heading01>stack overflow</Heading01>
                        <List>
                            <p>Question</p>
                            <p>Help</p>
                        </List>


                    </div>

                    <div>
                        <Heading01>product</Heading01>
                        <List>
                            <p>Teams</p>
                            <p>Advertising</p>
                            <p>Collectives</p>
                            <p>Talent</p>
                        </List>
                    </div>

                    <div>
                        <Heading01>company</Heading01>
                        <List>

                            <p>About</p>
                            <p>press</p>
                            <p>Work Here</p>
                            <p>Legal</p>
                            <p>Privacy policy</p>
                            <p>Terms of Service</p>
                            <p>Contact Us</p>
                            <p>Cookie setting</p>
                            <p>cookie policy</p>
                        </List>

                    </div>

                    <div>
                        <Heading01>stack exchange network</Heading01>
                        <List>
                            <p>technology</p>
                            <p>culture & recreation</p>
                            <p>life & arts</p>
                            <p>Science</p>
                            <p>professional</p>
                            <p>businness</p>
                            <p>API</p>
                            <p>Data</p>
                        </List>
                    </div>

                    <div className='text-[#9199a1] text-[10px] flex flex-col justify-between'>

                        <div className='flex gap-4'>
                            <p>Blog</p>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>LinkedIn</p>
                            <p>Instagram</p>
                        </div>

                        <div>
                            <p>
                                Site design / logo © 2023 Stack Exchange Inc; user contributions
                                <br></br> licensed under{" "}
                                <span className='underline underline-offset-3'>
                                    CC BY-SA.
                                </span> rev 2023.8.18.43586
                            </p>
                        </div>


                    </div>


                </div>

            </div>
        </>
    )
}


export function Heading01({ children }) {

    return (
        <>
            <p className='font-semibold text-sm uppercase text-[#babfc4]'>{children}</p>
        </>
    )
}

export function List({ children }) {
    return (
        <>
            <div className='text-[#9199a1] hover:text-[#babfc4] text-xs py-3 space-y-2 capitalize' >
                {children}
            </div>
        </>
    )
}