import {
  TextField,
  Grid,
  Container,
  Paper,
  Typography,
  Button,
} from "@mui/material";

export default function ProductForm() {
  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Paper elevation={3} style={{ padding: "2rem", borderRadius: "1rem" }}>
        <Typography variant="h5" align="center" gutterBottom>
          ฟอร์มกรอกข้อมูลสินค้า
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="รหัสสินค้า" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ชื่อสินค้า" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="น้ำหนัก (kg)"
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="วันผลิต"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="วันหมดอายุ"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ราคา (฿)"
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="จำนวน"
              variant="outlined"
              type="number"
            />
          </Grid>
        </Grid>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Button variant="contained" color="primary">
            บันทึกข้อมูล
          </Button>
        </div>
      </Paper>
    </Container>
  );
}
