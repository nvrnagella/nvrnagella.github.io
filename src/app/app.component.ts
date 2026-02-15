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

  docs = DOCS_CONFIG.map(group => ({
    ...group,
    open: true
  }));

  // ===== Sidebar State =====
  sidebarOpen = false;

  toggle(group: any) {
    group.open = !group.open;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;

    document.body.classList.toggle(
      'menu-open',
      this.sidebarOpen
    );
  }


  // ===== Swipe Gesture Support =====
  touchStartX = 0;
  touchEndX = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {

    const swipeDistance = this.touchEndX - this.touchStartX;

    // ✅ OPEN sidebar (swipe right from edge)
    if (
      window.innerWidth <= 900 &&
      this.touchStartX < 40 &&
      swipeDistance > 80
    ) {
      this.sidebarOpen = true;
    }

    // ✅ CLOSE sidebar (swipe left)
    if (this.sidebarOpen && swipeDistance < -80) {
      this.sidebarOpen = false;
    }
  }
}
