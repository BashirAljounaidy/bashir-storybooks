# Storybooks Project

📚 A platform for creating and sharing stories.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Views](#views)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Video Introduction](#video-introduction)

## Introduction

Welcome to Storybooks, a platform that lets you create, read, and share stories. Whether you're a writer or a reader, Storybooks offers a space to explore and share creative narratives.

## Features

📖 Key features of Storybooks:

- 🌟 Create Stories: Writers can draft and publish stories with rich text and multimedia.
- 🌟 Read Stories: Readers can immerse themselves in a diverse collection of stories.
- 🌟 Collaboration: Collaborate with other writers and co-create stories.
- 🌟 Personal Library: Save and organize your favorite stories in your library.
- 🌟 User Profiles: Create a unique profile to showcase your stories and writing style.

## Installation

🛠️ Get started with Storybooks:

1. Clone this repository: `git clone https://github.com/your-username/storybooks.git`
2. Navigate to the project directory: `cd storybooks`
3. Install dependencies: `npm install`
4. Configure environment variables: Refer to `config/` directory.

## Usage

🚀 Explore stories on Storybooks:

1. Start the server: `npm start`
2. Open your browser and go to `http://localhost:3000`
3. Browse through the available stories.
4. Writers can log in and create new stories.

## Routes

🌐 Explore the routes available in Storybooks:

- `/`: Home page with a curated list of featured stories.
- `/stories`: Browse and search for stories.
- `/stories/:id`: View a specific story.
- `/dashboard`: Writer's dashboard to manage created stories.

## Views

👁️‍🗨️ Understand the different views in Storybooks:

- `dashboard.hbs`: Writer's dashboard UI.
- `error/404.hbs`: Custom 404 page.
- `error/500.hbs`: Custom error page.
- `layouts/login.hbs`: Login layout.
- `layouts/main.hbs`: Main layout for other pages.
- `login.hbs`: Login page.
- `partials/_add_btn.hbs`: Add button UI.
- `partials/_header.hbs`: Header UI.
- `stories/add.hbs`: UI for adding new stories.
- `stories/edit.hbs`: UI for editing existing stories.
- `stories/index.hbs`: UI for listing stories.
- `stories/show.hbs`: UI for viewing a single story.

## Configuration

⚙️ Configure your Storybooks environment:

- `config/config.env`: Set up environment variables for your project.
- `config/db.js`: Database configuration.
- `config/passport.js`: Passport authentication setup.

## Contributing

🤝 We welcome your contributions! Here's how you can contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make changes and commit: `git commit -m "Add your message"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License

📜 Licensed under [MIT License](LICENSE).


## Google OAuth2 Integration

Securely authenticate users with Google OAuth2:

- **Implementation of Google OAuth2**: Integrate Google authentication using OAuth2 to enable users to log in to your Storybooks platform using their Google accounts.

- **Route for Initiating Authentication** (`/auth/google`): This route is responsible for initiating the Google OAuth2 authentication process. When users click on the "Login with Google" button, they are directed to this route to begin the authentication flow.

- **Callback Route for Handling OAuth2 Response** (`/auth/google/callback`): After users grant permission to your application, Google redirects them back to this route with an authorization code. This route handles the callback from Google and exchanges the code for an access token.

- **Passport.js Middleware**: Utilize the power of Passport.js middleware to handle authentication and session management seamlessly. Passport's `passport-google-oauth20` strategy is employed to streamline the Google OAuth2 authentication process.

### Implementation Steps

1. **Create Google Developer Project**:
   - Access the [Google Developers Console](https://console.developers.google.com/).
   - Set up a new project and activate the Google+ API.
   - Generate OAuth2 credentials (client ID and client secret) to allow secure communication between your application and Google services.

2. **Configure Credentials**:
   - Safely store your Google OAuth2 credentials in the `config/config.env` file of your project. These credentials will be used to identify and authenticate your application with Google services.

3. **Install Required Packages**:
   - Install the necessary packages for Google OAuth2 integration using the command: `npm install passport passport-google-oauth20 express-session`.

4. **Passport.js Setup**:
   - In your main application file (e.g., `app.js`), initialize Passport.js using `passport.initialize()` and `passport.session()` middleware functions.

5. **Configure Google Strategy**:
   - Configure the Google OAuth2 strategy using `passport-google-oauth20`. Set the client ID, client secret, and callback URL.

6. **Route and Controller Implementation**:
   - Create routes within your `routes/auth.js` file to handle Google authentication. Implement corresponding controller functions to initiate the authentication process and manage the callback.

7. **Update Views**:
   - Enhance your relevant views (e.g., login page) by adding a "Login with Google" button that directs users to the `/auth/google` route to start the authentication flow.

By integrating Google OAuth2 into your Storybooks project, you provide users with a convenient and secure method of logging in, further enhancing their experience on the platform.


## Video Introduction

🎥 Watch the video introduction to get a walkthrough of the project's features and how it works. [Video Link](https://your-video-link).

---
