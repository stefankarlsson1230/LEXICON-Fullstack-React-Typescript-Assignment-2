// Base interface for exercises
interface Todo { 
    id: number; 
    title: string; 
    description: string; 
    completed: boolean;
    createdAt: Date;
}


// TODO: Use Partial to create a type for updating a todo
type TodoUpdate = Partial<Todo>;


// TODO: Create a function that updates a todo
function updateTodo(todo: Todo, updates: TodoUpdate): Todo {
    return {...todo, ...updates};
}


// TODO: Use Pick to create a type with only id and title
type TodoPreview = Pick<Todo, "id" | "title">;


// TODO: Create a function that returns a todo preview
function getTodoPreview(todo: Todo): TodoPreview {
    return { id: todo.id, title: todo.title };
}


// TODO: Use Omit to create a type without the id
type NewTodo = Omit<Todo, "id">;


// TODO: Create a function that creates a new todo
function createTodo(todoData: NewTodo): Todo {
    const newId = Math.floor(Math.random() * 1000) + 1;

    return {...todoData, id: newId };
}


// TODO: Use Readonly to create an immutable todo type
type ReadonlyTodo = Readonly<Todo>;


// TODO: Use Record to create a type for todo statistics
type TodoStats = Record<'total' | 'completed' | 'pending', number>;


// TODO: Create a function that calculates todo statistics
function calculateStats(todos: Todo[]): TodoStats {
    let completed = 0;

    todos.map((todo) => {if ( todo.completed) completed++; });
    
    return {
        total: todos.length,
        completed: completed,
        pending: todos.length - completed
    }
}


// TODO: Use Required to make all properties required
interface OptionalConfig { 
    apiUrl?: string; 
    timeout?: number; 
    retries?: number; 
}

type RequiredConfig = Required<OptionalConfig>;


// Test your code
const todo: Todo = {
    id: 1, 
    title: "Learn TypeScript",
    description: "Complete all exercises",
    completed: false, 
    createdAt: new Date()
};

const updated = updateTodo(todo, { completed: true });
console.log(updated);
const preview = getTodoPreview(todo);
console.log(preview);