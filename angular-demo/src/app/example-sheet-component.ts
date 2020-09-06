import { Component } from "@angular/core";
import { BottomSheetContext } from "../../../angular/bottom-sheet.provider";

@Component({
  selector: "app-example-component",
  template: `
   
<div class="location">Portland,OR</div>
<div class="address1" (click)="context.dismiss('Portland selected')">
  <h5>915 NW Lovejoy St.</h5>
  <p>Portland, OR<br>503-221-4023<br>Open today 9am-8pm</p>
</div>
<div class="address1" (click)="context.dismiss('Portland selected')">
  <h5>915 NW Lovejoy St.</h5>
  <p>Portland, OR<br>503-221-4023<br>Open today 9am-8pm</p>
</div>
<div class="address1" (click)="context.dismiss('Portland selected')">
  <h5>915 NW Lovejoy St.</h5>
  <p>Portland, OR<br>503-221-4023<br>Open today 9am-8pm</p>
</div>
<div class="address1" (click)="context.dismiss('Portland selected')">
  <h5>915 NW Lovejoy St.</h5>
  <p>Portland, OR<br>503-221-4023<br>Open today 9am-8pm</p>
</div>
<div class="address1" (click)="context.dismiss('Portland selected')">
  <h5>915 NW Lovejoy St.</h5>
  <p>Portland, OR<br>503-221-4023<br>Open today 9am-8pm</p>
</div>
<div class="address1" (click)="context.dismiss('Portland selected')">
  <h5>915 NW Lovejoy St.</h5>
  <p>Portland, OR<br>503-221-4023<br>Open today 9am-8pm</p>
</div>
<div class="address1">
  <h5>915 NW Lovejoy St.</h5>
  <p>Portland, OR<br>503-221-4023<br>Open today 9am-8pm</p>
</div>
  `
})
export class ExampleComponent {
  constructor(public context: BottomSheetContext) {}
}
