import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminCard from "../components/AdminCard";
import Main from "../components/Main";
import UserMenu from "../components/UserMenu";
import { useAuth } from "../context/auth";

//user seperate dash board
const Dashboard = () => {
  const [auth] = useAuth();
  const [order, setOrder] = useState([]);

  const handleCard = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/users/get-orders`
      );

      setOrder(data.length);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCard();
  }, []);
  return (
    <Main>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">{auth.user.name} DashBoard</h1>
            <div className="row justify-content-sm-start">
              {/* seperate card to display user data */}
              <AdminCard
                data={{
                  title: "Orders",
                  value: order,
                  icon: "fa-cart-shopping",
                  cardBorder: "primary",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Dashboard;
