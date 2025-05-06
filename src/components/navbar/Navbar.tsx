import {ButtonDarkMode} from "@/components/navbar/ButtonDarkMode"

function Navbar() {
  return (
    <nav className="flex justify-between px-5 py-3">
        <h1 className="text-2xl font-semibold">App</h1>
        <div className="flex items-center gap-5">
            <ul className="flex gap-5">
                <li>Home</li>
                <li>About</li>
            </ul>
            <ButtonDarkMode />
        </div>
    </nav>
  )
}

export default Navbar