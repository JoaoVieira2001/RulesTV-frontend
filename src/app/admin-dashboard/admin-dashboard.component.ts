import {Component, OnInit} from '@angular/core';
import {User, userAuthAPI} from '../../api/userAuth';
import {AuthService} from '../../auth/auth.service';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
  users: User[] = [];
  selectedUsers: number[] = [];
  promotionMode: boolean = false;

  constructor(private userAuthAPI: userAuthAPI, public authService: AuthService) {
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  togglePromotionMode(){
    this.promotionMode = !this.promotionMode;
    if(!this.promotionMode){
      this.selectedUsers = [];
    }
  }

  toggleUserSelection(user:User){
    const index = this.selectedUsers.indexOf(user.id);
    if (index === -1) {
      this.selectedUsers.push(user.id);
    } else {
      this.selectedUsers.splice(index, 1);
    }
  }

  async loadAllUsers() {
    if (this.authService.isAdmin()) {
      try {
        this.users = await lastValueFrom(this.userAuthAPI.getAllUsers());
        console.log("Users fetched successfully:", this.users);  // Log user data
      } catch (error) {
        console.error("Error loading users", error);
      }
    } else {
      console.log("User is not an admin, access denied.");
    }
  }

  async promoteSelectedUsers() {
    if (this.selectedUsers.length === 0) {
      alert("Please select at least one user to promote.");
      return;
    }

    try {
      for (let userId of this.selectedUsers) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
          await lastValueFrom(this.userAuthAPI.promoteUserToAdmin(user.email));
          console.log(`User promoted: ${user.email}`);
        }
      }

      alert("Selected users have been promoted to Admin!");
      this.selectedUsers = [];
      this.promotionMode = false;
      this.loadAllUsers();
    } catch (error) {
      console.error("Error promoting users", error);
      alert("Failed to promote selected users.");
    }
  }


  async addUser() {
    const newUser = {
      name: 'Diogo Silva',
      phone_number: '1234567890',
      email: 'diogosilva@gmail.com',
      password: 'Mobimiranda100'
    };

    try {
      await lastValueFrom(this.userAuthAPI.addUser(newUser));
      console.log('User added successfully:', newUser.email);
      alert('User added successfully!');
      this.loadAllUsers();
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user.');
    }
  }


  async deleteUser(id: number) {
    if (this.authService.isAdmin()) {
      try {
        await lastValueFrom(this.userAuthAPI.deleteUser(id));
        console.log("User deleted:", id);
        this.loadAllUsers(); // Refresh list after deletion
      } catch (error) {
        console.error("Error deleting user", error);
      }
    }
  }


}
