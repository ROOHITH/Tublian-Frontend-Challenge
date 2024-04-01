// TableViewModal.js

import { useState } from 'react';
import dashboardData from '../Model/DashboardData';

const useTableViewModal = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const topLocations = dashboardData.audienceDemography.topLocations || [];
  const countries = topLocations.map(location => location.country);
  const visitors = topLocations.map(location => location.visitors);
  const changes = topLocations.map(location => location.change);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - countries.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    countries,
    visitors,
    changes,
    emptyRows
  };
};

export default useTableViewModal;
