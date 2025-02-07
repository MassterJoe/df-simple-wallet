Mr Wale's thought process ans steps
nb
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