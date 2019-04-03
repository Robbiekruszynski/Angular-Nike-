import { HttpClient } from '@angular/common/http';

export class Data {
  constructor(public name: string, public type: string,  public price: number, public image: string) {}
}
