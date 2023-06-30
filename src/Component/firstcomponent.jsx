import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Thirdcomponent from './thirdcomponent';
import logo1 from "../images/logo_1.png";
import logo2 from "../images/logo_2.png";
import logo3 from "../images/logo_3.png";
import logo4 from "../images/logo_4.png";
import logo5 from "../images/logo_5.png";
import logo6 from "../images/logo_6.png";
import logo7 from "../images/logo_7.png";
import logo8 from "../images/logo_8.png";
import logo9 from "../images/logo_9.png";
import Footer from "./footercomponent";
import Content from "./contentcomponent";



function MainComponent() {
    const images = [
        { path: logo1 },
        { path: logo2 },
        { path: logo3 },
        { path: logo4 },
        { path: logo5 },
        { path: logo6 },
        { path: logo7 },
        { path: logo8 },
    ]
    return (
        <div>
            <div>
                <section className="first_section" style={{
                    height: '100vh',
                    backgroundImage: 'linear-gradient(to bottom, #d658a0, #ea548b, #f65574, #fc5e5a, #fa6c3e, #fd7755, #ff826b, #ff8e7f, #ffa7b8, #fdc6e2, #f6e5f9, #ffffff)'
                }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className='display-1'>Payments infrastructure for the internet</h1>
                                <div className="header_content" style={{ marginTop: '50px' }}>
                                    Millions of businesses of all sizes—from startups to large enterprises—use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.
                                </div>
                                <footer>
                                    <div className="button_display" style={{ marginTop: '50px' }}>
                                        <button className="header_button_1" style={{ marginRight: '10px' }}>
                                            Start now <BiChevronRight />
                                        </button>
                                        <button className="header_button_2">
                                            Contact sales <BiChevronRight />
                                        </button>
                                    </div>
                                </footer>
                            </div>
                            <div className="col-md-6">
                                <img src={logo9} alt='picture' className="img-thumbnail" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div className="container-fluid">
                            <div className="row" style={{ marginTop: '100px', marginBottom: '30px' }}>
                                {images.map((element, index) => {
                                    return (
                                        <>
                                            <div className="col-md-3 col-sm-4"><img src={element.path} alt="img" width={180} /></div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Thirdcomponent />
            <Content />
            <Footer />
        </div>
    )
}

export default MainComponent;