import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  isError = false;
  classes = {'green-bg': this.isError, 'red-bg': !this.isError, 'white-color': true};
  developer = {
    name: '',
    email: '',
    gender: '',
    js: '',
    node: '',
    angular: '',
    position: ''
  };
  isFullInfo = false;


  constructor() {
    setTimeout(() => {
      this.isError = true;
      this.classes['green-bg'] = this.isError;
      this.classes['red-bg'] = !this.isError;
    }, 4000);
  }


  sendForm(form) {
    console.log(form);
  }

  ngOnInit() {
  }

}
