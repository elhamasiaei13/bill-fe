import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

class Success extends Component {
    render() {
        return (
            <Result
                status="success"
                title="با موفقیت انجام شد"
                subTitle="آفرین هورااااااااااا"
                extra={[
                    <Link to="/">
                        <Button key="buy">go home</Button>
                    </Link>
                    ,
                ]}
            />
        );
    }
}

export default Success;