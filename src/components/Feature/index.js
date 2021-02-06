import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Fresh and delicious</h1>
      <p>You can order online and get to know how our food tastes.</p>
      <FeatureButton><a href="https://distracted-mestorf-f10c0a.netlify.app/order.html">Order Now</a></FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
