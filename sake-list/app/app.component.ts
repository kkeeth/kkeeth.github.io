import { Component } from '@angular/core';

import { SAKES } from './sake-list';


@Component({
  selector: 'my-app',
  template: `
    <div class="card-table mdl-shadow--3dp mdl-grid">
      <div align="center" class="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
        <p>自分が今まで飲んできた日本酒のリストです！</p>
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th align="center">#</th>
              <th align="center">お酒の名前</th>
              <th align="center">特定名称</th>
              <th align="center">精米歩合</th>
              <th align="center">甘辛度</th>
              <th align="center">評価（5段階）</th>
              <th align="center">詳細</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let sake of sakes">
              <td>{{ sake.id }}</td>
              <td>{{ sake.name }}</td>
              <td>{{ sake.sp_name }}</td>
              <td>{{ sake.rice_per }}%</td>
              <td>{{ sake.salty_sweet }}</td>
              <td>{{ sake.assessment }}</td>
              <td>{{ sake.detail }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AppComponent {
  sakes = SAKES;
}
