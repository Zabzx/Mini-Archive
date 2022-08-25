import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext"

function Dashboard() {
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    console.log(currentUser)
  }, []);

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.log("failed to log out")
    }
  }
  return (
    <div className="App">
      <button className="btn" onClick={handleLogout}>Click</button>
    </div>
  );
}

export default Dashboard;
