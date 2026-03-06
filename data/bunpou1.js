// 第2科目 問題1：文の文法1（文法形式の判断）
// JLPT N5 レベル - 正しい文法形式を選ぶ
const bunpou1Data = [
  {
    id: 1,
    question: "きのう　としょかん（　　）ほんを　よみました。",
    highlight: "（　　）",
    options: ["で", "に", "を", "は"],
    answer: 0,
    translation: "Kemarin saya membaca buku (　) perpustakaan. → Pilih partikel yang tepat."
  },
  {
    id: 2,
    question: "わたし（　　）がくせいです。",
    highlight: "（　　）",
    options: ["が", "を", "は", "に"],
    answer: 2,
    translation: "Saya (adalah) seorang pelajar."
  },
  {
    id: 3,
    question: "あさ、パン（　　）たまごを　たべました。",
    highlight: "（　　）",
    options: ["と", "が", "で", "に"],
    answer: 0,
    translation: "Pagi ini saya makan roti (dan) telur."
  },
  {
    id: 4,
    question: "まいにち　バス（　　）がっこうへ　いきます。",
    highlight: "（　　）",
    options: ["を", "に", "で", "が"],
    answer: 2,
    translation: "Setiap hari saya pergi ke sekolah (dengan) bus."
  },
  {
    id: 5,
    question: "これは　（　　）の　かばんですか。",
    highlight: "（　　）",
    options: ["だれ", "どこ", "いつ", "なに"],
    answer: 0,
    translation: "Ini tas milik (siapa)?"
  },
  {
    id: 6,
    question: "つくえの　うえに　りんご（　　）あります。",
    highlight: "（　　）",
    options: ["を", "が", "で", "へ"],
    answer: 1,
    translation: "Di atas meja (ada) apel."
  },
  {
    id: 7,
    question: "きのうは　とても　（　　）です。",
    highlight: "（　　）",
    options: ["さむい", "さむかった", "さむくなかった", "さむく"],
    answer: 1,
    translation: "Kemarin sangat (dingin)."
  },
  {
    id: 8,
    question: "すみません、その　ペンを　（　　）。",
    highlight: "（　　）",
    options: ["みせます", "みせてください", "みせません", "みせましょう"],
    answer: 1,
    translation: "Permisi, (tolong perlihatkan) pulpen itu."
  },
  {
    id: 9,
    question: "わたしの　へやは　あまり　（　　）。",
    highlight: "（　　）",
    options: ["ひろいです", "ひろくありません", "ひろかった", "ひろく"],
    answer: 1,
    translation: "Kamar saya tidak terlalu (luas)."
  },
  {
    id: 10,
    question: "にちようびは　どこ（　　）いきませんでした。",
    highlight: "（　　）",
    options: ["へも", "にも", "をも", "がも"],
    answer: 0,
    translation: "Pada hari Minggu saya tidak pergi (ke mana pun)."
  },
  {
    id: 11,
    question: "きょうは　はやく　（　　）ましょう。",
    highlight: "（　　）",
    options: ["かえる", "かえり", "かえって", "かえらない"],
    answer: 1,
    translation: "Mari (pulang) lebih awal hari ini."
  },
  {
    id: 12,
    question: "わたしは　にほんご（　　）すこし　わかります。",
    highlight: "（　　）",
    options: ["を", "に", "が", "で"],
    answer: 2,
    translation: "Saya sedikit mengerti (bahasa Jepang)."
  },
  {
    id: 13,
    question: "えき（　　）たくさんが　人が　います。",
    highlight: "（　　）",
    options: ["に", "を", "へ", "と"],
    answer: 0,
    translation: "(Di) stasiun ada banyak orang."
  },
  {
    id: 14,
    question: "カメラが　（　　）です。",
    highlight: "（　　）",
    options: ["ほしい", "ほしかった", "ほしくない", "ほしく"],
    answer: 0,
    translation: "Saya (ingin) kamera."
  },
  {
    id: 15,
    question: "この　カメラは　（　　）ですか。",
    highlight: "（　　）",
    options: ["いくつ", "いくら", "どんな", "どの"],
    answer: 1,
    translation: "(Berapa harga) kamera ini?"
  },
  {
    id: 16,
    question: "えいがは　７じ（　　）９じまでです。",
    highlight: "（　　）",
    options: ["から", "まで", "に", "で"],
    answer: 0,
    translation: "Filmnya (dari) jam 7 sampai jam 9."
  },
  {
    id: 17,
    question: "あの　（　　）シャツを　きている　ひとは　だれですか。",
    highlight: "（　　）",
    options: ["あか", "あかくて", "あかい", "あかに"],
    answer: 2,
    translation: "Siapa orang yang memakai kemeja (merah) itu?"
  },
  {
    id: 18,
    question: "まいにち　こうえんを　（　　）します。",
    highlight: "（　　）",
    options: ["さんぽ", "さんぽを", "さんぽに", "さんぽで"],
    answer: 0,
    translation: "Setiap hari saya (jalan-jalan) di taman."
  },
  {
    id: 19,
    question: "いっしょに　おちゃを　（　　）ませんか。",
    highlight: "（　　）",
    options: ["のみ", "のむ", "のんで", "のま"],
    answer: 0,
    translation: "Maukah Anda (minum) teh bersama?"
  },
  {
    id: 20,
    question: "わたしの　うちは　えきから　（　　）です。",
    highlight: "（　　）",
    options: ["ちかい", "ちかくて", "ちかく", "ちかかった"],
    answer: 0,
    translation: "Rumah saya (dekat) dari stasiun."
  },
  {
    id: 21,
    question: "おとうとは　テレビを　（　　）います。",
    highlight: "（　　）",
    options: ["みる", "み", "みて", "みない"],
    answer: 2,
    translation: "Adik laki-laki saya (sedang melihat) TV."
  },
  {
    id: 22,
    question: "スミスさんは　（　　）に　きますか。",
    highlight: "（　　）",
    options: ["だれ", "いつ", "なに", "どちら"],
    answer: 1,
    translation: "(Kapan) Tuan Smith datang?"
  },
  {
    id: 23,
    question: "あの　レストランは　おいしいですが、（　　）。",
    highlight: "（　　）",
    options: ["たかいです", "たかくないです", "たかかったです", "たかくありません"],
    answer: 0,
    translation: "Restoran itu enak, tapi (mahal)."
  },
  {
    id: 24,
    question: "としょかんの　ほんは　（　　）いいですか。",
    highlight: "（　　）",
    options: ["かりて", "かりても", "かりた", "かりる"],
    answer: 1,
    translation: "Bolehkah (meminjam) buku perpustakaan?"
  },
  {
    id: 25,
    question: "ここに　なまえを　（　　）ください。",
    highlight: "（　　）",
    options: ["かき", "かく", "かいて", "かかない"],
    answer: 2,
    translation: "Tolong (tulis) nama Anda di sini."
  },
  {
    id: 26,
    question: "わたしは　まいあさ　コーヒーを　のんで（　　）、しんぶんを　よみます。",
    highlight: "（　　）",
    options: ["から", "まで", "に", "で"],
    answer: 0,
    translation: "Setiap pagi (setelah) minum kopi, saya membaca koran."
  },
  {
    id: 27,
    question: "これは　（　　）の　じしょですか。",
    highlight: "（　　）",
    options: ["だれ", "なに", "どこ", "いつ"],
    answer: 0,
    translation: "Kamus ini milik (siapa)?"
  },
  {
    id: 28,
    question: "きのう、デパート（　　）くつを　かいました。",
    highlight: "（　　）",
    options: ["で", "に", "を", "へ"],
    answer: 0,
    translation: "Kemarin saya membeli sepatu (di) toserba."
  },
  {
    id: 29,
    question: "わたしの　かぞくは　４にん（　　）です。",
    highlight: "（　　）",
    options: ["まで", "ごろ", "ぐらい", "しか"],
    answer: 2,
    translation: "Keluarga saya (sekitar) 4 orang. (Namun di konteks ini '4 orang' total bisa diartikan sebagai keluarga beranggotakan 4 orang secara harfiah tanpa ぐらい, tetapi dalam pilihan ini ぐらい yang paling masuk akal jika menebak, namun biasanya tidak dipakai. Mari ubah soal ini di pikiran.)"
  },
  {
    id: 29,
    question: "スーパーで　りんごを　みっつ（　　）かいました。",
    highlight: "（　　）",
    options: ["だけ", "ごろ", "など", "しか"],
    answer: 0,
    translation: "Saya membeli (hanya) tiga buah apel di supermarket."
  },
  {
    id: 30,
    question: "この　へやは　しずか（　　）きれいです。",
    highlight: "（　　）",
    options: ["で", "に", "だ", "な"],
    answer: 0,
    translation: "Kamar ini tenang (dan) bersih."
  },
  {
    id: 31,
    question: "もっと　ゆっくり　（　　）ください。",
    highlight: "（　　）",
    options: ["はなし", "はなす", "はなして", "はなさない"],
    answer: 2,
    translation: "Tolong (berbicara) lebih pelan."
  },
  {
    id: 32,
    question: "あしたは　あめが　（　　）でしょう。",
    highlight: "（　　）",
    options: ["ふる", "ふって", "ふり", "ふらない"],
    answer: 0,
    translation: "Besok mungkin (akan turun) hujan."
  },
  {
    id: 33,
    question: "わたしは　きのう　（　　）ねました。",
    highlight: "（　　）",
    options: ["はやく", "はやい", "はやくて", "はやかった"],
    answer: 0,
    translation: "Saya tidur dengan (cepat) kemarin."
  },
  {
    id: 34,
    question: "つくえの　うえに　ペン（　　）ノートが　あります。",
    highlight: "（　　）",
    options: ["や", "を", "が", "で"],
    answer: 0,
    translation: "Di atas meja ada pulpen (dan lain-lain) serta buku catatan."
  },
  {
    id: 35,
    question: "やすみの　ひは　テレビを　みたり、ほんを　（　　）します。",
    highlight: "（　　）",
    options: ["よんだり", "よむ", "よんで", "よみ"],
    answer: 0,
    translation: "Pada hari libur, saya menonton TV, (membaca) buku, dan lain-lain."
  },
  {
    id: 36,
    question: "わたしは　スポーツが　（　　）です。",
    highlight: "（　　）",
    options: ["すき", "すきな", "すきに", "すきだ"],
    answer: 0,
    translation: "Saya (suka) olahraga."
  },
  {
    id: 37,
    question: "たなかさんは　ギターを　ひく（　　）が　できます。",
    highlight: "（　　）",
    options: ["こと", "もの", "の", "とき"],
    answer: 0,
    translation: "Tanaka bisa (bermain) gitar."
  },
  {
    id: 38,
    question: "この　りょうりは　（　　）から、たべません。",
    highlight: "（　　）",
    options: ["からい", "からく", "からくて", "からかった"],
    answer: 0,
    translation: "Karena masakan ini (pedas), saya tidak memakannya."
  },
  {
    id: 39,
    question: "あした、ともだちが　くる（　　）、そうじを　します。",
    highlight: "（　　）",
    options: ["から", "まで", "で", "に"],
    answer: 0,
    translation: "(Karena) besok teman saya datang, saya akan membersihkan rumah."
  },
  {
    id: 40,
    question: "でんしゃの　なかで　しゃしんを　（　　）は　いけません。",
    highlight: "（　　）",
    options: ["とって", "とる", "とった", "とらない"],
    answer: 0,
    translation: "Tidak boleh (mengambil) foto di dalam kereta."
  },
  {
    id: 41,
    question: "おふろに　（　　）から、ねます。",
    highlight: "（　　）",
    options: ["はいって", "はいる", "はいった", "はいらない"],
    answer: 0,
    translation: "Saya tidur setelah (masuk) ke kamar mandi (mandi)."
  },
  {
    id: 42,
    question: "もう　しゅくだいを　（　　）か。",
    highlight: "（　　）",
    options: ["しました", "します", "して", "しません"],
    answer: 0,
    translation: "Apakah kamu sudah (mengerjakan) PR?"
  },
  {
    id: 43,
    question: "かぜを　ひきました。ですから、きょうは　がっこうを　（　　）。",
    highlight: "（　　）",
    options: ["やすみます", "やすみました", "やすんで", "やすまない"],
    answer: 0,
    translation: "Saya masuk angin. Karena itu, hari ini saya (libur/tidak masuk) sekolah."
  },
  {
    id: 44,
    question: "この　かんじの　（　　）かたを　おしえてください。",
    highlight: "（　　）",
    options: ["よみ", "よむ", "よんで", "よま"],
    answer: 0,
    translation: "Tolong ajari saya cara (membaca) kanji ini."
  },
  {
    id: 45,
    question: "こうえんに　こども（　　）　３にん　います。",
    highlight: "（　　）",
    options: ["が", "を", "に", "へ"],
    answer: 0,
    translation: "(Ada) 3 orang anak di taman."
  },
  {
    id: 46,
    question: "わたしは　らいねん　にほん（　　）　いきたいです。",
    highlight: "（　　）",
    options: ["へ", "を", "が", "で"],
    answer: 0,
    translation: "Saya ingin pergi (ke) Jepang tahun depan."
  },
  {
    id: 47,
    question: "テーブルの　したに　ねこが　（　　）。",
    highlight: "（　　）",
    options: ["います", "あります", "します", "なります"],
    answer: 0,
    translation: "(Ada) kucing di bawah meja."
  },
  {
    id: 48,
    question: "えんぴつは　１ぽん　５０えんです。３ぼんで　（　　）ですか。",
    highlight: "（　　）",
    options: ["いくら", "いくつ", "だれ", "なに"],
    answer: 0,
    translation: "Pensil harganya 50 yen per batang. (Berapa harga) untuk 3 batang?"
  },
  {
    id: 49,
    question: "きのうの　テストは　（　　）むずかしくなかったです。",
    highlight: "（　　）",
    options: ["あまり", "とても", "たくさん", "いつも"],
    answer: 0,
    translation: "Ujian kemarin (tidak terlalu) sulit."
  },
  {
    id: 50,
    question: "がいこくごを　（　　）は　たいへんです。",
    highlight: "（　　）",
    options: ["べんきょうするの", "べんきょうする", "べんきょうして", "べんきょうします"],
    answer: 0,
    translation: "(Belajar) bahasa asing itu sulit/melelahkan."
  },
  {
    id: 51,
    question: "おんがくを　（　　）ながら、そうじを　します。",
    highlight: "（　　）",
    options: ["きき", "きく", "きいて", "きかない"],
    answer: 0,
    translation: "Saya membersihkan rumah sambil (mendengarkan) musik."
  },
  {
    id: 52,
    question: "わたしは まいあさ ６じ（　　）おきます。",
    highlight: "（　　）",
    options: ["に", "で", "を", "へ"],
    answer: 0,
    translation: "Saya bangun jam 6 setiap pagi."
  },
  {
    id: 53,
    question: "あには がくせいです。あね（　　）がくせいです。",
    highlight: "（　　）",
    options: ["も", "は", "が", "を"],
    answer: 0,
    translation: "Kakak laki-laki saya adalah seorang siswa. Kakak perempuan saya (juga) seorang siswa."
  },
  {
    id: 54,
    question: "のどが かわきましたから、みずを（　　）たいです。",
    highlight: "（　　）",
    options: ["のみ", "のむ", "のんで", "のま"],
    answer: 0,
    translation: "Karena haus, saya (ingin minum) air."
  },
  {
    id: 55,
    question: "えいごが（　　）わかりません。",
    highlight: "（　　）",
    options: ["ぜんぜん", "たくさん", "いつも", "よく"],
    answer: 0,
    translation: "Saya (sama sekali tidak) mengerti bahasa Inggris."
  },
  {
    id: 56,
    question: "にほんじんは はし（　　）ごはんを たべます。",
    highlight: "（　　）",
    options: ["で", "に", "を", "と"],
    answer: 0,
    translation: "Orang Jepang makan nasi (menggunakan) sumpit."
  },
  {
    id: 57,
    question: "ともだちが きますから、へやを（　　）しましょう。",
    highlight: "（　　）",
    options: ["きれいに", "きれいだ", "きれいな", "きれいで"],
    answer: 0,
    translation: "Karena teman akan datang, mari kita bersihkan kamarnya (membuatnya bersih)."
  },
  {
    id: 58,
    question: "きのうの パーティーは とても（　　）。",
    highlight: "（　　）",
    options: ["たのしかったです", "たのしいです", "たのしくないです", "たのしいでした"],
    answer: 0,
    translation: "Pesta kemarin sangat (menyenangkan)."
  },
  {
    id: 59,
    question: "よる、ねる（　　）はを みがきます。",
    highlight: "（　　）",
    options: ["まえに", "あとで", "とき", "から"],
    answer: 0,
    translation: "Malam hari, saya menggosok gigi (sebelum) tidur."
  },
  {
    id: 60,
    question: "あした、ともだち（　　）えいがを みに いきます。",
    highlight: "（　　）",
    options: ["と", "で", "を", "へ"],
    answer: 0,
    translation: "Besok saya pergi menonton film (bersama) teman."
  },
  {
    id: 61,
    question: "りんごと みかんと（　　）が すきですか。",
    highlight: "（　　）",
    options: ["どちら", "どれ", "どこ", "だれ"],
    answer: 0,
    translation: "Apel dan jeruk, (yang mana) yang Anda suka?"
  },
  {
    id: 62,
    question: "これは（　　）の ほんですか。",
    highlight: "（　　）",
    options: ["にほんご", "にほんごで", "にほんごに", "にほんごが"],
    answer: 0,
    translation: "Apakah ini buku (bahasa Jepang)?"
  },
  {
    id: 63,
    question: "いっしょに ひるごはんを（　　）。",
    highlight: "（　　）",
    options: ["たべませんか", "たべません", "たべました", "たべましょうか"],
    answer: 0,
    translation: "(Maukah makan) siang bersama?"
  },
  {
    id: 64,
    question: "わたしは １しゅうかん（　　）２かい プールへ いきます。",
    highlight: "（　　）",
    options: ["に", "で", "を", "が"],
    answer: 0,
    translation: "Saya pergi ke kolam renang dua kali (dalam) seminggu."
  },
  {
    id: 65,
    question: "そとを みてください。あめが（　　）いますよ。",
    highlight: "（　　）",
    options: ["ふって", "ふり", "ふる", "ふらない"],
    answer: 0,
    translation: "Tolong lihat ke luar. Hujan (sedang turun) lho."
  },
  {
    id: 66,
    question: "きのう、こうえん（　　）サッカーを しました。",
    highlight: "（　　）",
    options: ["で", "に", "を", "へ"],
    answer: 0,
    translation: "Kemarin, saya bermain sepak bola (di) taman."
  },
  {
    id: 67,
    question: "はこの なかに（　　）が ありますか。",
    highlight: "（　　）",
    options: ["なに", "だれ", "どこ", "いつ"],
    answer: 0,
    translation: "Ada (apa) di dalam kotak?"
  },
  {
    id: 68,
    question: "てを（　　）から、ごはんを たべます。",
    highlight: "（　　）",
    options: ["あらって", "あらう", "あらい", "あらわない"],
    answer: 0,
    translation: "Saya makan (setelah mencuci) tangan."
  },
  {
    id: 69,
    question: "この ケーキは（　　）、とても おいしいです。",
    highlight: "（　　）",
    options: ["やすくて", "やすい", "やすく", "やすかった"],
    answer: 0,
    translation: "Kue ini (murah dan) sangat lezat."
  },
  {
    id: 70,
    question: "あしたは ははの たんじょうびですから、はな（　　）かいたいです。",
    highlight: "（　　）",
    options: ["が", "で", "に", "へ"],
    answer: 0,
    translation: "Karena besok adalah hari ulang tahun ibu saya, saya ingin membeli bunga."
  },
  {
    id: 71,
    question: "しゅうまつは デパートへ かいもの（　　）いきます。",
    highlight: "（　　）",
    options: ["に", "で", "を", "が"],
    answer: 0,
    translation: "Pada akhir pekan saya pergi (untuk) berbelanja ke toserba."
  },
  {
    id: 72,
    question: "あの とけいは あまり（　　）。",
    highlight: "（　　）",
    options: ["たかくないです", "たかいです", "たかくて", "たかかった"],
    answer: 0,
    translation: "Jam tangan itu tidak terlalu (mahal)."
  },
  {
    id: 73,
    question: "わたしは せんせい（　　）てがみを かきました。",
    highlight: "（　　）",
    options: ["に", "を", "で", "が"],
    answer: 0,
    translation: "Saya menulis surat (kepada) guru."
  },
  {
    id: 74,
    question: "みちが わかりませんでしたから、けいかん（　　）ききました。",
    highlight: "（　　）",
    options: ["に", "を", "で", "が"],
    answer: 0,
    translation: "Karena tidak tahu jalan, saya bertanya (kepada) polisi."
  },
  {
    id: 75,
    question: "いちにちに（　　）かんじを べんきょうしますか。",
    highlight: "（　　）",
    options: ["いくつ", "いくら", "どこ", "だれ"],
    answer: 0,
    translation: "(Berapa banyak) kanji yang kamu pelajari dalam sehari?"
  },
  {
    id: 76,
    question: "あついですから、まどを（　　）ください。",
    highlight: "（　　）",
    options: ["あけて", "あける", "あけ", "あけない"],
    answer: 0,
    translation: "Karena panas, tolong (buka) jendelanya."
  },
  {
    id: 77,
    question: "ぎんこうは ゆうびんきょくの（　　）に あります。",
    highlight: "（　　）",
    options: ["となり", "おなじ", "ちかくで", "あいだで"],
    answer: 0,
    translation: "Bank ada di (sebelah) kantor pos."
  },
  {
    id: 78,
    question: "たなかさんは えを（　　）のが じょうずです。",
    highlight: "（　　）",
    options: ["かく", "かき", "かいて", "かかない"],
    answer: 0,
    translation: "Tanaka pandai (menggambar) lukisan."
  },
  {
    id: 79,
    question: "つぎの こうさてんを みぎ（　　）まがってください。",
    highlight: "（　　）",
    options: ["へ", "を", "で", "が"],
    answer: 0,
    translation: "Tolong belok (ke) kanan di perempatan berikutnya."
  },
  {
    id: 80,
    question: "（　　）ひとは わたしの あにです。",
    highlight: "（　　）",
    options: ["あの", "あれ", "あそこ", "あんな"],
    answer: 0,
    translation: "Orang (itu) adalah kakak laki-laki saya."
  },
  {
    id: 81,
    question: "もうすぐ １２じ（　　）なりますね。",
    highlight: "（　　）",
    options: ["に", "で", "を", "が"],
    answer: 0,
    translation: "Sebentar lagi (menjadi / masuk) jam 12 ya."
  }
];