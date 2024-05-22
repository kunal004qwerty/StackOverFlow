import logo from './logo.svg';
import './App.css';
import MainPage from './screens/MainPage';
import Footer from './Components/Footer/Footer';
import { useSelector } from "react-redux";
import Routes from './Routes';
import Header from './Components/Header/Header';
import LeftNavBar from './Components/LeftBar/LeftNavBar';
import AppRoutes from './Routes';


function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      {/* <div> */}
      <div className={`${theme}`}>
        {/* navBar */}
        <div className="bg-[#ffff] text-[#525960]  dark:bg-dark_bg_1 border-t-[4px] border-t-[#f48225]  border-b-[1px] border-b-[#f1f2f3] dark:border-b-[#5b636a] fixed left-0 right-0 top-0" >
          <Header />
        </div>

        <div className="flex h-max w-[1212px] mx-auto mt-[55px]">

          {/* left_side_Bar */}
          <div className=" w-[200px] text-white border-r dark:border-r-[#5b636a]">
            <LeftNavBar />
          </div>

          {/* Screen */}
          <AppRoutes />
          {/* <Routes /> */}

        </div>

        {/* Footer */}
        <div className='bg-[#232629]'>
          <Footer />
        </div>

      </div>
    </>
  );
}

export default App;
