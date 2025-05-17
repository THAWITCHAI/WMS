

import {
    TextField,
    Grid,
    Container,
    Paper,
    Typography,
    Button,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    TableBody,
} from "@mui/material";

export default function Receiveout() {

    return (
        <Container maxWidth="md" style={{ marginTop: "2rem" }}>
            <Paper elevation={3} style={{ padding: "2rem", borderRadius: "1rem" }}>
                <Typography variant="h5" align="center" gutterBottom>
                    แบบฟอร์มเบิกสินค้าออกจากคลัง
                </Typography>

                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="วันที่เบิก"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="ชื่อผู้เบิก" variant="outlined" />
                    </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom>
                    รายการสินค้า
                </Typography>


                <Grid container spacing={2} alignItems="center" >
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="รหัสสินค้า"
                            variant="outlined"


                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="ชื่อสินค้า"
                            variant="outlined"


                        />
                    </Grid>
                    <Grid item xs={8} sm={3}>
                        <TextField
                            fullWidth
                            label="จำนวน"
                            type="number"
                            variant="outlined"

                        />
                    </Grid>
                    <Grid item xs={4} sm={1}>
                        <IconButton
                            color="error"
                        >
                        </IconButton>
                    </Grid>
                </Grid>
                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <Button variant="contained" color="primary" size="large">
                        ยืนยันสินค้า
                    </Button>
                </div>
                <br />
                <hr />
                <br />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ลำดับ</TableCell>
                                <TableCell >รหัสสินค้า</TableCell>
                                <TableCell >ชื่อสินค้า</TableCell>
                                <TableCell >น้ำหนัก(kg)</TableCell>
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
                                <TableCell >10</TableCell>
                                <TableCell >700</TableCell>
                                <TableCell>
                                    <Button style={{ border: 'red 1px solid', color: 'red' }} variant="outlined">ลบ</Button>
                                </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <Button variant="contained" color="primary" size="large">
                        ยืนยันการเบิกสินค้า
                    </Button>
                </div>
            </Paper>
        </Container>
    );
}
