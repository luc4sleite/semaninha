import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

const LoginPage = () => {
    return <>
        <Header 
            heading="Entre na sua conta"
            paragraph="Não tem uma conta ainda?"
            linkName="Cadastre-se"
            linkUrl="/signup"
        />
        <Login />
    </>
}

export default LoginPage