import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);

    toast.success("Text Cleared !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleCopyText = () => {
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();

    toast.success("Text Copied to Clipboard !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSentenceText = () => {
    let newText =
      text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    setText(newText);

    toast.success("Converted to Sentence Case !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleLowerText = () => {
    let newText = text.toLowerCase();
    setText(newText);

    toast.success("Converted to Lower Case !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleUpperText = () => {
    let newText = text.toUpperCase();
    setText(newText);

    toast.success("Converted to Upper Case !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleCapitalized = () => {
    let newText = text.toLowerCase().split(" ");
    for (var i = 0; i < newText.length; i += 1) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));

    toast.success("Text Capitalized !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleAlternate = () => {
    var newText = text.toUpperCase().split("");
    for (var i = 0; i < newText.length; i += 2) {
      newText[i] = newText[i].toLowerCase();
    }
    setText(newText.join(""));

    toast.success("Converted to aLtErNaTiNg Case !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleAlternate2 = () => {
    var newText = text.toLowerCase().split("");
    for (var i = 0; i < newText.length; i += 2) {
      newText[i] = newText[i].toUpperCase();
    }
    setText(newText.join("")); //AlTeRnAtInG
    toast.success("Converted to AlTeRnAtInG Case !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleReverse = () => {
    var newText = text;
    newText = text.split("").reverse().join("");
    setText(newText);

    toast.success("Text Reversed !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const downloadText = () => {
    var usertext = document.getElementById("myText").value; //fetching data from textarea with the help of ID
    var data = [];
    data.push(usertext); //pushing usertext in list named data
    var data_string = JSON.stringify(data);
    var file = new Blob([data_string], { type: "text/plain" });
    var anchor = document.createElement("a"); //You can use any word at the place of anchor
    anchor.href = URL.createObjectURL(file);
    anchor.download = "yourtext.txt"; //Defining a default name for the text file
    anchor.click();

    toast.success("Text File Downloaded !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-white md:overflow-x-hidden">
        <div className="flex flex-row justify-center  items-center bg-gray-900 text-white md:space-x-40 space-x-12 py-2 top-0">
          <span className="text-xl md:text-2xl font-bold">
            BetterConvert
          </span>
      
        </div>

        <div className="flex flex-col justify-center items-center space-y-3 py-5">
          <h1 className=" text-5xl md:text-5xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#c31432] to-[#240b36] text-center py-2 ">
            CONVERT TEXT
          </h1>
          <div className="flex flex-row justify-center items-center">
            <RiAlarmWarningFill className="text-2xl md:text-3xl lg:text-4xl  text-red-600" />
            <p className="md:text-2xl text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#c31432] to-[#240b36] text-center py-2">
              Write Some Text To Enable Buttons
            </p>
          </div>
          <div className=" text-3xl md:text-3xl lg:text-4xl flex flex-row justify-center items-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#c31432] to-[#240b36] space-x-3 ">
            <span>Enter Your Text Here</span>
            <FaArrowCircleDown className="text-2xl md:text-2xl lg:text-3xl  text-red-600" />{" "}
          </div>

          <textarea
            name="userwala"
            id="myText"
            rows={5}
            value={text}
            onChange={handleOnChange}
            className=" rounded-2xl w-[70%] h-20 md:h-auto md:w-[67%] md:indent-5 indent-5  border-2 border-gray-500 focus:border-amber-500 bg-transparent "
          ></textarea>
        </div>

        <div className="btngroup grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-4 mx-16 md:mx-32 lg:mx-52">
          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleClearText}
            className="disabled:opacity-50 lg:col-span-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  shadow-lg shadow-red-500/50   font-medium md:font-bold rounded-lg text-sm md:text-lg p-2 "
          >
            Clear Text
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleCopyText}
            className="disabled:opacity-50 lg:col-span-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50   font-medium md:font-bold rounded-lg text-sm md:text-lg p-2  "
          >
            Copy Text
          </button>

          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleSentenceText}
            className=" disabled:opacity-50 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium md:font-bold  rounded-lg text-sm md:text-lg  p-2"
          >
            Sentence case
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleLowerText}
            className="disabled:opacity-50 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg p-2"
          >
            lower case
          </button>

          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleUpperText}
            className="disabled:opacity-50 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg  p-2"
          >
            UPPER CASE
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleCapitalized}
            className="disabled:opacity-50 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg  p-2"
          >
            Capitalized Case
          </button>

          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleAlternate}
            className="disabled:opacity-50 text-[#274046] bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg  p-2"
          >
            aLtErNaTiNg
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleAlternate2}
            className="disabled:opacity-50 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg  p-2"
          >
            AlTeRnAtInG
          </button>

          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleReverse}
            className="disabled:opacity-50 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg  p-2"
          >
            Reverse Text
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            onClick={downloadText}
            id="save-button"
            className="disabled:opacity-50 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg p-2 "
          >
            Download Text
          </button>
        </div>

        <h1 className="md:text-4xl text-3xl lg:5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#c31432] to-[#240b36] text-center py-4">
          Your Text Summary
        </h1>
        <div className="summary grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-10 mx-16 md:mx-32 lg:mx-52">
          <button
            type="button"
            disabled
            className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg p-2 "
          >
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words
          </button>
          <button
            type="button"
            disabled
            className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg p-2"
          >
            {text.length} Characters
          </button>
          <button
            type="button"
            disabled
            className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium md:font-bold rounded-lg text-sm md:text-lg  p-2"
          >
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes Read
          </button>
        </div>

        <div className="footer flex flex-col md:flex-row justify-center items-center  bg-black py-5 mt-5">
          <span className="text-sm md:text-sm text-white ">
            All Rights Reserved. ©2023{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
