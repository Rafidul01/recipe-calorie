import { ToastContainer } from 'react-toastify';
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Recipes></Recipes>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
