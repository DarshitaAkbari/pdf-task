import axios from "axios";
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

const TableData = () => {
  const [apiData, setApiData] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("Response: ", res.data);
    if (res?.data) {
      setApiData(res?.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const exportPdf = async () => {

    const doc = new jsPDF({ orientation: "landscape" });

    // Prepare table data
    const tableData = apiData.map((val) => [val.id, val.title, val.body]);

    doc.autoTable({
      head: [["#", "Title", "Body"]], // Table header
      body: tableData, // Table data
      startY: 20, // Start the table from y-position 20 (to leave space for the header)
      styles: {
        font: "helvetica", // Font type
        fontSize: 10, // Font size
      },
      headStyles: {
        fillColor: "red",
        textColor: "black", // Header background color
      },
    });

    doc.save("data.pdf");
  };

  const exportExcel = async () => {
    const worksheet = XLSX.utils.json_to_sheet(apiData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };
  return (
    <>
      <div className="">
        <button onClick={exportPdf}>Export</button>
        <button onClick={exportExcel}>Export sheet</button>
        <div
          class="container-fluid"
          style={{ marginTop: "10px" }}
          id="my-table"
        >
          <div class="table-row header">
            <div class="column index">#</div>
            <div class="wrapper attributes">
              <div class="wrapper title-comment-module-reporter">
                <div class="wrapper title-comment">
                  <div class="column title">Title</div>
                  <div class="column comment">Body</div>
                </div>
              </div>
            </div>
          </div>
          {apiData.map((val) => {
            return (
              <div class="table-row">
                <div class="column index">{val.id}</div>
                <div class="wrapper attributes">
                  <div class="wrapper title-comment-module-reporter">
                    <div class="wrapper title-comment">
                      <div class="column title">{val.title}</div>
                      <div class="column comment">{val.body}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TableData;
