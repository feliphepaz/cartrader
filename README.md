# Cartrader

Cartrader é uma aplicação web desenvolvida com Nuxt 3 para explorar, filtrar e visualizar anúncios de veículos por cidade. A plataforma permite buscar carros por marca, faixa de preço e localização, acessar os detalhes do anúncio e entrar em contato com o anunciante.

## 🚗 Visão geral

Este projeto foi pensado como uma solução moderna de marketplace automotivo, com:

- listagem de veículos por cidade;
- busca e filtros por marca e preço;
- página de detalhes do veículo;
- autenticação via Supabase;
- cadastro de anúncios e perfil do usuário;
- persistência de dados com Prisma e PostgreSQL.

## 🛠️ Stack tecnológica

- Nuxt 3
- Vue 3
- TypeScript
- Prisma
- PostgreSQL
- Supabase
- Sass

## ✨ Funcionalidades

- Exploração de carros por cidade
- Filtro por marca e faixa de preço
- Detalhe do veículo com informações e recursos
- Área de login/autenticação com Supabase
- Perfil de usuário com listagem de anúncios
- API backend em Nuxt Server Routes
- Persistência de dados estruturada com Prisma

## 📁 Estrutura do projeto

```bash
.
├── assets/
│   └── main.scss
├── components/
│   ├── car/
│   ├── home/
│   ├── list/
│   ├── container.vue
│   └── navbar.vue
├── composables/
│   ├── useCars.ts
│   ├── useFetchCar.ts
│   ├── useFetchCars.ts
│   └── useUtilities.ts
├── pages/
│   ├── car/
│   ├── city/
│   ├── profile/
│   ├── index.vue
│   ├── login.vue
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── public/
├── server/
│   ├── api/
│   └── tsconfig.json
├── types/
├── app.vue
├── error.vue
├── nuxt.config.ts
├── package.json
├── tsconfig.json
├── yarn.lock
├── .gitignore
└── README.md
```

## ⚙️ Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18+
- Yarn
- PostgreSQL
- Conta no Supabase

## 🔧 Configuração

1. Clone o repositório:

```bash
git clone https://github.com/feliphepaz/cartrader.git
cd cartrader
```

2. Instale as dependências:

```bash
yarn install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias para o Prisma e o Supabase:

```bash
# Banco de dados Prisma
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# Supabase
SUPABASE_URL="https://SEU-PROJETO.supabase.co"
SUPABASE_KEY="SUA_ANON_KEY"
```

> Substitua os valores pelos dados reais do seu projeto no Supabase e no PostgreSQL.

4. Gere o cliente Prisma e rode as migrações:

```bash
npx prisma generate
npx prisma migrate dev
```

## ▶️ Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

A aplicação estará disponível em:

```bash
http://localhost:3000
```

## 🏗️ Build para produção

```bash
yarn build
```

Para visualizar a build localmente:

```bash
yarn preview
```

## 📌 Observações

O projeto usa rotas de servidor do Nuxt para expor a lógica de consulta dos veículos, filtrando por cidade e parâmetros como marca e faixa de preço. A aplicação também integra autenticação e dados de usuário com Supabase, enquanto o Prisma organiza a camada de persistência.

## 📎 Repositório

- GitHub: https://github.com/feliphepaz/cartrader
