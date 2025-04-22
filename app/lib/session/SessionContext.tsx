
"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { getSession } from "./actions";

const SessionContext = createContext<any>(null);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {

  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      setSession(sessionData);
      setLoading(false); 
    }

    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);