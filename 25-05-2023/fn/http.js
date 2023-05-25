export const getToDoUsers = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/todos/user/7`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn({
      success: false,
      message: err.message,
    });
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const res = await fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn({
      success: false,
      message: err.message,
    });
  }
};
