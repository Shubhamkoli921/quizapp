import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './components/main'
import Quiz from './components/quiz'
import Result from './components/result'
import './App.css';


const router = createBrowserRouter([
  {
    path: '/',
    element : <Main/>
  },
  {
    path: '/quiz',
    element : <Quiz />
  },
  {
    path: '/result',
    element : <Result />
  },  
])
function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
} 

export default App;
