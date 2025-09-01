import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-list',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="profile-list skeleton-list-gap">
        <div *ngFor="let item of skeletonItems" class="profile-list-item skeleton-item">
          <div class="profile-list-image skeleton-bg"></div>
          <div class="profile-list-info">
            <h2 class="card-name skeleton-title"></h2>
            <p class="card-bio skeleton-date"></p>
            <p class="card-bio skeleton-desc"></p>
            <div class="interests">
              <span class="interest-tag skeleton-tag"></span>
              <span class="interest-tag skeleton-tag"></span>
              <span class="interest-tag skeleton-tag"></span>
            </div>
          </div>
        </div>
      </div>
    `,
  styles: [`
    .skeleton-list-gap {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .skeleton-item {
      pointer-events: none;
      background: #fff;
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      padding: 1rem;
    }
    .skeleton-bg {
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin-right: 1.5rem;
      flex-shrink: 0;
    }
    .skeleton-title {
      width: 60%;
      height: 1rem;
      margin-bottom: 0.2rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 6px;
    }
    .skeleton-date {
      width: 40%;
      height: 0.8rem;
      margin-bottom: 0.5rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 6px;
    }
    .skeleton-desc {
      width: 90%;
      height: 0.8rem;
      margin-bottom: 0.5rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 6px;
    }
    .skeleton-tag {
      width: 50px;
      height: 18px;
      border-radius: 15px;
      margin-right: 8px;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      display: inline-block;
    }
    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class SkeletonListComponent {
  skeletonItems = Array(4);
}
