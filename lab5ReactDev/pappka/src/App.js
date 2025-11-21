import HelloWithProps from "./Hello";
import Counter from "./Counter";
import InputTracker from "./InputTracket";
import "./App.css";
import LoginStatus from "./LoginStatus";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <div>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
      <Counter />
      <div className="m-1">
        <InputTracker />
      </div>
      <div className="m-1">
        <LoginStatus isLoggedIn={isLoggedIn} />
      </div>
      <div className="m-1">
        <LoginStatus />
      </div>
      <div className="m-1">
        <LoginStatus setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
}
export default App;
