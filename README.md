# Documentação do Projeto - Ecommerce

# [EM PRODUÇÃO NETLIFY](https://main--bespoke-mochi-8b24b2.netlify.app/)
# [BACKEND REAL EM NODE+EXPRESS+FIRESTORE+CLOUD FUNCTIONS](https://github.com/dsenam/ecommerce-crud-back)

## Como Rodar o Sistema Localmente

Para executar o sistema localmente em sua máquina, siga as etapas abaixo:

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.

2. Abra o terminal e navegue até o diretório raiz do projeto.

3. Execute o seguinte comando para instalar as dependências:

   ```
   npm install
   ```




4. Após a instalação das dependências, você pode executar os seguintes comandos:

- Para iniciar o servidor de desenvolvimento local:

```

npm run dev

```

Isso iniciará o servidor de desenvolvimento Vite e você poderá acessar o sistema em http://localhost:3000.

- Para construir o projeto para produção:

```

npm run build

```

Esse comando irá compilar o projeto e gerar os arquivos otimizados na pasta "dist".

- Para executar os testes:

```

npm test

```

Testar interativamente
Em testes interativos, use um número de cartão como 4242 4242 4242 4242. Informe o número do cartão no Dashboard ou em qualquer formulário de pagamento.

Use uma data futura válida, como 12/34.
Use qualquer CVC de três dígitos (quatro em cartões American Express).
Use qualquer valor nos outros campos do formulário.

## Introdução

Esta documentação fornece informações sobre a estrutura, componentes, utilitários e padrões utilizados no projeto "Ecommerce". O projeto é um sistema de e-commerce que permite aos usuários adicionar produtos ao carrinho e realizar o checkout usando o Stripe como plataforma de pagamento.

## Índice

1. [Como Rodar o Sistema Localmente](#como-rodar-o-sistema-localmente)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Componentes](#componentes)
- [Átomos](#átomos)
- [Moléculas](#moléculas)
- [Organismos](#organismos)
4. [Hooks](#hooks)
- [Requisições](#requisições)
- [Stores](#stores)
5. [Serviços](#serviços)
- [Requisições HTTP](#requisições-http)
- [Stripe](#stripe)
6. [Páginas](#páginas)
7. [Rotas](#rotas)
8. [Utilitários](#utilitários)

## Estrutura do Projeto

O projeto segue uma estrutura organizada, separando componentes, hooks, páginas, rotas e utilitários em pastas distintas. O projeto utiliza as tecnologias React, Vite, React Query, React Hook Form, Styled Components e React Router.

## Componentes

### Átomos

- [Button](src/components/atoms/Button): Componente de botão reutilizável.
- [Input](src/components/atoms/Input): Componente de input reutilizável.
- [Span](src/components/atoms/Span): Componente de texto reutilizável.
- ...

### Moléculas

- [ProductCard](src/components/molecules/ProductCard): Componente que exibe informações de um produto.
- [CurrencyInputField](src/components/molecules/CurrencyInputField): Campo de input formatado para moeda.
- ...

### Organismos

- [GridProducts](src/components/organisms/GridProducts): Organismo que exibe a lista de produtos em um grid.
- [Header](src/components/organisms/Header): Organismo que representa o cabeçalho da aplicação.
- [Layout](src/components/organisms/Layout): Organismo que fornece o layout base das páginas.
- ...

## Hooks

### Requisições

- [useCreateNewProduct](src/hooks/requests/useProduct): Hook para criar um novo produto.
- [useGetProducts](src/hooks/requests/useProduct): Hook para obter a lista de produtos.

### Stores

- [useCheckoutStore](src/hooks/stores/useCheckout): Hook para gerenciar o carrinho de compras.

## Serviços

### Requisições HTTP

- [getData](src/services/request.service): Função para fazer uma requisição GET.
- [postData](src/services/request.service): Função para fazer uma requisição POST.
- ...

### Stripe

- [getStripe](src/services/stripe.service): Função para obter a instância do Stripe.
- [formatStripeLineItems](src/services/stripe.service): Função para formatar os itens de linha para o Stripe.
- ...

## Páginas

- [Home](src/pages/Home): Página inicial que exibe os produtos disponíveis.
- [EditProduct](src/pages/EditProduct): Página para adicionar/editar um produto.
- [Checkout](src/pages/Checkout): Página de checkout que exibe os produtos no carrinho.
- ...

## Rotas

- [router](src/routes/index): Configuração das rotas da aplicação usando o React Router.

## Utilitários

- [ROUTES](src/constants/routes.constants): Objeto com as constantes das rotas da aplicação.
- [formatUrl](src/utils/formats.utils): Função para formatar URLs.
- [errorToast](src/utils/toasts.utils): Função para exibir toasts de erro.

## Conclusão

Esta documentação fornece uma visão geral da estrutura, componentes, hooks, serviços e padrões utilizados no projeto "Ecommerce". Ela serve como referência para orientar o desenvolvimento e a manutenção do código.


