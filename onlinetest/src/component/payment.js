import * as React from "react";
import { useTheme } from "@mui/material/styles";
import styles from "../styles/Home.module.scss";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const category = [
  "ชุดข้อสอบ สายปราบปราม",
  "ชุดข้อสอบ อำนวยการ",
  "ชุดข้อสอบ กพ.",
];

const names = [
  "ชุด1 ปี64 (79)",
  "ชุด2 ปี64 (79)",
  "ชุด3 ปี64 (79)",
  "ชุด4 ปี64 (79)",
  "ชุด5 ปี64 (79)",
  "ชุด6 ปี64 (79)",
  "ชุด7 ปี64 (79)",
  "ชุด8 ปี64 (79)",
  "ชุด9 ปี64 (79)",
  "ชุด10 ปี64 (79)",
  "รวมชุดข้อสอบปี64 (599)",
  "ชุด1 ปี65 (79)",
  "ชุด2 ปี65 (79)",
  "ชุด3 ปี65 (79)",
  "ชุด4 ปี65 (79)",
  "ชุด5 ปี65 (79)",
  "ชุด6 ปี65 (79)",
  "ชุด7 ปี65 (79)",
  "ชุด8 ปี65 (79)",
  "ชุด9 ปี65 (79)",
  "ชุด10 ปี65 (79)",
  "รวมชุดข้อสอบปี65 (599)",
  "รวมชุดข้อสอบทุกปี (999)",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Payment() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "550px",
        },
      }}
    >
      <Paper elevation={3} className={styles.paperPayment}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box sx={{ padding: "50px" }}>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">สายงาน</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {category.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">
                    ชุดข้อสอบ
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  sx={{
                    width: 300,
                    margin: "15px",
                  }}
                  id="outlined-basic"
                  label="ชื่อ-สกุล"
                  variant="outlined"
                  defaultValue="ชื่อ-สกุล"
                />
              </div>
              <div>
                <TextField
                  sx={{
                    width: 300,
                  }}
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue="599 บาท"
                />
              </div>
              <Typography variant="caption" display="block" gutterBottom sx={{ color: 'red', marginTop: '10px'}}>
                **การชำระเงินจะถูกยืนยันภายใน 2 - 3 ชั่วโมง
                โปรดรอแอดมินดำเนินการ คุณสามารถเช็คสถานะการชำระเงินได้
                ในช่องตรวจสอบการชำระเงิน**
              </Typography>
              <Button variant="contained">ยืนยันการชำระเงิน</Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="img"
              sx={{
                padding: "50px",
                height: 450,
                width: 375,
                maxHeight: { xs: 450, md: 450 },
                maxWidth: { xs: 375, md: 375 },
              }}
              alt="The house from the offer."
              src="/static/payment.png"
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
