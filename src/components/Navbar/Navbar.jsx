import MenuItems from "../MenuItems/MenuItems"
import Button from "../Button/Button"
import { useState } from "react"

const Navbar = () => {
    let [open, setOpen] = useState(false)
    return <div className="shadow-md w-full fixed top-0 left-0 m-auto">
        <nav className="sm:flex bg-white py-4 items-center justify-between">
            <div className="flex font-bold text-2xl cursor-pointer items-center font-display text-gray-800 gap-2 sm:px-10 px-7">
                    <svg fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>calendar</title>
                    <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-1.952-1.12-3.488t-2.88-2.144v2.624q0 1.248-0.864 2.144t-2.144 0.864-2.112-0.864-0.864-2.144v-3.008h-12v3.008q0 1.248-0.896 2.144t-2.112 0.864-2.144-0.864-0.864-2.144v-2.624q-1.76 0.64-2.88 2.144t-1.12 3.488v20zM4 26.016v-16h24v16q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM6.016 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.288-0.704v-3.008h-1.984v3.008zM8 24h4v-4h-4v4zM8 18.016h4v-4h-4v4zM14.016 24h4v-4h-4v4zM14.016 18.016h4v-4h-4v4zM20 24h4v-4h-4v4zM20 18.016h4v-4h-4v4zM24 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.32-0.704v-3.008h-2.016v3.008z"></path>
                    </svg>                  
                <span>Semaninha</span>
            </div>

            <div onClick={()=>setOpen(!open)}className="text-3xl absolute right-8 top-4 cursor-pointer sm:hidden">
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`sm:flex sm:items-center sm:gap-5 sm:pb-0 pb-12 absolute sm:static bg-white sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-9 shadow-lg sm:shadow-none transition-all duration-500 ease-in ${open ? 'top-16 opacity-100':'top-[-490px]'} sm:opacity-100`}>
                <MenuItems title="Início"/>
                <MenuItems title="FAQ"/>
                <MenuItems title="Serviços"/>
                <MenuItems title="Contato"/>
                <Button />
            </ul>

            
        </nav>
    </div>
}

export default Navbar