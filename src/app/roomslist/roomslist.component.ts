import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { roomItem } from '../rooms/rooms';

@Component({
  selector: 'app-roomslist',
  templateUrl: './roomslist.component.html',
  styleUrls: ['./roomslist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomslistComponent implements OnInit, OnChanges {

  @Input() roomList: roomItem[] = [];

  @Output() selectedRoom = new EventEmitter<roomItem>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("2pac");
  }

  ngOnInit(): void {
  }

  selectRoom(room : roomItem) {
    this.selectedRoom.emit(room);
  }

}
