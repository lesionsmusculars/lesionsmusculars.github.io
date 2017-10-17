import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const GET_DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=';

const SimpleMapExampleGoogleMap = withGoogleMap( props => {
    console.log("here new props are used", props)
    return <GoogleMap
      defaultZoom={14}
      defaultCenter={new google.maps.LatLng(props.lat, props.lng)}
      >
        <Marker
        position={new google.maps.LatLng(props.lat, props.lng)}
        >
            <InfoWindow>
                <div>Dirección: {props.address},<br/>{props.code} {props.city}<br/><a href={GET_DIRECTIONS + (props.lat) + ',' + (props.lng)}>Cómo llegar</a></div>
            </InfoWindow>
        </Marker>
    </GoogleMap>
 }
);

class MapaDeGoogle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lat: this.props.lat,
            lng: this.props.lng,
            address: this.props.address,
            code: this.props.code,
            city: this.props.city
        }
    }

    render() {
        console.log("New props ", this.props)

        return <SimpleMapExampleGoogleMap
                lat={this.state.lat}
                lng={this.state.lng}
                address={this.state.address}
                code={this.state.code}
                city={this.state.city}
                containerElement={
                  <div style={{ height: `500px`, marginBottom: `2em` }} />
                }
                mapElement={
                  <div style={{ height: `500px`, marginBottom: `2em` }} />
                }
            />
    }
}
export default MapaDeGoogle