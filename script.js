// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is connected and running.");

    // Toggle menu for mobile navigation
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("hidden");
        });
    }

    // Form validation for login and registration
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Login form submitted!");
            // Add actual authentication logic here
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Registration form submitted!");
            // Add actual registration logic here
        });
    }

    // Handling leaderboard animations
    const leaderboardItems = document.querySelectorAll(".leaderboard-item");
    
    leaderboardItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("fade-in");
        }, index * 300);
    });

    // Handling notifications display
    const notificationBell = document.getElementById("notification-bell");
    const notificationList = document.getElementById("notification-list");
    
    if (notificationBell && notificationList) {
        notificationBell.addEventListener("click", function () {
            notificationList.classList.toggle("hidden");
        });
    }
});
