import { Suspense } from "react";
import { Slide, ToastContainer } from "react-toastify";
import Router from "./Routes";
import Spinner from "./components/Spinner";
import AuthContextProvider from "./contexts/authContext";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContextProvider>
        <Router />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          transition={Slide}
        />
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
