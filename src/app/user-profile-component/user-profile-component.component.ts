import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent {

  user= {
    firstName: 'Diallo',
    lastName: 'Boubacar',
    profilePictureUrl: 'https://ca.slack-edge.com/T7P4CAKAS-U04FX87GQNP-c6f329aefb1e-512'
  }
  getFullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

}
