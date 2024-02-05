import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";

import { collection, getDocs } from "firebase/firestore";

import { db } from "./config/firebase";
import Contacts from "./components/Contacts";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [areContacts, setAreContacts] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (contactsList.length != 0) {
          setContacts(contactsList);
          setAreContacts(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className=" bg-gray w-[393px] h-screen flex items-center flex-col">
        <Navbar />

        <div className="flex relative items-center gap-1">
          <CiSearch className="font-bold absolute text-white text-3xl ml-2" />
          <input
            placeholder="Search Contact"
            className="w-[295px] h-[40px] rounded px-8 pl-9 bg-transparent border text-white border-white"
          />
          <FaCirclePlus className=" text-white w-[52px] h-[52px] cursor-pointer" />
        </div>

        <div>
          {!areContacts ? (
            <div className=" h-[70vh] flex gap-2 text-white text-2xl items-center h-full justify-center">
              <img src="./Hands_Contact.png" alt="noContacts" />
              <h1>No Contact Found</h1>
            </div>
          ) : (
            <Contacts contact={contacts} />
          )}
        </div>
      </div>
      <Modal />
    </>
  );
};

export default App;
