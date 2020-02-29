import React,{useState, useEffect, forwardRef} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const Admingedung = (props) => {

    let data = props.data
    let dataOrderan = [];
    let [uwu,setuwu] = useState([])
    dataOrderan.push(props.orderan.data)
    let yoi = [
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582766983859-img-class400px.jpg",
          "_id": "5e571b8764c2290024ca8a85",
          "gedung": "B",
          "lantai": 1,
          "room_name": "B1.1",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582767018418-img-class400px.jpg",
          "_id": "5e571baa64c2290024ca8a86",
          "gedung": "B",
          "lantai": 1,
          "room_name": "B1.2",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582768251818-LBYe7Iwx_400x400.jpg",
          "_id": "5e57207c64c2290024ca8a87",
          "gedung": "A",
          "lantai": 1,
          "room_name": "A1.1",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582768256617-LBYe7Iwx_400x400.jpg",
          "_id": "5e57208064c2290024ca8a88",
          "gedung": "A",
          "lantai": 1,
          "room_name": "A1.2",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582768267566-LBYe7Iwx_400x400.jpg",
          "_id": "5e57208b64c2290024ca8a89",
          "gedung": "C",
          "lantai": 1,
          "room_name": "C1.1",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582768326887-LBYe7Iwx_400x400.jpg",
          "_id": "5e5720c664c2290024ca8a8a",
          "gedung": "C",
          "lantai": 2,
          "room_name": "C2.1",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582769185179-LBYe7Iwx_400x400.jpg",
          "_id": "5e57242164c2290024ca8a8b",
          "gedung": "C",
          "lantai": 2,
          "room_name": "C2.2",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582769191537-LBYe7Iwx_400x400.jpg",
          "_id": "5e57242764c2290024ca8a8c",
          "gedung": "C",
          "lantai": 1,
          "room_name": "C1.2",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582769195750-LBYe7Iwx_400x400.jpg",
          "_id": "5e57242b64c2290024ca8a8d",
          "gedung": "C",
          "lantai": 1,
          "room_name": "C1.3",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582802944336-LBYe7Iwx_400x400.jpg",
          "_id": "5e57a8009ef98c0024724602",
          "gedung": "C",
          "lantai": 1,
          "room_name": "C1.5",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582802947027-LBYe7Iwx_400x400.jpg",
          "_id": "5e57a8039ef98c0024724603",
          "gedung": "C",
          "lantai": 1,
          "room_name": "C1.4",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582802950350-LBYe7Iwx_400x400.jpg",
          "_id": "5e57a8069ef98c0024724604",
          "gedung": "C",
          "lantai": 1,
          "room_name": "C1.3",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582802953054-LBYe7Iwx_400x400.jpg",
          "_id": "5e57a8099ef98c0024724605",
          "gedung": "C",
          "lantai": 1,
          "room_name": "C1.3",
          "__v": 0
        },
        {
          "photo": "https://api-peminjaman.herokuapp.com/r/1582806337962-woman-standing-in-front-of-man-s-painting-2121666.jpg",
          "_id": "5e57b5459ef98c0024724606",
          "gedung": "C",
          "lantai": 1,
          "room_name": "C1.3",
          "__v": 0
        }
      ];
    console.log(yoi)
    console.log(data)
    let gedunga = Array.from(data);

    console.log(gedunga)
    const[ayo,setAyo] = useState({
        columns: [
            { title: 'Gedung', field: 'gedung' },
            { title: 'Ruang', field: 'room_name' },
            { title: 'Status', field: 'name'},
          ],
          data: yoi,
    })
    
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };
    return(
        <div>
            <div className="tab-ruang">
            <MaterialTable
      title="Daftar Ruangan"
      columns={ayo.columns}
      icons={tableIcons}
      data={ayo.data}
      editable={{
          onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setAyo(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setAyo(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setAyo(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      options={{
        actionsColumnIndex: -1,

        
      }}
    />
            </div>
        </div>
    );
}

export default Admingedung;