import React from 'react';
import { Select } from 'antd';

// Define props for the checklist component
interface ChecklistProps {
  options: string[]; // Array of checklist items
  defaultValue?: string[]; // Default selected items
  onChange?: (value: string[]) => void; // Callback function for when selection changes
}

const Checklist: React.FC<ChecklistProps> = ({ options, defaultValue = [], onChange }) => {
  const handleChange = (selectedItems: string[]) => {
    if (onChange) {
      onChange(selectedItems);
    }
  };

  return (
    <Select mode="multiple" defaultValue={defaultValue} onChange={handleChange} style={{ width: '100%' }}>
      {options.map((option) => (
        <Select.Option key={option} value={option}>
          {option}
        </Select.Option>
      ))}
    </Select>
  );
};

export default Checklist;
