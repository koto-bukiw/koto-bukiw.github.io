// 問題4：言い換え類義（Parafrase / Sinonim）
// JLPT N5 レベルの言い換え類義問題
// 【】内の言葉と同じ意味の表現を選ぶ
const iikaeData = [
  {
    id: 1,
    question: "この　テストは　【かんたん】です。",
    highlight: "かんたん",
    options: ["やさしい", "むずかしい", "ながい", "みじかい"],
    answer: 0,
    translation: "Tes ini mudah. → Sinonim dari 'kantan'?"
  },
  {
    id: 2,
    question: "きのうは　とても　【さむかった】です。",
    highlight: "さむかった",
    options: ["あつかった", "すずしかった", "つめたかった", "あたたかかった"],
    answer: 2,
    translation: "Kemarin sangat dingin. → Sinonim dari 'samukatta'?"
  },
  {
    id: 3,
    question: "わたしの　へやは　【ひろい】です。",
    highlight: "ひろい",
    options: ["おおきい", "せまい", "ちいさい", "ながい"],
    answer: 0,
    translation: "Kamar saya luas. → Sinonim dari 'hiroi'?"
  },
  {
    id: 4,
    question: "これは　【たいへん】です。",
    highlight: "たいへん",
    options: ["かんたん", "おもしろい", "とても　むずかしい", "たのしい"],
    answer: 2,
    translation: "Ini berat/sulit. → Sinonim dari 'taihen'?"
  },
  {
    id: 5,
    question: "あした　【やすみ】です。",
    highlight: "やすみ",
    options: ["しごとの　ひ", "がっこうが　ない　ひ", "べんきょうの　ひ", "しけんの　ひ"],
    answer: 1,
    translation: "Besok libur. → Sinonim dari 'yasumi'?"
  },
  {
    id: 6,
    question: "この　りょうりは　【おいしい】です。",
    highlight: "おいしい",
    options: ["まずい", "あじが　いい", "からい", "あまい"],
    answer: 1,
    translation: "Masakan ini enak. → Sinonim dari 'oishii'?"
  },
  {
    id: 7,
    question: "えきまで　【すぐ】です。",
    highlight: "すぐ",
    options: ["とおい", "ちかい", "おそい", "はやい"],
    answer: 1,
    translation: "Sampai stasiun dekat. → Sinonim dari 'sugu'?"
  },
  {
    id: 8,
    question: "わたしは　にほんごが　【じょうず】です。",
    highlight: "じょうず",
    options: ["うまい", "へた", "わるい", "だめ"],
    answer: 0,
    translation: "Saya pandai bahasa Jepang. → Sinonim dari 'jouzu'?"
  },
  {
    id: 9,
    question: "この　えいがは　【つまらない】です。",
    highlight: "つまらない",
    options: ["おもしろくない", "たのしい", "すごい", "きれい"],
    answer: 0,
    translation: "Film ini membosankan. → Sinonim dari 'tsumaranai'?"
  },
  {
    id: 10,
    question: "【たくさん】の　ひとが　います。",
    highlight: "たくさん",
    options: ["すこし", "おおぜい", "ひとり", "ふたり"],
    answer: 1,
    translation: "Ada banyak orang. → Sinonim dari 'takusan'?"
  },
  {
    id: 11,
    question: "この　しごとは　【はやく】おわりました。",
    highlight: "はやく",
    options: ["おそく", "ゆっくり", "すぐに", "あとで"],
    answer: 2,
    translation: "Pekerjaan ini selesai cepat. → Sinonim dari 'hayaku'?"
  },
  {
    id: 12,
    question: "その　はなしは　【ほんとう】ですか。",
    highlight: "ほんとう",
    options: ["うそ", "じつ", "ちがう", "まちがい"],
    answer: 1,
    translation: "Apakah cerita itu benar? → Sinonim dari 'hontou'?"
  },
  {
    id: 13,
    question: "きのう　【ぐあいが　わるかった】です。",
    highlight: "ぐあいが　わるかった",
    options: ["げんきだった", "びょうきだった", "いそがしかった", "ひまだった"],
    answer: 1,
    translation: "Kemarin kondisinya buruk. → Sinonim dari 'guai ga warukatta'?"
  },
  {
    id: 14,
    question: "この　へやは　【きれい】です。",
    highlight: "きれい",
    options: ["きたない", "うつくしい", "ふるい", "くらい"],
    answer: 1,
    translation: "Kamar ini bersih/indah. → Sinonim dari 'kirei'?"
  },
  {
    id: 15,
    question: "かれは　【いつも】おそいです。",
    highlight: "いつも",
    options: ["ときどき", "まいかい", "たまに", "ぜんぜん"],
    answer: 1,
    translation: "Dia selalu terlambat. → Sinonim dari 'itsumo'?"
  },
  {
    id: 16,
    question: "この　みちを　【まっすぐ】いってください。",
    highlight: "まっすぐ",
    options: ["みぎに", "ひだりに", "まがらないで", "もどって"],
    answer: 2,
    translation: "Tolong jalan lurus di jalan ini. → Sinonim dari 'massugu'?"
  },
  {
    id: 17,
    question: "やまださんは　【にぎやか】な　ひとです。",
    highlight: "にぎやか",
    options: ["しずか", "あかるくて　たのしい", "こわい", "つよい"],
    answer: 1,
    translation: "Yamada-san orangnya ramai. → Sinonim dari 'nigiyaka'?"
  },
  {
    id: 18,
    question: "この　もんだいは　【やさしい】です。",
    highlight: "やさしい",
    options: ["むずかしくない", "むずかしい", "わからない", "ふくざつ"],
    answer: 0,
    translation: "Soal ini mudah. → Sinonim dari 'yasashii'?"
  },
  {
    id: 19,
    question: "【しばらく】　まってください。",
    highlight: "しばらく",
    options: ["ずっと", "すこしの　あいだ", "いつまでも", "ながく"],
    answer: 1,
    translation: "Tolong tunggu sebentar. → Sinonim dari 'shibaraku'?"
  },
  {
    id: 20,
    question: "この　かばんは　【じょうぶ】です。",
    highlight: "じょうぶ",
    options: ["よわい", "つよい", "かるい", "おもい"],
    answer: 1,
    translation: "Tas ini kuat. → Sinonim dari 'joubu'?"
  }
];
