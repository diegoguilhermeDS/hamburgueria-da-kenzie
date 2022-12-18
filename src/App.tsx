import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import PreLoad from "./components/PreLoad";
import { UserProvider } from "./providers/userContext";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  const darkMode: boolean = JSON.parse(localStorage.getItem("@darkMode") || "true")
  const [preloadState, setPreloadState] = useState(darkMode);


  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      {preloadState && <PreLoad setPreloadState={setPreloadState} />}
      {!preloadState && (
        <UserProvider>
          <Routes />
        </UserProvider>
      )}
    </>
  );
}

export default App;
