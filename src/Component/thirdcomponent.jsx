import React from "react";
import { BiChevronRight } from "react-icons/bi";
import logo from '../images/pic_1.png';


function Thirdcomponent() {
    return (
        <div>
            <div className="section_container">
                <div className="section_layoutcontainer">
                    <div>
                        <div className="rowlayout">
                            <div className="columnlayout">
                                <section className="section_layout">
                                    <header className="copy__header">
                                        <h2 className="copy_caption">
                                            Designed for developers
                                        </h2>
                                        <h1 className="copy_title">
                                            Ship more quickly with powerful and easy-to-use APIs
                                        </h1>
                                    </header>
                                    <div className="copy__body">
                                        Save engineering time with unified payments functionality. We obsess over the maze of gateways, payments rails, and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.
                                    </div>
                                    <footer className="copy__footer">
                                        <div className="copy__ctaContainer">
                                            <button className=" CtaButton variant--Button">
                                                Read the docs <BiChevronRight />
                                            </button>
                                        </div>
                                    </footer>
                                </section>
                                <img src={logo} width={450} height={450} className="img-rounded"/>
                            </div>
                            <div>
                                <div className="columnlayout">
                                    <section className="section_layout">
                                    <header className="copy__header">
                                        <h2 className="copy_caption">
                                            Designed for developers
                                        </h2>
                                        <h1 className="copy_title">
                                            Ship more quickly with powerful and easy-to-use APIs
                                        </h1>
                                    </header>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thirdcomponent;