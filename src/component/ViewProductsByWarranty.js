import React, {useState}   from 'react';
import {useEffect} from 'react';
import "../css/table.css"

import axios from 'axios';

export default function PersonList(props) {
    const [PersonList, setPersonList] = useState([])

    useEffect(() => {
      refreshPersonList();
    }, [])
  
    function refreshPersonList() {
      const ProjectAPI = axios.get('http://localhost/web2223(1)/ProductionMove/public/api/admin/view_products_by_warranty')
        .then(res => setPersonList(res.data))
        .catch(err => console.log(err))
    }

  
    return (
        
        <div col-md-9 col-sm-8 col-xs-12>
            <h3>VIEW PRODUCT BY WARRANTY</h3>
    <table id= 'product-table' >
    <thead >
        <tr>
            <th scope='col'>Warranty code</th>
            <th scope='col'>Warranty name</th>
            <th scope='col'>The Number Of Products</th>
            
    
       
       
        </tr>
    </thead>
    
    <tbody >
    {
      PersonList.map((e, i) =>
        <tr key={i}>
        <td>{e.warranty_center_code}</td>
          <td>{e.warranty_center_name}</td>
          <td>{e.num_of_products}</td>
        
          
        </tr>  
      )
    }
    </tbody> 
    </table>
    </div>
    )
  }
