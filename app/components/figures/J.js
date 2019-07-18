import React from 'react';
import { Square } from './Square';

export class J extends React.Component{
    render(){
        const side = 10;
        const x = 250;
        const y = 80;
        const border = 1;
        const { position } = this.props;
        
            if (position === 0) {
              return (
                <>
                  <Square x={x} y={y} side={side} />
                  <Square x={x} y={y + side + border} side={side} />
                  <Square x={x} y={y + 2 * (side + border)} side={side} />
                  <Square x={x - side - border} y={y + 2 * (side + border)} side={side}
                  />
                </>
              );
            }
            if (position === 1) {
              return (
        
                <>
                <Square x={x} y={y} side={side} />
                <Square x={x} y={y - side - border} side={side} />
                <Square x={x+side+border} y={y} side={side} />
                <Square x={x+(side*2)+(border*2)} y={y} side={side} />
              </>
              );
            }
            if (position === 2) {
              return (
                <>
                <Square x={x + 2 * side + border} y={y} side={side} />
                <Square x={x + (side*3) + (border*2)} y={y} side={side} />
                <Square x={x + 2 * side + border} y={y + side + border} side={side} />
                <Square
                  x={x + 2 * side + border}
                  y={y + 2 * (side + border)}
                  side={side}
                />
              </>
              );
            }
        
            if (position === 3) {
              return (
                <>
                <Square x={x} y={y + side + border} side={side} />
                <Square x={x + (side *2) + (border*2)} y={(y+ side*2) + (border *2)} side={side} />
                <Square x={x+side+border} y={y + side + border } side={side} />
                <Square x={x+(side*2)+(border*2)} y={y+ side + border} side={side} />
              </>
              );
            }
            return null;
          }


    }
