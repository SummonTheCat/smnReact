const App = () => {
    const appContainerStyle = {
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      boxSizing: 'border-box'
    };
  
    const headingStyle = {
      textAlign: 'center'
    };
  
    const paragraphStyle = {
      textAlign: 'center'
    };
  
    const rootStyle = {
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f0f0f0',
      margin: '0'
    };
  
    setStyle(document.getElementById('root'), rootStyle);
  
    return React.createElement(
      'div',
      { style: appContainerStyle },
      React.createElement('h1', { style: headingStyle }, 'Simple ToDo'),
      React.createElement('p', { style: paragraphStyle }, 'A simple ToDo list built without build systems or JSX.'),
      React.createElement(ToDoList)
    );
  };