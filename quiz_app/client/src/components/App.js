// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Main from './Main';
// import Quiz from './Quiz';
// import Result from './Result';
// import Login from '../components/Login';
// import Signup from '../components/Signup';
// import '../styles/App.css';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//         path: '/main', // Main Page
//        element: <Main />, // Use Main component
//   },
//   {
//     path: '/signup',
//     element: <Signup />,
//   },
//   {
//     path: '/quiz',
//     element: <Quiz />,
//   },
//   {
//     path: '/result',
//     element: <Result />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// // import '../styles/App.css';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// // import Main from './Main'; // Imported Main Component
// // import Quiz from './Quiz';
// // import Result from './Result';
// // import Login from '../loginpages/Login';
// // import Signup from '../components/Signup';
// // import { CheckUserExist } from '../helper/helper';

// // const router = createBrowserRouter([
// //   {
// //     path: '/', // Landing Page (Login)
// //     element: <Login />,
// //   },
// //   {
// //     path: '/login', // Login Page
// //     element: <Login />,
// //   },
// //   {
// //     path: '/signup', // Signup Page
// //     element: <Signup />,
// //   },
// //   {
// //     path: '/main', // Main Page
// //     element: <Main />, // Use Main component
// //   },
// //   {
// //     path: '/quiz', // Quiz Page
// //     element: (
// //       <CheckUserExist>
// //         <Quiz />
// //       </CheckUserExist>
// //     ),
// //   },
// //   {
// //     path: '/result', // Result Page
// //     element: (
// //       <CheckUserExist>
// //         <Result />
// //       </CheckUserExist>
// //     ),
// //   },
// // ]);

// // function App() {
// //   return <RouterProvider router={router} />;
// // }

// // export default App;




//start


// import '../styles/App.css';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// /** import components */
// import Main from './Main';
// import Quiz from './Quiz';
// import Result from './Result';
// import { CheckUserExist } from '../helper/helper';


// /** react routes */
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Main></Main>
//   },
//   {
//     path : '/quiz/:category',
//     element : <CheckUserExist><Quiz /></CheckUserExist>
//   },
//   {
//     path : '/result/:category',
//     element : <CheckUserExist><Result /></CheckUserExist>
//   },

// ])

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;


//Anwerpage

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Review from './Review';
import { CheckUserExist } from '../helper/helper';
import Signup from './Signup';
import Login from './Login';
import '../styles/App.css';


/** react routes */
const router = createBrowserRouter([
  {
    path: '/main',
    element: <Main />
  },
  {
    path: '/',
    element: <Signup/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/quiz/:category',
    element: <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path: '/result/:category',
    element: <CheckUserExist><Result /></CheckUserExist>
  },
  {
    path: '/review',
    element: <Review />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
