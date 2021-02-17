/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />


import { backgroundEffect } from '../../PitPanda/effects/basic';
import { UIContainer, createElement, UIText, UIImage } from '../../ElementaJSX/dist/index';
import * as Elementa from '../../Elementa';

const Color = Java.type('java.awt.Color');

// const myConstraint = {
//   cachedValue: 0,
//   recalculate: true,
//   constrainTo: undefined,
//   getXPositionImpl(component){},
//   getYPositionImpl(component){},
//   getWidthImpl(component){},
//   getHeightImpl(component){},
//   getRadiusImpl(component){},
//   getXValue(component){},
//   getYValue(component){},
//   getWidth(component){},
//   getHeight(component){},
//   getRadius(component){},
//   animationFrame(){},
//   getCachedValue(){return this.cachedValue},
//   getConstrainTo(){return undefined},
//   getRecalculate(){return false},
//   getXPosition(){return this.getXValue()},
//   getYPosition(){return this.getYValue()},
//   setCachedValue(){},
//   setConstrainTo(){},
//   setRecalculate(){},
//   to(){}
// }

register('command', () => {
  const gui = new Gui();
  const window = new Elementa.Window().addChild(
    <UIContainer
      w='100px'
      h='50px'
      x='center'
      y='center'
      stackHorizontal
    >
      <UIContainer
        effects={[backgroundEffect(new Color(1,0,0,.8))]}
        w='50%'
        h='100%'
      >
        <UIText scale='8px'>some text</UIText>
      </UIContainer>
      <UIContainer
        effects={[backgroundEffect(new Color(0,0,1,.1))]}
        w='50%'
        h='100%'
        stackVertical
      >
        <UIText>Text 1</UIText>
      </UIContainer>
    </UIContainer>
  );
  gui.registerDraw(() => window.draw());
  gui.open();
}).setName('jsx');