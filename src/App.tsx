import { Route, Routes} from "react-router"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App