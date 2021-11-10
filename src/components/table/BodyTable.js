import React from "react";
import { useSelector } from "react-redux";

function BodyTable() {
  const { dataStates } = useSelector((state) => state.data);
  console.log(dataStates);
  let info;
  if (dataStates && dataStates[0].serie) {
    info = dataStates.map((state) => (
      <tr key={state.state}>
        <td>{state.state}</td>
        <td>{state.serie.cases}</td>
        <td>{state.serie.deaths}</td>
      </tr>
    ));
  } else {
    info = "Loading...";
  }

  return <>{info}</>;
}

export default BodyTable;
