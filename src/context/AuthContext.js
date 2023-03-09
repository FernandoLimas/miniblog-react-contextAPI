import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider({children, value}) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export function useAuthContextProvider() {
    return useContext(AuthContext)
}
