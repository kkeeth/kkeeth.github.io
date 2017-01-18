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
      id: 1,
      name: '銀嶺月山（ぎんれいがっさん）',
      sp_name: '純米酒',
      rice_per: '80',
      sake_per: '±0',
      assessment: 3,
      detail: '可もなく不可もなし。'
   },
   {
      id: 2,
      name: '獺祭　純米大吟醸　磨き二割三分',
      sp_name: '純米大吟醸',
      rice_per: '23',
      sake_per: '+4',
      assessment: 5,
      detail: '今まで飲んできた中ではダントツの1位！'
   },
   {
      id: 3,
      name: '純米生酒 浦霞（うらかすみ）',
      sp_name: '純米酒 生酒',
      rice_per: '65',
      sake_per: '+1.5',
      assessment: 4,
      detail: '飲みやすくかなり清涼感がある。でもしっかり味もする。'
   },
   {
      id: 4,
      name: '特別純米酒　田酒（でんしゅ）',
      sp_name: '特別純米酒',
      rice_per: '55',
      sake_per: '±0',
      assessment: 4,
      detail: 'すっきりした味わいで料理にも合う。'
   },
   {
      id: 5,
      name: '栄光冨士　純米吟醸しぼりたて　無濾過生原酒　仙龍',
      sp_name: '純米吟醸',
      rice_per: '60',
      sake_per: '±0',
      assessment: 4,
      detail: '結構香りが強め。魚よりも肉や揚げ物に合うかも。'
   },
   {
      id: 6,
      name: '熟成古酒　山吹ゴールド',
      sp_name: '清酒（熟成古酒）',
      rice_per: '?',
      sake_per: '?',
      assessment: 5,
      detail: '味、香りともに文句なし！オススメのお酒。'
   }
];
