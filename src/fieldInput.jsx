import React from "react";

const FieldInput = ({ field, onNameChange, onTypeChange, onRemove }) => {
  return (
    <div className="field">
      <label>
        Field Name:
        <input
          type="text"
          value={field.name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </label>
      <label>
        Field Type:
        <select
          value={field.type}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
          <option value="date">Date</option>
          <option value="image">Image</option>
        </select>
      </label>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default FieldInput;
