const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const containerStyle = {
    marginTop: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1pt solid #ccc',
    boxSizing: 'border-box'
  };

  const addButtonStyle = {
    width: '100%',
    padding: '10px',
    background: '#555',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0'
  };

  return React.createElement(
    'div',
    { style: containerStyle },
    React.createElement(
      'input',
      {
        type: 'text',
        value: newTodo,
        onChange: (e) => setNewTodo(e.target.value),
        placeholder: 'Add a new task',
        style: inputStyle
      }
    ),
    React.createElement(
      'button',
      { onClick: addTodo, style: addButtonStyle },
      'Add'
    ),
    React.createElement(
      'ul',
      { style: listStyle },
      todos.map(todo => React.createElement(ToDoItem, { key: todo.id, todo: todo, removeTodo: removeTodo }))
    )
  );
};