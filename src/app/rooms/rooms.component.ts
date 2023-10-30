import { Component } from '@angular/core';
import {Rooms, roomItem} from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent {

    hiddenRooms = true;
    numberOfRooms = 10;
    title = "My rooms";
    sRoom!: roomItem;

    ngOnInit(): void {

    }

    constructor() {

    }

    roomdata : Rooms  = {
      avalaibleRooms: 10,
      totalRoms: 25,
      bokedRooms: 5
    }

    roomList : roomItem[] = [
      {
        roomNumber: 1,
        roomType: 'Low room',
        ameneties: 'No Air Conditionner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 10000,
        photo: 'exemple.com/photo.png',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('11-Nov-2022'),
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe room',
        ameneties: 'Air Conditionner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 10000,
        photo: 'exemple.com/photo.png',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('11-Nov-2022'),
      }
    ] 

    toggle() {
      this.hiddenRooms = !this.hiddenRooms;
    }

    selectRoom(room: roomItem) {
      // console.log(room);
      this.sRoom = room;
      console.log(this.sRoom);
    }

    addRoom() {
    
      const room: roomItem = {
          roomNumber: 3,
          roomType: 'Medium room',
          ameneties: 'Air Conditionner, Paid Wi-Fi, TV, Kitchen',
          price: 2000,
          photo: 'exemple.com/photo.png',
          checkinTime: new Date('11-Nov-2021'),
          checkoutTime: new Date('11-Nov-2022'),
      }
  
      this.roomList = [...this.roomList, room];
  
    }
    
}
