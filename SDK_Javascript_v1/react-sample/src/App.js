import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import DelivereeApi from "deliveree-sdk";
const MainApp = (props) => {
  const [resultGetQuote, setResultGetQuote] = useState(null);
  const [resultCancelBooking, setResultCancelBooking] = useState(null);
  const [resultCreateBooking, setResultCreateBooking] = useState(null);
  const [resultGetDetails, setResultGetDetails] = useState(null);
  const [resultGetVehicleTypes, setResultGetVehicleTypes] = useState(null);
  const [resultGetBookingList, setResultGetBookingList] = useState(null);

  const [bookingID, setBookingID] = useState(0);

  const defaultClient = DelivereeApi.ApiClient.instance;
  const ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
  const api = new DelivereeApi.DelivereeApi();
  ApiKeyAuth.apiKey = "YOUR API KEY";
  const tDate = new Date().toISOString();

  const cancelBooking = () => {
    let opts = {
      acceptLanguage: "en", // {String}
    };
    let callback = function (error, data, response) {
      console.log(response);
      if (error) {
        console.error(error);
        setResultCancelBooking(JSON.stringify(response.body, null, 4));
      } else {
        console.log("API called successfully.");
        setResultCancelBooking(JSON.stringify(response.body, null, 4));
      }
    };
    api.cancelBooking(bookingID, opts, callback);
  };

  const createBookingDeliveree = () => {
    let delivery = {
      vehicle_type_id: 62,
      note: "Testing - API Default Fragile item that needs good care Welcome.",
      time_type: "schedule",
      pickup_time: "2016-05-13T09:51:16+07:00",
      job_order_number: "66666",
      locations: [
        {
          address:
            tDate +
            "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
          latitude: -6.2608232,
          longitude: 106.7884168,
          recipient_name: "Duke",
          recipient_phone: "+84903398399",
          note: "Second floor, room 609",
        },
        {
          address:
            tDate +
            "Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1, Bangka, Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
          latitude: -6.2608232,
          longitude: 106.7884168,
          recipient_name: "Nam",
          recipient_phone: "+84903856534",
          note: "First floor, right room.",
          need_cod: true,
          cod_note: "You need to get money from Nam",
          cod_invoice_fees: 5000,
          need_pod: true,
          pod_note: "You need to ...",
        },
      ],
    };

    var callback = function (error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log("API called successfully.");
        setBookingID(data.id);
        setResultCreateBooking(JSON.stringify(data, null, 4));
      }
    };
    api.deliveriesPost(delivery, {}, callback);
  };

  const getQuotes = () => {
    var opts = {
      acceptLanguage: "en", // {String}
    };
    let data = {
      time_type: "now",
      vehicle_type_id: 21,
      locations: [
        {
          address:
            "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
          latitude: -6.2608232,
          longitude: 106.7884168,
        },
      ],
    };

    var callback = function (error, response) {
      console.log(response);
      if (error) {
        console.error(error);
      } else {
        console.log("API called successfully.");

        setResultGetQuote(JSON.stringify(response, null, 4));
      }
    };
    api.deliveriesGetQuotePost(data, opts, callback);
  };

  const getDetails = () => {
    let opts = {
      acceptLanguage: "en", // {String}
    };
    let callback = function (error, data, response) {
      console.log(response);
      if (error) {
        console.error(error);
        setResultGetDetails(JSON.stringify(data, null, 4));
      } else {
        console.log("API called successfully.");
        setResultGetDetails(JSON.stringify(data, null, 4));
      }
    };
    api.deliveriesGet(bookingID, opts, callback);
  };

  const getBookingList = () => {
    var opts = {
      acceptLanguage: "en", // {String}
    };

    var params = {
      page: 1, // {Number}
      per_page: 10, // {Number}
    };

    var callback = function (error, data) {
      console.log(data);
      if (error) {
        console.error(error);
      } else {
        console.log("API called successfully.");

        setResultGetBookingList(JSON.stringify(data, null, 4));
      }
    };
    api.deliveriesGetList(params, opts, callback);
  };

  const getVehicleTypes = () => {
    var opts = {
      acceptLanguage: "en", // {String}
    };

    var callback = function (error, response) {
      console.log(response);
      if (error) {
        console.error(error);
      } else {
        console.log("API called successfully.");

        setResultGetVehicleTypes(JSON.stringify(response, null, 4));
      }
    };
    api.vehicleTypesGet(opts, callback);
  };

  return (
    <div className="main-app">
      <h2> Welcome to Deliveree SDK Sample </h2>

      <div className="api-wrapper">
        <div className="item">
          <button onClick={getQuotes}>Get Quotes</button>
          {resultGetQuote && (
            <pre>Get Quote result status: {resultGetQuote} </pre>
          )}
        </div>
        <div className="item">
          <button onClick={createBookingDeliveree}>Create Booking</button>
          {resultCreateBooking && (
            <pre>Create booking result status: {resultCreateBooking} </pre>
          )}
        </div>
        <div className="item">
          <button className="btn btn-primary" onClick={cancelBooking}>
            Cancel Booking {bookingID}
          </button>
          {resultCancelBooking && (
            <pre> Cancel booking result status: {resultCancelBooking} </pre>
          )}
        </div>
        <div className="item">
          <button onClick={getDetails}>Get Booking Details</button>
          {resultGetDetails && (
            <pre>Get Booking Details result status: {resultGetDetails} </pre>
          )}
        </div>
        <div className="item">
          <button onClick={getBookingList}>Get Booking List</button>
          {resultGetBookingList && (
            <pre>Get Booking List result status: {resultGetBookingList} </pre>
          )}
        </div>
        <div className="item">
          <button onClick={getVehicleTypes}>Get Vehicle Types</button>
          {resultGetVehicleTypes && (
            <pre>Get Vehicle Types result status: {resultGetVehicleTypes} </pre>
          )}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          width="400px"
          src="https://webapp.sandbox.deliveree.com/assets/Logo_Deliveree_White-d827ebead28b15f9a3ef88d08086fa15.svg"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MainApp></MainApp>
      </header>
    </div>
  );
}

export default App;
