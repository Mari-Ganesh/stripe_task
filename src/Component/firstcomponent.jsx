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
                <section className="first_section">
                    <header className="home_page_header">
                        <h1>Payments infrastructure for the internet</h1>
                    </header>
                    <div className="header_content">
                        Millions of businesses of all sizes—from startups to large enterprises—use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.
                    </div>
                    <footer>
                        <div className="button_display">
                            <button className="header_button_1">
                                Start now <BiChevronRight />
                            </button>
                            <button className="header_button_2">
                                Contact sales <BiChevronRight />
                            </button>
                        </div>
                    </footer>
                </section>
                <section>
                    <div className="icons">
                        {images.map((element, index) => {
                            return (
                                <>
                                    {console.log('test', element)}
                                    <img src={element.path} alt="img" width={180} />

                                </>
                            );
                        })}
                    </div>
                </section>
            </div>
            <Thirdcomponent />
        </div>
    )
}

export default MainComponent;