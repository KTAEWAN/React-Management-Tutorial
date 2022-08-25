import "./App.css";
import React, { Component } from "react";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Table } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: "10px",
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any1",
    name: "김태완",
    birthday: "930604",
    gender: "남자",
    job: "취준생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any2",
    name: "하승권",
    birthday: "999999",
    gender: "남자",
    job: "취준생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any3",
    name: "이호준",
    birthday: "888888",
    gender: "남자",
    job: "얼짱",
  },
];
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> 번호 </TableCell>
              <TableCell> 이미지 </TableCell>
              <TableCell> 이름 </TableCell>
              <TableCell> 생년월일 </TableCell>
              <TableCell> 성별 </TableCell>
              <TableCell> 직업 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
        {/* <Customer
          id={customer[0].id}
          image={customer[0].image}
          name={customer[0].name}
          birthday={customer[0].birthday}
          gender={customer[0].gender}
          job={customer[0].job}
        />
        <Customer
          id={customer[1].id}
          image={customer[1].image}
          name={customer[1].name}
          birthday={customer[1].birthday}
          gender={customer[1].gender}
          job={customer[1].job}
        />
        <Customer
          id={customer[2].id}
          image={customer[2].image}
          name={customer[2].name}
          birthday={customer[2].birthday}
          gender={customer[2].gender}
          job={customer[2].job}
        /> */}
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
