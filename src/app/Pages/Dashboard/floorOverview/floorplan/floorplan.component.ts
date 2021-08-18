import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.scss']
})
export class FloorplanComponent implements OnInit {
  showEG: string = "show active"
  showOne: string = "";
  showTwo: string = "";
  showThree: string = "";
  showFour: string = "";
  showFive: string = "";
  showSix: string = "";

  activeEG: string = "active"
  activeOne: string = "";
  activeTwo: string = "";
  activeThree: string = "";
  activeFour: string = "";
  activeFive: string = "";
  activeSix: string = "";
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('tab') == "1"){
      this.showEG = "show active";
      this.showOne = "";
      this.showTwo = "";
      this.showThree = "";
      this.showFour = "";
      this.showFive = "";
      this.showSix = "";

      this.activeEG = "active";
      this.activeOne = "";
      this.activeTwo = "";
      this.activeThree = "";
      this.activeFour = "";
      this.activeFive = "";
      this.activeSix = "";

    }else if(sessionStorage.getItem('tab') == "2"){
      this.showEG = "";
      this.showOne = "show active";
      this.showTwo = "";
      this.showThree = "";
      this.showFour = "";
      this.showFive = "";
      this.showSix = "";

      this.activeEG = "";
      this.activeOne = "active";
      this.activeTwo = "";
      this.activeThree = "";
      this.activeFour = "";
      this.activeFive = "";
      this.activeSix = "";
    }else if(sessionStorage.getItem('tab') == "3") {
      this.showEG = "";
      this.showOne = "";
      this.showTwo = "show active";
      this.showThree = "";
      this.showFour = "";
      this.showFive = "";
      this.showSix = "";

      this.activeEG = "";
      this.activeOne = "";
      this.activeTwo = "active";
      this.activeThree = "";
      this.activeFour = "";
      this.activeFive = "";
      this.activeSix = "";
    }else if(sessionStorage.getItem('tab') == "4"){
      this.showEG = "";
      this.showOne = "";
      this.showTwo = "";
      this.showThree = "show active";
      this.showFour = "";
      this.showFive = "";
      this.showSix = "";

      this.activeEG = "";
      this.activeOne = "";
      this.activeTwo = "";
      this.activeThree = "active";
      this.activeFour = "";
      this.activeFive = "";
      this.activeSix = "";
    }else if(sessionStorage.getItem('tab') == "5") {
      this.showEG = "";
      this.showOne = "";
      this.showTwo = "";
      this.showThree = "";
      this.showFour = "show active";
      this.showFive = "";
      this.showSix = "";

      this.activeEG = "";
      this.activeOne = "";
      this.activeTwo = "";
      this.activeThree = "";
      this.activeFour = "active";
      this.activeFive = "";
      this.activeSix = "";
    }else if(sessionStorage.getItem('tab') == "6") {
      this.showEG = "";
      this.showOne = "";
      this.showTwo = "";
      this.showThree = "";
      this.showFour = "";
      this.showFive = "show active";
      this.showSix = "";

      this.activeEG = "";
      this.activeOne = "";
      this.activeTwo = "";
      this.activeThree = "";
      this.activeFour = "";
      this.activeFive = "active";
      this.activeSix = "";
    }else if(sessionStorage.getItem('tab') == "7") {
      this.showEG = "";
      this.showOne = "";
      this.showTwo = "";
      this.showThree = "";
      this.showFour = "";
      this.showFive = "";
      this.showSix = "show active";

      this.activeEG = "";
      this.activeOne = "";
      this.activeTwo = "";
      this.activeThree = "";
      this.activeFour = "";
      this.activeFive = "";
      this.activeSix = "active";
    }
  }
  storeTabInSession(id){
    sessionStorage.setItem('tab',id);
  }

  /*toggleDisplay(){
      this.isShown = ! this.isShown;
  }
  closeDropdown(){
    this.isShown = false;
  }*/
}
