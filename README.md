🌦️ Real-Time Weather Dashboard
A full-stack weather dashboard that allows users to search for any city and instantly view live weather data — built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

🚀 Features
🌐 Real-time weather updates using OpenWeather API

🔍 Search any city for live temperature, humidity, wind speed, and condition

💾 Stores recent searches using MongoDB

🎨 Responsive and clean UI with React

🔧 RESTful API backend with Express and Node.js

📦 Project Structure
bash
Copy
Edit
weather-dashboard/
│
├── client/         # React frontend
├── server/         # Node.js + Express backend
├── .gitignore
├── README.md
└── package.json
🛠️ Setup Instructions
✅ Prerequisites
Node.js & npm installed

MongoDB running locally or cloud (e.g. MongoDB Atlas)

API key from OpenWeather

⚙️ Backend Setup
bash
Copy
Edit
cd server
npm install
Create a .env file in server/ with the following:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_db_connection_string
WEATHER_API_KEY=your_openweather_api_key
Start the backend:

bash
Copy
Edit
node server.js
💻 Frontend Setup
bash
Copy
Edit
cd client
npm install
npm start
Your React app should now run on http://localhost:3000
The backend runs on http://localhost:5000

