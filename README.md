# crud-react-native
Um sistema CRUD bem simples no intuito de criar portifólio e agregar conhecimento no desenvolvimento de aplicações web e mobile.

## Funcionalidades
- Login com autenticação
- Cadastro
- Sair
- Esqueci minha senha
- Trocar senha pela Dashboard 

## Tecnologias usadas
<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img align="left" alt="SQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />
<img align="left" alt="Typescript" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/typescript/typescript.png" />

<br/>


## Utilização
Para testar minha aplicação, você tem que configurar o backend e o frontend mobile.

### Back-end
Abra a pasta <code>backend</code> pelo seu terminal e digite o seguinte comando:
<code>yarn</code> ou <code>npm install</code>
Este comando vai fazer o download de todas os pacotes utilizados no projeto.

Após isso, você deve criar um arquivo <code>.env</code> na raiz do seu projeto.
No intuito de deixar a utilização mais fácil, eu deixei um arquivo <code>.env.example</code> contendo todas as variáveis ambientes que são usadas no projeto.

O serviço de envio de e-mail usado foi o: <a href="https://sendgrid.com/">SendGrid</a>. Lá você obtem todos os dados necessários para o envio dos e-mails.

Após essa configuração, rode este comando no seu terminal: <code>yarn dev</code> ou <code>npm run dev</code>

Pronto! O backend estará funcionando!

### Front-end

Para testar a aplicação front end - desenvolvida em React Native -, você deve instalar a cli do Expo.

Para instalar é simples:

<code>npm install -g expo-cli</code> ou <code>yarn add global expo-cli</code>

Após isso, abra a pasta do front-end no seu terminal e execute: <code>yarn</code> ou <code>npm install</code>

Antes de iniciar o projeto, lembre de mudar a URL base da api, no arquivo: <code>./src/services/api.ts</code>

(Coloque sempre o ip da sua máquina para evitar erros de conexão. Ex: 10.0.0.105 ou 198.164.0.105)

Agora é só iniciar o projeto: <code>yarn start</code> ou <code>npm start</code>

## Autor

## Author

| [<img src="https://avatars0.githubusercontent.com/u/43199901?s=460&v=4"><br><sub>@gsesdras</sub>](https://github.com/gsesdras) |
| :---: |
