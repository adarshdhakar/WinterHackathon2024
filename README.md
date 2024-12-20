# WinterHackathon2024

Description

<!-- <table>
  <tr>
    <td><img src="docs/images/1.png" alt="Banner" width="500"></td>
    <td><img src="docs/images/2.png" alt="Sample Image 2" width="500"></td>
  </tr>
</table> -->

## Live Demo

Explore the live version of EduPoint: [EduPoint Live](https://www.loom.com/share/06c0747f330e4c758975fecedde1462d?sid=d4430d4e-e382-463e-ac62-770291000fb5)

## Table of Contents

- [Features](#features)
- [REST API Endpoints](#rest-api-endpoints)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

## Features

### Core Features
- **User/Admin registration and authentication**  
  Secure user signup, login, and logout functionality with JWT-based authentication. Admins have elevated privileges to manage users and content.

- **Role-based Access Control**  
  Support for multiple roles:  
  - **Student**: Access lectures, resources, and track progress.  
  - **Teacher**: Create, update, and manage lecture series and resources.  
  - **Admin**: Monitor users, manage flagged content, and handle user roles.

- **Lecture Series Management**  
  - Teachers can create, update, and delete lecture series.  
  - Students and teachers can view all lecture series.  
  - Upload lecture notes, slides, and reference materials.

- **Supplementary Resources**  
  - Automatically curate resources based on topics.  
  - Allow users to suggest additional resources.  
  - View curated and suggested resources for specific lectures.

- **Progress Tracking**  
  - Students can track their progress for each lecture series.  
  - Mark lectures as completed and view pending assignments.

- **Admin Dashboard**  
  - Manage users: View, update roles, or delete users.  
  - Monitor flagged or inappropriate content and remove it.

- **Payment Integration**  
  - Razorpay integration for secure payment processing.  
  - Create orders for course subscriptions and verify payments.

- **File Uploads**  
  - Upload lecture materials (e.g., notes, slides) using Multer middleware.  
  - Retrieve uploaded files via secure endpoints.

- **Institute Management**  
  - Fetch a list of supported institutes for login and registration.

- **Password Recovery**  
  - Forgot-password functionality with email-based reset links using Nodemailer.

- **Health Check API**  
  - Verify the server status to ensure uptime and availability.

---

### Additional Features
- **Responsive UI**  
  - Built using React.js, Tailwind CSS, and Flowbite for a clean and modern design.

- **Interactive Alerts**  
  - User-friendly notifications with SweetAlert for better UX.

- **State Management**  
  - Redux integration for efficient state handling across components.

- **Real-Time Map Integration**  
  - Leaflet for location-based features (optional use case for lectures or institutes).

- **Secure Passwords**  
  - Passwords are encrypted using bcrypt before storage.

- **Enhanced Security**  
  - Use of JWT for secure API authentication and Crypto for secure operations.

- **Unique Identifiers**  
  - UUID generation for unique resource IDs.

- **Dark Mode Support**  
  - Seamless light/dark mode toggle for better accessibility.

--- 

## REST API Endpoints

### Authentication APIs
1. **`POST /api/auth/signup`**  
   Register a new user (student/teacher).  
   **Input:** name, email, password, role, institute  

2. **`POST /api/auth/login`**  
   Authenticate user and return JWT token.  
   **Input:** email, password  

3. **`POST /api/auth/logout`**  
   Log out the user and invalidate the session.  

4. **`POST /api/auth/forgot-password`**  
   Send a password reset link to the user’s email.  
   **Input:** email  

5. **`POST /api/auth/reset-password`**  
   Reset user password using a token.  
   **Input:** token, newPassword  

---

### User Management APIs
6. **`GET /api/users/profile`**  
   Fetch the logged-in user’s profile.  

7. **`PUT /api/users/profile`**  
   Update user profile.  
   **Input:** name, email, password (optional)  

8. **`GET /api/users/teachers`**  
   Fetch a list of all teachers.  

---

### Lecture Series Management APIs
9. **`POST /api/lectures`**  
   Create a new lecture series (Teacher only).  
   **Input:** courseName, description, schedule, topics (array)  

10. **`GET /api/lectures`**  
    Fetch all lecture series.  

11. **`GET /api/lectures/:id`**  
    Fetch details of a specific lecture series.  
    **Input:** lecture series ID  

12. **`PUT /api/lectures/:id`**  
    Update a lecture series (Teacher only).  
    **Input:** courseName, description, schedule, topics (optional)  

13. **`DELETE /api/lectures/:id`**  
    Delete a lecture series (Teacher/Admin only).  
    **Input:** lecture series ID  

14. **`POST /api/lectures/:id/resources`**  
    Upload lecture notes, slides, or reference links.  
    **Input:** lectureId, resourceType, resourceContent  

15. **`GET /api/lectures/:id/resources`**  
    Fetch all resources for a lecture series.  
    **Input:** lectureId  

---

### Supplementary Resource APIs
16. **`POST /api/resources/curate`**  
    Automatically curate resources based on a topic.  
    **Input:** topic  

17. **`POST /api/resources/suggest`**  
    Allow users to suggest additional resources.  
    **Input:** lectureId, resourceType, resourceLink, description  

18. **`GET /api/resources/:lectureId`**  
    Fetch curated and suggested resources for a lecture.  
    **Input:** lectureId  

---

### Progress Tracking APIs
19. **`GET /api/progress/:lectureId`**  
    Fetch course progress for a specific lecture series.  
    **Input:** lectureId  

20. **`POST /api/progress/:lectureId/complete`**  
    Mark a lecture as completed (Student only).  
    **Input:** lectureId, lectureNumber  

---

### Admin Dashboard APIs
21. **`GET /api/admin/users`**  
    Fetch all users for admin monitoring.  

22. **`DELETE /api/admin/users/:id`**  
    Delete a user (Admin only).  
    **Input:** user ID  

23. **`PUT /api/admin/users/:id/role`**  
    Update user role (e.g., student/teacher).  
    **Input:** user ID, role  

24. **`GET /api/admin/reports`**  
    Fetch flagged or inappropriate content reports.  

25. **`DELETE /api/admin/reports/:id`**  
    Remove flagged content (Admin only).  
    **Input:** content ID  

---

### Payment Integration APIs (Razorpay)
26. **`POST /api/payments/create-order`**  
    Create a payment order for course subscriptions.  
    **Input:** amount, currency, courseId  

27. **`POST /api/payments/verify`**  
    Verify payment after completion.  
    **Input:** orderId, paymentId, signature  

---

### Miscellaneous APIs
28. **`GET /api/institutes`**  
    Fetch a list of supported institutes for login.  

29. **`POST /api/upload`**  
    Upload files (e.g., lecture notes, images).  
    **Input:** file (Multer middleware)  

30. **`GET /api/health`**  
    Check if the server is running.  

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

## Future Enhancements
- **Video Conferencing**: Integration for live lectures using WebRTC.  
- **AI-Based Resource Curation**: Enhanced automated resource suggestions.  
- **Notification System**: Real-time notifications for updates and reminders.  
- **Mobile App Support**: Extend functionality to iOS/Android platforms. 

## Folder Structure

### Backend 

```bash
backend/
│
├── config/                    # Configuration files (e.g., database, environment variables)
│   ├── db.js                  # Database connection
│   └── config.js              # General app configuration
│
├── controllers/               # API route handlers
│   ├── authController.js      # Authentication-related logic
│   ├── userController.js      # User management logic
│   ├── lectureController.js   # Lecture series management logic
│   ├── resourceController.js  # Resource curation and suggestions logic
│   ├── progressController.js  # Progress tracking logic
│   └── adminController.js     # Admin dashboard logic
│
├── middleware/                # Custom middleware (e.g., authentication, validation)
│   ├── authMiddleware.js      # JWT authentication middleware
│   └── errorMiddleware.js     # Global error handling
│
├── models/                    # Mongoose models (MongoDB schema definitions)
│   ├── userModel.js                # User model (for students/teachers)
│   ├── lectureModel.js             # Lecture series model
│   ├── resourceModel.js            # Resource model
│   ├── progressModel.js            # Progress tracking model
│   └── paymentModel.js             # Payment-related model
│
├── routes/                    # Express route definitions
│   ├── authRoutes.js          # Routes for authentication
│   ├── userRoutes.js          # Routes for user management
│   ├── lectureRoutes.js       # Routes for lecture series management
│   ├── resourceRoutes.js      # Routes for resources (curation and suggestions)
│   ├── progressRoutes.js      # Routes for progress tracking
│   ├── adminRoutes.js         # Routes for admin dashboard
│   └── paymentRoutes.js       # Routes for payment integration
│
├── services/                  # Business logic and helper functions
│   ├── authService.js         # Authentication logic (e.g., JWT generation)
│   ├── mailService.js         # Nodemailer service for email sending
│   ├── paymentService.js      # Razorpay integration
│   └── resourceService.js     # Resource curation and suggestions logic
│
├── utils/                     # Utility functions
│   ├── jwtUtils.js            # JWT utility functions
│   └── fileUploadUtils.js     # File upload utilities (Multer)
│
├── .env                       # Environment variables (e.g., database URI, JWT secret)
├── .gitignore                 # Git ignore file
├── server.js                  # Entry point for the backend server
└── package.json               # Backend dependencies and scripts
```

### Frontend

```bash
frontend/
│
├── public/                    # Public assets (images, fonts, etc.)
│   ├── index.html             # Main HTML file
│   └── favicon.ico            # Favicon
│
├── src/                       # Source code for React app
│   ├── assets/                # Static assets (images, icons, etc.)
│   ├── components/            # Reusable components
│   │   ├── Header.js          # Header component
│   │   ├── Footer.js          # Footer component
│   │   ├── Sidebar.js         # Sidebar component
│   │   └── Chat.js            # Chat component
│   ├── context/               # React context for state management
│   │   └── AuthContext.js     # Context for user authentication state
│   ├── hooks/                 # Custom hooks
│   │   └── useAuth.js         # Custom hook for authentication logic
│   ├── pages/                 # Pages (views) of the application
│   │   ├── Home.js            # Home page
│   │   ├── Login.js           # Login page
│   │   ├── Signup.js          # Signup page
│   │   ├── Dashboard.js       # Dashboard page (for students/teachers)
│   │   ├── LectureSeries.js   # Lecture series page
│   │   ├── Profile.js         # User profile page
│   │   └── Payment.js         # Payment page
│   ├── redux/                 # Redux setup for state management
│   │   ├── actions/           # Redux actions
│   │   │   ├── authActions.js # Authentication actions
│   │   │   └── userActions.js # User-related actions
│   │   ├── reducers/          # Redux reducers
│   │   │   ├── authReducer.js # Authentication reducer
│   │   │   └── userReducer.js # User-related reducer
│   │   ├── store.js           # Redux store configuration
│   │   └── types.js           # Action types
│   ├── services/              # API calls and services
│   │   ├── authService.js     # Authentication-related API calls
│   │   ├── userService.js     # User-related API calls
│   │   ├── lectureService.js  # Lecture-related API calls
│   │   ├── resourceService.js # Resource-related API calls
│   │   └── paymentService.js  # Payment-related API calls
│   ├── styles/                # Tailwind CSS and custom styles
│   │   ├── tailwind.config.js # Tailwind CSS configuration
│   │   └── global.css         # Global styles
│   ├── utils/                 # Utility functions
│   │   ├── formatDate.js      # Date formatting utility
│   │   └── validate.js        # Form validation utility
│   ├── App.js                 # Main React component
│   └── index.js               # Entry point for React app
├── .env                       # Environment variables (e.g., API URLs)
├── .gitignore                 # Git ignore file
├── package.json               # Frontend dependencies and scripts
└── tailwind.config.js         # Tailwind CSS configuration
```

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