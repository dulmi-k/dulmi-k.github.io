import { Component, HostListener } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  private overlay: HTMLElement;

  constructor(
    private overlayContainer: OverlayContainer,
    public theme: ThemeService
  ) {
    // pass the container element to theme service
    this.overlay = this.overlayContainer.getContainerElement();
    this.theme.init(this.overlay);
  }

  @HostListener('window:resize')
  OnWindowResize() {
    this.theme.applyParticles(this.theme.configLocation);
  }
}
