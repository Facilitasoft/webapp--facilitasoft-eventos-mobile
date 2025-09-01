import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-event-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid p-0 m-0">
      <div class="skeleton-banner"></div>
    </div>
    <div class="container-fluid bg-white pt-5 pb-5">
      <div class="container-xxl">
        <div class="row">
          <div class="skeleton-title mb-3"></div>
          <div class="skeleton-info mb-2"></div>
          <div class="skeleton-info mb-2"></div>
        </div>
      </div>
    </div>
    <div class="container-fluid pt-5 pb-5">
      <div class="container-xxl">
        <div class="row mb-4" style="min-height: 400px;">
          <div class="col-12">
            <div class="skeleton-section-title mb-3"></div>
            <div class="skeleton-desc mb-2"></div>
            <div class="skeleton-desc mb-2"></div>
            <div class="skeleton-desc mb-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-white pt-5 pb-5">
      <div class="container-xxl">
        <div class="row">
          <div class="col">
            <div class="skeleton-section-title mb-3"></div>
            <div class="skeleton-info mb-2"></div>
            <div class="skeleton-info mb-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pt-5 pb-5" id="ingressos">
      <div class="container-xxl">
        <div class="row">
          <div class="col">
            <div class="skeleton-section-title mb-3"></div>
            <div class="skeleton-ticket mb-3"></div>
            <div class="skeleton-ticket mb-3"></div>
            <div class="skeleton-ticket mb-3"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .skeleton-banner {
      width: 100%;
      height: 220px;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 18px;
      margin-bottom: 0;
    }
    .skeleton-title {
      width: 60%;
      height: 2rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 8px;
    }
    .skeleton-info {
      width: 40%;
      height: 1.2rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 6px;
    }
    .skeleton-section-title {
      width: 30%;
      height: 1.5rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 6px;
    }
    .skeleton-desc {
      width: 100%;
      height: 1rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 6px;
      margin-bottom: 8px;
    }
    .skeleton-ticket {
      width: 100%;
      height: 3.2rem;
      background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.2s infinite linear;
      border-radius: 12px;
      margin-bottom: 12px;
    }
    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class SkeletonEventDetailComponent { }
