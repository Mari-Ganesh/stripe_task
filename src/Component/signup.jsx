import React from "react";
import "../Component/signup.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Signup() {
  return (
    <div className="container">
      <Row className="header">
        <Col>stripe</Col>
      </Row>
      <div className="form-content">
        <Row className="signin">
          <Col>Sign in to your account</Col>
        </Row>
        <form className="form-label">
          <Row>
            <Col>
              <label>Email</label>
            </Col>
          </Row>
          <Row className="empty">
            <Col>
              <input type="email" name="email" className="inputBox" />{" "}
            </Col>
          </Row>
          <Row className="flex form-label">
            <Col>Password</Col>
            <Col className="text-color">Forget your password</Col>
          </Row>
          <Row>
            <Col className="empty">
              <input type="password" name="password" className="inputBox" />
            </Col>
          </Row>
          <Row className="checkbox-align">
            <Col>
              {" "}
              <input type="checkbox" />
              Stay signed for the week <div className="empty"></div>
            </Col>
          </Row>
          <Row className="buttonAlign">
            <Col>
              <input
                className="inputBox button"
                type="submit"
                value="Continue"
              />
            </Col>
          </Row>
        </form>
        <Row>
          <Col className="end">Use single sign-on (SSO) instead </Col>
        </Row>
      </div>
      <Row className="content">
        <Col>
          Don't have an account? <span className="text-color">Sign up</span>{" "}
        </Col>
        <Row className="buttonAlign">
          <Col>Security tip</Col>
        </Row>
        <Row>
          <Col className="footer-content">
            <span className="text-color">
              Add multiple authentication factors
            </span>{" "}
            in case you lose one
          </Col>
          <Col className="footer-content">
            For example,adding both the security key and your phone means you
            can still sign-in if you lose your phone
          </Col>
          <Col className="footer">
            Is this tip helpful?{" "}
            <span>
              <button>Yes👍</button>
            </span>
            <span>
              <button>No👎</button>
            </span>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Signup;
