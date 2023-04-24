import "./styles.css";
import { useState } from "react";

var cars = [
  {
    id: "1",
    name: "Ford",
    Model: "F250",
    year: "2011"
  },
  {
    id: "2",
    name: "BMW",
    Model: "M5",
    year: "2003"
  },
  {
    id: "3",
    name: "Audi",
    Model: "A8",
    year: "1999"
  },
  {
    id: "4",
    name: "Ford",
    Model: "Taurus",
    year: "2000"
  },
  {
    id: "5",
    name: "Ford",
    Model: "Festiva",
    year: "1992"
  },
  {
    id: "6",
    name: "Audi",
    Model: "5000S",
    year: "1984"
  },
  {
    id: "7",
    name: "Audi",
    Model: "5000S",
    year: "1984"
  },
  {
    id: "8",
    name: "BMW",
    Model: "525",
    year: "2003"
  },
  {
    id: "9",
    name: "Ford",
    Model: "F250",
    year: "2009"
  },
  {
    id: "10",
    name: "Ford",
    Model: "E250",
    year: "2006"
  },
  {
    id: "11",
    name: "Ford",
    Model: "Windstar",
    year: "1999"
  },
  {
    id: "12",
    name: "BMW",
    Model: "Z8",
    year: "2000"
  },
  {
    id: "13",
    name: "Ford",
    Model: "Taurus",
    year: "1992"
  },
  {
    id: "14",
    name: "BMW",
    Model: "1 Series",
    year: "2009"
  },
  {
    id: "15",
    name: "Audi",
    Model: "5000S",
    year: "1984"
  }
];

export default function App() {
  const [car, setCar] = useState(cars);
  const changeHandle = (event) => {
    const filteredCar = cars.filter((c) =>
      c.year.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCar(filteredCar);
  };

  const handleClick = (name) => {
    const newCar = cars.filter((c) => c.name === name);
    setCar(newCar);
  };

  return (
    <div className="App">
      <div style={{ padding: "1.5rem", fontSize: "20px" }}>
        <h1>Just Car Stuff</h1>
      </div>
      <div>
        <button onClick={() => handleClick("Ford")}>Ford</button>
        <button onClick={() => handleClick("BMW")}>BMW</button>
        <button onClick={() => handleClick("Audi")}>Audi</button>
      </div>
      <input
        className="input"
        onChange={changeHandle}
        placeholder="Search by manufacturing year"
      />
      <div>
        {car.map((c) => (
          <div key={c.id}>
            <ul style={{ paddingInline: "0px" }}>
              <li
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  padding: "0.5rem",
                  listStyleType: "none",
                  border: "1.5px solid black",
                  width: "300px",
                  margin: "3px",
                  borderRadius: "1rem"
                }}
              >
                <h3>{c.name}</h3>
                <h4>Model {c.Model}</h4>
                <small>Year:{c.year}</small>{" "}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
