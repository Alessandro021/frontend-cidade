import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export function App() {

    return (
        <AppThemeProvider>
            <AppRoutes />
        </AppThemeProvider>
    );
}