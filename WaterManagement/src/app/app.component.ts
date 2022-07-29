import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WaterManagement';
  ratio = {
    corp: { disable: false, value: 0 },
    boreWell: { disable: false, value: 0 },
  };
  guestQuantity = 0;
  totGuest = 0;
  apartmentType = 0;
  result = 0;

  addGuest() {
    this.totGuest += this.guestQuantity;
  }

  calculateBill() {
    if (this.apartmentType === 2) {
      const ratioDiv = Math.round(
        900 / (this.ratio.boreWell.value + this.ratio.corp.value)
      );
      const boreWell = Math.round(ratioDiv * this.ratio.boreWell.value * 1.5);
      const corp = ratioDiv * this.ratio.corp.value;
      this.result = boreWell + corp;
    } else if (this.apartmentType === 3) {
      const ratioDiv = Math.round(
        1500 / (this.ratio.boreWell.value + this.ratio.corp.value)
      );
      const boreWell = Math.round(ratioDiv * this.ratio.boreWell.value * 1.5);
      const corp = ratioDiv * this.ratio.corp.value;
      this.result = boreWell + corp;
    }
    const waterConsumedByGuest = this.totGuest * 30 * 10;
    if (waterConsumedByGuest > 3000) {
      this.result += (waterConsumedByGuest - 3000) * 8;
    }
    if (waterConsumedByGuest > 1500) {
      if (waterConsumedByGuest > 3000) {
        this.result += 1500 * 5;
      } else {
        this.result += (waterConsumedByGuest - 1500) * 5;
      }
    }
    if (waterConsumedByGuest > 500) {
      if (waterConsumedByGuest > 1500) {
        this.result += 1000 * 3;
      } else {
        this.result += (waterConsumedByGuest - 500) * 3;
      }
    }
    if (waterConsumedByGuest > 0) {
      if (waterConsumedByGuest > 500) {
        this.result += 500 * 2;
      } else {
        this.result += waterConsumedByGuest * 2;
      }
    }
  }

  reset() {
    this.ratio = {
      corp: { disable: false, value: 0 },
      boreWell: { disable: false, value: 0 },
    };
    this.guestQuantity = 0;
    this.totGuest = 0;
    this.apartmentType = 0;
    this.result = 0;
  }
}
