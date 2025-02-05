🚀 Event Management System
Welcome to the Event Management System built with Laravel and Vue 3 (using the Composition API)! This application lets you manage events effortlessly with full CRUD operations, user authentication, and a clean, intuitive interface.

🛠️ Getting Started
Follow these simple steps to get the project up and running on your local machine:

*1. Clone the Repository
Clone this repo using Git:
*

*git clone <repo_url>

2. Set Up Your Environment
 the .env.example file to .env and input your database credentials:


cp .env.example .env
Make sure to update the database connection details in the .env file.*

3. Install Backend Dependencies
Run the following to install all the necessary backend dependencies:

composer install

4. Generate Application Key
Generate your unique application key:

php artisan key:generate


5. Run Migrations and Seed the Database
Set up your database schema and populate it with dummy data:

php artisan migrate:fresh --seed

6. Install Frontend Dependencies
Install the required frontend dependencies using npm:

npm install

7. Build Assets for Development
Compile and prepare your assets for development:

npm run dev

8. Start the Server
Finally, launch the development server:

php artisan serve

9. Login Credentials
To log in, use the following credentials (default admin):

Email: admin@example.com
Password: password

🎯 About the Application
This Event Management System is crafted with Laravel on the backend and Vue 3 on the frontend (using the Composition API). It’s designed to handle everything from creating and managing events to secure authentication.

Key Features:
Complete CRUD operations for event management: Create, Read, Update, and Delete events with ease.
User Authentication powered by Laravel Breeze for a smooth login/registration process.
API Authentication secured using Sanctum for robust API protection.
Ready to take control of your events and supercharge your workflow? 🚀 Let’s dive in!

🔧 Technologies Used
Backend: Laravel 8.x, Laravel Breeze, Sanctum
Frontend: Vue 3 (Composition API), Tailwind CSS
Database: MySQL / MariaDB
Authentication: Laravel Breeze (Web), Sanctum (API)
