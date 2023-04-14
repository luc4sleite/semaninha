const loginFields = [
    {
        labelText: "Endereço de e-mail",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Endereço de email"
    },
    {
        labelText:"Senha",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Senha"   
    }
]

const signupFields = [
    {
        labelText:"Nome de usuário",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Nome de usuário"
    },
    {
        labelText:"Endereço de e-mail",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Endereço de email"
    },
    {
        labelText:"Senha",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Senha"
    },
    {
        labelText:"Confirme a senha",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirme a senha"
    }
]

export {loginFields, signupFields}