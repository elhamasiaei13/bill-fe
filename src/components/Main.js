import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import SearchBill from './SearchBill';
import { Route, withRouter } from 'react-router-dom';
import ViewBill from './ViewBill';
import Payment from './Payment';
import Failed from './Failed';
import Success from './Success';
import PickupProvider from './PickupProvider';
import { PickupContext } from './PickupProvider';

const { Header, Footer, Sider, Content } = Layout;

class Main extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Header>Header</Header>
                    <Content
                        style={{
                            minHeight: window.innerWidth - 600,
                            margin: '0px 24px'
                        }} >
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                            <PickupProvider>

                                <Row gutter={16}>
                                    <Col xl={{ span: 12 }} offset={6}>
                                        <Route
                                            exact
                                            path="/"
                                            render={() => {
                                                return (<PickupContext.Consumer>
                                                    {context => <SearchBill context={context} />}
                                                </PickupContext.Consumer>)
                                            }
                                            }
                                        />

                                        <Route
                                            exact
                                            path="/bills/:topicId"
                                            render={() => {
                                                return (<PickupContext.Consumer>
                                                    {context => <ViewBill context={context} />}
                                                </PickupContext.Consumer>)
                                            }
                                            }
                                        // component={ViewBill} 
                                        />

                                        <Route
                                            exact
                                            path="/Payment"
                                            component={Payment} />

                                        <Route
                                            exact
                                            path="/failed"
                                            component={Failed} />

                                        <Route
                                            exact
                                            path="/sucsess"
                                            component={Success} />
                                    </Col>

                                </Row>
                            </PickupProvider>
                        </div>

                    </Content>
                </Layout>
            </>
        );
    }
}

export default withRouter(Main);
