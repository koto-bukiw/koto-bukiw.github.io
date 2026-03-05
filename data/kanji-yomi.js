// 問題1：漢字読み（Membaca Kanji）
// JLPT N5 レベルの漢字読み問題
// 各問題: question=問題文（漢字にアンダーライン部分を【】で囲む）, options=選択肢4つ, answer=正解のインデックス(0-3)
const kanjiYomiData = [
  {
    id: 1,
    question: "わたしは　まいにち　【学校】に　いきます。",
    highlight: "学校",
    options: ["がっこう", "がくこう", "かっこう", "がっこ"],
    answer: 0,
    translation: "Saya pergi ke sekolah setiap hari."
  },
  {
    id: 2,
    question: "きょうは　【天気】が　いいです。",
    highlight: "天気",
    options: ["てんさ", "でんき", "てんき", "てんぎ"],
    answer: 2,
    translation: "Hari ini cuacanya bagus."
  },
  {
    id: 3,
    question: "【電車】で　かいしゃに　いきます。",
    highlight: "電車",
    options: ["でんしゃ", "でんち", "てんしゃ", "でんくるま"],
    answer: 0,
    translation: "Saya pergi ke kantor naik kereta."
  },
  {
    id: 4,
    question: "この　【本】は　おもしろいです。",
    highlight: "本",
    options: ["もと", "ぼん", "ほん", "ぽん"],
    answer: 2,
    translation: "Buku ini menarik."
  },
  {
    id: 5,
    question: "【食べもの】を　かいました。",
    highlight: "食べもの",
    options: ["しょくべもの", "たべもの", "くいもの", "しょべもの"],
    answer: 1,
    translation: "Saya membeli makanan."
  },
  {
    id: 6,
    question: "えきの　【前】で　まっています。",
    highlight: "前",
    options: ["うしろ", "まえ", "あと", "さき"],
    answer: 1,
    translation: "Saya menunggu di depan stasiun."
  },
  {
    id: 7,
    question: "【水】を　ください。",
    highlight: "水",
    options: ["すい", "みず", "もず", "みす"],
    answer: 1,
    translation: "Tolong berikan air."
  },
  {
    id: 8,
    question: "【先生】は　とても　やさしいです。",
    highlight: "先生",
    options: ["せんせい", "せいせん", "さんせい", "せんしょう"],
    answer: 0,
    translation: "Guru itu sangat baik."
  },
  {
    id: 9,
    question: "【大きい】いえに　すみたいです。",
    highlight: "大きい",
    options: ["たかい", "おおきい", "ちかい", "おきい"],
    answer: 1,
    translation: "Saya ingin tinggal di rumah yang besar."
  },
  {
    id: 10,
    question: "【友だち】と　えいがを　みました。",
    highlight: "友だち",
    options: ["ゆうだち", "ともだち", "ゆだち", "とだち"],
    answer: 1,
    translation: "Saya menonton film bersama teman."
  },
  {
    id: 11,
    question: "あの　【山】は　たかいです。",
    highlight: "山",
    options: ["さん", "やま", "かわ", "もり"],
    answer: 1,
    translation: "Gunung itu tinggi."
  },
  {
    id: 12,
    question: "【毎朝】　はやく　おきます。",
    highlight: "毎朝",
    options: ["まいちょう", "まいあさ", "めいあさ", "まいさ"],
    answer: 1,
    translation: "Saya bangun pagi setiap hari."
  },
  {
    id: 13,
    question: "【外】は　さむいです。",
    highlight: "外",
    options: ["がい", "うち", "そと", "ほか"],
    answer: 2,
    translation: "Di luar dingin."
  },
  {
    id: 14,
    question: "【百円】の　きってを　ください。",
    highlight: "百円",
    options: ["ひゃくえん", "びゃくえん", "ひゃくまる", "はくえん"],
    answer: 0,
    translation: "Tolong berikan perangko seratus yen."
  },
  {
    id: 15,
    question: "わたしの　【父】は　いしゃです。",
    highlight: "父",
    options: ["はは", "ちち", "あに", "おとうと"],
    answer: 1,
    translation: "Ayah saya adalah dokter."
  },
  {
    id: 16,
    question: "【来月】　にほんに　いきます。",
    highlight: "来月",
    options: ["きげつ", "らいげつ", "らいがつ", "くるつき"],
    answer: 1,
    translation: "Bulan depan saya pergi ke Jepang."
  },
  {
    id: 17,
    question: "あの　【白い】ねこは　かわいいです。",
    highlight: "白い",
    options: ["くろい", "あかい", "しろい", "あおい"],
    answer: 2,
    translation: "Kucing putih itu lucu."
  },
  {
    id: 18,
    question: "【午後】　三時に　あいましょう。",
    highlight: "午後",
    options: ["ごぜん", "ごご", "しょうご", "ひるご"],
    answer: 1,
    translation: "Mari bertemu jam 3 sore."
  },
  {
    id: 19,
    question: "【新しい】くつを　かいました。",
    highlight: "新しい",
    options: ["あたらしい", "やさしい", "うつくしい", "たのしい"],
    answer: 0,
    translation: "Saya membeli sepatu baru."
  },
  {
    id: 20,
    question: "【東】の　そらが　あかいです。",
    highlight: "東",
    options: ["にし", "みなみ", "きた", "ひがし"],
    answer: 3,
    translation: "Langit di timur berwarna merah."
  }
];
