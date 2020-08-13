import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Axios from 'axios';
import { message } from 'antd';
import { BASE_ADDRESS } from '../constants';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class SearchBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentCode: null,
            captcha: null,
            registerData: null
        }
        this.onFinish = this.onFinish.bind(this)
    }

    componentDidMount() {
        Axios.get(`${BASE_ADDRESS}/v1/bills/search/init`)
            .then(
                (response) => {
                    console.log("componentDidMount", response);
                    this.setState({ registerData: response.data.data })
                }).catch(
                    (error) => {
                        console.log("componentDidMount", error.message)
                        message.error(error.message)
                    })
    }

    onFinish(values) {
        console.log(values);
        console.log("this.props", this.props);
        const param = {
            captchaId: this.state.registerData.captchaId,
            captchaPlainValue: this.state.captcha,
            chargeId: this.state.paymentCode
        }
        // Axios.get(`${BASE_ADDRESS}/v1/test`)
        Axios.get(`${BASE_ADDRESS}/v1/bills`, { params: param })
            .then((response) => {
                if (response.data) {
                    console.log(response);
                    this.props.context.setBillData(response.data.data);
                    // this.props.conte
                    this.props.history.push(`/bills/${values.paymentCode}`)
                } else {
                    message.info("notfound")
                }
            })
            .catch(error => {
                console.log(error, error.message);
                message.error("message", error.message);
                console.log("e.response", error.response);
                if (error.response) {
                    const { code } = error.response.data.status
                    switch (code) {
//  case 4001:
//                             message.error("چنین شناسه پرداختی یافت نشد");
//                             break;

                        case 4003:
                            message.error("captchaId not found");
                            break;

                        case 4004:
                            message.error("کد امنیتی را درست وارد کنید");
                            break;

                        case 4005:
                            message.error("چنین شناسه پرداختی یافت نشد");
                            break;

                        case 5002:
                            message.error("چنین شناسه پرداختی یافت نشد");
                            break;

                        case 5003:
                            message.error("چنین شناسه پرداختی یافت نشد");
                            break;

                        default:
                            break;
                    }


                }

                // console.log("error" + error)

            })

        // this.context.router.push(`'/search/${this.state.query}/some-action'`);
    }

    render() {
        const { paymentCode, registerData, captcha } = this.state
        return (
            <Card size="small" title="سامانه پرداخت صورت حساب" >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                // onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="شناسه پرداخت"
                        name="paymentCode"
                        rules={[{ required: true, message: 'لطفا شناسه پرداخت را وارد کنید' }]}
                    >
                        <Input
                            value={paymentCode}
                            onChange={(e) => { this.setState({ paymentCode: e.target.value }) }}
                            name="paymentCode" />
                    </Form.Item>

                    <Form.Item
                        label=" "
                        // name="کد امنیتی"
                        colon={false}
                    >
                        {this.state.registerData ?
                            <img src={`data:image/png;base64,${this.state.registerData.captchaIncryptedValue}`} />
                            : ''}
                    </Form.Item>

                    <Form.Item
                        label="کد امنیتی"
                        name="captcha"
                        rules={[{ required: true, message: 'لطفا کد امنیتی را وارد کنید' }]}
                    >
                        <Input
                            value={captcha}
                            onChange={(e) => { this.setState({ captcha: e.target.value }) }}
                        />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            مشاهده صورت حساب
                    </Button>
                    </Form.Item>
                </Form>

            </Card >
        );
    }
}

export default withRouter(SearchBill);