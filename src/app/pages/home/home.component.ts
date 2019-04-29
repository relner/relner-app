import { Component, OnInit } from '@angular/core';
import {Email} from '../../interfaces';
import {DataService} from '../../services/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  email: Email;

  ngOnInit() {

    this.email = {
      to: "a0546812643@gmail.com",
      from: "vladimir@relner.com",
      subject: "TEST MAILER",
      content: "HELLO!!!!!!!!!!!!!!",
  }
  }




  sendEmail(){
    this.dataService.sendEmailService(this.email).subscribe(obj=>{
      console.log('sendet!');
    });
  }

}
