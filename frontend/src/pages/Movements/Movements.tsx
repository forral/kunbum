import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

interface IMovement {
  _id: string;
  date: string;
  description: string;
  value: number;
}

function Movements() {
  const [movements, setMovements] = useState<IMovement[]>();

  useEffect(() => {
    function getMovements() {
      fetch('http://localhost:4000/api/movements/')
        .then((response) => response.json())
        .then((data) => {
          setMovements(data);
          console.log(data);
        });
    }

    getMovements();
  }, []);

  return movements ? (
    <TableContainer component={Paper}>
      <Table aria-label="simple movements table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movements.map((movement) => (
            <TableRow key={movement._id}>
              <TableCell component="th" scope="row">
                {movement.date}
              </TableCell>
              <TableCell align="right">{movement.description}</TableCell>
              <TableCell align="right">{movement.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <p>loading...</p>
  );
}

export default Movements;
