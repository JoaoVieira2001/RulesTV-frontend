import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import {SidebarService} from '../../services/sidebar.service';
import {filter} from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(private router: Router,
              public authService: AuthService,
              private sidebarService: SidebarService
  ) {}

  showSidebarBtn: boolean = false;

  ngOnInit() {
    this.loadUserLocalStorage();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showSidebarBtn = event.url === '/admin-dashboard';
      });
  }

  toggleSidebar() {
    if (this.router.url !== '/admin-dashboard') {
      alert('You need to stay on the admin dashboard for the sidebar to work');
      return;
    }
    this.sidebarService.toggleSidebar();
  }

  loadUserLocalStorage() {
    const userStored = localStorage.getItem('user');
    if (userStored) {
      const user = JSON.parse(userStored);
      this.username = user.name || 'Unknown User';
    } else {
      this.username = 'Unknown User';
    }
  }

  logout() {
    this.authService.logout();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

}
