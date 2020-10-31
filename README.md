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
