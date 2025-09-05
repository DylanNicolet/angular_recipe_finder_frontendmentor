import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AdvantagesSection } from './advantages-section/advantages-section';
import { TextWithImage } from '../../components/text-with-image/text-with-image';
import { CookSmarter } from '../../components/cook-smarter/cook-smarter';

@Component({
  selector: 'app-homepage',
  imports: [
    Hero, 
    AdvantagesSection, 
    TextWithImage,
    CookSmarter
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
