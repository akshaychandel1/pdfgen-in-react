// src/components/PDFExport.js

import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PDFExport = () => {
  // Dummy data for 21 columns and multiple rows
  const columns = Array.from({ length: 21 }, (_, i) => `Column ${i + 1}`);
  
  const data = [
    Array.from({ length: 21 }, (_, i) => `Row 1 - Data ${i + 1}`),
    Array.from({ length: 21 }, (_, i) => `Row 2 - Data ${i + 1}`),
    Array.from({ length: 21 }, (_, i) => `Row 3 - Data ${i + 1}`),
    Array.from({ length: 21 }, (_, i) => `Row 4 - Data ${i + 1}`),
    Array.from({ length: 21 }, (_, i) => `Row 5 - Data ${i + 1}`)
  ];

  const exportPDF = () => {
    const doc = new jsPDF('landscape', 'pt', 'a4'); // Landscape A4 for more space

    // Title
    doc.text('Table with 21 Columns', 40, 20);

    // Generate Table
    doc.autoTable({
      head: [columns],    // Column headers
      body: data,        // Data rows
      startY: 40,        // Start position on Y-axis
      styles: {
        fontSize: 6,       // Reduce font size to fit content
        cellPadding: 2,    // Reduce cell padding for compact table
        overflow: 'linebreak', // Handle long text in cells
      },
      margin: { top: 30, left: 10, right: 10 }, // Adjust margins to fit content
      tableWidth: 'auto',  // Automatically adjust table width
      theme: 'grid',       // Grid style for the table
    });

    // Save PDF
    doc.save('21-column-table.pdf');
  };

  return (
    <div>
      <h2>Export Dummy Data with 21 Columns to PDF</h2>
      <button onClick={exportPDF}>Download PDF</button>
    </div>
  );
};

export default PDFExport;
