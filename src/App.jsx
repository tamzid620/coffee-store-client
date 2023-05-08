import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-6xl text-cyan-600'>Coffee Store</h1>
      <br />
      <br />
      <p>go to <Link to="/addcoffee">Add Coffee</Link></p>
      <br />
      <br />
      <p>go to <Link to="/updatecoffee">Update Coffee</Link></p>
    </>
  )
}

export default App
