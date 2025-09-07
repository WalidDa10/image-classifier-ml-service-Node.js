import React, { useState } from "react";
import axios from "axios";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:8080/api/classify", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPredictions(response.data.predictions);
    } catch (err) {
      console.error(err);
      alert("Error uploading image!");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          🖼️ AI Image Classifier
        </h2>

        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
            file:rounded-full file:border-0 
            file:text-sm file:font-semibold 
            file:bg-blue-50 file:text-blue-700 
            hover:file:bg-blue-100 mb-4"
        />

        {preview && (
        <div className="w-48 h-48 mx-auto mb-4" > 
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-contain rounded-lg shadow-md"
          />
          </div>
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          🚀 Classify Image
        </button>

        {predictions.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Predictions:
            </h3>
            <ul className="space-y-2">
              {predictions.map((p, idx) => (
                <li
                  key={idx}
                  className="flex justify-between bg-gray-100 px-3 py-2 rounded-lg shadow-sm"
                >
                  <span className="font-medium">{p.label}</span>
                  <span className="text-gray-600">{p.confidence}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadForm;
























// import React, { useState } from "react";
// import axios from "axios";

// function UploadForm() {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [predictions, setPredictions] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     setPreview(URL.createObjectURL(selectedFile));
//   };

//   const handleUpload = async () => {
//     if (!file) return alert("Please select a file first!");

//     const formData = new FormData();
    
    
//     formData.append("image", file);

//     try {
//       const response = await axios.post("http://localhost:8080/api/classify", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setPredictions(response.data.predictions);
//     } catch (err) {
//       console.error(err);
//       alert("Error uploading image!");
//     }
//   };

//   return (
//     <div className="upload-form">
//       <h2>AI Image Classifier</h2>

//       <input type="file" onChange={handleFileChange} accept="image/*" />
//       {preview && <img src={preview} alt="preview" width="200" style={{ margin: "10px 0" }} />}

//       <button onClick={handleUpload}>Classify Image</button>

//       {predictions.length > 0 && (
//         <div>
//           <h3>Predictions:</h3>
//           <ul>
//             {predictions.map((p, idx) => (
//               <li key={idx}>
//                 {p.label} – {p.confidence}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UploadForm;
