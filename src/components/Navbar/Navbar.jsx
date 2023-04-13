const Navbar = () => {
    return <div>
        <nav className="flex items-center gap-12 ml-4">
            <li className="list-none"><a href="#" className="font-bold uppercase font-display hover:text-violet-500 active:border-b-4 active:border-black hover:duration-300">Início</a></li>
            <li className="list-none"><a href="#" className="font-bold uppercase font-display hover:text-violet-500 active:border-b-4 active:border-black hover:duration-300">Sobre nós</a></li>
            <li className="list-none"><a href="#" className="font-bold uppercase font-display hover:text-violet-500 active:border-b-4 active:border-black hover:duration-300">Contato</a></li>
            <li className="list-none"><a href="#" className="font-bold uppercase font-display hover:text-violet-500 active:border-b-4 active:border-black hover:duration-300">FAQ</a></li>
        </nav>
    </div>
}

export default Navbar