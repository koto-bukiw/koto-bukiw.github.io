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
  },
  {
    id: 21,
    question: "つめたい　【みず】を　ください。",
    highlight: "みず",
    options: ["氷", "水", "木", "永"],
    answer: 1,
    translation: "Tolong beri saya air dingin."
  },
  {
    id: 22,
    question: "あの　【くるま】は　だれのですか。",
    highlight: "くるま",
    options: ["庫", "傘", "車", "陣"],
    answer: 2,
    translation: "Mobil itu milik siapa?"
  },
  {
    id: 23,
    question: "あさごはんに　パンを　【たべます】。",
    highlight: "たべます",
    options: ["飲べます", "買べます", "食へます", "食べます"],
    answer: 3,
    translation: "Saya makan roti untuk sarapan."
  },
  {
    id: 24,
    question: "あした、とうきょうへ　【いきます】。",
    highlight: "いきます",
    options: ["行きます", "彳きます", "来きます", "走きます"],
    answer: 0,
    translation: "Besok saya akan pergi ke Tokyo."
  },
  {
    id: 25,
    question: "これは　【あたらしい】　カメラです。",
    highlight: "あたらしい",
    options: ["新らしい", "新しい", "薪しい", "親しい"],
    answer: 1,
    translation: "Ini adalah kamera baru."
  },
  {
    id: 26,
    question: "この　かばんは　とても　【たかい】です。",
    highlight: "たかい",
    options: ["亭い", "亮い", "高い", "豪い"],
    answer: 2,
    translation: "Tas ini sangat mahal."
  },
  {
    id: 27,
    question: "とても　【おおきい】　いぬですね。",
    highlight: "おおきい",
    options: ["大い", "犬きい", "太きい", "大きい"],
    answer: 3,
    translation: "Anjing yang sangat besar ya."
  },
  {
    id: 28,
    question: "つぎの　かどを　【みぎ】に　まがってください。",
    highlight: "みぎ",
    options: ["右", "左", "石", "名"],
    answer: 0,
    translation: "Silakan belok kanan di tikungan berikutnya."
  },
  {
    id: 29,
    question: "へやの　【そと】に　でます。",
    highlight: "そと",
    options: ["処", "外", "名", "多"],
    answer: 1,
    translation: "Saya keluar dari ruangan."
  },
  {
    id: 30,
    question: "わたしの　【せんせい】は　やさしいです。",
    highlight: "せんせい",
    options: ["先星", "仙生", "先生", "先性"],
    answer: 2,
    translation: "Guru saya baik hati."
  },
  {
    id: 31,
    question: "きょうは　【がっこう】が　やすみです。",
    highlight: "がっこう",
    options: ["学交", "学効", "覚校", "学校"],
    answer: 3,
    translation: "Hari ini sekolah libur."
  },
  {
    id: 32,
    question: "スーパーで　りんごを　【かいます】。",
    highlight: "かいます",
    options: ["買います", "員います", "貝います", "貰います"],
    answer: 0,
    translation: "Saya membeli apel di supermarket."
  },
  {
    id: 33,
    question: "【しろい】　シャツを　きています。",
    highlight: "しろい",
    options: ["百い", "白い", "臼い", "自い"],
    answer: 1,
    translation: "Saya sedang memakai kemeja putih."
  },
  {
    id: 34,
    question: "まいばん　ほんを　【よみます】。",
    highlight: "よみます",
    options: ["語みます", "話みます", "読みます", "記みます"],
    answer: 2,
    translation: "Saya membaca buku setiap malam."
  },
  {
    id: 35,
    question: "あしたは　かいしゃの　【やすみ】です。",
    highlight: "やすみ",
    options: ["体み", "本み", "木み", "休み"],
    answer: 3,
    translation: "Besok adalah hari libur perusahaan."
  },
  {
    id: 36,
    question: "へやで　ラジオを　【ききます】。",
    highlight: "ききます",
    options: ["聞きます", "耳きます", "門きます", "閉きます"],
    answer: 0,
    translation: "Saya mendengarkan radio di kamar."
  },
  {
    id: 37,
    question: "【ともだち】と　えいがを　みます。",
    highlight: "ともだち",
    options: ["共だち", "友だち", "支だち", "反だち"],
    answer: 1,
    translation: "Saya menonton film bersama teman."
  },
  {
    id: 38,
    question: "えきまで　【でんしゃ】で　いきます。",
    highlight: "でんしゃ",
    options: ["雷車", "雪車", "電車", "雲車"],
    answer: 2,
    translation: "Saya pergi ke stasiun dengan kereta."
  },
  {
    id: 39,
    question: "あたらしい　【とけい】を　かいました。",
    highlight: "とけい",
    options: ["待計", "持計", "時針", "時計"],
    answer: 3,
    translation: "Saya telah membeli jam tangan baru."
  },
  {
    id: 40,
    question: "あなたの　【なまえ】を　おしえてください。",
    highlight: "なまえ",
    options: ["名前", "名仙", "多前", "名剪"],
    answer: 0,
    translation: "Tolong beritahu nama Anda."
  },
    {
    id: 41,
    question: "わたしの　【はは】は　りょうりが　じょうずです。",
    highlight: "はは",
    options: ["毎", "母", "海", "毒"],
    answer: 1,
    translation: "Ibu saya pandai memasak."
  },
  {
    id: 42,
    question: "あした　ともだちが　わたしの　うちに　【きます】。",
    highlight: "きます",
    options: ["木ます", "行ます", "来ます", "米ます"],
    answer: 2,
    translation: "Besok teman akan datang ke rumah saya."
  },
  {
    id: 43,
    question: "かばんに　【なに】が　はいっていますか。",
    highlight: "なに",
    options: ["伺", "向", "荷", "何"],
    answer: 3,
    translation: "Apa yang ada di dalam tas?"
  },
  {
    id: 44,
    question: "きょうは　【あめ】が　ふっています。",
    highlight: "あめ",
    options: ["雨", "両", "雪", "雲"],
    answer: 0,
    translation: "Hari ini turun hujan."
  },
  {
    id: 45,
    question: "その　【ちいさい】　じしょを　かしてください。",
    highlight: "ちいさい",
    options: ["少さい", "小さい", "木さい", "水さい"],
    answer: 1,
    translation: "Tolong pinjamkan kamus kecil itu."
  },
  {
    id: 46,
    question: "あそこに　【ひと】が　たくさん　います。",
    highlight: "ひと",
    options: ["入", "八", "人", "大"],
    answer: 2,
    translation: "Ada banyak orang di sana."
  },
  {
    id: 47,
    question: "ケーキを　【はんぶん】　たべました。",
    highlight: "はんぶん",
    options: ["平分", "本分", "半刀", "半分"],
    answer: 3,
    translation: "Saya makan separuh kuenya."
  },
  {
    id: 48,
    question: "あそこに　【おとこ】の　こが　います。",
    highlight: "おとこ",
    options: ["男", "田", "力", "勇"],
    answer: 0,
    translation: "Ada anak laki-laki di sana."
  },
  {
    id: 49,
    question: "この　まちの　【きた】に　うみが　あります。",
    highlight: "きた",
    options: ["化", "北", "比", "背"],
    answer: 1,
    translation: "Ada laut di sebelah utara kota ini."
  },
  {
    id: 50,
    question: "この　【みち】を　まっすぐ　いってください。",
    highlight: "みち",
    options: ["通", "導", "道", "達"],
    answer: 2,
    translation: "Tolong jalan lurus terus di jalan ini."
  },
  {
    id: 51,
    question: "きれいな　【はな】が　さいています。",
    highlight: "はな",
    options: ["草", "苑", "華", "花"],
    answer: 3,
    translation: "Bunga yang indah sedang mekar."
  },
  {
    id: 52,
    question: "【いま】　なんじですか。",
    highlight: "いま",
    options: ["今", "令", "合", "会"],
    answer: 0,
    translation: "Sekarang jam berapa?"
  },
  {
    id: 53,
    question: "あなたの　【くに】は　どこですか。",
    highlight: "くに",
    options: ["園", "国", "図", "囲"],
    answer: 1,
    translation: "Di mana negara Anda?"
  },
  {
    id: 54,
    question: "きょうは　【そら】が　とても　あおいです。",
    highlight: "そら",
    options: ["穴", "宇", "空", "室"],
    answer: 2,
    translation: "Hari ini langit sangat biru."
  },
  {
    id: 55,
    question: "ノートに　なまえを　【かきます】。",
    highlight: "かきます",
    options: ["言きます", "画きます", "事きます", "書きます"],
    answer: 3,
    translation: "Saya menulis nama di buku catatan."
  },
  {
    id: 56,
    question: "あの　【あかい】　くるまは　かっこいいです。",
    highlight: "あかい",
    options: ["赤い", "亦い", "青い", "秋い"],
    answer: 0,
    translation: "Mobil merah itu keren."
  },
  {
    id: 57,
    question: "ふゆに　【やま】へ　スキーに　いきます。",
    highlight: "やま",
    options: ["出", "山", "川", "仙"],
    answer: 1,
    translation: "Saya pergi bermain ski ke gunung di musim dingin."
  },
  {
    id: 58,
    question: "ごはんの　まえに　【て】を　あらいます。",
    highlight: "て",
    options: ["足", "毛", "手", "才"],
    answer: 2,
    translation: "Saya mencuci tangan sebelum makan."
  },
  {
    id: 59,
    question: "しゅくだいをする　【じかん】が　ありません。",
    highlight: "じかん",
    options: ["時問", "持間", "寺間", "時間"],
    answer: 3,
    translation: "Tidak ada waktu untuk mengerjakan PR."
  },
  {
    id: 60,
    question: "あそこに　【おんな】の　ひとが　さんにん　います。",
    highlight: "おんな",
    options: ["女", "母", "好", "妹"],
    answer: 0,
    translation: "Ada tiga orang perempuan di sana."
  },
  {
      id: 61,
    question: "毎朝　コーヒーを　【のみます】。",
    highlight: "のみます",
    options: ["飲みます", "飯みます", "飼みます", "飾みます"],
    answer: 0,
    translation: "Setiap pagi saya minum kopi."
  },
  {
    id: 62,
    question: "【じてんしゃ】で　えきへ　いきます。",
    highlight: "じてんしゃ",
    options: ["自転写", "自転車", "目転車", "白転車"],
    answer: 1,
    translation: "Saya pergi ke stasiun dengan sepeda."
  },
  {
    id: 63,
    question: "【め】が　いたいです。",
    highlight: "め",
    options: ["日", "月", "目", "口"],
    answer: 2,
    translation: "Mata saya sakit."
  },
  {
    id: 64,
    question: "「ありがとう」と　【いいます】。",
    highlight: "いいます",
    options: ["話います", "語います", "音います", "言います"],
    answer: 3,
    translation: "Saya mengucapkan \"Terima kasih\"."
  },
  {
    id: 65,
    question: "この　クラスは　がくせいが　【おおい】です。",
    highlight: "おおい",
    options: ["多い", "大い", "少い", "夕い"],
    answer: 0,
    translation: "Kelas ini ada banyak murid."
  },
  {
    id: 66,
    question: "この　くつは　とても　【やすい】です。",
    highlight: "やすい",
    options: ["高い", "安い", "案い", "宴い"],
    answer: 1,
    translation: "Sepatu ini sangat murah."
  },
  {
    id: 67,
    question: "かのじょは　かみが　【ながい】です。",
    highlight: "ながい",
    options: ["短い", "良い", "長い", "展い"],
    answer: 2,
    translation: "Dia (perempuan) rambutnya panjang."
  },
  {
    id: 68,
    question: "いま、　【おかね】が　ありません。",
    highlight: "おかね",
    options: ["お全", "お会", "お今", "お金"],
    answer: 3,
    translation: "Sekarang saya tidak punya uang."
  },
  {
    id: 69,
    question: "にわに　おおきい　【き】が　あります。",
    highlight: "き",
    options: ["木", "本", "林", "森"],
    answer: 0,
    translation: "Ada pohon besar di halaman."
  },
  {
    id: 70,
    question: "つくえの　【うえ】に　りんごが　あります。",
    highlight: "うえ",
    options: ["下", "上", "止", "正"],
    answer: 1,
    translation: "Ada apel di atas meja."
  },
  {
    id: 71,
    question: "いすの　【した】に　ねこが　います。",
    highlight: "した",
    options: ["上", "中", "下", "外"],
    answer: 2,
    translation: "Ada kucing di bawah kursi."
  },
  {
    id: 72,
    question: "あそこの　かどを　【ひだり】に　まがってください。",
    highlight: "ひだり",
    options: ["右", "石", "友", "左"],
    answer: 3,
    translation: "Tolong belok kiri di tikungan sana."
  },
  {
    id: 73,
    question: "わたしの　うちは　えきの　【ひがし】に　あります。",
    highlight: "ひがし",
    options: ["東", "車", "重", "乗"],
    answer: 0,
    translation: "Rumah saya ada di sebelah timur stasiun."
  },
  {
    id: 74,
    question: "きょうは　【みなみ】の　かぜが　ふいています。",
    highlight: "みなみ",
    options: ["西", "南", "商", "向"],
    answer: 1,
    translation: "Hari ini angin selatan sedang bertiup."
  },
  {
    id: 75,
    question: "【にし】の　そらが　あかいです。",
    highlight: "にし",
    options: ["四", "酉", "西", "北"],
    answer: 2,
    translation: "Langit barat berwarna merah."
  },
  {
    id: 76,
    question: "【くろい】　かばんを　もっています。",
    highlight: "くろい",
    options: ["墨い", "里い", "薫い", "黒い"],
    answer: 3,
    translation: "Saya membawa tas hitam."
  },
  {
    id: 77,
    question: "あたらしくて　【あおい】　シャツを　かいました。",
    highlight: "あおい",
    options: ["青い", "晴い", "春い", "清い"],
    answer: 0,
    translation: "Saya membeli kemeja baru yang berwarna biru."
  },
  {
    id: 78,
    question: "わたしは　にくより　【さかな】が　すきです。",
    highlight: "さかな",
    options: ["鳥", "魚", "漁", "角"],
    answer: 1,
    translation: "Saya lebih suka ikan daripada daging."
  },
  {
    id: 79,
    question: "うさぎは　【みみ】が　ながいです。",
    highlight: "みみ",
    options: ["目", "取", "耳", "身"],
    answer: 2,
    translation: "Kelinci telinganya panjang."
  },
  {
    id: 80,
    question: "たくさん　あるいたので、　【あし】が　いたいです。",
    highlight: "あし",
    options: ["手", "走", "疋", "足"],
    answer: 3,
    translation: "Karena banyak berjalan, kaki saya sakit."
  },
    {
    id: 81,
    question: "わたしの　【ちち】は　いしゃです。",
    highlight: "ちち",
    options: ["交", "父", "釜", "八"],
    answer: 1,
    translation: "Ayah saya adalah seorang dokter."
  },
  {
    id: 82,
    question: "わたしの　【あに】は　だいがくせいです。",
    highlight: "あに",
    options: ["児", "兌", "兄", "克"],
    answer: 2,
    translation: "Kakak laki-laki saya adalah seorang mahasiswa."
  },
  {
    id: 83,
    question: "ここから　【えき】まで　ちかいです。",
    highlight: "えき",
    options: ["駐", "尺", "駄", "駅"],
    answer: 3,
    translation: "Dari sini ke stasiun dekat."
  },
  {
    id: 84,
    question: "あの　【みせ】で　パンを　かいました。",
    highlight: "みせ",
    options: ["店", "占", "庫", "席"],
    answer: 0,
    translation: "Saya membeli roti di toko itu."
  },
  {
    id: 85,
    question: "わたしは　【かいしゃ】の　ひとと　ごはんを　たべました。",
    highlight: "かいしゃ",
    options: ["合社", "会社", "会車", "合車"],
    answer: 1,
    translation: "Saya makan bersama orang dari perusahaan."
  },
  {
    id: 86,
    question: "わたしは　【まいにち】　さんぽを　します。",
    highlight: "まいにち",
    options: ["毎月", "海日", "毎日", "毎白"],
    answer: 2,
    translation: "Saya jalan-jalan setiap hari."
  },
  {
    id: 87,
    question: "これは　とても　【ふるい】　ほんです。",
    highlight: "ふるい",
    options: ["苦い", "舌い", "吉い", "古い"],
    answer: 3,
    translation: "Ini adalah buku yang sangat tua."
  },
  {
    id: 88,
    question: "この　クラスは　おとこの　ひとが　【すくない】です。",
    highlight: "すくない",
    options: ["少ない", "小ない", "歩ない", "劣ない"],
    answer: 0,
    translation: "Di kelas ini, orang laki-lakinya sedikit."
  },
  {
    id: 89,
    question: "この　ペンは　ひゃく【えん】です。",
    highlight: "えん",
    options: ["門", "円", "丹", "冊"],
    answer: 1,
    translation: "Pulpen ini harganya seratus yen."
  },
  {
    id: 90,
    question: "りんごを　【ひゃく】えんで　かいました。",
    highlight: "ひゃく",
    options: ["白", "日", "百", "目"],
    answer: 2,
    translation: "Saya membeli apel seharga seratus yen."
  },
  {
    id: 91,
    question: "この　かばんは　さん【ぜん】えんです。",
    highlight: "ぜん",
    options: ["干", "十", "汁", "千"],
    answer: 3,
    translation: "Tas ini harganya tiga ribu yen."
  },
  {
    id: 92,
    question: "あの　くるまは　にひゃく【まん】えんです。",
    highlight: "まん",
    options: ["万", "方", "力", "刀"],
    answer: 0,
    translation: "Mobil itu harganya dua juta yen."
  },
  {
    id: 93,
    question: "まいあさ　はちじに　うちを　【でます】。",
    highlight: "でます",
    options: ["山ます", "出ます", "凹ます", "凸ます"],
    answer: 1,
    translation: "Setiap pagi saya keluar rumah pada jam delapan."
  },
  {
    id: 94,
    question: "あついから、　みせの　なかに　【はいりましょう】。",
    highlight: "はいりましょう",
    options: ["人りましょう", "八りましょう", "入りましょう", "大りましょう"],
    answer: 2,
    translation: "Karena panas, mari kita masuk ke dalam toko."
  },
  {
    id: 95,
    question: "でんしゃの　なかで　ずっと　【たって】いました。",
    highlight: "たって",
    options: ["音って", "辛って", "泣って", "立って"],
    answer: 3,
    translation: "Saya terus berdiri di dalam kereta."
  },
  {
    id: 96,
    question: "わたしは　えいごを　【はなします】。",
    highlight: "はなします",
    options: ["話します", "語します", "記します", "言します"],
    answer: 0,
    translation: "Saya berbicara bahasa Inggris."
  },
  {
    id: 97,
    question: "きのう、　テレビで　サッカーの　しあいを　【みました】。",
    highlight: "みました",
    options: ["貝ました", "見ました", "目ました", "具ました"],
    answer: 1,
    translation: "Kemarin, saya menonton pertandingan sepak bola di TV."
  },
  {
    id: 98,
    question: "この　【かわ】で　およいではいけません。",
    highlight: "かわ",
    options: ["州", "水", "川", "氷"],
    answer: 2,
    translation: "Tidak boleh berenang di sungai ini."
  },
  {
    id: 99,
    question: "【ごご】から　としょかんへ　いきます。",
    highlight: "ごご",
    options: ["午前", "牛前", "牛後", "午後"],
    answer: 3,
    translation: "Saya pergi ke perpustakaan mulai sore hari."
  },
  {
    id: 100,
    question: "わたしは　【にほんご】を　べんきょうしています。",
    highlight: "にほんご",
    options: ["日本語", "日本話", "日本記", "日本言"],
    answer: 0,
    translation: "Saya sedang belajar bahasa Jepang."
  },
    {
    id: 101,
    question: "あの　おとこの　【こ】は　だれですか。",
    highlight: "こ",
    options: ["予", "子", "小", "了"],
    answer: 1,
    translation: "Anak laki-laki itu siapa?"
  },
  {
    id: 102,
    question: "かばんに　【ほん】を　いれます。",
    highlight: "ほん",
    options: ["木", "札", "休", "本"],
    answer: 3,
    translation: "Saya memasukkan buku ke dalam tas."
  },
  {
    id: 103,
    question: "はこの　【なか】に　なにが　ありますか。",
    highlight: "なか",
    options: ["中", "虫", "仲", "串"],
    answer: 0,
    translation: "Ada apa di dalam kotak?"
  },
  {
    id: 104,
    question: "ろくじに　うちへ　【かえります】。",
    highlight: "かえります",
    options: ["帰ります", "掃ります", "追ります", "婦ります"],
    answer: 0,
    translation: "Saya pulang ke rumah jam enam."
  },
  {
    id: 105,
    question: "えきの　まえで　ともだちを　【まちます】。",
    highlight: "まちます",
    options: ["持ちます", "特ちます", "待ちます", "寺ちます"],
    answer: 2,
    translation: "Saya menunggu teman di depan stasiun."
  },
  {
    id: 106,
    question: "おもいから、　その　にもつを　【もちます】よ。",
    highlight: "もちます",
    options: ["待ちます", "持ちます", "特ちます", "侍ちます"],
    answer: 1,
    translation: "Karena berat, saya akan membawakan barang bawaan itu."
  },
  {
    id: 107,
    question: "わたしは　えいごが　少し　【わかります】。",
    highlight: "わかります",
    options: ["半かります", "切かります", "刀かります", "分かります"],
    answer: 3,
    translation: "Saya sedikit mengerti bahasa Inggris."
  },
  {
    id: 108,
    question: "あした　せんせいに　【あいます】。",
    highlight: "あいます",
    options: ["会います", "合います", "今います", "令います"],
    answer: 0,
    translation: "Besok saya akan bertemu guru."
  },
  {
    id: 109,
    question: "ぎんこうの　【まえ】で　しゃしんを　とります。",
    highlight: "まえ",
    options: ["後", "前", "剪", "煎"],
    answer: 1,
    translation: "Saya mengambil foto di depan bank."
  },
  {
    id: 110,
    question: "わたしの　【うしろ】に　いぬが　います。",
    highlight: "うしろ",
    options: ["後ろ", "役ろ", "従ろ", "待ろ"],
    answer: 0,
    translation: "Ada anjing di belakang saya."
  },
  {
    id: 111,
    question: "まいあさ、　【あさ】ごはんを　たべません。",
    highlight: "あさ",
    options: ["潮", "韓", "朝", "乾"],
    answer: 2,
    translation: "Setiap pagi, saya tidak makan sarapan."
  },
  {
    id: 112,
    question: "いっしょに　【ひる】ごはんを　たべましょう。",
    highlight: "ひる",
    options: ["昼", "尺", "尽", "星"],
    answer: 0,
    translation: "Mari kita makan siang bersama."
  },
  {
    id: 113,
    question: "【よる】は　とても　さむいです。",
    highlight: "よる",
    options: ["夕", "夜", "液", "晩"],
    answer: 1,
    translation: "Malam hari sangat dingin."
  },
  {
    id: 114,
    question: "わたしの　【あね】は　とうきょうに　すんでいます。",
    highlight: "あね",
    options: ["妹", "娘", "姉", "姑"],
    answer: 2,
    translation: "Kakak perempuan saya tinggal di Tokyo."
  },
  {
    id: 115,
    question: "【いもうと】は　こうこうせいです。",
    highlight: "いもうと",
    options: ["妹", "姉", "味", "昧"],
    answer: 0,
    translation: "Adik perempuan saya adalah siswa SMA."
  },
  {
    id: 116,
    question: "【おとうと】と　ゲームを　します。",
    highlight: "おとうと",
    options: ["兄", "弟", "第", "男"],
    answer: 1,
    translation: "Saya bermain game dengan adik laki-laki."
  },
  {
    id: 117,
    question: "【らいねん】　にほんへ　いきます。",
    highlight: "らいねん",
    options: ["来年", "木年", "米年", "半年"],
    answer: 0,
    translation: "Tahun depan saya akan pergi ke Jepang."
  },
  {
    id: 118,
    question: "【ことし】は　とても　あついです。",
    highlight: "ことし",
    options: ["合年", "今年", "令年", "会年"],
    answer: 1,
    translation: "Tahun ini sangat panas."
  },
  {
    id: 119,
    question: "いま　よじ【はん】です。",
    highlight: "はん",
    options: ["平", "羊", "半", "伴"],
    answer: 2,
    translation: "Sekarang jam empat setengah."
  },
  {
    id: 120,
    question: "ともだちに　【でんわ】を　かけます。",
    highlight: "でんわ",
    options: ["電話", "雷話", "電語", "電活"],
    answer: 0,
    translation: "Saya menelepon teman."
  }

];
