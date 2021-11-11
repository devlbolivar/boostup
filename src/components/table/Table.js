import React from "react";
import { useSelector } from "react-redux";
import { Header, Table } from "semantic-ui-react";
import { statesNames } from "../../utils";

const TablePadded = () => {
  const { dataStates } = useSelector((state) => state.data);

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine textAlign="center">
            State
          </Table.HeaderCell>
          <Table.HeaderCell singleLine textAlign="center">
            Number of confirmed cases
          </Table.HeaderCell>
          <Table.HeaderCell singleLine textAlign="center">
            Number of deaths
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {dataStates.map((state) => {
          return (
            <Table.Row key={state.state}>
              <Table.Cell textAlign="center">
                {statesNames[state.state]}
              </Table.Cell>
              <Table.Cell textAlign="center">{state.serie?.cases}</Table.Cell>
              <Table.Cell textAlign="center">{state.serie?.deaths}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default TablePadded;
