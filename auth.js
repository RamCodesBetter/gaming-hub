// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2V6bcVD__WEzSywfv-ojKNKgXr-0szTU",
  authDomain: "rammyboi-s-gaming-hub.firebaseapp.com",
  projectId: "rammyboi-s-gaming-hub",
  storageBucket: "rammyboi-s-gaming-hub.firebasestorage.app",
  messagingSenderId: "461576492014",
  appId: "1:461576492014:web:56ba2e67aee50a35b274ff",
  measurementId: "G-YM6974H23H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up
async function signup(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User registered successfully!');
    } catch (error) {
        alert(error.message);
    }
}

// Login
async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('User logged in successfully!');
    } catch (error) {
        alert(error.message);
    }
}

// Logout
async function logout() {
    await signOut(auth);
    alert('User logged out successfully!');
}

// Add event listeners for your forms
document.getElementById('signupForm').onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    await signup(email, password);
};

document.getElementById('loginForm').onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    await login(email, password);
};

document.getElementById('logoutBtn').onclick = async () => {
    await logout();
};