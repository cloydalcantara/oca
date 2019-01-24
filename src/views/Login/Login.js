import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { FormInputs, Button } from "components";
import logo from 'logo.png'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeid: "",
      password: ""
    };
  }

  handleInputChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div style={{height:"100%",width:"100%"}}>
        <div className="asd">
            <Col className="login" md={5} xs={12} xl={5}>
              <Card>
                <img alt="Tanauan City" src={logo} style={{width:"25%",padding:"10px",display: "block", marginLeft: "auto", marginRight: "auto"}} className="center" />
                <CardBody>
                  <FormInputs
                    ncols={["col-md-12 "]}
                    proprieties={[
                      {
                        label: "Employee ID",
                        inputProps: {
                          type: "number",
                          placeholder: "12345"
                        }
                      }
                    ]}
                    value={this.state.employeeid} onChange={this.handeInputChange}
                    name="employeeid"
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Password",
                        inputProps: {
                          type: "password",
                          placeholder: "Don't use your birthday"
                        }
                      }
                    ]}
                  />
                  <Button onClick={ function(employeeid){ console.log(employeeid)} } className="btn-primary" style={{position:"relative",width:"100%",float: "center"}}>Sign in</Button>
                </CardBody>
              </Card>
            </Col>
        </div>
      </div>
    );
  }
}

export default User;
