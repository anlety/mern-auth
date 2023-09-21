import { Link } from "react-router-dom"


function Header() {
  return (
    <header className="bg-gray-200 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-red-400 cursor-pointer">Mern app</h1>
         <ul className="flex gap-4">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/sign-in'>Sign in</Link>
        </li>
      </ul>
      </div>
     
    </header>
  )
}

export default Header