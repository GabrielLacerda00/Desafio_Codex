
import React, { useState } from "react";
import SignInput from "../../components/SignInput";
import SignButtom from "../../components/SignButton";
import InvalidityMsg from "../../components/InvalidityMsg";
import "./styles.css";
import { validateEmail, validatePassword } from "../../util/validation";
import api from "../../service";


const Signup = (props) => {
  // criando os estados
  const [email, setEmail] = useState({ value: "", invalidity: "" });
  const [password, setPassword] = useState({ value: "", invalidity: "" });

  // funcoes para mudar os estados
  const changeEmail = (e) => {
    const value = e.target.value;

    setEmail({ ...email, value });
    // como email eh um objeto { value: '', indalidity: '' },
    // vamos clonar as propriedades do objeto usando o operador spread { ...email },
    // e atribuir o novo valor de value { ...email, value }
  };

  const changePassword = (e) => {
    const value = e.target.value;

    setPassword({ ...password, value });
  };

  const validateForm = () => {
    const invalidityEmail = validateEmail(email.value);
    const invalidityPassword = validatePassword(password.value);

    setEmail({ ...email, invalidity: invalidityEmail });
    setPassword({ ...password, invalidity: invalidityPassword });

    return !invalidityEmail && !invalidityPassword ? true : false;
  };

  const submit = () => {
    if (validateForm()) {
      // requisicao
      api
        .post(
          "/user/signIn",
          { email: email.value, password: password.value },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          const token = response.data.token;
          // salvando o token do usuario no localStorage
          localStorage.setItem("token", token);
          // salvando os dados do usuario
          localStorage.setItem("user", JSON.stringify(response));
          // redirecionando para tela Home
          props.history.push("/home");
        })
        .catch((error) => {
          console.log(error.response);
          const msg = error.response.data;

          // exibindo mensagem de erro que o backend retorna
          if (msg.indexOf("Email não cadastrado") !== -1)
            setEmail({ ...email, invalidity: "Email não cadastrado" });
          else if (msg === "Senha inválida")
            setPassword({ ...password, invalidity: msg });
        });
    }
  };

  return (
    <div id="signupCadastro">
      <div id="loginBox">
        <span>Cadastro</span>
        <SignInput
          label = "Nome Completo"
          Type = "name"
        />
        <SignInput
          label = "CPF"
          Type = "number"
        />
        <SignInput
          label = "Cargo"
          Type = "text"
        />
        <SignInput
          label = "WhatsApp"
          Type = "name"
          
        />
        <SignInput
          label = "LinkedIn"
          Type = "name"
        />
        <SignInput
          placeHolder = 'dd/mm/aa'
          label = "Data de Nascimento"
          type = 'date'
        />
        <SignInput
          value={email.value}
          onChange={changeEmail}
          label="Email para Cadastro"
          type="email"
        />
        
        <SignInput
          value={password.value}
          onChange={changePassword}
          label="Senha para Cadastro"
          type="password"
        />
        <SignInput
          value={password.value}
          onChange={changePassword}
          label="Confirme sua Senha"
          type="password"
        />
        <InvalidityMsg msg={password.invalidity} />
       
        <SignButtom onClick={submit} text="CADASTRAR" />
        
      </div>
    </div>
  );
};

export default Signup;