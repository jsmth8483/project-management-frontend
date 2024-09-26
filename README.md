# Project Management

## Table of Contents

-   Introduction
-   Features
-   Installation
-   API Integration
-   Authentication
-   Routes

### Introduction

The Project Management application is designed to help teams track the status of their projects and manage issues effectively. It provides a user-friendly interface for creating, updating, and monitoring project tasks and issues.

### Features

### Installation

To install and run the application locally, follow these steps:

Clone the repository:

```
git clone https://github.com/yourusername/project-management.git
cd project-management
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the application: Open your browser and navigate to http://localhost:5173.

### API Integration

This application utilizes the following backend services:

#### auth-service

The [Project Management Auth Service](https://github.com/jsmth8483/project-management-auth-service) is a microservice responsible for handling authentication and authorization for a project management application. It provides secure login, registration, and token management functionalities.

### Authentication

The application uses JWT (JSON Web Tokens) for authentication. The authentication flow includes:

-   Login: Users log in with their credentials to receive an access token.
-   Signup: New users can register to create an account.
-   Token Refresh: The application automatically refreshes the access token before it expires.

### Routes

The application uses React Router for client-side routing. Here are the key routes:

`/`:

-   Element: `<MainPage />`
-   Description: The main page of the application. Requires authentication.
-   Wrapper: `<RequireAuth redirectTo='/signup'>`

`/taskflow`:

-   Element: `<LandingPage />`
-   Description: The landing page of the application.

`/login`:

-   Element: `<LoginPage />`
-   Description: The login page for user authentication.
-   Wrapper: `<RedirectIfLoggedIn redirectTo='/' />`

`/signup`:

-   Element: `<SignupPage />`
-   Description: The signup page for new user registration.
-   Wrapper: `<RedirectIfLoggedIn redirectTo='/' />`
