---

⚠️ **Warning**: The current version of this backends are **Proof of Concept (PoC)** and is intended for demonstration and testing purposes only. It is currently pre configured to work using few settings either from .env or some hard coded values. Please exercise caution and do not use it in production or with real assets until further development and testing have been completed.

--- 
# LBG Hedera PoC Backend

This project is a Nest.js backend application that interacts with the Hedera Token Service on the testnet. It provides endpoints for creating, minting, redeeming, associating, dissociating, and transferring tokens. The application dynamically sets the operator based on the `requesterName` provided in the request body.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/naveenneelamlbg/LBG_Digital_Asset_Platform.git

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests
Unit testing is not done as this is the PoC

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment
Lloyds specific deployment is not planned as this is the PoC.

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## License


