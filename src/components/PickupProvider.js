import React, { Component } from 'react';
export const PickupContext = React.createContext()

class PickupProvider extends Component {
    // componentWillMount() {
    //     if (localStorage.getItem("selectPickup")) {
    //         const pickup = JSON.parse(localStorage.getItem("selectPickup"))
    //         this.setState({ selectPickup: pickup })
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            billData: null,
            setBillData: (data) => { this.setState({ billData: data }) }
        }
    }

    render() {
        const { children } = this.props
        return (
            <PickupContext.Provider value={this.state}>
                {children}
            </PickupContext.Provider>
        );
    }
}

export default PickupProvider;