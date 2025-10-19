import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-text-with-image',
    imports: [NgClass],
    templateUrl: './text-with-image.html',
    styleUrl: './text-with-image.scss'
})
export class TextWithImage {
    // Additional classes given to this component(Ex, img-left to set the image to the left side of the section on desktop)
    additionalClass = input<string>("");

    // Image shown on small devices (≤ 768px)
    imgSmallSrc = input<string>("");

    // Image shown on larger devices (≥ 769px)
    imgLargeSrc = input<string>("");

    // Width applied to the text on desktop (in percentage).
    // Passed down as a CSS variable to keep responsiveness in CSS.
    textWrapperWidth = input<string>("");

    // Gap applied between the text and the image on desktop (in px).
    // Passed down as a CSS variable to keep responsiveness in CSS.
    desktopGap = input<string>("");

    // Alternative text for the image (accessibility)
    imgAlt = input<string>("");
}