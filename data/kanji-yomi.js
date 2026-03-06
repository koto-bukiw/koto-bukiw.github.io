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
  },
    {
    id: 21,
    question: "あの　ひとは　わたしの　【先生】です。",
    highlight: "先生",
    options: ["せんせい", "せんせ", "さんせい", "ぜんせい"],
    answer: 0,
    translation: "Orang itu adalah guru saya."
  },
  {
    id: 22,
    question: "あたらしい　【車】を　かいました。",
    highlight: "車",
    options: ["くろま", "くるま", "ぐるま", "こるま"],
    answer: 1,
    translation: "Saya membeli mobil baru."
  },
  {
    id: 23,
    question: "あさごはんに　パンを　【食】べます。",
    highlight: "食",
    options: ["の", "た", "み", "い"],
    answer: 1,
    translation: "Saya makan roti untuk sarapan."
  },
  {
    id: 24,
    question: "つめたい　【水】を　ください。",
    highlight: "水",
    options: ["みず", "おゆ", "みす", "すい"],
    answer: 0,
    translation: "Tolong beri saya air dingin."
  },
  {
    id: 25,
    question: "えきまで　【電車】で　いきます。",
    highlight: "電車",
    options: ["でんしゃ", "てんしゃ", "でんじゃ", "てんじゃ"],
    answer: 0,
    translation: "Saya pergi ke stasiun dengan kereta listrik."
  },
  {
    id: 26,
    question: "デパートで　かばんを　【買】いました。",
    highlight: "買",
    options: ["あ", "か", "い", "お"],
    answer: 1,
    translation: "Saya membeli tas di toserba."
  },
  {
    id: 27,
    question: "としょかんで　ほんを　【読】みます。",
    highlight: "読",
    options: ["の", "よ", "や", "ゆ"],
    answer: 1,
    translation: "Saya membaca buku di perpustakaan."
  },
  {
    id: 28,
    question: "かばんの　なかに　【本】が　あります。",
    highlight: "本",
    options: ["はん", "ほん", "ぽん", "ぼん"],
    answer: 1,
    translation: "Ada buku di dalam tas."
  },
  {
    id: 29,
    question: "きのう、えいがを　【見】ました。",
    highlight: "見",
    options: ["み", "き", "い", "し"],
    answer: 0,
    translation: "Kemarin, saya menonton film."
  },
  {
    id: 30,
    question: "きょうは　がっこうが　【休】みです。",
    highlight: "休",
    options: ["のの", "やす", "あそ", "たの"],
    answer: 1,
    translation: "Hari ini sekolah libur."
  },
  {
    id: 31,
    question: "あした、とうきょうへ　【行】きます。",
    highlight: "行",
    options: ["あ", "き", "い", "お"],
    answer: 2,
    translation: "Besok, saya pergi ke Tokyo."
  },
  {
    id: 32,
    question: "あしたは　【何】を　しますか。",
    highlight: "何",
    options: ["だれ", "どこ", "いつ", "なに"],
    answer: 3,
    translation: "Besok kamu akan melakukan apa?"
  },
  {
    id: 33,
    question: "この　シャツは　とても　【大】きいです。",
    highlight: "大",
    options: ["おお", "ちい", "たか", "なが"],
    answer: 0,
    translation: "Kemeja ini sangat besar."
  },
  {
    id: 34,
    question: "わたしの　へやは　【小】さいです。",
    highlight: "小",
    options: ["おお", "ちい", "ひろ", "せま"],
    answer: 1,
    translation: "Kamar saya kecil."
  },
  {
    id: 35,
    question: "この　とけいは　すこし　【高】いです。",
    highlight: "高",
    options: ["やす", "ふる", "あたら", "たか"],
    answer: 3,
    translation: "Jam tangan ini sedikit mahal."
  },
  {
    id: 36,
    question: "あの　みせは　くつが　【安】いです。",
    highlight: "安",
    options: ["やす", "たか", "あか", "あお"],
    answer: 0,
    translation: "Toko itu sepatunya murah."
  },
  {
    id: 37,
    question: "これは　【新】しい　パソコンです。",
    highlight: "新",
    options: ["ふる", "あたら", "ほし", "よろ"],
    answer: 1,
    translation: "Ini adalah komputer baru."
  },
  {
    id: 38,
    question: "あそこに　【古】い　おてらが　あります。",
    highlight: "古",
    options: ["ふる", "しろ", "くろ", "わか"],
    answer: 0,
    translation: "Di sana ada kuil kuno."
  },
  {
    id: 39,
    question: "ふじさんは　きれいな　【山】です。",
    highlight: "山",
    options: ["かわ", "うみ", "やま", "そら"],
    answer: 2,
    translation: "Gunung Fuji adalah gunung yang indah."
  },
  {
    id: 40,
    question: "あの　【川】で　さかなを　とります。",
    highlight: "川",
    options: ["かわ", "いけ", "うみ", "やま"],
    answer: 0,
    translation: "Saya menangkap ikan di sungai itu."
  },
  {
    id: 41,
    question: "あのかたは　【白】い　ぼうしを　かぶっています。",
    highlight: "白",
    options: ["あか", "しろ", "あお", "くろ"],
    answer: 1,
    translation: "Beliau memakai topi berwarna putih."
  },
  {
    id: 42,
    question: "かばんに　【赤】い　ペンが　あります。",
    highlight: "赤",
    options: ["あか", "くろ", "しろ", "あお"],
    answer: 0,
    translation: "Ada pena berwarna merah di dalam tas."
  },
  {
    id: 43,
    question: "きょうは　【青】い　そらが　きれいです。",
    highlight: "青",
    options: ["あか", "あお", "しろ", "くろ"],
    answer: 1,
    translation: "Hari ini langit biru terlihat indah."
  },
  {
    id: 44,
    question: "あの　【黒】い　ねこは　かわいいです。",
    highlight: "黒",
    options: ["あか", "あお", "しろ", "くろ"],
    answer: 3,
    translation: "Kucing hitam itu lucu."
  },
  {
    id: 45,
    question: "つぎの　かどを　【右】に　まがってください。",
    highlight: "右",
    options: ["ひだり", "みぎ", "まえ", "うしろ"],
    answer: 1,
    translation: "Tolong belok ke kanan di sudut berikutnya."
  },
  {
    id: 46,
    question: "ぎんこうの　【左】に　ゆうびんきょくが　あります。",
    highlight: "左",
    options: ["みぎ", "ひだり", "なか", "そと"],
    answer: 1,
    translation: "Ada kantor pos di sebelah kiri bank."
  },
  {
    id: 47,
    question: "えきの　【前】で　ともだちに　あいました。",
    highlight: "前",
    options: ["まえ", "うしろ", "よこ", "となり"],
    answer: 0,
    translation: "Saya bertemu teman di depan stasiun."
  },
  {
    id: 48,
    question: "わたしの　いえは、あの　ビルの　【後】ろです。",
    highlight: "後",
    options: ["まえ", "よこ", "うし", "うしろ"],
    answer: 2,
    translation: "Rumah saya ada di belakang gedung itu."
  },
  {
    id: 49,
    question: "きのう、【友】だちと　あそびました。",
    highlight: "友",
    options: ["とも", "こど", "おと", "から"],
    answer: 0,
    translation: "Kemarin, saya bermain bersama teman."
  },
  {
    id: 50,
    question: "にほんごで　【話】してください。",
    highlight: "話",
    options: ["か", "よ", "はな", "い"],
    answer: 2,
    translation: "Tolong berbicara dalam bahasa Jepang."
  },
    {
    id: 51,
    question: "わたしは　【日】曜日に　テニスを　します。",
    highlight: "日",
    options: ["にち", "ひ", "び", "じつ"],
    answer: 0,
    translation: "Saya bermain tenis pada hari Minggu."
  },
  {
    id: 52,
    question: "【月】曜日は　しごとが　あります。",
    highlight: "月",
    options: ["がつ", "げつ", "つき", "げん"],
    answer: 1,
    translation: "Pada hari Senin saya ada pekerjaan."
  },
  {
    id: 53,
    question: "【火】曜日に　びょういんへ　いきます。",
    highlight: "火",
    options: ["ひ", "か", "ほ", "び"],
    answer: 1,
    translation: "Saya pergi ke rumah sakit pada hari Selasa."
  },
  {
    id: 54,
    question: "【木】曜日は　だいがくに　いきます。",
    highlight: "木",
    options: ["き", "こ", "もく", "ぼく"],
    answer: 2,
    translation: "Saya pergi ke universitas pada hari Kamis."
  },
  {
    id: 55,
    question: "【金】曜日の　よるに　えいがを　みます。",
    highlight: "金",
    options: ["かね", "きん", "ぎん", "こん"],
    answer: 1,
    translation: "Saya menonton film pada Jumat malam."
  },
  {
    id: 56,
    question: "【土】曜日は　かいものに　いきます。",
    highlight: "土",
    options: ["と", "ど", "つち", "じ"],
    answer: 1,
    translation: "Saya pergi berbelanja pada hari Sabtu."
  },
  {
    id: 57,
    question: "まいにち　１【時】に　おひるごはんを　たべます。",
    highlight: "時",
    options: ["じ", "ち", "とき", "どき"],
    answer: 0,
    translation: "Setiap hari saya makan siang pada jam 1."
  },
  {
    id: 58,
    question: "あの　【男】の　ひとを　しっていますか。",
    highlight: "男",
    options: ["おとこ", "おんな", "ひと", "ひとで"],
    answer: 0,
    translation: "Apakah kamu kenal dengan laki-laki itu?"
  },
  {
    id: 59,
    question: "あそこに　きれいな　【女】の　ひとが　います。",
    highlight: "女",
    options: ["おとこ", "おんな", "むすめ", "はは"],
    answer: 1,
    translation: "Ada perempuan cantik di sana."
  },
  {
    id: 60,
    question: "こうえんで　【子】どもが　あそんで　います。",
    highlight: "子",
    options: ["こ", "ご", "ぼ", "ね"],
    answer: 0,
    translation: "Anak-anak sedang bermain di taman."
  },
  {
    id: 61,
    question: "わたしの　【父】は　ぎんこういんです。",
    highlight: "父",
    options: ["はは", "あに", "ちち", "おとう"],
    answer: 2,
    translation: "Ayah saya adalah pegawai bank."
  },
  {
    id: 62,
    question: "わたしの　【母】は　りょうりが　じょうずです。",
    highlight: "母",
    options: ["はは", "ちち", "あね", "おかあ"],
    answer: 0,
    translation: "Ibu saya pandai memasak."
  },
  {
    id: 63,
    question: "つくえの　【上】に　じしょが　あります。",
    highlight: "上",
    options: ["した", "なか", "うえ", "そと"],
    answer: 2,
    translation: "Ada kamus di atas meja."
  },
  {
    id: 64,
    question: "いすの　【下】に　ねこが　います。",
    highlight: "下",
    options: ["うえ", "した", "よこ", "まえ"],
    answer: 1,
    translation: "Ada kucing di bawah kursi."
  },
  {
    id: 65,
    question: "かばんの　【中】に　さいふが　あります。",
    highlight: "中",
    options: ["そと", "なか", "うしろ", "まえ"],
    answer: 1,
    translation: "Ada dompet di dalam tas."
  },
  {
    id: 66,
    question: "【外】は　とても　さむいです。",
    highlight: "外",
    options: ["なか", "そと", "うえ", "した"],
    answer: 1,
    translation: "Di luar sangat dingin."
  },
  {
    id: 67,
    question: "わたしの　ねこは　【目】が　おおきいです。",
    highlight: "目",
    options: ["め", "みみ", "くち", "て"],
    answer: 0,
    translation: "Kucing saya matanya besar."
  },
  {
    id: 68,
    question: "おおきな　【口】を　あけて　ください。",
    highlight: "口",
    options: ["め", "くち", "あし", "みみ"],
    answer: 1,
    translation: "Tolong buka mulut yang besar."
  },
  {
    id: 69,
    question: "ごはんの　まえに　【手】を　あらいます。",
    highlight: "手",
    options: ["て", "め", "あし", "くち"],
    answer: 0,
    translation: "Saya mencuci tangan sebelum makan."
  },
  {
    id: 70,
    question: "たくさん　あるいたので、【足】が　いたいです。",
    highlight: "足",
    options: ["て", "あし", "め", "みみ"],
    answer: 1,
    translation: "Karena banyak berjalan, kaki saya sakit."
  },
  {
    id: 71,
    question: "うさぎは　【耳】が　ながいです。",
    highlight: "耳",
    options: ["め", "みみ", "くち", "はな"],
    answer: 1,
    translation: "Kelinci telinganya panjang."
  },
  {
    id: 72,
    question: "おんがくを　【聞】きながら　べんきょうします。",
    highlight: "聞",
    options: ["き", "み", "か", "よ"],
    answer: 0,
    translation: "Saya belajar sambil mendengarkan musik."
  },
  {
    id: 73,
    question: "ノートに　なまえを　【書】いて　ください。",
    highlight: "書",
    options: ["い", "か", "よ", "き"],
    answer: 1,
    translation: "Tolong tulis nama di buku catatan."
  },
  {
    id: 74,
    question: "先生が　「おはよう」と　【言】いました。",
    highlight: "言",
    options: ["か", "い", "お", "はな"],
    answer: 1,
    translation: "Guru berkata 'Selamat Pagi'."
  },
  {
    id: 75,
    question: "なまえを　よばれたら、【立】って　ください。",
    highlight: "立",
    options: ["すわ", "ま", "た", "あ"],
    answer: 2,
    translation: "Jika namanya dipanggil, tolong berdiri."
  },
  {
    id: 76,
    question: "これから　デパートへ　【出】かけます。",
    highlight: "出",
    options: ["い", "き", "で", "お"],
    answer: 2,
    translation: "Saya akan pergi keluar ke toserba sekarang."
  },
  {
    id: 77,
    question: "へやに　【入】るときは　ノックを　してください。",
    highlight: "入",
    options: ["い", "はい", "で", "かえ"],
    answer: 1,
    translation: "Saat masuk ke kamar, tolong ketuk pintu."
  },
  {
    id: 78,
    question: "きょうは　いい　【天】気ですね。",
    highlight: "天",
    options: ["でん", "てん", "げん", "せん"],
    answer: 1,
    translation: "Hari ini cuacanya bagus ya."
  },
  {
    id: 79,
    question: "きょうは　【雨】が　ふって　います。",
    highlight: "雨",
    options: ["ゆき", "かぜ", "くも", "あめ"],
    answer: 3,
    translation: "Hari ini turun hujan."
  },
  {
    id: 80,
    question: "くるまに　【気】を　つけて　ください。",
    highlight: "気",
    options: ["け", "ぎ", "き", "ち"],
    answer: 2,
    translation: "Tolong berhati-hati terhadap mobil."
  },
    {
    id: 81,
    question: "【一】番　すきな　くだものは　りんごです。",
    highlight: "一",
    options: ["いち", "に", "さん", "ひと"],
    answer: 0,
    translation: "Buah yang paling saya sukai adalah apel."
  },
  {
    id: 82,
    question: "スーパーで　りんごを　【二】つ　かいました。",
    highlight: "二",
    options: ["に", "ふた", "いつ", "ひと"],
    answer: 1,
    translation: "Saya membeli dua buah apel di supermarket."
  },
  {
    id: 83,
    question: "わたしの　おとうとは　【三】さいです。",
    highlight: "三",
    options: ["さん", "みっ", "よん", "よっ"],
    answer: 0,
    translation: "Adik laki-laki saya berumur tiga tahun."
  },
  {
    id: 84,
    question: "へやに　いすが　【四】つ　あります。",
    highlight: "四",
    options: ["し", "よん", "よっ", "いつ"],
    answer: 2,
    translation: "Ada empat kursi di kamar."
  },
  {
    id: 85,
    question: "この　クラスには　がくせいが　【五】人　います。",
    highlight: "五",
    options: ["ご", "いつ", "むっ", "ろく"],
    answer: 0,
    translation: "Ada lima orang siswa di kelas ini."
  },
  {
    id: 86,
    question: "おいしい　ケーキを　【六】つ　ください。",
    highlight: "六",
    options: ["ろく", "むっ", "なな", "やっ"],
    answer: 1,
    translation: "Tolong beri saya enam potong kue yang enak."
  },
  {
    id: 87,
    question: "らいげつの　【七】月に　テストが　あります。",
    highlight: "七",
    options: ["なな", "はち", "しち", "く"],
    answer: 2,
    translation: "Ada ujian pada bulan Juli bulan depan."
  },
  {
    id: 88,
    question: "まいばん　【八】時から　テレビを　みます。",
    highlight: "八",
    options: ["はち", "はっ", "やっ", "ろく"],
    answer: 0,
    translation: "Setiap malam saya menonton TV mulai jam delapan."
  },
  {
    id: 89,
    question: "この　ほんは　【九】百円です。",
    highlight: "九",
    options: ["く", "きゅ", "きゅう", "ここの"],
    answer: 2,
    translation: "Buku ini harganya sembilan ratus yen."
  },
  {
    id: 90,
    question: "みかんを　【十】　かいました。",
    highlight: "十",
    options: ["じゅう", "とお", "いつ", "やっ"],
    answer: 1,
    translation: "Saya membeli sepuluh buah jeruk."
  },
  {
    id: 91,
    question: "この　シャツは　三【百】円です。",
    highlight: "百",
    options: ["ひゃく", "びゃく", "ぴゃく", "はく"],
    answer: 0,
    translation: "Kemeja ini harganya tiga ratus yen."
  },
  {
    id: 92,
    question: "あの　じてんしゃは　二【千】円です。",
    highlight: "千",
    options: ["せん", "ぜん", "さん", "ち"],
    answer: 0,
    translation: "Sepeda itu harganya dua ribu yen."
  },
  {
    id: 93,
    question: "わたしの　かばんは　一【万】円です。",
    highlight: "万",
    options: ["ひゃく", "せん", "まん", "ばん"],
    answer: 2,
    translation: "Tas saya harganya sepuluh ribu yen."
  },
  {
    id: 94,
    question: "これは　百【円】の　ボールペンです。",
    highlight: "円",
    options: ["えん", "まる", "まん", "ねん"],
    answer: 0,
    translation: "Ini adalah pulpen seharga seratus yen."
  },
  {
    id: 95,
    question: "まいにち　ろくじ【半】に　おきます。",
    highlight: "半",
    options: ["はん", "ばん", "ぱん", "ふん"],
    answer: 0,
    translation: "Saya bangun setiap hari pada jam setengah tujuh."
  },
  {
    id: 96,
    question: "ほっかいどうは　にほんの　【北】に　あります。",
    highlight: "北",
    options: ["きた", "みなみ", "ひがし", "にし"],
    answer: 0,
    translation: "Hokkaido ada di sebelah utara Jepang."
  },
  {
    id: 97,
    question: "あたたかい　【南】の　くにへ　いきたいです。",
    highlight: "南",
    options: ["きた", "みなみ", "ひがし", "にし"],
    answer: 1,
    translation: "Saya ingin pergi ke negara yang hangat di sebelah selatan."
  },
  {
    id: 98,
    question: "たいようは　【東】から　のぼります。",
    highlight: "東",
    options: ["きた", "みなみ", "ひがし", "にし"],
    answer: 2,
    translation: "Matahari terbit dari timur."
  },
  {
    id: 99,
    question: "【西】の　そらが　とても　あかいです。",
    highlight: "西",
    options: ["きた", "みなみ", "ひがし", "にし"],
    answer: 3,
    translation: "Langit di sebelah barat sangat merah."
  },
  {
    id: 100,
    question: "わたしの　【国】は　インドネシアです。",
    highlight: "国",
    options: ["くに", "まち", "むら", "しま"],
    answer: 0,
    translation: "Negara saya adalah Indonesia."
  },
  {
    id: 101,
    question: "ここから　【駅】まで　あるいて　いきます。",
    highlight: "駅",
    options: ["みち", "えき", "まち", "いえ"],
    answer: 1,
    translation: "Saya berjalan kaki dari sini sampai ke stasiun."
  },
  {
    id: 102,
    question: "この　【道】を　まっすぐ　いって　ください。",
    highlight: "道",
    options: ["みち", "まち", "はし", "かわ"],
    answer: 0,
    translation: "Tolong jalan lurus terus di jalan ini."
  },
  {
    id: 103,
    question: "あの　【店】で　あたらしい　くつを　かいました。",
    highlight: "店",
    options: ["みせ", "えき", "いえ", "くに"],
    answer: 0,
    translation: "Saya membeli sepatu baru di toko itu."
  },
  {
    id: 104,
    question: "にほんに　一【年】　すんで　います。",
    highlight: "年",
    options: ["とし", "ねん", "げつ", "にち"],
    answer: 1,
    translation: "Saya tinggal di Jepang selama satu tahun."
  },
  {
    id: 105,
    question: "すみません、【今】、なんじですか。",
    highlight: "今",
    options: ["きょう", "あした", "いま", "あさ"],
    answer: 2,
    translation: "Permisi, sekarang jam berapa?"
  },
  {
    id: 106,
    question: "来【週】、にほんごの　テストが　あります。",
    highlight: "週",
    options: ["しゅう", "じゅう", "ねん", "つき"],
    answer: 0,
    translation: "Minggu depan ada ujian bahasa Jepang."
  },
  {
    id: 107,
    question: "ここから　バスで　五【分】　かかります。",
    highlight: "分",
    options: ["ふん", "ぷん", "ぶん", "ばん"],
    answer: 0,
    translation: "Dari sini memakan waktu lima menit dengan bus."
  },
  {
    id: 108,
    question: "きょうは　こうえんに　ひとが　【多】いですね。",
    highlight: "多",
    options: ["すくな", "おお", "たか", "ひろ"],
    answer: 1,
    translation: "Hari ini ada banyak orang di taman ya."
  },
  {
    id: 109,
    question: "コーヒーに　さとうを　【少】し　いれて　ください。",
    highlight: "少",
    options: ["おお", "すこ", "ちい", "わか"],
    answer: 1,
    translation: "Tolong masukkan sedikit gula ke dalam kopi."
  },
  {
    id: 110,
    question: "レストランで　つめたい　おちゃを　【飲】みます。",
    highlight: "飲",
    options: ["の", "た", "み", "い"],
    answer: 0,
    translation: "Saya minum teh dingin di restoran."
  }
];
