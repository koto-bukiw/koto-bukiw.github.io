// 第2科目 問題2：文の文法2（文の組み立て）
// JLPT N5 レベル - ★に入る正しい語順を選ぶ
const bunpou2Data = [
  {
    id: 1,
    question: "わたしは (＿＿) (＿＿) (★) (＿＿) いきます。",
    highlight: "★",
    options: ["バスで", "まいにち", "がっこうに", "はちじの"],
    answer: 2,
    translation: "わたしは（まいにち）（はちじの）（バスで）（がっこうに）いきます。Saya pergi ke sekolah naik bus jam delapan setiap hari."
  },
  {
    id: 2,
    question: "きのう (＿＿) (＿＿) (★) (＿＿)。",
    highlight: "★",
    options: ["かいに", "デパートへ", "いきました", "かばんを"],
    answer: 0,
    translation: "きのう（デパートへ）（かばんを）（かいに）（いきました）。Kemarin saya pergi ke toserba untuk membeli tas."
  },
  {
    id: 3,
    question: "つくえの (＿＿) (＿＿) (★) (＿＿) あります。",
    highlight: "★",
    options: ["かばん", "うえに", "が", "ノートと"],
    answer: 0,
    translation: "つくえの（うえに）（ノートと）（かばん）（が）あります。Di atas meja ada buku catatan dan tas."
  },
  {
    id: 4,
    question: "きのうは (＿＿) (＿＿) (★) (＿＿) ほんを よみました。",
    highlight: "★",
    options: ["あめが", "から", "ふっていた", "うちで"],
    answer: 1,
    translation: "きのうは（あめが）（ふっていた）（から）（うちで）ほんをよみました。Karena kemarin turun hujan, saya membaca buku di rumah."
  },
  {
    id: 5,
    question: "わたしは (＿＿) (＿＿) (★) (＿＿) すきです。",
    highlight: "★",
    options: ["の", "うた", "にほん", "が"],
    answer: 1,
    translation: "わたしは（にほん）（の）（うた）（が）すきです。Saya suka lagu Jepang."
  },
  {
    id: 6,
    question: "あの (＿＿) (＿＿) (★) (＿＿) は だれですか。",
    highlight: "★",
    options: ["を", "ひと", "めがね", "かけている"],
    answer: 3,
    translation: "あの（めがね）（を）（かけている）（ひと）はだれですか。Orang yang memakai kacamata itu siapa?"
  },
  {
    id: 7,
    question: "わたしは (＿＿) (＿＿) (★) (＿＿) が すきです。",
    highlight: "★",
    options: ["のむ", "コーヒー", "を", "の"],
    answer: 0,
    translation: "わたしは（コーヒー）（を）（のむ）（の）がすきです。Saya suka minum kopi."
  },
  {
    id: 8,
    question: "まいあさ (＿＿) (＿＿) (★) (＿＿) かおを あらいます。",
    highlight: "★",
    options: ["シャワーを", "すぐ", "あびてから", "おきて"],
    answer: 0,
    translation: "まいあさ（おきて）（すぐ）（シャワーを）（あびてから）かおをあらいます。Setiap pagi setelah bangun dan langsung mandi (shower), saya mencuci muka."
  },
  {
    id: 9,
    question: "まいあさ ６じに (＿＿) (＿＿) (★) (＿＿) ごはんを たべます。",
    highlight: "★",
    options: ["シャワー", "から", "あびて", "を"],
    answer: 2,
    translation: "まいあさ６じに（シャワー）（を）（あびて）（から）ごはんをたべます。Setiap pagi jam 6 saya makan setelah mandi (shower)."
  },
  {
    id: 10,
    question: "(＿＿) (＿＿) (★) (＿＿) しゃしんを とりましたか。",
    highlight: "★",
    options: ["の", "だれ", "カメラ", "で"],
    answer: 2,
    translation: "（だれ）（の）（カメラ）（で）しゃしんをとりましたか。Anda mengambil foto menggunakan kamera milik siapa?"
  },
  {
    id: 11,
    question: "かばんに (＿＿) (＿＿) (★) (＿＿) が はいっていますか。",
    highlight: "★",
    options: ["なに", "の", "なか", "に"],
    answer: 0,
    translation: "かばん（の）（なか）（に）（なに）がはいっていますか。Di dalam tas ada apa?"
  },
  {
    id: 12,
    question: "きのうは (＿＿) (＿＿) (★) (＿＿) ねました。",
    highlight: "★",
    options: ["おそく", "いそがしかった", "とても", "から"],
    answer: 3,
    translation: "きのうは（とても）（いそがしかった）（から）（おそく）ねました。Karena kemarin sangat sibuk, saya tidur larut."
  },
  {
    id: 13,
    question: "りょうりに (＿＿) (＿＿) (★) (＿＿) ください。",
    highlight: "★",
    options: ["いれない", "さとう", "を", "で"],
    answer: 3,
    translation: "りょうりに（さとう）（を）（いれない）（で）ください。Tolong jangan masukkan gula ke masakan."
  },
  {
    id: 14,
    question: "わたしは (＿＿) (＿＿) (★) (＿＿) です。",
    highlight: "★",
    options: ["をつくるの", "が", "りょうり", "すき"],
    answer: 1,
    translation: "わたしは（りょうり）（をつくるの）（が）（すき）です。Saya suka memasak makanan."
  },
  {
    id: 15,
    question: "この クッキーは (＿＿) (＿＿) (★) (＿＿) おいしいですよ。",
    highlight: "★",
    options: ["あまくて", "と", "コーヒー", "いっしょにたべると"],
    answer: 3,
    translation: "このクッキーは（あまくて）（コーヒー）（と）（いっしょにたべると）おいしいですよ。Kue kering ini manis dan enak jika dimakan bersama kopi."
  },
  {
    id: 16,
    question: "あの (＿＿) (＿＿) (★) (＿＿) に あります。",
    highlight: "★",
    options: ["の", "しろい", "ビル", "となり"],
    answer: 0,
    translation: "あの（しろい）（ビル）（の）（となり）にあります。Ada di sebelah gedung putih itu."
  },
  {
    id: 17,
    question: "わたしは (＿＿) (＿＿) (★) (＿＿) きました。",
    highlight: "★",
    options: ["ちゅうごく", "ペキン", "から", "の"],
    answer: 1,
    translation: "わたしは（ちゅうごく）（の）（ペキン）（から）きました。Saya datang dari Beijing, Cina."
  },
  {
    id: 18,
    question: "わたしの へやには (＿＿) (＿＿) (★) (＿＿) ありません。",
    highlight: "★",
    options: ["しか", "テレビ", "ひとつ", "が"],
    answer: 0,
    translation: "わたしのへやには（テレビ）（が）（ひとつ）（しか）ありません。Di kamar saya hanya ada satu televisi."
  },
  {
    id: 19,
    question: "きょうは (＿＿) (＿＿) (★) (＿＿) かえりましょう。",
    highlight: "★",
    options: ["はやく", "から", "うちへ", "さむい"],
    answer: 2,
    translation: "きょうは（さむい）（から）（はやく）（うちへ）かえりましょう。Karena hari ini dingin, mari kita pulang ke rumah lebih awal."
  },
  {
    id: 20,
    question: "あしたは (＿＿) (＿＿) (★) (＿＿) いいですね。",
    highlight: "★",
    options: ["に なる", "いい", "てんき", "と"],
    answer: 3,
    translation: "あしたは（いい）（てんき）（に なる）（と）いいですね。Semoga besok cuacanya menjadi bagus ya."
  },
  {
    id: 21,
    question: "この ほんは (＿＿) (＿＿) (★) (＿＿) おもしろくないです。",
    highlight: "★",
    options: ["だから", "むずかしい", "です", "ぜんぜん"],
    answer: 3,
    translation: "このほんは（むずかしい）（です）（だから）（ぜんぜん）おもしろくないです。Buku ini sulit, karena itu sama sekali tidak menarik."
  },
  {
    id: 22,
    question: "きのう (＿＿) (＿＿) (★) (＿＿) とても つかれました。",
    highlight: "★",
    options: ["で", "あるいた", "やま", "ので"],
    answer: 1,
    translation: "きのう（やま）（で）（あるいた）（ので）とてもつかれました。Karena kemarin berjalan di gunung, saya sangat lelah."
  },
  {
    id: 23,
    question: "あの (＿＿) (＿＿) (★) (＿＿) カメラです。",
    highlight: "★",
    options: ["くろい", "は", "カメラ", "わたしの"],
    answer: 1,
    translation: "あの（くろい）（カメラ）（は）（わたしの）カメラです。Kamera hitam itu adalah kamera saya."
  },
  {
    id: 24,
    question: "(＿＿) (＿＿) (★) (＿＿) しまりました。",
    highlight: "★",
    options: ["が", "ドア", "かぜ", "で"],
    answer: 1,
    translation: "（かぜ）（で）（ドア）（が）しまりました。Pintunya tertutup oleh angin."
  },
  {
    id: 25,
    question: "わたしは (＿＿) (＿＿) (★) (＿＿) できません。",
    highlight: "★",
    options: ["ギターを", "が", "ひく", "こと"],
    answer: 3,
    translation: "わたしは（ギターを）（ひく）（こと）（が）できません。Saya tidak bisa bermain gitar."
  },
  {
    id: 26,
    question: "みちが (＿＿) (＿＿) (★) (＿＿) わかりません。",
    highlight: "★",
    options: ["から", "くらい", "よく", "です"],
    answer: 0,
    translation: "みちが（くらい）（です）（から）（よく）わかりません。Karena jalannya gelap, saya tidak tahu dengan jelas."
  },
  {
    id: 27,
    question: "ここに (＿＿) (＿＿) (★) (＿＿) はいけません。",
    highlight: "★",
    options: ["を", "は", "とめて", "くるま"],
    answer: 2,
    translation: "ここに（くるま）（を）（とめて）（は）いけません。Tidak boleh memarkir mobil di sini."
  },
  {
    id: 28,
    question: "あそこに (＿＿) (＿＿) (★) (＿＿) います。",
    highlight: "★",
    options: ["が", "ねこ", "ちいさい", "３びき"],
    answer: 0,
    translation: "あそこに（ちいさい）（ねこ）（が）（３びき）います。Di sana ada tiga ekor kucing kecil."
  },
  {
    id: 29,
    question: "もっと (＿＿) (＿＿) (★) (＿＿) はなしてください。",
    highlight: "★",
    options: ["おおきい", "で", "こえ", "ゆっくり"],
    answer: 2,
    translation: "もっと（おおきい）（こえ）（で）（ゆっくり）はなしてください。Tolong bicara lebih pelan dengan suara yang lebih besar."
  },
  {
    id: 30,
    question: "わたしは (＿＿) (＿＿) (★) (＿＿) います。",
    highlight: "★",
    options: ["が", "きょうだい", "にん", "３"],
    answer: 3,
    translation: "わたしは（きょうだい）（が）（３）（にん）います。Saya memiliki tiga saudara."
  },
  {
    id: 31,
    question: "きょうは おなかが (＿＿) (＿＿) (★) (＿＿) たべたくないです。",
    highlight: "★",
    options: ["から", "いたい", "なにも", "です"],
    answer: 0,
    translation: "きょうは おなかが（いたい）（です）（から）（なにも）たべたくないです。Hari ini saya tidak ingin makan apa pun karena perut saya sakit."
  },
  {
    id: 32,
    question: "テーブルの (＿＿) (＿＿) (★) (＿＿) あります。",
    highlight: "★",
    options: ["が", "した", "に", "ほん"],
    answer: 3,
    translation: "テーブルの（した）（に）（ほん）（が）あります。Di bawah meja ada buku."
  },
  {
    id: 33,
    question: "(＿＿) (＿＿) (★) (＿＿) は だれですか。",
    highlight: "★",
    options: ["あの", "おんな", "ひと", "の"],
    answer: 3,
    translation: "（あの）（おんな）（の）（ひと）はだれですか。Orang perempuan itu siapa?"
  },
  {
    id: 34,
    question: "まどを (＿＿) (＿＿) (★) (＿＿) いいですか。",
    highlight: "★",
    options: ["も", "あけ", "て", "すこし"],
    answer: 2,
    translation: "まどを（すこし）（あけ）（て）（も）いいですか。Bolehkah saya membuka jendela sedikit?"
  },
  {
    id: 35,
    question: "この りんごは (＿＿) (＿＿) (★) (＿＿) です。",
    highlight: "★",
    options: ["３つ", "５００えん", "で", "あわせて"],
    answer: 1,
    translation: "このりんごは（３つ）（で）（あわせて）（５００えん）です。Apel ini 3 buah totalnya 500 yen."
  },
  {
    id: 36,
    question: "まいしゅう (＿＿) (＿＿) (★) (＿＿) テニスを します。",
    highlight: "★",
    options: ["の", "にちようび", "あさ", "に"],
    answer: 2,
    translation: "まいしゅう（にちようび）（の）（あさ）（に）テニスをします。Setiap hari Minggu pagi saya bermain tenis."
  },
  {
    id: 37,
    question: "きのう (＿＿) (＿＿) (★) (＿＿) おもしろかったです。",
    highlight: "★",
    options: ["えいが", "は", "みた", "とても"],
    answer: 1,
    translation: "きのう（みた）（えいが）（は）（とても）おもしろかったです。Film yang saya tonton kemarin sangat menarik."
  },
  {
    id: 38,
    question: "しゅくだいが (＿＿) (＿＿) (★) (＿＿) ねます。",
    highlight: "★",
    options: ["おわって", "すぐ", "から", "ぜんぶ"],
    answer: 2,
    translation: "しゅくだいが（ぜんぶ）（おわって）（から）（すぐ）ねます。Setelah PR semuanya selesai, saya segera tidur."
  },
  {
    id: 39,
    question: "(＿＿) (＿＿) (★) (＿＿) きますか。",
    highlight: "★",
    options: ["がっこう", "へ", "どうやって", "いつも"],
    answer: 0,
    translation: "（いつも）（どうやって）（がっこう）（へ）きますか。Selalu datang ke sekolah dengan cara apa (naik apa)?"
  },
  {
    id: 40,
    question: "あした (＿＿) (＿＿) (★) (＿＿) ください。",
    highlight: "★",
    options: ["わすれない", "もってくる", "のを", "で"],
    answer: 0,
    translation: "あした（もってくる）（のを）（わすれない）（で）ください。Tolong jangan lupa membawanya besok."
  },
  {
    id: 41,
    question: "コーヒーと こうちゃと (＿＿) (＿＿) (★) (＿＿) すきですか。",
    highlight: "★",
    options: ["が", "どちら", "の", "ほう"],
    answer: 3,
    translation: "コーヒーとこうちゃと（どちら）（の）（ほう）（が）すきですか。Antara kopi dan teh hitam, mana yang lebih kamu suka?"
  },
  {
    id: 42,
    question: "としょかんで (＿＿) (＿＿) (★) (＿＿) はいけません。",
    highlight: "★",
    options: ["はなして", "おおきい", "は", "こえで"],
    answer: 0,
    translation: "としょかんで（おおきい）（こえで）（はなして）（は）いけません。Tidak boleh berbicara dengan suara keras di perpustakaan."
  },
  {
    id: 43,
    question: "おとうとは いま (＿＿) (＿＿) (★) (＿＿) います。",
    highlight: "★",
    options: ["を", "たべて", "ケーキ", "おいしい"],
    answer: 0,
    translation: "おとうとはいま（おいしい）（ケーキ）（を）（たべて）います。Adik laki-laki saya sekarang sedang makan kue yang enak."
  },
  {
    id: 44,
    question: "(＿＿) (＿＿) (★) (＿＿) のみましょうか。",
    highlight: "★",
    options: ["つめたい", "を", "ジュース", "なにか"],
    answer: 2,
    translation: "（なにか）（つめたい）（ジュース）（を）のみましょうか。Mari kita minum sesuatu yang dingin seperti jus?"
  },
  {
    id: 45,
    question: "わたしは (＿＿) (＿＿) (★) (＿＿) かきたいです。",
    highlight: "★",
    options: ["てがみ", "に", "を", "ともだち"],
    answer: 0,
    translation: "わたしは（ともだち）（に）（てがみ）（を）かきたいです。Saya ingin menulis surat kepada teman."
  },
  {
    id: 46,
    question: "あの カメラが ほしいですが、(＿＿) (＿＿) (★) (＿＿) かえません。",
    highlight: "★",
    options: ["ない", "から", "おかね", "が"],
    answer: 0,
    translation: "あのカメラがほしいですが、（おかね）（が）（ない）（から）かえません。Saya ingin kamera itu, tapi saya tidak bisa membelinya karena tidak punya uang."
  },
  {
    id: 47,
    question: "きのうの (＿＿) (＿＿) (★) (＿＿) でした。",
    highlight: "★",
    options: ["は", "ばんごはん", "おいしい", "カレー"],
    answer: 2,
    translation: "きのうの（ばんごはん）（は）（おいしい）（カレー）でした。Makan malam kemarin adalah kari yang enak."
  },
  {
    id: 48,
    question: "(＿＿) (＿＿) (★) (＿＿) ありません。",
    highlight: "★",
    options: ["に", "なにも", "れいぞうこの", "なか"],
    answer: 1,
    translation: "（れいぞうこの）（なか）（に）（なにも）ありません。Tidak ada apa-apa di dalam kulkas."
  },
  {
    id: 49,
    question: "あの (＿＿) (＿＿) (★) (＿＿) です。",
    highlight: "★",
    options: ["は", "せんせい", "ひと", "わたしの"],
    answer: 3,
    translation: "あの（ひと）（は）（わたしの）（せんせい）です。Orang itu adalah guru saya."
  },
  {
    id: 50,
    question: "えきで (＿＿) (＿＿) (★) (＿＿) のりました。",
    highlight: "★",
    options: ["でんしゃ", "にあって", "ともだち", "に"],
    answer: 0,
    translation: "えきで（ともだち）（にあって）（でんしゃ）（に）のりました。Di stasiun saya bertemu teman dan naik kereta."
  },
  {
    id: 51,
    question: "あしたは (＿＿) (＿＿) (★) (＿＿) いけません。",
    highlight: "★",
    options: ["に", "がっこう", "はやく", "いかなくては"],
    answer: 0,
    translation: "あしたは（はやく）（がっこう）（に）（いかなくては）いけません。Besok harus pergi ke sekolah lebih awal."
  }
];
