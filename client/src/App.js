import { useState } from "react";
import FormModal from "./components/form/FormModal";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [openModal, setOpenModal] = useState({
    signUp: false,
    signIn: false
  });
  return (
    <div className="App">
      <Navbar setOpenModal={setOpenModal}/>
      <FormModal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}

export default App;
