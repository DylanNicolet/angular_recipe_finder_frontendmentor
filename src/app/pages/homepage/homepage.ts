import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AdvantagesSection } from './advantages-section/advantages-section';
import { RealLifeSection } from './real-life-section/real-life-section';
import { CookSmarter } from '../../components/cook-smarter/cook-smarter';

@Component({
  selector: 'app-homepage',
  imports: [
    Hero, 
    AdvantagesSection, 
    RealLifeSection,
    CookSmarter
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
