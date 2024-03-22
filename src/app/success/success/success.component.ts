import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-success",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./success.component.html",
  styleUrl: "./success.component.css",
})
export class SuccessComponent {}
