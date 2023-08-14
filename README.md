# Documentação do Projeto - Nome do Projeto

## Introdução

Esta documentação fornece informações sobre a estrutura, componentes, utilitários e padrões utilizados no projeto "Ecommerce". O projeto é um sistema de e-commerce que permite aos usuários adicionar produtos ao carrinho e realizar o checkout usando o Stripe como plataforma de pagamento.

## Índice

1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Componentes](#componentes)
   - [Átomos](#átomos)
   - [Moléculas](#moléculas)
   - [Organismos](#organismos)
3. [Hooks](#hooks)
   - [Requisições](#requisições)
   - [Stores](#stores)
4. [Serviços](#serviços)
   - [Requisições HTTP](#requisições-http)
   - [Stripe](#stripe)
5. [Páginas](#páginas)
6. [Rotas](#rotas)
7. [Utilitários](#utilitários)

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

Lembre-se de manter a documentação atualizada à medida que o projeto evolui e receber feedback da equipe. Isso ajudará a garantir que todos compreendam o projeto e possam colaborar de maneira eficaz.
