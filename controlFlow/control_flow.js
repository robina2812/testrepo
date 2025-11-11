let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

switch (userType) {     

    case "admin":
        userCategory = "administrator";      
        break;

    case "manager":
        userCategory = "Manager";
        break;
        
    case "subscriber":
        userCategory = "Subscriber";
        break;               

    default:
        userCategory = "Unknown";
}


if (isLoggedIn) {
    if (userRole === "admin") { 
        userMessage = "welcomE admin!";
        
    } else {
        userMessage = "welcome user!";

    }
} else {
    userMessage = "please log in to acess the system.";
    
}

if (userRole === "admin") {
    accessLevel = "Full acess granted";         
} 
else if (userRole === "manager"){
    accessLevel= "Limited access granted";    
} else{
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);
console.log("user Message:", userMessage);
console.log("user Category:", userCategory);
console.log("authentication Status:", authenticationStatus);