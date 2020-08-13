import React, { Component } from 'react';
import { Result, Button, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Paragraph, Text } = Typography;
class Failed extends Component {
    render() {
        return (
            <div>
                <Result
                    status="error"
                    title="متاسفانه شکست خورد"
                    subTitle=""
                    extra={[
                        // <Button type="primary" key="console">
                        //     Go Console
                        // </Button>,
                        <Link to="/">
                            <Button key="buy">try Again</Button>
                        </Link>,
                    ]}
                >

                </Result>
            </div>
        );
    }
}

export default Failed;