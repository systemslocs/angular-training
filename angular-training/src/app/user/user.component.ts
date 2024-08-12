import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    //random users:
    //selectedUser = signal(DUMMY_USERS[randomIndex]);
    //imagePath = computed(() =>'assets/users/' + this.selectedUser().avatar)

    //get imagePath(){
    //    return 'assets/users/' + this.selectedUser.avatar
    //}
    @Input({required: true}) users!:User;
    @Input({required: true}) selected!: boolean; 
    @Output() select = new EventEmitter<string>();

    get imagePath(){
        return 'assets/users/' + this.users.avatar;
    }

    //signals model:
    //avatar = input.required<string>();
    //name = input.required<string>();

    //imagePath = computed(() => {
    //    return 'assets/users/' + this.avatar();
    //});

    onSelectUser(){
        this.select.emit(this.users.id);
        //random users:
        //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        //this.selectedUser.set(DUMMY_USERS[randomIndex]) ;
    }
}