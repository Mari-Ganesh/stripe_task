import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MainComponent from "./Component/firstcomponent";

function TabBar() {
    return (
        <div>
            <div>
                <div>
                    <Tabs>
                        <Tab eventKey="home" title="Home">
                            <div className="container-fluid" >
                                <div className="row">
                                    <MainComponent />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="products" title="Products">
                            Tab 2 Content
                        </Tab>
                        <Tab eventKey="solution" title="Solution">
                            Tab 3 content
                        </Tab>
                        <Tab eventKey="developers" title="Developers">
                            Tab 4 content
                        </Tab>
                        <Tab eventKey="resources" title="Resources">
                            Tab 5 content
                        </Tab>
                        <Tab eventKey="pricing" title="Pricing">
                            Tab 6 content
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default TabBar;