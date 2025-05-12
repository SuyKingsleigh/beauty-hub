<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This project aims to implement an administration module for managing establishments focused on the beauty industry (
barbershops, beauty salons, etc.).

## Technical Concepts Covered

* JWT ✅
* RestAPI ✅
* DDD ✅
* SOLID ✅
* NestJS ✅
* PostgreSQL ✅
* Prisma ✅
* RabbitMQ ✅
* Redis 🕒
* Docker 🕒

## Theoretical Concepts Covered

- Domain-Driven Design (DDD)
- SOLID Principles

### *.module.ts

In NestJS, it is possible to inject dependencies using `@Inject(ClassName)`.
However, in most scenarios, the pattern `{ provide, useFactory, inject }` is used within modules.
The advantage of this approach is greater decoupling, easier scalability, and improved testability.
Since this project follows DDD principles, this method helps isolate the domain from technical and infrastructure
concerns.

# 🏛 Project Architecture

This project follows the principles of **Hexagonal Architecture (Ports & Adapters)**, with strong adherence to *
*Domain-Driven Design (DDD)** and **SOLID** concepts.

### Patterns and Best Practices

- **DDD Applied**: Bounded Contexts, Aggregates, Entities, Value Objects.
- **SOLID Principles**: Modular, cohesive, and maintainable code.
- **Repository Pattern**: Full abstraction of the persistence layer.

### Authentication and Security

- **JWT Authentication**: Robust implementation with Refresh Token Strategy.
- **Guards & Interceptors**: For authentication, authorization, and CurrentUser context.
- **Custom Decorators**:
    * `@CurrentUser` for automatic injection of the authenticated user.
    * `UniqueCPF` for unique CPF
    * `UniqueEmail` for unique user email.
  
### Data Persistence

- **Prisma ORM (PostgreSQL)**: Efficient object-relational mapping.
- **Soft Delete Middleware**: Centralized logical deletion implemented via Prisma middleware.

### Asynchronous Integration and Communication

- **RabbitMQ Integration**: Asynchronous message delivery for email processing.
- **Delivery Guarantee**: Message delivery confirmation and failure handling in publish/consume processes.

### Infrastructure Utilities

- **Custom Pipes**: `@TransformToDto` for automatic mapping from Entities to DTOs.
- **Pagination Utility**: Standardized pagination handling for REST endpoints.

### Others

- Modular architecture following NestJS best practices.
- Clear separation between Application, Domain, Infrastructure, and Interface layers.
