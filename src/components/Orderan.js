import React,{useState, useEffect, forwardRef} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import Table from 'antd/es/table'; // for js
import 'antd/es/table/style/css'; // for css

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


const Orderan = (props) => {

 
    let data = props.data.data;
    let dataOrderan = [];
    dataOrderan.push(props.orderan.data)
    let yoi = [{id:props.orderan.data,rooms_id:[129,322],g:'a',f:'b',c:'b',e:'b'},{id:'b'}];
    console.log(yoi)
    console.log(dataOrderan[0])

    const dataSource = dataOrderan[0];
    
    const columns = [
      {
        title: 'ID',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: 'Tanggal Order',
        dataIndex: 'date_create',
        key: 'date_create',
      },
      {
        title: 'Nama',
        dataIndex: 'status',
        key: 'is_accepted',
      },
      {
        title: 'Ruang',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tanggal',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Jam',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Kegiatan',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Option',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    
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
            <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    );
}

export default Orderan;