import React, { useState } from "react";
import FieldList from "./fieldList";

const headingStyle = {
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  color: "#333",
};

const descriptionStyle = {
  fontFamily: "Arial, sans-serif",
  color: "#555",
};

const inputStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "16px", // Adjust the font size as needed
};

const MockDataGenerator = () => {
  const [fields, setFields] = useState([]);
  const [totalSize, setTotalSize] = useState(1);
  const [generatedData, setGeneratedData] = useState(null);

  const handleAddField = () => {
    setFields([...fields, { name: "", type: "" }]);
  };
  const handleCopy = () => {
    if (generatedData) {
      navigator.clipboard.writeText(JSON.stringify(generatedData, null, 2));
      alert("Generated data copied to clipboard!");
    }
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handleTotalSizeChange = (value) => {
    setTotalSize(parseInt(value));
  };

  const generateMockData = () => {
    const data = Array.from({ length: totalSize }, () => {
      const obj = {};
      fields.forEach((field) => {
        if (field.type === "string") {
          obj[field.name] = "MockString";
        } else if (field.type === "number") {
          obj[field.name] = Math.random() * 100;
        } else if (field.type === "boolean") {
          obj[field.name] = Math.random() < 0.5;
        } else if (field.type === "date") {
          obj[field.name] = new Date().toISOString().slice(0, 10); // Today's date
        } else if (field.type === "image") {
          // corrected "Image" to "image"
          obj[field.name] = `https://picsum.photos/200/300?random=${Math.floor(
            Math.random() * 1000,
          )}`;
        }
      });
      return obj;
    });
    setGeneratedData(data);
  };

  return (
    <div className="mock-data-generator">
      <div class="container">
        <h1 style={headingStyle}>Mock Data Generator</h1>
        <h2 style={headingStyle}>
          Generate mock JSON data for frontend development
        </h2>
        <p style={descriptionStyle}>
          The Mock Data Generator is a tool designed for frontend developers who
          need to work with data during the development process. It allows you
          to generate mock JSON data with customizable fields and array sizes,
          enabling you to simulate API responses and populate frontend
          components without relying on actual backend APIs.
        </p>
      </div>

      <FieldList
        fields={fields}
        onFieldChange={handleFieldChange}
        onRemoveField={handleRemoveField}
      />
      <label className="fields-container">
        Total Size:
        <input
          type="number"
          value={totalSize}
          onChange={(e) => handleTotalSizeChange(e.target.value)}
          style={inputStyle}
        />
      </label>
      <button onClick={handleAddField}>Add Field</button>
      <button className="generate-button" onClick={generateMockData}>
        Generate Mock Data
      </button>
      {generatedData && (
        <div className="generated-data">
          <h3>Generated Data:</h3>
          <pre>{JSON.stringify(generatedData, null, 2)}</pre>
          <button onClick={handleCopy}>Copy to Clipboard</button>
        </div>
      )}
    </div>
  );
};

export default MockDataGenerator;
