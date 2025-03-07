// import React, { useState } from "react";
// import { Line, Bar } from "react-chartjs-2"; // For charts
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   LineElement,
// } from "chart.js"; // Chart.js components

// import { FaWater, FaExclamationCircle, FaSprayCan, FaLeaf, FaVirus } from "react-icons/fa";

// // Registering chart components
// ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, LineElement);

// const CropMonitoring = () => {
//   // Dummy data for crop monitoring
//   const [cropData] = useState({
//     growthStages: [10, 30, 50, 70, 90], // Percentage progression in different growth stages
//     cropHealth: 85, // Crop health percentage
//     waterLevel: "Medium", // Water level (Low, Medium, High)
//     pestInfestation: "Moderate", // Pest infestation (None, Moderate, Severe)
//     pesticideEffect: "Effective", // Pesticide effect (Effective, Ineffective, Pending)
//     leafDamage: "20%", // Leaf damage percentage
//     diseasesDetected: ["Powdery mildew", "Root rot"], // Diseases detected
//     alerts: ["Pest activity detected", "Watering system requires adjustment"],
//   });

//   const [selectedCrop, setSelectedCrop] = useState("Corn");

//   // Chart Data for Crop Growth
//   const growthStagesData = {
//     labels: ["Germination", "Vegetative", "Flowering", "Maturation", "Harvest"],
//     datasets: [
//       {
//         label: "Growth Stages (%)",
//         data: cropData.growthStages,
//         borderColor: "#4caf50",
//         backgroundColor: "rgba(76, 175, 80, 0.2)",
//         fill: true,
//         tension: 0.1,
//       },
//     ],
//   };

//   // Handle crop selection
//   const handleCropChange = (event) => {
//     setSelectedCrop(event.target.value);
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6 text-center">Crop Monitoring</h1>

//       {/* Crop Selection */}
//       <div className="mb-6 flex justify-between items-center">
//         <select
//           value={selectedCrop}
//           onChange={handleCropChange}
//           className="px-4 py-2 rounded-md border border-gray-300"
//         >
//           <option value="Corn">Corn</option>
//           <option value="Wheat">Wheat</option>
//           <option value="Rice">Rice</option>
//         </select>
//         <p className="text-lg text-gray-500">Selected Crop: {selectedCrop}</p>
//       </div>

//       {/* Overview Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         {/* Crop Health */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaLeaf className="mr-2 text-3xl text-green-500" />
//             Crop Health
//           </h2>
//           <p className="text-lg">{`${cropData.cropHealth}%`}</p>
//           <p className="text-sm text-gray-500">Health status of the selected crop</p>
//         </div>

//         {/* Growth Stage */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaLeaf className="mr-2 text-3xl text-green-500" />
//             Growth Stage
//           </h2>
//           <p className="text-lg">{`Current Stage: ${cropData.growthStages[4]}% of Maturation`}</p>
//           <p className="text-sm text-gray-500">Stage progress of the selected crop</p>
//         </div>

//         {/* Water Level */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaWater className="mr-2 text-3xl text-blue-500" />
//             Water Level
//           </h2>
//           <p className="text-lg">{cropData.waterLevel}</p>
//           <p className="text-sm text-gray-500">Current water level status of the crop</p>
//         </div>
//       </div>

//       {/* Pest & Pesticides */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         {/* Pest Infestation */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaExclamationCircle className="mr-2 text-3xl text-yellow-500" />
//             Pest Infestation
//           </h2>
//           <p className="text-lg">{cropData.pestInfestation}</p>
//           <p className="text-sm text-gray-500">Current pest infestation level in the crop</p>
//         </div>

//         {/* Pesticide Effect */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaSprayCan className="mr-2 text-3xl text-red-500" />
//             Pesticide Effect
//           </h2>
//           <p className="text-lg">{cropData.pesticideEffect}</p>
//           <p className="text-sm text-gray-500">Effectiveness of pesticide treatment</p>
//         </div>

//         {/* Leaf Damage */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaLeaf className="mr-2 text-3xl text-green-500" />
//             Leaf Damage
//           </h2>
//           <p className="text-lg">{cropData.leafDamage}</p>
//           <p className="text-sm text-gray-500">Percentage of leaf damage</p>
//         </div>
//       </div>
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
//       {/* Disease Detection */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4 flex items-center">
//           <FaVirus className="mr-2 text-3xl text-red-500" />
//           Diseases Detected
//         </h2>
//         <ul className="text-sm text-gray-500">
//           {cropData.diseasesDetected.map((disease, index) => (
//             <li key={index}>{disease}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Immediate Actions */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Immediate Actions</h2>
//         <ul className="text-sm text-gray-500">
//           <li>Spray pesticide for pest control</li>
//           <li>Increase irrigation levels</li>
//           <li>Apply fungicide for disease control</li>
//           <li>Trim affected leaves to reduce infection spread</li>
//         </ul>
//       </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
//       {/* Crop Growth Stages Chart */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Crop Growth Stages</h2>
//         <Bar data={growthStagesData} options={{ responsive: true }} />
//       </div>

//       {/* Crop Health Chart */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Crop Health Over Time</h2>
//         <Line
//           data={{
//             labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
//             datasets: [
//               {
//                 label: "Crop Health (%)",
//                 data: [80, 85, 90, 88, 85],
//                 borderColor: "#4caf50",
//                 backgroundColor: "rgba(76, 175, 80, 0.2)",
//                 fill: true,
//                 tension: 0.1,
//               },
//             ],
//           }}
//           options={{ responsive: true }}
//         />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default CropMonitoring;


import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2"; // For charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
} from "chart.js"; // Chart.js components

import { FaWater, FaExclamationCircle, FaSprayCan, FaLeaf, FaVirus } from "react-icons/fa";

// Registering chart components
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, LineElement);

const CropMonitoring = () => {
  // Dummy data for crop monitoring, structured by crop
  const cropData = {
    Corn: {
      growthStages: [10, 30, 50, 70, 90],
      cropHealth: 85,
      waterLevel: "Medium",
      pestInfestation: "Moderate",
      pesticideEffect: "Effective",
      leafDamage: "20%",
      diseasesDetected: ["Loose Smut", "Black Rust"],
      alerts: ["Pest activity detected", "Watering system requires adjustment"],
    },
    Wheat: {
      growthStages: [15, 35, 55, 75, 95],
      cropHealth: 90,
      waterLevel: "High",
      pestInfestation: "None",
      pesticideEffect: "Effective",
      leafDamage: "10%",
      diseasesDetected: ["Rust", "Blight"],
      alerts: ["Soil pH imbalance detected"],
    },
    Rice: {
      growthStages: [5, 25, 45, 65, 85],
      cropHealth: 80,
      waterLevel: "High",
      pestInfestation: "Severe",
      pesticideEffect: "Ineffective",
      leafDamage: "30%",
      diseasesDetected: ["Leaf spot", "Bacterial blight"],
      alerts: ["Urgent irrigation needed", "Severe pest damage"],
    },
  };

  const [selectedCrop, setSelectedCrop] = useState("Corn");
  const [currentCropData, setCurrentCropData] = useState(cropData.Corn);

  // Chart Data for Crop Growth
  const growthStagesData = {
    labels: ["Germination", "Vegetative", "Flowering", "Maturation", "Harvest"],
    datasets: [
      {
        label: "Growth Stages (%)",
        data: currentCropData.growthStages,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Handle crop selection and update data dynamically
  const handleCropChange = (event) => {
    const selectedCrop = event.target.value;
    setSelectedCrop(selectedCrop);
    setCurrentCropData(cropData[selectedCrop]); // Update the data based on the selected crop
  };


    const [formData, setFormData] = useState({
      ownerName: "",
      contactInfo: "",
      parcels: [{ parcelId: "", location: "", size: "", soilType: "", crops: "" }],
    });
    const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility
  
    // Handle input changes for owner details
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle input changes for individual parcel fields
    const handleParcelChange = (index, e) => {
      const { name, value } = e.target;
      const updatedParcels = [...formData.parcels];
      updatedParcels[index][name] = value;
      setFormData({ ...formData, parcels: updatedParcels });
    };
  
    // Add a new parcel field dynamically
    const addParcel = () => {
      setFormData({
        ...formData,
        parcels: [
          ...formData.parcels,
          { parcelId: "", location: "", size: "", soilType: "", crops: "" },
        ],
      });
    };
  
    // Remove a parcel field
    const removeParcel = (index) => {
      const updatedParcels = formData.parcels.filter((_, i) => i !== index);
      setFormData({ ...formData, parcels: updatedParcels });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
      alert("Land details submitted successfully!");
    };
  
    // Open modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Close modal
    const closeModal = () => {
      setIsModalOpen(false);
    };
  

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">Crop Monitoring</h1>
      
      {/* Crop Selection */}
      <div className="mb-6 flex justify-between items-center">
        <select
          value={selectedCrop}
          onChange={handleCropChange}
          className="px-4 py-2 rounded-md border border-gray-300"
        >
          <option value="Corn">Corn</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
        </select>
        <div className="flex justify-center mb-6">
        <button
          onClick={openModal}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
        Land Registration Form
        </button>
      </div>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Crop Health */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaLeaf className="mr-2 text-3xl text-green-500" />
            Crop Health
          </h2>
          <p className="text-lg">{`${currentCropData.cropHealth}%`}</p>
          <p className="text-sm text-gray-500">Health status of the selected crop</p>
        </div>

        {/* Growth Stage */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaLeaf className="mr-2 text-3xl text-green-500" />
            Growth Stage
          </h2>
          <p className="text-lg">{`Current Stage: ${currentCropData.growthStages[4]}% of Maturation`}</p>
          <p className="text-sm text-gray-500">Stage progress of the selected crop</p>
        </div>

        {/* Water Level */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaWater className="mr-2 text-3xl text-blue-500" />
            Water Level
          </h2>
          <p className="text-lg">{currentCropData.waterLevel}</p>
          <p className="text-sm text-gray-500">Current water level status of the crop</p>
        </div>
      </div>

      {/* Pest & Pesticides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Pest Infestation */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaExclamationCircle className="mr-2 text-3xl text-yellow-500" />
            Pest Infestation
          </h2>
          <p className="text-lg">{currentCropData.pestInfestation}</p>
          <p className="text-sm text-gray-500">Current pest infestation level in the crop</p>
        </div>

        {/* Pesticide Effect */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaSprayCan className="mr-2 text-3xl text-red-500" />
            Pesticide Effect
          </h2>
          <p className="text-lg">{currentCropData.pesticideEffect}</p>
          <p className="text-sm text-gray-500">Effectiveness of pesticide treatment</p>
        </div>

        {/* Leaf Damage */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaLeaf className="mr-2 text-3xl text-green-500" />
            Leaf Damage
          </h2>
          <p className="text-lg">{currentCropData.leafDamage}</p>
          <p className="text-sm text-gray-500">Percentage of leaf damage</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        {/* Disease Detection */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaVirus className="mr-2 text-3xl text-red-500" />
            Potential Diseases
          </h2>
          <ul className="text-sm text-gray-500">
            {currentCropData.diseasesDetected.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </div>

        {/* Immediate Actions */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Immediate Actions</h2>
          <ul className="text-sm text-gray-500">
            <li>Spray pesticide for pest control</li>
            <li>Increase irrigation levels</li>
            <li>Apply fungicide for disease control</li>
            <li>Trim affected leaves to reduce infection spread</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        {/* Crop Growth Stages Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Crop Growth Stages</h2>
          <Bar data={growthStagesData} options={{ responsive: true }} />
        </div>

        {/* Crop Health Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Crop Health Over Time</h2>
          <Line
            data={{
              labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
              datasets: [
                {
                  label: "Crop Health (%)",
                  data: [80, 85, 90, 88, 85], // This data can also be dynamically updated based on the crop
                  borderColor: "#4caf50",
                  backgroundColor: "rgba(76, 175, 80, 0.2)",
                  fill: true,
                  tension: 0.1,
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <h1 className="text-2xl font-bold mb-6 text-center">Land Registration Form</h1>
            <form onSubmit={handleSubmit}>
              {/* Owner Details */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Owner Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Information</label>
                    <input
                      type="text"
                      name="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Parcel Details */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Land Parcel Details</h2>
                {formData.parcels.map((parcel, index) => (
                  <div key={index} className="border p-4 mb-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Parcel {index + 1}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Parcel ID</label>
                        <input
                          type="text"
                          name="parcelId"
                          value={parcel.parcelId}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={parcel.location}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Size (Acres)</label>
                        <input
                          type="number"
                          name="size"
                          value={parcel.size}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Soil Type</label>
                        <select
                          name="soilType"
                          value={parcel.soilType}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        >
                          <option value="">Select Soil Type</option>
                          <option value="Loamy">Loamy</option>
                          <option value="Sandy">Sandy</option>
                          <option value="Clay">Clay</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Crops Grown</label>
                        <input
                          type="text"
                          name="crops"
                          value={parcel.crops}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeParcel(index)}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Remove Parcel
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addParcel}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Another Parcel
                </button>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* Close Modal Button */}
            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropMonitoring;
