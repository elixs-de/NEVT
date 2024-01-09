# NEVT Template - Node.js + Express.js + Vue.js + TypeScript
This is a template project that combines the power of Node.js, Express.js, Vue.js, and TypeScript for building full-stack web applications. It's designed to help you quickly kickstart your development process.

## Project Structure
The template consists of two main folders: frontend and backend.

### Frontend (Vite, TypeScript and Vue.js)
The ___frontend___ folder contains the client-side application built with Vite, TypeScript, and Vue.js. To set up the frontend, follow these steps:

1. Navigate to the ___frontend___ folder in your terminal.

2. Run ___npm install___ to install the necessary dependencies.

3. Start the development server by running ___npm run dev___.
  - This will start the frontend application on port 5173 by default.
  - The frontend application uses a proxy to access the backend API at ___localhost/api/....___
4. You can access the frontend application in your browser at ___http://localhost:5173___.

5. Hot reload is enabled, so any changes you make in the frontend code will automatically refresh the application in your browser.

### Backend (NodeJs, Express.js and TypeScript)
The ___backend___ folder contains the server-side application built with Express.js and TypeScript. To set up the backend, follow these steps:

1. Navigate to the ___backend___ folder in your terminal.

2. Run ___npm install___ to install the necessary dependencies.

3. Start the development server by running ___npm run dev:server___.
  - This will start the backend server on port 3000 by default.

4. In a separate terminal, run ___npm run dev:build___ to build the TypeScript files into JavaScript.
  - This command transpiles your TypeScript code into JavaScript and watches for changes.

5. Hot reload is enabled for the backend as well. Any changes you make in the backend code will automatically restart the server.

Get Started
With both the frontend and backend set up and running, you can start building your web application using the NEVT template. Customize and expand the codebase to suit your project requirements.

Feel free to reach out to the community or refer to the documentation of each technology (Node.js, Express.js, Vue.js, and TypeScript) for more details on how to work with them.

Happy coding!
