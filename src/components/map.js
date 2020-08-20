import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, OverlayView, Marker, LoadScript } from '@react-google-maps/api'

export default () => {




  return (
    <div className='map'>
 <iframe
  width="100%"
  height="350"
  frameborder="0" 
  src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyC1usrmp1dSP7Q-fxffkfOnlamcgZcoWrk
  &location=25.7915754,-80.1968459
  &heading=200
  &pitch=10
  &fov=38" allowfullscreen>
</iframe>
    </div>
  )
}





