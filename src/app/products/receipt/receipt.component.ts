import { Component, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  @Input() show = false;
  @Input() customClass = '';
  @Input() closeCallback = () => (true);
  constructor() {
  }

  ngOnInit(): void {

  }

}
