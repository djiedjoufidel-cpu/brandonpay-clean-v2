import { registerUser, loginUser } from "./auth";

// Exemple inscription
document.getElementById("registerBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = await registerUser(email, password);
  console.log("User registered:", user);
});

// Exemple login
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = await loginUser(email, password);
  console.log("User logged in:", user);
});
