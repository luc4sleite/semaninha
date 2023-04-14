const Button = ({name}) => {
    return <div className="flex gap-3">
        <button className="px-5 py-2 font-bold bg-cyan-950 text-white rounded-full text-xs font-display hover:shadow-md hover:scale-90 hover:duration-300">{name}</button>
    </div>  
}

export default Button