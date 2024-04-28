import React from "react";
import FieldInput from "./fieldInput";

const FieldList = ({ fields, onFieldChange, onRemoveField }) => {
  return (
    <div className="fields-container">
      {fields.map((field, index) => (
        <FieldInput
          key={index}
          field={field}
          onNameChange={(value) => onFieldChange(index, "name", value)}
          onTypeChange={(value) => onFieldChange(index, "type", value)}
          onRemove={() => onRemoveField(index)}
        />
      ))}
    </div>
  );
};

export default FieldList;
