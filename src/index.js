import './style.css';
import getTodoList from './todo-list/default-list';
import generateProjecSidebar from './interface/sidebar';

const todoList = getTodoList();
const projects = todoList.projects;

generateProjecSidebar(projects);