import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.html",
  styleUrls: [ "./header.css" ]
})
export class HeaderComponent {
  @Input() title = '';
  @Input() showBackButton = false;
  @Output() back = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }
}
