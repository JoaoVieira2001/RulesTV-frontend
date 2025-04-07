import {Component, OnInit, TemplateRef} from '@angular/core';
import {User, userAuthAPI} from '../../api/userAuth';
import {AuthService} from '../../auth/auth.service';
import {lastValueFrom} from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

enum UserRole {
  User = 'user',
  Admin = 'admin'
}

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
  depromotionMode: boolean = false;
  isAddingUser: boolean = false;
  isSidebarVisible: boolean = true;

  newUser = {
    fullName: '',
    phone_number: '',
    email: '',
    password: '',
    role: UserRole.User
  };
  editingUser: any = {};
  deletingUser: User | null = null;
  modalRef?: BsModalRef;

  constructor(
    private userAuthAPI: userAuthAPI,
    public authService: AuthService,
    private modalService: BsModalService) {
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

  toggleDepromotionMode(){
    this.depromotionMode = !this.depromotionMode;
    if(!this.depromotionMode){
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

  async depromoteSelectedAdmins() {
    if (this.selectedUsers.length === 0) {
      alert("Please select at least one admin to demote.");
      return;
    }

    try {
      for (let userId of this.selectedUsers) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
          await lastValueFrom(this.userAuthAPI.depromoteAdminToUser(user.email));
        }
      }

      alert("Selected admins have been demoted to User!");
      this.selectedUsers = [];
      this.depromotionMode = false;
      this.loadAllUsers();
    } catch (error) {
      console.error("Error demoting users", error);
      alert("Failed to demote selected admins.");
    }
  }


  openAddUserModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  closeAddUserModal(){
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.newUser = {
      fullName: '',
      phone_number: '',
      email: '',
      password: '',
      role: UserRole.User
    };
  }

  openEditUserModal(user:any,template: TemplateRef<any>){
    this.editingUser = { ...user };
    this.modalRef = this.modalService.show(template);
  }

  closeEditUserModal(){
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.editingUser = {}
  }

  openDeleteUserModal(user: User, template: TemplateRef<any>) {
    this.deletingUser = user;
    this.modalRef = this.modalService.show(template);
  }

  closeDeleteUserModal(){
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.deletingUser = null;
  }

  async addUser(userForm: any) {
    if (userForm.invalid) {
      alert("Please fill out all fields correctly.");
      return;
    }

    try {
      await lastValueFrom(this.userAuthAPI.addUser(this.newUser));
      userForm.resetForm();
      this.closeAddUserModal();
      this.loadAllUsers();
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user.');
    }
  }

  async editUser(userForm:any){
    if(userForm.invalid){
      alert("Please fill out all fields correctly.");
      return;
    }

    try {
      await lastValueFrom(this.userAuthAPI.editUser(this.editingUser));
      userForm.resetForm();
      this.closeEditUserModal();
      this.loadAllUsers();
    }catch (error) {
      console.error('Error edit user:', error);
      alert('Failed to edit user.');
    }
  }

  async deleteUser(id: any) {
    if (this.authService.isAdmin() && id) {
      try {
        await lastValueFrom(this.userAuthAPI.deleteUser(id));
        this.closeDeleteUserModal();
        this.loadAllUsers();
      } catch (error) {
        console.error("Error deleting user", error);
      }
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
