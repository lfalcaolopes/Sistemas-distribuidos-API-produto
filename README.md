# Arquitetura de 3 Camadas

## 1. O que é?
A arquitetura de 3 camadas separa uma aplicação em três partes distintas, cada uma com responsabilidade clara:
- Camada de Apresentação (Presentation Layer)
- Camada de Lógica de Negócio (Business Logic Layer)
- Camada de Acesso a Dados (Data Access Layer)

Essa separação facilita manutenção, testes e evolução independente de cada parte.

## 2. Camadas e responsabilidades
- Apresentação  
  Interface com o usuário (páginas web, API REST, formulários) e transformação de requisições HTTP em chamadas internas.

- Lógica de Negócio  
  Implementa as regras de negócio, validações e orquestra processos.

- Acesso a Dados  
  Responsável por conectar ao banco de dados, executar consultas e mapear resultados em objetos ou estruturas de dados.

## 3. Fluxo de Requisição
1. O cliente faz uma requisição HTTP.  
2. A camada de Apresentação recebe a requisição e converte em chamada de função interna.  
3. A camada de Lógica de Negócio processa regras e decide quais operações realizar.  
4. A camada de Acesso a Dados executa consultas ou atualizações no banco de dados.  
5. A resposta é retornada de volta pela Lógica de Negócio à Apresentação, que envia o resultado ao cliente.

## 5. Vantagens
- Separação de responsabilidades: cada parte do sistema tem um propósito único, facilitando o trabalho em equipe.  
- Testabilidade: possibilita criar testes unitários isolados para cada camada.  
- Manutenção e evolução: alterações em uma camada (por exemplo, trocar o banco de dados) não afetam diretamente as outras.  
- Reuso: a lógica de negócio pode ser reaproveitada por diferentes interfaces (web, mobile, scripts).

## 6. Desvantagens
- Complexidade inicial: aumenta o número de arquivos e configurações, o que pode ser desnecessário em projetos muito simples.  
- Overhead de comunicação: chamadas entre camadas podem introduzir um pequeno impacto de performance.  
- Possível over-engineering: em aplicações pequenas, a separação estrita pode ser exagerada.
