import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import PlayGame from './components/PlayGame';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const router = createBrowserRouter([
    {path: '/',
      element: <div>
        <StartGame />
      </div>
    },
    {
      path: '/playgame',
      element:<div>
        <PlayGame />
      </div>
    }
  ]);
  const [isgamestart, setisgamestart] = useState();

  const togglegameplay = () => {
    setisgamestart((prev) => !prev);
    console.log('start playing game');
  }
  return (
    <RouterProvider router={router}>
      {isgamestart ? <PlayGame /> : <StartGame toggle={togglegameplay} />}
    </RouterProvider>
  )
}

export default App;
