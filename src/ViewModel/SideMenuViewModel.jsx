// SideMenuViewModel
import { useCallback } from "react";
const SideMenuViewModel = () => {
    const handleMenuItemClick = useCallback((text) => {

    }, []);//for menu item click
    const logout = useCallback(() => {
        alert("logout");

    }, []);

return{
    handleMenuItemClick,
    logout
};
};
export default  SideMenuViewModel;
