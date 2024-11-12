import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">
                    React Demo
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link to="/todo" className="text-gray-300 hover:text-white">
                        Todo App
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar