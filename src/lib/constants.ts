export const COMPANY = {
  name: "つばめの住",
  nameEn: "Tsubame no Ju",
  corporateName: "つばめの住",
  tagline: "千葉県・外壁塗装・屋根塗装・リフォーム",
  phone: "047-338-7011",
  phoneHref: "tel:0473387011",
  lineUrl: "#",
  address: "〒272-0811 千葉県市川市北方町4丁目1828-1",
  hours: "9:00〜18:00（土曜・日曜・祝日、弊社指定休日を除く）",
  established: "2018年12月3日",
  capital: "1,000万円",
  tokyoOffice: {
    address: "東京都文京区本郷4-16-6 天翔オフィス後楽園 503",
    phone: "03-3868-0844",
    phoneHref: "tel:0338680844",
  },
} as const;

export const NAV_LINKS = [
  { label: "選ばれる理由", href: "/#reasons" },
  { label: "価格目安", href: "/#pricing" },
  { label: "施工事例", href: "/#works" },
  { label: "お客様の声", href: "/#testimonials" },
  { label: "会社概要", href: "/about" },
  { label: "よくある質問", href: "/#faq" },
] as const;

export const WORRIES = [
  {
    icon: "home" as const,
    title: "地震や台風の影響が\n気になる方",
    description: "外壁のひび割れや剥がれが心配",
  },
  {
    icon: "palette" as const,
    title: "色選びが\n不安",
    description: "イメージ通りになるか心配",
  },
  {
    icon: "search" as const,
    title: "業者選びが\n難しい",
    description: "どこに頼めばいいかわからない",
  },
  {
    icon: "yen" as const,
    title: "見積もりが高いんじゃ\nないか不安",
    description: "適正価格がわからない",
  },
] as const;

export const REASONS = [
  { number: 1, title: "豊富な実績", description: "累計施工実績3,000件以上", icon: "award" },
  { number: 2, title: "押し売りしない", description: "しつこい営業は一切しません", icon: "heart" },
  { number: 3, title: "地域密着", description: "千葉県に根ざして15年", icon: "mapPin" },
  { number: 4, title: "有資格者", description: "一級塗装技能士が在籍", icon: "certificate" },
  { number: 5, title: "徹底管理", description: "施工管理を徹底しています", icon: "clipboard" },
  { number: 6, title: "下請無し", description: "自社施工で中間マージン0", icon: "building" },
  { number: 7, title: "アフターお任せ", description: "最長10年の保証付き", icon: "shield" },
] as const;

export const PROMISES = [
  {
    title: "適正価格",
    description:
      "自社施工だからこそ、中間マージンが発生しません。お客様に適正な価格でご提供いたします。他社の見積もりと比較してください。",
  },
  {
    title: "仕上がりの美しさ",
    description:
      "一級塗装技能士が丁寧に施工いたします。細部にまでこだわった美しい仕上がりをお約束します。",
  },
  {
    title: "スピード対応",
    description:
      "お問い合わせから最短で翌日に現地調査が可能です。スピーディーな対応でお客様をお待たせしません。",
  },
] as const;

export const PRICING = [
  {
    label: "外壁塗装",
    priceRange: "60〜80",
    unit: "万円",
    tax: "税込",
    note: "30坪の場合",
    highlighted: false,
  },
  {
    label: "外壁+屋根塗装",
    priceRange: "100〜130",
    unit: "万円",
    tax: "税込",
    note: "30坪の場合",
    highlighted: true,
  },
  {
    label: "外壁+屋根+付帯",
    priceRange: "130〜170",
    unit: "万円",
    tax: "税込",
    note: "30坪の場合",
    highlighted: false,
  },
] as const;

export const BEFORE_AFTER = [
  {
    id: 1,
    location: "千葉市稲毛区 S様邸",
    description: "築20年の外壁塗装リフォーム",
    beforeImage: "/images/before-after/before-1.jpg",
    afterImage: "/images/before-after/after-1.jpg",
  },
  {
    id: 2,
    location: "千葉市中央区 T様邸",
    description: "外壁・屋根の全面塗装",
    beforeImage: "/images/before-after/before-2.jpg",
    afterImage: "/images/before-after/after-2.jpg",
  },
  {
    id: 3,
    location: "船橋市 M様邸",
    description: "外壁塗装＋屋根カバー工法",
    beforeImage: "/images/before-after/before-3.jpg",
    afterImage: "/images/before-after/after-3.jpg",
  },
] as const;

export const TESTIMONIALS = [
  {
    initial: "T",
    name: "T様",
    location: "千葉市・50代",
    rating: 5,
    text: "初めての外壁塗装で不安でしたが、担当の方がとても丁寧に説明してくださり安心してお任せできました。仕上がりも大満足です。近所の方からも「きれいになったね」と言われました。",
    color: "bg-primary",
  },
  {
    initial: "S",
    name: "S様",
    location: "船橋市・40代",
    rating: 5,
    text: "他社と相見積もりしましたが、価格も対応も一番良かったです。工事中も毎日進捗を報告してくれて、安心感がありました。仕上がりにも大変満足しています。",
    color: "bg-secondary",
  },
  {
    initial: "H",
    name: "H様",
    location: "柏市・60代",
    rating: 5,
    text: "築25年の自宅の外壁がだいぶ傷んでいたのですが、見違えるほどきれいになりました。アフターフォローもしっかりしていて、信頼できる業者さんです。",
    color: "bg-accent",
  },
] as const;

export const FLOW_STEPS = [
  { number: 1, title: "お問い合わせ", description: "お電話・LINE・メールでお気軽にご連絡ください" },
  { number: 2, title: "現地調査", description: "専門スタッフが無料で現地調査にお伺いします" },
  { number: 3, title: "お見積もり", description: "調査結果をもとに詳細なお見積もりをご提示します" },
  { number: 4, title: "ご契約", description: "内容にご納得いただけましたらご契約となります" },
  { number: 5, title: "施工", description: "熟練の職人が丁寧に施工いたします" },
  { number: 6, title: "施工・完成", description: "完了後、お客様と一緒に最終確認を行います" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "相見積もりをしてもらえますか？",
    answer:
      "はい、もちろんです。相見積もりは大歓迎です。他社様のお見積もりと比較していただき、納得の上でお選びください。お見積もりは無料ですのでお気軽にご依頼ください。",
  },
  {
    question: "車や植木にペンキがつく心配はありませんか？",
    answer:
      "施工前に養生（マスキング）を徹底して行いますので、お車や植木にペンキが付着する心配はございません。万が一の場合も、責任を持って対応いたします。",
  },
  {
    question: "工期はどのくらいかかりますか？",
    answer:
      "一般的な戸建住宅の外壁塗装で約10〜14日程度です。屋根塗装を含む場合は14〜21日程度が目安です。天候により多少前後する場合がございます。",
  },
  {
    question: "外壁で使用しているのは何ですか？",
    answer:
      "日本ペイント、関西ペイント、エスケー化研など、国内大手メーカーの高品質な塗料を使用しています。シリコン塗料からフッ素塗料まで、お客様のご予算とご要望に合わせてご提案します。",
  },
  {
    question: "近隣挨拶はやってもらえますか？",
    answer:
      "はい、施工前に近隣の方々へのご挨拶は弊社で責任を持って行います。工事期間や時間帯なども丁寧にご説明させていただきます。",
  },
] as const;

export const SERVICE_AREAS = [
  "千葉市",
  "船橋市",
  "松戸市",
  "柏市",
  "市川市",
  "習志野市",
  "浦安市",
  "八千代市",
  "鎌ケ谷市",
  "佐倉市",
  "四街道市",
  "白井市",
  "印西市",
] as const;

export const GREETING_MESSAGE = {
  title: "常に必要とされる「つばめの住」であるために",
  paragraphs: [
    "弊社は「０をつくり、０から築く（何もないところから新たな可能性を創り出すこと）」を念頭に、建設工事で重要な役割とされる解体工事業を主軸に事業展開をさせていただいております。お客様からの声を柔軟に対応出来るように、対応力を高めて、責任を持った安全工事を社員と共に日々取り組んでいます。",
    "時代や企業を取り巻く環境は、急速なグローバル化や多様化が進み変革の時代を迎えています。長期的な視野に立って施工技術を向上すること、地球環境に配慮したリサイクルや様々な環境対策の推進に努めています。",
    "時代のニーズや変化に対応できる施工体制を整えて、常にお客様の立場に立った事業展開をしてまいります。",
  ],
} as const;

export const BUSINESS_CATEGORIES = [
  {
    title: "解体工事",
    items: [
      "内装解体工事（店舗、オフィス、商業施設、公共施設、住宅、マンション）",
      "建物解体工事（木造、S造、RC造、SRC造）",
      "斫り工事",
      "土木構造物解体工事・杭頭処理",
      "設備解体工事・小規模構造物解体工事",
    ],
  },
  {
    title: "内装工事",
    items: [
      "原状回復工事",
      "リフォーム・リノベーション",
      "事故物件・火災物件対応",
    ],
  },
  {
    title: "アスベスト除去",
    items: ["アスベスト除去工事"],
  },
  {
    title: "新築・修繕工事",
    items: [
      "建築建物の新築工事",
      "土木構造物の新設工事",
      "大規模修繕工事・足場工事",
    ],
  },
  {
    title: "外構・造園工事",
    items: [
      "外構工事・エクステリア工事・造園工事",
      "樹木・伐採伐根撤去",
      "看板撤去",
    ],
  },
  {
    title: "リユース事業",
    items: [
      "建設重機・建設機械のリユース",
      "物流機器・設備機器のリユース",
    ],
  },
] as const;

export const COMPANY_INFO_TABLE = [
  { label: "会社名", value: "つばめの住" },
  { label: "屋号", value: "つばめの住" },
  { label: "本社所在地", value: "〒272-0811 千葉県市川市北方町4丁目1828-1" },
  { label: "電話番号（本社）", value: "047-338-7011" },
  { label: "東京営業所", value: "東京都文京区本郷4-16-6 天翔オフィス後楽園 503" },
  { label: "電話番号（東京）", value: "03-3868-0844" },
  { label: "設立日", value: "2018年12月3日" },
  { label: "資本金", value: "1,000万円" },
  { label: "営業時間", value: "9:00〜18:00（土曜・日曜・祝日、弊社指定休日を除く）" },
  { label: "対応エリア", value: "千葉県、東京都、埼玉県、神奈川県、茨城県、栃木県、群馬県" },
] as const;
