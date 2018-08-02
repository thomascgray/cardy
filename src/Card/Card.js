import React from 'react';
import { css } from 'emotion'

export class Card extends React.Component {

    constructor(props) {
        super(props);
        this.class = css`
        .flip-container {
            perspective: 1000px;
        }
            /* flip the pane when hovered */
        .flip-container:hover .flipper, .flip-container.hover .flipper {
            transform: rotateY(180deg);
        }
        
        .flip-container, .front, .back {
            width: 320px;
            height: 480px;
        }
        
        /* flip speed goes here */
        .flipper {
            transition: 0.6s;
            transform-style: preserve-3d;
        
            position: relative;
        }
        
        /* hide back of pane during swap */
        .front, .back {
            backface-visibility: hidden;
        
            position: absolute;
            top: 0;
            left: 0;
        }
        
        /* front pane, placed above back */
        .front {
            z-index: 2;
            /* for firefox 31 */
            transform: rotateY(0deg);
        }
        
        /* back, initially hidden pane */
        .back {
            transform: rotateY(180deg);
        }
        `
    }

    render() {
        return <div className={this.class}>
            <div className='flip-container'>
                <div className="flipper">
                    <div className="front">
                        <p>this is the front of the card</p>
                    </div>
                    <div className="back">
                        <p>this is the back of the card</p>
                    </div>
                </div>
            </div>
        </div>
    }
}
