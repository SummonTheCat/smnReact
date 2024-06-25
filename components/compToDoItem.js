const ToDoItem = ({ todo, removeTodo }) => {
  const todoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    borderBottom: '1px solid #ccc'
  };

  const buttonStyle = {
    background: '#a4a4a4',
    color: 'white',
    border: 'none',
    padding: '4px 8px',
    cursor: 'pointer',
    borderRadius: '4px'
  };

  return React.createElement(
    'li',
    { style: todoStyle },
    todo.text,
    React.createElement(
      'button',
      { style: buttonStyle, onClick: () => removeTodo(todo.id) },
      'Remove'
    )
  );
};
