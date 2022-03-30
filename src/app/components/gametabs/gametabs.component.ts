import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model';

@Component({
  selector: 'app-gametabs',
  templateUrl: './gametabs.component.html',
  styleUrls: ['./gametabs.component.scss'],
})
export class GametabsComponent implements OnInit {
  @Input() game: Game;

  constructor() {}

  ngOnInit(): void {}
}
