// TODO: Create a type alias for ID that can be either string or number
type ID = string | number;


// TODO: Create a function that formats an ID
// If it's a number, prefix it with "ID-"
// If it's a string, return it in uppercase
function formatID(id: ID): string {
    if(typeof id === "number") return `ID-${id}`;
    else return id.toUpperCase();
}


// TODO: Create a type for different user roles - admin, user and guest
type UserRole = "admin" | "user" | "guest";


// TODO: Create an interface for User with:
// - id (ID type)
// - name (string)
// - role (UserRole)
// - email (string, optional)
interface User {
    id: ID;
    name: string;
    role: UserRole;
    email?: string;
}


// TODO: Create a function that checks if a user has admin privileges
function isAdmin(user: User): boolean {
    if(user.role === "admin") return true;
    else return false;
}


// TODO: Create a function that returns appropriate greeting based on role
function getRoleGreeting(user: User): string {

    switch (user.role) {
        case "admin": return 'Admin - Greeetings great admin!';
        case "user": return 'User - Please log-off when you are done!';
        case "guest": return 'Guest - No coffee on the keyboard please!';
        default: return 'This should not be possible;'
    }
}


// Test your code
const user1: User = { id: 1, name: "Alice", role: "admin" };
const user2: User = { id: "USER-123", name: "Bob", role: "user", email: "bob@example.com" };
console.log(formatID(user1.id));
console.log(isAdmin(user1));
console.log(getRoleGreeting(user2));

