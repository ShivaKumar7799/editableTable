import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material"
import {useState, useRef} from "react"

export default function DenseTable(props) {
  const [employeeData, setEmployeeData] = useState(props.rows);
  const firstRef =  useRef(null);
  const [toggle, setToggle] = useState(true)
const [name, setName] = useState('test')
React.useEffect(() => {
  alert("use Effect is caled")
}, [])
  const onChangeInput = (e, employeeId) => {
    // console.log("onchange",employeeId);
    // console.log("event",e)
    const { name, value } = e.target

    const editData = employeeData.map((item) =>
      {
        // console.log("edit data",item)
        console.log(item.employeeId,employeeId,name,value)
        return item.employeeId === employeeId && name ? { ...item, [name]: value } : item
      }
    )
    // setTimeout(() => setEmployeeData(editData), 5000)
    setEmployeeData(editData);
    console.log("table function rendered")
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Input</TableCell>
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {employeeData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <input
                  className='input'
                  name="name"
                  value={row.name}
                  type="text"
                  onChange={(e) => onChangeInput(e,row.employeeId)}
                  placeholder="Type Name"
                />
                {/* {row.name} */}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
