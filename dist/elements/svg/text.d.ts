import { Element, CoreAttributes } from './element';
import { TSpan } from './t-span';
import { Typography } from './content-model';
/**
* These attributes control the text position.
*/
export declare type TextAttributes = 'baseline-shift' | 'dominant-baseline' | 'text-align' | 'alignment-baseline' | 'text-anchor';
/**
* Text is a basic element containing string contents
*/
export declare class Text extends Element implements Typography {
    root: SVGTextElement;
    /**
    * Constructs text at the position (x,y) with the provided string
    */
    constructor(x: number, y: number, str?: string);
    setAttribute(name: TextAttributes | CoreAttributes, value: string): Text;
    getAttribute(name: TextAttributes | CoreAttributes): string;
    /**
    * Sets the contents of this element
    */
    set contents(str: string);
    /**
    * Sets the contents of this element
    */
    get contents(): string;
    /**
    * Gets the x position of this element
    */
    get x(): number;
    /**
    * Gets the y position of this element
    */
    get y(): number;
    /**
    * Sets the x position of this element
    */
    set x(value: number);
    /**
    * Sets the y position of this element
    */
    set y(value: number);
    /**
    * Returns the length of the text
    */
    get length(): number;
    text(x: number, y: number, str: string): Text;
    tspan(text?: string): TSpan;
}
