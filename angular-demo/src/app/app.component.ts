import { Component, ViewContainerRef } from "@angular/core";
import { BottomSheetProvider, BottomSheetContent } from "../../../angular";
import { ExampleComponent } from "./example-sheet-component";

@Component({
  selector: "app-root",
  templateUrl: "app.html",
  styles: []
})
export class AppComponent {
  lastValue: any;
  component = ExampleComponent;

  constructor(
    private bottomSheet: BottomSheetProvider,
    vcRef: ViewContainerRef
  ) {
    bottomSheet.rootVcRef = vcRef;
  }

  async openSheet<T>(content: BottomSheetContent<T>) {

    this.lastValue = "";
    const value = await this.bottomSheet.show(content, {
      title: "Sheet up",
      stops: [170]
    });
    this.lastValue = value;
  }


}
