import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAdd: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the form Data");
    console.log(formData);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          User Information
        </h2>

        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Deepanshu"
            id="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Mani"
            id="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>India</option>
            <option>Canada</option>
            <option>United States</option>
            <option>Mexico</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="streetAdd"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>
          <input
            type="text"
            name="streetAdd"
            placeholder="Enter Street Address"
            id="streetAdd"
            value={formData.streetAdd}
            onChange={changeHandler}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="Meerut"
            id="city"
            value={formData.city}
            onChange={changeHandler}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            name="state"
            placeholder="Uttar Pradesh"
            id="state"
            value={formData.state}
            onChange={changeHandler}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-gray-700"
          >
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            placeholder="000000"
            id="postalCode"
            value={formData.postalCode}
            onChange={changeHandler}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <fieldset className="mb-4">
          <legend className="text-lg font-medium text-gray-700 mb-2">
            By Email
          </legend>

          <div className="flex items-start mb-4">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                Comments
              </label>
              <p className="text-gray-500">
                Get notified when someone posts a comment on a posting.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <input
              id="candidate"
              name="candidate"
              type="checkbox"
              checked={formData.candidate}
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <div className="ml-3 text-sm">
              <label htmlFor="candidate" className="font-medium text-gray-700">
                Candidate
              </label>
              <p className="text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <div className="ml-3 text-sm">
              <label htmlFor="offers" className="font-medium text-gray-700">
                Offers
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-lg font-medium text-gray-700 mb-2">
            Push Notifications
          </legend>
          <p className="text-sm text-gray-500 mb-4">
            These are delivered via SMS to your mobile phone.
          </p>

          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="pushNotification"
              id="pushEverything"
              value="Everything"
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="pushEverything"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Everything
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="pushNotification"
              id="pushEmail"
              value="Same as Email"
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="pushEmail"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Same as Email
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="pushNotification"
              id="pushNothing"
              value="No Push Notifications"
              onChange={changeHandler}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="pushNothing"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              No Push Notifications
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
