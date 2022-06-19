import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() classes?: string;
  @Input() text!: string;
  @Input() onClick!: Function;
  @Input() color?: 'primary' | 'accent' | 'warn' = 'primary'

  constructor() { }

  ngOnInit(): void {
  }

}
