---

⚠️ **Warning**: The current version of this backends are **Proof of Concept (PoC)** and is intended for demonstration and testing purposes only. It is currently pre configured to work using few settings either from .env or some hard coded values. Please exercise caution and do not use it in production or with real assets until further development and testing have been completed.

--- 

## Description

This project provides a REST API for managing tokens using DAML smart contracts and Nest.js. The API allows you to create users, manage tokens, and interact with the DAML ledger.

## Prerequisites

- Node.js (v14 or higher)
- DAML SDK (v2.10.0 or higher)

## Project setup

Clone the repository:

```bash
git clone https://github.com/naveenneelamlbg/LBG_Digital_Asset_Platform.git
```

#### Daml sandbox for local testing

1. Install VS Code.

2. Install JDK 11 or greater <a href="https://adoptium.net/en-GB/" target="blank">Download Link</a>

3. Install Daml SDK <a href="https://github.com/digital-asset/daml/releases/download/v2.10.0/daml-sdk-2.10.0-windows.exe" target="blank">Download Link</a>

<p>
  <a href="https://docs.daml.com/getting-started/installation.html" target="blank">Daml detailed installation instructions</a>
</p>

#### Backend
```bash
$ npm install
```

## Compile and run the project

#### Daml sandbox for local testing
```bash
$ cd daml
$ daml start 
```

#### Canton backend

```bash
# back to canton backend folder
$ cd..

# do this again for installing the newley generated src/lbgDamlModule as per the sandbox deployment, if you ran daml start
$ npm install

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

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
