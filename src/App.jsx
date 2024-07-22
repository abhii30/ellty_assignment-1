import { useState,useEffect} from "react";
import "./App.css";
import { Button } from "./components";
import { CheckboxWrapper } from "./wrappers";

const initialPages = [
  { label: "Page 1", isActive: true },
  { label: "Page 2", isActive: false },
  { label: "Page 3", isActive: true },
  { label: "Page 4", isActive: true },
];

function App() {
  const [pages, setPages] = useState(initialPages);
  const [isAllPagesActive, setIsAllPagesActive] = useState(false);

   useEffect(() => {
     const allActive = pages.every((page) => page.isActive);
     setIsAllPagesActive(allActive);
   }, [pages]);
  
  const togglePageActive = (index) => {
    setPages((prevPages) =>
      prevPages.map((page, i) =>
        i === index ? { ...page, isActive: !page.isActive } : page
      )
    );
  };

  const toggleAllPages = () => {
    setIsAllPagesActive((prev) => !prev);
    setPages((prevPages) =>
      prevPages.map((page) => ({ ...page, isActive: !isAllPagesActive }))
    );
  }



  return (
    <div className="flex flex-col p-5 shadow-[0_0_6px] shadow-secondary rounded-md">
      <CheckboxWrapper label={"All Pages"} onClick={toggleAllPages} isActive={isAllPagesActive}/>
      <hr className="my-1 text-secondary" />
      {pages.map((page, index) => (
        <CheckboxWrapper
          key={index}
          label={page.label}
          isActive={page.isActive}
          onClick={() => togglePageActive(index)}
        />
      ))}
      <hr className="mt-1 mb-4 text-secondary" />
      <Button label={"Done"} />
    </div>
  );
}

export default App;
