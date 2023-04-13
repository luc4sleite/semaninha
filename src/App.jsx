import Banner from "./components/Banner/Banner"
import Button from "./components/Button/Button"
import Header from "./components/Header/Header"

const App = () => {
  return <div className="w-screen">
    <Header />
    <Banner />
    <div className="w-full flex flex-col items-center justify-center m-auto">
      <h2 className="text-center px-5 mb-5 font-display text-cyan-950">
        Para acessar nossos recursos você precisa entrar na sua conta. Caso não tenha uma conta, clique em cadastrar.
      </h2>
      <Button />
    </div>
    
  </div>
}

export default App