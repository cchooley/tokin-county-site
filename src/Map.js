import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

class MapContainer extends Component {
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
            <div className="mapSection">
                <div>
                    <Map 
                        containerStyle={{width: '100vmax', height: '20vmax', position: 'relative'}}
                        google={this.props.google} 
                        zoom={14}
                        initialCenter={{
                            lat: 39.770100,
                            lng: -104.845130
                        }}
                    >
                        <Marker onClick={this.onMarkerClick}
                            name={'Tokin County'}
                            title={'Tokin County'} />
                    </Map>
                </div>
                <div className="tcInfo">
                    We are a company
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

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAnGhip0kEAil0pnIgVUOiqgEPAdHH07cE")
})(MapContainer)