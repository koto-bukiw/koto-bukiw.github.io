// 問題3：文脈規定（Penentuan Konteks）
// JLPT N5 レベル - 文の内容に合う言葉を選ぶ
// 各問題: question=問題文（空欄を（　）で表す）, options=選択肢4つ, answer=正解のインデックス(0-3)
const bunkakukiteiData = [
  {
    id: 2,
    question: "きょうは　あめが　ふって　いますから、（　　）を　さします。",
    highlight: "（　　）",
    options: ["かさ", "くつ", "ぼうし", "かばん"],
    answer: 0,
    translation: "Hari ini turun hujan, jadi saya memakai (payung)."
  },
  {
    id: 3,
    question: "わたしは　まいにち　７じに　あさごはんを（　　）。",
    highlight: "（　　）",
    options: ["のみます", "たべます", "みます", "します"],
    answer: 1,
    translation: "Saya (makan) sarapan pada jam 7 setiap hari."
  },
  {
    id: 4,
    question: "のどが　かわきましたから、（　　）を　のみます。",
    highlight: "（　　）",
    options: ["パン", "ごはん", "みず", "ケーキ"],
    answer: 2,
    translation: "Karena haus, saya minum (air)."
  },
  {
    id: 5,
    question: "としょかんで　（　　）を　よみます。",
    highlight: "（　　）",
    options: ["ほん", "テレビ", "おんがく", "ラジオ"],
    answer: 0,
    translation: "Saya membaca (buku) di perpustakaan."
  },
  {
    id: 6,
    question: "あたまが　いたいですから、（　　）へ　いきます。",
    highlight: "（　　）",
    options: ["えき", "ぎんこう", "ゆうびんきょく", "びょういん"],
    answer: 3,
    translation: "Karena sakit kepala, saya pergi ke (rumah sakit)."
  },
  {
    id: 7,
    question: "まどを　あけてください。（　　）ですから。",
    highlight: "（　　）",
    options: ["あつい", "さむい", "つめたい", "くらい"],
    answer: 0,
    translation: "Tolong buka jendelanya. Karena (panas)."
  },
  {
    id: 8,
    question: "あたらしい　（　　）を　かいました。これで　じかんが　わかります。",
    highlight: "（　　）",
    options: ["とけい", "かばん", "めがね", "ぼうし"],
    answer: 0,
    translation: "Saya membeli (jam tangan) baru. Dengan ini saya bisa tahu waktu."
  },
  {
    id: 9,
    question: "きのうの　よるは　はやく（　　）。",
    highlight: "（　　）",
    options: ["おきました", "ねました", "きました", "しました"],
    answer: 1,
    translation: "Tadi malam saya (tidur) lebih awal."
  },
  {
    id: 10,
    question: "えんぴつで　なまえを　（　　）　ください。",
    highlight: "（　　）",
    options: ["かいて", "きいて", "よんで", "はなして"],
    answer: 0,
    translation: "Tolong (tulis) nama Anda dengan pensil."
  },
  {
    id: 11,
    question: "この　カメラは　とても　（　　）です。３０まんえん　しました。",
    highlight: "（　　）",
    options: ["やすい", "たかい", "ひくい", "ひろい"],
    answer: 1,
    translation: "Kamera ini sangat (mahal). Harganya 300.000 yen."
  },
  {
    id: 12,
    question: "わたしの　へやは　せまいですが、（　　）の　へやは　ひろいです。",
    highlight: "（　　）",
    options: ["あに", "いぬ", "つくえ", "くるま"],
    answer: 0,
    translation: "Kamar saya sempit, tapi kamar (kakak laki-laki) luas."
  },
  {
    id: 13,
    question: "スーパーで　ぎゅうにゅうと　（　　）を　かいました。",
    highlight: "（　　）",
    options: ["つくえ", "たまご", "てがみ", "えんぴつ"],
    answer: 1,
    translation: "Saya membeli susu dan (telur) di supermarket."
  },
  {
    id: 14,
    question: "あしたは　ともだちと　えいがを　（　　）に　いきます。",
    highlight: "（　　）",
    options: ["み", "きき", "かい", "あそび"],
    answer: 0,
    translation: "Besok saya pergi untuk (menonton) film bersama teman."
  },
  {
    id: 15,
    question: "くつが　ふるく　なりましたから、あたらしいのを　（　　）たいです。",
    highlight: "（　　）",
    options: ["かい", "のみ", "よみ", "み"],
    answer: 0,
    translation: "Karena sepatu saya sudah usang, saya ingin (membeli) yang baru."
  },
  {
    id: 16,
    question: "あの　レストランは　とても　（　　）ですから、いつも　ひとが　たくさん　います。",
    highlight: "（　　）",
    options: ["おいしい", "まずい", "さむい", "いたい"],
    answer: 0,
    translation: "Restoran itu sangat (enak), jadi selalu banyak orang."
  },
  {
    id: 17,
    question: "おなかが　すきましたね。なにか　（　　）ましょう。",
    highlight: "（　　）",
    options: ["たべ", "のみ", "きき", "よみ"],
    answer: 0,
    translation: "Kita lapar ya. Mari kita (makan) sesuatu."
  },
  {
    id: 18,
    question: "まいにち　（　　）で　がっこうへ　いきます。",
    highlight: "（　　）",
    options: ["じてんしゃ", "えんぴつ", "かばん", "テレビ"],
    answer: 0,
    translation: "Setiap hari saya pergi ke sekolah dengan (sepeda)."
  },
  {
    id: 19,
    question: "ここは　きょうしつです。（　　）に　してください。",
    highlight: "（　　）",
    options: ["しずか", "にぎやか", "きれい", "じょうぶ"],
    answer: 0,
    translation: "Ini adalah ruang kelas. Tolong (tenang)."
  },
  {
    id: 20,
    question: "わたしは　おんがくを　（　　）のが　すきです。",
    highlight: "（　　）",
    options: ["きく", "みる", "よむ", "はなす"],
    answer: 0,
    translation: "Saya suka (mendengarkan) musik."
  },
  {
    id: 21,
    question: "かぜを　ひきましたから、（　　）を　のみました。",
    highlight: "（　　）",
    options: ["おちゃ", "くすり", "ジュース", "みず"],
    answer: 1,
    translation: "Karena masuk angin, saya minum (obat)."
  },
  {
    id: 22,
    question: "えきの　まえに　たかい　（　　）が　あります。",
    highlight: "（　　）",
    options: ["ビル", "プール", "ボール", "カレンダー"],
    answer: 0,
    translation: "Ada (gedung) tinggi di depan stasiun."
  },
  {
    id: 23,
    question: "きのうは　（　　）から、セーターを　きました。",
    highlight: "（　　）",
    options: ["さむかった", "あつかった", "あたたかかった", "すずしかった"],
    answer: 0,
    translation: "Karena kemarin (dingin), saya memakai sweter."
  },
  {
    id: 24,
    question: "にほんごが　わかりませんから、（　　）を　ひきます。",
    highlight: "（　　）",
    options: ["じしょ", "ちず", "しんぶん", "ざっし"],
    answer: 0,
    translation: "Karena tidak mengerti bahasa Jepang, saya mencari di (kamus)."
  },
  {
    id: 25,
    question: "てがみを　だしたいです。（　　）は　どこですか。",
    highlight: "（　　）",
    options: ["ゆうびんきょく", "ぎんこう", "びょういん", "えき"],
    answer: 0,
    translation: "Saya ingin mengirim surat. Di mana (kantor pos)?"
  },
  {
    id: 26,
    question: "おとといは　きんようびでした。きょうは　（　　）です。",
    highlight: "（　　）",
    options: ["にちようび", "げつようび", "かようび", "どようび"],
    answer: 0,
    translation: "Kemarin lusa adalah hari Jumat. Hari ini hari (Minggu)."
  },
  {
    id: 27,
    question: "なつやすみは　うみへ　いって、（　　）たいです。",
    highlight: "（　　）",
    options: ["およぎ", "はしり", "あるき", "とび"],
    answer: 0,
    translation: "Pada liburan musim panas, saya ingin pergi ke laut dan (berenang)."
  },
  {
    id: 28,
    question: "これは　わたしの　かぞくの　（　　）です。ちちと　ははと　わたしです。",
    highlight: "（　　）",
    options: ["しゃしん", "かばん", "ほん", "てがみ"],
    answer: 0,
    translation: "Ini adalah (foto) keluarga saya. Ayah, ibu, dan saya."
  },
  {
    id: 29,
    question: "まいにち　はを　（　　）から　ねます。",
    highlight: "（　　）",
    options: ["みがいて", "あらって", "きれいに", "ふいて"],
    answer: 0,
    translation: "Setiap hari saya tidur setelah (menggosok) gigi."
  },
  {
    id: 30,
    question: "へやが　くらかったですから、でんきを　（　　）。",
    highlight: "（　　）",
    options: ["つけました", "けしました", "あけました", "しめました"],
    answer: 0,
    translation: "Karena kamar gelap, saya (menyalakan) lampu."
  },
  {
    id: 31,
    question: "わたしの　うちは　えきから　ちかいですから、（　　）です。",
    highlight: "（　　）",
    options: ["べんり", "ふべん", "きけん", "あんぜん"],
    answer: 0,
    translation: "Karena rumah saya dekat dari stasiun, sangat (praktis)."
  },
  {
    id: 32,
    question: "たくさん　たべましたから、おなかが　（　　）です。",
    highlight: "（　　）",
    options: ["いっぱい", "すこし", "はんぶん", "ぜんぶ"],
    answer: 0,
    translation: "Karena makan banyak, perut saya (kenyang)."
  },
  {
    id: 33,
    question: "こうえんで　きれいないろの　（　　）が　とんで　いました。",
    highlight: "（　　）",
    options: ["とり", "いぬ", "ねこ", "さかな"],
    answer: 0,
    translation: "Di taman, ada (burung) berwarna indah yang sedang terbang."
  },
  {
    id: 34,
    question: "しつもんが　ありますから、せんせいに　（　　）。",
    highlight: "（　　）",
    options: ["ききます", "こたえます", "はなします", "いいます"],
    answer: 0,
    translation: "Karena ada pertanyaan, saya (bertanya) kepada guru."
  },
  {
    id: 35,
    question: "らいげつ、にほんへ　（　　）に　いきます。",
    highlight: "（　　）",
    options: ["りょこう", "さんぽ", "かいもの", "せんたく"],
    answer: 0,
    translation: "Bulan depan, saya pergi (berwisata) ke Jepang."
  },
  {
    id: 36,
    question: "テストが　おわりました。（　　）ところへ　なまえを　かいてください。",
    highlight: "（　　）",
    options: ["しろい", "あかい", "くろい", "あおい"],
    answer: 0,
    translation: "Ujian sudah selesai. Tolong tulis nama di bagian yang (putih/kosong)."
  },
  {
    id: 37,
    question: "コーヒーに　（　　）を　いれますか。",
    highlight: "（　　）",
    options: ["さとう", "しお", "しょうゆ", "パン"],
    answer: 0,
    translation: "Apakah Anda memasukkan (gula) ke dalam kopi?"
  },
  {
    id: 38,
    question: "（　　）を　ふきますから、ハンカチを　かしてください。",
    highlight: "（　　）",
    options: ["て", "くつ", "ふく", "かばん"],
    answer: 0,
    translation: "Saya ingin menyeka (tangan), tolong pinjamkan saputangan."
  },
  {
    id: 39,
    question: "ドアには　かぎが　（　　）　います。",
    highlight: "（　　）",
    options: ["かかって", "しまって", "あいて", "ついて"],
    answer: 0,
    translation: "Pintu itu (terkunci)."
  },
  {
    id: 40,
    question: "きのう、デパートで　あたらしい　（　　）を　かいました。きょう　それを　きます。",
    highlight: "（　　）",
    options: ["ふく", "くつ", "ぼうし", "かさ"],
    answer: 0,
    translation: "Kemarin, saya membeli (baju) baru di toserba. Hari ini saya memakainya."
  },
  {
    id: 41,
    question: "１ねんで　（　　）が　いちばん　あついです。",
    highlight: "（　　）",
    options: ["なつ", "はる", "あき", "ふゆ"],
    answer: 0,
    translation: "Dalam satu tahun, (musim panas) adalah yang paling panas."
  },
  {
    id: 42,
    question: "おんがくを　ききながら、みちを　（　　）。",
    highlight: "（　　）",
    options: ["あるきます", "はしります", "とまります", "まちます"],
    answer: 0,
    translation: "Saya (berjalan) di jalan sambil mendengarkan musik."
  },
  {
    id: 43,
    question: "ともだちに　（　　）を　かけます。",
    highlight: "（　　）",
    options: ["でんわ", "てがみ", "ラジオ", "テレビ"],
    answer: 0,
    translation: "Saya menelepon (lit. memutar telepon ke) teman."
  },
  {
    id: 44,
    question: "あしたは　はやいですから、もう　（　　）に　はいります。",
    highlight: "（　　）",
    options: ["おふろ", "トイレ", "へや", "ベッド"],
    answer: 0,
    translation: "Karena besok bangun pagi, saya masuk ke (bak mandi) sekarang."
  },
  {
    id: 45,
    question: "この　カメラは　（　　）から、よく　うれます。",
    highlight: "（　　）",
    options: ["やすい", "たかい", "わるい", "おもい"],
    answer: 0,
    translation: "Karena kamera ini (murah), sangat laku."
  },
  {
    id: 46,
    question: "まちがえましたから、（　　）で　けしてください。",
    highlight: "（　　）",
    options: ["けしゴム", "えんぴつ", "ボールペン", "じょうぎ"],
    answer: 0,
    translation: "Karena salah, tolong hapus dengan (penghapus)."
  },
  {
    id: 47,
    question: "わたしは　まいにち　にっきを　（　　）から　ねます。",
    highlight: "（　　）",
    options: ["かいて", "よんで", "みて", "きいて"],
    answer: 0,
    translation: "Saya (menulis) buku harian setiap hari lalu tidur."
  },
  {
    id: 48,
    question: "あの　かどを　みぎへ　（　　）ください。",
    highlight: "（　　）",
    options: ["まがって", "わたって", "あるいて", "とまって"],
    answer: 0,
    translation: "Tolong (belok) ke kanan di sudut itu."
  },
  {
    id: 49,
    question: "あしたの　あさ、（　　）で　ごはんを　たべます。",
    highlight: "（　　）",
    options: ["しょくどう", "としょかん", "きょうしつ", "ぎんこう"],
    answer: 0,
    translation: "Besok pagi, saya makan nasi di (kantin)."
  },
  {
    id: 50,
    question: "（　　）が　ふっていますから、やまが　しろいです。",
    highlight: "（　　）",
    options: ["ゆき", "あめ", "くも", "かぜ"],
    answer: 0,
    translation: "Karena turun (salju), gunungnya menjadi putih."
  },
  {
    id: 51,
    question: "この　じしょは　とても　（　　）から、かばんの　なかに　はいりません。",
    highlight: "（　　）",
    options: ["あつい", "うすい", "ほそい", "みじかい"],
    answer: 0,
    translation: "Karena kamus ini sangat (tebal), tidak muat di dalam tas."
  },
    {
    id: 52,
    question: "ごはんを　たべる　まえに、てを　（　　）　ください。",
    highlight: "（　　）",
    options: ["あらって", "みがいて", "あびて", "して"],
    answer: 0,
    translation: "Sebelum makan, tolong (cuci) tangan."
  },
  {
    id: 53,
    question: "この　テストは　とても　（　　）でした。",
    highlight: "（　　）",
    options: ["かんたん", "しずか", "にぎやか", "きれい"],
    answer: 0,
    translation: "Ujian ini sangat (mudah)."
  },
  {
    id: 54,
    question: "きのう、デパートで　（　　）を　３そく　かいました。",
    highlight: "（　　）",
    options: ["くつした", "ズボン", "シャツ", "ぼうし"],
    answer: 0,
    translation: "Kemarin, saya membeli 3 pasang (kaos kaki) di toserba."
  },
  {
    id: 55,
    question: "まいあさ　６じに　おきて、シャワーを　（　　）。",
    highlight: "（　　）",
    options: ["あびます", "のみます", "あらいます", "はいります"],
    answer: 0,
    translation: "Saya bangun jam 6 setiap pagi dan (mandi) pancuran."
  },
  {
    id: 56,
    question: "（　　）の　どようびに　パーティーを　します。",
    highlight: "（　　）",
    options: ["らいしゅう", "きのう", "おととい", "らいねん"],
    answer: 0,
    translation: "Kita akan mengadakan pesta pada hari Sabtu (minggu depan)."
  },
  {
    id: 57,
    question: "すみませんが、その　ペンを　（　　）　ください。",
    highlight: "（　　）",
    options: ["かして", "かりて", "かえして", "おしえて"],
    answer: 0,
    translation: "Permisi, tolong (pinjamkan) pulpen itu."
  },
  {
    id: 58,
    question: "パンを　（　　）で　きります。",
    highlight: "（　　）",
    options: ["ナイフ", "スプーン", "フォーク", "はし"],
    answer: 0,
    translation: "Saya memotong roti dengan (pisau)."
  },
  {
    id: 59,
    question: "ははの　ははは　（　　）です。",
    highlight: "（　　）",
    options: ["そぼ", "そふ", "おば", "おじ"],
    answer: 0,
    translation: "Ibu dari ibu adalah (nenek)."
  },
  {
    id: 60,
    question: "スーパーで　かいものを　したら、（　　）を　もらいました。",
    highlight: "（　　）",
    options: ["おつり", "おかね", "さいふ", "きっぷ"],
    answer: 0,
    translation: "Setelah berbelanja di supermarket, saya menerima (kembalian)."
  },
  {
    id: 61,
    question: "とても　つかれたので、（　　）で　ねます。",
    highlight: "（　　）",
    options: ["ベッド", "テーブル", "つくえ", "イス"],
    answer: 0,
    translation: "Karena sangat lelah, saya tidur di (tempat tidur)."
  },
  {
    id: 62,
    question: "へやが　きたないですから、（　　）を　します。",
    highlight: "（　　）",
    options: ["そうじ", "せんたく", "べんきょう", "しごと"],
    answer: 0,
    translation: "Karena kamar kotor, saya melakukan (bersih-bersih)."
  },
  {
    id: 63,
    question: "この　おちゃは　とても　（　　）ですから、きを　つけてください。",
    highlight: "（　　）",
    options: ["あつい", "さむい", "いたい", "たかい"],
    answer: 0,
    translation: "Karena teh ini sangat (panas), tolong berhati-hati."
  },
  {
    id: 64,
    question: "せんせい、こくばんの　じが　よく　（　　）。",
    highlight: "（　　）",
    options: ["みえません", "みません", "きこえません", "ききません"],
    answer: 0,
    translation: "Guru, huruf di papan tulis tidak (terlihat) dengan jelas."
  },
  {
    id: 65,
    question: "（　　）で　いぬの　さんぽを　します。",
    highlight: "（　　）",
    options: ["こうえん", "びょういん", "ゆうびんきょく", "ぎんこう"],
    answer: 0,
    translation: "Saya membawa anjing berjalan-jalan di (taman)."
  },
  {
    id: 66,
    question: "ふくを　（　　）、おふろに　はいります。",
    highlight: "（　　）",
    options: ["ぬいで", "きて", "はいて", "かぶって"],
    answer: 0,
    translation: "Saya (melepas) baju, lalu masuk ke bak mandi."
  },
  {
    id: 67,
    question: "あしたは　（　　）ですから、いいてんきに　なりますね。",
    highlight: "（　　）",
    options: ["はれ", "あめ", "くも", "ゆき"],
    answer: 0,
    translation: "Besok (cerah), jadi cuacanya akan bagus ya."
  },
  {
    id: 68,
    question: "おばあさんは　８０さいですが、とても　（　　）です。",
    highlight: "（　　）",
    options: ["げんき", "べんり", "きれい", "にぎやか"],
    answer: 0,
    translation: "Nenek berusia 80 tahun, tetapi sangat (sehat/bersemangat)."
  },
  {
    id: 69,
    question: "さとうを　たくさん　いれましたから、この　コーヒーは　（　　）です。",
    highlight: "（　　）",
    options: ["あまい", "からい", "しおからい", "にがい"],
    answer: 0,
    translation: "Karena saya memasukkan banyak gula, kopi ini (manis)."
  },
  {
    id: 70,
    question: "ドアを　（　　）　ください。さむいですから。",
    highlight: "（　　）",
    options: ["しめて", "あけて", "つけて", "けして"],
    answer: 0,
    translation: "Tolong (tutup) pintunya. Karena dingin."
  },
  {
    id: 71,
    question: "てがみに　（　　）を　はって、ポストに　いれます。",
    highlight: "（　　）",
    options: ["きって", "ふうとう", "はがき", "しゃしん"],
    answer: 0,
    translation: "Saya menempelkan (prangko) pada surat dan memasukkannya ke kotak pos."
  },
  {
    id: 72,
    question: "じかんが　ありませんから、（　　）。",
    highlight: "（　　）",
    options: ["いそぎましょう", "まちましょう", "やすみましょう", "あそびましょう"],
    answer: 0,
    translation: "Karena tidak ada waktu, mari (bergegas)."
  },
  {
    id: 73,
    question: "（　　）に、かぞくと　うみへ　いきます。",
    highlight: "（　　）",
    options: ["なつやすみ", "ひるやすみ", "あさごはん", "ばんごはん"],
    answer: 0,
    translation: "Pada (liburan musim panas), saya pergi ke laut bersama keluarga."
  },
  {
    id: 74,
    question: "カメラで　しゃしんを　（　　）。",
    highlight: "（　　）",
    options: ["とります", "つくります", "かきます", "みます"],
    answer: 0,
    translation: "Saya (mengambil) foto dengan kamera."
  },
  {
    id: 75,
    question: "（　　）に　とりが　とんで　います。",
    highlight: "（　　）",
    options: ["そら", "うみ", "かわ", "やま"],
    answer: 0,
    translation: "Burung terbang di (langit)."
  },
  {
    id: 76,
    question: "みちが　わかりませんから、おまわりさんに　（　　）。",
    highlight: "（　　）",
    options: ["ききます", "こたえます", "おしえます", "はなします"],
    answer: 0,
    translation: "Karena tidak tahu jalan, saya (bertanya) kepada polisi."
  },
  {
    id: 77,
    question: "あの　（　　）は　だれですか。",
    highlight: "（　　）",
    options: ["ひと", "もの", "こと", "ほん"],
    answer: 0,
    translation: "Siapa (orang) itu?"
  },
  {
    id: 78,
    question: "この　みちは　とても　（　　）です。",
    highlight: "（　　）",
    options: ["ながい", "みじかい", "たかい", "ひくい"],
    answer: 0,
    translation: "Jalan ini sangat (panjang)."
  },
  {
    id: 79,
    question: "つぎの　えきで、でんしゃを　（　　）。",
    highlight: "（　　）",
    options: ["おります", "のります", "はいります", "でます"],
    answer: 0,
    translation: "Di stasiun berikutnya, saya (turun) dari kereta."
  },
  {
    id: 80,
    question: "かぜを　ひきましたから、きょうは　がっこうを　（　　）。",
    highlight: "（　　）",
    options: ["やすみます", "おわります", "はじまります", "かえります"],
    answer: 0,
    translation: "Karena masuk angin, hari ini saya (absen/libur) sekolah."
  },
  {
    id: 81,
    question: "バスが　くるまで、ここで　（　　）。",
    highlight: "（　　）",
    options: ["まちます", "あそびます", "やすみます", "はたらきます"],
    answer: 0,
    translation: "Saya (menunggu) di sini sampai bus datang."
  }

];
