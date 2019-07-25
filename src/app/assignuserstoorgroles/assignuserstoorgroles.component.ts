import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignuserstoorgroles',
  templateUrl: './assignuserstoorgroles.component.html',
  styleUrls: ['./assignuserstoorgroles.component.css']
})
export class AssignuserstoorgrolesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  list = ['Wendy', 'Christa', 'Rakhi', 'Priti'];
    newList = [];
    availableIndex = null;
    selectedIndex = null;

    onCompleteSelect(direction): void {
        if (direction === 'right') {
            // this.newList = this.list.length > 0 ? this.list.slice() : this.newList.slice();
            this.list.forEach(val => {
                this.newList.push(val);
            });
            this.list = [];
        } else {
            // this.list = this.newList.length > 0 ? this.newList.slice() : this.list.slice();
            this.newList.forEach(val => {
                this.list.push(val);
            });
            this.newList = [];
        }

    }
    onSelectRight(index): void {
        if (index !== null) {
        this.newList.push(this.list[index]);
        this.list.splice(index, 1);
        this.selectedIndex = null;
        this.availableIndex = null;
      }

    }

    onSelectLeft(index): void {
        if (index !== null) {
        this.list.push(this.newList[index]);
        this.newList.splice(index, 1);
        this.selectedIndex = null;
        this.availableIndex = null;

        }
    }

}
