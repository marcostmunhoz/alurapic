import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ap-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();

  private input(value: string) {
    this.search.emit(value);
  }
}
