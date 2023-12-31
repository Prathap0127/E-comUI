import React from "react";
import { NavLink } from "react-router-dom";
//normal user menu side bar
const UserMenu = () => {
  return (
    <>
      <div className="text-center mt-2">
        <NavLink to="/dashboard/user/">
          <h4>DashBoard </h4>
        </NavLink>
        <div className="list-group">
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
