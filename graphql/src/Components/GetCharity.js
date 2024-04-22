import React, {useEffect, useState} from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../GraphQLS/Queries'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './GetCharity.css';
import ReactPaginate from 'react-paginate';

function GetCharity() {
    const {error, loading, data} = useQuery(LOAD_USERS)
    const [charity,setCharity] = useState([]);
    useEffect(() => {
      if(data){
        setCharity(data.getAllCharity);
      }
    });
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage;
  
    const displayCharity = charity
      .slice(pagesVisited, pagesVisited + itemsPerPage)
      .map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.charityName}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.address}</td>
        </tr>
      ));
  
    const pageCount = Math.ceil(charity.length / itemsPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Charity Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{displayCharity}</tbody>
        </table>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  };

export default GetCharity
