import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prof-home',
  templateUrl: './prof-home.component.html',
  styleUrls: ['./prof-home.component.css']
})
export class ProfHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNewClasse() {
    this.router.navigate(['newclasse']);
  }

  onRetour() {
    this.router.navigate(['']);
  }
}
