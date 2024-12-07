import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import Firestore functions

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
const db = getFirestore(app); // Initialize Firestore

// Sign Up
async function signup(username, name, email, password) {
    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Get the user ID
        const userId = userCredential.user.uid;

        // Store username and name in Firestore
        await setDoc(doc(db, "users", userId), {
            username: username,
            name: name,
            email: email
        });

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
    const username = document.getElementById('signupUsername').value;
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    await signup(username, name, email, password);
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