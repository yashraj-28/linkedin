import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SupervisorAccount,
} from "@material-ui/icons";
import { useDispatch } from 'react-redux';
import {auth} from './Firebase'
import {logout } from './features/userSlice'

function Header() {
  
  
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDA3OGQ0IiBkPSJNNDIsMzdjMCwyLjc2Mi0yLjIzOCw1LTUsNUgxMWMtMi43NjEsMC01LTIuMjM4LTUtNVYxMWMwLTIuNzYyLDIuMjM5LTUsNS01aDI2YzIuNzYyLDAsNSwyLjIzOCw1LDUJVjM3eiI+PC9wYXRoPjxwYXRoIGQ9Ik0zMCwzN1YyNi45MDFjMC0xLjY4OS0wLjgxOS0yLjY5OC0yLjE5Mi0yLjY5OGMtMC44MTUsMC0xLjQxNCwwLjQ1OS0xLjc3OSwxLjM2NAljLTAuMDE3LDAuMDY0LTAuMDQxLDAuMzI1LTAuMDMxLDEuMTE0TDI2LDM3aC03VjE4aDd2MS4wNjFDMjcuMDIyLDE4LjM1NiwyOC4yNzUsMTgsMjkuNzM4LDE4YzQuNTQ3LDAsNy4yNjEsMy4wOTMsNy4yNjEsOC4yNzQJTDM3LDM3SDMweiBNMTEsMzdWMThoMy40NTdDMTIuNDU0LDE4LDExLDE2LjUyOCwxMSwxNC40OTlDMTEsMTIuNDcyLDEyLjQ3OCwxMSwxNC41MTQsMTFjMi4wMTIsMCwzLjQ0NSwxLjQzMSwzLjQ4NiwzLjQ3OQlDMTgsMTYuNTIzLDE2LjUyMSwxOCwxNC40ODUsMThIMTh2MTlIMTF6IiBvcGFjaXR5PSIuMDUiPjwvcGF0aD48cGF0aCBkPSJNMzAuNSwzNi41di05LjU5OWMwLTEuOTczLTEuMDMxLTMuMTk4LTIuNjkyLTMuMTk4Yy0xLjI5NSwwLTEuOTM1LDAuOTEyLTIuMjQzLDEuNjc3CWMtMC4wODIsMC4xOTktMC4wNzEsMC45ODktMC4wNjcsMS4zMjZMMjUuNSwzNi41aC02di0xOGg2djEuNjM4YzAuNzk1LTAuODIzLDIuMDc1LTEuNjM4LDQuMjM4LTEuNjM4CWM0LjIzMywwLDYuNzYxLDIuOTA2LDYuNzYxLDcuNzc0TDM2LjUsMzYuNUgzMC41eiBNMTEuNSwzNi41di0xOGg2djE4SDExLjV6IE0xNC40NTcsMTcuNWMtMS43MTMsMC0yLjk1Ny0xLjI2Mi0yLjk1Ny0zLjAwMQljMC0xLjczOCwxLjI2OC0yLjk5OSwzLjAxNC0yLjk5OWMxLjcyNCwwLDIuOTUxLDEuMjI5LDIuOTg2LDIuOTg5YzAsMS43NDktMS4yNjgsMy4wMTEtMy4wMTUsMy4wMTFIMTQuNDU3eiIgb3BhY2l0eT0iLjA3Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLDE5aDV2MTdoLTVWMTl6IE0xNC40ODUsMTdoLTAuMDI4QzEyLjk2NSwxNywxMiwxNS44ODgsMTIsMTQuNDk5QzEyLDEzLjA4LDEyLjk5NSwxMiwxNC41MTQsMTIJYzEuNTIxLDAsMi40NTgsMS4wOCwyLjQ4NiwyLjQ5OUMxNywxNS44ODcsMTYuMDM1LDE3LDE0LjQ4NSwxN3ogTTM2LDM2aC01di05LjA5OWMwLTIuMTk4LTEuMjI1LTMuNjk4LTMuMTkyLTMuNjk4CWMtMS41MDEsMC0yLjMxMywxLjAxMi0yLjcwNywxLjk5QzI0Ljk1NywyNS41NDMsMjUsMjYuNTExLDI1LDI3djloLTVWMTloNXYyLjYxNkMyNS43MjEsMjAuNSwyNi44NSwxOSwyOS43MzgsMTkJYzMuNTc4LDAsNi4yNjEsMi4yNSw2LjI2MSw3LjI3NEwzNiwzNkwzNiwzNnoiPjwvcGF0aD48L3N2Zz4="
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar={true}
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
