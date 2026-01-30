import ClickCounter from "./components/ClickCounter";
import PrimeCalculator from "./components/PrimeCalculator";
import FormReducer from "./components/FormReducer";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LayoutEffectExample from "./components/LayoutEffectExample";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <ClickCounter />
      <hr />
      <PrimeCalculator />
      <hr />
      <FormReducer />
      <hr />
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      <hr />
      <LayoutEffectExample />
    </div>
  );
}

export default App;
