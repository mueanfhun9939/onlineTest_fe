import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Countdown from "react-countdown";
import styles from "../styles/Home.module.scss";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className={styles.textCountdown}>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

export default function Test() {
  const [choice, setChoice] = React.useState(null);
  const handleChoice = (index) => {
    console.log(index);
    setChoice(index);
  };

  return (
    <>
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{  mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={8} sx={{ textAlign: "center" }}>
              <Paper elevation={0} sx={{ height: "725px", paddingTop: "20px" }}>
                <Countdown
                  date={Date.now() + 3 * 3600 * 1000}
                  renderer={renderer}
                />
                <Typography variant="subtitle1" gutterBottom>
                  ข้อที่ 2 / 150 ข้อสอบนายสิบตำรวจ ปราบปราม ปี 64 ส่วน
                  ความสามารถทั่วไป
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={styles.textTitleQuiz}
                >
                  ระยะทาง 1,100 เมตร ปักเสาห่างกันต้นละ 50 เมตร
                  ระหว่างเสานี้ปลูกต้นไม้ห่างจากเสา และห่างกันต้นละ 5 เมตร
                  จะต้องปลูกต้นไม้ทั้งหมดกี่ต้น
                </Typography>
                <Box sx={{ flexGrow: 1, margin: "5% 20%" }}>
                  <Grid
                    container
                    spacing={{ xs: 1, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {Array.from(Array(4)).map((_, index) => (
                      <Grid item xs={1} sm={2} md={3} key={index}>
                        <Fab
                          sx={{
                            width: "40px",
                            height: "40px",
                            margin: "0 10px 0 0",
                          }}
                          color="primary"
                          aria-label="add"
                        >
                          {index + 1}
                        </Fab>
                        <span className={styles.testChoice}>207</span>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4} sx={{ padding: "0 10px"}}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  วิชาคณิตศาสตร์
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={{ xs: 1, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {Array.from(Array(25)).map((_, index) => (
                      <Grid item xs={1} sm={2} md={1} key={index}>
                        <Fab
                          sx={{
                            width: "30px",
                            height: "30px",
                            '&:focus':{
                                outline: 'none',
                                backgroundColor: 'red'
                              }
                          }}
                          color="primary"
                          aria-label="add"
                          onClick={() => handleChoice(index+1)}
                        >
                          {index + 1}
                        </Fab>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
