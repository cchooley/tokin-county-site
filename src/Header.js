import React, { Component } from 'react';

class Header extends Component {
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
            <div>
                <div className="header">
                    <a href="menu.html">Menu</a>
                    <a href="about.html">About</a>
                    <a href="location.html">Location</a>
                    <a href="specials.html">Specials</a>
                    <a href="lobby.html">Lobby Slide</a>                    
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

export default Header;