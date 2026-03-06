// 第2科目 問題4：内容理解（短文）
// JLPT N5 レベル - 短い文章を読んで質問に答える
const naiyouTanbunData = [
  {
    id: 1,
    question: "【読む文章】やまださんは　まいあさ　6じに　おきます。7じに　あさごはんを　たべます。8じに　いえを　でます。\n\n【質問】やまださんは　なんじに　あさごはんを　たべますか。",
    highlight: "なんじに　あさごはんを　たべますか",
    options: ["6じ", "7じ", "8じ", "9じ"],
    answer: 1,
    translation: "Yamada-san bangun jam 6 setiap pagi. Makan pagi jam 7. Keluar rumah jam 8.\n\nPertanyaan: Jam berapa Yamada-san makan pagi?"
  },
    {
    id: 2,
    question: "【読む文章】きのう　スーパーへ　いきました。りんごを　3つと　みかんを　5つ　かいました。\n\n【質問】みかんを　いくつ　かいましたか。",
    highlight: "みかんを　いくつ　かいましたか",
    options: ["2つ", "3つ", "5つ", "8つ"],
    answer: 2,
    translation: "Kemarin saya pergi ke supermarket. Saya membeli 3 buah apel dan 5 buah jeruk.\n\nPertanyaan: Berapa banyak jeruk yang dibeli? 5 buah."
  },
  {
    id: 3,
    question: "【読む文章】わたしは　まいにち　バスで　がっこうへ　いきます。バスの　あと、5ふん　あるきます。\n\n【質問】どうやって　がっこうへ　いきますか。",
    highlight: "どうやって　がっこうへ　いきますか",
    options: ["じてんしゃ", "バスと　あるき", "でんしゃ", "くるま"],
    answer: 1,
    translation: "Saya setiap hari pergi ke sekolah dengan bus. Setelah turun dari bus, saya berjalan kaki selama 5 menit.\n\nPertanyaan: Bagaimana cara pergi ke sekolah? Dengan bus dan berjalan kaki."
  },
  {
    id: 4,
    question: "【読む文章】きょうは　あめです。でも、あしたは　はれです。あさってはおそらく　くもりです。\n\n【質問】あしたの　てんきは　どうですか。",
    highlight: "あしたの　てんきは　どうですか",
    options: ["あめ", "はれ", "くもり", "ゆき"],
    answer: 1,
    translation: "Hari ini hujan. Tetapi, besok cerah. Lusa mungkin berawan.\n\nPertanyaan: Bagaimana cuaca besok? Cerah."
  },
  {
    id: 5,
    question: "【読む文章】わたしの　かぞくは　4にんです。ちちと、ははと、あねが　います。\n\n【質問】このひとに　きょうだいは　いますか。",
    highlight: "きょうだいは　いますか",
    options: ["あにが　います", "あねが　います", "いもうとが　います", "おとうとが　います"],
    answer: 1,
    translation: "Keluarga saya terdiri dari 4 orang. Ada ayah, ibu, dan kakak perempuan.\n\nPertanyaan: Apakah orang ini memiliki saudara? Ada kakak perempuan."
  },
  {
    id: 6,
    question: "【読む文章】どようびに　ともだちと　こうえんへ　いきました。こうえんで　サッカーを　しました。\n\n【質問】どようびに　どこで　なにを　しましたか。",
    highlight: "どこで　なにを　しましたか",
    options: ["がっこうで　べんきょうしました", "としょかんで　ほんを　よみました", "こうえんで　サッカーを　しました", "うちで　テレビを　みました"],
    answer: 2,
    translation: "Pada hari Sabtu saya pergi ke taman bersama teman. Di taman kami bermain sepak bola.\n\nPertanyaan: Di mana dan apa yang dilakukan pada hari Sabtu? Bermain sepak bola di taman."
  },
  {
    id: 7,
    question: "【読む文章】きのうの　よる、ほんを　よみました。10ページから　20ページまで　よみました。\n\n【質問】なんページ　よみましたか。",
    highlight: "なんページ　よみましたか",
    options: ["10ページ", "15ページ", "20ページ", "30ページ"],
    answer: 0,
    translation: "Tadi malam, saya membaca buku. Saya membaca dari halaman 10 sampai halaman 20.\n\nPertanyaan: Berapa halaman yang dibaca? 10 halaman."
  },
  {
    id: 8,
    question: "【読む文章】きょうの　ひるごはんを　レストランで　たべました。カレーと　コーヒーを　たのみました。ケーキは　たべませんでした。\n\n【質問】なにを　のみましたか。",
    highlight: "なにを　のみましたか",
    options: ["おちゃ", "コーヒー", "ジュース", "みず"],
    answer: 1,
    translation: "Saya makan siang hari ini di restoran. Saya memesan kari dan kopi. Saya tidak makan kue.\n\nPertanyaan: Apa yang diminum? Kopi."
  },
  {
    id: 9,
    question: "【読む文章】あしたは　ははの　たんじょうびです。わたしは　ははに　はなを　あげます。\n\n【質問】だれの　たんじょうびですか。",
    highlight: "だれの　たんじょうびですか",
    options: ["わたし", "ちち", "はは", "あね"],
    answer: 2,
    translation: "Besok adalah hari ulang tahun ibu. Saya akan memberikan bunga kepada ibu.\n\nPertanyaan: Ulang tahun siapa? Ibu."
  },
  {
    id: 10,
    question: "【読む文章】わたしの　うちには　いぬが　1ぴきと　ねこが　2ひき　います。\n\n【質問】どうぶつは　ぜんぶで　なんびき　いますか。",
    highlight: "ぜんぶで　なんびき　いますか",
    options: ["1ぴき", "2ひき", "3びき", "4ひき"],
    answer: 2,
    translation: "Di rumah saya ada 1 ekor anjing dan 2 ekor kucing.\n\nPertanyaan: Total ada berapa ekor hewan? 3 ekor."
  },
  {
    id: 11,
    question: "【読む文章】スミスさんは　あおが　すきです。あかや　きいろは　あまり　すきでは　ありません。\n\n【質問】スミスさんの　すきな　いろは　どれですか。",
    highlight: "すきな　いろは　どれですか",
    options: ["あか", "あお", "きいろ", "くろ"],
    answer: 1,
    translation: "Smith-san suka warna biru. Merah atau kuning tidak begitu suka.\n\nPertanyaan: Warna apa yang disukai Smith-san? Biru."
  },
  {
    id: 12,
    question: "【読む文章】きのう　ごご7じから　9じまで　にほんごを　べんきょうしました。そのあと、おふろに　はいりました。\n\n【質問】にほんごを　なんじかん　べんきょうしましたか。",
    highlight: "なんじかん　べんきょうしましたか",
    options: ["1じかん", "2じかん", "7じかん", "9じかん"],
    answer: 1,
    translation: "Kemarin saya belajar bahasa Jepang dari jam 7 malam sampai jam 9 malam. Setelah itu, saya mandi.\n\nPertanyaan: Berapa jam belajar bahasa Jepang? 2 jam."
  },
  {
    id: 13,
    question: "【読む文章】じしょは　つくえの　うえに　あります。かばんは　つくえの　したに　あります。\n\n【質問】じしょは　どこに　ありますか。",
    highlight: "じしょは　どこに　ありますか",
    options: ["かばんの　なか", "いすの　うえ", "つくえの　した", "つくえの　うえ"],
    answer: 3,
    translation: "Kamus ada di atas meja. Tas ada di bawah meja.\n\nPertanyaan: Di mana kamus berada? Di atas meja."
  },
  {
    id: 14,
    question: "【読む文章】たなかさんは　テニスと　すいえいが　すきです。でも、やきゅうは　すきでは　ありません。\n\n【質問】たなかさんが　すきな　スポーツは　どれですか。",
    highlight: "すきな　スポーツは　どれですか",
    options: ["テニスと　すいえい", "やきゅうと　テニス", "すいえいと　やきゅう", "やきゅうだけ"],
    answer: 0,
    translation: "Tanaka-san suka tenis dan renang. Tetapi, dia tidak suka bisbol.\n\nPertanyaan: Olahraga apa yang disukai Tanaka-san? Tenis dan renang."
  },
  {
    id: 15,
    question: "【読む文章】この　えんぴつは　50えんです。けしゴムは　100えんです。ノートは　150えんです。\n\n【質問】いちばん　やすい　ものは　どれですか。",
    highlight: "いちばん　やすい　ものは　どれですか",
    options: ["えんぴつ", "けしゴム", "ノート", "ぜんぶ　おなじ"],
    answer: 0,
    translation: "Pensil ini harganya 50 yen. Penghapus harganya 100 yen. Buku catatan harganya 150 yen.\n\nPertanyaan: Mana barang yang paling murah? Pensil."
  },
  {
    id: 16,
    question: "【読む文章】らいしゅうの　にちようびに　きょうとへ　いきます。ともだちと　いっしょに　しんかんせんで　いきます。\n\n【質問】だれと　きょうとへ　いきますか。",
    highlight: "だれと　きょうとへ　いきますか",
    options: ["ひとりで", "かぞくと", "せんせいと", "ともだちと"],
    answer: 3,
    translation: "Hari Minggu minggu depan saya akan pergi ke Kyoto. Saya akan pergi bersama teman menggunakan Shinkansen.\n\nPertanyaan: Bersama siapa pergi ke Kyoto? Bersama teman."
  },
  {
    id: 17,
    question: "【読む文章】きょうは　あたまが　いたいです。それから、ねつも　あります。だから、がっこうを　やすみます。\n\n【質問】どうして　がっこうを　やすみますか。",
    highlight: "どうして　がっこうを　やすみますか",
    options: ["おなかが　いたいから", "あたまが　いたくて　ねつが　あるから", "ねむいから", "ようじが　あるから"],
    answer: 1,
    translation: "Hari ini kepala saya sakit. Selain itu, saya juga demam. Karena itu, saya libur sekolah.\n\nPertanyaan: Kenapa libur sekolah? Karena sakit kepala dan demam."
  },
  {
    id: 18,
    question: "【読む文章】ワンさんは　いつも　しろい　シャツを　きています。でも、きょうは　くろい　シャツを　きています。\n\n【質問】きょう、ワンさんは　なにいろの　シャツを　きていますか。",
    highlight: "なにいろの　シャツを　きていますか",
    options: ["しろ", "くろ", "あか", "あお"],
    answer: 1,
    translation: "Wang-san biasanya memakai kemeja putih. Tapi hari ini dia memakai kemeja hitam.\n\nPertanyaan: Hari ini, kemeja warna apa yang dipakai Wang-san? Hitam."
  },
  {
    id: 19,
    question: "【読む文章】にほんの　なつは　とても　あついです。ふゆは　さむいです。わたしは　すずしい　あきが　いちばん　すきです。\n\n【質問】このひとは　いつが　いちばん　すきですか。",
    highlight: "いつが　いちばん　すきですか",
    options: ["はる", "なつ", "あき", "ふゆ"],
    answer: 2,
    translation: "Musim panas di Jepang sangat panas. Musim dingin dingin. Saya paling suka musim gugur yang sejuk.\n\nPertanyaan: Orang ini paling suka musim apa? Musim gugur."
  },
  {
    id: 20,
    question: "【読む文章】ゆうびんきょくで　きってを　かいました。それから、くにの　ははに　てがみを　だしました。\n\n【質問】だれに　てがみを　だしましたか。",
    highlight: "だれに　てがみを　だしましたか",
    options: ["ちち", "はは", "ともだち", "せんせい"],
    answer: 1,
    translation: "Saya membeli prangko di kantor pos. Setelah itu, saya mengirim surat kepada ibu di negara asal.\n\nPertanyaan: Kepada siapa surat dikirim? Ibu."
  },
  {
    id: 21,
    question: "【読む文章】きのうは　10じに　ねました。きょうは　やすみですから、あさ　9じに　おきました。\n\n【質問】きょう、なんじに　おきましたか。",
    highlight: "なんじに　おきましたか",
    options: ["7じ", "8じ", "9じ", "10じ"],
    answer: 2,
    translation: "Kemarin saya tidur jam 10. Karena hari ini libur, saya bangun jam 9 pagi.\n\nPertanyaan: Hari ini, bangun jam berapa? Jam 9."
  },
    {
    id: 22,
    question: "【読む文章】きのう　びょういんへ　いきました。バスで　30ぷん　かかりました。\n\n【質問】どうやって　びょういんへ　いきましたか。",
    highlight: "どうやって　びょういんへ　いきましたか",
    options: ["あるいて", "でんしゃで", "バスで", "タクシーで"],
    answer: 2,
    translation: "Kemarin saya pergi ke rumah sakit. Membutuhkan waktu 30 menit dengan bus.\n\nPertanyaan: Bagaimana cara pergi ke rumah sakit? Dengan bus."
  },
  {
    id: 23,
    question: "【読む文章】けさ、パンと　たまごを　たべました。ぎゅうにゅうは　のみませんでした。\n\n【質問】けさ、なにを　のみましたか。",
    highlight: "なにを　のみましたか",
    options: ["パン", "たまご", "ぎゅうにゅう", "なにも　のみませんでした"],
    answer: 3,
    translation: "Pagi ini, saya makan roti dan telur. Saya tidak minum susu.\n\nPertanyaan: Pagi ini, minum apa? Tidak minum apa-apa."
  },
  {
    id: 24,
    question: "【読む文章】デパートで　あかい　シャツと　くろい　くつを　かいました。かばんは　かいませんでした。\n\n【質問】デパートで　なにを　かいましたか。",
    highlight: "なにを　かいましたか",
    options: ["あかい　シャツと　くろい　くつ", "あかい　くつと　くろい　シャツ", "くろい　くつと　かばん", "あかい　シャツと　かばん"],
    answer: 0,
    translation: "Di toserba saya membeli kemeja merah dan sepatu hitam. Saya tidak membeli tas.\n\nPertanyaan: Apa yang dibeli di toserba? Kemeja merah dan sepatu hitam."
  },
  {
    id: 25,
    question: "【読む文章】きょうは　がっこうの　としょかんで　ほんを　3さつ　かりました。あした　よみます。\n\n【質問】どこで　ほんを　かりましたか。",
    highlight: "どこで　ほんを　かりましたか",
    options: ["ほんや", "がっこうの　としょかん", "きょうしつ", "としょかんの　ちかく"],
    answer: 1,
    translation: "Hari ini saya meminjam 3 buku di perpustakaan sekolah. Besok saya akan membacanya.\n\nPertanyaan: Di mana meminjam buku? Perpustakaan sekolah."
  },
  {
    id: 26,
    question: "【読む文章】あしたは　きんようびです。あさって、ともだちと　えいがを　みに　いきます。\n\n【質問】えいがを　みに　いくのは　なんようびですか。",
    highlight: "なんようびですか",
    options: ["もくようび", "きんようび", "どようび", "にちようび"],
    answer: 2,
    translation: "Besok adalah hari Jumat. Lusa, saya akan pergi menonton film bersama teman.\n\nPertanyaan: Hari apa pergi menonton film? Hari Sabtu."
  },
  {
    id: 27,
    question: "【読む文章】わたしは　まいにち　おんがくを　ききます。でも、テレビは　ぜんぜん　みません。\n\n【質問】テレビを　よく　みますか。",
    highlight: "テレビを　よく　みますか",
    options: ["まいにち　みます", "ときどき　みます", "あまり　みません", "ぜんぜん　みません"],
    answer: 3,
    translation: "Saya mendengarkan musik setiap hari. Tetapi, saya sama sekali tidak menonton TV.\n\nPertanyaan: Apakah sering menonton TV? Sama sekali tidak menonton."
  },
  {
    id: 28,
    question: "【読む文章】ねこが　ベッドの　したで　ねています。いぬは　ドアの　まえに　います。\n\n【質問】ねこは　どこに　いますか。",
    highlight: "ねこは　どこに　いますか",
    options: ["ベッドの　うえ", "ベッドの　した", "ドアの　まえ", "ドアの　うしろ"],
    answer: 1,
    translation: "Kucing sedang tidur di bawah tempat tidur. Anjing ada di depan pintu.\n\nPertanyaan: Di mana kucing berada? Di bawah tempat tidur."
  },
  {
    id: 29,
    question: "【読む文章】ちちは　いしゃです。ははは　せんせいです。わたしは　だいがくせいです。\n\n【質問】せんせいは　だれですか。",
    highlight: "せんせいは　だれですか",
    options: ["ちち", "はは", "わたし", "だれも　いません"],
    answer: 1,
    translation: "Ayah adalah seorang dokter. Ibu adalah seorang guru. Saya adalah mahasiswa.\n\nPertanyaan: Siapa yang menjadi guru? Ibu."
  },
  {
    id: 30,
    question: "【読む文章】にちようびの　あさ、へやの　そうじを　しました。ごご、せんたくを　しました。\n\n【質問】いつ　せんたくを　しましたか。",
    highlight: "いつ　せんたくを　しましたか",
    options: ["どようびの　あさ", "どようびの　ごご", "にちようびの　あさ", "にちようびの　ごご"],
    answer: 3,
    translation: "Pada hari Minggu pagi, saya membersihkan kamar. Sore harinya, saya mencuci baju.\n\nPertanyaan: Kapan mencuci baju? Hari Minggu sore."
  },
  {
    id: 31,
    question: "【読む文章】りんごは　ひとつ　100えんです。バナナは　ひとつ　50えんです。りんごと　バナナを　ひとつずつ　かいました。\n\n【質問】ぜんぶで　いくらですか。",
    highlight: "ぜんぶで　いくらですか",
    options: ["50えん", "100えん", "150えん", "200えん"],
    answer: 2,
    translation: "Apel harganya 100 yen per buah. Pisang harganya 50 yen per buah. Saya membeli masing-masing satu apel dan satu pisang.\n\nPertanyaan: Totalnya berapa? 150 yen."
  },
  {
    id: 32,
    question: "【読む文章】きのうの　よる、くにの　ともだちに　でんわを　かけました。30ぷんぐらい　はなしました。\n\n【質問】だれと　はなしましたか。",
    highlight: "だれと　はなしましたか",
    options: ["かぞく", "せんせい", "ともだち", "だれとも　はなしませんでした"],
    answer: 2,
    translation: "Tadi malam, saya menelepon teman di negara asal. Kami berbicara selama sekitar 30 menit.\n\nPertanyaan: Berbicara dengan siapa? Teman."
  },
  {
    id: 33,
    question: "【読む文章】この　えいがは　ながかったです。そして、つまらなかったです。\n\n【質問】この　えいがは　どうでしたか。",
    highlight: "えいがは　どうでしたか",
    options: ["みじかくて　おもしろかったです", "ながくて　おもしろかったです", "みじかくて　つまらなかったです", "ながくて　つまらなかったです"],
    answer: 3,
    translation: "Film ini panjang. Dan juga, membosankan.\n\nPertanyaan: Bagaimana film ini? Panjang dan membosankan."
  },
  {
    id: 34,
    question: "【読む文章】あしたの　おひる、いっしょに　ごはんを　たべませんか。えきまえの　あたらしい　レストランへ　いきましょう。\n\n【質問】あしたの　ひる、なにを　しますか。",
    highlight: "なにを　しますか",
    options: ["えきへ　いきます", "あたらしい　レストランで　ごはんを　たべます", "ともだちの　うちへ　いきます", "ひとりで　ごはんを　たべます"],
    answer: 1,
    translation: "Makan siang besok, maukah makan bersama? Mari kita pergi ke restoran baru di depan stasiun.\n\nPertanyaan: Siang besok, apa yang akan dilakukan? Makan di restoran baru."
  },
  {
    id: 35,
    question: "【読む文章】きょうは　パソコンを　たくさん　つかいましたから、めが　いたいです。\n\n【質問】どうして　めが　いたいですか。",
    highlight: "どうして　めが　いたいですか",
    options: ["テレビを　たくさん　みたから", "ほんを　たくさん　よんだから", "パソコンを　たくさん　つかったから", "よく　ねなかったから"],
    answer: 2,
    translation: "Hari ini karena saya banyak menggunakan komputer, mata saya sakit.\n\nPertanyaan: Mengapa mata sakit? Karena banyak menggunakan komputer."
  },
  {
    id: 36,
    question: "【読む文章】あさごはんは　いつも　パンです。ときどき　ごはんを　たべます。\n\n【質問】いつも　あさに　なにを　たべますか。",
    highlight: "いつも　あさに　なにを　たべますか",
    options: ["パン", "ごはん", "パンと　ごはん", "なにも　たべません"],
    answer: 0,
    translation: "Sarapan selalu roti. Kadang-kadang makan nasi.\n\nPertanyaan: Apa yang selalu dimakan di pagi hari? Roti."
  },
  {
    id: 37,
    question: "【読む文章】わたしは　あにと　いもうとが　います。あには　20さいです。いもうとは　15さいです。わたしは　18さいです。\n\n【質問】いちばん　わかい　ひとは　だれですか。",
    highlight: "いちばん　わかい　ひとは　だれですか",
    options: ["あに", "わたし", "いもうと", "みんな　おなじです"],
    answer: 2,
    translation: "Saya memiliki kakak laki-laki dan adik perempuan. Kakak laki-laki berumur 20 tahun. Adik perempuan berumur 15 tahun. Saya berumur 18 tahun.\n\nPertanyaan: Siapa orang yang paling muda? Adik perempuan."
  },
  {
    id: 38,
    question: "【読む文章】おとうとから　きれいな　かばんを　もらいました。とても　うれしいです。\n\n【質問】だれが　かばんを　あげましたか。",
    highlight: "だれが　かばんを　あげましたか",
    options: ["わたし", "おとうと", "あに", "ともだち"],
    answer: 1,
    translation: "Saya menerima tas yang cantik dari adik laki-laki. Saya sangat senang.\n\nPertanyaan: Siapa yang memberikan tas? Adik laki-laki."
  },
  {
    id: 39,
    question: "【読む文章】つぎの　しんごうを　みぎへ　まがってください。そのあと、まっすぐ　いってください。\n\n【質問】しんごうを　どうしますか。",
    highlight: "しんごうを　どうしますか",
    options: ["みぎへ　まがります", "ひだりへ　まがります", "まっすぐ　いきます", "とまります"],
    answer: 0,
    translation: "Tolong belok kanan di lampu lalu lintas berikutnya. Setelah itu, tolong jalan lurus.\n\nPertanyaan: Apa yang dilakukan di lampu lalu lintas? Belok kanan."
  },
  {
    id: 40,
    question: "【読む文章】きょうしつに　おとこのこが　3にん、おんなのこが　4にん　います。せんせいは　1にん　います。\n\n【質問】きょうしつに　ぜんぶで　なんにん　いますか。",
    highlight: "ぜんぶで　なんにん　いますか",
    options: ["3にん", "4にん", "7にん", "8にん"],
    answer: 3,
    translation: "Di ruang kelas ada 3 anak laki-laki, 4 anak perempuan. Ada 1 orang guru.\n\nPertanyaan: Total ada berapa orang di ruang kelas? 8 orang."
  },
  {
    id: 41,
    question: "【読む文章】コーヒーは　あつかったですが、とても　おいしかったです。ケーキは　あまくなかったです。\n\n【質問】ケーキは　どうでしたか。",
    highlight: "ケーキは　どうでしたか",
    options: ["あつかったです", "おいしかったです", "あまかったです", "あまくなかったです"],
    answer: 3,
    translation: "Kopinya panas, tetapi sangat enak. Kuenya tidak manis.\n\nPertanyaan: Bagaimana kuenya? Tidak manis."
  },
    {
    id: 42,
    question: "【読む文章】らいしゅう、ひこうきで　アメリカへ　いきます。にほんから　アメリカまで　10じかん　かかります。\n\n【質問】アメリカまで　どのぐらい　かかりますか。",
    highlight: "どのぐらい　かかりますか",
    options: ["1じかん", "10じかん", "らいしゅう", "ひこうき"],
    answer: 1,
    translation: "Minggu depan, saya akan pergi ke Amerika dengan pesawat. Dari Jepang ke Amerika memakan waktu 10 jam.\n\nPertanyaan: Berapa lama waktu yang dibutuhkan ke Amerika? 10 jam."
  },
  {
    id: 43,
    question: "【読む文章】えきは　ぎんこうと　スーパーの　あいだに　あります。ぎんこうの　まえに　ポストが　あります。\n\n【質問】えきは　どこに　ありますか。",
    highlight: "どこに　ありますか",
    options: ["ポストの　まえ", "ぎんこうの　なか", "ぎんこうと　スーパーの　あいだ", "ぎんこうと　ポストの　あいだ"],
    answer: 2,
    translation: "Stasiun ada di antara bank dan supermarket. Di depan bank ada kotak pos.\n\nPertanyaan: Di mana stasiun berada? Di antara bank dan supermarket."
  },
  {
    id: 44,
    question: "【読む文章】あした、としょかんへ　いきます。としょかんで　にほんごの　ほんを　よみます。それから、うちへ　かえります。\n\n【質問】としょかんで　なにを　しますか。",
    highlight: "なにを　しますか",
    options: ["ほんを　よみます", "ほんを　かいます", "ほんを　かります", "うちへ　かえります"],
    answer: 0,
    translation: "Besok, saya akan pergi ke perpustakaan. Di perpustakaan saya akan membaca buku bahasa Jepang. Setelah itu, saya akan pulang ke rumah.\n\nPertanyaan: Apa yang dilakukan di perpustakaan? Membaca buku."
  },
  {
    id: 45,
    question: "【読む文章】ほんやで　ざっしを　2さつと、じしょを　1さつ　かいました。ぜんぶで　3000えんでした。\n\n【質問】ざっしを　なんさつ　かいましたか。",
    highlight: "なんさつ　かいましたか",
    options: ["1さつ", "2さつ", "3さつ", "3000さつ"],
    answer: 1,
    translation: "Di toko buku saya membeli 2 majalah dan 1 kamus. Semuanya 3000 yen.\n\nPertanyaan: Berapa banyak majalah yang dibeli? 2 buku."
  },
  {
    id: 46,
    question: "【読む文章】わたしは　にくが　すきです。でも、さかなは　きらいです。やさいは　すこし　たべます。\n\n【質問】このひとは　さかなが　すきですか。",
    highlight: "さかなが　すきですか",
    options: ["はい、すきです", "いいえ、きらいです", "すこし　すきです", "とても　すきです"],
    answer: 1,
    translation: "Saya suka daging. Tapi, saya benci ikan. Saya makan sedikit sayur.\n\nPertanyaan: Apakah orang ini suka ikan? Tidak, benci."
  },
  {
    id: 47,
    question: "【読む文章】けさは　とても　さむかったです。でも、いまは　あたたかいです。あしたは　あついでしょう。\n\n【質問】いまは　どうですか。",
    highlight: "いまは　どうですか",
    options: ["とても　さむいです", "さむくないです", "あたたかいです", "あついです"],
    answer: 2,
    translation: "Tadi pagi sangat dingin. Tapi, sekarang hangat. Besok mungkin panas.\n\nPertanyaan: Bagaimana sekarang? Hangat."
  },
  {
    id: 48,
    question: "【読む文章】きょうは　かようびです。あしたは　テストが　あります。もくようびは　やすみです。\n\n【質問】テストは　なんようびですか。",
    highlight: "なんようびですか",
    options: ["げつようび", "かようび", "すいようび", "もくようび"],
    answer: 2,
    translation: "Hari ini adalah hari Selasa. Besok ada ujian. Hari Kamis libur.\n\nPertanyaan: Ujiannya hari apa? Hari Rabu."
  },
  {
    id: 49,
    question: "【読む文章】まいあさ、かおを　あらってから、あさごはんを　たべます。あさごはんの　あと、コーヒーを　のみます。\n\n【質問】あさごはんの　まえに、なにを　しますか。",
    highlight: "あさごはんの　まえに、なにを　しますか",
    options: ["コーヒーを　のみます", "かおを　あらいます", "はを　みがきます", "なにも　しません"],
    answer: 1,
    translation: "Setiap pagi, setelah mencuci muka, saya makan sarapan. Setelah sarapan, saya minum kopi.\n\nPertanyaan: Apa yang dilakukan sebelum sarapan? Mencuci muka."
  },
  {
    id: 50,
    question: "【読む文章】にほんじんは　ごはんと　さかなを　よく　たべます。はしで　たべます。スプーンは　あまり　つかいません。\n\n【質問】にほんじんは　なにで　ごはんを　たべますか。",
    highlight: "なにで　ごはんを　たべますか",
    options: ["てで", "ナイフで", "スプーンで", "はしで"],
    answer: 3,
    translation: "Orang Jepang sering makan nasi dan ikan. Makan menggunakan sumpit. Tidak terlalu banyak menggunakan sendok.\n\nPertanyaan: Orang Jepang makan menggunakan apa? Menggunakan sumpit."
  },
  {
    id: 51,
    question: "【読む文章】パーティーに　あかい　ドレスを　きて　いきました。くつも　あかい　くつを　はきました。かばんは　しろかったです。\n\n【質問】かばんは　なにいろでしたか。",
    highlight: "なにいろでしたか",
    options: ["あか", "しろ", "くろ", "あお"],
    answer: 1,
    translation: "Saya pergi ke pesta memakai gaun merah. Sepatunya juga memakai sepatu merah. Tasnya berwarna putih.\n\nPertanyaan: Tasnya warna apa? Putih."
  },
  {
    id: 52,
    question: "【読む文章】やまださんの　かみは　ながいです。そして、めが　おおきいです。とても　かわいいです。\n\n【質問】や山田さんは　どんな　ひとですか。",
    highlight: "どんな　ひとですか",
    options: ["かみが　みじかくて、めが　おおきいです", "かみが　ながくて、めが　ちいさいです", "かみが　ながくて、めが　おおきいです", "かみが　みじかくて、めが　ちいさいです"],
    answer: 2,
    translation: "Rambut Yamada-san panjang. Dan, matanya besar. Sangat imut.\n\nPertanyaan: Yamada-san orang yang seperti apa? Rambutnya panjang dan matanya besar."
  },
  {
    id: 53,
    question: "【読む文章】きのう、せんせいに　ほんを　かしました。きょう、せんせいは　その　ほんを　わたしに　かえしました。\n\n【質問】ほんは　いま、だれの　ところに　ありますか。",
    highlight: "だれの　ところに　ありますか",
    options: ["せんせい", "わたし", "ともだち", "わかりません"],
    answer: 1,
    translation: "Kemarin, saya meminjamkan buku kepada guru. Hari ini, guru mengembalikan buku itu kepada saya.\n\nPertanyaan: Buku itu sekarang ada di tempat siapa? Saya."
  },
  {
    id: 54,
    question: "【読む文章】わたしは　しゃしんを　とるのが　すきです。うみや　やまの　しゃしんを　よく　とります。ひとや　どうぶつの　しゃしんは　とりません。\n\n【質問】このひとは　なにの　しゃしんを　とりますか。",
    highlight: "なにの　しゃしんを　とりますか",
    options: ["うみや　やま", "ひとや　どうぶつ", "やまと　どうぶつ", "ひとと　うみ"],
    answer: 0,
    translation: "Saya suka memotret. Saya sering memotret laut dan gunung. Saya tidak memotret orang atau hewan.\n\nPertanyaan: Orang ini memotret apa? Laut dan gunung."
  },
  {
    id: 55,
    question: "【読む文章】おなかが　いたいですから、きょうは　なにも　たべません。くすりを　のんで、はやく　ねます。\n\n【質問】どうして　きょうは　なにも　たべませんか。",
    highlight: "どうして　きょうは　なにも　たべませんか",
    options: ["くすりを　のんだから", "ねむいから", "ごはんが　ないから", "おなかが　いたいから"],
    answer: 3,
    translation: "Karena perut saya sakit, hari ini saya tidak makan apa-apa. Saya akan minum obat, dan tidur lebih awal.\n\nPertanyaan: Mengapa hari ini tidak makan apa-apa? Karena perutnya sakit."
  },
  {
    id: 56,
    question: "【読む文章】まどを　あけてください。そして、テーブルの　うえの　コップを　あらってください。\n\n【質問】コップは　どこに　ありますか。",
    highlight: "どこに　ありますか",
    options: ["まどの　そば", "テーブルの　した", "テーブルの　うえ", "キッチンの　なか"],
    answer: 2,
    translation: "Tolong buka jendela. Dan, tolong cuci gelas di atas meja.\n\nPertanyaan: Gelas ada di mana? Di atas meja."
  },
  {
    id: 57,
    question: "【読む文章】えきで　30ぷん　ともだちを　まちました。でも、ともだちは　きませんでした。だから、ひとりで　かえりました。\n\n【質問】このひとは　えきで　だれと　あいましたか。",
    highlight: "だれと　あいましたか",
    options: ["ともだち", "かぞく", "せんせい", "だれとも　あいませんでした"],
    answer: 3,
    translation: "Saya menunggu teman di stasiun selama 30 menit. Tapi, teman saya tidak datang. Karena itu, saya pulang sendirian.\n\nPertanyaan: Orang ini bertemu dengan siapa di stasiun? Tidak bertemu siapa pun."
  },
  {
    id: 58,
    question: "【読む文章】くるまが　ほしいです。あたらしい　くるまは　たかいです。ふるい　くるまは　やすいです。わたしは　やすい　くるまを　かいます。\n\n【質問】このひとは　どんな　くるまを　かいますか。",
    highlight: "どんな　くるまを　かいますか",
    options: ["あたらしくて　たかい　くるま", "あたらしくて　やすい　くるま", "ふるくて　たかい　くるま", "ふるくて　やすい　くるま"],
    answer: 3,
    translation: "Saya ingin mobil. Mobil baru mahal. Mobil lama murah. Saya akan membeli mobil yang murah.\n\nPertanyaan: Orang ini akan membeli mobil yang seperti apa? Mobil yang lama dan murah."
  },
  {
    id: 59,
    question: "【読む文章】たなかさんは　カメラの　かいしゃで　はたらいています。まいにち　いそがしいですが、しごとは　たのしいです。\n\n【質問】たなかさんの　しごとは　どうですか。",
    highlight: "しごとは　どうですか",
    options: ["いそがしいですが、たのしいです", "いそがしくて、つまらないです", "ひまで、たのしいです", "ひまで、つまらないです"],
    answer: 0,
    translation: "Tanaka-san bekerja di perusahaan kamera. Setiap hari sibuk, tapi pekerjaannya menyenangkan.\n\nPertanyaan: Bagaimana pekerjaan Tanaka-san? Sibuk, tapi menyenangkan."
  },
  {
    id: 60,
    question: "【読む文章】らいねん、にほんへ　りゅうがくに　いきます。だから、いま　にほんごを　まいにち　たくさん　べんきょうしています。\n\n【質問】このひとは　どうして　にほんごを　べんきょうしていますか。",
    highlight: "どうして　にほんごを　べんきょうしていますか",
    options: ["にほんで　はたらくから", "にほんへ　りゅうがくに　いくから", "にほんじんだから", "にほんの　ともだちが　いるから"],
    answer: 1,
    translation: "Tahun depan, saya akan pergi ke Jepang untuk belajar (studi di luar negeri). Oleh karena itu, sekarang saya belajar bahasa Jepang banyak setiap hari.\n\nPertanyaan: Mengapa orang ini belajar bahasa Jepang? Karena akan pergi ke Jepang untuk belajar."
  },
  {
    id: 61,
    question: "【読む文章】むかし、いぬを　かっていました。なまえは　「ポチ」でした。とても　かわいかったです。いまは　なにも　かっていません。\n\n【質問】いま、うちに　ペットが　いますか。",
    highlight: "ペットが　いますか",
    options: ["はい、いぬが　います", "はい、ポチが　います", "いいえ、なにも　いません", "いいえ、ねこが　います"],
    answer: 2,
    translation: "Dulu, saya memelihara anjing. Namanya \"Pochi\". Sangat imut. Sekarang tidak memelihara apa-apa.\n\nPertanyaan: Sekarang, apakah ada hewan peliharaan di rumah? Tidak, tidak ada apa-apa."
  },
];
