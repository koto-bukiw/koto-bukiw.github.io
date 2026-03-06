// 第2科目 問題5：内容理解（中文）
// JLPT N5 レベル - やや長い文章を読んで質問に答える
const naiyouChuubunData = [
  {
    id: 1,
    question: "【読む文章】わたしは　がくせいです。まいにち　でんしゃで　だいがくに　いきます。だいがくまで　30ぷん　かかります。だいがくで　にほんごを　べんきょうしています。にほんごの　じゅぎょうは　9じから　12じまでです。ひるごはんは　だいがくの　しょくどうで　たべます。ごごは　としょかんで　べんきょうします。\n\n【質問】この　ひとは　ひるごはんを　どこで　たべますか。",
    highlight: "ひるごはんを　どこで　たべますか",
    options: ["いえで", "でんしゃで", "だいがくの　しょくどうで", "としょかんで"],
    answer: 2,
    translation: "Saya mahasiswa. Setiap hari naik kereta ke universitas. 30 menit ke universitas. Belajar bahasa Jepang. Kelas jam 9-12. Makan siang di kantin universitas. Sore belajar di perpustakaan.\n\nPertanyaan: Di mana orang ini makan siang?"
  },
    {
    id: 21,
    question: "【読む文章】きのうの　あさ、わたしは　ともだちと　えいがかんへ　いきました。えいがは　10じから　12じまででした。とても　おもしろかったです。そのあと、デパートの　レストランで　カレーを　たべました。それから　バスで　うちへ　かえりました。\n\n【質問】この　ひとは　えいがを　みたあと、なにを　しましたか。",
    highlight: "えいがを　みたあと、なにを　しましたか",
    options: ["えいがかんへ　いきました", "カレーを　たべました", "デパートで　かいものを　しました", "ともだちの　うちへ　いきました"],
    answer: 1,
    translation: "Kemarin pagi, saya pergi ke bioskop bersama teman. Filmnya dari jam 10 sampai jam 12. Sangat menarik. Setelah itu, kami makan kari di restoran toserba. Kemudian pulang ke rumah naik bus.\n\nPertanyaan: Apa yang dilakukan orang ini setelah menonton film? Makan kari."
  },
  {
    id: 22,
    question: "【読む文章】わたしの　かぞくは　4にんです。ちちと　ははと　いもうとと　わたしです。ちちは　かいしゃいんで、ははは　ぎんこういんです。いもうとは　こうこうせいです。うちには　ねこが　2ひき　います。しろい　ねこと　くろい　ねこです。とても　かわいいです。\n\n【質問】この　ひとの　お母さん（はは）の　しごとは　なんですか。",
    highlight: "お母さん（はは）の　しごとは　なんですか",
    options: ["かいしゃいん", "こうこうせい", "ぎんこういん", "がくせい"],
    answer: 2,
    translation: "Keluarga saya ada 4 orang. Ayah, ibu, adik perempuan, dan saya. Ayah adalah pegawai perusahaan, dan ibu adalah pegawai bank. Adik perempuan adalah siswa SMA. Di rumah ada 2 ekor kucing. Kucing putih dan kucing hitam. Sangat lucu.\n\nPertanyaan: Apa pekerjaan ibu orang ini? Pegawai bank."
  },
  {
    id: 23,
    question: "【読む文章】らいしゅうの　どようびは　わたしの　たんじょうびです。わたしは　20さいに　なります。どようびの　よる、うちで　パーティーを　します。ともだちを　5にん　よびます。ははが　ケーキを　つくります。とても　たのしみです。\n\n【質問】この　ひとは　だれと　パーティーを　しますか。",
    highlight: "だれと　パーティーを　しますか",
    options: ["ちちと　はは", "ともだち", "がっこうの　せんせい", "いもうと"],
    answer: 1,
    translation: "Hari Sabtu minggu depan adalah hari ulang tahun saya. Saya akan berusia 20 tahun. Sabtu malam, akan ada pesta di rumah. Saya mengundang 5 orang teman. Ibu akan membuat kue. Saya sangat menantikannya.\n\nPertanyaan: Dengan siapa orang ini akan berpesta? Teman."
  },
  {
    id: 24,
    question: "【読む文章】あしたは　にちようびですが、わたしは　あさ　はやく　おきます。としょかんへ　ほんを　かえしに　いきます。それから、としょかんの　ちかくの　こうえんで　ともだちと　テニスを　します。ごごは　スーパーへ　かいものに　いきます。\n\n【質問】この　ひとは　あした、どこで　テニスを　しますか。",
    highlight: "どこで　テニスを　しますか",
    options: ["がっこうで", "としょかんで", "こうえんで", "スーパーで"],
    answer: 2,
    translation: "Besok adalah hari Minggu, tapi saya akan bangun pagi-pagi. Saya akan pergi ke perpustakaan untuk mengembalikan buku. Setelah itu, bermain tenis bersama teman di taman dekat perpustakaan. Sore harinya, saya akan pergi berbelanja ke supermarket.\n\nPertanyaan: Di mana orang ini akan bermain tenis besok? Di taman."
  },
  {
    id: 25,
    question: "【読む文章】わたしの　へやは　アパートの　2かいに　あります。へやに　まどが　あります。まどの　そばに　ベッドが　あります。ベッドの　となりに　ちいさい　つくえと　いすが　あります。つくえの　うえに　テレビが　あります。へやは　せまいですが、あかるいです。\n\n【質問】ベッドの　となりに　なにが　ありますか。",
    highlight: "ベッドの　となりに　なにが　ありますか",
    options: ["まど", "つくえと　いす", "テレビ", "アパート"],
    answer: 1,
    translation: "Kamar saya ada di lantai 2 apartemen. Di kamar ada jendela. Di dekat jendela ada tempat tidur. Di sebelah tempat tidur ada meja kecil dan kursi. Di atas meja ada TV. Kamarnya sempit, tapi terang.\n\nPertanyaan: Ada apa di sebelah tempat tidur? Meja dan kursi."
  },
  {
    id: 26,
    question: "【読む文章】キムさんへ\nきのうは　ほんを　かしてくれて、ありがとうございました。ほんは　あしたの　じゅぎょうの　あとに　かえします。あした、いっしょに　おひるごはんを　たべませんか。12じはんごろ、きょうしつの　まえで　まっています。\nマリアより\n\n【質問】マリアさんは　いつ　ほんを　かえしますか。",
    highlight: "いつ　ほんを　かえしますか",
    options: ["きのう", "きょうの　じゅぎょうの　あと", "あしたの　おひるごはんの　あと", "あしたの　じゅぎょうの　あと"],
    answer: 3,
    translation: "Untuk Kim,\nTerima kasih sudah meminjamkan buku kemarin. Bukunya akan saya kembalikan besok setelah kelas selesai. Besok, maukah makan siang bersama? Saya tunggu di depan kelas sekitar jam 12.30.\nDari Maria\n\nPertanyaan: Kapan Maria akan mengembalikan buku? Besok setelah kelas selesai."
  },
  {
    id: 27,
    question: "【読む文章】あしたは　あめが　ふりますから、すずしいです。あさから　ゆうがたまで　ずっと　あめです。かさを　わすれないで　ください。よるは　あめが　やみますが、かぜが　つよく　なります。さむく　なりますから、あたたかい　ふくを　きて　ください。\n\n【質問】あしたの　よるの　てんきは　どうなりますか。",
    highlight: "あしたの　よるの　てんきは　どうなりますか",
    options: ["あめが　ふって、あたたかいです", "あめが　ふって、さむいです", "あめが　やんで、あたたかいです", "あめが　やんで、さむいです"],
    answer: 3,
    translation: "Karena besok akan turun hujan, cuacanya akan sejuk. Hujan dari pagi sampai sore. Jangan lupa bawa payung. Malam harinya hujan akan reda, tapi angin akan bertiup kencang. Karena akan menjadi dingin, tolong kenakan pakaian yang hangat.\n\nPertanyaan: Bagaimana cuaca besok malam? Hujan reda dan menjadi dingin."
  },
  {
    id: 28,
    question: "【読む文章】わたしは　くだものが　すきです。りんごも　みかんも　すきですが、いちごが　いちばん　すきです。まいにち　あさごはんに　くだものを　たべます。きょうは　バナナを　たべました。あしたは　りんごを　たべる　つもりです。\n\n【質問】この　ひとが　いちばん　すきな　くだものは　なんですか。",
    highlight: "いちばん　すきな　くだものは　なんですか",
    options: ["りんご", "みかん", "いちご", "バナナ"],
    answer: 2,
    translation: "Saya suka buah-buahan. Saya suka apel dan jeruk keprok, tapi paling suka stroberi. Setiap hari saya makan buah untuk sarapan. Hari ini saya makan pisang. Besok saya berencana makan apel.\n\nPertanyaan: Apa buah yang paling disukai orang ini? Stroberi."
  },
  {
    id: 29,
    question: "【読む文章】みなさんへ\nらいげつの　5にちから　9にちまで、なつやすみです。やすみの　あいだ、がっこうは　しまっていますから、きょうしつに　はいる　ことが　できません。10にちの　あさ、8じはんに　がっこうへ　きて　ください。\n\n【質問】がっこうは　いつから　はじまりますか。",
    highlight: "いつから　はじまりますか",
    options: ["らいげつの　5にち", "らいげつの　8にち", "らいげつの　9にち", "らいげつの　10にち"],
    answer: 3,
    translation: "Kepada semuanya,\nDari tanggal 5 sampai 9 bulan depan adalah libur musim panas. Selama liburan, sekolah ditutup, sehingga tidak bisa masuk ke kelas. Tanggal 10 pagi, tolong datang ke sekolah pada jam 8.30.\n\nPertanyaan: Kapan sekolah akan dimulai? Tanggal 10 bulan depan."
  },
  {
    id: 30,
    question: "【読む文章】きょうは　やすみでした。あさ、へやを　そうじしました。それから　せんたくを　しました。ごご、スーパーへ　にくや　やさいを　かいに　いきました。よるは　じぶんで　ばんごはんを　つくりました。テレビを　みて、11じに　ねました。\n\n【質問】この　ひとは　きょうの　ごご、なにを　しましたか。",
    highlight: "きょうの　ごご、なにを　しましたか",
    options: ["そうじを　しました", "せんたくを　しました", "かいものに　いきました", "ばんごはんを　つくりました"],
    answer: 2,
    translation: "Hari ini libur. Pagi hari, saya membersihkan kamar. Kemudian saya mencuci pakaian. Sore hari, saya pergi ke supermarket untuk membeli daging dan sayuran. Malam hari, saya memasak makan malam sendiri. Saya menonton TV, dan tidur jam 11.\n\nPertanyaan: Apa yang dilakukan orang ini siang/sore ini? Pergi berbelanja."
  },
    {
    id: 31,
    question: "【読む文章】わたしは　らいしゅうの　なつやすみに　きょうとへ　いきます。きょう、えきへ　しんかんせんの　きっぷを　かいに　いきました。きっぷは　14,000えんでした。たかかったです。でも、とても　たのしみです。\n\n【質問】この　ひとは　えきへ　なにを　しに　いきましたか。",
    highlight: "えきへ　なにを　しに　いきましたか",
    options: ["しんかんせんを　みる", "きっぷを　かう", "きょうとへ　いく", "えきを　みる"],
    answer: 1,
    translation: "Saya akan pergi ke Kyoto pada liburan musim panas minggu depan. Hari ini saya pergi ke stasiun untuk membeli tiket Shinkansen. Tiketnya seharga 14.000 yen. Mahal. Tapi saya sangat menantikannya.\n\nPertanyaan: Apa yang dilakukan orang ini ke stasiun? Membeli tiket."
  },
  {
    id: 32,
    question: "【読む文章】わたしは　きのうから　あたまが　いたいです。きょうは　がっこうを　やすみました。あさ、びょういんへ　いきました。いしゃに「かぜですね。この　くすりを　のんで、ねて　いて　ください」と　いわれました。\n\n【質問】この　ひとは　きょう、どうして　がっこうを　やすみましたか。",
    highlight: "どうして　がっこうを　やすみましたか",
    options: ["びょういんの　いしゃだから", "くすりを　のんだから", "あたまが　いたいから", "ねて　いるから"],
    answer: 2,
    translation: "Kepala saya sakit sejak kemarin. Hari ini saya libur sekolah. Pagi hari saya pergi ke rumah sakit. Dokter bilang, 'Ini flu. Silakan minum obat ini dan tidur'.\n\nPertanyaan: Mengapa orang ini libur sekolah hari ini? Karena kepalanya sakit."
  },
  {
    id: 33,
    question: "【読む文章】となりに　すんでいる　やまださんは　いぬを　3びき　かっています。おおきい　いぬが　1びきと、ちいさい　いぬが　2ひきです。まいにち　ゆうがた、やまださんは　いぬと　こうえんを　さんぽします。わたしも　ときどき　いっしょに　あるきます。\n\n【質問】やまださんは　ちいさい　いぬを　何匹（なんびき）　かっていますか。",
    highlight: "ちいさい　いぬを　何匹（なんびき）　かっていますか",
    options: ["1びき", "2ひき", "3びき", "4ひき"],
    answer: 1,
    translation: "Pak Yamada yang tinggal di sebelah memelihara 3 ekor anjing. 1 anjing besar dan 2 anjing kecil. Setiap sore, Pak Yamada berjalan-jalan dengan anjingnya di taman. Saya juga kadang-kadang ikut berjalan bersama.\n\nPertanyaan: Berapa banyak anjing kecil yang dipelihara Pak Yamada? 2 ekor."
  },
  {
    id: 34,
    question: "【読む文章】わたしの　しゅみは　おんがくを　きく　ことです。クラシックや　ジャズが　すきです。でも、ロックは　あまり　ききません。まいにち　よる、へやで　ひとりで　おんがくを　ききながら　ほんを　よみます。\n\n【質問】この　ひとは　どんな　おんがくを　よく　ききますか。",
    highlight: "どんな　おんがくを　よく　ききますか",
    options: ["クラシックや　ジャズ", "ジャズや　ロック", "ロック", "クラシックや　ジャズや　ロック"],
    answer: 0,
    translation: "Hobi saya adalah mendengarkan musik. Saya suka klasik dan jazz. Tapi saya jarang mendengarkan rock. Setiap malam, saya membaca buku sambil mendengarkan musik sendirian di kamar.\n\nPertanyaan: Musik apa yang sering didengarkan orang ini? Klasik dan jazz."
  },
  {
    id: 35,
    question: "【読む文章】わたしは　きのう、ゆうびんきょくへ　いきました。アメリカに　すんでいる　あねに　にもつを　おくりました。にもつの　なかに、にほんの　おかしと　てがみを　いれました。にもつは　1しゅうかんぐらいで　つきます。\n\n【質問】この　ひとは　アメリカへ　なにを　おくりましたか。",
    highlight: "アメリカへ　なにを　おくりましたか",
    options: ["おかしと　てがみ", "にほんの　ほん", "ゆうびんきょくの　にもつ", "あねの　てがみ"],
    answer: 0,
    translation: "Kemarin saya pergi ke kantor pos. Saya mengirim paket kepada kakak perempuan saya yang tinggal di Amerika. Ke dalam paket, saya memasukkan camilan Jepang dan surat. Paket akan tiba dalam waktu sekitar 1 minggu.\n\nPertanyaan: Apa yang dikirim orang ini ke Amerika? Camilan dan surat."
  },
  {
    id: 36,
    question: "【読む文章】あしたは　ははの　ひです。わたしは　デパートへ　ははの　プレゼントを　かいに　いきました。ははは　あかい　いろが　すきですから、あかい　かばんを　かいました。きれいに　つつんで　もらいました。\n\n【質問】この　ひとは　ははに　どんな　プレゼントを　かいましたか。",
    highlight: "どんな　プレゼントを　かいましたか",
    options: ["あかい　はな", "あかい　かばん", "きれいな　つつみ", "デパートの　かばん"],
    answer: 1,
    translation: "Besok adalah Hari Ibu. Saya pergi ke toserba untuk membeli hadiah untuk ibu. Karena ibu suka warna merah, saya membelikan tas merah. Saya minta dibungkus dengan cantik.\n\nPertanyaan: Hadiah apa yang dibelikan orang ini untuk ibu? Tas merah."
  },
  {
    id: 37,
    question: "【読む文章】わたしは　じてんしゃで　かいしゃへ　いきます。うちから　かいしゃまで　15ふん　かかります。あめが　ふった　ひは、バスで　いきます。バスは　えきで　のりかえますから、すこし　じかんが　かかります。\n\n【質問】この　ひとは、あめの　ひに　どうやって　かいしゃへ　いきますか。",
    highlight: "あめの　ひに　どうやって　かいしゃへ　いきますか",
    options: ["あるいて　いきます", "じてんしゃで　いきます", "えきから　じてんしゃで　いきます", "バスで　いきます"],
    answer: 3,
    translation: "Saya pergi ke kantor naik sepeda. Dari rumah ke kantor memakan waktu 15 menit. Pada hari hujan, saya naik bus. Karena harus berganti bus di stasiun, memakan waktu sedikit lebih lama.\n\nPertanyaan: Bagaimana orang ini pergi ke kantor pada hari hujan? Naik bus."
  },
  {
    id: 38,
    question: "【読む文章】ジョンさんは　イギリスじんです。きょねんの　4がつに　にほんへ　きました。にほんへ　くる　まえに、くにで　1ねんかん　にほんごを　べんきょうしました。ひらがなと　カタカナは　わかりますが、かんじは　まだ　むずかしいです。\n\n【質問】ジョンさんは　どこで　にほんごの　べんきょうを　はじめましたか。",
    highlight: "どこで　にほんごの　べんきょうを　はじめましたか",
    options: ["にほんで", "イギリスで", "きょねんの　4がつから", "がっこうで"],
    answer: 1,
    translation: "John adalah orang Inggris. Dia datang ke Jepang pada bulan April tahun lalu. Sebelum datang ke Jepang, dia belajar bahasa Jepang selama 1 tahun di negaranya. Dia mengerti hiragana dan katakana, tapi kanji masih sulit.\n\nPertanyaan: Di mana John mulai belajar bahasa Jepang? Di Inggris (negaranya)."
  },
  {
    id: 39,
    question: "【読む文章】きのう、かぞくで　あたらしい　レストランへ　ばんごはんを　たべに　いきました。さかなの　りょうりと、にくの　りょうりを　たのみました。にくの　りょうりは　おいしかったですが、さかなの　りょうりは　すこし　からかったです。\n\n【質問】さかなの　りょうりは　どうでしたか。",
    highlight: "さかなの　りょうりは　どうでしたか",
    options: ["とても　おいしかったです", "すこし　からかったです", "あまかったです", "あたらしかったです"],
    answer: 1,
    translation: "Kemarin, saya pergi makan malam bersama keluarga ke restoran baru. Kami memesan hidangan ikan dan hidangan daging. Hidangan dagingnya enak, tapi hidangan ikannya sedikit pedas.\n\nPertanyaan: Bagaimana hidangan ikannya? Sedikit pedas."
  },
  {
    id: 40,
    question: "【読む文章】「すみません。この　ちかくに　ぎんこうは　ありますか。」\n「はい。そこの　かどを　みぎに　まがって　ください。まっすぐ　いくと、ひだりに　あります。ぎんこうの　まえに　ほんやが　あります。」\n「わかりました。ありがとうございます。」\n\n【質問】ぎんこうは　どこに　ありますか。",
    highlight: "ぎんこうは　どこに　ありますか",
    options: ["ほんやの　まえに　あります", "ほんやの　となりに　あります", "かどを　ひだりに　まがった　ところに　あります", "かどを　まっすぐ　いった　ところに　あります"],
    answer: 0,
    translation: "'Permisi. Apakah ada bank di dekat sini?'\n'Ya. Silakan belok kanan di persimpangan itu. Kalau jalan terus, ada di sebelah kiri. Di depan bank ada toko buku.'\n'Mengerti. Terima kasih.'\n\nPertanyaan: Di mana letak banknya? Di depan toko buku."
  }
];
