# Docker

Versão: `20.10.17`

Build: `100c701`

- [Instalação - Docker](https://docs.docker.com/engine/install/)
- [Instalação - Docker Compose](https://docs.docker.com/compose/install/)

### Banco de Dados

Usando o terminal, acesse a raiz do repositório e digite o comando:

```bash
docker-compose --env-file .env.local up database
```

> Será criada a base de dados inicial da aplicação, tabelas e *inserts* de países, estados e cidades.
