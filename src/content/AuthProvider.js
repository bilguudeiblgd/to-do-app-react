import { createContext, useState } from "react";

const AuthContext = createContext({ id: null, name: null, email: null });



export default AuthContext;