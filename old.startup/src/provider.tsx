import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// Create AuthContext
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to access AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function Provider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));
  const navigate = useNavigate();

  // Login function
  const login = () => {
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    Cookies.remove("token");
    navigate("/"); // Redirect to home page after logout
  };

  // Use effect to sync authentication state with cookie changes
  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <NextUIProvider>{children}</NextUIProvider>
    </AuthContext.Provider>
  );
}
