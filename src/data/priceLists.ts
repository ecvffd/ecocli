export type PriceGroup = {
  name?: string;
  items: { name: string; price: string }[];
};

export const priceLists: Record<string, PriceGroup[]> = {
  botulinoterapiya: [
    {
      name: "Релатокс | Ксеомин | Миотокс",
      items: [
        { name: "1 ед. при постановке от 50 ед.", price: "287 ₽" },
        { name: "1 ед. при постановке 30–50 ед.", price: "299 ₽" },
        { name: "1 ед. при постановке 20–30 ед.", price: "309 ₽" },
        { name: "1 ед. при постановке 10–20 ед.", price: "339 ₽" },
        { name: "1 ед. при постановке до 10 ед.", price: "339 ₽" },
      ],
    },
  ],
  "konturnaya-plastika": [
    {
      name: "Филлеры QTFill (Южная Корея), РУ и сертификат FDA",
      items: [
        { name: "QTFill Fine 1,1 мл", price: "18 590 ₽" },
        { name: "QTFill Deep 1,1 мл", price: "18 590 ₽" },
        { name: "QTFill SUB-Q 1,1 мл", price: "18 590 ₽" },
      ],
    },
    {
      name: "Филлеры Platinum (Израиль)",
      items: [
        { name: "Bronze 1 мл, 18 мг/мл", price: "17 490 ₽" },
        { name: "Silver 1 мл, 23 мг/мл", price: "18 590 ₽" },
        { name: "Gold, 26 мг/мл", price: "19 690 ₽" },
      ],
    },
    {
      name: "Honey Fill (Южная Корея)",
      items: [
        { name: "Mild 1 мл (губы, носогубка)", price: "15 290 ₽" },
        { name: "Soft 1 мл (губы, носогубка)", price: "15 290 ₽" },
        { name: "Hard 1 мл (объём, моделирование)", price: "16 390 ₽" },
      ],
    },
    {
      name: "Белотеро",
      items: [
        { name: "Intense", price: "28 900 ₽" },
        { name: "Lips Shape", price: "21 500 ₽" },
        { name: "Soft с лидокаином", price: "22 500 ₽" },
        { name: "Balance с лидокаином", price: "27 900 ₽" },
      ],
    },
    {
      name: "Stylage (Франция)",
      items: [
        { name: "Stylage M без лидокаина", price: "18 900 ₽" },
        { name: "Stylage M с лидокаином", price: "19 900 ₽" },
        { name: "Stylage L", price: "20 990 ₽" },
      ],
    },
  ],
  "nitevoj-lifting": [
    {
      name: "Нити с насечками (коги), Южная Корея",
      items: [
        { name: "Cog Extra Lift 19G×100, 10 нитей", price: "45 000 ₽" },
        { name: "8 нитей", price: "39 800 ₽" },
        { name: "6 нитей", price: "29 900 ₽" },
        { name: "4 нити", price: "19 900 ₽" },
        { name: "2 нити", price: "12 990 ₽" },
      ],
    },
    {
      name: "Aptos",
      items: [
        { name: "Одна зона лица, Light Lift Thread 2G Soft + анестезия", price: "55 000 ₽" },
        { name: "Нижняя зона / шея, птоз 1 ст., Needle 2G Soft + анестезия", price: "59 000 ₽" },
        { name: "Excellence Visage, 10 нитей + анестезия", price: "55 000 ₽" },
      ],
    },
    {
      name: "3D мезонити",
      items: [
        { name: "Всё лицо, от 40 до 60 нитей", price: "828 ₽ / нить" },
        { name: "Контур лица, от 20 до 40 нитей", price: "948 ₽ / нить" },
        { name: "Гусиные лапки, веки (10 нитей)", price: "10 680 ₽" },
        { name: "Носогубные складки (10 нитей)", price: "10 680 ₽" },
        { name: "Подбородок, шея, овал (от 15 нитей)", price: "14 940 ₽" },
        { name: "Лоб (от 15 нитей)", price: "14 940 ₽" },
      ],
    },
  ],
  gidrolifting: [
    {
      items: [
        { name: "Novacutan S-BIO, 2,0 мл", price: "16 500 ₽" },
        { name: "Novacutan Y-BIO, 2,0 мл", price: "16 500 ₽" },
      ],
    },
  ],
  mezoterapiya: [
    {
      name: "Лицо",
      items: [
        { name: "ADN Restart Armor formula, 5 мл", price: "6 400 ₽" },
        { name: "OM-Multivit Complex 2 мл / 5 мл", price: "3 400 / 6 400 ₽" },
        { name: "Пептидная мезотерапия Optima", price: "3 400 ₽" },
        { name: "Лечение выпадения волос", price: "3 400–4 400 ₽" },
        { name: "Дермапен Mesoderm", price: "3 090 ₽" },
      ],
    },
  ],
  "khimicheskie-pilingi": [
    {
      items: [
        { name: "Миндальный поверхностный 40%", price: "3 900 ₽" },
        { name: "Салициловый поверхностный 20% (акне)", price: "2 900 ₽" },
        { name: "Салициловый срединный Джесснера", price: "4 900 ₽" },
        { name: "Молочный 20% / 40%", price: "2 900 / 3 900 ₽" },
        { name: "Жёлтый ретиноевый Biomatrix / Evolution / Yellow Pell", price: "7 900 ₽" },
        { name: "Пилинг PRX, 1 час", price: "6 490 ₽" },
      ],
    },
  ],
  fizioterapy: [
    {
      name: "Магнито-лазерная терапия Рикта",
      items: [
        { name: "1 зона, 15 минут", price: "650 ₽" },
        { name: "Курс из 5 процедур", price: "2 950 ₽" },
        { name: "Курс из 10 процедур", price: "4 900 ₽" },
      ],
    },
  ],
  "bioreparaciya-biorevitalizaciya": [
    {
      items: [
        { name: "Viscoderm Skinko / Skinko E, 5 мл", price: "13 900 ₽" },
        { name: "Invite Super Shine Skin, 5 мл", price: "10 990 ₽" },
        { name: "Invite Lift Aqua, 5 мл", price: "9 990 ₽" },
        { name: "Meso-Xanthin / Meso-Wharton / Meso Eye / Plinest", price: "17 900–18 590 ₽" },
        { name: "Aquashine Classic / BR, 2 мл", price: "13 900 ₽" },
        { name: "Dermaheal SR / SB / LL, 5 мл", price: "7 400 ₽" },
      ],
    },
  ],
  "ukhody-i-chistki": [
    {
      name: "Аппаратная чистка лица",
      items: [
        { name: "Ультразвуковая чистка", price: "1 900 ₽" },
        { name: "Комплексная атравматичная чистка Holy Land", price: "3 900 ₽" },
        { name: "Вакуумная чистка", price: "1 900 ₽" },
        { name: "Уход для чувствительной кожи с куперозом", price: "3 490 ₽" },
        { name: "Комбинированная чистка", price: "3 900 ₽" },
        { name: "Комбинированная чистка проблемной кожи", price: "4 900 ₽" },
      ],
    },
  ],
  co2: [
    {
      name: "Фракционное лазерное омоложение лица CO2",
      items: [
        { name: "Лицо / шея / кисти рук", price: "12 900 ₽" },
        { name: "Лицо, шея", price: "17 900 ₽" },
        { name: "Лицо, шея, декольте", price: "19 900 ₽" },
        { name: "Лоб", price: "5 900 ₽" },
        { name: "Щёки", price: "7 900 ₽" },
        { name: "Лазерная блефаропластика век", price: "9 900 ₽" },
        { name: "Рубцы, постакне (2 см²)", price: "1 150 ₽" },
      ],
    },
  ],
  shrepilacia: [
    {
      name: "SHR + E-Light + IPL",
      items: [
        { name: "Верхняя губа / бакенбарды", price: "490 ₽" },
        { name: "Подбородок", price: "390 ₽" },
        { name: "Лицо полностью", price: "1 900 ₽" },
        { name: "Подмышки", price: "990 ₽" },
        { name: "Классическое бикини", price: "1 290 ₽" },
        { name: "Глубокое бикини", price: "2 190 ₽" },
        { name: "Голени", price: "1 900 ₽" },
        { name: "Ноги полностью", price: "2 900 ₽" },
        { name: "Спина полностью", price: "3 900 ₽" },
      ],
    },
  ],
  "udalenie-novoobrazovanij": [
    {
      items: [
        { name: "Папилломы и гемангиомы до 2 ед., за 1 ед.", price: "1 490 ₽" },
        { name: "Папилломы 3–10 ед., за 1 ед.", price: "749 ₽" },
        { name: "Кератомы до 2 ед., за 1 ед.", price: "2 390 ₽" },
        { name: "Невусы до 5 мм, до 2 ед.", price: "4 190 ₽" },
        { name: "Милиумы", price: "490 ₽" },
      ],
    },
  ],
  "hardware-cosmetology": [
    {
      name: "Омоложение и чистки",
      items: [
        { name: "Ультразвуковая чистка", price: "2 590 ₽" },
        { name: "RF-лифтинг лица/шеи, 30 мин", price: "2 490 ₽" },
        { name: "Микротоковая терапия", price: "1 900–2 900 ₽" },
        { name: "Кавитация / RF-липолиз", price: "2 490 ₽" },
        { name: "Комплекс 4 в 1 по телу, 50 мин", price: "4 900 ₽" },
        { name: "Миостимуляция, 1 зона", price: "1 500 ₽" },
      ],
    },
  ],
  "lasernoe-udalenie-pigmenta": [
    {
      items: [
        { name: "1 / 2 см²", price: "900 / 1 500 ₽" },
        { name: "Лоб", price: "3 900 ₽" },
        { name: "Щёки", price: "4 900 ₽" },
        { name: "Лицо полностью", price: "5 900 ₽" },
      ],
    },
  ],
  "lazernoe-udalenie-tatuazha": [
    {
      name: "Выравнивание / выведение",
      items: [
        { name: "Стрелка", price: "1 500 / 3 500 ₽" },
        { name: "Губы (контур)", price: "1 500 / 2 500 ₽" },
        { name: "Брови", price: "2 000 / 3 000 ₽" },
      ],
    },
  ],
  "lazernoe-udalenie-tatu": [
    {
      items: [
        { name: "1 / 2 см²", price: "500 / 800 ₽" },
        { name: "10 см²", price: "2 500 ₽" },
        { name: "20 см²", price: "4 000 ₽" },
      ],
    },
  ],
  "karbonoviy-piling": [
    {
      items: [
        { name: "Лицо полностью", price: "3 900 ₽" },
        { name: "1 зона лица", price: "1 590 ₽" },
      ],
    },
  ],
  "smas-lifting": [
    {
      name: "Liftera-A",
      items: [
        { name: "Нижние или верхние веки, одна зона", price: "5 990 ₽" },
        { name: "Верхние и нижние веки, брови, виски, лоб", price: "14 990 ₽" },
        { name: "Лифтинг подбородка", price: "19 990 ₽" },
        { name: "Средняя или нижняя треть лица", price: "39 990 ₽" },
        { name: "Лицо полностью, включая подчелюстную зону", price: "49 990 ₽" },
        { name: "Лифтинг шеи, стандарт", price: "19 990 ₽" },
      ],
    },
  ],
  fotoomolozhenie: [
    {
      name: "BBL / BBI Mula",
      items: [
        { name: "Омоложение, 1 зона (лоб или подбородок)", price: "6 000 ₽" },
        { name: "Омоложение щёк", price: "8 000 ₽" },
        { name: "Forever Young, лицо полностью", price: "12 000 ₽" },
        { name: "Forever Clear, лечение акне, лицо", price: "12 000 ₽" },
        { name: "Омоложение лица (фотостарение)", price: "4 900 ₽" },
        { name: "Лицо + шея + декольте", price: "8 900 ₽" },
      ],
    },
  ],
  emsculpt: [
    {
      items: [
        { name: "Пробная процедура", price: "1 500 ₽" },
        { name: "1 процедура", price: "3 000 ₽" },
        { name: "3 процедуры", price: "8 700 ₽" },
        { name: "5 процедур", price: "13 500 ₽" },
        { name: "10 процедур", price: "19 990 ₽" },
      ],
    },
  ],
  "soprano-titanium": [
    {
      items: [
        { name: "Любая зона на лице", price: "590 ₽" },
        { name: "Лицо полностью", price: "1 900 ₽" },
        { name: "Подмышки", price: "1 190 ₽" },
        { name: "Бикини классика / глубокое", price: "1 490 / 2 290 ₽" },
        { name: "Ноги полностью", price: "3 500 ₽" },
        { name: "Подмышки + ноги + глубокое бикини", price: "5 490 ₽" },
      ],
    },
  ],
  hydrafacial: [
    {
      items: [
        { name: "3 в 1", price: "3 900 ₽" },
        { name: "5 в 1", price: "4 900 ₽" },
        { name: "7 в 1", price: "5 900 ₽" },
      ],
    },
  ],
};
