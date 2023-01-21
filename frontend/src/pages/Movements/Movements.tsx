import React, { useEffect, useState } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Autocomplete,
  Checkbox,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

  const YEARS = [{ title: '2020' }, { title: '2021' }, { title: '2022' }];
  const MONTHS = [
    { title: 'January' },
    { title: 'February' },
    { title: 'March' },
    { title: 'April' },
    { title: 'May' },
    { title: 'June' },
    { title: 'July' },
    { title: 'August' },
    { title: 'Setember' },
    { title: 'October' },
    { title: 'November' },
    { title: 'Dezember' },
  ];

  return movements ? (
    <>
      <div>
        <Box style={{ paddingTop: 20, paddingBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Autocomplete
              multiple
              size="small"
              sx={{ width: 300 }}
              options={YEARS}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="year" placeholder="year" />
              )}
            />
            <Autocomplete
              multiple
              size="small"
              sx={{ width: 300 }}
              options={MONTHS}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="months" placeholder="months" />
              )}
            />
            <Autocomplete
              multiple
              size="small"
              sx={{ width: 300 }}
              options={YEARS}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="category"
                  placeholder="category"
                />
              )}
            />
          </div>
        </Box>
      </div>

      <Box>
        <Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple movements table" size="small">
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
        </Paper>
      </Box>
    </>
  ) : (
    <Box
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Movements;
