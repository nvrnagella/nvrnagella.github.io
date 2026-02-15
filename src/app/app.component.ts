import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DOCS_CONFIG } from './config/docs.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   // add open state to every group
  docs = DOCS_CONFIG.map(group => ({
    ...group,
    open: true   // default expanded
  }));

  toggle(group: any) {
    group.open = !group.open;
  }
}
