/**
 * id: #
 * name: お酒の名前
 * sp_name: 特定名称
 * rice_per: 精米歩合
 * sake_per: 甘辛度
 * assessment: 評価（5段階）
 * detail: 詳細
 */
import { Sake } from './sake';
export const SAKES: Sake[] = [
   {
      name: '銀嶺月山（ぎんれいがっさん）',
      sp_name: '純米酒',
      rice_per: '80',
      sake_per: '±0',
      assessment: 3,
      detail: '可もなく不可もなし。'
   },
   {
      name: '獺祭　純米大吟醸　磨き二割三分',
      sp_name: '純米大吟醸',
      rice_per: '23',
      sake_per: '+4',
      assessment: 5,
      detail: '今まで飲んできた中ではダントツの1位！'
   },
   {
      name: '純米生酒 浦霞（うらかすみ）',
      sp_name: '純米酒 生酒',
      rice_per: '65',
      sake_per: '+1.5',
      assessment: 4,
      detail: '飲みやすくかなり清涼感がある。でもしっかり味もする。'
   },
   {
      name: '特別純米酒　田酒（でんしゅ）',
      sp_name: '特別純米酒',
      rice_per: '55',
      sake_per: '±0',
      assessment: 4,
      detail: 'すっきりした味わいで料理にも合う。'
   },
   {
      name: '栄光冨士　純米吟醸しぼりたて　無濾過生原酒　仙龍',
      sp_name: '純米吟醸',
      rice_per: '60',
      sake_per: '±0',
      assessment: 4,
      detail: '結構香りが強め。魚よりも肉や揚げ物に合うかも。'
   },
   {
      name: '熟成古酒　山吹ゴールド',
      sp_name: '清酒（熟成古酒）',
      rice_per: '?',
      sake_per: '?',
      assessment: 5,
      detail: '味、香りともに文句なし！オススメのお酒。'
   },
   {
      name: '雪兜　特別純米酒',
      sp_name: '特別純米 生',
      rice_per: '50',
      sake_per: '-1',
      assessment: 5,
      detail: 'お酒が弱い人でもすっと飲めるくらい口当たり、香りの良いお酒。'
   },
   {
      name: '澤の花 ささら 超辛口吟醸',
      sp_name: '吟醸',
      rice_per: '60',
      sake_per: '15',
      assessment: '3',
      detail: '名前通り辛口だが超というほどではない。ちょっと癖があり好みは分かれそう。'
   },
   {
      name: '新政　立春朝搾り',
      sp_name: '純米生原酒',
      rice_per: '60',
      sake_per: '±0',
      assessment: '4',
      detail: '香りと味が深く、ちょっと味の濃いめのアテじゃないとお酒に負ける。'
   },
   {
      name: '玉川 Time Machine 1712',
      sp_name: '純米酒',
      rice_per: '88',
      sake_per: '-90',
      assessment: '4',
      detail: 'そのまま飲むとかなり甘いが、アイスクリームに書けて食べると笑ってしまうほど美味。'
   },
   {
      name: '伊根満開（赤米酒）',
      sp_name: '赤米酒',
      rice_per: '?',
      sake_per: '-18',
      assessment: '3',
      detail: '古代米を使ったかなり酸味の強いお酒。そのままで飲むより熱燗の方が美味いかも。'
   },
   {
      name: '若鶴　特別純米　雄山錦',
      sp_name: '純米大吟醸',
      rice_per: '45',
      sake_per: '4',
      assessment: '4',
      detail: 'かなり美味。大抵のアテにも合うと思う。甘党・辛党隔てなく飲めそう。'
   },
   {
      name: '龍神　純米大吟醸　山田錦',
      sp_name: '純米大吟醸',
      rice_per: '48',
      sake_per: '±0',
      assessment: '5',
      detail: '名前に反して結構甘め。大吟醸らしくフルーティな口当たりで飲みやすい。'
   }
];
