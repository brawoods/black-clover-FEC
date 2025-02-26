import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx'
import styled from 'styled-components';

const AddToOutfitCard = ({addOutfit, product}) => {

  return (
    <RelatedLib.card onClick={() => addOutfit(product)}>
      <RelatedLib.imgContainer>
        <RelatedLib.plus/>
      </RelatedLib.imgContainer>
      <RelatedLib.addOutfitText>
        <StyleLib.h3>Add to Outfit</StyleLib.h3>
      </RelatedLib.addOutfitText>
    </RelatedLib.card>
  )
}

export default AddToOutfitCard;