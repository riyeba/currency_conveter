import axios from "axios";
import React, { useEffect, useState } from "react";

function Sender() {
  const [rate, setRate] = useState(null);
  const [amount, setAmount] = useState("");
  const [loading1, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("https://v6.exchangerate-api.com/v6/7004346f580accd83f89df6a/latest/USD")
      .then((res) => {
        setRate(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const conversionRate = rate
    ? rate.conversion_rates.NGN / rate.conversion_rates.SAR
    : 0;
  
  const convertedAmount = amount && !isNaN(amount) 
    ? Math.floor(conversionRate) * Number(amount) 
    : "Enter a valid number";

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 ">
      {loading1? "Please wait..." : <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-[-250px] md:mt-[10px]">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Naira to SAR Exchange Rate
        </h1>

        {loading1 ? (
          <p className="text-center text-gray-600">Fetching exchange rate...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error fetching data</p>
        ) : (
          <p className="text-center text-lg font-medium text-gray-700">
            Today's rate: <span className="font-bold text-emerald-500">{Math.floor(conversionRate)}</span> NGN per SAR
          </p>
        )}

        <div className="mt-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Enter Amount in SAR:
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          className="w-full mt-4 bg-blue-700 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300"
        >
         NSU-KSU-CONVERTER
        </button>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
        {amount === "" ? "" : (
  <p>
    The amount in Naira:{" "}
    <span className="text-dark font-bold">
      {Number(convertedAmount).toLocaleString()}
    </span>
  </p>
)}

        </div>
      </div>}
    </div>
  );
}

export default Sender;
