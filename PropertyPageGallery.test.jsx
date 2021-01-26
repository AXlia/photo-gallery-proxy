import React from 'react';
import { shallow, mount, render } from 'enzyme';

import PropertyGallery from '../client/src/components/PropertyGallery.jsx';
import PropertyGalleryImage from '../client/src/components/PropertyGalleryImage.jsx';


const wrapper = mount(<PropertyGallery photos={['a', 'b', 'c']}/>);
console.log(wrapper.debug());
expect(wrapper.find(PropertyGalleryImage)).toHaveProp('photo');

