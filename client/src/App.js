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

class App extends Component {
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

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
              <TableCell> 비고 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers
              ? this.state.customers.map((c) => {
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
                })
              : ""}
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
