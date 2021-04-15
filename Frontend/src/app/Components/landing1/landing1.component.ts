import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing1',
  templateUrl: './landing1.component.html',
  styleUrls: ['./landing1.component.scss']
})
export class Landing1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('logued') !== '1') {
      localStorage.setItem('logued', '0');
      this.router.navigate(['login']);
    }
  }

}
