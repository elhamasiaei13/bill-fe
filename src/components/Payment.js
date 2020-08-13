import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';

class Payment extends Component {
    render() {
        return (
            <div>
                <Card title="پرداخت" >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Link to="/sucsess">
                    <Button type="succsess" danger>
                        success
                </Button>
                </Link>

                <Link to="/failed">
                    <Button type="primary" danger>failed</Button>
                </Link>

            </div>
        );
    }
}

export default withRouter(Payment);
