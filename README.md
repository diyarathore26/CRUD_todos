# CRUD_todos
TODO CRUD App

The TODO CRUD App is a modern, responsive task management application that allows users to Create, Read, Update, and Delete (CRUD) their todos efficiently. The app integrates with a backend API to store tasks and features an elegant UI with clean typography, gradients, and smooth interactions.

_ _ _ _ _ _ _ _

🚀 Features
✅ Add Todos: Users can create new todos with a title.

✅ View Todos: The app fetches and displays all todos from a backend API, showing title, status, and index.

✅ Update Todos:

       Edit Title: Update todo titles through a modal input with validation.

       Change Status: Change the status of a todo (To Do, In Progress, Done) using a dropdown.

✅ Delete Todos: Remove any todo permanently from the list.

✅ Responsive Design: The app layout adapts to mobile, tablet, and desktop devices.

✅ User-Friendly UI: Styled with gradients, shadows, smooth transitions, and accessible font choices.

_ _ _ _ _ _ _ _

🌐 API Details

The app interacts with this backend API:

https://todos-ghp1.onrender.com/api/tasks

Endpoints:

GET /tasks → Retrieve all todos

POST /tasks → Create a new todo

PATCH /tasks/:id → Update a todo’s title or status

DELETE /tasks/:id → Delete a todo

_ _ _ _ _ _ _ _

🗂 File Structure

/TODO-CRUD-App
│
├── index.html               # Main HTML structure
│
├── css/
│   └── style.css             # All app styles (layout, colors, responsiveness)
│
└── javascript/
    └── script.js             # All JavaScript logic (CRUD operations, API calls, DOM manipulation)

_ _ _ _ _ _ _ _

💻 How to Run

1️⃣ Clone or download the repository / project files.

2️⃣ Open the index.html file in any modern web browser.

3️⃣ The app will automatically fetch existing todos from the backend API.

4️⃣ Use the input field to add todos, edit titles, update status, or delete todos.

_ _ _ _ _ _ _ _

📌 Tech Stack

HTML5 — Markup structure

CSS3 (css/style.css) —

Gradient backgrounds (using linear-gradient)

Flexbox and responsive layouts

Styled buttons, inputs, modals

Transitions, shadows, hover effects

JavaScript (javascript/script.js) —

Fetch API for CRUD operations

Dynamic DOM rendering

Modal logic for editing

Event listeners for interactions

_ _ _ _ _ _ _ _

✨ UI Highlights

Gradient background: linear-gradient(135deg, #092f55, #e4dbe0)

Elegant typography: 'Georgia', serif

Input focus effects with border color + shadow

Buttons with gradient backgrounds, shadows, and hover transformations

Modal overlay for editing tasks

Responsive adjustments for screens under 600px

_ _ _ _ _ _ _ _

📱 Responsive Design

The app works across:

✅ Desktop

✅ Tablet

✅ Mobile

✅ Includes media query in style.css to adjust layout and flex-direction for smaller devices.

_ _ _ _ _ _ _ _

⚙️ Customization

API: Change the API URL in javascript/script.js if you want to point to your own backend.

Styles: Adjust gradients, colors, and spacing in css/style.css to suit your preference.

Features: Easily extend the app to support due dates, priorities, filters, etc.

_ _ _ _ _ _ _ _

⚠️ Requirements

✅ Internet connection (to interact with the live API)

✅ Modern browser (Chrome, Firefox, Edge, Safari)

_ _ _ _ _ _ _ _

🤝 Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

_ _ _ _ _ _ _ _

📌 License

This project is open-source — you are free to use and modify it.