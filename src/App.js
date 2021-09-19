import Input from "./components/Input";
import Display from "./components/Display";
import { ValueProvider } from "./context/ValueContext";
import "./styles.css";

export default function App() {
  return (
    <ValueProvider>
      <div className="App">
        <Display />

        <Input />
      </div>
    </ValueProvider>
  );
}
