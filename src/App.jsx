import "./App.css";
import { Button, Checkbox } from "./components";
import { CheckboxWrapper } from "./wrappers";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Hello world</h1>
      <Button label={"Done"} />
      <Checkbox />
      <CheckboxWrapper />
    </div>
  );
}

export default App;
