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
  },
    {
    id: 21,
    question: "【けさ】、コーヒーを　のみました。",
    highlight: "けさ",
    options: [
      "きのうの　あさ",
      "きょうの　あさ",
      "あしたの　あさ",
      "きのうの　よる"
    ],
    answer: 1,
    translation: "Pagi ini, saya minum kopi."
  },
  {
    id: 22,
    question: "【ゆうべ】、テレビを　みました。",
    highlight: "ゆうべ",
    options: [
      "きのうの　あさ",
      "きのうの　よる",
      "きょうの　あさ",
      "きょうの　よる"
    ],
    answer: 1,
    translation: "Tadi malam, saya menonton TV."
  },
  {
    id: 23,
    question: "この　へやは　【とても】　あついです。",
    highlight: "とても",
    options: [
      "たいへん",
      "すこし",
      "だんだん",
      "あまり"
    ],
    answer: 0,
    translation: "Kamar ini sangat panas."
  },
  {
    id: 24,
    question: "おかねが　【すこし】　あります。",
    highlight: "すこし",
    options: [
      "たくさん",
      "ちょっと",
      "いっぱい",
      "ぜんぜん"
    ],
    answer: 1,
    translation: "Ada sedikit uang."
  },
  {
    id: 25,
    question: "きのうは　ひとが　【たくさん】　いました。",
    highlight: "たくさん",
    options: [
      "すこし",
      "ちょっと",
      "いっぱい",
      "あまり"
    ],
    answer: 2,
    translation: "Kemarin ada banyak orang."
  },
  {
    id: 26,
    question: "わたしの　【りょうしん】は　とうきょうに　すんでいます。",
    highlight: "りょうしん",
    options: [
      "あにと　あね",
      "そふと　そぼ",
      "ちちと　はは",
      "おじと　おば"
    ],
    answer: 2,
    translation: "Orang tua saya tinggal di Tokyo."
  },
  {
    id: 27,
    question: "わたしは　りんごが　【だいすき】です。",
    highlight: "だいすき",
    options: [
      "いちばん　すき",
      "すこし　すき",
      "あまり　すきじゃない",
      "ぜんぜん　すきじゃない"
    ],
    answer: 0,
    translation: "Saya sangat menyukai apel."
  },
  {
    id: 28,
    question: "あそこで　【じどうしゃ】を　かいました。",
    highlight: "じどうしゃ",
    options: [
      "じてんしゃ",
      "でんしゃ",
      "くるま",
      "ひこうき"
    ],
    answer: 2,
    translation: "Saya membeli mobil di sana."
  },
  {
    id: 29,
    question: "えきで　【きっぷ】を　かいます。",
    highlight: "きっぷ",
    options: [
      "でんしゃに　のるための　かみ",
      "てがみに　はるための　かみ",
      "しゃしんを　とる　きかい",
      "じかんを　みる　きかい"
    ],
    answer: 0,
    translation: "Saya membeli tiket di stasiun."
  },
  {
    id: 30,
    question: "きょうは　【いそがしい】です。",
    highlight: "いそがしい",
    options: [
      "やすみです",
      "じかんが　ありません",
      "じかんが　あります",
      "びょうきです"
    ],
    answer: 1,
    translation: "Hari ini saya sibuk."
  },
  {
    id: 31,
    question: "あしたは　【ひま】です。",
    highlight: "ひま",
    options: [
      "やすみじゃ　ありません",
      "じかんが　ありません",
      "じかんが　あります",
      "しごとを　します"
    ],
    answer: 2,
    translation: "Besok saya senggang (ada waktu)."
  },
  {
    id: 32,
    question: "【さっき】、やまださんに　あいました。",
    highlight: "さっき",
    options: [
      "きのう",
      "すこし　まえ",
      "あした",
      "ずっと　まえ"
    ],
    answer: 1,
    translation: "Saya baru saja (beberapa saat yang lalu) bertemu Pak Yamada."
  },
  {
    id: 33,
    question: "この　みちを　【まっすぐ】　いって　ください。",
    highlight: "まっすぐ",
    options: [
      "まがらないで",
      "みぎに　まがって",
      "ひだりに　まがって",
      "とまって"
    ],
    answer: 0,
    translation: "Tolong jalan lurus di jalan ini (tanpa berbelok)."
  },
  {
    id: 34,
    question: "あしたは　がっこうの　【やすみ】です。",
    highlight: "やすみ",
    options: [
      "テスト",
      "じゅぎょうが　ありません",
      "べんきょうを　します",
      "うんどうかい"
    ],
    answer: 1,
    translation: "Besok adalah hari libur sekolah."
  },
  {
    id: 35,
    question: "【おなかが　すきました】ね。",
    highlight: "おなかが　すきました",
    options: [
      "なにか　のみたいです",
      "なにか　たべたいです",
      "どこかへ　いきたいです",
      "ねたいです"
    ],
    answer: 1,
    translation: "Perut saya lapar (ingin makan sesuatu), ya."
  },
  {
    id: 36,
    question: "【のどが　かわきました】ね。",
    highlight: "のどが　かわきました",
    options: [
      "なにか　のみたいです",
      "なにか　たべたいです",
      "どこかへ　いきたいです",
      "ねたいです"
    ],
    answer: 0,
    translation: "Saya haus (ingin minum sesuatu), ya."
  },
  {
    id: 37,
    question: "きのう、あたらしい　【ようふく】を　かいました。",
    highlight: "ようふく",
    options: [
      "くつ",
      "かばん",
      "ぼうし",
      "シャツや　ズボン"
    ],
    answer: 3,
    translation: "Kemarin saya membeli pakaian baru."
  },
  {
    id: 38,
    question: "ここは　【きっさてん】です。",
    highlight: "きっさてん",
    options: [
      "ほんを　よむ　ところ",
      "コーヒーを　のむ　ところ",
      "くすりを　かう　ところ",
      "きってを　かう　ところ"
    ],
    answer: 1,
    translation: "Ini adalah kafe (tempat minum kopi)."
  },
  {
    id: 39,
    question: "そこは　【ゆうびんきょく】です。",
    highlight: "ゆうびんきょく",
    options: [
      "ほんを　よむ　ところ",
      "コーヒーを　のむ　ところ",
      "くすりを　かう　ところ",
      "きってを　かう　ところ"
    ],
    answer: 3,
    translation: "Itu adalah kantor pos (tempat membeli perangko)."
  },
  {
    id: 40,
    question: "ともだちに　カメラを　【かりました】。",
    highlight: "かりました",
    options: [
      "ともだちに　カメラを　あげました",
      "ともだちから　カメラを　もらいました",
      "ともだちは　わたしに　カメラを　かしました",
      "わたしは　ともだちに　カメラを　かしました"
    ],
    answer: 2,
    translation: "Saya meminjam kamera dari teman (Teman meminjamkan kamera kepada saya)."
  },
   {
    id: 41,
    question: "【あさごはん】を　たべました。",
    highlight: "あさごはん",
    options: [
      "あさの　ごはん",
      "ひるの　ごはん",
      "よるの　ごはん",
      "おやつの　じかん"
    ],
    answer: 0,
    translation: "Saya sudah makan sarapan (makan pagi)."
  },
  {
    id: 42,
    question: "あそこは　【としょかん】です。",
    highlight: "としょかん",
    options: [
      "くすりを　かう　ところ",
      "ほんを　よむ　ところ",
      "えいがを　みる　ところ",
      "おどる　ところ"
    ],
    answer: 1,
    translation: "Itu adalah perpustakaan (tempat membaca buku)."
  },
  {
    id: 43,
    question: "あの　ひとは　わたしの　【そふ】です。",
    highlight: "そふ",
    options: [
      "ちちの　あに",
      "ははの　あね",
      "ちちの　ちち",
      "ははの　いもうと"
    ],
    answer: 2,
    translation: "Orang itu adalah kakek saya (ayah dari ayah/ibu saya)."
  },
  {
    id: 44,
    question: "きのう、へやを　【そうじしました】。",
    highlight: "そうじしました",
    options: [
      "きれいに　しました",
      "きたなく　しました",
      "ひろく　しました",
      "せまく　しました"
    ],
    answer: 0,
    translation: "Kemarin, saya membersihkan kamar."
  },
  {
    id: 45,
    question: "きょうは　【いい　てんき】ですね。",
    highlight: "いい　てんき",
    options: [
      "あめが　ふって　います",
      "はれて　います",
      "ゆきが　ふって　います",
      "くもって　います"
    ],
    answer: 1,
    translation: "Hari ini cuacanya bagus (cerah), ya."
  },
  {
    id: 46,
    question: "わたしは　うたが　【じょうず】です。",
    highlight: "じょうず",
    options: [
      "へたです",
      "きらいです",
      "うまいです",
      "よくないです"
    ],
    answer: 2,
    translation: "Saya pandai (bagus) dalam bernyanyi."
  },
  {
    id: 47,
    question: "えんぴつを　【なくしました】。",
    highlight: "なくしました",
    options: [
      "どこに　あるか　わかりません",
      "だれかに　あげました",
      "あたらしいのを　かいました",
      "みつけました"
    ],
    answer: 0,
    translation: "Saya kehilangan pensil (tidak tahu ada di mana)."
  },
  {
    id: 48,
    question: "あした、　【せんたく】を　します。",
    highlight: "せんたく",
    options: [
      "ふくを　あらいます",
      "へやを　きれいに　します",
      "りょうりを　つくります",
      "かいものを　します"
    ],
    answer: 0,
    translation: "Besok, saya akan mencuci baju."
  },
  {
    id: 49,
    question: "こうえんを　【さんぽしました】。",
    highlight: "さんぽしました",
    options: [
      "はしりました",
      "あるきました",
      "やすみました",
      "あそびました"
    ],
    answer: 1,
    translation: "Saya berjalan-jalan di taman."
  },
  {
    id: 50,
    question: "この　ペンと　あの　ペンは　【おなじ】です。",
    highlight: "おなじ",
    options: [
      "ちがいます",
      "ちがいません",
      "にて　いません",
      "よく　ないです"
    ],
    answer: 1,
    translation: "Pulpen ini dan pulpen itu sama (tidak berbeda)."
  },
  {
    id: 51,
    question: "この　パンは　【まずい】です。",
    highlight: "まずい",
    options: [
      "おいしいです",
      "おいしく　ないです",
      "あまいです",
      "からいです"
    ],
    answer: 1,
    translation: "Roti ini tidak enak."
  },
  {
    id: 52,
    question: "がっこうは　えきから　【ちかい】です。",
    highlight: "ちかい",
    options: [
      "とおく　ないです",
      "とおいです",
      "ひろいです",
      "せまいです"
    ],
    answer: 0,
    translation: "Sekolah dekat (tidak jauh) dari stasiun."
  },
  {
    id: 53,
    question: "きょうの　じゅぎょうは　【おわりました】。",
    highlight: "おわりました",
    options: [
      "いまから　はじまります",
      "もう　ありません",
      "まだ　あります",
      "これから　します"
    ],
    answer: 1,
    translation: "Pelajaran hari ini sudah selesai (sudah tidak ada lagi)."
  },
  {
    id: 54,
    question: "この　まちは　【にぎやか】ですね。",
    highlight: "にぎやか",
    options: [
      "ひとが　あまり　いません",
      "ひとが　たくさん　います",
      "とても　しずかです",
      "なにも　ありません"
    ],
    answer: 1,
    translation: "Kota ini ramai (banyak orang), ya."
  },
  {
    id: 55,
    question: "あの　ひとは　【おまわりさん】です。",
    highlight: "おまわりさん",
    options: [
      "けいかん",
      "いしゃ",
      "せんせい",
      "かいしゃいん"
    ],
    answer: 0,
    translation: "Orang itu adalah polisi."
  },
  {
    id: 56,
    question: "わたしは　【まいばん】　テレビを　みます。",
    highlight: "まいばん",
    options: [
      "まいにちの　あさ",
      "まいにちの　ひる",
      "まいにちの　よる",
      "まいしゅうの　よる"
    ],
    answer: 2,
    translation: "Saya menonton TV setiap malam."
  },
  {
    id: 57,
    question: "テーブルの　【そば】に　いすが　あります。",
    highlight: "そば",
    options: [
      "うえ",
      "した",
      "ちかく",
      "なか"
    ],
    answer: 2,
    translation: "Ada kursi di samping/dekat meja."
  },
  {
    id: 58,
    question: "あの　ひとは　【ゆうめい】です。",
    highlight: "ゆうめい",
    options: [
      "みんな　あの　ひとを　しっています",
      "だれも　あの　ひとを　しりません",
      "とても　しんせつな　ひとです",
      "とても　つめたい　ひとです"
    ],
    answer: 0,
    translation: "Orang itu terkenal (semua orang mengenalnya)."
  },
  {
    id: 59,
    question: "ははに　とけいを　【もらいました】。",
    highlight: "もらいました",
    options: [
      "わたしは　ははに　とけいを　あげました",
      "ははは　わたしに　とけいを　くれました",
      "わたしは　ははに　とけいを　かしました",
      "ははは　わたしに　とけいを　かりました"
    ],
    answer: 1,
    translation: "Saya menerima jam tangan dari ibu (Ibu memberikan jam tangan kepada saya)."
  },
  {
    id: 60,
    question: "この　へやは　【くらい】です。",
    highlight: "くらい",
    options: [
      "あかるいですが",
      "あかるくないです",
      "ひろいです",
      "せまいです"
    ],
    answer: 1,
    translation: "Kamar ini gelap (tidak terang)."
  },
    {
    id: 61,
    question: "この　えいがは　【つまらない】です。",
    highlight: "つまらない",
    options: [
      "おもしろくないです",
      "たのしいです",
      "むずかしいです",
      "やさしいです"
    ],
    answer: 0,
    translation: "Film ini membosankan (tidak menarik)."
  },
  {
    id: 62,
    question: "わたしは　さかなが　【きらい】です。",
    highlight: "きらい",
    options: [
      "とても　すきです",
      "すきじゃないです",
      "おいしいです",
      "まずいです"
    ],
    answer: 1,
    translation: "Saya benci (tidak suka) ikan."
  },
  {
    id: 63,
    question: "えきまで　【あるいて】　いきます。",
    highlight: "あるいて",
    options: [
      "はしって　いきます",
      "のりものに　のって　いきます",
      "のりものに　のらないで　いきます",
      "いそいで　いきます"
    ],
    answer: 2,
    translation: "Saya pergi ke stasiun dengan berjalan kaki (tanpa naik kendaraan)."
  },
  {
    id: 64,
    question: "きのう、しゅくだいを　【わすれました】。",
    highlight: "わすれました",
    options: [
      "いえに　おいて　きました",
      "がっこうに　もって　きました",
      "きれいに　かきました",
      "なくして　しまいました"
    ],
    answer: 0,
    translation: "Kemarin, saya lupa PR saya (meninggalkannya di rumah)."
  },
  {
    id: 65,
    question: "この　へやは　【うるさい】です。",
    highlight: "うるさい",
    options: [
      "とても　しずかです",
      "しずかじゃないです",
      "ひろいです",
      "せまいです"
    ],
    answer: 1,
    translation: "Kamar ini berisik (tidak tenang)."
  },
  {
    id: 66,
    question: "パーティーに　ひとが　【おおぜい】　きました。",
    highlight: "おおぜい",
    options: [
      "たくさんの　ひと",
      "すこしの　ひと",
      "たくさんの　どうぶつ",
      "すこしの　どうぶつ"
    ],
    answer: 0,
    translation: "Banyak orang datang ke pesta."
  },
  {
    id: 67,
    question: "あしたは　【はれ】です。",
    highlight: "はれ",
    options: [
      "いい　てんきです",
      "あめが　ふります",
      "ゆきが　ふります",
      "くもります"
    ],
    answer: 0,
    translation: "Besok cerah (cuaca bagus)."
  },
  {
    id: 68,
    question: "みずを　【いっぱい】　のみました。",
    highlight: "いっぱい",
    options: [
      "すこし",
      "ぜんぜん",
      "たくさん",
      "あまり"
    ],
    answer: 2,
    translation: "Saya minum banyak air."
  },
  {
    id: 69,
    question: "クラスで　わたしが　【いちばん】　せが　たかいです。",
    highlight: "いちばん",
    options: [
      "わたしは　せが　ひくいです",
      "わたしより　せが　たかい　ひとは　いません",
      "みんな　わたしより　せが　たかいです",
      "わたしは　みんなと　おなじです"
    ],
    answer: 1,
    translation: "Saya yang paling tinggi di kelas (tidak ada yang lebih tinggi dari saya)."
  },
  {
    id: 70,
    question: "【もうすぐ】　バスが　きます。",
    highlight: "もうすぐ",
    options: [
      "ずっと　まえに",
      "いま",
      "すこし　あとで",
      "あした"
    ],
    answer: 2,
    translation: "Sebentar lagi (sesaat lagi) busnya datang."
  },
  {
    id: 71,
    question: "わたしは　【まいあさ】　ろくじに　おきます。",
    highlight: "まいあさ",
    options: [
      "まいにちの　あさ",
      "まいにちの　ひる",
      "まいにちの　よる",
      "まいしゅうの　あさ"
    ],
    answer: 0,
    translation: "Saya bangun jam 6 setiap pagi."
  },
  {
    id: 72,
    question: "きのうは　【さむかった】です。",
    highlight: "さむかった",
    options: [
      "あたたかかったです",
      "あたたかく　なかったです",
      "あつかったです",
      "すずしかったです"
    ],
    answer: 1,
    translation: "Kemarin dingin (tidak hangat)."
  },
  {
    id: 73,
    question: "きょうしつに　【だれも】　いません。",
    highlight: "だれも",
    options: [
      "ひとが　います",
      "ひとが　いません",
      "ものが　あります",
      "ものが　ありません"
    ],
    answer: 1,
    translation: "Tidak ada siapa pun (orang) di kelas."
  },
  {
    id: 74,
    question: "【いろいろな】　ほんを　よみました。",
    highlight: "いろいろな",
    options: [
      "おなじ",
      "ひとつの",
      "たくさんの　しゅるいの",
      "すこしの"
    ],
    answer: 2,
    translation: "Saya membaca berbagai macam (banyak jenis) buku."
  },
  {
    id: 75,
    question: "この　くつは　【じょうぶ】です。",
    highlight: "じょうぶ",
    options: [
      "すぐに　こわれません",
      "すぐに　こわれます",
      "きれいです",
      "きたないです"
    ],
    answer: 0,
    translation: "Sepatu ini awet/kuat (tidak cepat rusak)."
  },
  {
    id: 76,
    question: "ドアを　【しめて】　ください。",
    highlight: "しめて",
    options: [
      "あけて",
      "あけないで",
      "こわして",
      "あらって"
    ],
    answer: 1,
    translation: "Tolong tutup (jangan buka) pintunya."
  },
  {
    id: 77,
    question: "その　はなしは　【ききました】。",
    highlight: "ききました",
    options: [
      "しりません",
      "しっています",
      "わすれました",
      "はなしました"
    ],
    answer: 1,
    translation: "Saya sudah mendengar (tahu) cerita itu."
  },
  {
    id: 78,
    question: "テストは　【むずかしくない】です。",
    highlight: "むずかしくない",
    options: [
      "やさしいです",
      "むずかしいです",
      "ながいです",
      "みじかいです"
    ],
    answer: 0,
    translation: "Tes ini tidak sulit (mudah)."
  },
  {
    id: 79,
    question: "これは　【たいせつ】な　ほんです。",
    highlight: "たいせつ",
    options: [
      "だいじ",
      "きれい",
      "ゆうめい",
      "ひま"
    ],
    answer: 0,
    translation: "Ini adalah buku yang penting."
  },
  {
    id: 80,
    question: "ここは　【きけん】です。",
    highlight: "きけん",
    options: [
      "あんぜんです",
      "あぶないです",
      "ひろいです",
      "せまいです"
    ],
    answer: 1,
    translation: "Di sini bahaya (berbahaya)."
  },
    {
    id: 81,
    question: "わたしは　【いつも】　あさごはんを　たべます。",
    highlight: "いつも",
    options: [
      "まいにち",
      "ときどき",
      "あまり",
      "ぜんぜん"
    ],
    answer: 0,
    translation: "Saya selalu (setiap hari) makan sarapan."
  },
  {
    id: 82,
    question: "きのう、あたらしい　【かばん】を　かいました。",
    highlight: "かばん",
    options: [
      "くつ",
      "ぼうし",
      "ふく",
      "にもつを　いれる　もの"
    ],
    answer: 3,
    translation: "Kemarin, saya membeli tas (barang untuk memasukkan barang bawaan) baru."
  },
  {
    id: 83,
    question: "わたしは　【よく】　この　みせに　きます。",
    highlight: "よく",
    options: [
      "なんども",
      "いちどだけ",
      "ぜんぜん",
      "あまり"
    ],
    answer: 0,
    translation: "Saya sering (berkali-kali) datang ke toko ini."
  },
  {
    id: 84,
    question: "きのうは　【すずしかった】です。",
    highlight: "すずしかった",
    options: [
      "あつくなかったです",
      "あつかったです",
      "さむかったです",
      "あたたかくなかったです"
    ],
    answer: 0,
    translation: "Kemarin sejuk (tidak panas)."
  },
  {
    id: 85,
    question: "えきまで　【はしって】　いきました。",
    highlight: "はしって",
    options: [
      "ゆっくり　あるいて",
      "いそいで",
      "くるまに　のって",
      "とまって"
    ],
    answer: 1,
    translation: "Saya pergi berlari (dengan terburu-buru) ke stasiun."
  },
  {
    id: 86,
    question: "この　カメラは　【やすい】です。",
    highlight: "やすい",
    options: [
      "たかくないです",
      "たかいです",
      "あたらしくないです",
      "あたらしいです"
    ],
    answer: 0,
    translation: "Kamera ini murah (tidak mahal)."
  },
  {
    id: 87,
    question: "あの　ひとは　【おじいさん】です。",
    highlight: "おじいさん",
    options: [
      "わかい　おとこの　ひと",
      "わかい　おんなの　ひと",
      "としを　とった　おとこの　ひと",
      "としを　とった　おんなの　ひと"
    ],
    answer: 2,
    translation: "Orang itu adalah kakek (pria yang sudah tua)."
  },
  {
    id: 88,
    question: "へやを　【でました】。",
    highlight: "でました",
    options: [
      "へやに　はいりました",
      "へやの　そとに　いきました",
      "へやの　なかに　いました",
      "へやを　つくりました"
    ],
    answer: 1,
    translation: "Saya keluar ruangan (pergi ke luar ruangan)."
  },
  {
    id: 89,
    question: "【おととい】、ともだちに　あいました。",
    highlight: "おととい",
    options: [
      "きのう",
      "きのうの　きのう",
      "あした",
      "あしたの　あした"
    ],
    answer: 1,
    translation: "Kemarin lusa (sehari sebelum kemarin), saya bertemu teman."
  },
  {
    id: 90,
    question: "【あさって】、くにへ　かえります。",
    highlight: "あさって",
    options: [
      "あした",
      "あしたの　あした",
      "きのう",
      "きのうの　きのう"
    ],
    answer: 1,
    translation: "Besok lusa (sehari setelah besok), saya akan pulang ke negara asal."
  },
  {
    id: 91,
    question: "あの　ひとは　【びょうき】です。",
    highlight: "びょうき",
    options: [
      "げんきです",
      "からだの　ぐあいが　わるいです",
      "とても　いそがしいです",
      "ひまです"
    ],
    answer: 1,
    translation: "Orang itu sakit (kondisi badannya sedang buruk)."
  },
  {
    id: 92,
    question: "みずを　【はんぶん】　のみました。",
    highlight: "はんぶん",
    options: [
      "ぜんぶ",
      "すこしだけ",
      "１／２（にぶんのいち）",
      "ぜんぜん"
    ],
    answer: 2,
    translation: "Saya minum air setengah (1/2)."
  },
  {
    id: 93,
    question: "きょうは　【かぜを　ひきました】。",
    highlight: "かぜを　ひきました",
    options: [
      "びょうきに　なりました",
      "げんきに　なりました",
      "けがを　しました",
      "おなかが　すきました"
    ],
    answer: 0,
    translation: "Hari ini saya masuk angin/flu (menjadi sakit)."
  },
  {
    id: 94,
    question: "ここは　【しょくどう】です。",
    highlight: "しょくどう",
    options: [
      "ほんを　よむ　ところ",
      "ごはんを　たべる　ところ",
      "えいがを　みる　ところ",
      "ねる　ところ"
    ],
    answer: 1,
    translation: "Ini adalah ruang makan/kantin (tempat makan nasi)."
  },
  {
    id: 95,
    question: "わたしは　【おふろ】に　はいります。",
    highlight: "おふろ",
    options: [
      "からだを　あらう　ところ",
      "ふくを　あらう　ところ",
      "ほんを　よむ　ところ",
      "テレビを　みる　ところ"
    ],
    answer: 0,
    translation: "Saya masuk ke kamar mandi/bak mandi (tempat untuk mencuci badan)."
  },
  {
    id: 96,
    question: "あの　ひとは　【おとな】です。",
    highlight: "おとな",
    options: [
      "こどもです",
      "こどもじゃ　ありません",
      "おとこの　ひとです",
      "おんなの　ひとです"
    ],
    answer: 1,
    translation: "Orang itu adalah orang dewasa (bukan anak-anak)."
  },
  {
    id: 97,
    question: "この　くるまは　【はやい】です。",
    highlight: "はやい",
    options: [
      "おそくないです",
      "おそいです",
      "あたらしくないです",
      "あたらしいです"
    ],
    answer: 0,
    translation: "Mobil ini cepat (tidak lambat)."
  },
  {
    id: 98,
    question: "【だんだん】　あたたかく　なりました。",
    highlight: "だんだん",
    options: [
      "すぐに",
      "すこしずつ",
      "いつも",
      "ぜんぜん"
    ],
    answer: 1,
    translation: "Cuaca menjadi hangat secara perlahan (sedikit demi sedikit)."
  },
  {
    id: 99,
    question: "えいごが　【すこし】　わかります。",
    highlight: "すこし",
    options: [
      "たくさん",
      "ちょっと",
      "ぜんぶ",
      "ぜんぜん"
    ],
    answer: 1,
    translation: "Saya mengerti sedikit (agak) bahasa Inggris."
  },
  {
    id: 100,
    question: "その　はこを　【あけて】　ください。",
    highlight: "あけて",
    options: [
      "しめないで",
      "しめて",
      "もって",
      "おいて"
    ],
    answer: 0,
    translation: "Tolong buka (jangan tutup) kotak itu."
  }
];
