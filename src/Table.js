import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/apicalls";
// import { users } from "./users";

export const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.allUsers);
  // console.log(users);
  const [query, setQuery] = useState("");
  const [ten, setTen] = useState(users);
  // console.log(ten);

  const [asc, setAsc] = useState([]);
  const [dsc, setDsc] = useState([]);

  const keys = ["first_name", "last_name", "email"];
  const handleChange = (e) => {
    setQuery(e.target.value);
    setTen(search(users));
  };
  // console.log(
  //   users.filter((user) => user.first_name.toLowerCase().includes(query))
  // );
  // console.log(users[0].first_name);

  const search = (users) => {
    return users.filter((user) =>
      // user.first_name.toLowerCase().includes(query) ||
      // user.last_name.toLowerCase().includes(query) ||
      // user.email.toLowerCase().includes(query)
      keys.some((key) => user[key].toLowerCase().includes(query))
    );
  };

  useEffect(() => {
    getUsers(query, dispatch);
  }, [dispatch]);

  // useEffect(() => {
  //   setTen(users.slice(0, 10));
  // }, [users]);
  // useEffect(() => {
  //   if (asc === true) {
  //     setTen(ascUsers(ten));
  //   }
  //   console.log(ten);
  // }, [asc, ten]);

  const ascUsers = (users) => {
    console.log(users);
    return users.sort((a, b) => {
      let nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  };
  const dscUsers = (users) => {
    return users.sort((a, b) => {
      let nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // names must be equal
      return 0;
    });
  };

  const handleAsc = (e) => {
    e.preventDefault();
    setAsc(ascUsers(ten));
    console.log(asc);
    // setAsc(true);
    // setTen(ascUsers(ten));
    // console.log(ten);
  };
  const handleDsc = (e) => {
    e.preventDefault();
    setDsc(dscUsers(ten));
    console.log(dsc);
  };

  // console.log(asc);
  // console.log(dsc);
  // console.log(users);
  const handleTen = (e) => {
    e.preventDefault();
    setTen(users.slice(0, 2));
  };
  const handleTwenty = (e) => {
    e.preventDefault();
    setTen(users.slice(2, 4));
  };
  const handleThirty = (e) => {
    e.preventDefault();
    setTen(users.slice(4, 6));
  };
  const handleForty = (e) => {
    e.preventDefault();
    setTen(users.slice(6, 8));
  };
  const handleFifty = (e) => {
    e.preventDefault();
    setTen(users.slice(8, 10));
  };
  const handleSixty = (e) => {
    e.preventDefault();
    setTen(users.slice(10, 12));
  };
  const handleSeventy = (e) => {
    e.preventDefault();
    setTen(users.slice(12, 14));
  };
  const handleEighty = (e) => {
    e.preventDefault();
    setTen(users.slice(70, 80));
  };
  const handleNinety = (e) => {
    e.preventDefault();
    setTen(users.slice(80, 90));
  };
  const handleHundred = (e) => {
    e.preventDefault();
    setTen(users.slice(90, 100));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={handleChange}
      />
      <button onClick={handleAsc}>asc</button>
      <button onClick={handleDsc}>dsc</button>
      <button onClick={handleTen}>1</button>
      <button onClick={handleTwenty}>2</button>
      <button onClick={handleThirty}>3</button>
      <button onClick={handleForty}>4</button>
      <button onClick={handleFifty}>5</button>
      <button onClick={handleSixty}>6</button>
      <button onClick={handleSeventy}>7</button>
      <button onClick={handleEighty}>8</button>
      <button onClick={handleNinety}>9</button>
      <button onClick={handleHundred}>10</button>

      {/* <FilteredUsers users={users} /> */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>

          {ten.map((user) => (
            <tr key={user._id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
