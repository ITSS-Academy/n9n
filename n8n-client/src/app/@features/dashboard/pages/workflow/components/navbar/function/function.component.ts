import { Component } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent {
  _isOn: boolean = false;
  _isOpenSetting: boolean = false;

  turnOn(){
    this._isOn = !this._isOn;;
  }

  openSetting(){
    this._isOpenSetting = !this._isOpenSetting;
  }
  
  clickOutside() {
    this._isOpenSetting = false;
  }
}
