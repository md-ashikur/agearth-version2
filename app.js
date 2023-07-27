  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyCWLp-YXxLr1zqx89L9YAeRSxM6pu9XvSI",
    authDomain: "agearth123.firebaseapp.com",
    projectId: "agearth123",
    storageBucket: "agearth123.appspot.com",
    messagingSenderId: "400975255498",
    appId: "1:400975255498:web:308fe184a61ac1982ae133"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

// getting all the objects of form 
var email = document.getElementById("email");
var fullName = document.getElementById("name");
var password = document.getElementById("password");

// function for starting data
window.signup = function(e){
    e.preventDefault();
    var obj = {
        email: email.value,
        fullName: fullName.value,
        password: password.value,
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
        console.log(user.vid)
        alert("Signed in successfully");
    })
    .catch(function (err) {
        alert("error" + err)
    })
    console.log(obj);
}