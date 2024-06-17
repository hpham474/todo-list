import './style.css';
import getTodoList from './todo-list/default-list';
import generateProjecSidebar from './interface/sidebar';
import generateInbox from './pages/inbox'

const todoList = getTodoList();
const projects = todoList.projects;

generateProjecSidebar(projects);

// default page
generateInbox(todoList);