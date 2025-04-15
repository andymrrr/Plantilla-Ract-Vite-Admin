import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'; // importamos el ícono

const SelectGroupOne: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setHasSelected(true);
  };

  return (
    <div className="mb-4.5">
      <label className="mb-2.5 block text-black dark:text-white">
        Subject
      </label>

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className={`w-full appearance-none rounded border py-3 px-5 outline-none transition
            border-stroke dark:border-form-strokedark
            bg-transparent dark:bg-form-input
            focus:border-primary dark:focus:border-primary
            ${hasSelected ? 'text-black dark:text-white' : ''}`}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            Select your subject
          </option>
          <option value="USA" className="text-body dark:text-bodydark">USA</option>
          <option value="UK" className="text-body dark:text-bodydark">UK</option>
          <option value="Canada" className="text-body dark:text-bodydark">Canada</option>
        </select>

        
        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 pointer-events-none">
          <FiChevronDown className="text-black dark:text-white" size={20} />
        </span>
      </div>
    </div>
  );
};

export default SelectGroupOne;
