import './App.css';
import InputHeader from './Components/InputHeader';
import OutputHeader from './Components/OutputHeader';
import DenseTable from './Components/Table';
import MainHeader from './Components/MainHeader';
import EditableTable from './Components/Editable/EditableFunction';
import { useState } from 'react';

function createData(
  name,
  calories
) {
  return { name, calories };
}

const inputRows = [
  createData('R1TMax', "53 kv"),
  createData('R2TMax', "53 kv"),
  createData('R3TMax', "53 kv"),
  createData('R4TMax', "53 kv"),
  createData('R1TMin', "53 kv"),
  createData('R2TMin', "53 kv"),
  createData('R3TMin', "53 kv"),
  createData('R4TMin', "53 kv"),
];

const outputRows = [
  createData('output1', "53 kv"),
  createData('output2', "53 kv"),
];
const data = [
  {
    employeeId: '01',
    name: 'John Doe',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
  },
  {
    employeeId: '02',
    name: 'Sara',
    email: 'sara@email.com',
    position: 'HR Executive',
  },
  {
    employeeId: '03',
    name: 'Mike',
    email: 'mike@email.com',
    position: 'Backend Developer',
  },
]

function App() {
  const [table,setTable] = useState([]);
  const addTable = () => {
    const addData = [...table,<EditableTable />]
      setTable(addData)
  }
  return (
    <>
      {/* <MainHeader />
      <div style={{display : "flex"}} >
        <div style = {{width : "100%"}} >
          <InputHeader />
        <DenseTable rows = {inputRows}  />
        </div>
        <div style = {{width : "100%"}}>
          <OutputHeader />
        <DenseTable rows = {outputRows} />
        </div>
      </div> */}
      <DenseTable rows = {data} />
     <EditableTable />
     <button onClick = {addTable} >+</button>
     {table}
    </>
  );
}

export default App;
