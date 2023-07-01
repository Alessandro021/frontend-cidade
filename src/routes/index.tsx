import { Routes, Route, Navigate} from "react-router-dom";
import {Button} from "@mui/material";
import { useAppThemecontext } from "../shared/contexts/ThemeContext";

export function AppRoutes(){

    const {toggleTheme} = useAppThemecontext();

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>} />

            <Route path="*"  element={<Navigate to={"/pagina-inicial"} />}/>

        </Routes>
    );
}