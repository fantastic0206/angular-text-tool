import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'progress-bar',
  template: `<div class="overlay">
              <mat-card class="progress-bar-container">
                <mat-card-content>
                  <p class="label">{{label}}</p>
                  <section class="section">
                    <mat-progress-bar
                      [color]="'primary'"
                      [mode]="'determinate'"
                      [value]="value">
                    </mat-progress-bar>
                    <div class="value"> {{value}}% </div>
                  </section>
                </mat-card-content>
               </mat-card>
            </div>`,
  styleUrls: ['./progressBar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  @Input()
  label: string;

  @Input()
  value: number;

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}

