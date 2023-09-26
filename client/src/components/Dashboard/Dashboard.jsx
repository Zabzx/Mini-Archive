import React from "react";
import './dashboard.css';
// Context
import LeftSidebar from "../Left-Sidebar-component/Left-Sidebar";
import MainFeed from "../MainFeed/MainFeed";
import RightSidebar from "../RightSidebar/RightSidebar";
import Nav from "../Nav/Nav";

function Dashboard() {
  return (
    <>
    <div className="home">
    <Nav />
    
    {/* // Main content */}
    <div className="main home-container">
      <LeftSidebar />
      <MainFeed />
      <RightSidebar />
    </div>
    </div>
    </>
  );
}

export default Dashboard;
