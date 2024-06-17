import './style.css';
import getTodoList from './todo-list/default-list';
import generateProjectSidebar from './interface/sidebar';
import generateInbox from './pages/inbox'

const todoList = getTodoList();
const projects = todoList.projects;

generateProjectSidebar(projects);

// default page
generateInbox(todoList);