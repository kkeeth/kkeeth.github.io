import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'app works!!';
   init_value: number;
   rate: number;

   // 複利計算
   calc(): number {
      if (isNaN(this.init_value) || isNaN(this.rate)) {
         return null;
      }
      let answer: number = this.init_value;
      for (let i = 0; i < 10; i++) {
         answer = answer * (1 + this.rate / 100);
      }
      return Math.floor(answer);
   }

   // 年毎の金額明細
   calc_array(): number[] {
      if (isNaN(this.init_value) || isNaN(this.rate)) {
         return null;
      }
      let answer: number = this.init_value;
      let ret: number[]  = [answer];
      for (let i = 0; i < 10; i++) {
         answer = answer * (1 + this.rate / 100);
         ret.push(Math.floor(answer));
      }
      return ret;
   }

   // 入力値を保存
   save(): void {
      localStorage.setItem(
         "init_value", this.init_value.toString()
      );

      localStorage.setItem(
         "rate", this.rate.toString()
      )
   }

   // 入力値と保存データをクリア
   clear(): void {
      localStorage.removeItem("init_value");
      localStorage.removeItem("rate");
      this.init_value = 0;
      this.rate = 0;
   }

   // アプリ起動時の入力値設定
   ngOnInit() {
      if (localStorage.getItem("init_value")) {
         this.init_value = Number(localStorage.getItem("init_value"));
         this.rate = Number(localStorage.getItem("rate"));
         console.warn(this.init_value);
         console.warn(this.rate);
      }
      else {
         this.clear();
      }
   }
}
