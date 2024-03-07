import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private distributionResult: any;

  setDistributionResult(result: any) {
    this.distributionResult = result;
  }

  getDistributionResult() {
    return this.distributionResult;
  }
}
