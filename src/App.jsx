import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TodoApp from './components/TodoList/TodoApp'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-screen bg-gray-900">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoApp />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App