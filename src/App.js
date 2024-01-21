import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval); // ניקוי בפירוק הקומפוננטה
  }, []);
  return (
    <div>
      Seconds: {seconds}
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


function Greeting() {
  const [name, setName] = React.useState("World");

  return (
    <div>
      <h1>Hi, {name}!</h1>
      <button onClick={() => setName("Alice")}>Change Name</button>
    </div>
  );
}

function Greeting1(props) {
  return <h1>Hello, {props.name}!</h1>;
}


function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Greeting />
      <Greeting1 name="Alice" />
      <Greeting1 name="Noa" />
      <Counter />
      <Timer />

    </div>
  );
}

export default App;