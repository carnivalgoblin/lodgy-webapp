import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from "../../../global/global-constants";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'admin-page',
  templateUrl: './admin-users-page.component.html',
  styleUrl: './admin-users-page.component.scss'
})
export class AdminUsersPageComponent implements OnInit{

  navbarLinks = GlobalConstants.adminNavbarLinks;
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res: User[]) => {
        // Ensure that each user has a roles array
        this.users = res.map(user => ({
          ...user
        }));
        console.log('Users fetched successfully:', this.users);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }


  updateUser(user: User) {

    const updatedUser = {
      id: user.id,
      username: user.username,
      enabled: user.enabled
    };

    this.userService.updateUser(updatedUser).subscribe({
      next: (response) => {
        console.log('User updated successfully', response);
      },
      error: (error) => {
        console.error('Error updating user', error);
      }
    });
  }
  //
  // onRoleChange(user: User, roleName: string, event: any) {
  //   const roleIndex = user.roles.indexOf(roleName);
  //   if (event.checked && roleIndex === -1) {
  //     user.roles.push(roleName);
  //   } else if (!event.checked && roleIndex !== -1) {
  //     user.roles.splice(roleIndex, 1);
  //   }
  // }
}
