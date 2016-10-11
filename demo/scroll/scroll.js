function ScrollSelector(c) {
   this.initialize.apply(this, c);
}

//ドラッグ開始イベント処理
ScrollSelector.prototype = {
   initialize: function(c) {
      this.EVENT_ORDER = {
         'UP_TO_BOTTOM': 0b01, //スタート位置から下方向に
         'BOTTOM_TO_UP': 0b10, //スタート位置から上方向に
      };
      this.container = c;
      this.startElementNode;
      this.dragStartFlag = false;
      this.before  = '';
      this.current = '';
      this.check = '';
   },

   // ドラッグ開始処理
   dragStart: function(ev) {
      this.check = !$(ev.target).find('input').prop('checked');
      this.startElementNode = $(ev.target).find('input').data('check');
      this.dragStartFlag = true;
      this.current = ev;
      // チェック
      $(ev.target).find('input').prop('checked', this.check);
   },

   //ドラッグ終了処理
   dragEnd: function(ev) {
      // 選択数が1ならばクリックなのでチェック
      if ($(this.current.target).find('input').data('check') == $(ev.target).find('input').data('check')) {
         // 開始と終了が同じの場合はクリックなので再チェック
         $(ev.target).find('input').prop('checked', !this.check);
      }

      this.dragStartFlag = false;
      this.clear();
      return;
   },

   //マウスアップ
   mouseup: function(ev) {
      if (this.dragStartFlag) {
        this.dragEnd(ev);
      }
   },

   // 歯抜け対策処理 or スクロール処理
   update: function(ev, order) {
      var current  = $(ev.target).find('input').data('check');
      var children = this.container.children;

      if (order == this.EVENT_ORDER.UP_TO_BOTTOM) {
         for (var i = this.startElementNode; i <= current; i++) {
            $(children[i]).find('input').prop('checked', this.check);
         }
      }
      else {
         for (var i = current; i <= this.startElementNode; i++) {
            $(children[i]).find('input').prop('checked', this.check);
         }
      }
   },

   //スクロール処理
   scroll: function(ev) {
      //ドラッグ中のみ発動する
      if (this.dragStartFlag) {
         var c = ev.currentTarget;
         // 一番下までスクロールした場合は開始から最後の要素まで選択
         if (c.scrollTop + c.clientHeight >= c.scrollHeight) {
            var v = $(this.container.children[this.container.children.length-1]);
            v.target = v.context;
            this.update(v, this.EVENT_ORDER.UP_TO_BOTTOM);
            this.dragEnd(ev);
            return;
         }
         // 一番上までスクロールした場合は開始から1番目の要素まで選択
         if (c.scrollTop == 0) {
            var v = $(this.container.children[0]);
            v.target = v.context;
            this.update(v, this.EVENT_ORDER.BOTTOM_TO_UP);
            this.dragEnd(ev);
            return;
         }
      }
   },

   //マウスエンター処理
   enter: function(ev) {
      if (this.dragStartFlag && ev.toElement.localName == 'label') {
         // 折り返し対策
         // 現在の要素と一つ前に保持していた要素が同じならば折り返しと判断
         if (this.before != '' && ev.target.innerText == this.before.toElement.innerText) {
            // 折り返した最初の要素のチェックを取得
            this.check = !$(ev.target).find('input').prop('checked');
            $(this.current.target).find('input').prop('checked', this.check);
         }
         this.before = this.current;
         this.current = ev;

         // チェック
         $(ev.target).find('input').prop('checked', !$(ev.target).find('input').prop('checked'));

         // 歯抜け対策（※実装途中）
         // 現在の位置よりstartElement側を全て選択状態にする
         // var sy = this.startElement.toElement.offsetTop;
         // var y  = ev.toElement.offsetTop;
         // if (sy < y) {
         //    // 開始位置 < 現在位置 上から下へのドラッグ
         //    this.update(ev, this.EVENT_ORDER.UP_TO_BOTTOM);
         // } else {
         //    //現在位置 < 開始位置 下から上へのドラッグ
         //    this.update(ev, this.EVENT_ORDER.BOTTOM_TO_UP);
         // }
      }
   },

   // クリア
   clear: function() {
      this.current = '';
      this.before  = '';
      this.check   = '';
   }
};

// jQueryイベント設定
$(function() {
   var ss = new ScrollSelector($('#scroll_pane'));

   // マウスダウン
   $('.check').on('mousedown', function(ev) {
      ss.dragStart(ev);
   });

   // マウスアップ
   $('.check').on('mouseup', function(ev) {
      ss.dragEnd(ev);
   });

   //マウスエンター
   $('.check').on('mouseenter', function(ev) {
      ss.enter(ev);
   });

   // コンテナ外でのマウスアップ
   $('body').on('mouseup', function(ev) {
      ss.mouseup(ev);
   });

   //コンテナのスクロール
   $('#container > ul').on('scroll', function(ev) {
      ss.scroll(ev);
   });

   //クリア
   $('#clear').on('click', function() {
      $('input').prop('checked', false);
      ss.clear();
   });

   // 全選択
   $('#all').on('click', function() {
      $('input').prop('checked', true);
   });
});
