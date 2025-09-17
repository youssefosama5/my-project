    import React, { useState } from "react";

 export default function Nav ({ setSearchTerm }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input); 
  };
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom position-fixed w-100 top-0 z-3">
  <div className="container-fluid">
    {/* <img src={Logo} alt="" width={"20rem"}/> */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-2">
        <li className="nav-item">
          <a className="nav-link active px-3 ms-5" href="#">Home</a>
        </li>
          <li className="nav-item">
          <a className="nav-link px-3" href="#Films">Films</a>
        </li>
          <li className="nav-item">
          <a className="nav-link px-3" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-2" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#social">Social</a>
        </li>
      </ul>


      <form className="d-flex align-items-center flex-row gap-1" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search" 
   value={input}
              onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-outline-light d-flex align-items-center" type="submit">
          <i className="bi bi-search me-1"></i> Search
        </button>
      </form>
    </div>
  </div>
</nav> 
</>
    ) }
