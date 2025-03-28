import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private router: Router, public authService: AuthService) {}

  username: string = '';
  logout(){
    this.authService.logout()
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  ngOnInit(){
    this.loadUserLocalStorage();
  }

  loadUserLocalStorage(){
    const userStored = localStorage.getItem('user');
    if (userStored) {
      const user = JSON.parse(userStored);
      this.username = user.name || 'Unknown User';
    } else {
      this.username = 'Unknown User';
    }
  }
}
