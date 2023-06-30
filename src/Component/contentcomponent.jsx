import "../Component/signup.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function ContentFile() {
    return (
        <div className="content">
            <Row>
                <Col className="header">Ready to get started?</Col>
            </Row>
            <div className="body-content">
                <Row>
                    <Col sm={5}>
                        <div className="body-info">
                            <div>
                                {" "}
                                Explore <span className="text-color">Stripe Payments</span>,
                                or create an account
                            </div>{" "}
                            <div>instantly and start accepting payments. You can</div>
                            <div>also contact us to design a custom package for</div> your
                            business.
                        </div>
                        <button className="button-style">Start Now </button>
                        <span className="text-color contact">Contact sales</span>
                    </Col>
                    <Col sm={4}>
                        <div className="header-content">Always know what you pay</div>

                        <div className="body-details">
                            <div>Integrated per-transaction</div>
                            pricing with no hidden fees.
                        </div>
                        <div className="text-color text-align">Pricing details </div>
                    </Col>
                    <Col sm={3}>
                        <div className="header-content">Start your integration</div>
                        <div className="body-details">
                            <div>Get up and running with Stripe</div> in as little as 10
                            minutes.
                        </div>
                        <div className="text-color text-align">API reference</div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ContentFile;


