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
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
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
                                        </div>
                                        <div className="col-6">
                                            <img src={logo} width={450} height={450} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="ColumnLayout_content">
                                    <section className="section_layout">
                                        <header className="copy__header">
                                            <h1 className="copy_title_content">
                                                Use Stripe with your stack
                                            </h1>
                                        </header>
                                        <div className="copy__body_content ">
                                            We offer client and server libraries in everything from React and PHP to .NET and iOS.
                                        </div>
                                        <footer className="copy__footer">
                                            <div className="copy__ctaContainer">
                                                <div className="CtaButton Variant_Content_Button">
                                                    See libraries <BiChevronRight />
                                                </div>
                                            </div>
                                        </footer>
                                    </section>
                                    <section className="section_layout">
                                        <header className="copy__header">
                                            <h1 className="copy_title_content">
                                                Try no-code options
                                            </h1>
                                        </header>
                                        <div className="copy__body_content ">
                                            Customize and deploy payments interfaces directly from the Stripe Dashboard.
                                        </div>
                                        <footer className="copy__footer">
                                            <div className="copy__ctaContainer">
                                                <div className="CtaButton Variant_Content_Button">
                                                    Explore no-code <BiChevronRight />
                                                </div>
                                            </div>
                                        </footer>
                                    </section>
                                    <section className="section_layout">
                                        <header className="copy__header">
                                            <h1 className="copy_title_content">
                                                Explore prebuilt integrations
                                            </h1>
                                        </header>
                                        <div className="copy__body_content ">
                                            Integrate with systems including Adobe, Salesforce, and NetSuite, or <a style={{ color: '#00d4ff' }}>sync Stripe data</a> to your warehouse.
                                        </div>
                                        <footer className="copy__footer">
                                            <div className="copy__ctaContainer">
                                                <div className="CtaButton Variant_Content_Button">
                                                    View connectors <BiChevronRight />
                                                </div>
                                            </div>
                                        </footer>
                                    </section>
                                    <section className="section_layout">
                                        <header className="copy__header">
                                            <h1 className="copy_title_content">
                                                Build an app on Stripe
                                            </h1>
                                        </header>
                                        <div className="copy__body_content ">
                                            Create a custom backend integration or interface within Stripe—make it just for your team or list it on the Stripe App Marketplace.
                                        </div>
                                        <footer className="copy__footer">
                                            <div className="copy__ctaContainer">
                                                <div className="CtaButton Variant_Content_Button">
                                                    Learn about apps <BiChevronRight />
                                                </div>
                                            </div>
                                        </footer>
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