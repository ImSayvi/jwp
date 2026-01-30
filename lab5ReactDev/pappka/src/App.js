// src/App.js
import { useState } from "react";
import Counter from "./Counter";
import HelloWithProps from "./Hello";
import InputTracker from "./InputTracket";
import Login from "./Login";
import LoginStatus from "./LoginStatus";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    alert(`Email: ${email}\nHasło: ${password}`);
    setIsLoggedIn(true); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>komponenty React</h1>

      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>Hello With Props</h2>
        <HelloWithProps name="Anna" />
        <HelloWithProps name="Bartek" />
        <HelloWithProps name="Celina" />
      </section>

      <section>
        <h2>Input Tracker</h2>
        <InputTracker />
      </section>

      <section>
        <h2>Login Status</h2>
        <LoginStatus isLoggedIn={isLoggedIn} />
      </section>

      <section>
        <h2>Login Form</h2>
        <Login onLogin={handleLogin} />
      </section>
    </div>
  );
}

export default App;
