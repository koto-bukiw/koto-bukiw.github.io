// 第2科目 問題3：文章の文法
// JLPT N5 レベル - 文章の中の空欄に入る正しい表現を選ぶ
const bunshouBunpouData = [
  {
    id: 1,
    question: "きのう　ともだちと　えいがを　みました。えいがは　とても（　　）。また　みたいです。",
    highlight: "（　　）",
    options: ["おもしろかったです", "おもしろいでした", "おもしろくないです", "おもしろいだった"],
    answer: 0,
    translation: "Kemarin saya menonton film bersama teman. Filmnya sangat (　). Saya ingin menonton lagi."
  },
    {
    id: 2,
    question: "わたしは　まいにち　あさ７じ（　　）　おきます。",
    highlight: "（　　）",
    options: ["に", "で", "を", "へ"],
    answer: 0,
    translation: "Saya bangun jam 7 pagi setiap hari."
  },
  {
    id: 3,
    question: "つくえの　うえに　ほん（　　）　３さつ　あります。",
    highlight: "（　　）",
    options: ["が", "を", "は", "で"],
    answer: 0,
    translation: "Di atas meja ada 3 buah buku."
  },
  {
    id: 4,
    question: "きのうの　テストは　あまり（　　）。",
    highlight: "（　　）",
    options: ["むずかしくなかったです", "むずかしいです", "むずかしくないです", "むずかしかったです"],
    answer: 0,
    translation: "Ujian kemarin tidak terlalu sulit."
  },
  {
    id: 5,
    question: "まいあさ　パンを（　　）、コーヒーを　のみます。",
    highlight: "（　　）",
    options: ["たべて", "たべる", "たべた", "たべます"],
    answer: 0,
    translation: "Setiap pagi saya makan roti, lalu minum kopi."
  },
  {
    id: 6,
    question: "あの　レストランは　やすくて（　　）ですよ。",
    highlight: "（　　）",
    options: ["おいしい", "おいしく", "おいしくて", "おいしかった"],
    answer: 0,
    translation: "Restoran itu murah dan enak, lho."
  },
  {
    id: 7,
    question: "あしたは　やすみですから、がっこうへ　（　　）。",
    highlight: "（　　）",
    options: ["いきません", "いきました", "いきませんでした", "いって"],
    answer: 0,
    translation: "Karena besok libur, saya tidak pergi ke sekolah."
  },
  {
    id: 8,
    question: "この　カメラは　（　　）の　ですか。",
    highlight: "（　　）",
    options: ["だれ", "なにか", "どこ", "いつ"],
    answer: 0,
    translation: "Kamera ini milik siapa?"
  },
  {
    id: 9,
    question: "きのうは　あめが　ふりましたから、どこへも（　　）。",
    highlight: "（　　）",
    options: ["いきませんでした", "いきません", "いきました", "いくでしょう"],
    answer: 0,
    translation: "Karena kemarin turun hujan, saya tidak pergi ke mana-pun."
  },
  {
    id: 10,
    question: "わたしは　くるまの　うんてん（　　）　できます。",
    highlight: "（　　）",
    options: ["が", "を", "に", "で"],
    answer: 0,
    translation: "Saya bisa menyetir mobil."
  },
  {
    id: 11,
    question: "えきまで　タクシーで　１０ぷん（　　）です。",
    highlight: "（　　）",
    options: ["くらい", "ごろ", "など", "しか"],
    answer: 0,
    translation: "Sampai ke stasiun kira-kira 10 menit dengan taksi."
  },
  {
    id: 12,
    question: "おなかが　すきましたね。なにか（　　）ましょう。",
    highlight: "（　　）",
    options: ["たべ", "たべる", "たべて", "たべない"],
    answer: 0,
    translation: "Perut sudah lapar ya. Ayo kita makan sesuatu."
  },
  {
    id: 13,
    question: "すみません、その　じしょを（　　）　ください。",
    highlight: "（　　）",
    options: ["みせて", "みせる", "みせます", "みせないで"],
    answer: 0,
    translation: "Permisi, tolong perlihatkan kamus itu."
  },
  {
    id: 14,
    question: "わたしの　へやは　あまり（　　）。",
    highlight: "（　　）",
    options: ["ひろくないです", "ひろいです", "ひろくなかったです", "ひろかったです"],
    answer: 0,
    translation: "Kamar saya tidak terlalu luas."
  },
  {
    id: 15,
    question: "きょうは　すずしくて（　　）　てんきですね。",
    highlight: "（　　）",
    options: ["いい", "よくない", "よかった", "よくて"],
    answer: 0,
    translation: "Hari ini sejuk dan cuacanya bagus ya."
  },
  {
    id: 16,
    question: "にほんごで　てがみを（　　）ことが　ありますか。",
    highlight: "（　　）",
    options: ["かいた", "かく", "かいて", "かきます"],
    answer: 0,
    translation: "Apakah kamu pernah menulis surat dalam bahasa Jepang?"
  },
  {
    id: 17,
    question: "としょかんの　ほんは　ここ（　　）　かえして　ください。",
    highlight: "（　　）",
    options: ["に", "で", "を", "が"],
    answer: 0,
    translation: "Tolong kembalikan buku perpustakaan ke sini."
  },
  {
    id: 18,
    question: "スーパーで　くだもの（　　）　ジュースを　かいました。",
    highlight: "（　　）",
    options: ["や", "など", "を", "が"],
    answer: 0,
    translation: "Saya membeli buah dan jus (dan lain-lain) di supermarket."
  },
  {
    id: 19,
    question: "こうえんには　だれ（　　）　いませんでした。",
    highlight: "（　　）",
    options: ["も", "が", "か", "は"],
    answer: 0,
    translation: "Tidak ada siapa pun di taman."
  },
  {
    id: 20,
    question: "わたしは　らいねん　にほんへ（　　）つもりです。",
    highlight: "（　　）",
    options: ["いく", "いって", "いった", "いきます"],
    answer: 0,
    translation: "Saya berencana pergi ke Jepang tahun depan."
  },
  {
    id: 21,
    question: "その　カメラは　とても　たかいですから、（　　）ほうが　いいですよ。",
    highlight: "（　　）",
    options: ["かわない", "かう", "かって", "かわなかった"],
    answer: 0,
    translation: "Karena kamera itu sangat mahal, sebaiknya tidak usah dibeli lho."
  },
    {
    id: 22,
    question: "へやの　なかに　ベッド（　　）　あります。",
    highlight: "（　　）",
    options: ["が", "を", "に", "で"],
    answer: 0,
    translation: "Di dalam kamar ada tempat tidur."
  },
  {
    id: 23,
    question: "にほんじんは　はし（　　）　ごはんを　たべます。",
    highlight: "（　　）",
    options: ["で", "に", "を", "が"],
    answer: 0,
    translation: "Orang Jepang makan nasi menggunakan sumpit."
  },
  {
    id: 24,
    question: "わたしは　らいしゅう　とうきょう（　　）　いきます。",
    highlight: "（　　）",
    options: ["へ", "が", "を", "で"],
    answer: 0,
    translation: "Saya akan pergi ke Tokyo minggu depan."
  },
  {
    id: 25,
    question: "さむいですね。まどを（　　）　ください。",
    highlight: "（　　）",
    options: ["しめて", "しめる", "しめた", "しめます"],
    answer: 0,
    translation: "Dingin ya. Tolong tutup jendelanya."
  },
  {
    id: 26,
    question: "のどが　かわきました。なにか　つめたい　ものが（　　）ですね。",
    highlight: "（　　）",
    options: ["のみたい", "のんで", "のむ", "のみます"],
    answer: 0,
    translation: "Haus nih. Ingin minum sesuatu yang dingin ya."
  },
  {
    id: 27,
    question: "わたしの　いぬは　げんきで、とても（　　）ですよ。",
    highlight: "（　　）",
    options: ["かわいい", "かわいく", "かわいかった", "かわいくて"],
    answer: 0,
    translation: "Anjing saya sehat dan sangat lucu lho."
  },
  {
    id: 28,
    question: "きのうの　うみは　あまり（　　）。",
    highlight: "（　　）",
    options: ["きれいじゃありませんでした", "きれいでした", "きれいです", "きれいくないです"],
    answer: 0,
    translation: "Laut kemarin tidak begitu indah/bersih."
  },
  {
    id: 29,
    question: "いま　あめが（　　）から、かさを　もって　いって　ください。",
    highlight: "（　　）",
    options: ["ふっています", "ふります", "ふって", "ふった"],
    answer: 0,
    translation: "Karena sekarang sedang turun hujan, tolong bawa payung."
  },
  {
    id: 30,
    question: "くすりを　のみましたから、びょうきが（　　）　なりました。",
    highlight: "（　　）",
    options: ["よく", "いい", "よくて", "よかった"],
    answer: 0,
    translation: "Karena sudah minum obat, penyakitnya sudah menjadi baik (sembuh)."
  },
  {
    id: 31,
    question: "すみません、ここで　しゃしんを（　　）　いいですか。",
    highlight: "（　　）",
    options: ["とっても", "とって", "とる", "とらない"],
    answer: 0,
    translation: "Permisi, bolehkah mengambil foto di sini?"
  },
  {
    id: 32,
    question: "やまださんは　いま　おんがくを（　　）　います。",
    highlight: "（　　）",
    options: ["きいて", "きく", "きいた", "ききます"],
    answer: 0,
    translation: "Yamada sekarang sedang mendengarkan musik."
  },
  {
    id: 33,
    question: "いえ（　　）　えきまで　バスで　いきます。",
    highlight: "（　　）",
    options: ["から", "まで", "に", "で"],
    answer: 0,
    translation: "Dari rumah sampai stasiun pergi naik bus."
  },
  {
    id: 34,
    question: "ここは　びょういんですから、おおきい　こえで（　　）　ください。",
    highlight: "（　　）",
    options: ["はなさないで", "はなして", "はなす", "はなさない"],
    answer: 0,
    translation: "Karena ini rumah sakit, tolong jangan berbicara dengan suara keras."
  },
  {
    id: 35,
    question: "じかんが　ありませんから、タクシーで（　　）。",
    highlight: "（　　）",
    options: ["いきましょう", "いって", "いかない", "いく"],
    answer: 0,
    translation: "Karena tidak ada waktu, mari kita pergi dengan taksi."
  },
  {
    id: 36,
    question: "わたしは　１かげつに　２かい（　　）　えいがを　みます。",
    highlight: "（　　）",
    options: ["ぐらい", "ごろ", "など", "しか"],
    answer: 0,
    translation: "Saya menonton film kira-kira 2 kali dalam 1 bulan."
  },
  {
    id: 37,
    question: "あしたは　おとうと（　　）　プールへ　いきます。",
    highlight: "（　　）",
    options: ["と", "や", "を", "が"],
    answer: 0,
    translation: "Besok pergi ke kolam renang bersama adik laki-laki."
  },
  {
    id: 38,
    question: "この　カレーは　あまり（　　）です。",
    highlight: "（　　）",
    options: ["からくない", "からい", "からかった", "からくなかった"],
    answer: 0,
    translation: "Kari ini tidak terlalu pedas."
  },
  {
    id: 39,
    question: "わたしは　にほんごの　うたを（　　）　ことが　できます。",
    highlight: "（　　）",
    options: ["うたう", "うたって", "うたった", "うたいます"],
    answer: 0,
    translation: "Saya bisa menyanyikan lagu bahasa Jepang."
  },
  {
    id: 40,
    question: "デパートへ　くつを（　　）　いきます。",
    highlight: "（　　）",
    options: ["かいに", "かう", "かって", "かいます"],
    answer: 0,
    translation: "Pergi ke pusat perbelanjaan untuk membeli sepatu."
  },
  {
    id: 41,
    question: "パーティーは　７じ（　　）　はじまります。",
    highlight: "（　　）",
    options: ["から", "まで", "で", "を"],
    answer: 0,
    translation: "Pestanya dimulai dari jam 7."
  },
    {
    id: 42,
    question: "わたしは　えんぴつ（　　）　てがみを　かきます。",
    highlight: "（　　）",
    options: ["で", "に", "を", "が"],
    answer: 0,
    translation: "Saya menulis surat dengan pensil."
  },
  {
    id: 43,
    question: "あそこに　さとうさんが（　　）　います。",
    highlight: "（　　）",
    options: ["たって", "たつ", "たった", "たちます"],
    answer: 0,
    translation: "Pak Sato sedang berdiri di sana."
  },
  {
    id: 44,
    question: "きのうの　パーティーは　とても（　　）。",
    highlight: "（　　）",
    options: ["にぎやかでした", "にぎやかです", "にぎやかだった", "にぎやかくないです"],
    answer: 0,
    translation: "Pesta kemarin sangat ramai."
  },
  {
    id: 45,
    question: "りんごと　みかんと、どちら（　　）　すきですか。",
    highlight: "（　　）",
    options: ["が", "を", "は", "で"],
    answer: 0,
    translation: "Apel dan jeruk, mana yang lebih kamu suka?"
  },
  {
    id: 46,
    question: "わたしは　みかんの（　　）が　すきです。",
    highlight: "（　　）",
    options: ["ほう", "より", "など", "ごろ"],
    answer: 0,
    translation: "Saya lebih suka jeruk."
  },
  {
    id: 47,
    question: "ここは　あぶないですから、はいら（　　）　ください。",
    highlight: "（　　）",
    options: ["ないで", "なくて", "ない", "なかった"],
    answer: 0,
    translation: "Karena di sini berbahaya, tolong jangan masuk."
  },
  {
    id: 48,
    question: "わたしは（　　）　としょかんへ　ほんを　よみに　いきます。",
    highlight: "（　　）",
    options: ["よく", "あまり", "ぜんぜん", "いちばん"],
    answer: 0,
    translation: "Saya sering pergi ke perpustakaan untuk membaca buku."
  },
  {
    id: 49,
    question: "たんじょうびに　あたらしい　パソコンが（　　）です。",
    highlight: "（　　）",
    options: ["ほしい", "ほしくない", "ほしかった", "ほしくて"],
    answer: 0,
    translation: "Di hari ulang tahun, saya ingin komputer (laptop) baru."
  },
  {
    id: 50,
    question: "としょかんへ　ほんを（　　）に　いきます。",
    highlight: "（　　）",
    options: ["かり", "かりる", "かりて", "かります"],
    answer: 0,
    translation: "Saya pergi ke perpustakaan untuk meminjam buku."
  },
  {
    id: 51,
    question: "よる　ねる（　　）に、はを　みがきます。",
    highlight: "（　　）",
    options: ["まえ", "あと", "とき", "ながら"],
    answer: 0,
    translation: "Sebelum tidur malam, saya menggosok gigi."
  },
  {
    id: 52,
    question: "わたしは　にほんごを　１ねん（　　）　べんきょうしました。",
    highlight: "（　　）",
    options: ["かん", "など", "ごろ", "しか"],
    answer: 0,
    translation: "Saya telah belajar bahasa Jepang selama 1 tahun."
  },
  {
    id: 53,
    question: "きのうの　やすみは、ほんを（　　）、テレビを　みたり　しました。",
    highlight: "（　　）",
    options: ["よんだり", "よむ", "よんで", "よみます"],
    answer: 0,
    translation: "Pada hari libur kemarin, saya membaca buku, menonton TV, dll."
  },
  {
    id: 54,
    question: "つくえの　なかに　ペン（　　）　ノートなどが　あります。",
    highlight: "（　　）",
    options: ["や", "は", "しか", "へ"],
    answer: 0,
    translation: "Di dalam meja ada pena, buku catatan, dan lain-lain."
  },
  {
    id: 55,
    question: "ばんごはんを（　　）から、おふろに　はいります。",
    highlight: "（　　）",
    options: ["たべて", "たべる", "たべた", "たべます"],
    answer: 0,
    translation: "Setelah makan malam, saya masuk ke bak mandi (mandi)."
  },
  {
    id: 56,
    question: "この　パソコンは（　　）、とても　べんりです。",
    highlight: "（　　）",
    options: ["かるくて", "かるい", "かるく", "かるかった"],
    answer: 0,
    translation: "Komputer (laptop) ini ringan dan sangat praktis."
  },
  {
    id: 57,
    question: "わたしは　まいあさ、こうえん（　　）　さんぽします。",
    highlight: "（　　）",
    options: ["を", "が", "に", "や"],
    answer: 0,
    translation: "Setiap pagi, saya berjalan-jalan di taman."
  },
  {
    id: 58,
    question: "あなたの　かばんは（　　）ですか。",
    highlight: "（　　）",
    options: ["どれ", "だれ", "なにか", "いつ"],
    answer: 0,
    translation: "Tas Anda yang mana?"
  },
  {
    id: 59,
    question: "すみません、この　じしょを（　　）も　いいですか。",
    highlight: "（　　）",
    options: ["つかっても", "つかって", "つかう", "つかわない"],
    answer: 0,
    translation: "Permisi, bolehkah saya menggunakan kamus ini?"
  },
  {
    id: 60,
    question: "これは　わたしが（　　）　しゃしんです。",
    highlight: "（　　）",
    options: ["とった", "とる", "とって", "とります"],
    answer: 0,
    translation: "Ini adalah foto yang saya ambil."
  },
  {
    id: 61,
    question: "あの　めがねを（　　）　ひとが　たなかさんです。",
    highlight: "（　　）",
    options: ["かけている", "かける", "かけた", "かけます"],
    answer: 0,
    translation: "Orang yang sedang memakai kacamata itu adalah Pak Tanaka."
  },
    {
    id: 62,
    question: "きのう、ともだち（　　）　てがみを　かきました。",
    highlight: "（　　）",
    options: ["に", "を", "が", "で"],
    answer: 0,
    translation: "Kemarin, saya menulis surat kepada teman."
  },
  {
    id: 63,
    question: "この　へやは　あかるくて、（　　）です。",
    highlight: "（　　）",
    options: ["きれい", "きれいく", "きれいな", "きれいに"],
    answer: 0,
    translation: "Kamar ini terang dan bersih."
  },
  {
    id: 64,
    question: "おもいですね。その　にもつを　もち（　　）か。",
    highlight: "（　　）",
    options: ["ましょう", "ます", "ません", "たい"],
    answer: 0,
    translation: "Berat ya. Maukah saya bawakan barang bawaan itu?"
  },
  {
    id: 65,
    question: "すみません、りんごを　いつつ（　　）　ください。",
    highlight: "（　　）",
    options: ["と", "を", "が", "の"],
    answer: 1,
    translation: "Permisi, tolong beri saya 5 buah apel."
  },
  {
    id: 66,
    question: "まいあさ　６じはん（　　）　おきます。",
    highlight: "（　　）",
    options: ["に", "で", "を", "へ"],
    answer: 0,
    translation: "Setiap pagi saya bangun pada jam 6 setengah (6:30)."
  },
  {
    id: 67,
    question: "ここに　あなたの　なまえを（　　）　ください。",
    highlight: "（　　）",
    options: ["かいて", "かく", "かいた", "かかない"],
    answer: 0,
    translation: "Tolong tulis nama Anda di sini."
  },
  {
    id: 68,
    question: "あの　ひとは（　　）ですか。",
    highlight: "（　　）",
    options: ["だれ", "どこ", "いつ", "なに"],
    answer: 0,
    translation: "Orang itu siapa?"
  },
  {
    id: 69,
    question: "にほんごと　えいごと、どちら（　　）　むずかしいですか。",
    highlight: "（　　）",
    options: ["が", "を", "は", "に"],
    answer: 0,
    translation: "Bahasa Jepang dan bahasa Inggris, mana yang lebih sulit?"
  },
  {
    id: 70,
    question: "あしたは　にちようびですから、がっこうへ（　　）も　いいです。",
    highlight: "（　　）",
    options: ["いかなくて", "いかないで", "いく", "いって"],
    answer: 0,
    translation: "Karena besok hari Minggu, tidak pergi ke sekolah pun tidak apa-apa (boleh)."
  },
  {
    id: 71,
    question: "わたしは　はさみ（　　）　かみを　きります。",
    highlight: "（　　）",
    options: ["で", "に", "を", "が"],
    answer: 0,
    translation: "Saya memotong kertas dengan gunting."
  },
  {
    id: 72,
    question: "きのうの　りょこうは　あまり（　　）。",
    highlight: "（　　）",
    options: ["たのしくなかったです", "たのしいです", "たのしかった", "たのしくないです"],
    answer: 0,
    translation: "Perjalanan (wisata) kemarin tidak begitu menyenangkan."
  },
  {
    id: 73,
    question: "あした、デパートへ　ふくを（　　）に　いきます。",
    highlight: "（　　）",
    options: ["かい", "かう", "かって", "かいます"],
    answer: 0,
    translation: "Besok, saya akan pergi ke pusat perbelanjaan untuk membeli baju."
  },
  {
    id: 74,
    question: "きょうしつに　がくせいが　４（　　）　います。",
    highlight: "（　　）",
    options: ["にん", "こ", "まい", "さつ"],
    answer: 0,
    translation: "Di ruang kelas ada 4 orang siswa."
  },
  {
    id: 75,
    question: "わたしの　しゅみは　えを（　　）　ことです。",
    highlight: "（　　）",
    options: ["かく", "かいて", "かいた", "かきます"],
    answer: 0,
    translation: "Hobi saya adalah menggambar (melukis) gambar."
  },
  {
    id: 76,
    question: "この　バスは、えき（　　）　しゅっぱつします。",
    highlight: "（　　）",
    options: ["から", "まで", "に", "を"],
    answer: 0,
    translation: "Bus ini berangkat dari stasiun."
  },
  {
    id: 77,
    question: "あめが　ふっていますから、タクシーに（　　）ましょう。",
    highlight: "（　　）",
    options: ["のり", "のる", "のって", "のらない"],
    answer: 0,
    translation: "Karena sedang hujan, mari kita naik taksi."
  },
  {
    id: 78,
    question: "いま、さいふの　なかに　１００えん（　　）　ありません。",
    highlight: "（　　）",
    options: ["しか", "だけ", "くらい", "など"],
    answer: 0,
    translation: "Sekarang, di dalam dompet hanya ada 100 yen (tidak ada selain 100 yen)."
  },
  {
    id: 79,
    question: "わたしは　はは（　　）　とけいを　もらいました。",
    highlight: "（　　）",
    options: ["に", "を", "が", "で"],
    answer: 0,
    translation: "Saya menerima jam tangan dari ibu."
  },
  {
    id: 80,
    question: "あには　いま、へやで　ほんを（　　）　います。",
    highlight: "（　　）",
    options: ["よんで", "よむ", "よんだ", "よみます"],
    answer: 0,
    translation: "Kakak laki-laki sekarang sedang membaca buku di kamar."
  },
  {
    id: 81,
    question: "だいがくの　なつやすみは（　　）からですか。",
    highlight: "（　　）",
    options: ["いつ", "だれ", "どこ", "なに"],
    answer: 0,
    translation: "Libur musim panas universitas mulai kapan?"
  },
    {
    id: 82,
    question: "わたしの　かばんは　あの　いすの　うえ（　　）　あります。",
    highlight: "（　　）",
    options: ["に", "を", "で", "へ"],
    answer: 0,
    translation: "Tas saya ada di atas kursi itu."
  },
  {
    id: 83,
    question: "きのうの　テストは　ぜんぜん（　　）。",
    highlight: "（　　）",
    options: ["よくなかったです", "いいです", "よくないです", "よかったです"],
    answer: 0,
    translation: "Ujian kemarin sama sekali tidak bagus."
  },
  {
    id: 84,
    question: "わたしは　やまださん（　　）　にほんごを　おしえて　もらいました。",
    highlight: "（　　）",
    options: ["に", "を", "が", "で"],
    answer: 0,
    translation: "Saya diajari bahasa Jepang oleh Pak Yamada."
  },
  {
    id: 85,
    question: "ここに　かばんを（　　）　ください。",
    highlight: "（　　）",
    options: ["おいて", "おく", "おいた", "おきます"],
    answer: 0,
    translation: "Tolong letakkan tas di sini."
  },
  {
    id: 86,
    question: "わたしは（　　）　スポーツを　しません。",
    highlight: "（　　）",
    options: ["ぜんぜん", "いつも", "よく", "たくさん"],
    answer: 0,
    translation: "Saya sama sekali tidak berolahraga."
  },
  {
    id: 87,
    question: "あの　しろい　たてものは（　　）ですか。",
    highlight: "（　　）",
    options: ["なん", "だれ", "いつ", "どれ"],
    answer: 0,
    translation: "Bangunan putih itu apa?"
  },
  {
    id: 88,
    question: "あさ　おきて、かおを（　　）、あさごはんを　たべます。",
    highlight: "（　　）",
    options: ["あらって", "あらう", "あらった", "あらいます"],
    answer: 0,
    translation: "Pagi hari bangun, mencuci muka, lalu makan sarapan."
  },
  {
    id: 89,
    question: "わたしは　あまい　おかし（　　）　すきです。",
    highlight: "（　　）",
    options: ["が", "を", "に", "で"],
    answer: 0,
    translation: "Saya suka camilan manis."
  },
  {
    id: 90,
    question: "バスと　でんしゃと、どちら（　　）　はやいですか。",
    highlight: "（　　）",
    options: ["が", "は", "を", "で"],
    answer: 0,
    translation: "Bus dan kereta, mana yang lebih cepat?"
  },
  {
    id: 91,
    question: "コンビニへ　おべんとうを（　　）に　いきます。",
    highlight: "（　　）",
    options: ["かい", "かう", "かって", "かいます"],
    answer: 0,
    translation: "Pergi ke minimarket untuk membeli bento (bekal makan siang)."
  },
  {
    id: 92,
    question: "まいにち　８じかん（　　）　はたらきます。",
    highlight: "（　　）",
    options: ["ぐらい", "ごろ", "など", "しか"],
    answer: 0,
    translation: "Setiap hari bekerja kira-kira 8 jam."
  },
  {
    id: 93,
    question: "ここで　たばこを（　　）も　いいですか。",
    highlight: "（　　）",
    options: ["すって", "すう", "すった", "すわない"],
    answer: 0,
    translation: "Bolehkah merokok di sini?"
  },
  {
    id: 94,
    question: "その　シャツを　３（　　）　ください。",
    highlight: "（　　）",
    options: ["まい", "こ", "さつ", "ほん"],
    answer: 0,
    translation: "Tolong beri saya 3 helai kemeja itu."
  },
  {
    id: 95,
    question: "ギターを（　　）ことが　できますか。",
    highlight: "（　　）",
    options: ["ひく", "ひいて", "ひいた", "ひきます"],
    answer: 0,
    translation: "Apakah kamu bisa bermain gitar?"
  },
  {
    id: 96,
    question: "（　　）、にほんへ　きましたか。",
    highlight: "（　　）",
    options: ["いつ", "だれ", "どこ", "なに"],
    answer: 0,
    translation: "Kapan kamu datang ke Jepang?"
  },
  {
    id: 97,
    question: "テレビ（　　）　にほんの　ニュースを　みました。",
    highlight: "（　　）",
    options: ["で", "に", "を", "が"],
    answer: 0,
    translation: "Saya menonton berita Jepang di (melalui) televisi."
  },
  {
    id: 98,
    question: "つぎの　かどを　みぎ（　　）　まがって　ください。",
    highlight: "（　　）",
    options: ["に", "を", "で", "が"],
    answer: 0,
    translation: "Tolong belok ke kanan di sudut (belokan) berikutnya."
  },
  {
    id: 99,
    question: "きのうは　うたを（　　）、おどったり　しました。",
    highlight: "（　　）",
    options: ["うたったり", "うたう", "うたって", "うたいます"],
    answer: 0,
    translation: "Kemarin saya menyanyi, menari, dan lain-lain."
  },
  {
    id: 100,
    question: "もう　１２じですね。おそく（　　）ね。",
    highlight: "（　　）",
    options: ["なりました", "なります", "なって", "なる"],
    answer: 0,
    translation: "Sudah jam 12 ya. Sudah menjadi larut ya."
  },
  {
    id: 101,
    question: "わたしの　かぞくは　４（　　）です。",
    highlight: "（　　）",
    options: ["にん", "ひと", "めい", "こ"],
    answer: 0,
    translation: "Keluarga saya ada 4 orang."
  }
];
