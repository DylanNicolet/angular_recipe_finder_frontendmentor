import { Component } from '@angular/core';
import { TextWithImage } from "../../components/text-with-image/text-with-image";
import { CookSmarter } from "../../components/cook-smarter/cook-smarter";

@Component({
  selector: 'app-about',
  imports: [TextWithImage, CookSmarter],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
