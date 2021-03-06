import React from "react";
import { Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Routes from "./Routes";
import history from "./Routes/history";

function App() {
  return (
    <>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
