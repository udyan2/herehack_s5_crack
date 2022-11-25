import { useState } from "react";

export default function Home() {
  const [nature, setNature] = useState();
  const [price, setPrice] = useState();
  const [area, setArea] = useState();
  const [target, setTarget] = useState();
  const [budget, setBudget] = useState();
  function display(e) {
    e.preventDefault();
    console.log([nature, price, area, target, budget]);
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">Localt</h1>
      <form
        onSubmit={display}
        id="main"
        className=" mt-8 flex items-center space-y-8 flex-col"
      >
        <div className=" flex justify-center space-x-8 w-screen">
          <input
            placeholder="Nature of bussiness"
            className="box"
            required
            onChange={(e) => {
              setNature(e.target.value);
            }}
          />
          <select
            className="box"
            name="Price of goods sold"
            required
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          >
            <option value="none" selected disabled hidden>
              Price of goods sold
            </option>
            <option value="1000">1000</option>
            <option value="2000-10000">2000-10,000</option>
            <option value="10000-1000000">10,000-10,00,000</option>
            <option value="1000000+">10,00,000+</option>
          </select>
          <input
            placeholder="Area required"
            className="box"
            required
            onChange={(e) => {
              setArea(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center space-x-8 w-screen">
          <select
            className="box"
            name="Target age"
            required
            onChange={(e) => {
              setTarget(e.target.value);
            }}
          >
            <option value="none" selected disabled hidden>
              Target Age
            </option>
            <option value="6-13">6-13</option>
            <option value="13-17">13-17</option>
            <option value="17-21">17-21</option>
            <option value="21+">21+</option>
          </select>
          <input
            placeholder="Estimate budget"
            className="box"
            required
            onChange={(e) => {
              setBudget(e.target.value);
            }}
          />
        </div>
        <button className=" w-[30vw] text-white font-bold text-xl bg-blue-900 h-10">
          Submit
        </button>
      </form>
    </div>
  );
}
