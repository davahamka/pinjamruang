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


const Orderanall = (props) => {

 
    let data = props.data.data;
    let dataOrderan = [];
    dataOrderan.push(props.orderan.data)
    let yoi = [{id:props.orderan.data,rooms_id:[129,322],g:'a',f:'b',c:'b',e:'b'},{id:'b'}];
    console.log(yoi)
    console.log(dataOrderan[0])


    const[ayo,setAyo] = useState({
        columns: [
            { title: 'ID', field: '_id' },
            { title: 'Tanggal Order', field: 'rooms_id' },
            { title: 'Nama', field: 'name'},
            { title: 'Ruang', field: 'ruang'},
            { title: 'Tanggal Awal', field: ''},
            { title: 'Tanggal Selesai', field: 'end_time'},
            { title : 'Dokumen', field : 'document'},
          ],
          data: dataOrderan[0],
    })

    const columns = [
      { title: 'ID', field: '_id' },
            { title: 'Tanggal Order', field: 'rooms_id' },
            { title: 'Nama', field: 'name'},
            { title: 'Ruang', field: 'ruang'},
            { title: 'Tanggal Awal', field: ''},
            { title: 'Tanggal Selesai', field: 'end_time'},
            { title : 'Dokumen', field : 'document'},
    ]
    const dataSource = dataOrderan[0]
    
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
      title="Semua"
      columns={ayo.columns}
      icons={tableIcons}
      data={yoi}
      editable={{
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

export default Orderanall;