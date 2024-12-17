# WinterHackathon2024

Description

<!-- <table>
  <tr>
    <td><img src="docs/images/1.png" alt="Banner" width="500"></td>
    <td><img src="docs/images/2.png" alt="Sample Image 2" width="500"></td>
  </tr>
</table> -->

<!-- ## Live Demo

Explore the live version of ParcelPurse: [ParcelPurse Live]() -->

## Table of Contents

<!-- - [Features](#features)
- [REST API Endpoints](#rest-api-endpoints)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage) -->

## Features

### Core Features
- User/Admin registration and authentication
- Dashboard

## REST API Endpoints

### Authentication
- `POST /api/auth/signup`
  - Register a new user.
  
- `POST /api/auth/signin`
  - Authenticate user credentials and start a session.
  
- `POST /api/auth/signin1`
  - Alternate authentication for users (if applicable).
  
- `POST /api/auth/google`
  - Authenticate users via Google OAuth.

### User Management
- `GET /api/user/test`
  - Test the user-related routes (for development/debugging purposes).
  
- `PUT /api/user/update/:userId`
  - Update details of a specific user (requires token verification).
  
- `DELETE /api/user/delete/:userId`
  - Delete a user account (requires token verification).
  
- `POST /api/user/signout`
  - Log the user out and invalidate the session.
  
- `GET /api/user/getusers`
  - Retrieve a list of all users (requires token verification).
  
- `GET /api/user/:userId`
  - Get details of a specific user.

### Coursework
- `GET /api/`

## Technologies Used

- **React.js**: JavaScript library for building dynamic user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast UI design.
- **Flowbite**: UI component library built with Tailwind CSS.
- **SweetAlert**: Library for customizable popup alerts.
- **Redux**: State management library for JavaScript apps.
- **Firebase**: Backend-as-a-service for authentication, databases, and more.
- **Leaflet**: JavaScript library for interactive maps.
- **Lucide-react**: Customizable SVG icon library for React.
- **bcrypt**: Library for hashing and securing passwords.
- **JWT**: Standard for securely transmitting information between parties.
- **Nodemailer**: Module for sending emails from Node.js.
- **dotenv**: Loads environment variables from a `.env` file.
- **UUID**: Generates universally unique identifiers.
- **Crypto**: Node.js module for cryptography and secure hashing.
- **Razorpay**: Payment gateway API for processing online payments.
- **Multer**: Middleware for handling file uploads in Node.js.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/adarshdhakar/WinterHackathon2024.git

2. **Navigate to the Project Directory**:

   ```bash
   cd WinterHackathon2024

3. **Install Dependencies: Run the following command to install the necessary packages**:

   ```bash
   npm install

4. **Install Dependencies for frontend**:

   ```bash
   npm install

## Environment Variables

Create a .env file in the root directory and include the following variables:

    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    EMAIL_USER=your_email
    EMAIL_PASS=your_email_password
    ATLASDB_URL=your_mongodb_atlas_connection_string
    SECRET=your_session_secret

## Future Improvements

## Usage
```bash
1. Start the Application: First navigate to the SIH folder
   cd client 
   npm run dev

   cd .. 
   cd api
   node index.js

2. Access the Application: Open your web browser and go to http://localhost:5173 (or the specified port) to access the application.

3. Create an Account: Go to the signup page to create a new account or log in if you already have one.
```

## Contributors
- Adarsh Dhakar 
- Harsh Maurya