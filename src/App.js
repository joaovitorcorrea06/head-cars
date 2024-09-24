import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/auth";
import Routes from "./routers";
// import { VersionProvider } from './context/version';

function App() {

  return (
    <BrowserRouter>
      {/* <VersionProvider> */}
      {/* <AuthProvider> */}
      <Routes />
      {/* </AuthProvider> */}
      {/* </VersionProvider> */}
    </BrowserRouter>
  );
}

export default App;
