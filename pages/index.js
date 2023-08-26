import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [minCustomers, setMinCustomers] = useState("");
  const [maxCustomers, setMaxCustomers] = useState("");
  const [averageCookies, setAverageCookies] = useState("");
  const [lastCreatedStand, setLastCreatedStand] = useState(null);

  function submitHandler(event) {
    event.preventDefault();
    if (location && minCustomers && maxCustomers && averageCookies) {
      const newStand = {
        location,
        minCustomers: parseInt(minCustomers),
        maxCustomers: parseInt(maxCustomers),
        averageCookies: parseInt(averageCookies),
      };

      setLastCreatedStand(newStand);
      setLocation("");
      setMinCustomers("");
      setMaxCustomers("");
      setAverageCookies("");
    }
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Form</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex flex-col items-center py-4 space-y-8 flex-grow">
          <div className="bg-green-500 p-4 text-white text-center mb-4">
            <h2 className="text-2xl font-bold">Add New Cookie Stand</h2>
          </div>
          <Form
            submitHandler={submitHandler}
            location={location}
            minCustomers={minCustomers}
            maxCustomers={maxCustomers}
            averageCookies={averageCookies}
            lastCreatedStand={lastCreatedStand}
            setLocation={setLocation}
            setMinCustomers={setMinCustomers}
            setMaxCustomers={setMaxCustomers}
            setAverageCookies={setAverageCookies}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="bg-green-500 p-4 text-white text-center">
      <h2 className="text-4xl">Cookie Stand Admin</h2>
    </header>
  );
}

function Form(props) {
  return (
    <form
      className="flex flex-col w-full md:w-1/2 p-4 mx-auto bg-white shadow-md rounded-lg"
      onSubmit={props.submitHandler}
    >
      <input
        name="location"
        placeholder="Location"
        value={props.location}
        className="p-3 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={(e) => props.setLocation(e.target.value)}
      />
      <input
        name="minCustomers"
        type="number"
        placeholder="Min Customers per Hour"
        value={props.minCustomers}
        className="p-3 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={(e) => props.setMinCustomers(e.target.value)}
      />
      <input
        name="maxCustomers"
        type="number"
        placeholder="Max Customers per Hour"
        value={props.maxCustomers}
        className="p-3 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={(e) => props.setMaxCustomers(e.target.value)}
      />
      <input
        name="averageCookies"
        type="number"
        placeholder="Average Cookies per Sale"
        value={props.averageCookies}
        className="p-3 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={(e) => props.setAverageCookies(e.target.value)}
      />
      {props.lastCreatedStand && (
        <div className="bg-white p-3 m-2 border rounded-lg">
          <pre>{JSON.stringify(props.lastCreatedStand, null, 2)}</pre>
        </div>
      )}
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-green-500 p-4 text-white text-center">
      &copy; 2023
    </footer>
  );
}