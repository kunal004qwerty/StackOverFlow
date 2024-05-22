import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import LeftNavBar from "../Components/LeftBar/LeftNavBar";
import Instruction from "../Components/Right_side/Instruction";
import TagsList from "../Components/Right_side/TagsList";
import UserProfile from "../Components/User/UserProfile";
import TagCards from "../Components/common/TagCards";
import HomePage from "./HomePage";
import SolutionPage from "./SolutionPage";
import UserPage from "./UserPage";



export default function MainPage() {
    return (
        <>
            <div className=" h-max">

                {/* navbar */}


                <div className="flex w-full pt-4">

                    {/* left_side_Bar */}
                    {/* <div className=" basis-1/4 text-white dark:text-green-500">
                        <LeftNavBar />
                    </div> */}

                    {/* main_page */}
                    {/* <div className="flex-grow bg-[#232629]">  */}
                    <div className="w-[727px] dark:bg-[#232629]">
                        <div className="py-3 px-4 flex flex-wrap gap-3">
                            <TagCards />
                            <TagCards />
                            <TagCards />
                            <TagCards />
                            <TagCards />
                            <TagCards />
                            <TagCards />
                            <TagCards />
                            <TagCards />
                        </div>
                    </div>

                    {/* right_side_bar */}
                    <div className="w-[300px] dark:bg-[#232629] pb-3">
                        <Instruction />

                        <div className="px-3 mt-4">
                            <TagsList />
                        </div>
                    </div>

                    {/* <UserPage /> */}
                    {/* <UserProfile /> */}

                    {/* Top_Question */}
                    {/* <HomePage /> */}

                    {/* Solution_Page */}
                    {/* <SolutionPage /> */}

                </div>


            </div>
        </>
    )
}
