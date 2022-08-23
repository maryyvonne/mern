import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoSettings } from "react-icons/go";
import {
  Navbar,
  Footer,
  Sidebar,
  Notifications,
  TooltipComp,
} from "./components";
import { Home, Dashboard, Contacts, Projects, Schedule, Tasks } from "./pages";
import "./App.css";
import { useStateContext } from './contexts/ContextProvider';
import { SidebarLinks } from './components/sidebar/SidebarLinks';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <Router>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
            <TooltipComp content='Settings' position='top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: "red", borderRadius: "50%" }}
              >
                <GoSettings />
              </button>
            </TooltipComp>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar  />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg '>
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
            ${activeMenu ? " md:ml-72 " : " flex-2"}`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Home />} />

              {/* Pages */}
              <Route path='/projects' element={<Projects />} />
              <Route path='/contacts' element={<Contacts />} />

              {/* Apps */}
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/tasks' element={<Tasks />} />

              {/* Charts */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
