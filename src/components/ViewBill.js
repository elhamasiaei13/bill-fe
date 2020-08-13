import React, { Component } from 'react';
import { Card, Descriptions, Row, Typography, List, Button, Col } from 'antd';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class ViewBill extends Component {
    constructor(props) {
        super(props);
        
    }


    componentDidMount() {
        // Axios.get("http://localhost:8080/b2b/v1/bills/")
        //     .then((response) => {
        //         console.log(response.data)
        //         this.setState({ billData: response.data })
        //     })
        //     .catch(error => {
        //         console.log(error)
        // })
    }

    render() {
        const { billData } = this.props.context

        return (

            <Card
                title="سامانه پرداخت صورت حساب"
                className=" prvn-card-discription"
                actions={[
                    <Link to="/payment">
                        <Button
                            style={{ "width": "80%", "backgroundColor": "#136e1b" }}
                            type="primary" >
                            واریز آنلاین
                        </Button>
                    </Link>
                ]} >
                {billData && <List
                    className=" prvn-card-discription"
                    header={<div>
                        <Descriptions
                            bordered
                            column={1}
                        >
                            <Descriptions.Item label="نام خریدار">
                                {billData.personName}</Descriptions.Item>
                        </Descriptions></div>}
                    bordered
                    dataSource={billData.billItems}
                    renderItem={item => (
                        <List.Item>
                            <Descriptions
                                bordered
                                column={1}
                            >
                                <Descriptions.Item label={item.description}>
                                    {item.amount}</Descriptions.Item>
                            </Descriptions>
                        </List.Item>
                    )}
                />
                }
            </Card>
        );
    }
}

export default ViewBill;