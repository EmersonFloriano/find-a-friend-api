# API

Find a freind

## Descrição
Esta API está sendo criada para estudo de Node e Fastify.

Ela deve ser capaz de fornecer dados para um front-end que lista vários animais de estimação que estão disponíveis para adoção.

## RFs (Requisitos funcionais)

- [ ] Deve cadastrar um pet
- [ ] Deve listar todos os pets disponíveis para adoção em uma cidade
- [ ] Deve filtrar pets por suas características
- [ ] Deve visualizar detalhes de um pet para adoção
- [ ] Deve se cadastrar como uma ORG
- [ ] Deve realizar login como uma ORG

## RNs (Regras de negócio)

- [ ] Para listar os pets, obrigatoriamente precisamos informar a cidade
- [ ] Uma ORG precisa ter um endereço e um número de WhatsApp
- [ ] Um pet deve estar ligado a uma ORG
- [ ] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp
- [ ] Todos os filtros, além da cidade, são opcionais
- [ ] Para uma ORG acessar a aplicação como admin, ela precisa estar logada

## RNFs (Requisitos não-funcionais)

- [ ] A senha da ORG precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] A ORG deve ser identificado por um JWT (JSON Web Token);