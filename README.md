

## Overview

This project is a customer management system that allows users to perform CRUD (Create, Read, Update, Delete) operations on customer data. It consists of a Node.js backend using Express, a PostgreSQL database, and an Angular frontend.

## Features

1. Backend (Node.js with Express):
   - Set up a Node.js server using Express.
   - Implement API endpoints for CRUD operations on customer data.
   - Connect to a PostgreSQL database to store customer information.
   - Use appropriate middleware for handling JSON and handling CORS.

2. Database (PostgreSQL):
   - Create a table in PostgreSQL to store customer data. The table includes:
     - `id` (primary key)
     - `name` (customer name)
     - `email` (customer email)
     - `phone` (customer phone number)
     - Additional fields as necessary.

3. Frontend (Angular):
   - Create a simple Angular application that interacts with the backend API.
   - Implement views and controllers for:
     - Displaying a list of customers.
     - Adding a new customer.
     - Updating an existing customer.
     - Deleting a customer.

4. User Interface:
   - Use Angular for building the UI components.
   - Use a responsive design for better user experience.
   - Include appropriate form validations on the frontend.

5. Additional Considerations:
   - Handle errors gracefully on both the frontend and backend.
   - Implement proper data validation and sanitization on the backend.
   - Provide clear instructions on how to run the application locally.

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running
- Angular CLI installed

## API Endpoints
GET /customers: Retrieve a list of customers.
POST /customers: Add a new customer.
PUT /customers/:id: Update an existing customer.
DELETE /customers/:id: Delete a customer.
