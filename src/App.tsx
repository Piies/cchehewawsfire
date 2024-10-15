import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Signup from "./pages/Signup.tsx";
import Login from './pages/Login';
import { AuthProvider } from "./context/auth.tsx";
import PublicRoute from "./routes/PublicRoute.tsx";
import PrivateRoute from "./routes/PrivateRoute.tsx";

function App() {

  return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path="/Signup" element={
        <PublicRoute>
          <Signup />
        </PublicRoute>
      } />
      <Route path="/Login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
    </Routes>
    </AuthProvider>
    
  )
}

export default App
