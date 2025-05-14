// 📘 Project Documentation: Node.js + Express Scalable Backend (TypeScript)

## 🏗 Project Structure Overview
This project follows a modular, scalable folder structure to build a production-grade backend system using Node.js, Express, and TypeScript. Each folder and file has a specific responsibility to maintain **separation of concerns**, **code reusability**, and **developer efficiency**.

---

## 📁 Folder-by-Folder Breakdown

### 1. **`src/config/`**
- **Purpose**: Centralized configuration for environment variables and app settings.
- **Files**:
  - `index.ts`: Exports variables like port, DB URIs, secrets, AWS keys, etc.
- **Example Usage**: Import `port` or `config` object in `server.ts`.

### 2. **`src/controllers/`**
- **Purpose**: Contains route handler logic — receives input from routes and forwards to services.
- **Example**: `user.controller.ts` has `register` and `login` functions.
- **Rule**: Should not contain business logic or database access.

### 3. **`src/middlewares/`**
- **Purpose**: Holds reusable middleware like error handling, validation, auth, etc.
- **Example**: `validate.ts` applies Joi validation to incoming requests.
- **Rule**: Middleware functions are always used in routes or globally in `app.ts`.

### 4. **`src/models/`**
- **Purpose**: Contains Mongoose or Sequelize schemas/models for interacting with the database.
- **Example**: `user.model.ts` defines User schema and DB structure.
- **Rule**: No business logic here. Only schema definitions and indexes.

### 5. **`src/repositories/`**
- **Purpose**: Abstracts and encapsulates all direct database interactions.
- **Example**: `user.repository.ts` has `findUserByEmail()`, `createUser()` functions.
- **Rule**: No logic or transformation, just pure DB queries.

### 6. **`src/routes/`**
- **Purpose**: Defines all route paths and attaches controllers + middlewares.
- **Example**:
  - `user.routes.ts`: `/api/users/register` and `/login`.
  - `index.ts`: Combines and exports all routers.
- **Rule**: Each resource (user, product, etc.) gets its own route file.

### 7. **`src/services/`**
- **Purpose**: Contains the business logic of your application.
- **Example**: `user.service.ts` handles password hashing, token generation, calling repository functions.
- **Rule**: This is where most logic goes, NOT in controllers.

### 8. **`src/validators/`**
- **Purpose**: Schema validations using Joi or Zod.
- **Example**: `user.validator.ts` has `register` and `login` validation schemas.
- **Rule**: Always used via `validate()` middleware in routes.

### 9. **`src/utils/`**
- **Purpose**: Helper functions like logging, formatting, error helpers, date/time utilities.
- **Example**: `logger.ts`, `generateToken.ts`, `hashPassword.ts`
- **Rule**: Should not hold business or route-specific logic.

### 10. **`src/events/`** *(optional)*
- **Purpose**: Event-driven programming (e.g., send email after registration).
- **Example**: Custom `EventEmitter` instance and event handlers.

### 11. **`src/jobs/`** *(optional)*
- **Purpose**: Background tasks, cron jobs, or queue consumers.
- **Example**: `syncUsers.job.ts` or `emailQueue.worker.ts`

### 12. **`src/uploads/`** *(optional)*
- **Purpose**: Stores uploaded files temporarily (if not using S3).
- **Rule**: Should be excluded in `.gitignore`

### 13. **`src/app.ts`**
- **Purpose**: Sets up and exports the Express app with middlewares and routes.
- **Used in**: `server.ts` to start the server.

### 14. **`server.ts`**
- **Purpose**: Entry point of the application. Starts the HTTP server.
- **Loads**: `app.ts` and reads port/config.

---

## 🧪 Testing
- Folder: `tests/`
- Use: Contains Jest or Supertest-based unit/integration tests.

---

## 🧾 Environment
- `.env`: Contains sensitive env variables.
- `dotenv` loads these into `process.env`.

---

## 📦 Node Config Files
- `package.json`: NPM scripts, dependencies.
- `tsconfig.json`: TypeScript configuration.
- `.eslintrc.js`: Linting rules.
- `.prettierrc`: Prettier formatting rules.
- `.gitignore`: Excludes `node_modules`, `dist/`, `.env`, etc.

---

## ✅ Development Workflow
1. Create a model in `models/`
2. Build DB functions in `repositories/`
3. Add logic in `services/`
4. Write controller in `controllers/`
5. Create routes in `routes/`
6. Add validation in `validators/`
7. Wire everything via `app.ts` and test using Postman or Jest

---

## 🎯 Benefits of This Structure
- Highly **scalable** for growing teams
- Enforces **separation of concerns**
- Easy to test, extend, and debug
- Suitable for both **monoliths** and future **microservice** migration

---