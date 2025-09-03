import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuIsOpen = signal<boolean>(false);

  setMenuStatus() {
    this.menuIsOpen.update(value => !value);
  }
}