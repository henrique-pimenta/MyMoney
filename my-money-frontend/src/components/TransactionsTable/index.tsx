import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { GetWeekdayFromDate } from "../GetWeekdayFromDate";
import { TransactionsTableProps } from "../../interfaces/transactionTable"


export const TransactionsTable:React.FC<TransactionsTableProps> = ({tableData}) => {
  return (
    <Table
      w="83vw%"
      mx="1rem"
      bg="gray.50"
      boxShadow="0px 0px 8px 0px rgba(0,0,0,0.4)"
      color="dollar.900"
    >
      <Thead>
        <Tr>
          <Th>Data</Th>
          <Th>Day</Th>
          <Th>Description</Th>
          <Th isNumeric>Value (USD)</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tableData.results.map((data) => {
          return (
            <Tr key={data.id}>
              <Td>{data.date}</Td>
              <Td>{GetWeekdayFromDate(data.date)}</Td>
              <Td>{data.description}</Td>
              <Td isNumeric>{data.value}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
