






import React from "react";
import "./topbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux"; // Update the path accordingly




export default function Topbar() {
  const dispatch = useDispatch();
  // Logout function
  const handleLogout = () => {
    dispatch(logout()); // Dispatching the logout action
    console.log("Logging out...");
    // You can also add additional logout logic here, such as redirecting to login page
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">LMRIP Admin</span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer" onClick={handleLogout}>
            Logout
          </div>
    
        </div>
      </div>
    </div>
  );
}
