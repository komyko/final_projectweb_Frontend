import React, { FC } from "react";

interface Props {
  onChange: any;
  value: string;
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  className?: string;
  placeHolder?: string;
}

const Textfield: FC<Props> = (props) => {
  const getProps = props;
  return (
    <>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">
            {getProps.label}
          </label>
          <input
            onChange={getProps.onChange}
            id={getProps.id}
            name={getProps.name}
            type={getProps.type}
            required={getProps.required}
            value={getProps.value}
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder={
              getProps.placeHolder ? getProps.placeHolder : getProps.name
            }
          />
        </div>
      </div>
    </>
  );
};

export default Textfield;
