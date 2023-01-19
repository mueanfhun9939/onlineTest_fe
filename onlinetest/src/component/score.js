import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(category, name, score, statusEN, status) {
  return { category, name, score, statusEN, status };
}

const rows = [
  createData(
    "ชุดข้อสอบ สายปราบปราม",
    "ชุด1 ปี64",
    "90/150",
    "pass",
    "ผ่านเกณฑ์ทดสอบ"
  ),
  createData(
    "ชุดข้อสอบ สายปราบปราม",
    "ชุด2 ปี64",
    "60/150",
    "fail",
    "ไม่ผ่านเกณฑ์ทดสอบ"
  ),
  createData(
    "ชุดข้อสอบ สายปราบปราม",
    "ชุด3 ปี64",
    "101/150",
    "pass",
    "ผ่านเกณฑ์ทดสอบ"
  ),
  createData(
    "ชุดข้อสอบ สายปราบปราม",
    "ชุด4 ปี64",
    "103/150",
    "pass",
    "ผ่านเกณฑ์ทดสอบ"
  ),
  createData(
    "ชุดข้อสอบ สายปราบปราม",
    "ชุด5 ปี64",
    "78/150",
    "fail",
    "ไม่ผ่านเกณฑ์ทดสอบ"
  ),
];

export default function Score() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 575,
        },
      }}
    >
      <Paper elevation={3}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>สายงาน</TableCell>
                <TableCell align="right">ชุดข้อสอบ</TableCell>
                <TableCell align="right">คะแนน</TableCell>
                <TableCell align="right">สถานะ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.category}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor:
                          row.statusEN === "pass" ? "#228B22" : "#DC381F",
                        borderRadius: "21px",
                        height: "30px",
                      }}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
