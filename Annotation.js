import React from 'react';
import { View, requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

const viewConfig = {
  uiViewClassName: 'RCTMapboxAnnotation',
  validAttributes: {
    coordinate: true,
  },
};

const propTypes = {
  ...View.propTypes,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  
};

class MapboxAnnotation extends React.Component {
  setNativeProps(nativeProps) {
    this.marker.setNativeProps(nativeProps);
  }
  
  render() {
    return (
      <RCTMapboxAnnotation
        ref={ref => { this.marker = ref; }}
        {...this.props}
      />
    );
  }
}

MapboxAnnotation.propTypes = propTypes;
MapboxAnnotation.viewConfig = viewConfig;

const RCTMapboxAnnotation = requireNativeComponent('RCTMapboxAnnotation', MapboxAnnotation);
module.exports = MapboxAnnotation;
