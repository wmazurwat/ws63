import { useEffect, useState } from "react";
import "./App.css";
import Capture from "./components/Capture";
import logo from "./logo.svg";

function App() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [text1, setText1] = useState("Text1");
  const onFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  const onTextInputChange = (event) => {
    setText1(event.target.value);
  };
  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);
  return (
    <div className="App">
      <header className="App-header">
        {preview && (
          <Capture img={preview} textTop={"Kiedy nie lubisz Reacta"} textBottom={"ale Jacek wyszkolił cię w jeden księżyc"} />
        )}
        <input type={"file"} onChange={onFileInputChange} />
        <input type={"text"} onChange={onTextInputChange} />
      </header>
    </div>
  );
}

export default App;