import {ButtonDarkMode} from "@/components/navbar/ButtonDarkMode"

function Navbar() {
  return (
    <nav>
        <h1>App</h1>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <ButtonDarkMode />
        </div>
    </nav>
  )
}

export default Navbar