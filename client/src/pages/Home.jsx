import { useEffect, useState } from "react";
import axios from "axios";
import { ACCESS_TOKEN_KEY, API_URL } from "../constant";

export const Home = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const [user, setUser] = useState();

  const handleGetUser = () => {
    axios
      .request({
        method: "GET",
        url: `${API_URL}/auth`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setUser(res.data.data));
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div>
      <div>Home</div>
      <div>FirstName: {user && user.firstName}</div>
      <div>LastName: {user && user.lastName}</div>
      <div>Email: {user && user.email}</div>
    </div>
  );
};
