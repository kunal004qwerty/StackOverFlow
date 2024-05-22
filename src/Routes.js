// import React from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import MainPage from './screens/MainPage'
// import HomePage from './screens/HomePage'
// import UserPage from './screens/UserPage'
// import UserProfile from './Components/User/UserProfile'



// export default function Routes() {

//     const route = createBrowserRouter([
//         {
//             path:'/',
//             index:true,
//             element: <HomePage />
//         },
//         {
//             path:'/questions',
//             element:<HomePage />
//         },
//         {
//             path:'/tags',
//             element:<MainPage />
//         },
//         {
//             path:'/users',
//             element:<UserPage />
//         },
//         {
//             path:'/user/:id',
//             element:<UserProfile />
//         }

//     ])


//   return (
//     <RouterProvider router={route} />
//   )
// }


import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom'; // Import Routes
import MainPage from './screens/MainPage';
import HomePage from './screens/HomePage';
import UserPage from './screens/UserPage';
import UserProfile from './Components/User/UserProfile';
import SolutionPage from './screens/SolutionPage';
import QuestionPage from './screens/QuestionPage';
import AskQuestion from './screens/AskQuestion';

export default function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/questions" element={<QuestionPage />} />
      <Route path="/questions/:id" element={<SolutionPage /> } />
      <Route path="/questions/ask" element={<AskQuestion /> } />
      <Route path="/tags" element={<MainPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/users/:id" element={<UserProfile />} />
    </Routes>
    <Outlet />
    </>
  );
}
