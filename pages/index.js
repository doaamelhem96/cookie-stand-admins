import Head from "next/head";
import { useState } from "react";
import CreateForm from "@/components/CreateForm"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ReportTable from "@/components/ReportTable"

export default function Home() {


  const [CookieStands, setCookieStands] = useState([]);

  const CookieStandAdmin = (event) => {
    event.preventDefault();
    const newCookieStand = {
      id: CookieStandAdmin.length + 1,
      location: event.target.location.value,
      minCustomers: parseInt(event.target.minCustomers.value),
      maxCustomers: parseInt(event.target.maxCustomers.value),
      averageCookies: parseInt(event.target.averageCookies.value),
    }

    setCookieStands([...CookieStands, newCookieStand])
    console.log(CookieStands)
    event.target.reset()
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Form</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex flex-col items-center flex-grow py-4 space-y-8">
          <div className="p-4 mb-4 text-center text-white bg-green-500">
            <h2 className="text-2xl font-bold">Add New Cookie Stand</h2>
          </div>
          <CreateForm CookieStandAdmin= {CookieStandAdmin}/>
          <ReportTable
            CookieStands={CookieStands}
          />
        </main>
        <Footer CookieStands={CookieStands}/>
      </div>
    </>
  );
}