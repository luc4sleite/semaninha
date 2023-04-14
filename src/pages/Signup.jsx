import Header from "../components/Header/Header";
import Signup from "../components/Signup/Signup";

const SignupPage = () => {
    return <>
        <Header 
            heading="Cadastre-se para criar um nova conta"
            paragraph="Já possui uma conta?"
            linkName="Login"
            linkUrl="/"
        />
        <Signup />

    </>
}

export default SignupPage