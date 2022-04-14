import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class MapInput extends React.Component {

    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder='Поиск'
                minLength={2}
                autoFocus={true}
                returnKeyType={'search'}
                listViewDisplayed={false}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    this.props.notifyChange(details.geometry.location);
                }
                }

                query={{
                    key: 'YOUR_MAPS_API_KEY',
                    language: 'ru'
                }}

                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={300}
            />
        );
    }
}
export default MapInput;
