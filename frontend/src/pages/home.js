/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";
import "../css/home.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default value is 10
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const fetchUsers = () => {
    http.get(`/users?page=${currentPage}&search=${searchTerm}&rowsPerPage=${rowsPerPage}`)
      .then((res) => {
        setUsers(res.data.data);
        setTotalPages(res.data.last_page);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, searchTerm, rowsPerPage]);

  const deleteUser = (id) => {
    http.delete(`/users/${id}`).then((res) => {
      fetchUsers();
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div className="container">
      <marquee className="breadcrumb mb-4 w-25" id="marquee">
        Home page Listing
        <svg width="24" height="24" className="ms-5" xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd" clipRule="evenodd">
          <path
            d="M9 23h-5.991c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h2v-1h-2c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h2v-1h-2c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h18.008c.552 0 1 .448 1 1s-.448 1-1 1h-2.001v1h2.001c.552 0 1 .448 1 1s-.448 1-1 1h-2.001v1h2.001c.552 0 1 .448 1 1s-.448 1-1 1h-6.003v-6h-6.014v6zm13.172-9h-20.302l10.124-8.971 10.178 8.971zm-10.169-13s9.046 7.911 11.672 10.244c.413.367.45.999.083 1.412-.367.413-.996.445-1.412.083-2.421-2.105-10.343-9.063-10.343-9.063s-7.899 6.893-10.327 9.051c-.413.367-1.046.329-1.413-.083-.367-.413-.329-1.045.083-1.412 2.626-2.333 11.657-10.232 11.657-10.232zm.01 7c1.104 0 2 .896 2 2s-.896 2-2 2c-1.105 0-2.001-.896-2.001-2s.896-2 2.001-2zm7.003-5h2.984v5.128l-2.984-2.59v-2.538z" />
        </svg>
      </marquee>
      <div className="col-lg-12">
        <div className="row">
          <div className="search-bar col-lg-8">
            <input
              className="searchbar"
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn" type="submit">
              <span>Search</span>
            </button>
          </div>
          <div className="col-lg-1">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={{ pathname: "/demo/" }}
              className="btn btn-info m-2"
            >
              Demo
            </Button>
          </div>
          <div className="col-lg-1">
            <Button
              variant="contained"
              color="success"
              component={Link}
              to={{ pathname: "/create/" }}
              className="btn btn-success m-2"
            >
              Create
            </Button>
          </div>
          <div className="col-lg-1">
            <Button
              variant="contained"
              color="warning"
              component={Link}
              to={{ pathname: "/form/" }}
              className="btn btn-warning m-2"
            >
              Form
            </Button>
          </div>
        </div>
      </div>
      <div className="containers">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <Stack sx={{ width: '100%', padding: '10px' }} spacing={2}>

              {showSuccessAlert && (
                <Alert variant="outlined" severity="success">This is a success alert — Successfully Deleted!</Alert>
              )}
            </Stack>

          </div>
          <div className="col-lg-12">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">#</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <StyledTableRow key={user.id}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">{user.name}</StyledTableCell>
                      <StyledTableCell align="center">{user.email}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Button
                          variant="contained"
                          color="error"
                          type="button"
                          onClick={() => deleteUser(user.id)}
                          sx={{ backgroundColor: "#ff0000" }}
                          className="btn btn-danger m-2"
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          color="info"
                          component={Link}
                          to={{ pathname: "/show/" + user.id }}
                          className="btn btn-info m-2"
                        >
                          Show
                        </Button>
                        <Button
                          variant="contained"
                          color="warning"
                          component={Link}
                          to={{ pathname: "/edit/" + user.id }}
                          className="btn btn-warning m-2"
                        >
                          Edit
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="col-lg-12 mb-4">
              <div className="row">
                <div className="col-lg-2 mt-4 dropdown">
                  <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Rows</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={rowsPerPage}
                      label="Rows"
                      onChange={handleRowsPerPageChange}
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                      <MenuItem value={200}>200</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="pagination col-lg-10 mb-2">
                  {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)}>
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path id="preves" d="M3.24,7.51c-0.146,0.142-0.146,0.381,0,0.523l5.199,5.193c0.234,0.238,0.633,0.064,0.633-0.262v-2.634c0.105-0.007,0.212-0.011,0.321-0.011c2.373,0,4.302,1.91,4.302,4.258c0,0.957-0.33,1.809-1.008,2.602c-0.259,0.307,0.084,0.762,0.451,0.572c2.336-1.195,3.73-3.408,3.73-5.924c0-3.741-3.103-6.783-6.916-6.783c-0.307,0-0.615,0.028-0.881,0.063V2.575c0-0.327-0.398-0.5-0.633-0.261L3.24,7.51 M4.027,7.771l4.301-4.3v2.073c0,0.232,0.21,0.409,0.441,0.366c0.298-0.056,0.746-0.123,1.184-0.123c3.402,0,6.172,2.709,6.172,6.041c0,1.695-0.718,3.24-1.979,4.352c0.193-0.51,0.293-1.045,0.293-1.602c0-2.76-2.266-5-5.046-5c-0.256,0-0.528,0.018-0.747,0.05C8.465,9.653,8.328,9.81,8.328,9.995v2.074L4.027,7.771z"></path>
                      </svg>
                    </button>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={currentPage === page ? "active" : ""}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}
                  {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path id="preves" d="M3.24,7.51c-0.146,0.142-0.146,0.381,0,0.523l5.199,5.193c0.234,0.238,0.633,0.064,0.633-0.262v-2.634c0.105-0.007,0.212-0.011,0.321-0.011c2.373,0,4.302,1.91,4.302,4.258c0,0.957-0.33,1.809-1.008,2.602c-0.259,0.307,0.084,0.762,0.451,0.572c2.336-1.195,3.73-3.408,3.73-5.924c0-3.741-3.103-6.783-6.916-6.783c-0.307,0-0.615,0.028-0.881,0.063V2.575c0-0.327-0.398-0.5-0.633-0.261L3.24,7.51 M4.027,7.771l4.301-4.3v2.073c0,0.232,0.21,0.409,0.441,0.366c0.298-0.056,0.746-0.123,1.184-0.123c3.402,0,6.172,2.709,6.172,6.041c0,1.695-0.718,3.24-1.979,4.352c0.193-0.51,0.293-1.045,0.293-1.602c0-2.76-2.266-5-5.046-5c-0.256,0-0.528,0.018-0.747,0.05C8.465,9.653,8.328,9.81,8.328,9.995v2.074L4.027,7.771z"></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
