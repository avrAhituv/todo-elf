import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

export interface InputSettings {
  typed: 'text'|'email'|'phone'|'date'|'datetime'|'textarea'|'boolean';
  title: string;
  name: string;
  hint?: string;
  isMulti?: boolean;
  options?: Array<{id: number | string, value: string}>
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() settings!: InputSettings;
  constructor() { }

  ngOnInit(): void {
  }

}
