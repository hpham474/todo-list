function save(todoList) {
    localStorage.setItem("todoList", JSON.stringify(todoList.toJson()));
}

export default save;