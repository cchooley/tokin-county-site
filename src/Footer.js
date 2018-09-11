import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    static defaultProps = {
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    render() {
        return (
            <div class='footer'>
                <div class='fCol1'>
                    <h4>3819 Quentin St.</h4>
                    <h4>Denver, CO 80239</h4>
                </div>
                <div class='fCol2'>
                    <h4>720.692.1539</h4>
                    <h4>Open 9AM - 7PM</h4>
                </div>
                <div class='fCol3'>
                    <h4>Website designed by</h4>
                    <h4>Conor Hooley</h4>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    componentDidCatch(error, info) {
    }
}

export default Footer;