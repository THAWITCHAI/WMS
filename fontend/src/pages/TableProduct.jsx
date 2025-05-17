import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function TableProduct() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ลำดับ</TableCell>
            <TableCell >รหัสสินค้า</TableCell>
            <TableCell >ชื่อสินค้า</TableCell>
            <TableCell >น้ำหนัก(kg)</TableCell>
            <TableCell >วันผลิต</TableCell>
            <TableCell >วันหมดอายุ</TableCell>
            <TableCell >ราคา(฿)</TableCell>
            <TableCell >จำนวน</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>1</TableCell>
            <TableCell >6321548795</TableCell>
            <TableCell >ยาพารา</TableCell>
            <TableCell >0.05(kg)</TableCell>
            <TableCell >12/12/68</TableCell>
            <TableCell >05/09/70</TableCell>
            <TableCell >10</TableCell>
            <TableCell >700</TableCell>
            <TableCell style={{display:'flex', gap:'1rem'}}>
              <Button variant="outlined">แก้ไข</Button>
              <Button style={{border:'red 1px solid', color:'red'}} variant="outlined">ลบ</Button>
            </TableCell>

          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
