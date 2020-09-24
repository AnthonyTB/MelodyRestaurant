import React, { useState, FunctionComponent, Dispatch } from "react";

const useToggleList = (defaultState: boolean, options: string[]) => {
  const [state, setState] = useState<boolean>(defaultState);

  console.log(state);
  const ToggleList: FunctionComponent = () => (
    <ul
      className={
        state
          ? "open animate__animated animate__fadeIn"
          : "closed animate__animated animate__fadeOut"
      }
    >
      {options.map((option: string, idx: number) => (
        <li key={idx}>
          <span>{option}</span>
        </li>
      ))}
    </ul>
  );

  return [state, ToggleList, setState] as [
    boolean,
    FunctionComponent,
    Dispatch<boolean>
  ];
};

export default useToggleList;
