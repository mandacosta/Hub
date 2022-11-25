import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes";
import { ButtonsStyle } from "./styles/buttons";
import { GlobalStyle } from "./styles/globalStyles";
import { InputStyle } from "./styles/inputs";

function App() {
  return (
    <>
      <ToastContainer />

      <AuthProvider>
        <RoutesMain />
      </AuthProvider>

      <GlobalStyle />
      <InputStyle />
      <ButtonsStyle />
    </>
  );
}

export default App;
