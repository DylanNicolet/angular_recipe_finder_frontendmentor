import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterModule],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {
    menuIsOpen = signal<boolean>(false);

    setMenuStatus() {
        this.menuIsOpen.update(value => !value);
    }
}