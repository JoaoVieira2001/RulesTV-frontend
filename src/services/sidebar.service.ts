import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // Sidebar visibility state
  private sidebarState = new BehaviorSubject<boolean>(false);
  sidebarState$ = this.sidebarState.asObservable();

  // Filler content visibility state
  private showFillerState = new BehaviorSubject<boolean>(false);
  showFillerState$ = this.showFillerState.asObservable();

  constructor() {}

  // Toggle sidebar visibility
  toggleSidebar() {
    this.sidebarState.next(!this.sidebarState.value);
  }

  // Open sidebar
  openSidebar() {
    this.sidebarState.next(true);
  }

  // Close sidebar
  closeSidebar() {
    this.sidebarState.next(false);
  }

  // Toggle filler content visibility
  toggleFiller() {
    this.showFillerState.next(!this.showFillerState.value);
  }

  // Set filler content visibility
  setFillerState(state: boolean) {
    this.showFillerState.next(state);
  }
}
