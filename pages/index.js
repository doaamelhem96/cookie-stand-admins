import Head from '../components/Head';
import { useAuth } from "@/contexts/auth"
import Login from './login';
import { useState, useEffect } from "react"
import CookiStandAdmin from "@/components/CookiStandAdmin";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function MyCookieStandAdmin() {
  const [json, setJson] = useState([]);
  const { user, token } = useAuth();
  
  // Function to handle adding a new cookie stand
  async function addCookieStand(cookieStandData) {
    try {
      const url = `${baseUrl}/api/v1/cookie_stands/`;
      const options = {
        method: "POST",
        body: JSON.stringify(cookieStandData),
        headers: {
          "Authorization": `Bearer ${token.access}`,
          "Content-Type": "application/json"
        }
      };
      
      const response = await fetch(url, options);
      if (response.status === 201) {
        // Successfully added, update the state
        setJson([...json, cookieStandData]);
      } else {
        console.log("Failed to add a new cookie stand.");
      }
    } catch (error) {
      console.error("Error adding a new cookie stand:", error);
    }
  }

  // Function to get the list of cookie stands
  async function fetchCookieStands() {
    try {
      const url = `${baseUrl}/api/v1/cookie_stands/`;
      const options = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token.access}`
        }
      };
      
      const response = await fetch(url, options);
      if (response.status === 200) {
        const data = await response.json();
        setJson(data); // Update the state with fetched data
      } else {
        console.log("Failed to fetch cookie stands.");
      }
    } catch (error) {
      console.error("Error fetching cookie stands:", error);
    }
  }

  // Function to delete a cookie stand
  async function deleteCookieStand(id) {
    try {
      const url = `${baseUrl}/api/v1/cookie_stands/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token.access}`
        }
      };
      
      const response = await fetch(url, options);
      if (response.status === 204) {
        // Successfully deleted, fetch the updated list
        fetchCookieStands();
      } else {
        console.log("Failed to delete the cookie stand.");
      }
    } catch (error) {
      console.error("Error deleting the cookie stand:", error);
    }
  }

  // Fetch the list of cookie stands on component mount
  useEffect(() => {
    if (token) {
      fetchCookieStands();
    }
  }, [token]);

  return (
    <>
      {user ? (
        <>
          <Head data={"Home"} />
          <CookieStandAdmin 
            addCookieStand={addCookieStand} 
            data={json} 
            deleteCookieStand={deleteCookieStand} 
          />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
