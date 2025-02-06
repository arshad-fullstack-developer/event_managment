# Event Management System

Welcome to the **Event Management System**! Built with **Laravel** and **Vue 3** (using the Composition API), this application allows you to manage events effortlessly. It features full CRUD operations, user authentication, and a clean, intuitive interface.

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository
Clone the repo using Git:
```bash
git clone <repo_url>
2. Set Up Your Environment
Rename .env.example to .env and update your database credentials:

bash
Copy
cp .env.example .env
3. Install Backend Dependencies
Install Laravel dependencies:

bash
Copy
composer install
4. Generate Application Key
Generate a unique app key:

bash
Copy
php artisan key:generate
5. Run Migrations and Seed the Database
Set up the database schema and seed it with dummy data:

bash
Copy
php artisan migrate:fresh --seed
6. Install Frontend Dependencies

bash
Copy
npm install

7. Build Assets for Development
Compile assets for development:

bash
Copy
npm run dev
8. Start the Server
Launch the development server:



9. Configure Mailtrap for Email Notifications
The "Assign Event" functionality now sends email notifications to users when an event is created. To set up email notifications:

Create an account on Mailtrap.
Set up a new project and grab your Mailtrap credentials (SMTP settings).
Add your Mailtrap credentials to the .env file like so:
env

Copy
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=<your_mailtrap_username>
MAIL_PASSWORD=<your_mailtrap_password>
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@example.com
MAIL_FROM_NAME="${APP_NAME}"
Make sure to replace <your_mailtrap_username> and <your_mailtrap_password> with the credentials from Mailtrap.



bash
Copy
php artisan serve
🔑 Login Credentials
Use the following credentials to log in as the default admin:

Email: admin@example.com

Password: password

🎯 About the Application
This Event Management System is built with Laravel on the backend and Vue 3 (Composition API) on the frontend. It’s designed to simplify event management with secure authentication and a seamless user experience.

Key Features:
CRUD Operations: Create, Read, Update, and Delete events effortlessly.

User Authentication: Powered by Laravel Breeze for secure login/registration.

API Authentication: Secured with Laravel Sanctum for robust API protection.

AssignEvent: with Email Notification: When an event is created, the user will receive an email notification with event details.

🔧 Technologies Used
Backend: Laravel 8.x, Laravel Breeze, Sanctum

Frontend: Vue 3 (Composition API), Tailwind CSS

Database: MySQL / MariaDB

Authentication: Laravel Breeze (Web), Sanctum (API)

Ready to take control of your events? Let’s get started! 🚀
