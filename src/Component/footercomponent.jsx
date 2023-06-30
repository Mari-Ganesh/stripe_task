import React from "react";
import "../App.css";
import { FaLocationArrow } from 'react-icons/fa';
import { BsChatFill } from 'react-icons/bs'

function Footer() {
    return (
        <div className="main-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h6>Stripe</h6>
                        <ui className="list-unstyled">
                            <li><FaLocationArrow /> India</li>
                            <li><BsChatFill />English(United States)</li>
                        </ui>
                    </div>
                    <div className="col">
                        <h6><b>Products</b></h6>
                        <ui className="list-unstyled">
                            <li>Atlas</li>
                            <li>Billing</li>
                            <li>Capital</li>
                            <li>Checkout</li>
                            <li>Climate</li>
                            <li>Connect</li>
                            <li>Corporate Card</li>
                            <li>Elements</li>
                            <li>Financial Connections</li>
                            <li>Identity</li>
                            <li>Invoicing</li>
                            <li>Issuing</li>
                            <li>Link</li>
                            <li>Payments</li>
                            <li>Payment Links</li>
                            <li>Payouts</li>
                            <li>Pricing</li>
                            <li>Radar</li>
                            <li>Revenue Recognition</li>
                            <li>Sigma</li>
                            <li>Tax</li>
                            <li>Terminal</li>
                            <li>Treasury</li>
                        </ui>
                    </div>
                    <div className="col">
                        <h6><b>Solutions</b></h6>
                        <ui className="list-unstyled">
                            <li>Ecommerce</li>
                            <li>SaaS</li>
                            <li>MarketPlaces</li>
                            <li>Embedded Finance</li>
                            <li>Finance Automation</li>
                            <li>Platforms</li>
                            <li>Creator Economy</li>
                            <li>Crypto</li>
                            <li>Global Businesses</li>
                            <b>Integrations & Custom Solutions</b>
                            <li>App Marketplace</li>
                            <li>Partner Ecosystem</li>
                            <li>Professional Services</li>
                            <b>Developers</b>
                            <li>Documentation</li>
                            <li>API Reference</li>
                            <li>API Status</li>
                            <li>API Changelog</li>
                            <li>Build a Stripe App</li>
                        </ui>
                    </div>
                    <div className="col">
                        <h6><b>Resources</b></h6>
                        <ui className="list-unstyled">
                            <li>Support Center</li>
                            <li>Support Planes</li>
                            <li>Guides</li>
                            <li>Customer Stories</li>
                            <li>Annual Conference</li>
                            <li>Contact Sales</li>
                            <li>Privacy & Terms</li>
                            <li>Licenses</li>
                            <li>COVID-19</li>
                            <li>Sitemap</li>
                            <li>Cookie settings</li>
                            <b>Company</b>
                            <li>Jobs</li>
                            <li>Newsroom</li>
                            <li>Stripe Press</li>
                            <li>Become a Partner</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy; 2023 Stripe, Inc.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;