// 問題2：表記（ひょうき）- Penulisan
// JLPT N5 レベルの表記問題（ひらがな→正しい漢字/カタカナを選ぶ）
// 各問題: question=問題文（対象部分を【】で囲む）, options=選択肢4つ, answer=正解のインデックス(0-3)
const hyoukiData = [
  {
    id: 1,
    question: "わたしは　まいにち　【ぎゅうにゅう】を　のみます。",
    highlight: "ぎゅうにゅう",
    options: ["牛乳", "午乳", "牛入", "午入"],
    answer: 0,
    translation: "Saya minum susu setiap hari."
  },
  {
    id: 2,
    question: "【えき】の　ちかくに　すんでいます。",
    highlight: "えき",
    options: ["駅", "液", "益", "疫"],
    answer: 0,
    translation: "Saya tinggal di dekat stasiun."
  },
  {
    id: 3,
    question: "きのう　【てがみ】を　かきました。",
    highlight: "てがみ",
    options: ["手紙", "手神", "出紙", "手上"],
    answer: 0,
    translation: "Kemarin saya menulis surat."
  },
  {
    id: 4,
    question: "わたしは　【くるま】で　いきます。",
    highlight: "くるま",
    options: ["軍", "庫", "車", "転"],
    answer: 2,
    translation: "Saya pergi dengan mobil."
  },
  {
    id: 5,
    question: "【つくえ】の　うえに　ほんが　あります。",
    highlight: "つくえ",
    options: ["杭", "机", "枝", "板"],
    answer: 1,
    translation: "Ada buku di atas meja."
  },
  {
    id: 6,
    question: "あの　【たてもの】は　びょういんです。",
    highlight: "たてもの",
    options: ["立物", "健物", "建物", "達物"],
    answer: 2,
    translation: "Gedung itu adalah rumah sakit."
  },
  {
    id: 7,
    question: "【かぜ】を　ひきました。",
    highlight: "かぜ",
    options: ["風邪", "風耶", "嵐", "風"],
    answer: 0,
    translation: "Saya masuk angin."
  },
  {
    id: 8,
    question: "この　【しゃしん】は　きれいです。",
    highlight: "しゃしん",
    options: ["写心", "写信", "写真", "社真"],
    answer: 2,
    translation: "Foto ini indah."
  },
  {
    id: 9,
    question: "にほんごの　【べんきょう】は　たのしいです。",
    highlight: "べんきょう",
    options: ["勉強", "勉教", "弁強", "便強"],
    answer: 0,
    translation: "Belajar bahasa Jepang itu menyenangkan."
  },
  {
    id: 10,
    question: "ここは　【びょういん】です。",
    highlight: "びょういん",
    options: ["美容院", "病院", "病員", "病因"],
    answer: 1,
    translation: "Di sini adalah rumah sakit."
  },
  {
    id: 11,
    question: "あの　【こうえん】で　あそびましょう。",
    highlight: "こうえん",
    options: ["公園", "公演", "後援", "講演"],
    answer: 0,
    translation: "Mari bermain di taman itu."
  },
  {
    id: 12,
    question: "【ちず】を　みてください。",
    highlight: "ちず",
    options: ["地図", "池図", "知図", "地頭"],
    answer: 0,
    translation: "Tolong lihat peta."
  },
  {
    id: 13,
    question: "きょう　【てんき】が　わるいです。",
    highlight: "てんき",
    options: ["電気", "天気", "天期", "天機"],
    answer: 1,
    translation: "Hari ini cuacanya buruk."
  },
  {
    id: 14,
    question: "【れすとらん】で　ばんごはんを　たべます。",
    highlight: "れすとらん",
    options: ["レストラム", "レストラン", "レスドラン", "レストタン"],
    answer: 1,
    translation: "Saya makan malam di restoran."
  },
  {
    id: 15,
    question: "【たいしかん】は　どこですか。",
    highlight: "たいしかん",
    options: ["大使舘", "大使館", "大仕館", "大師館"],
    answer: 1,
    translation: "Di mana kedutaan besar?"
  },
  {
    id: 16,
    question: "【でんわ】で　はなしました。",
    highlight: "でんわ",
    options: ["電話", "伝話", "電和", "電輪"],
    answer: 0,
    translation: "Saya berbicara lewat telepon."
  },
  {
    id: 17,
    question: "この　【りんご】は　おいしいです。",
    highlight: "りんご",
    options: ["リンゴ", "リンコ", "リムゴ", "リンギ"],
    answer: 0,
    translation: "Apel ini enak."
  },
  {
    id: 18,
    question: "【みぎ】に　まがってください。",
    highlight: "みぎ",
    options: ["石", "左", "右", "有"],
    answer: 2,
    translation: "Tolong belok ke kanan."
  },
  {
    id: 19,
    question: "まいにち　【しんぶん】を　よみます。",
    highlight: "しんぶん",
    options: ["新文", "新分", "新聞", "親聞"],
    answer: 2,
    translation: "Saya membaca koran setiap hari."
  },
  {
    id: 20,
    question: "【いもうと】は　がくせいです。",
    highlight: "いもうと",
    options: ["姉", "妹", "弟", "兄"],
    answer: 1,
    translation: "Adik perempuan saya adalah pelajar."
  }
];
