import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function GroupQuiz() {
  const theme = useTheme();
  return (
    <>
      <Typography component="div" variant="h4" >
        สายปราบปราม ข้อสอบมีทั้งหมด 150 ข้อ
      </Typography>
      <Button sx={{ margin: '15px'}} variant="outlined">ข้อสอบปี 64</Button>
      <Button sx={{ margin: '15px'}} variant="outlined">ข้อสอบปี 65</Button>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    ข้อสอบนายสิบตำรวจ ปราบปราม
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    ปี 64 ชุดที่ {index + 1}
                  </Typography>
                </CardContent>
                <Divider />
                <Box sx={{ display: "flex", alignItems: "left", pl: 1, pb: 1 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Status: ยังไม่ทำแบบทดสอบ
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button variant="contained" sx={{ marginTop: "10px" }}>
                  ทำข้อสอบ
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
