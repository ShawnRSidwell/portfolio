import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <HeaderContext.Provider value={{ isSticky, setIsSticky }}>
      {children}
    </HeaderContext.Provider>
  );
}

function useHeader() {
  const context = useContext(HeaderContext);
  if (HeaderContext === undefined)
    throw new Error("Header context outside of HeaderProvider");
  return context;
}

export { HeaderProvider, useHeader };
