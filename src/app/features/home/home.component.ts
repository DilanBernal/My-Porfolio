import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, NgbScrollSpyModule, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
