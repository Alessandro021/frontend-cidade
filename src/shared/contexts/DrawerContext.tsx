import { createContext, ReactNode, useState, useCallback, useContext} from "react";


interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void
}

interface IDrawerProviderProps{
    children: ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData);

export function DrawerProvider({children}: IDrawerProviderProps){
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const toggleDrawerOpen =  useCallback(() => {
        setIsDrawerOpen(oldDraweropen =>  !oldDraweropen);
    }, []);

    return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    );
}

export function useDrawerContext(){
    return useContext(DrawerContext);
}