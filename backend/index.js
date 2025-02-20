const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Allow JSON body parsing

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Example API for fetching todos
app.get("/api/todos", (req, res) => {
  res.json([
    { id: 1, title: "Learn Vue 2", completed: false },
    { id: 2, title: "Build a Todo App", completed: true }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
