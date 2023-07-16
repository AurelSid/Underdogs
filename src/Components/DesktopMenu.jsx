import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  getDocs,
  where,
} from "firebase/firestore";
function DesktopMenu() {
  const firebaseConfig = {
    apiKey: "AIzaSyBwhFwd-52k-ve3FU87f8XG4iGQ_IVleFU",
    authDomain: "underdogs-816e0.firebaseapp.com",
    databaseURL: "https://underdogs-816e0-default-rtdb.firebaseio.com",
    projectId: "underdogs-816e0",
    storageBucket: "underdogs-816e0.appspot.com",
    messagingSenderId: "1310315571",
    appId: "1:1310315571:web:54c22597c3fb33d51dff46",
    measurementId: "G-KXV84PH686",
  };

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  console.log(searchValue);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const navigate = useNavigate();

  const [data, setData] = useState({ address: "" });
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  async function getBalanceOfConnectedAccount() {
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    const balance = await provider.getBalance(address);
    const formattedBalance = ethers.utils.formatEther(balance);
    const truncatedBalance = parseFloat(formattedBalance).toFixed(2);
    setBalance(truncatedBalance);
  }

  useEffect(() => {
    if (connected) {
      getBalanceOfConnectedAccount();
    }
  }, [connected]);

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
      setData(address);
      console.log(address, provider);
      navigate("/dashboard");

      const userId = uuidv4();
      setUserId(userId);

      setConnected(true);
    } else {
      alert("Please install MetaMask!");
    }
  };
  const followers = "";
  const questsCompleted = "";
  const famePoints = "";
  async function myAsyncFunction() {
    const usersRef = collection(db, "Users");
    const querySnapshot = await getDocs(
      query(usersRef, where("address", "==", address))
    );

    if (querySnapshot.empty) {
      const userDocRef = doc(usersRef, address);
      await setDoc(userDocRef, {
        address: address,
        userid: userId,
        followers: followers,
        questsCompleted: questsCompleted,
        famePoints: famePoints,
      });
    } else {
      console.log("User exists");
    }
  }

  myAsyncFunction();

  return (
    <>
      <div className="  w-full flex top-6 h-16  px-5 bg-black">
        <div className="  h-full flex">
          <button
            className="text-white font-bold m-auto cursor-pointer z-40  "
            onClick={() => navigate("/home")}
          >
            UNDERDOGS
          </button>
        </div>

        {connected ? (
          <div className="   m-auto flex text-white font-bold text-sm z-50">
            <div className="mx-2 ">
              <div className="flex">
                <div className="flex justify-center items-center ">
                  <BiSearchAlt2 className="w-6 h-6 mr-3" />
                </div>
                <input
                  type="text"
                  className="h-6 p-3 rounded-sm "
                  placeholder="Search"
                  value={searchValue}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="   m-auto flex text-white font-bold text-sm z-50">
            <div className="mx-2 ">
              <h1 className=" cursor-pointer">WHITEPAPER</h1>
            </div>
            <div className="mx-2 ">
              <h1 className=" cursor-pointer">|</h1>
            </div>
            <div className="mx-2 ">
              <button
                className=" cursor-pointer"
                onClick={() => navigate("/Leaderboard")}
              >
                LEADERBOARD
              </button>
            </div>
            <div className="mx-2 ">
              <h1 className=" cursor-pointer">|</h1>
            </div>
            <div className="mx-2 ">
              <h1 className=" cursor-pointer">ROADMAP</h1>
            </div>
            <div className="mx-2 ">
              <h1 className=" cursor-pointer">|</h1>
            </div>
            <div className="mx-2 ">
              <h1 className=" cursor-pointer">JOIN US</h1>
            </div>
          </div>
        )}
        <div className="h-full flex justify-center items-center">
          {connected ? (
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white text-sm font-semibold m-3">
                <h1>Balance {balance} UND$ </h1>
              </div>
              <button
                className="bg-amber-400  h-8 w-8 justify-center items-center flex rounded-full p-3  "
                onClick={() => navigate("/Dashboard")}
              >
                <FaUser className="invert h-10 w-10  " />
              </button>
            </div>
          ) : (
            <button
              className="m-auto h-8 rounded-xl px-5 z-50 bg-amber-400 text-black"
              onClick={connectWalletHandler}
            >
              connect
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default DesktopMenu;
