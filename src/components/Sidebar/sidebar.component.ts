import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isSidebarVisible: boolean = false;
  showFiller: boolean = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    // Subscribe to the sidebar state changes
    this.sidebarService.sidebarState$.subscribe(state => {
      this.isSidebarVisible = state;
    });

  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleFiller() {
    this.showFiller = !this.showFiller; // Toggle additional content
  }
}
