import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";
import { DrawerProvider } from "./shared/contexts/DrawerContext";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export function App() {

    return (
        <AppThemeProvider>
            <DrawerProvider>
                <MenuLateral>
                    <AppRoutes />
                </MenuLateral>
            </DrawerProvider>
        </AppThemeProvider>
    );
}