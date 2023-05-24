<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Prisma MultiSchema : TypeScript -Example

This repo demonstrates working example of the npm package [prisma-multischema](https://www.npmjs.com/package/prisma-multischema)

To Test :

 - Clone this repo
  ```
  git clone https://github.com/joydip007x/Prisma-MultiSchema-TS-Example.git
  ```
- Go to [MongoDB](https://cloud.mongodb.com/), 
    create & deploy a database 
- Copy the database's connection string, Replace it in `.ENV`
- Run `npm install` to install dependencies
- 🎯Execute `npx prisma-multischema` , this will Unify all schema  ,
- check `/prisma/shcema.prisma`  for newly generated Schema.

- Sharing Postman-API, with working example : [Postman Shared API ](https://documenter.getpostman.com/view/15393845/2s93m4X2he)
- Running the app

  ```bash
  # development
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run start:prod
  ```
