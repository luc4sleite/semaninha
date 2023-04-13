const Button = () => {
    return <div className="flex gap-3">
        <button className="px-5 py-2 font-bold border-2 border-solid border-cyan-950 text-cyan-950 rounded-full text-xs font-display hover:shadow-md hover:scale-90 hover:duration-300">Entrar</button>
        <button className="px-5 py-2 font-bold bg-cyan-950 text-white rounded-full text-xs font-display hover:shadow-md hover:scale-90 hover:duration-300">Cadastrar</button>
    </div>  
}

export default Button