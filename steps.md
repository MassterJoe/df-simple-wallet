Mr Wale's thought process and steps

#bootstrapping

1. yarn init 

2. create tsconfig.json
    "
    The tsconfig.json file is a configuration file used by TypeScript to specify how the TypeScript compiler should process the code in your project. It defines various settings that control how TypeScript compiles the code into JavaScript.
    "

3. yarn add express typescript yarn@1.22.22 ts-node tslib cors compression body-parser @types/node dotenv   express-rate-limit

    "
        express: The Express.js framework for building web applications and APIs in Node.js.

        typescript: The TypeScript compiler, enabling you to write TypeScript code (with type-checking) and compile it into JavaScript.

        yarn@1.22.22: Specifies that you want to install a specific version of Yarn (version 1.22.22). However, Yarn should typically already be installed globally, so this may be unnecessary unless you want to enforce the version.

        ts-node: A tool to directly run TypeScript files without having to compile them first. It's useful for development and debugging.

        tslib: A runtime library for TypeScript that helps with the execution of features like async/await, decorators, and others that require helpers.

        cors: A package that provides Cross-Origin Resource Sharing (CORS) support for your Express app, allowing you to specify which domains are permitted to interact with your server.

        compression: A middleware for Express that helps compress the response body, improving performance for clients by reducing the size of the data sent.

        body-parser: A middleware to parse incoming request bodies in a middleware before your handlers, particularly for JSON and URL-encoded data. (Note: in newer versions of Express, body-parser has been integrated into the framework, but it's still widely used in legacy apps.)

        @types/node: Provides TypeScript definitions for Node.js, ensuring TypeScript knows about Node's built-in modules and their types.

        dotenv: A package that loads environment variables from a .env file into process.env. It's useful for managing configuration values like API keys and database credentials.

        express-rate-limit: A package to limit repeated requests to your Express server, providing protection against brute-force attacks by restricting the number of requests from a specific IP address.
    "

4. create .env file

5. create tsconfig.build.json file

6. create src/app.ts etc
nbBN
7. yarn add typeorm pg mongodb redis typedi
        "
            typeorm

            A popular ORM (Object-Relational Mapper) for TypeScript/Node.js.
            Allows you to work with relational databases using an object-oriented approach.
            Supports PostgreSQL, MySQL, SQLite, and more.

        pg

            The PostgreSQL driver for Node.js.
            Needed if you plan to use PostgreSQL with typeorm.

        mongodb

            The MongoDB driver for Node.js.
            Required if you want to use MongoDB with typeorm.

        redis

            The Redis client for Node.js.
            Useful for caching, session storage, and message brokering (e.g., Pub/Sub).

        typedi

            A dependency injection (DI) container for TypeScript.
            Helps manage services, repositories, and controllers cleanly in an application.
    "

8. eslint

yarn add -D eslint@8.56.0 eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prefer-arrow eslint-plugin-no-null typescript-eslint @typescript-eslint/eslint-plugin-tslint @eslint/js

yarn add eslint-plugin-eslint-comments

9. yarn add winston morgan 

10. yarn add class-validator class-validator-jsonschema class-transformer

11. yarn add bcryptjs  

12. yarn add chance