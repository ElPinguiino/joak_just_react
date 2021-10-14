import React, { useState, useEffect } from 'react'
import { Button } from '../ButtonElement';
import {
    MenuSectionContainer,
    MenuSectionWrapper,
    MenuSectionRow,
    Column1,
    Column2,
    ImgWrap,
    Img,
    StyledItemTitle,
    StyledMenuSectionTitle

} from './MenuSectionElements';
import axios from 'axios';

const MenuSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    
    return (
        <>
        <MenuSectionContainer lightBg={lightBg} id={id}>
            <MenuSectionWrapper>
                <MenuSectionRow imgStart={imgStart}>
                    <Column1>
                        <StyledMenuSectionTitle>Menu Items</StyledMenuSectionTitle>
                        <br />
                        <StyledItemTitle>Birria Taco ............................................................... $2.50</StyledItemTitle>
                        <br />
                        <StyledItemTitle>QuesaBirria Taco ..................................................... $3.50</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Quesadilla ................................................................ $8.00</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Burrito .................................................................... $9.00</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Ramen ..................................................................... $9.00</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Torta ..................................................................... $11.00</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Birria Plate ........................................................... $9.00</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Birria Nachos ........................................................... $13.00</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Birria Fries ........................................................... $13.00</StyledItemTitle>
                        <br />
                        <StyledMenuSectionTitle>Sides</StyledMenuSectionTitle>
                        <br />
                        <StyledItemTitle>Chips w/Salsa ............................................................... $4</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Beans..................................................... $2</StyledItemTitle>
                        <br />
                        <StyledItemTitle>Rice..................................................... $2</StyledItemTitle>
                        <br />
                        <StyledItemTitle>8 oz Consome..................................................... $2</StyledItemTitle>
                        <br />
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </MenuSectionRow>
            </MenuSectionWrapper>
        </MenuSectionContainer>
        </>
    )
}

export default MenuSection;
