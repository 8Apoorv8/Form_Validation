import { useState } from "react";

function App() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [displayEmail, setDisplayEmail] = useState("email is Empty");
  let [displayPass, setDisplayPass] = useState("Password is Empty");
  const validate = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleOnChange = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "email") {
      setEmail(e.target.value);
      if (email.length <= 7) {
        setDisplayEmail("Invalid Email");
      } else if (
        e.target.value.includes("@") &&
        e.target.value.includes(".com")
      ) {
        setDisplayEmail("Vaild Email");
      }
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      if (password.length <= 4) {
        setDisplayPass("Password is too short");
      } else if (password.length >= 10) {
        setDisplayPass("Valid Password");
      }
    }
  };

  return (
    <div className="App bg-zinc-500 h-screen">
      <div className="grid place-content-center h-full">
        <form onSubmit={validate} className="flex flex-col">
          <p className="text-xs text-white my-2">{displayEmail}</p>

          <input
            name="email"
            type="text"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter your email"
            className="px-6 py-2 focus:outline-none bg-zinc-200 rounded-md mb-4"
          />
          <p className="text-xs text-white mb-2">{displayPass}</p>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter your password"
            className=" mb-4 px-6 py-2 focus:outline-none bg-zinc-200 rounded-md"
          />
          <button className="px-6 py-2 bg-zinc-700 text-white font-semibold rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
