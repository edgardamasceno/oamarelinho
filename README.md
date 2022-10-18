<div align="center">
    <img alt="o Amarelinho" src="./docs/images/logo.svg" width="360"/>
</div>

# Desafio Técnico

Desafio técnico para a oportunidade de desenvolvedor.

## Processo Seletivo – o Amarelinho

Você está participando do nosso Processo Seletivo para a vaga de Desenvolvedor Full Stack e 
estamos na fase Avaliação Hard Skill.

Siga as orientações abaixo e qualquer dúvida, entre em contato com o RH o Amarelinho. 
Boa Sorte!

### Avaliação Hard Skill

1. Frontend, desenvolver uma única página de vagas em React/Angular que contemple:
    - Um list de card de vagas ordenado pela última data de atualização;
    - No topo da página um search para filtrar a lista de vagas pelo título ou cidade;
    - A busca da lista será realizada em um backend, descrito na etapa 2.

2. No backend, desenvolver em NodeJS com typescript e algum banco de dados SQL:
    - Um endpoint em RESTful(Método GET) de consumo da lista de vagas necessária na etapa 1.

#### Estrutura de Dados

```javascript
job = {
  id: number;
  title: string;
  description: string;
  companyName: string;
  cityName: string:
  stateName: string;
  updatedAt: Date;
  createdAt: Date;
}
```
## SUMÁRIO

[Git](./docs/pt-br/git.md)

[Docker](./docs/pt-br/docker.md)

[Database](./docs/pt-br/database.md)

[Iniciando aplicação localmente](#iniciando-aplicacao-localmente)

### Iniciando Aplicação localmente

1. Edite o arquivo `.env.local`:

```properties
# Database
MYSQL_DATABASE=oamarelinho
MYSQL_USER=oamarelinho
MYSQL_PASSWORD=oamarelinho
MYSQL_ROOT_PASSWORD=oamarelinho
MYSQL_DB_PORT=3306
MYSQL_DB_HOST=localhost

# Backend
NODE_ENV=development
NODE_PORT=3000
ENABLE_CORS=true
FULLTEXT_SEARCH_KEYS=city.name, job.title, job.description, company.name
# Chaves de busca fulltext disponíveis:
# city.name,
# state.name, state.uf, state.ddd
# country.name, country.name_pt-br, country.initials
# company.name
# job.title, job.description
```

No exemplo acime, a propriedade `FULLTEXT_SEARCH_KEYS` define que as buscas serão executadas também na nome da empresa e descrição da vaga, além do título da vaga e nome da cidade.

2. Crie um link simbólico para o arquivo `.env.local` nas pastas `backend`.

```bash
ln -s $(pwd)/.env.local $(pwd)/backend  
```

3. Inicie o banco de dados MySQL via Docker:

Abra um novo terminal e na raíz do preojeto, execute:

```bash
docker-compose --env-file .env.local up database
```

4. Inicie o backend:

Abra um novo terminal e na raíz do preojeto, execute:

```bash
cd backend
npm install
npm run start:dev
```

5. Inicie o frontend:

Abra um novo terminal e na raíz do preojeto, execute:

```bash
cd frontend
npm install
npm run start:dev
```

6. Acesse: [http://localhost:5173/](http://localhost:5173/)