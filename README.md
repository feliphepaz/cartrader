# CarTrader

CarTrader é uma aplicação web desenvolvida com Nuxt 3 para explorar, filtrar e visualizar anúncios de veículos por cidade. A plataforma permite buscar carros por marca, faixa de preço e localização, acessar os detalhes do anúncio e entrar em contato com o anunciante.

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
- Nuxt Image

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
SUPABASE_SERVICE_ROLE_KEY="SUA_SERVICE_ROLE_KEY"

# Variáveis públicas do Nuxt para acesso no cliente
NUXT_PUBLIC_SUPABASE_URL="https://SEU-PROJETO.supabase.co"
NUXT_PUBLIC_SUPABASE_KEY="SUA_ANON_KEY"
```

> Substitua os valores pelos dados reais do seu projeto no Supabase e no PostgreSQL.

4. Gere o cliente Prisma e rode as migrações:

```bash
npx prisma generate
npx prisma migrate dev
```

## 🗄️ Banco de dados

O schema do banco está em `prisma/schema.prisma`.

Para gerar o cliente do Prisma e aplicar o schema:

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

## 🔐 Credenciais do Supabase

As chaves necessárias para rodar o projeto normalmente são:

- `SUPABASE_URL`: URL do projeto no Supabase
- `SUPABASE_KEY`: chave anônima (anon key)
- `SUPABASE_SERVICE_ROLE_KEY`: chave de serviço para operações do servidor
- `NUXT_PUBLIC_SUPABASE_URL`: mesma URL para uso no cliente
- `NUXT_PUBLIC_SUPABASE_KEY`: mesma anon key para uso no cliente

Esses valores podem ser encontrados no painel do Supabase em:

- Project Settings → API
- Project Settings → Database

## 🤝 Contribuição

Contribuições são bem-vindas. Para sugerir melhorias ou corrigir problemas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit e push
4. Abra um pull request

## 📎 Repositório

- GitHub: https://github.com/feliphepaz/cartrader
