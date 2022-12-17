import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import PreLoad from "./components/PreLoad";
import { UserProvider } from "./providers/userContext";
import { RoutesMain as Routes } from "./routes";

function App() {
  const [preloadState, setPreloadState] = useState(true);

  return (
    <>
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
