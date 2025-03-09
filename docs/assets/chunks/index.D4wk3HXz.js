import { M as Megacity, A as AncienCapital, H as HeritageSites, C as Cuisine, S as Shopping, F as Festival, P as Panda, T as Tech, N as Nature, e as Minority, f as Seaside, I as Island, g as Art, d as destinationsAssets } from "./theme.BvkY57QZ.js";
import { N as North, E as East, S as Southwest, a as Northwest, C as Central, b as South, c as Northeast } from "./index.3tBy4j5x.js";
const Songkran = {
  name: {
    root: "Songkran",
    ja: "ソンクラーン"
  },
  description: {
    root: "Songkran is a traditional holiday celebrated in Thailand, Laos, Myanmar, Cambodia, and the Dai regions of Yunnan Province in China. It marks the traditional lunar New Year and symbolizes the washing away of misfortunes from the past year, welcoming a fresh start.",
    ja: "ソンクラーンはタイ、ラオス、ミャンマー、カンボジア、そして中国雲南省の傣族地区で祝われる伝統的な祭りです。これは旧暦の新年を表し、過去一年間の不運を洗い流し、新しい始まりを迎え入れることを象徴しています。"
  }
};
const LoyKrathong = {
  name: {
    root: "Loy Krathong",
    ja: "ロイクラトン"
  },
  description: {
    root: "Loy Krathong is one of the most important traditional festivals in Thailand, especially in the northern region, where it is known as Yi Peng.",
    ja: "ロイクラトンはタイ、特に北部地域で「イーペン」として知られる最も重要な伝統的な祭りの一つです。"
  }
};
const IceAndSnowWorld = {
  name: {
    root: "Harbin Ice and Snow Festival",
    ja: "ハルビン氷雪祭り"
  },
  description: {
    root: "The Harbin Ice and Snow Festival is one of the world's four major ice and snow festivals, typically commencing in January each year and continuing until the end of February or early March, with the exact dates depending on weather conditions. Here, visitors can marvel at spectacular ice and snow sculptures exhibitions and partake in a variety of winter activities such as ice skating and skiing.",
    ja: "ハルビン氷雪祭りは世界四大氷雪祭りの一つで、通常毎年1月から始まり、2月末または3月初めまで続きます。具体的な日程は天候により変わります。ここでは、壮観な氷と雪の彫刻展を鑑賞したり、アイススケートやスキーや他の冬の活動に参加することができます。"
  }
};
const destinations = [
  {
    name: "Beijing",
    nameLocale: { ja: "北京", root: "Beijing" },
    nameChinese: "北京",
    namePinyin: "běi jīng",
    description: {
      ja: "歴史と現代が融合した中国首都の完全観光ガイド。老舗レストランで北京ダックを堪能し、紅葉シーズンの絶景スポット巡りがおすすめ。紫禁城や万里の長城など世界遺産も充実。",
      root: "Explore Beijing, China's capital and a six-dynasty ancient city, home to the Forbidden City. Discover its rich history and landmarks such as the Great Wall."
    },
    province: "Beijing Municipality",
    region: North,
    visa240: true,
    staying240: "Beijing Municipality",
    rank: {
      root: 1,
      ja: 1,
      ko: 3
    },
    link: "/beijing",
    location: "39.91333910150617, 116.39737323645694",
    tags: [Megacity, AncienCapital, HeritageSites, Cuisine, Shopping, Festival, Panda, Tech],
    slogan: {
      root: "Imperial Capital with Forbidden City",
      ja: "紫禁城＆古都"
    },
    introduce: {
      root: "Beijing, the capital of China, is a six-dynasty ancient city with rich history and culture. It is home to famous attractions like the Forbidden City, Tiananmen Square, and the Great Wall, which draw millions of visitors annually. Whether you're trying Beijing duck or exploring the old hutongs, you'll discover the city's unique charm.",
      ja: "北京は中国の首都であり、6つの王朝の古都として豊かな歴史と文化を持っています。紫禁城、天安門広場、万里の長城など有名な観光地があり、毎年何百万人もの訪問者を引きつけています。北京ダックを味わったり、古い胡同（ふんこ）を探索したりすることで、この都市の独特な魅力を発見できます。"
    },
    nickname: { root: ["Peking"], ja: [] },
    geography: {
      root: "North China, northern part of the North China Plain",
      ja: "華北地方、华北平原の北部"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Apr – Oct",
          description: "More tourists, with pleasant weather and beautiful scenery."
        },
        offTime: {
          title: "Nov – Mar",
          description: "Fewer tourists, and there may be smog during the winter."
        }
      },
      ja: {
        peakTime: {
          title: "4月 – 10月",
          description: "観光客が多く、気候が穏やかで景色が美しいです。"
        },
        offTime: {
          title: "11月 – 3月",
          description: "観光客が少なく、冬にはスモッグがある場合があります。"
        }
      }
    },
    climate: "Warm-temperate semi-humid to semi-arid climate",
    area: 16410,
    population: 21,
    ports: [
      {
        title: {
          root: "Beijing Capital International Airport (PEK)",
          ja: "北京首都国際空港 (PEK)"
        },
        description: {
          root: "China's most important international aviation hub and one of its busiest airports, with a long history and a rich network of international routes.",
          ja: "中国最大の国際航空ハブであり、最も忙しい空港の一つです。長い歴史と豊富な国際路線網を持っています。"
        },
        city: { root: "Beijing", ja: "北京" },
        distance: 24,
        duration: 35,
        hour240: true
      },
      {
        title: { root: "Beijing Daxing International Airport (PKX)", ja: "北京大興国際空港 (PKX)" },
        description: {
          root: "A new airport that opened in 2019, featuring modern design and advanced facilities. Currently, it primarily serves domestic routes.",
          ja: "2019年に開港した新しい空港で、近代的な設計と最先端の設備が特徴です。現在は主に国内路線を扱っています。"
        },
        city: { root: "Beijing", ja: "北京" },
        distance: 43,
        duration: 67,
        hour240: true
      },
      {
        title: { root: "Tianjin Binhai International Airport (TSN)", ja: "天津濱海国際空港 (TSN)" },
        city: { root: "Tianjin", ja: "天津" },
        distance: 118,
        duration: 103,
        hour240: true
      },
      {
        title: {
          root: "Shijiazhuang Zhengding International Airport (SJW)",
          ja: "石家荘正定国際空港 (SJW)"
        },
        city: { root: "Shijiazhuang", ja: "石家荘" },
        distance: 233,
        duration: 174,
        hour240: true
      }
    ]
  },
  {
    name: "Tianjin",
    nameLocale: { ja: "天津", root: "Tianjin" },
    nameChinese: "天津",
    namePinyin: "tiān jīn",
    description: {
      ja: "渤海に面する大都市天津。古い租界地の洋館や近代的な摩天楼が並ぶ、文化的コントラストが楽しめる街。天津名物「狗不理包子」を味わいながら街歩きを満喫。",
      root: "Explore Tianjin, a municipality bordering the Bohai Sea. Discover its vibrant cultural experiences and historical landmarks."
    },
    province: "Tianjin Municipality",
    region: North,
    visa240: true,
    staying240: "Tianjin Municipality",
    rank: {
      root: 18,
      ja: 17
    },
    link: "/tianjin",
    location: "39.13095942914426, 117.20759824143363",
    tags: [Megacity],
    slogan: { root: "Coastal Charm & European Architecture", ja: "異国情緒あふれる港町" },
    introduce: {
      root: "Tianjin is located in the northeastern part of the North China Plain, bordering the Bohai Sea, and is one of China's four municipalities.",
      ja: "天津は中国の北部平原の東北部に位置し、渤海に接しており、中国の4つの直轄市之一です。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "North China, northeastern North China Plain, western coast of the Pacific Ocean",
      ja: "中国北部、北部平原の東北部、太平洋の西海岸"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Mar – May, Sep – Nov",
          description: "Pleasant climate, many visitors."
        },
        offTime: { title: "Jun – Aug, Dec – Feb", description: "Fewer visitors, lower costs." }
      },
      ja: {
        peakTime: { title: "3月 – 5月, 9月 – 11月", description: "快適な気候、多くの訪問者。" },
        offTime: { title: "6月 – 8月, 12月 – 2月", description: "訪問者が少なく、料金も低い。" }
      }
    },
    climate: "Warm temperate semi-humid monsoonal climate",
    area: 11966.45,
    population: 13,
    ports: [
      {
        title: { root: "Tianjin Binhai International Airport (TSN)", ja: "天津濱海国際空港 (TSN)" },
        city: { root: "Tianjin", ja: "天津" },
        distance: 13,
        description: {
          root: "It offers multiple international routes, including flights to Japan, South Korea, Thailand, Singapore, as well as Belgrade and Milan.",
          ja: "日本、韓国、タイ、シンガポール、ベオグラード、ミラノなどへの複数の国際路線を提供しています。"
        },
        duration: 24,
        hour240: true
      },
      {
        title: {
          root: "Beijing Capital International Airport (PEK)",
          ja: "北京首都国際空港 (PEK)"
        },
        city: { root: "Beijing", ja: "北京" },
        distance: 122,
        duration: 119,
        hour240: true
      },
      {
        title: { root: "Beijing Daxing International Airport (PKX)", ja: "北京大興国際空港 (PKX)" },
        city: { root: "Beijing", ja: "北京" },
        distance: 82,
        duration: 100,
        hour240: true
      },
      {
        title: { root: "Tianjin International Cruise Home Port", ja: "天津国際クルーズ母港" },
        city: { root: "Tianjin", ja: "天津" },
        distance: 70,
        description: {
          root: 'Tianjin International Cruise Home Port offers multiple international routes, including Tianjin⇌Fukuoka⇌Jeju and Tianjin⇌Kobe⇌Fukuoka⇌Busan. It also features a "275-day world cruise" that visits 65 countries and regions.',
          ja: "天津⇄福岡⇄済州、天津⇄神戸⇄福岡⇄釜山などの複数の国際路線を提供しています。また、「275日世界クルーズ」も運行しており、65カ国と地域を訪れます。"
        },
        duration: 90,
        hour240: true
      }
    ]
  },
  {
    name: "Shanghai",
    nameLocale: { ja: "上海", root: "Shanghai" },
    nameChinese: "上海",
    namePinyin: "shàng hǎi",
    description: {
      ja: "中国経済の中心地で国際的な大都市。外灘の夜景や豫園の伝統美、そして多様なグルメを堪能できる都市。南京路の最新ショッピングモールと老舗茶館のコラボレーション。",
      root: "Discover Shanghai, China's economic hub and an international modern Megacity. Experience its history, dynamic culture, and iconic landmarks like the Bund."
    },
    province: "Shanghai Municipality",
    region: East,
    visa240: true,
    staying240: "Shanghai Municipality",
    rank: {
      root: 2,
      ja: 2,
      ko: 2
    },
    link: "/shanghai",
    location: "31.239120741001607, 121.4993635907458",
    tags: [Megacity, Shopping, Panda, Tech],
    slogan: {
      root: "Global Finance Hub & Futuristic Skyline",
      ja: "摩天楼＆グルメの魔都"
    },
    introduce: {
      root: "Shanghai is an international Megacity and the economic and cultural center of China. It boasts a unique charm that blends tradition with modernity, as well as the East with the West. The Bund is the best place to enjoy the beautiful scenery of the Huangpu River and the architectural styles from around the world, while Lujiazui showcases Shanghai's stunning modern skyline. Yuyuan Garden and the City God Temple allow you to experience the allure of ancient Jiangnan gardens and traditional urban culture. Additionally, the Shanghai Museum houses a rich collection of historical artifacts, offering a window into Chinese civilization.",
      ja: "上海は国際的な大都市であり、中国の経済と文化の中心です。ここには伝統と現代、東洋と西洋が融合した独特な魅力があります。外灘（バンド）は黄浦江の美しい景色や世界各国の建築様式を楽しめる最高の場所であり、陸家嘴（ルージャツイ）では上海の近代的なスカイラインが見渡せます。豫園（ぐえん）や城隍廟（じょうこうびょう）では、古い江南庭園の魅力や伝統的な市井文化を感じることができます。さらに、上海博物館には豊富な歴史的文物が収蔵されており、中国文明を知るための窓口となっています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Located on the eastern coast of China, at the mouth of the Yangtze River",
      ja: "中国東海岸に位置し、揚子江の河口にあります"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Sep – Dec",
          description: "During the National Day holiday, tourist attractions see higher visitor volumes and prices."
        },
        offTime: {
          title: "Jan – Feb",
          description: "Winter temperatures are lower, often ranging between 5°C and 10°C."
        }
      },
      ja: {
        peakTime: {
          title: "9月 – 12月",
          description: "国民祝日（国庆节）期間中、観光地の来場者数が増加し、価格も高くなります。"
        },
        offTime: {
          title: "1月 – 2月",
          description: "冬の気温は低く、通常5°Cから10°Cの間で推移します。"
        }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 86340.5,
    population: 24,
    ports: [
      {
        title: {
          root: "Shanghai Pudong International Airport (PVG)",
          ja: "上海浦東国際空港 (PVG)"
        },
        city: { root: "Shanghai", ja: "上海" },
        distance: 32,
        description: {
          root: "Shanghai's airport network is highly developed, with Shanghai Pudong International Airport and Shanghai Hongqiao International Airport connecting to 114 international destinations worldwide. These destinations cover major cities in Asia, Europe, North America, Oceania, and Africa.",
          ja: "上海の空港ネットワークは非常に発達しており、上海浦東国際空港と上海虹橋国際空港は世界中の114の国際目的地と接続しています。これらの目的地にはアジア、ヨーロッパ、北アメリカ、オセアニア、アフリカの主要都市が含まれます。"
        },
        duration: 44,
        hour240: true
      },
      {
        title: {
          root: "Shanghai Hongqiao International Airport (SHA)",
          ja: "上海虹橋国際空港 (SHA)"
        },
        city: { root: "Shanghai", ja: "上海" },
        distance: 13,
        description: {
          root: "Hongqiao Airport primarily serves domestic flights and has a limited number of international routes, including flights to Gimpo International Airport in South Korea, Haneda International Airport in Japan, Pulkovo Airport in Russia, and a few others.",
          ja: "虹橋空港は主に国内便を扱っており、韓国の金浦国際空港、日本の羽田国際空港、ロシアのプルコヴォ空港など、限られた国際路線があります。"
        },
        duration: 28,
        hour240: true
      },
      {
        title: { root: "Hangzhou International Airport (HGH)", ja: "杭州蕭山国際空港 (HGH)" },
        city: { root: "Hangzhou", ja: "杭州" },
        distance: 149,
        duration: 132,
        hour240: true
      },
      {
        title: { root: "Port of Shanghai", ja: "上海港" },
        city: { root: "Shanghai", ja: "上海" },
        distance: 10,
        description: {
          root: "Port of Shanghai is one of the most important ports in the world, with extensive international shipping routes including the Far East-Europe route, Far East-North America route, Far East-Middle East/Red Sea route, Far East-Mediterranean route, Far East-Southeast Asia route, Far East-Australia/New Zealand route, and Far East-Africa route.",
          ja: "上海港は世界で最も重要な港の一つであり、広範な国際航路網を持っています。この航路網には、遠東-ヨーロッパ航路、遠東-北アメリカ航路、遠東-中東/紅海航路、遠東-地中海航路、遠東-東南アジア航路、遠東-オーストラリア/ニュージーランド航路、遠東-アフリカ航路が含まれます。"
        },
        duration: 30,
        hour240: true
      }
    ]
  },
  {
    name: "Chongqing",
    nameLocale: { ja: "重慶", root: "Chongqing" },
    nameChinese: "重庆",
    namePinyin: "chóng qìng",
    description: {
      ja: "山岳地帯と未来的な景観が共存する都市。辛くて美味しい火鍋や長江のクルーズで独特な体験を。解放碑周辺の立体道路は未来都市感満載！",
      root: "Explore Chongqing, a Megacity famed for its mountainous terrain, futuristic landscapes, and spicy hotpot. Discover the best times to visit and travel tips."
    },
    slogan: {
      root: "Mountain Megacity & Fiery Hotpot Nights",
      ja: "山岳夜景と激辛火鍋"
    },
    nickname: {
      root: ["Chungking"],
      ja: ["チョンキン"]
    },
    province: "Chongqing Municipality",
    region: Southwest,
    climate: "Subtropical moist monsoon climate",
    area: 82402,
    population: 3200,
    geography: {
      root: "Mountainous terrain, located upstream on the Yangtze River, surrounded by hills",
      ja: "山岳地形、長江上流に位置し、周囲は丘陵に囲まれている"
    },
    introduce: {
      root: 'Serving as an economic center in southwestern China, Chongqing is known for its unique mountainous terrain and modern urban development, earning it the nickname "magical city." Videos showcasing its attractions have gone viral on TikTok, making it a popular tourist destination in recent years. Additionally, its cuisine is renowned worldwide, with hot pot being the most well-known dish.',
      ja: "中国西南部の経済中心地として知られる重慶は、独特な山岳地形と近代的な都市開発で「魔法の都市」というニックネームを得ています。その魅力を映したビデオがTikTokで話題となり、近年では人気の観光地となっています。さらに、世界中で有名な料理があり、特に火鍋が最もよく知られています。"
    },
    visa240: true,
    staying240: "Chongqing Municipality",
    rank: {
      root: 4,
      ja: Infinity
    },
    link: "/chongqing",
    location: "29.56548705747345, 106.58768018722665",
    tags: [Megacity, Cuisine, Shopping, Panda],
    ports: [
      {
        title: {
          root: "Chongqing Jiangbei International Airport (CKG)",
          ja: "重慶江北国際空港 (CKG)"
        },
        duration: 28,
        distance: 19,
        hour240: true,
        description: {
          root: "Chongqing Jiangbei International Airport offers international routes to 30 destinations, including Seattle, London, Paris, Sydney, Dubai, and Rome.",
          ja: "重慶江北国際空港は、シアトル、ロンドン、パリ、シドニー、ドバイ、ローマなど30の国際的な目的地への路線を提供しています。"
        }
      },
      {
        title: {
          root: "Chengdu Tianfu International (TFU)",
          ja: "成都天府国際空港 (TFU)"
        },
        city: {
          root: "Chengdu",
          ja: "成都"
        },
        duration: 195,
        distance: 218,
        hour240: true,
        description: {
          root: "The fastest train from Tianfu Airport Station to Chongqing West Station takes approximately 2 hours and 42 minutes.",
          ja: "天府空港駅から重慶西駅までの最も早い列車は、約2時間42分かかります。"
        }
      },
      {
        title: {
          root: "Chengdu Shuangliu International Airport (CTU)",
          ja: "成都双流国際空港 (CTU)"
        },
        city: {
          root: "Chengdu",
          ja: "成都"
        },
        duration: 240,
        distance: 280,
        hour240: true,
        description: {
          root: "Driving from Chengdu Shuangliu International Airport to Chongqing city center takes approximately 3.5 to 4.5 hours, while taking a high-speed train or bullet train requires about 2 hours and 20 minutes.",
          ja: "成都双流国際空港から重慶市中心部まで車で約3.5〜4.5時間かかります。高速鉄道または新幹線を利用すると、約2時間20分かかります。"
        }
      }
    ],
    bestTime: {
      root: {
        peakTime: {
          title: "Nov – Dec",
          description: 'Chongqing is often shrouded in fog during winter, earning it the nickname of "Fog City."'
        },
        offTime: {
          title: "Mar – May, Sep - Oct",
          description: "Avoiding the hot summer, Chongqing's tourism peak season occurs during various holidays."
        }
      },
      ja: {
        peakTime: {
          title: "11月 – 12月",
          description: "冬の重庆はよく霧に包まれており、「霧の都市」というニックネームがついています。"
        },
        offTime: {
          title: "3月 – 5月、9月 - 10月",
          description: "暑い夏を避け、重庆の観光のピークシーズンは様々な休日となります。"
        }
      }
    }
  },
  {
    name: "Xi'an",
    nameLocale: { ja: "西安", root: "Xi'an" },
    nameChinese: "西安",
    namePinyin: "xī ān",
    description: {
      ja: "13の王朝の古都として知られる西安。世界遺産の兵馬俑や歴史的な Silk Road の起点を訪ねる旅。回民街の夜市でシルクロード直伝スパイス料理を探検。",
      root: `Xi'an, the ancient capital of 13 Chinese dynasties, is renowned for its Terracotta Warriors. Explore historical landmarks and discover its rich heritage.`
    },
    province: "Shaanxi Province",
    region: Northwest,
    visa240: true,
    staying240: "Shaanxi Province",
    rank: {
      root: 5,
      ja: 3
    },
    link: "/xi-an",
    location: "34.284130776972006, 108.96313649220637",
    tags: [AncienCapital, HeritageSites, Cuisine, Panda],
    slogan: {
      root: `13 Dynasties' Glory & Terracotta Army`,
      ja: "世界遺産・兵馬俑の都"
    },
    introduce: {
      root: "Xi'an's history dates back about 3,100 years, and it was the capital of 13 dynasties. In 221 BCE, Qin Shi Huang unified China and established his capital at Xianyang (25 kilometers from modern Xi'an). The discovery of the Terracotta Army, built by Qin Shi Huang, in 1974 stunned the world. During the Tang Dynasty (618–907 CE), Xi'an (then known as Chang'an) was one of the most prosperous and international cities in the world. Xi'an is the starting point of the ancient Silk Road.",
      ja: "西安の歴史は約3,100年前までさかのぼり、13の王朝の首都でした。紀元前221年、秦始皇が中国を統一し、咸陽（現在の西安から25キロメートル離れた場所）に首都を置きました。1974年に発見された秦始皇が造らせた兵馬俑は、世界を驚かせました。唐代（618年〜907年）には、西安（当時は長安と呼ばれていました）は世界で最も繁栄し、国際的な都市の一つでした。西安は古代シルクロードの出発点です。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Northwest China, in the middle reaches of the Yellow River, on the Guanzhong Plain",
      ja: "中国西北部、黄河流域の中流、関中平原"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Aug – Nov",
          description: "Moderate temperatures, perfect for flower viewing and outings."
        },
        offTime: { title: "Jan – Mar, May", description: "Cold weather, fewer visitors." }
      },
      ja: {
        peakTime: { title: "8月 – 11月", description: "適度な気温、花見やピクニックに最適。" },
        offTime: { title: "1月 – 3月, 5月", description: "寒い気候、訪問者が少ない。" }
      }
    },
    climate: "Warm-temperate semi-humid monsoon climate",
    area: 10108,
    population: 13,
    ports: [
      {
        title: { root: "Xi'an Xianyang International Airport (XIY)", ja: "西安咸陽国際空港 (XIY)" },
        city: { root: "Xi'An", ja: "西安" },
        distance: 27,
        description: {
          root: "Xi'an Airport offers numerous international routes, including flights to destinations in Asia, Russia, and beyond. It also provides direct flights to cities such as London, Paris, Budapest, Milan, and Nairobi.",
          ja: "西安空港はアジアやロシアなどへの多くの国際路線を提供しています。また、ロンドン、パリ、ブダペスト、ミラノ、ナイロビなどの都市への直行便も運行しています。"
        },
        duration: 53,
        hour240: true
      }
    ]
  },
  {
    name: "Wuhan",
    nameLocale: { ja: "武漢", root: "Wuhan" },
    nameChinese: "武汉",
    namePinyin: "wǔ hàn",
    description: {
      ja: "長江沿いの歴史ある都市武漢。東湖の自然美や武漢大学の桜、そして本格的なホットポットを楽しむ。長江ナイトクルーズで両岸のライトアップ競演を鑑賞。熱乾麺で地元の朝食を体験。",
      root: "Explore Wuhan, a historical and cultural city on the Yangtze River. Visit East Lake and Wuhan University to enjoy cherry blossoms."
    },
    province: "Hubei Province",
    region: Central,
    visa240: true,
    staying240: "Hubei Province",
    rank: {
      root: 15,
      ja: 15
    },
    link: "/wuhan",
    location: "30.538042001764424, 114.30099896869493",
    tags: [Megacity, Tech],
    slogan: {
      root: "Yangtze River Gateway & Cherry Blossom Trails",
      ja: "桜の名所＆長江クルーズ"
    },
    introduce: {
      root: "Wuhan, located on the Yangtze River, is home to historical sites like the Yellow Crane Tower and delicious local cuisine such as Hot Dry Noodles.",
      ja: "武漢は長江に位置し、黄鶴楼などの歴史的な遺跡やホットドライ麺など美味しい地元の料理で知られています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Central China, eastern Jianghan Plain, middle reaches of the Yangtze River",
      ja: "中国中部、江漢平原東部、長江中流"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Apr – Oct",
          description: "Especially in spring, East Lake, Wuhan University cherry blossoms are very popular."
        },
        offTime: { title: "Nov – Mar", description: "Fewer visitors and lower prices." }
      },
      ja: {
        peakTime: {
          title: "4月 – 10月",
          description: "特に春には、東湖や武漢大学の桜が非常に人気があります。"
        },
        offTime: { title: "11月 – 3月", description: "観光客が少なく、価格もお得です。" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 8569.15,
    population: 13,
    ports: [
      {
        title: { root: "Wuhan Tianhe International Airport (WUH)", ja: "武漢天河国際空港 (WUH)" },
        city: { root: "Wuhan", ja: "武漢" },
        distance: 23,
        description: {
          root: "Wuhan Tianhe International Airport has launched international routes covering four continents, with connections to 18 international and regional destinations, including Tokyo, Osaka, Singapore, Bangkok, Seoul, London, Frankfurt, Paris, San Francisco, Los Angeles, Sydney, Melbourne, and others.",
          ja: "武漢天河国際空港は、四大陸をカバーする国際路線を運航しており、東京、大阪、シンガポール、バンコク、ソウル、ロンドン、フランクフルト、パリ、サンフランシスコ、ロサンゼルス、シドニー、メルボルンなど、18つの国際および地域の目的地への便が就航しています。"
        },
        duration: 42,
        hour240: true
      },
      {
        title: {
          root: "Changsha Huanghua International Airport (CSX)",
          ja: "长沙黄花国际机场 (CSX)"
        },
        city: { root: "Changsha", ja: "長沙" },
        distance: 287,
        duration: 219,
        hour240: true
      }
    ]
  },
  {
    name: "Guiyang",
    nameLocale: { ja: "貴陽", root: "Guiyang" },
    nameChinese: "贵阳",
    namePinyin: "guì yáng",
    description: {
      ja: "贵州省の中でも涼しい気候が魅力の貴陽。気温25℃の避暑地として大人気。豊かな自然景観と少数民族文化を体験できる夏の避暑地。少数民族の手作り銀飾り体験ワークショップあり！",
      root: "Discover Guiyang, a popular summer retreat in central Guizhou Province, known for its moderate climate and lush landscapes."
    },
    province: "Guizhou Province",
    region: Southwest,
    visa240: true,
    staying240: "Guizhou Province",
    link: "/guiyang",
    location: "26.630715807678783, 106.63501424937091",
    tags: [Nature, Minority],
    slogan: { root: "Cool Summer Retreat & Minority Cultures", ja: "人気の夏の避暑地" },
    introduce: {
      root: "Guiyang City enjoys a subtropical humid climate with distinct seasons, moderate temperatures, and ample rainfall.",
      ja: "貴陽市は亜熱帯湿潤気候を享受しており、四季がはっきりとしており、気温が適度で、降雨量も豊富です。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Central Guizhou Province", ja: "貴州省中央部" },
    bestTime: {
      root: {
        peakTime: { title: "Jul – Sep, Nov", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Feb, Apr, Jun", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "7月 – 9月、11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 2月、4月、6月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical humid climate",
    area: 8043,
    population: 6,
    ports: [
      {
        title: {
          root: "Guiyang Longdongbao International Airport (KWE)",
          ja: "貴陽龍洞堡国際空港 (KWE)"
        },
        city: { root: "Guiyang", ja: "貴陽" },
        distance: 19,
        duration: 41,
        hour240: true
      }
    ]
  },
  {
    name: "Haikou",
    nameLocale: { ja: "海口", root: "Haikou" },
    nameChinese: "海口",
    namePinyin: "hǎi kǒu",
    description: {
      ja: "熱帯の雰囲気が漂う中国南部の沿岸都市海口。美しい海辺の景色とリゾートライフを満喫。ココナッツ林陰のサイクリングロードがリゾート気分を加速。新鮮なヤシの実ジュースが歩き疲れを癒す。",
      root: "Explore Haikou, a southern coastal Megacity in China celebrated for its tropical ambiance and stunning maritime scenery."
    },
    province: "Hainan Province",
    region: South,
    visa240: true,
    staying240: "Hainan Province",
    visa30hainan: true,
    link: "/haikou",
    location: "20.01313631761165, 110.31680728403029",
    tags: [Seaside, Island],
    slogan: { root: "Tropical Gateway & Coconut Coastline", ja: "ココナッツ浜辺＆南国リゾート" },
    introduce: {
      root: "Situated in the tropics, Haikou City is a southern coastal Megacity in China, celebrated for its stunning maritime scenery and rich tropical ambiance. The city offers beautiful beaches, lush greenery, and vibrant coastal life, making it an attractive destination for both residents and visitors.",
      ja: "海口市は熱帯に位置し、中国南部の海辺の大都市です。美しい海上風景と豊かな熱帯の雰囲気で知られています。美しいビーチ、緑豊かな自然、活気ある海岸生活が魅力的な街で、住民や観光客にとって魅力的な目的地となっています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Southern part of South China, northern Hainan Island",
      ja: "中国南部、海南島北部"
    },
    bestTime: {
      root: {
        peakTime: { title: "Sep – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Feb – May", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "9月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "2月 – 5月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Tropical monsoon climate",
    area: 3126.82,
    population: 3,
    ports: [
      {
        title: { root: "Haikou Meilan International Airport (HAK)", ja: "海口美蘭国際空港 (HAK)" },
        city: { root: "Haikou", ja: "海口" },
        distance: 29,
        duration: 47,
        hour240: true
      },
      {
        title: { root: "Qionghai Bo'ao (BAR)", ja: "琼海博鳌机场 (BAR)" },
        city: { root: "Qionghai", ja: "琼海" },
        distance: 105,
        duration: 122
      },
      {
        title: { root: "Zhanjiang Airport (ZHA)", ja: "湛江机场 (ZHA)" },
        city: { root: "Zhanjiang", ja: "湛江" },
        distance: 166,
        duration: 255
      }
    ]
  },
  {
    name: "Sanya",
    nameLocale: { ja: "三亜", root: "Sanya" },
    nameChinese: "三亚",
    namePinyin: "sān yà",
    description: {
      ja: "海南省の南端にあるビーチリゾート三亞。白砂浜とエメラルドグリーンの海が広がる楽園。マリンスポーツと高級リゾートのハイブリッド体験。日本人向けダイビングツアーが充実。",
      root: "Explore Sanya, a tropical seaside tourist city in Hainan Province. Enjoy stunning beaches, crystal-clear waters, and vibrant island life in this paradise."
    },
    province: "Hainan Province",
    region: South,
    visa240: true,
    staying240: "Hainan Province",
    visa30hainan: true,
    link: "/sanya",
    location: "18.22476414649048, 109.63066655040882",
    tags: [Seaside, Island],
    slogan: {
      root: "Tropical Paradise with Azure Waters",
      ja: "東洋のハワイビーチ"
    },
    introduce: {
      root: "Sanya is located at the southernmost tip of Hainan Island and is a famous tropical seaside tourist city. It is the southernmost prefecture-level city in China, known for its beautiful beaches, clear seawater, and pleasant climate.",
      ja: "三亚は海南島の最南端に位置し、有名な熱帯の海辺の観光都市です。中国で最も南にある地級市で、美しいビーチ、澄んだ海水、そして快適な気候で知られています。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Southern Hainan Island", ja: "海南島南部" },
    bestTime: {
      root: {
        peakTime: { title: "Aug, Nov – Jan", description: "Most popular and higher prices" },
        offTime: { title: "Feb – Mar, May – Jun", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "8月、11月 – 1月", description: "最も人気があり、料金も高い" },
        offTime: { title: "2月 – 3月、5月 – 6月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Tropical marine monsoon climate",
    area: 1921,
    population: 7,
    ports: [
      {
        title: { root: "Sanya Phoenix International Airport (SYX)", ja: "三亚鳳凰国際空港 (SYX)" },
        city: { root: "Sanya", ja: "三亚" },
        distance: 11,
        duration: 31,
        hour240: true
      },
      {
        title: { root: "Haikou Meilan International Airport (HAK)", ja: "海口美蘭国際空港 (HAK)" },
        city: { root: "Haikou", ja: "海口" },
        distance: 211,
        duration: 193,
        hour240: true
      },
      {
        title: { root: "Qionghai Bo'ao (BAR)", ja: "琼海博鳌机场 (BAR)" },
        city: { root: "Qionghai", ja: "琼海" },
        distance: 138,
        duration: 148
      }
    ],
    rank: { root: 19, ja: Infinity, ko: 17 }
  },
  {
    name: "Shijiazhuang",
    nameLocale: { ja: "石家荘", root: "Shijiazhuang" },
    nameChinese: "石家庄",
    namePinyin: "shí jiā zhuāng",
    description: {
      ja: "河北省の省都石家荘。歴史的名所巡りや自然探訪を通じて、中国の深い文化に触れることができる都市。趙州橋の建築技術に驚嘆！蒼岩山でハイキング後は河北料理の「驢肉火焼」を試食。",
      root: "Discover Shijiazhuang, the capital of Hebei Province. Explore its rich historical sites, including Zhaozhou Bridge, and experience traditional culture."
    },
    province: "Hebei Province",
    region: North,
    visa240: true,
    staying240: "Hebei Province",
    link: "/shijiazhuang",
    location: "38.04076809888742, 114.5070537776337",
    tags: [HeritageSites],
    slogan: { root: "Ancient Bell Towers & Hebei Heritage", ja: "河北料理と古城の鐘楼" },
    introduce: {
      root: 'Shijiazhuang is a city with a long history. Zhengding, a historically significant county near Shijiazhuang, is known as the "Northern Little Jiangnan." The ancient city contains many well-preserved historical buildings.',
      ja: "石家莊は長い歴史を持つ都市です。近隣の歴史的に重要な県である正定は「北の小江南」と呼ばれ、多くの保存状態の良い歴史的建造物があります。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "North China region, central and southern Hebei Province",
      ja: "華北地域、河北省中部および南部"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jul – Oct", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Apr", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "7月 – 10月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 4月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Warm temperate monsoon climate",
    area: 15848,
    population: 11,
    ports: [
      {
        title: {
          root: "Shijiazhuang Zhengding International Airport (SJW)",
          ja: "石家莊正定国際空港 (SJW)"
        },
        city: { root: "Shijiazhuang", ja: "石家莊" },
        distance: 30,
        duration: 54,
        hour240: true
      },
      {
        title: { root: "Taiyuan Wusu International Airport (TYN)", ja: "太原武宿国際空港 (TYN)" },
        city: { root: "Taiyuan", ja: "太原" },
        distance: 168,
        duration: 177,
        hour240: true,
        description: {
          root: "The high-speed train journey from Taiyuan to Shijiazhuang takes about an hour.",
          ja: "太原から石家莊までの新幹線の旅は約1時間かかります。"
        }
      }
    ]
  },
  {
    name: "Qinhuangdao",
    nameLocale: { ja: "秦皇島", root: "Qinhuangdao" },
    nameChinese: "秦皇岛",
    namePinyin: "qín huáng dǎo",
    description: {
      ja: "美しいビーチと新鮮なシーフードが魅力の河北省沿岸都市。中国歴史の舞台となった名所を訪ねる旅。万里の長城東端「山海関」で歴史ロマン。夏は北戴河ビーチでシーフードBBQを満喫。",
      root: "Explore Qinhuangdao, a beautiful coastal city in Hebei. Discover picturesque beaches, fresh seafood, and historical attractions like the Great Wall."
    },
    province: "Hebei Province",
    region: North,
    visa240: true,
    staying240: "Hebei Province",
    link: "/qinhuangdao",
    location: "39.92877348677114, 119.6014588150019",
    tags: [Seaside, Nature],
    slogan: { root: "Golden Sands & Summer Retreat", ja: "黄金ビーチ＆避暑地" },
    introduce: {
      root: "Qinhuangdao is a beautiful coastal city renowned for its picturesque beaches, fresh air, and pleasant climate, making it an ideal summer retreat. Located by the sea, Qinhuangdao is rich in seafood resources and offers a variety of local specialties.",
      ja: "秦皇島は美しい海岸都市として知られ、絵画的なビーチ、新鮮な空気、そして快適な気候により、理想的な夏のリトリートとなっています。海沿いに位置する秦皇島は豊富な海産物資源に恵まれており、さまざまな地元の特産品を提供しています。"
    },
    nickname: { root: ["Chinwangtao", "Циньхуандао"], ja: ["Chinwangtao", "Циньхуандао"] },
    geography: {
      root: "Northeastern Hebei Province, north of the Yan Mountains and south of the Bohai Sea",
      ja: "河北省東北部、燕山の北側と渤海の南側"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jun – Sep", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Mar, Nov", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "6月 – 9月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 3月、11月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Temperate continental monsoon climate",
    area: 7802,
    population: 3,
    ports: [
      {
        title: { root: "Tianjin Binhai International Airport (TSN)", ja: "天津濱海国際空港 (TSN)" },
        city: { root: "Tianjin", ja: "天津" },
        distance: 213,
        duration: 185,
        hour240: true
      },
      {
        title: { root: "Qinhuangdao Beidaihe Airport (BPE)", ja: "秦皇島北戴河空港 (BPE)" },
        city: { root: "Qinhuangdao", ja: "秦皇島" },
        distance: 54,
        duration: 88
      },
      {
        title: { root: "Port of Qinhuangdao", ja: "秦皇島港" },
        city: { root: "Qinhuangdao", ja: "秦皇島" },
        distance: 10,
        description: {
          root: "Qinhuangdao Port is one of China's important ports, with shipping routes to Incheon (South Korea), Southeast Asia, Detroit (USA), the Kanto region (Japan), and others.",
          ja: "秦皇島港は中国の重要な港の一つであり、仁川（韓国）、東南アジア、デトロイト（アメリカ）、関東地方（日本）などへの航路があります。"
        },
        duration: 30
      }
    ]
  },
  {
    name: "Nanjing",
    nameLocale: { ja: "南京", root: "Nanjing" },
    nameChinese: "南京",
    namePinyin: "nán jīng",
    description: {
      ja: "六朝古都南京。中山陵や明孝陵など歴史的な名所と美しい庭園が織りなす、文化的な旅先。玄武湖の桜並木が春の風物詩。鴨血粉絲湯を片手に秦淮河のランタンナイトツアーへ。",
      root: "Discover Nanning, the capital of Guangxi. Explore its lush greenery, rich ethnic culture, and vibrant tourism, including Qingxiushan Park and Nanning Zoo."
    },
    province: "Jiangsu Province",
    region: East,
    visa240: true,
    staying240: "Jiangsu Province",
    rank: {
      root: 11,
      ja: 9
    },
    link: "/nanjing",
    location: "32.042983915299494, 118.80224734269194",
    tags: [AncienCapital, HeritageSites, Festival],
    slogan: {
      root: "Riverfront History & Ming Legacy",
      ja: "揚子江歴史ロマン"
    },
    introduce: {
      root: "Nanjing was once the capital of six ancient dynasties, boasting a long history and rich culture. Not only does Nanjing have a profound historical and cultural heritage, but it is also renowned for its abundant culinary delights.",
      ja: "南京はかつて六つの古代王朝の首都であり、長い歴史と豊かな文化を誇っています。南京には深い歴史的文化遺産だけでなく、多様な美食も知られています。"
    },
    nickname: { root: ["Nanking"], ja: ["ナンキン"] },
    geography: {
      root: "Southwestern Jiangsu Province, downstream of the Yangtze River",
      ja: "江蘇省南西部、長江下流"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jun – Aug, Dec – Feb", description: "Hot in summer, cold in winter." },
        offTime: { title: "Mar – May, Sep – Nov", description: "Mild climate, pleasant weather." }
      },
      ja: {
        peakTime: { title: "6月 – 8月, 12月 – 2月", description: "夏は暑く、冬は寒い。" },
        offTime: { title: "3月 – 5月, 9月 – 11月", description: "気候が温和で、天気が快適。" }
      }
    },
    climate: "Temperate monsoon climate",
    area: 6587.04,
    population: 9,
    ports: [
      {
        title: { root: "Nanjing Lukou International Airport (NKG)", ja: "南京禄口国際空港 (NKG)" },
        city: { root: "Nanjing", ja: "南京" },
        distance: 35,
        duration: 51,
        hour240: true
      },
      {
        title: { root: "Sunan Shuofang International Airport (WUX)", ja: "蘇南硕放国際空港 (WUX)" },
        city: { root: "Wuxi", ja: "無錫" },
        distance: 166,
        duration: 133,
        hour240: true
      },
      {
        title: { root: "Hefei Xinqiao International Airport (HFE)", ja: "合肥新橋国際空港 (HFE)" },
        city: { root: "Hefei", ja: "合肥" },
        distance: 170,
        duration: 146,
        hour240: true
      },
      {
        title: {
          root: "Shanghai Hongqiao International Airport (SHA)",
          ja: "上海虹橋国際空港 (SHA)"
        },
        city: { root: "Shanghai", ja: "上海" },
        distance: 258,
        duration: 198,
        hour240: true
      }
    ]
  },
  {
    name: "Lianyungang",
    nameLocale: { ja: "連雲港", root: "Lianyungang" },
    nameChinese: "连云港",
    namePinyin: "lián yún gǎng",
    description: {
      ja: "黄海に面する港町連雲港。山々と海が調和した自然景観と歴史的な遺跡を探索する冒険の旅。花果山で西遊記伝説を追体験！港町ならではの海鮮市場で活きのいい魚介を即調理。",
      root: "Discover Lianyungang, a port city on the shores of Haizhou Bay. Experience its scenic coastal landscapes and ideal conditions for outdoor activities."
    },
    province: "Jiangsu Province",
    region: East,
    visa240: true,
    staying240: "Jiangsu Province",
    link: "/lianyungang",
    location: "34.59567508587114, 119.21263487847489",
    tags: [Seaside],
    slogan: { root: "Portside Sunrise & Lotus Peaks", ja: "海上日出と蓮花峰" },
    introduce: {
      root: "Lianyungang is located in the northeastern part of Jiangsu Province, bordering the Yellow Sea to the east, the Huabei Plain to the west, Yancheng and Huai'an to the south, and Rizhao, Shandong Province to the north.",
      ja: "連雲港は江蘇省の北東部に位置し、東は黄海に面し、西は華北平原と接しています。南は塩城と淮安、北は山東省の日照市と隣接しています。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "East China, west coast of Haizhou Bay", ja: "中国東部、海州湾の西岸" },
    bestTime: {
      root: {
        peakTime: {
          title: "Apr – May, Sep – Nov",
          description: "The weather is mild and pleasant, with fewer rainy days."
        },
        offTime: {
          title: "Dec – Feb",
          description: "Fewer tourists, and prices are generally lower."
        }
      },
      ja: {
        peakTime: {
          title: "4月 – 5月、9月 – 11月",
          description: "気候が穏やかで快適で、雨の日も少ないため、観光に最適な時期です。"
        },
        offTime: {
          title: "12月 – 2月",
          description: "観光客が少なく、料金も一般的に低いです。ただし、冬の景色を楽しむことができます。"
        }
      }
    },
    climate: "Temperate monsoon climate",
    area: 7615,
    population: 4,
    ports: [
      {
        title: {
          root: "Qingdao Jiaodong International Airport (TAO)",
          ja: "青島胶东国際空港 (TAO)"
        },
        city: { root: "Qingdao", ja: "青島" },
        distance: 211,
        duration: 194,
        hour240: true
      },
      {
        title: { root: "Lianyungang Baitabu Airport (LYG)", ja: "連雲港白塔埠空港 (LYG)" },
        city: { root: "Lianyungang", ja: "連雲港" },
        distance: 19,
        duration: 54
      },
      {
        title: { root: "Lianyungang Port", ja: "連雲港港" },
        city: { root: "Lianyungang", ja: "連雲港" },
        distance: 10,
        duration: 30,
        hour240: true
      }
    ]
  },
  {
    name: "Suzhou",
    nameLocale: { ja: "蘇州", root: "Suzhou" },
    nameChinese: "苏州",
    namePinyin: "sū zhōu",
    description: {
      ja: "古典的な庭園と水郷の風情が魅力の蘇州。詩的な風景と伝統文化が息づく江南の古都。夜の網師園で伝統音楽ライトアップ演出。絹製品のお土産探しは観前街がベストスポット。",
      root: "Explore Suzhou, an ancient city on the eastern shore of Tai Lake, renowned for its classical gardens and water towns."
    },
    province: "Jiangsu Province",
    region: East,
    visa240: true,
    staying240: "Jiangsu Province",
    rank: {
      root: Infinity,
      ja: 4
    },
    link: "/suzhou",
    location: "31.329415939211117, 120.59485185593365",
    tags: [Art, Shopping, Tech],
    slogan: {
      root: "Canalside Gardens & Silk Road Heritage",
      ja: "運河沿いの庭園＆絹の道"
    },
    introduce: {
      root: "Suzhou, located on the eastern shore of Tai Lake, is an ancient city with a long history, renowned for its classical gardens, picturesque water towns, and exquisite cultural arts.",
      ja: "蘇州は太湖東岸に位置し、長い歴史を持つ古都で、古典的な庭園、風光明媚な水郷、精緻な文化芸術で知られています。"
    },
    nickname: { root: ["Soochow"], ja: [] },
    geography: {
      root: "Southeastern Jiangsu Province, on the eastern shore of Tai Lake",
      ja: "江蘇省南東部、太湖東岸"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Mar – May, Sep – Nov",
          description: "Spring brings mild weather and blooming flowers, especially in Suzhou's gardens, which are breathtaking. Autumn is perfect for admiring maple leaves, with the red foliage complementing the ancient architecture beautifully."
        },
        offTime: { title: "Jun – Aug, Dec – Feb", description: "Less visitors and lower prices." }
      },
      ja: {
        peakTime: {
          title: "3月 – 5月、9月 – 11月",
          description: "春は気候が穏やかで花々が咲き誇り、特に蘇州の庭園は見事です。秋は紅葉を楽しむのに最適で、赤い葉と古代建築が美しく調和します。"
        },
        offTime: {
          title: "6月 – 8月、12月 – 2月",
          description: "観光客が少なく、料金も安くなります。"
        }
      }
    },
    climate: "Subtropical monsoon maritime climate",
    area: 8657.32,
    population: 12,
    ports: [
      {
        title: {
          root: "Suzhou Wuxi Shuofang International Airport (WUX)",
          ja: "蘇州无锡硕放国際空港 (WUX)"
        },
        city: { root: "Wuxi", ja: "无锡" },
        distance: 26,
        description: {
          root: "Sudan Shuofang International Airport has established routes to major Asian cities such as Tokyo (Narita, Haneda), Osaka (Kansai), Nagoya (Chubu), Seoul (Incheon), Busan, Singapore, Bangkok, Kuala Lumpur, Ho Chi Minh City, Hanoi, Jakarta, Manila, Cebu, Siem Reap, and Phnom Penh. It also operates routes to Amsterdam and Cincinnati.",
          ja: "苏南硕放国际机场已开通了东京（成田、羽田）、大阪（关西）、名古屋（中部）、首尔（仁川）、釜山、新加坡、曼谷、吉隆坡、胡志明市、河内、雅加达、马尼拉、宿务、暹粒、金边等亚洲主要城市航线，还有阿姆斯特丹、辛辛那提航线。"
        },
        duration: 38,
        hour240: true
      },
      {
        title: {
          root: "Shanghai Pudong International Airport (PVG)",
          ja: "上海浦東国際空港 (PVG)"
        },
        city: { root: "Shanghai", ja: "上海" },
        distance: 117,
        duration: 115,
        hour240: true
      },
      {
        title: {
          root: "Shanghai Hongqiao International Airport (SHA)",
          ja: "上海虹橋国際空港 (SHA)"
        },
        city: { root: "Shanghai", ja: "上海" },
        distance: 72,
        duration: 75,
        hour240: true
      },
      {
        title: {
          root: "Yangzhou Taizhou International Airport (YTY)",
          ja: "扬州泰州国際空港 (YTY)"
        },
        city: { root: "Yangzhou", ja: "扬州" },
        distance: 160,
        duration: 150,
        hour240: true
      },
      {
        title: { root: "Nanjing Lukou International Airport (NKG)", ja: "南京禄口国際空港 (NKG)" },
        city: { root: "Nanjing", ja: "南京" },
        distance: 180,
        duration: 150,
        hour240: true
      }
    ]
  },
  {
    name: "Yangzhou",
    nameLocale: { ja: "揚州", root: "Yangzhou" },
    nameChinese: "扬州",
    namePinyin: "yáng zhōu",
    description: {
      ja: "中国四大古都の一つ、揚州。古典的な庭園や運河散策、そして本格的な淮揚料理を堪能できる歴史ある都市です。早朝の茶楼で「三丁包子」を味わう粋な習慣。運河沿いの柳並木が江南情緒を演出。",
      root: `Discover Yangzhou, a historic city in China known for its classical gardens and rich cultural heritage. Explore the stunning Slender West Lake.`
    },
    province: "Jiangsu Province",
    region: East,
    visa240: true,
    staying240: "Jiangsu Province",
    link: "/yangzhou",
    location: "32.39937697703418, 119.4241696621875",
    tags: [Cuisine],
    slogan: { root: "Grand Canal Culture & Slender West Lake", ja: "大運河と痩西湖の雅" },
    introduce: {
      root: "Yangzhou is a historic city known for its classical gardens, rich culture, and delicious cuisine. Once a prosperous hub along the Grand Canal, Yangzhou offers visitors a glimpse into ancient Chinese history and traditions.",
      ja: "揚州は古典的な庭園、豊かな文化、そして美味な料理で知られる歴史ある都市です。かつて大運河沿いの繁栄した中心地として栄えた揚州は、訪問者に古代中国の歴史と伝統を垣間見させる魅力があります。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Situated on the north bank of the Yangtze River, near the Grand Canal.",
      ja: "長江の北岸、大運河近くに位置している"
    },
    bestTime: {
      root: {
        peakTime: { title: "Apr, Sep – Nov", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Feb, Jun, Aug", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "4月、9月 – 11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 2月、6月、8月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Mild subtropical climate.",
    area: 6634,
    population: 5,
    ports: [
      {
        title: { root: "Yangzhou Taizhou International (YTY)", ja: "揚州泰州国際空港 (YTY)" },
        city: { root: "Yangzhou", ja: "揚州" },
        distance: 34,
        duration: 46,
        hour240: true
      },
      {
        title: { root: "Nanjing Lukou International Airport (NKG)", ja: "南京禄口国際空港 (NKG)" },
        city: { root: "Nanjing", ja: "南京" },
        distance: 88,
        duration: 99,
        hour240: true
      },
      {
        title: {
          root: "Shanghai Hongqiao International Airport (SHA)",
          ja: "上海虹橋国際空港 (SHA)"
        },
        city: { root: "Shanghai", ja: "上海" },
        distance: 225,
        duration: 187,
        hour240: true
      },
      {
        title: {
          root: "Suzhou Wuxi Shuofang International Airport (WUX)",
          ja: "蘇州無錫碩放国際空港 (WUX)"
        },
        city: { root: "Wuxi", ja: "無錫" },
        distance: 138,
        duration: 122,
        hour240: true
      }
    ]
  },
  {
    name: "Hangzhou",
    nameLocale: { ja: "杭州", root: "Hangzhou" },
    nameChinese: "杭州",
    namePinyin: "háng zhōu",
    description: {
      ja: "西湖の美しさで知られる杭州。詩的な風景と龍井茶の発祥地。日本の四季を感じるような美しい観光地。龍井茶畑での茶摘み体験が人気。西湖ボートで三潭印月の絶景をカメラに収めよう。",
      root: "Explore Hangzhou, a historic city in northern Zhejiang. Discover its cultural heritage, including West Lake, Longjing tea plantations, and ancient canals."
    },
    province: "Zhejiang Province",
    region: East,
    visa240: true,
    staying240: "Zhejiang Province",
    rank: { root: 8, ja: 5 },
    link: "/hangzhou",
    location: "30.25973047857728, 120.15737265075288",
    tags: [Megacity, AncienCapital, HeritageSites, Shopping, Festival, Tech],
    slogan: {
      root: "West Lake Poetry & Tea Plantations",
      ja: "西湖の絶景と龍井茶畑"
    },
    introduce: {
      root: "The history of Hangzhou can be traced back to the Liangzhu Culture period, approximately 5000 years ago. Hangzhou has been a place of convergence for literati since ancient times, attracting many scholars and poets to visit, reside, and create works here.",
      ja: "杭州の歴史は良渚文化時代（約5000年前）までさかのぼります。古くから杭州は文人の集まる場所であり、多くの学者や詩人が訪れ、住み、作品を創作しました。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Northern Zhejiang, at the southern end of the Beijing-Hangzhou Grand Canal",
      ja: "浙江省北部、北京〜杭州大運河の南端"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Mar – May, Sep – Nov",
          description: "Moderate temperatures, pleasant weather."
        },
        offTime: { title: "Dec – Feb, Jun – Aug", description: "Less popular and lower prices." }
      },
      ja: {
        peakTime: { title: "3月 – 5月, 9月 – 11月", description: "適度な気温、快適な天候。" },
        offTime: { title: "12月 – 2月, 6月 – 8月", description: "比較的静かで料金も安価。" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 16850,
    population: 12,
    ports: [
      {
        title: { root: "Hangzhou International Airport (HGH)", ja: "杭州蕭山国際空港 (HGH)" },
        city: { root: "Hangzhou", ja: "杭州" },
        distance: 27,
        description: {
          root: "Xiaoshan Airport has an extensive international flight network, connecting multiple countries and regions in Asia, Europe, Oceania, and Africa.",
          ja: "蕭山空港はアジア、ヨーロッパ、オセアニア、アフリカなど多数の国と地域への広範な国際路線ネットワークを持っています。"
        },
        duration: 34,
        hour240: true
      },
      {
        title: {
          root: "Shanghai Pudong International Airport (PVG)",
          ja: "上海浦東国際空港 (PVG)"
        },
        city: { root: "Shanghai", ja: "上海" },
        distance: 184,
        duration: 138,
        hour240: true
      },
      {
        title: {
          root: "Shanghai Hongqiao International Airport (SHA)",
          ja: "上海虹橋国際空港 (SHA)"
        },
        city: { root: "Shanghai", ja: "上海" },
        distance: 152,
        duration: 125,
        hour240: true
      },
      {
        title: { root: "Nanjing Lukou International Airport (NKG)", ja: "南京祿口国際空港 (NKG)" },
        city: { root: "Nanjing", ja: "南京" },
        distance: 204,
        duration: 175,
        hour240: true
      }
    ]
  },
  {
    name: "Ningbo",
    nameLocale: { ja: "寧波", root: "Ningbo" },
    nameChinese: "宁波",
    namePinyin: "níng bō",
    description: {
      ja: "浙江省の沿岸都市寧波。豊かな歴史と現代的な港湾施設が融合した街並みを散策。新鮮なシーフードも魅力。天一閣の古書院で東洋最大の蔵書を拝観。港町グルメは酒漬け蟹が絶品。",
      root: "Explore Ningbo, a coastal open city in Zhejiang Province. Experience its vibrant tourism, historical landmarks, and delicious local cuisine."
    },
    province: "Zhejiang Province",
    region: East,
    visa240: true,
    staying240: "Zhejiang Province",
    link: "/ningbo",
    location: "29.87682286003891, 121.58774103153507",
    tags: [Seaside],
    slogan: { root: "Seabank Temples & Seafood Bazaars", ja: "海鮮市場＆天童寺巡り" },
    introduce: {
      root: "Ningbo is the second-largest city in Zhejiang Province, located on the southern shore of Hangzhou Bay. It is a modern port city and an important industrial center.",
      ja: "宁波は浙江省で2番目に大きな都市で、杭州湾の南岸に位置しています。現代的な港湾都市であり、重要な工業中心地でもあります。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The eastern part of Zhejiang Province, on the southern shore of Hangzhou Bay",
      ja: "浙江省東部、杭州湾の南岸"
    },
    bestTime: {
      root: {
        peakTime: { title: "Aug – Nov", description: "Most popular and higher prices" },
        offTime: { title: "Feb – Mar, May – Jun", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "8月 – 11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "2月 – 3月、5月 – 6月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 9816,
    population: 9,
    ports: [
      {
        title: { root: "Ningbo Lishe International Airport (NGB)", ja: "宁波栎社国際空港 (NGB)" },
        city: { root: "Ningbo", ja: "宁波" },
        distance: 10,
        duration: 24,
        hour240: true
      },
      {
        title: { root: "Hangzhou International Airport (HGH)", ja: "杭州蕭山国際空港 (HGH)" },
        city: { root: "Hangzhou", ja: "杭州" },
        distance: 114,
        duration: 93,
        hour240: true
      }
    ],
    rank: { root: 20, ja: Infinity, ko: 14 }
  },
  {
    name: "Yiwu",
    nameLocale: { ja: "義烏", root: "Yiwu" },
    nameChinese: "义乌",
    namePinyin: "yì wū",
    description: {
      ja: "世界最大級の小商品市場を持つ義烏。お土産探しに最適！安価で質の高い商品が豊富な国際貿易中心地。日本語対応ショップ多数！電子製品から伝統工芸品まで卸値価格で購入可能。",
      root: `Discover Yiwu, the global hub for small commodities trade. Explore its bustling markets, including the "World's Largest Small Commodity Market."`
    },
    province: "Zhejiang Province",
    region: East,
    visa240: true,
    staying240: "Zhejiang Province",
    link: "/yiwu",
    location: "29.31204761999663, 120.0726503150883",
    tags: [Shopping],
    slogan: { root: "Global Shopping Spree & Dongyang Carvings", ja: "世界の雑貨＆東陽彫刻" },
    introduce: {
      root: `Yiwu is a global hub for small commodities trade. Known as the "World's Largest Small Commodity Market," Yiwu attracts merchants and tourists from around the world with its bustling markets, vibrant economy, and rich cultural heritage.`,
      ja: "義烏は小商品取引の世界的な中心地として知られています。世界最大の小商品市場と呼ばれ、活気ある市場、繁栄する経済、豊かな文化遺産で、世界中から商人と観光客を引きつけています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Situated in the central part of Zhejiang Province.",
      ja: "浙江省中央部に位置している"
    },
    bestTime: {
      root: {
        peakTime: { title: "Sep – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Feb, May, Aug", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "9月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 2月、5月、8月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 1105,
    population: 2,
    ports: [
      {
        title: { root: "Yiwu Airport (YIW)", ja: "義烏空港 (YIW)" },
        city: { root: "Yiwu", ja: "義烏" },
        distance: 5,
        duration: 13,
        hour240: true
      },
      {
        title: {
          root: "Hangzhou Xiaoshan International Airport (HGH)",
          ja: "杭州蕭山国際空港 (HGH)"
        },
        city: { root: "Hangzhou", ja: "杭州" },
        distance: 108,
        duration: 84,
        hour240: true
      },
      {
        title: { root: "Ningbo Lishe International Airport (NGB)", ja: "宁波栎社国際空港 (NGB)" },
        city: { root: "Ningbo", ja: "宁波" },
        distance: 146,
        duration: 135,
        hour240: true
      }
    ]
  },
  {
    name: "Wenzhou",
    nameLocale: { ja: "温州", root: "Wenzhou" },
    nameChinese: "温州",
    namePinyin: "wēn zhōu",
    description: {
      ja: "温州の自然美と私有経済の発展を体感。雁荡山や南麂島などの秘境を訪ね、リフレッシュする旅に出かけよう。雁蕩山の断崖絶壁に感動。皮革製品の工房直営店で高品質バッグを格安入手。",
      root: "Discover Wenzhou, a seaside city in southeastern Zhejiang Province. Experience its rich maritime heritage, local culture, and breathtaking natural scenery."
    },
    province: "Zhejiang Province",
    region: East,
    visa240: true,
    staying240: "Zhejiang Province",
    link: "/wenzhou",
    location: "28.00384715304942, 120.70807679855987",
    tags: [Seaside],
    slogan: { root: "Mild Climate & Jiangxin Islet Scenery", ja: "温暖気候＆江心嶼散策" },
    introduce: {
      root: "Wenzhou is located on the coast of the East China Sea and is known for its thriving private economy and beautiful natural scenery.",
      ja: "溫州は東シナ海沿岸に位置し、活気ある私営経済と美しい自然景観で知られています。この都市は浙江省南東部にあり、山々と海が織り成す豊かな自然環境と、独特な文化を楽しむことができます。"
    },
    nickname: { root: ["Yujeu"], ja: ["Yujeu"] },
    geography: { root: "Southeastern Zhejiang Province", ja: "浙江省南東部" },
    bestTime: {
      root: {
        peakTime: { title: "Sep – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Feb, Jun – Jul", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "9月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 2月、6月 – 7月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 12110,
    population: 9,
    ports: [
      {
        title: {
          root: "Wenzhou Longwan International Airport (WNZ)",
          ja: "溫州龍湾国際空港 (WNZ)"
        },
        city: { root: "Wenzhou", ja: "溫州" },
        distance: 18,
        duration: 28,
        hour240: true
      },
      {
        title: { root: "Yiwu Airport (YIW)", ja: "義烏空港 (YIW)" },
        city: { root: "Yiwu", ja: "義烏" },
        distance: 163,
        duration: 172,
        hour240: true
      },
      {
        title: { root: "Ningbo Lishe International Airport (NGB)", ja: "宁波栎社国際空港 (NGB)" },
        city: { root: "Ningbo", ja: "宁波" },
        distance: 216,
        duration: 199,
        hour240: true
      },
      {
        title: { root: "Wenzhou Port", ja: "温州港" },
        city: { root: "Ningbo", ja: "宁波" },
        distance: 25,
        duration: 50,
        hour240: true
      }
    ]
  },
  {
    name: "Zhoushan",
    nameLocale: { ja: "舟山", root: "Zhoushan" },
    nameChinese: "舟山",
    namePinyin: "zhōu shān",
    description: {
      ja: "海鮮好き必見！中国最大の島嶼都市舟山では新鮮な海の幸と美しいビーチを満喫できます。普陀山巡礼と新鮮なイカ料理の組み合わせ。仏教聖地ならではの精進料理も体験可能。",
      root: "Explore Zhoushan, the largest archipelago city in China. Discover its beautiful island scenery, rich Buddhist culture, and pristine coastal landscapes."
    },
    province: "Zhejiang Province",
    region: East,
    visa240: true,
    staying240: "Zhejiang Province",
    link: "/zhoushan",
    location: "29.993826981036854, 122.2007251883173",
    tags: [Island],
    slogan: { root: "Island-Hopping & Putuo Zen Culture", ja: "島巡り＆普陀山禅" },
    introduce: {
      root: "Zhoushan is the largest archipelago city in China, renowned for its beautiful island scenery. The Zhoushan Archipelago consists of 2085 islands, among which the most famous are Putuo Mountain, Zhujiajian, Taohua Island, Daishan Island, Shengsi Islands, and Dongji Island.",
      ja: "舟山は中国最大の諸島都市で、美しい島の景観で知られています。舟山諸島には2085の島があり、その中でも有名なのは普陀山、朱家尖、桃花島、岱山島、嵊泗列島、東極島などです。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Eastern Zhejiang Province", ja: "浙江省東部" },
    bestTime: {
      root: {
        peakTime: { title: "Apr – May, Oct – Nov", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Feb, Jul – Aug", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "4月 – 5月、10月 – 11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 2月、7月 – 8月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 22200,
    population: 1,
    ports: [
      {
        title: { root: "Zhoushan Airport (HSN)", ja: "舟山普陀山空港 (HSN)" },
        city: { root: "Zhoushan", ja: "舟山" },
        distance: 14,
        duration: 28
      },
      {
        title: { root: "Hangzhou International Airport (HGH)", ja: "杭州蕭山国際空港 (HGH)" },
        city: { root: "Hangzhou", ja: "杭州" },
        distance: 172,
        duration: 147,
        hour240: true
      },
      {
        title: { root: "Ningbo Lishe International Airport (NGB)", ja: "宁波栎社国際空港 (NGB)" },
        city: { root: "Ningbo", ja: "宁波" },
        distance: 72,
        duration: 91,
        hour240: true
      },
      {
        title: { root: "Zhoushan Port", ja: "舟山港" },
        city: { root: "Shanghai", ja: "上海" },
        distance: 30,
        duration: 40,
        hour240: true
      }
    ]
  },
  {
    name: "Guangzhou",
    nameLocale: { ja: "広州", root: "Guangzhou" },
    nameChinese: "广州",
    namePinyin: "guǎng zhōu",
    description: {
      ja: "広東料理の本場・広州。点心や早朝の飲茶文化を楽しみながら、近代と伝統が融合した街並みを探索。夜間サファリが楽しめる長隆テーマパーク。上下九歩行者天国で広東菓子の食べ歩き。",
      root: "Explore Guangzhou, the economic hub of southern China. Experience its history, famous Cantonese cuisine, and landmarks like Chen Clan Ancestral Hall."
    },
    province: "Guangdong Province",
    region: South,
    visa240: true,
    staying240: "Guangdong Province",
    rank: {
      root: 7,
      ja: Infinity
    },
    link: "/guangzhou",
    location: "23.13409556697514, 113.27722990726903",
    tags: [Megacity, Cuisine, Shopping, Tech],
    slogan: {
      root: "Cantonese Gastronomy & Pearl River Lights",
      ja: "広東料理＆珠江夜景"
    },
    introduce: {
      root: `Guangzhou is a major economic center in Southern China, known for its Cantonese culture and cuisine. The city's afternoon tea, with a variety of dim sum and teas, is particularly memorable. Located in the subtropics, Guangzhou has a warm and humid climate, with year-round blooms, earning it the nickname "Flower City." Guangzhou's Cantonese cuisine is renowned for its exquisite flavors and diverse dishes.`,
      ja: "広州は中国南部の主要な経済拠点であり、広東文化と広東料理で知られています。特に、多種多様な点心と茶が楽しめる午後の広東式ティータイムは忘れられない体験です。亜熱帯に位置する広州は温暖で湿度の高い気候を持ち、年間を通じて花が咲き乱れ、「花の街」というニックネームがあります。広州の広東料理はその繊細な味わいと多様なメニューで世界的に有名です。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "South China, central-southern Guangdong Province, northern Pearl River Delta",
      ja: "中国南部、広東省中南部、珠江デルタ北部"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Apr - Oct",
          description: "The weather is warm and perfect for outdoor activities and sightseeing."
        },
        offTime: {
          title: "Dec - Feb",
          description: "Winter has fewer tourists, making attractions more peaceful."
        }
      },
      ja: {
        peakTime: { title: "4月 - 10月", description: "天候が温暖で、屋外活動や観光に最適です。" },
        offTime: {
          title: "12月 - 2月",
          description: "冬は観光客が少なく、観光地が静かになります。"
        }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 7434.4,
    population: 18,
    ports: [
      {
        title: {
          root: "Guangzhou Baiyun International Airport (CAN)",
          ja: "广州白云国际机场 (CAN)"
        },
        city: { root: "Guangzhou", ja: "广州" },
        distance: 29,
        description: {
          root: "Guangzhou Baiyun International Airport is one of the largest international airports in Southern China, with extensive routes to major cities in Asia, Europe, North America, Australia, and New Zealand. It offers very convenient transportation.",
          ja: "広州白雲国際空港は中国南部最大級の国際空港の一つで、アジア、ヨーロッパ、北アメリカ、オーストラリア、ニュージーランドなどの主要都市への広範な路線があり、交通が非常に便利です。"
        },
        duration: 32,
        hour240: true
      },
      {
        title: {
          root: "Shenzhen Bao'an International Airport (SZX)",
          ja: "深圳宝安国际机场 (SZX)"
        },
        city: { root: "Shenzhen", ja: "深圳" },
        distance: 78,
        duration: 92,
        hour240: true
      },
      {
        title: { root: "Zhuhai International Airport (ZUH)", ja: "珠海金湾国际机场 (ZUH)" },
        city: { root: "Zhuhai", ja: "珠海" },
        distance: 125,
        duration: 122
      },
      {
        title: { root: "Nansha Port", ja: "南沙港" },
        city: { root: "Zhuhai", ja: "珠海" },
        distance: 60,
        duration: 60
      }
    ]
  },
  {
    name: "Shenzhen",
    nameLocale: { ja: "深圳", root: "Shenzhen" },
    nameChinese: "深圳",
    namePinyin: "shēn zhèn",
    description: {
      ja: "未来都市深圳へ！ハイテク企業の拠点であり、テーマパークやショッピングモールが充実したエンタメ都市。世界最大の電子市場「華強北」で最新ガジェット探し。",
      root: "Explore Shenzhen, a vibrant modern Megacity known for rapid development. Discover its high-tech industries, innovative spirit, and coastal attractions."
    },
    province: "Guangdong Province",
    region: South,
    visa240: true,
    staying240: "Guangdong Province",
    rank: { root: 10, ja: Infinity },
    link: "/shenzhen",
    location: "22.534148629470103, 114.04905915411895",
    tags: [Megacity, Seaside, Shopping, Tech],
    slogan: {
      root: "Tech Wonderland & Futuristic Nightlife",
      ja: "未来都市＆テックパーク"
    },
    introduce: {
      root: "Shenzhen is renowned for its shopping destinations, modern architecture, and thriving technology industry. As China's Silicon Valley, the city is home to numerous leading IT companies and startups, featuring a vibrant innovation ecosystem and a technology-driven economy.",
      ja: "深圳はショッピングスポット、近代建築、繁栄するテクノロジー産業で知られています。中国の「シリコンバレー」として、多くの主要IT企業やスタートアップが本拠を置き、活気に満ちたイノベーションエコシステムと技術主導の経済を持っています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Southern coastal Guangdong Province, at the Pearl River Estuary, north of Hong Kong",
      ja: "広東省南部の沿岸部、珠江河口に位置し、香港の北側"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Jun - Sep",
          description: "Warm weather, perfect for beach activities, but beaches can be crowded."
        },
        offTime: { title: "Dec – Feb", description: "Less popular and lower prices." }
      },
      ja: {
        peakTime: {
          title: "6月 - 9月",
          description: "温暖な気候でビーチアクティビティに最適ですが、ビーチは混雑することがあります。"
        },
        offTime: { title: "12月 – 2月", description: "訪問者が少なく、価格も低い。" }
      }
    },
    climate: "Subtropical to tropical maritime climate",
    area: 1997.47,
    population: 17,
    ports: [
      {
        title: {
          root: "Shenzhen Bao'an International Airport (SZX)",
          ja: "深圳宝安国际机场 (SZX)"
        },
        city: { root: "Shenzhen", ja: "深圳" },
        distance: 27,
        description: {
          root: "Shenzhen Bao'an International Airport is a major aviation hub in China, offering extensive domestic and international flights, including routes to Southeast Asia, Northeast Asia, Europe, and North America.",
          ja: "深圳宝安国際空港は中国的主要な航空ハブの一つで、国内および国際便が広範に運航されています。東南アジア、東北アジア、ヨーロッパ、北アメリカへの路線も充実しています。"
        },
        duration: 36,
        hour240: true
      },
      {
        title: {
          root: "Guangzhou Baiyun International Airport (CAN)",
          ja: "广州白云国际机场 (CAN)"
        },
        city: { root: "Guangzhou", ja: "广州" },
        distance: 122,
        duration: 113,
        hour240: true
      },
      {
        title: { root: "Zhuhai International Airport (ZUH)", ja: "珠海金湾国际机场 (ZUH)" },
        city: { root: "Zhuhai", ja: "珠海" },
        distance: 92,
        duration: 144
      },
      {
        title: { root: "Shekou Port", ja: "蛇口港" },
        city: { root: "Shenzhen", ja: "深圳" },
        distance: 25,
        description: {
          root: "Shenzhen Taiziwan International Cruise Terminal (located in Shekou) has launched multiple international cruise routes to Southeast Asian countries, East Asian countries, and other destinations. Additionally, Shekou Port provides high-speed ferry services to Hong Kong, Macau, and Hong Kong International Airport.",
          ja: "深圳太子湾国際クルーズターミナル（蛇口に位置）は、東南アジア諸国、東アジア諸国、その他の目的地への複数の国際クルーズルートを開設しています。また、蛇口港からは香港、マカオ、香港国際空港への高速フェリーも運行しており、これらの地域への移動が非常に便利です。"
        },
        duration: 30,
        hour240: true
      }
    ]
  },
  {
    name: "Shantou",
    nameLocale: { ja: "汕頭", root: "Shantou" },
    nameChinese: "汕头",
    namePinyin: "shàn tóu",
    description: {
      ja: "潮汕文化の魅力が詰まった汕頭。潮州焼きそばや工夫茶（こふだ）を味わい、独特な地域文化を体験。南澳島で潮州式BBQを体験。手作りの功夫茶器をお土産に。",
      root: "Explore Shantou, the heart of Chaoshan culture in eastern Guangdong. Experience its rich traditions, delicious local cuisine, and vibrant cultural festivals."
    },
    province: "Guangdong Province",
    region: South,
    visa240: true,
    staying240: "Guangdong Province",
    link: "/shantou",
    location: "23.364955788247272, 116.72491674803696",
    tags: [Seaside],
    slogan: { root: "Oolong Tea Plantations & Chaoshan Snacks", ja: "烏龍茶畑＆潮州スナック" },
    introduce: {
      root: "Chaozhou, Shantou, and Jieyang are three cities in eastern Guangdong Province. They are geographically adjacent, administratively independent, and all belong to the Chaoshan cultural circle, maintaining close ties.",
      ja: "潮州、汕頭、揭陽は広東省東部にある3つの都市で、地理的に隣接し、行政的には独立していますが、すべて潮汕（チャオシャン）文化圏に属し、密接な関係を保っています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Eastern Guangdong, southern Han River Delta",
      ja: "広東省東部、韓江デルタ南部"
    },
    bestTime: {
      root: {
        peakTime: { title: "Apr, Oct – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Feb, Jun – Jul", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "4月、10月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 2月、6月 – 7月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "South subtropical marine monsoon climate",
    area: 2199,
    population: 5,
    ports: [
      {
        title: { root: "Jieyang Chaoshan Airport (SWA)", ja: "揭阳潮汕机场 (SWA)" },
        city: { root: "Shantou", ja: "汕頭" },
        distance: 27,
        duration: 58,
        hour240: true
      },
      {
        title: { root: "Xiamen Gaoqi International Airport (XMN)", ja: "厦门高崎国际机场 (XMN)" },
        city: { root: "Xiamen", ja: "厦门" },
        distance: 196,
        duration: 182,
        hour240: true
      },
      {
        title: {
          root: "Quanzhou Jinjiang International Airport (JJN)",
          ja: "泉州晋江国际机场 (JJN)"
        },
        city: { root: "Quanzhou", ja: "泉州" },
        distance: 251,
        duration: 226,
        hour240: true
      }
    ]
  },
  {
    name: "Kunming",
    nameLocale: { ja: "昆明", root: "Kunming" },
    nameChinese: "昆明",
    namePinyin: "kūn míng",
    description: {
      ja: "「春の都」と呼ばれる雲南省の省都昆明。年中穏やかな気候と美しい自然景観、少数民族文化を楽しむ絶好の場所。石林の奇岩群を背景に民族衣装撮影。",
      root: `Explore Kunming, the "Spring City" with year-round mild climate. Discover its lush greenery, vibrant tourism, and diverse ethnic cultures.`
    },
    province: "Yunnan Province",
    region: Southwest,
    visa240: true,
    staying240: "Kunming, Chuxiong, Wenshan, Xishuangbanna, Dali, Yuxi, Honghe, Pu'er, Lijiang",
    link: "/kunming",
    location: "24.964662767144915, 102.65417718201819",
    tags: [Minority],
    slogan: { root: "Eternal Spring & Stone Forest Wonders", ja: "石林奇観＆四季春" },
    introduce: {
      root: `Kunming, the capital of Yunnan Province, is often referred to as the "Spring City" due to its mild climate and year-round spring-like weather. Known for its beautiful natural scenery, rich ethnic diversity, and vibrant cultural heritage, Kunming offers visitors a unique blend of modern development and traditional charm. Whether you're exploring ancient temples, enjoying scenic lakes, or discovering the local ethnic markets, Kunming is a must-visit destination in southwestern China.`,
      ja: "昆明は雲南省の省都であり、その穏やかな気候と年間を通じて春のような天気から「春の都」と呼ばれています。美しい自然景観、多彩な民族性、そして活気ある文化的遺産で知られ、昆明は現代的な発展と伝統的な魅力が融合した独特な街です。古代の寺院を探索したり、景色の美しい湖を楽しんだり、地元の民族市場を発見したりするのに最適な場所で、中国南西部を訪れる際には必ず訪れたい観光地です。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Situated in central Yunnan Province.", ja: "雲南省中央部に位置" },
    bestTime: {
      root: {
        peakTime: { title: "Sep – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Feb, May, Jul", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "9月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 2月、5月、7月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical highland mountain monsoon climate",
    area: 21012.54,
    population: 8,
    ports: [
      {
        title: {
          root: "Kunming Changshui International Airport (KMG)",
          ja: "昆明長水国際空港 (KMG)"
        },
        city: { root: "Kunming", ja: "昆明" },
        distance: 26,
        duration: 44,
        hour240: true
      }
    ],
    rank: { root: 14, ja: 19, ko: 18 }
  },
  {
    name: "Xishuangbanna",
    nameLocale: { ja: "西双版纳", root: "Xishuangbanna" },
    nameChinese: "西双版纳",
    namePinyin: "xī shuāng bǎn nà",
    description: {
      ja: "タイ国境近くの熱帯楽園、西双版纳。ジャングル探検やエキゾチックな傣族文化を楽しむ絶好の場所。熱帯植物園でナイトツアー体験。タイ式マッサージと酸辣料理でリフレッシュ。",
      root: "Explore Xishuangbanna, a tropical paradise in southern Yunnan, China. Known for its lush rainforests and rich Dai culture."
    },
    province: "Yunnan Province",
    region: Southwest,
    visa240: true,
    staying240: "Kunming, Chuxiong, Wenshan, Xishuangbanna, Dali, Yuxi, Honghe, Pu'er, Lijiang",
    link: "/xishuangbanna",
    location: "21.99848842132157, 100.79336755352128",
    tags: [Minority, Nature],
    festival: [
      {
        base: Songkran,
        description: {
          root: "In Xishuangbanna, it typically takes place from April 13 to 15. The most famous activity during the festival is the water-splashing, where people douse each other with water, symbolizing purification and blessings. Water is seen as a purifying force, capable of washing away the troubles and misfortunes of the old year, bringing good luck and health for the new year.",
          ja: "シシュアンバンナでは通常4月13日から15日に開催されます。祭りの最も有名な活動は水かけで、人々はお互いに水をかけ合い、浄化と祝福を象徴します。水は浄化の力とされ、古い年の悩みや不運を取り除き、新しい年に幸運と健康をもたらすと考えられています。"
        }
      },
      {
        base: LoyKrathong,
        description: {
          root: 'While Xishuangbanna does not have a dedicated "Loy Krathong" festival, in areas predominantly inhabited by the Dai people, locals also release sky lanterns and float water lamps during similar festivals or events. These activities symbolize the cleansing of past sins and misfortunes, and are done to wish for good luck and happiness. It typically takes place on the full moon day of November, with the exact date determined according to the Buddhist calendar.',
          ja: "シシュアンバンナには専用の「ロイクラトン」祭りはありませんが、傣族が主に住む地域では、同様の祭りやイベントで空 lanternsを飛ばしたり、水灯りを流したりする習慣があります。これらの活動は過去の罪や不運を浄化し、幸運と幸せを願うことを象徴しています。通常、11月の満月の日に開催され、具体的な日付は仏教暦に基づいて決まります。"
        }
      }
    ],
    slogan: {
      root: "Dai Festivals & Rainforest Adventures",
      ja: "タイ族祭り＆熱帯林探検"
    },
    introduce: {
      root: "Xishuangbanna is located in southern Yunnan Province, China, bordering Myanmar and Laos. It is a tropical rainforest ecosystem situated on the Tropic of Cancer. This region boasts rich biodiversity and serves as one of the primary habitats for wild Asian elephants in China. The area is home to the Dai ethnic minority, which has a long history and unique cultural heritage. The most grand traditional festival of the Dai people is the Songkran. Dai women are skilled in brocade weaving, and there are many traditional crafts and distinctive garments.",
      ja: "中国雲南省南部に位置するシシュアンバンナは、ミャンマーとラオスに接しています。熱帯雨林生態系が広がるこの地域は北回帰線の南側にあり、豊かな生物多様性を誇り、中国の野生アジアゾウの主要な生息地の一つとなっています。ここは傣族（タイ族）の居住地でもあり、長い歴史と独自の文化遺産を持っています。傣族の人々にとって最大の伝統的な祭りはソンクラーンで、女性たちは絹織物の技術に優れ、多くの伝統工芸品や特徴的な衣装があります。"
    },
    nickname: { root: ["Sipsongpanna"], ja: ["シップソングパンナ"] },
    geography: {
      root: "The northern margin of the tropics south of the Tropic of Cancer",
      ja: "北回帰線の南にある熱帯の北縁"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Nov– Apr",
          description: "The dry season typically runs from November to April of the following year. Compared to the wet season, precipitation is significantly reduced, making the weather much drier. Average temperatures range from approximately 18°C to 25°C, with warm and comfortable days; nights are cooler, and there is a larger temperature difference between day and night. There are many sunny days with long hours of sunlight, making it very suitable for outdoor activities and tourism. It is also the peak tourist season, especially during the Chinese New Year period (January to February), which sees a high influx of visitors. Songkran in mid-April is another major attraction that draws a large number of tourists."
        },
        offTime: {
          title: "May – Oct",
          description: "During the wet season, precipitation is high, temperatures are elevated, humidity is very high, and weather changes occur rapidly. Typically lasting from mid-May to mid-October, this period sees the majority of the annual rainfall; temperatures are relatively high, with average temperatures ranging between 25°C and 30°C, sometimes exceeding 35°C. The air humidity is extremely high, usually remaining above 80%, and can sometimes approach saturation levels. Afternoons often bring thunderstorms or heavy rain, but the weather clears up quickly after the rain."
        }
      },
      ja: {
        peakTime: {
          title: "11月 – 4月",
          description: "乾季は通常11月から翌年の4月まで続きます。雨季と比べて降水量は大幅に減少し、天候ははるかに乾燥しています。平均気温は約18°Cから25°Cで、日中は暖かく快適ですが、夜は涼しく、昼夜の温度差が大きくなります。晴れた日が多く、日照時間が長いので、屋外活動や観光に非常に適しています。特に中国の春節期間（1月から2月）や4月中旬のソンクラーンは、多くの訪問者で賑わう観光のピークシーズンとなります。"
        },
        offTime: {
          title: "5月 – 10月",
          description: "雨季には降水量が多く、気温も上昇し、湿度が非常に高く、天候の変化が急速です。通常、5月中旬から10月中旬まで続き、年間の大部分の降雨がこの期間に集中します。気温は比較的高く、平均して25°Cから30°Cの間で、ときには35°Cを超えます。空気の湿度は非常に高く、通常80%以上で、時には飽和状態に近づくこともあります。午後には雷雨や大雨がよくありますが、雨が上がるとすぐに天気が晴れます。"
        }
      }
    },
    climate: "Subtropical monsoon rainforest climate",
    area: 19096,
    population: 1,
    ports: [
      {
        title: {
          root: "Xishuangbanna Gasa International Airport (JHG)",
          ja: "西双版纳嘎洒国际机场 (JHG)"
        },
        city: { root: "Xishuangbanna", ja: "西双版纳" },
        distance: 5,
        description: {
          root: "Xishuangbanna Gasa International Airport offers direct flights from multiple cities within China, making it the fastest and most convenient way to reach the destination.",
          ja: "西双版纳嘎洒国际机场は中国国内の複数都市からの直行便を提供しており、目的地への最も速く便利な移動手段となっています。"
        },
        duration: 21
      },
      {
        title: {
          root: "Kunming Changshui International Airport (KMG)",
          ja: "昆明長水国際空港 (KMG)"
        },
        city: { root: "Kunming", ja: "昆明" },
        distance: 515,
        description: {
          root: "For international visitors, it is possible to first arrive in Kunming, and then transfer to a domestic flight or other modes of transportation to proceed to Xishuangbanna.",
          ja: "国際訪問客はまず昆明に到着し、その後、国内線フライトまたはその他の交通手段を利用して西双版纳へ向かうことができます。"
        },
        duration: 8,
        hour240: true
      },
      {
        title: {
          root: "Xishuangbanna Gasa International Airport (JHG)",
          ja: "西双版纳嘎洒国际机场 (JHG)"
        },
        city: { root: "Lijiang", ja: "麗江" },
        distance: 1100,
        description: {
          root: 'There is a tourist train named "From Jade Dragon Snow Mountain to Tropical Rainforest," which departs from Lijiang, offering a comfortable overnight travel experience. This train connects several key destinations, including Xishuangbanna, Kunming, Dali, and Lijiang, with a total journey time of approximately 14 hours. So, entering through Lijiang and then taking this train to Xishuangbanna is also an excellent choice. Passengers can enjoy a restful night aboard the train while traveling efficiently between these scenic locations.',
          ja: "「玉龍雪山から熱帯雨林へ」という観光列車が麗江から出発しており、快適な夜行旅行体験を提供します。この列車は西双版纳、昆明、大理、麗江などの主要な目的地を結び、総所要時間は約14時間です。したがって、麗江経由でこの列車を利用し、西双版纳に向かうのも素晴らしい選択肢です。乗客はこれらの景勝地間を効率的に移動しながら、列車内でゆっくりと休息を取ることができます。"
        },
        duration: 14,
        hour240: true
      },
      {
        title: {
          root: "Mohan Railway Port",
          ja: "磨憨鉄道駅"
        },
        distance: 210,
        description: {
          root: "Mohan Railway Port is also one of the ports applicable for the 240-hour transit visa policy. You can take a train from Vientiane, Laos, or Bangkok, Thailand, and reach Mohan Station via the China-Laos Railway, which is the first station for entering or exiting China on this rail line. The train journey from Mohan Station to Xishuangbanna Station takes approximately 1 hour.",
          ja: "磨憨鉄道駅も240時間トランジットビザ政策が適用される駅の一つです。ラオスの万象やタイのバンコクから列車を利用し、中老鉄道を通じて中国入境または出境の最初の駅である磨憨駅に到着することができます。磨憨駅から西双版纳駅までの列車の旅は約1時間かかります。"
        },
        duration: 180,
        hour240: true
      }
    ]
  },
  {
    name: "Lijiang",
    nameLocale: { ja: "麗江", root: "Lijiang" },
    nameChinese: "丽江",
    namePinyin: "lì jiāng",
    description: {
      ja: "石畳の古城と玉龍雪山が魅力の麗江。ナシ族の伝統音楽や祭りを通じて異国情緒あふれる時間を過ごそう。古城でナシ族の手すき紙体験。玉龍雪山麓の牧場でヤクに乗るフォトスポット。",
      root: "Explore Lijiang, known for its Snow Mountain, Ancient Town, and Naxi Culture. Experience its vibrant festivals, stunning landscapes, and cultural heritage."
    },
    province: "Yunnan Province",
    region: Southwest,
    visa240: true,
    staying240: "Kunming, Chuxiong, Wenshan, Xishuangbanna, Dali, Yuxi, Honghe, Pu'er, Lijiang",
    link: "/lijiang",
    location: "26.872602032292573, 100.22277517689459",
    tags: [Minority, HeritageSites, Nature],
    slogan: { root: "Snow Mountain Backdrop & Naxi Tunes", ja: "雪山と古楽が残る秘境" },
    introduce: {
      root: "Lijiang, located in the northwest of Yunnan Province, is primarily inhabited by the Naxi people and is renowned for its distinctive natural scenery and cultural heritage. The area boasts majestic sights such as the Jade Dragon Snow Mountain, the Lijiang Ancient Town which is a World Cultural Heritage site, the tranquil Shuhe Ancient Town, the enigmatic Lugu Lake, and the spectacular Meili Snow Mountain. Each of these places blends the traditions of the Naxi ethnic group with stunning natural beauty, offering a diverse range of experiences—from high mountain glaciers and ancient towns to the matriarchal culture of the Mosuo people and trekking adventures.",
      ja: "麗江（リジアン）は雲南省北西部に位置し、主にナシ族が居住しており、独特の自然景観と文化的遺産で知られています。この地域には玉龍雪山、世界文化遺産であるリジアン古城、静かな束河古城、神秘的な泸沽湖、そして壮観な梅里雪山などの見どころがあります。これらの場所では、ナシ族の伝統と美しい自然が融合し、高山氷河から古い町並み、モソ族の母系社会文化まで、多様な体験を提供しています。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Northwestern Yunnan", ja: "雲南省北西部" },
    bestTime: {
      root: {
        peakTime: { title: "Jul – Aug", description: "Many festivals, crowded, expensive." },
        offTime: { title: "Nov – Mar", description: "Cold, snow in high areas." }
      },
      ja: {
        peakTime: { title: "7月 – 8月", description: "多くの祭り、混雑、高額。" },
        offTime: { title: "11月 – 3月", description: "寒く、高地には雪。" }
      }
    },
    climate: "Semi-humid mountain monsoon climate",
    area: 20600,
    population: 1,
    ports: [
      {
        title: { root: "Lijiang Sanyi International Airport (LJG)", ja: "麗江三義国際空港 (LJG)" },
        city: { root: "Lijiang", ja: "麗江" },
        distance: 20,
        duration: 40,
        hour240: true
      },
      {
        title: { root: "Dali Yun Cheng Airport (DLU)", ja: "大理雲成空港 (DLU)" },
        city: { root: "Dali", ja: "大理" },
        distance: 134,
        duration: 136
      },
      {
        title: { root: "Shangri-La Diqing Airport", ja: "シャングリラ迪慶空港" },
        city: { root: "Diqing", ja: "迪慶" },
        distance: 117,
        duration: 186
      },
      {
        title: { root: "Exit-Entry Port of Mohan Railway Station", ja: "モハン鉄道駅出入国口岸" },
        city: { root: "Xishuangbanna", ja: "西双版纳" },
        distance: 800,
        duration: 600,
        hour240: true
      }
    ],
    rank: { root: 6, ja: 13 }
  },
  {
    name: "Dali",
    nameLocale: { ja: "大理", root: "Dali" },
    nameChinese: "大理",
    namePinyin: "dà lǐ",
    description: {
      ja: "白族の家屋や蒼山洱海の壮大な景色が広がる大理。自転車での湖畔巡りや温泉もおすすめ。洱海サイクリング途中の白族村で三道茶儀式を体験。大理石工芸品の制作見学可能。",
      root: "Discover Dali, a picturesque region in Yunnan. Experience its Bai ethnic culture, Cangshan Mountain, Erhai Lake, and breathtaking natural beauty."
    },
    province: "Yunnan Province",
    region: Southwest,
    visa240: true,
    staying240: "Kunming, Chuxiong, Wenshan, Xishuangbanna, Dali, Yuxi, Honghe, Pu'er, Lijiang",
    link: "/dali",
    location: "25.702680420817504, 100.16825091204845",
    tags: [Minority, HeritageSites, Nature],
    slogan: { root: "Erhai Lake Romance & Bai Traditions", ja: "エルハイ湖＆白族文化" },
    introduce: {
      root: "Dali is the main settlement area for the Bai ethnic group, where Bai culture has been well preserved and developed. Dali is backed by Cangshan Mountain and faces Erhai Lake. Cangshan Mountain is majestic, with its highest peak reaching 4,122 meters. At the foot of the mountain, many Bai villages retain traditional Bai architecture and lifestyle. Erhai Lake is the second largest freshwater lake in Yunnan, known for its clear water and scenic surroundings, making it a must-visit destination for tourists. Along the lakeshore, Dali Ancient City and Xizhou Ancient Town preserve many architectural and cultural relics from the Ming and Qing dynasties.",
      ja: "大理は白族（バイゾク）の主要な居住地であり、白族文化がよく保存され、発展しています。大理は蒼山に背を向け、洱海（エルハイ）湖を見下ろしています。蒼山は壮大で、最高峰は4,122メートルに達します。山麓には多くの白族の村があり、伝統的な白族建築と生活様式が保たれています。洱海は雲南省第二の淡水湖として知られ、澄んだ水と美しい周辺景観で有名です。湖畔には大理古城と喜洲古城があり、明代と清代の多くの建築物や文化遺産が保存されています。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Central-western Yunnan Province", ja: "雲南省中西部" },
    bestTime: {
      root: {
        peakTime: {
          title: "Jul – Aug",
          description: "Crowded with many visitors, and higher costs."
        },
        offTime: {
          title: "Nov – Mar",
          description: "Temperatures are low, with snow in high-altitude areas."
        }
      },
      ja: {
        peakTime: { title: "7月 – 8月", description: "多くの訪問者で混雑し、費用が高い。" },
        offTime: { title: "11月 – 3月", description: "気温が低く、高地には雪。" }
      }
    },
    climate: "Low-latitude plateau monsoon climate",
    area: 29459,
    population: 3,
    ports: [
      {
        title: { root: "Dali Yun Cheng Airport (DLU)", ja: "大理雲成空港 (DLU)" },
        city: { root: "Dali", ja: "大理" },
        distance: 7,
        duration: 18
      },
      {
        title: { root: "Lijiang Sanyi International Airport (LJG)", ja: "麗江三義国際空港 (LJG)" },
        city: { root: "Lijiang", ja: "麗江" },
        distance: 118,
        duration: 159,
        hour240: true
      },
      {
        title: {
          root: "Kunming Changshui International Airport (KMG)",
          ja: "昆明長水国際空港 (KMG)"
        },
        city: { root: "Kunming", ja: "昆明" },
        distance: 273,
        duration: 262,
        hour240: true
      },
      {
        title: { root: "Exit-Entry Port of Mohan Railway Station", ja: "モハン鉄道駅出入国口岸" },
        city: { root: "Xishuangbanna", ja: "西双版纳" },
        distance: 700,
        duration: 480,
        hour240: true
      }
    ]
  },
  {
    name: "Changsha",
    nameLocale: { ja: "長沙", root: "Changsha" },
    nameChinese: "长沙",
    namePinyin: "cháng shā",
    description: {
      root: "Discover Changsha, the capital of Hunan Province. Explore its blend of modernity and history, including Orange Isle, Yuelu Academy, and spicy Hunan cuisine.",
      ja: "岳麓山の紅葉や橘子洲頭の夜景が美しい長沙。歴史と現代が調和した湖南省の省都。湖南省博物館で馬王堆漢墓の秘宝を鑑賞。夜は火宮殿で激辛料理チャレンジ。"
    },
    province: "Hunan Province",
    region: Central,
    visa240: true,
    staying240: "Hunan Province",
    link: "/changsha",
    location: "28.191854089473132, 112.97696216600507",
    tags: [Cuisine],
    slogan: { root: "Mala Cuisine & Mawangdui Relics", ja: "激辛料理＆馬王堆遺跡" },
    introduce: {
      root: "Changsha is located in central-eastern China and is also a modern city with a long history and rich culture.",
      ja: "長沙は中国中部東部に位置し、長い歴史と豊かな文化を持つ現代都市です。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Northeastern Hunan Province", ja: "湖南省北部" },
    bestTime: {
      root: {
        peakTime: { title: "Sep – Dec", description: "Cold weather, fewer visitors." },
        offTime: { title: "Apr – May", description: "Good time for flower viewing and outings." }
      },
      ja: {
        peakTime: { title: "9月 – 12月", description: "寒い気候、訪問者が少ない。" },
        offTime: { title: "4月 – 5月", description: "花見やピクニックの良い時期。" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 1051.31,
    population: 10,
    ports: [
      {
        title: {
          root: "Changsha Huanghua International Airport (CSX)",
          ja: "長沙黄花国際空港 (CSX)"
        },
        city: { root: "Changsha", ja: "長沙" },
        distance: 27,
        description: {
          root: "Changsha Airport offers flights to Asian destinations such as Thailand, Malaysia, South Korea, and Singapore, as well as international routes to cities like London and Nairobi.",
          ja: "長沙空港はタイ、マレーシア、韓国、シンガポールなどのアジア各国へのフライトを提供しています。また、ロンドンやナイロビなどへの国際路線も運行しています。"
        },
        duration: 42,
        hour240: true
      },
      {
        title: { root: "Hengyang Nanyue Airport (HNY)", ja: "衡陽南岳空港 (HNY)" },
        city: { root: "Hengyang", ja: "衡陽" },
        distance: 150,
        duration: 146
      },
      {
        title: { root: "Yichun Mingyueshan Airport (YIC)", ja: "宜春明月山空港 (YIC)" },
        city: { root: "Yichun", ja: "宜春" },
        distance: 142,
        duration: 157
      },
      {
        title: { root: "Changde Taohuayuan Airport (CGD)", ja: "常德桃花源空港 (CGD)" },
        city: { root: "Changde", ja: "常德" },
        distance: 148,
        duration: 122
      }
    ]
  },
  {
    name: "Zhangjiajie",
    nameLocale: { ja: "張家界", root: "Zhangjiajie" },
    nameChinese: "张家界",
    namePinyin: "zhāng jiā jiè",
    description: {
      ja: "映画『アバター』のモデルとも言われる砂岩峰林の奇景。大自然の神秘を肌で感じる冒険の旅。ガラス張りの展望台で空中散歩。土家族の民族ショーと山菜料理をセットで楽しむ。",
      root: "Explore Zhangjiajie, famous for its unique sandstone peak forest. Discover its dense forests, dramatic landscapes, and world-famous Avatar filming locations."
    },
    province: "Hunan Province",
    region: Central,
    rank: { root: Infinity, ja: Infinity, ko: 9 },
    visa240: true,
    staying240: "Hunan Province",
    link: "/zhangjiajie",
    location: "29.11469468690514, 110.48004825276506",
    tags: [Nature],
    slogan: {
      root: "Avatar Mountains & Skywalk Thrills",
      ja: "アバターの霊峰＆空中散歩"
    },
    introduce: {
      root: "Zhangjiajie is renowned for its unique sandstone peak forest landforms. Tianmen Mountain, one of the most representative natural landscapes in Zhangjiajie, features a main peak that rises to 1,518.6 meters and the world's highest-altitude natural mountain-pass cave—the Tianmen Cave. Additionally, Tianmen Mountain is the host site for the World Wingsuit Flying Championships, attracting top wingsuit pilots from around the globe each year. The spectacular sight of pilots soaring through the Tianmen Cave is truly awe-inspiring.",
      ja: "张家界はその独特な砂岩峰林地形で知られています。天門山は张家界を代表する自然景観の一つであり、主峰は1,518.6メートルに達し、世界最高標高の天然山中溶洞——天門洞があります。さらに、天門山は世界翼装飛行選手権の開催地でもあり、毎年世界中のトップ翼装飛行家が集まります。パイロットたちが天門洞を飛び越える壮観な光景は、まさに息を呑む美しさです。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Located in northwest Hunan Province", ja: "湖南省西北部に位置しています" },
    bestTime: {
      root: {
        peakTime: {
          title: "Aug – Nov",
          description: "Cooler weather is ideal for outdoor activities. This is the best time to enjoy the autumn scenery. During the National Day holiday, the number of visitors increases significantly."
        },
        offTime: {
          title: "Dec – Mar",
          description: "Weather is cold with frequent rainfall, resulting in fewer visitors."
        }
      },
      ja: {
        peakTime: {
          title: "8月 – 11月",
          description: "涼しい気候は屋外活動に理想的で、秋の景色を楽しむ最佳時期です。国民祝日（国庆节）期間中、訪問者の数が大幅に増加します。"
        },
        offTime: {
          title: "12月 – 3月",
          description: "気温は低く、頻繁に雨が降るため、訪問者は少ないです。"
        }
      }
    },
    climate: "Subtropical mountainous monsoon humid climate",
    area: 9533,
    population: 1,
    ports: [
      {
        title: {
          root: "Zhangjiajie Hehua International Airport (DYG)",
          ja: "张家界荷花国際空港 (DYG)"
        },
        city: { root: "Zhangjiajie", ja: "张家界" },
        distance: 3,
        description: {
          root: "The airport is located near the scenic area, and when the weather is clear and visibility is high, you can see some of Zhangjiajie's iconic mountains and landforms from the air.",
          ja: "空港は景勝地の近くにあり、天気が晴れて視界が良好な場合、空中から张家界の象徴的な山々や地形を見ることができます。"
        },
        duration: 9,
        hour240: true
      },
      {
        title: {
          root: "Changsha Huanghua International Airport (CSX)",
          ja: "长沙黄花国際空港 (CSX)"
        },
        city: { root: "Changsha", ja: "长沙" },
        distance: 286,
        duration: 267,
        hour240: true
      }
    ]
  },
  {
    name: "Dalian",
    nameLocale: { ja: "大連", root: "Dalian" },
    nameChinese: "大连",
    namePinyin: "dà lián",
    description: {
      ja: "ロマンチックな海岸線とロシア風建築が魅力の大連。夏の避暑地としても人気の海辺のリゾート。老虎灘海洋公園でイルカショー鑑賞。ロシア街で本場のボルシチを味わう。",
      root: "Explore Dalian, a port city in Northeast China. Experience its coastal beauty, historical sites, and vibrant tourism, including Jinshitan Scenic Area."
    },
    province: "Liaoning Province",
    region: Northeast,
    rank: { root: 16, ja: 10, ko: 5 },
    visa240: true,
    staying240: "Liaoning Province",
    link: "/dalian",
    location: "38.91406753422341, 121.61452976808661",
    tags: [Seaside],
    slogan: {
      root: "Cherry Blossom Coast & Naval History",
      ja: "桜の海岸＆旅順歴史"
    },
    introduce: {
      root: "Dalian is known for its coastal scenery, including unique rock formations and golden beaches, perfect for relaxation. Lüshun Port in the south has many historical sites, ideal for exploring Chinese history. The old town retains traditional architecture.",
      ja: "大連は海岸の景観で知られ、独特な岩肌と黄金色の砂浜がリラックスした時間を提供します。南部の旅順港には多くの歴史的遺跡があり、中国の歴史を探索するのに最適です。古い街には伝統的な建築が残されています。"
    },
    nickname: { root: ["далянь", "대련"], ja: ["далянь", "대련"] },
    geography: {
      root: "Northeast China, at the southern tip of the Liaodong Peninsula",
      ja: "中国東北部、遼東半島の南端"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "May - Sep",
          description: "The weather is pleasant and sunny, most popular and higher prices."
        },
        offTime: {
          title: "Oct - Apr",
          description: "Temperatures have dropped, and tourist numbers have decreased significantly."
        }
      },
      ja: {
        peakTime: {
          title: "5月 - 9月",
          description: "天候が快適で晴れの日が多く、最も人気があり、価格も高くなります。"
        },
        offTime: {
          title: "10月 - 4月",
          description: "気温が下がり、観光客の数が大幅に減少します。"
        }
      }
    },
    climate: "Warm temperate monsoon climate",
    area: 12574,
    population: 7,
    ports: [
      {
        title: {
          root: "Dalian Zhoushuizi International Airport (DLC)",
          ja: "大连周水子国际机场 (DLC)"
        },
        city: { root: "Dalian", ja: "大连" },
        distance: 8,
        description: {
          root: "Dalian Zhoushuizi International Airport has international flight routes to countries such as Japan, South Korea, Thailand, Vietnam, and Russia.",
          ja: "大连周水子国际机场には日本、韓国、タイ、ベトナム、ロシアなどの国々への国際路線があります。"
        },
        duration: 38,
        hour240: true
      },
      {
        title: { root: "Dalian Port", ja: "大连港" },
        city: { root: "Dalian", ja: "大连" },
        distance: 4,
        description: {
          root: "You can enter through Dalian Port, which has a direct international passenger ferry route to Incheon. There are also cruise ships that can reach some Japanese ports from Dalian.",
          ja: "大连港から仁川への直接の国際旅客フェリー航路を利用できます。また、大阪や福岡など日本の一部の港へ向かうクルーズ船も出港しています。"
        },
        duration: 15,
        hour240: true
      }
    ]
  },
  {
    name: "Harbin",
    nameLocale: { ja: "ハルビン", root: "Harbin" },
    nameChinese: "哈尔滨",
    namePinyin: "hā ěr bīn",
    description: {
      ja: "ハルビンは中国東北部に位置し、ロシア風の建築と有名な氷雪祭で知られる美しい都市です。氷の城壁でカチカチフォト！ロシア雑貨店でマトリョーシカ探し。寒中水泳体験も可能。",
      root: "Discover Harbin, a beautiful city in Northeast China. Experience its Russian architecture, Ice Festival, and rich winter attractions."
    },
    province: "Heilongjiang Province",
    region: Northeast,
    rank: { root: 17, ja: 7, ko: 10 },
    visa240: true,
    staying240: "Harbin",
    link: "/harbin",
    location: "45.77052393010061, 126.61836607153242",
    tags: [Festival],
    festival: [
      {
        base: IceAndSnowWorld
      }
    ],
    slogan: {
      root: "Ice Kingdom & Russian Flair",
      ja: "氷祭り＆ロシア建築"
    },
    introduce: {
      root: "Harbin's winter temperatures range from -15°C to -25°C, making it an ideal location for the Ice Festival, which attracts many tourists each year to view ice and snow sculptures. Located in Northeast China near Russia, Harbin has numerous Russian-style buildings and offers delicious Russian cuisine, providing a rich foreign atmosphere.",
      ja: "冬のハルビンは-15°Cから-25°Cにまで下がり、これは毎年多くの観光客を引きつける氷雪祭りの理想的な場所となっています。中国東北部に位置し、ロシアに近いハルビンには多数のロシア様式の建物があり、美味しいロシア料理も提供され、豊かな異国的な雰囲気を楽しむことができます。"
    },
    nickname: { root: ["Chungking"], ja: [] },
    geography: {
      root: "Northeast China, southwestern Heilongjiang Province",
      ja: "中国東北部、黒龍江省南西部"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Dec – Feb",
          description: "Most popular and higher prices during the Winter Ice and Snow Festival"
        },
        offTime: { title: "Mar – May", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: {
          title: "12月 – 2月",
          description: "氷雪祭り期間中は最も人気があり、価格も高くなる"
        },
        offTime: {
          title: "3月 – 5月",
          description: "あまり人気がなく、価格が低い"
        }
      }
    },
    climate: "Middle temperate monsoon climate",
    area: 53076.4,
    population: 9,
    ports: [
      {
        title: {
          root: "Harbin Taiping International Airport (HRB)",
          ja: "ハルビン太平国際空港 (HRB)"
        },
        city: { root: "Harbin", ja: "ハルビン" },
        distance: 33,
        description: {
          root: "Harbin Taiping International Airport has routes connecting to international cities such as Asia, Moscow, Berlin, and Vancouver.",
          ja: "ハルビン太平国際空港はアジア、モスクワ、ベルリン、バンクーバーなどとの国際路線があります。"
        },
        duration: 41,
        hour240: true
      }
    ]
  },
  {
    name: "Chengdu",
    nameLocale: { ja: "成都", root: "Chengdu" },
    nameChinese: "成都",
    namePinyin: "chéng dū",
    description: {
      ja: "パンダの故郷として世界的に知られる成都。四川料理の辛さと深みを体験し、リラックスした時間を過ごす。パンダ繁殖基地で子パンダの食事風景を観察。四川オペラの変面ショーは夜の定番。",
      root: "Explore Chengdu, the capital of Sichuan Province. Discover its rich history, cultural heritage, giant pandas, and famous Sichuan hotpot."
    },
    province: "Sichuan Province",
    region: Southwest,
    visa240: true,
    staying240: "Chengdu, Luzhou, Suining, Leshan, Ya'an, Ziyang, Zigong, Deyang, Neijiang, Yibin, Meishan",
    rank: { root: 3, ja: 6, ko: 7 },
    link: "/chengdu",
    location: "30.66551233407497, 104.06935433113577",
    tags: [Megacity, Cuisine, Panda, Tech],
    slogan: { root: "Panda Haven & Sichuan Flavor", ja: "パンダ保護区＆四川料理" },
    introduce: {
      root: "Chengdu is the capital city of Sichuan Province, renowned for its long history, rich cultural heritage, and livable environment. It is one of the birthplaces of ancient Shu civilization. The Chengdu Research Base of Giant Panda Breeding is a popular destination for visitors.",
      ja: "成都は四川省の省都で、長い歴史、豊かな文化遺産、そして住みやすい環境で知られています。古代蜀文明の発祥地の一つでもあります。成都大熊猫繁育研究基地（ジャイアントパンダ保護繁殖研究センター）は訪問者の人気スポットです。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Pleasant climate, many visitors.", ja: "快適な気候と多くの訪問者" },
    bestTime: {
      root: {
        peakTime: { title: "Dec – Fen. Jun – Aug", description: "Most popular and higher prices" },
        offTime: { title: "Mar – Jun, Sep – Nov", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "12月 – 2月, 6月 – 8月", description: "最も人気があり、料金が高い" },
        offTime: { title: "3月 – 6月, 9月 – 11月", description: "訪問者が少なく、料金も安い" }
      }
    },
    climate: "Fewer visitors, lower costs.",
    area: 14335,
    population: 21,
    ports: [
      {
        title: {
          root: "Chengdu Shuangliu International Airport (CTU)",
          ja: "成都双流国際空港 (CTU)"
        },
        city: { root: "Chengdu", ja: "成都" },
        distance: 11,
        duration: 31,
        hour240: true
      },
      {
        title: { root: "Chengdu Tianfu International (TFU)", ja: "成都天府国際空港 (TFU)" },
        city: { root: "Chengdu", ja: "成都" },
        distance: 47,
        duration: 78,
        hour240: true
      },
      {
        title: { root: "Mianyang Nanjiao Airport (MIG)", ja: "綿陽南郊空港 (MIG)" },
        city: { root: "Mianyang", ja: "綿陽" },
        distance: 114,
        duration: 120
      },
      {
        title: {
          root: "Chongqing Jiangbei International Airport (CKG)",
          ja: "重慶江北国際空港 (CKG)"
        },
        city: { root: "Chongqing", ja: "重慶" },
        distance: 264,
        duration: 219,
        hour240: true
      }
    ]
  },
  {
    name: "Fuzhou",
    nameLocale: { ja: "福州", root: "Fuzhou" },
    nameChinese: "福州",
    namePinyin: "fú zhōu",
    description: {
      ja: "福建省の省都福州。温暖な気候と緑豊かな自然が広がる都市。伝統的な工芸品や地元グルメを堪能。三坊七巷の古民家カフェで茉莉花茶を一服。近郊の武夷山で茶畑ハイキング。",
      root: "Discover Fuzhou, the capital of Fujian Province. Experience its lush greenery, warm climate, and historical landmarks like Sanfang Qixiang."
    },
    province: "Fujian Province",
    region: East,
    visa240: true,
    staying240: "Fujian Province",
    link: "/fuzhou",
    location: "26.062473807816094, 119.29607074753062",
    tags: [Seaside],
    slogan: { root: "Jasmine Tea Capital & Min River Views", ja: "ジャスミン茶の都＆閩江" },
    introduce: {
      root: "Fuzhou, situated at the eastern end of central Fujian Province and adjacent to the Taiwan Strait to the east, enjoys a warm and humid climate, characterized by its lush greenery throughout all four seasons.",
      ja: "福州は福建省中部の東端に位置し、東側は台湾海峡に接しています。温暖で湿潤な気候を享受しており、四季を通じて豊かな緑が特徴です。"
    },
    nickname: { root: ["Hockchew", "Foochow"], ja: ["Hockchew", "Foochow"] },
    geography: {
      root: "Southeastern coast of China, on the western shore of the Taiwan Strait",
      ja: "中国南東部海岸、台湾海峡の西岸"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jul – Oct", description: "Most popular and higher prices" },
        offTime: { title: "Feb – May", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "7月 – 10月", description: "最も人気があり、料金も高い" },
        offTime: { title: "2月 – 5月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical maritime monsoon climate",
    area: 11968.53,
    population: 8,
    ports: [
      {
        title: { root: "Fuzhou Changle International Airport (FOC)", ja: "福州長楽国際空港 (FOC)" },
        city: { root: "Fuzhou", ja: "福州" },
        distance: 39,
        duration: 57,
        hour240: true
      },
      {
        title: { root: "Xiamen Gaoqi International Airport (XMN)", ja: "厦门高崎国際空港 (XMN)" },
        city: { root: "Xiamen", ja: "厦门" },
        distance: 206,
        duration: 169,
        hour240: true
      }
    ]
  },
  {
    name: "Wuyishan",
    nameLocale: { ja: "武夷山", root: "Wuyishan" },
    nameChinese: "武夷山",
    namePinyin: "wǔ yí shān",
    description: {
      ja: "福建省北部に位置し、壮麗な自然景観と豊かな茶文化が魅力の観光地。武夷山の渓谷下り竹筏体験が人気。大紅袍茶の茶摘み＆焙煎体験ツアーあり。",
      root: "Discover Wuyishan, celebrated for its breathtaking natural scenery, chinese tea culture, and historical significance."
    },
    province: "Fujian Province",
    region: East,
    visa240: true,
    staying240: "Fujian Province",
    link: "/wuyishan",
    location: "27.748952972077234, 118.02591326336834",
    tags: [Nature],
    slogan: { root: "Wulong Tea Trails & Nine Bend Rafting", ja: "ウーロン茶道＆九曲下り" },
    introduce: {
      root: "Wuyishan is renowned for its stunning natural scenery, rich tea culture, and historical significance. The city is home to the famous Wuyi Mountains, a UNESCO World Heritage Site known for its picturesque landscapes, including towering cliffs, meandering rivers, and dense forests. Visitors can explore ancient tea plantations, hike through scenic trails, and experience the tranquility of this natural wonder.",
      ja: "武夷山はその驚異的な自然景観、豊かな茶文化、歴史的重要性で知られています。この都市には有名な武夷山があり、ユネスコ世界遺産に登録されているこの地域は、雄大な断崖、蛇行する川、濃密な森林など、絵のように美しい風景が特徴です。訪問者は古代の茶園を探索したり、景色の美しいハイキングトレイルを歩いたり、この自然の奇跡の静けさを体験することができます。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The northern part of Fujian Province, bordering Jiangxi Province to the west.",
      ja: "武夷山は中国茶の聖地。大紅袍（だいこうほう）など名高い茶葉を飲み比べしながら自然を満喫。"
    },
    bestTime: {
      root: {
        peakTime: { title: "Apr, Oct – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Mar, Jul", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "4月、10月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 3月、7月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 2937,
    population: 25,
    ports: [
      {
        title: { root: "Wuyishan Airport (WUS)", ja: "武夷山空港 (WUS)" },
        city: { root: "Wuyishan", ja: "武夷山" },
        distance: 6,
        duration: 22,
        hour240: true
      },
      {
        title: { root: "Shangrao Sanqingshan Airport (SQD)", ja: "上饶三清山空港 (SQD)" },
        city: { root: "Shangrao", ja: "上饶" },
        distance: 69,
        duration: 93
      },
      {
        title: {
          root: "Nanchang Changbei International Airport (KHN)",
          ja: "南昌昌北国際空港 (KHN)"
        },
        city: { root: "Nanchang", ja: "南昌" },
        distance: 241,
        duration: 218,
        hour240: true
      }
    ]
  },
  {
    name: "Quanzhou",
    nameLocale: { ja: "泉州", root: "Quanzhou" },
    nameChinese: "泉州",
    namePinyin: "quán zhōu",
    description: {
      ja: "泉州は海上シルクロードの起点。多様な宗教遺跡や港町の歴史を探訪し、古代交易の栄華を辿る。開元寺の東西塔で海上貿易の歴史を体感。古代船博物館で沈没船の財宝に驚嘆。",
      root: "Discover Quanzhou, a historic city on the southeastern coast of Fujian Province. Explore its maritime heritage, local culture, and ancient Silk Road."
    },
    province: "Fujian Province",
    region: East,
    visa240: true,
    staying240: "Fujian Province",
    link: "/quanzhou",
    location: "24.86945357445439, 118.65062393193539",
    tags: [Seaside],
    slogan: { root: "Maritime Silk Road & Spice Markets", ja: "海のシルクロード＆香辛料市" },
    introduce: {
      root: "Quanzhou, located on the southeastern coast of Fujian Province, is a historic and culturally rich city with a long maritime tradition. Known as one of the starting points of the Maritime Silk Road, Quanzhou has been a hub for trade and cultural exchange for centuries. The city is home to numerous temples, ancient architecture, and vibrant markets, offering visitors a glimpse into its diverse heritage and thriving modern life. Visitors can explore the famous Kaiyuan Temple, Qingjing Mosque, and the ancient Stone Lake Port, which played a crucial role in China's maritime history. Quanzhou is also renowned for its unique local cuisine, traditional arts, and crafts, making it a must-visit destination for those interested in Chinese culture and history.",
      ja: "泉州は福建省の南東部海岸に位置する歴史と文化が豊かな都市で、長い海運の伝統を持っています。海上シルクロードの出発点の一つとして知られる泉州は、何世紀にもわたって貿易と文化交流の中心地でした。この都市には多くの寺院、古代建築、活気ある市場があり、訪問者に多様な遺産と活気に満ちた現代生活を垣間見ることができます。有名な開元寺、清浄寺、そして中国の海運史上重要な役割を果たした石湖港などを訪れることができます。泉州はまた、独特な地方料理、伝統芸能、工芸品でも知られており、中国文化や歴史に興味がある方にとって欠かせない観光地です。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "The southeastern coast of Fujian Province.", ja: "福建省南東部海岸" },
    bestTime: {
      root: {
        peakTime: { title: "Sep – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Mar, May", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "9月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 3月、5月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 11245,
    population: 9,
    ports: [
      {
        title: {
          root: "Quanzhou Jinjiang International Airport (JJN)",
          ja: "泉州晋江国際空港 (JJN)"
        },
        city: { root: "Quanzhou", ja: "泉州" },
        distance: 11,
        duration: 45,
        hour240: true
      },
      {
        title: { root: "Xiamen Gaoqi International Airport (XMN)", ja: "厦门高崎国際空港 (XMN)" },
        city: { root: "Xiamen", ja: "厦门" },
        distance: 66,
        duration: 83,
        hour240: true
      }
    ]
  },
  {
    name: "Xiamen",
    nameLocale: { ja: "厦門", root: "Xiamen" },
    nameChinese: "厦门",
    namePinyin: "xià mén",
    description: {
      ja: "鼓浪屿（コロンユ）島の静かな雰囲気と美しい海辺の景観が魅力。カフェ巡りや古い洋館を訪ねて。フーロン茶葉市場で高級ウーロン茶を仕入れ。",
      root: "Discover Xiamen, a beautiful coastal city in southeastern China. Experience its pleasant climate, stunning scenery, and iconic landmarks like Gulangyu Island."
    },
    province: "Fujian Province",
    region: East,
    visa240: true,
    staying240: "Fujian Province",
    rank: { root: 13, ja: 18 },
    link: "/xiamen",
    location: "24.449331634652314, 118.0891195524457",
    tags: [Seaside, Cuisine, Shopping, Island],
    slogan: {
      root: "Island Gardens & Colonial Vibes",
      ja: "コロニアル風リゾート島"
    },
    introduce: {
      root: 'Xiamen boasts unique natural coastal scenery. The coastline of Xiamen Island is picturesque, making it an excellent place for cycling and walking. Gulangyu Island, known as the "Island of Music," features many European-style buildings and attracts numerous visitors with its natural environment and tranquil lifestyle.',
      ja: "厦门は独特な沿岸景観を誇り、島の海岸線は絵のように美しく、自転車や散歩に最適な場所です。音楽の島として知られる鼓浪屿には、多くの欧風建築があり、自然環境と静かな生活スタイルで多くの観光客を引きつけています。"
    },
    nickname: { root: ["Amoy", "Hsiamen"], ja: [] },
    geography: {
      root: "Southeastern Fujian, west coast of the Taiwan Strait",
      ja: "福建省南東部、台湾海峡西岸"
    },
    bestTime: {
      root: {
        peakTime: { title: "Apr – Oct", description: "Pleasant climate, beautiful scenery." },
        offTime: {
          title: "Nov – Mar",
          description: "Cooler weather, fewer tourists, off-season prices."
        }
      },
      ja: {
        peakTime: { title: "4月 – 10月", description: "気候が快適で、景色が美しい。" },
        offTime: {
          title: "11月 – 3月",
          description: "気温が低く、観光客が少なく、オフシーズン料金が適用されます。"
        }
      }
    },
    climate: "Warm temperate monsoon climate",
    area: 1700.61,
    population: 5,
    ports: [
      {
        title: { root: "Xiamen Gaoqi International Airport (XMN)", ja: "厦门高崎国際空港 (XMN)" },
        city: { root: "Xiamen", ja: "厦门" },
        distance: 8,
        description: {
          root: "Xiamen Gaoqi International Airport's international routes cover four continents, reaching 45 international destinations in 25 countries and regions. The network connects major cities in Asia, as well as key global hubs such as Paris, London, Frankfurt, Amsterdam, Los Angeles, San Francisco, Vancouver, Seattle, Sydney, and Melbourne.",
          ja: "厦门高崎国際空港の国際路線は四大陸をカバーし、25カ国および地域の45つの国際目的地に到達しています。ネットワークはアジア的主要都市だけでなく、パリ、ロンドン、フランクフルト、アムステルダム、ロサンゼルス、サンフランシスコ、バンクーバー、シアトル、シドニー、メルボルンなどの主要な世界のハブとも接続しています。"
        },
        duration: 17,
        hour240: true
      },
      {
        title: { root: "Quanzhou Jinjiang International Airport", ja: "泉州晋江国際空港" },
        city: { root: "Quanzhou", ja: "泉州" },
        distance: 61,
        duration: 80,
        hour240: true
      },
      {
        title: { root: "Fuzhou Changle International Airport (FOC)", ja: "福州長楽国際空港 (FOC)" },
        city: { root: "Fuzhou", ja: "福州" },
        distance: 226,
        duration: 186,
        hour240: true
      },
      {
        title: { root: "Jieyang Chaoshan Airport (SWA)", ja: "揭阳潮汕空港 (SWA)" },
        city: { root: "Shantou", ja: "汕头" },
        distance: 190,
        duration: 183,
        hour240: true
      },
      {
        title: { root: "Port of Xiamen", ja: "厦门港" },
        city: { root: "Xiamen", ja: "厦门" },
        distance: 20,
        description: {
          root: "Xiamen Port has a highly developed international shipping network, with 107 international routes connecting to 142 ports in 50 countries worldwide.",
          ja: "厦门港は非常に発達した国際航路網を持ち、107の国際航路があり、世界中の50カ国の142の港に接続しています。"
        },
        duration: 40,
        hour240: true
      }
    ]
  },
  {
    name: "Jinan",
    nameLocale: { ja: "済南", root: "Jinan" },
    nameChinese: "济南",
    namePinyin: "jǐ nán",
    description: {
      ja: "「泉の都」として知られる济南。72の名泉や大明湖周辺で悠久の歴史と美しい水景を体験。趵突泉公園で名水を使った茶会体験。黄河クルーズで夕陽に染まる大河を満喫。",
      root: `Explore Jinan, the "City of Springs." Discover its cultural heritage, landmarks, and natural beauty, including Baotu Spring and Thousand Buddha Mountain.`
    },
    province: "Shandong Province",
    region: East,
    visa240: true,
    staying240: "Shandong Province",
    link: "/jinan",
    location: "36.66263930966556, 117.06137480963096",
    tags: [Nature],
    slogan: { root: "Springwater Banquets & Daming Lake", ja: "名水料理＆大明湖" },
    introduce: {
      root: 'Jinan is a city with a long history and rich cultural heritage, known as the "City of Springs." Baotu Spring, hailed as the "Number One Spring under Heaven," features crystal-clear water that flows year-round. On average, it discharges 70,000 cubic meters of water daily, maintaining a constant temperature of around 18°C throughout the year.',
      ja: "济南は長い歴史と豊かな文化遺産を持つ都市で、「泉の都」として知られています。趵突泉（バオトゥ・クエン）は「天下第一泉」と呼ばれ、年間を通じてクリスタルのように透明な水が流れ出ています。平均して一日に約70,000立方メートルの水を排出し、年間を通して約18°Cの一定温度を保っています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The central part of Shandong Province, on the southern edge of the North China Plain.",
      ja: "山東省中央部、華北平原の南部縁"
    },
    bestTime: {
      root: {
        peakTime: { title: "Aug – Nov", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Mar, Jun", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "8月 – 11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 3月、6月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Temperate monsoon climate",
    area: 10244,
    population: 9,
    ports: [
      {
        title: { root: "Jinan Yaoqiang International Airport (TNA)", ja: "济南遥墙国際空港 (TNA)" },
        city: { root: "Jinan", ja: "济南" },
        distance: 24,
        duration: 44,
        hour240: true
      }
    ],
    rank: { root: Infinity, ja: Infinity, ko: 13 }
  },
  {
    name: "Weihai",
    nameLocale: { ja: "威海", root: "Weihai" },
    nameChinese: "威海",
    namePinyin: "wēi hǎi",
    description: {
      ja: "山東省の美しい海辺の都市威海。新鮮なシーフードと豊かな海運遺産を訪ねる旅に最適。劉公島で日清戦争の史跡巡り。新鮮なウニを使った海鮮丼が名物。",
      root: "Explore Weihai, a coastal city in eastern Shandong Province. Experience its rich maritime history, scenic coastal landscapes, and historical sites."
    },
    province: "Shandong Province",
    region: East,
    visa240: true,
    staying240: "Shandong Province",
    link: "/weihai",
    location: "37.50733988570901, 122.12161740464789",
    tags: [Seaside],
    slogan: { root: "Pristine Beaches & Swan Migrations", ja: "白鳥飛来＆清浄ビーチ" },
    introduce: {
      root: `Weihai, located in the eastern part of Shandong Province, is a coastal city known for its beautiful beaches, fresh seafood, and rich maritime history. Often referred to as the "Pearl of the Yellow Sea," Weihai offers a perfect blend of natural beauty and modern amenities. Visitors can explore historic sites like the Liu Gong Island, enjoy scenic coastal drives, and relax on pristine beaches. The city's mild climate and clean environment make it a popular destination for both tourists and retirees. Weihai is also famous for its well-preserved natural landscapes, including parks, forests, and wetlands, which provide ample opportunities for outdoor activities such as hiking, cycling, and bird watching.`,
      ja: "威海は山東省の東部に位置する海沿いの都市で、美しいビーチ、新鮮なシーフード、豊かな海運歴史で知られています。黄海の「真珠」と呼ばれることもある威海は、自然の美しさと現代的な設備が調和した理想的な場所です。訪問者は劉公島などの歴史的な名所を訪れたり、海岸線のドライブを楽しんだり、清潔なビーチでリラックスしたりできます。市内の穏やかな気候と清潔な環境は、観光客や引退者に人気があり、また、公園、森林、湿地など、保存状態の良い自然景観も豊富で、ハイキング、サイクリング、バードウォッチングなどの屋外活動にも最適です。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The eastern tip of the Shandong Peninsula, bordering the Yellow Sea to the east.",
      ja: "山東半島の東端、東は黄海に面している"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jun, Aug – Oct", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Apr", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "6月、8月 – 10月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 4月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Temperate monsoon climate",
    area: 5797,
    population: 3,
    ports: [
      {
        title: {
          root: "Weihai Daxueba International Airport (WEH)",
          ja: "威海大水泊国際空港 (WEH)"
        },
        city: { root: "Weihai", ja: "威海" },
        distance: 37,
        duration: 54,
        hour240: true
      },
      {
        title: { root: "Yantai Penglai International Airport (YNT)", ja: "烟台蓬莱国際空港 (YNT)" },
        city: { root: "Yantai", ja: "烟台" },
        distance: 101,
        duration: 111,
        hour240: true
      }
    ],
    rank: { root: Infinity, ja: Infinity, ko: 6 }
  },
  {
    name: "Yantai",
    nameLocale: { ja: "煙台", root: "Yantai" },
    nameChinese: "烟台",
    namePinyin: "yān tái",
    description: {
      ja: "中国有数のワイン産地として知られる烟台。美しいビーチと葡萄畑が広がり、ロマンチックなリゾート気分を満喫。蓬莱閣で八仙人伝説を追体験。ワイナリー見学＆テイスティングツアーが人気。",
      root: "Explore Yantai, a vibrant coastal city in China known for its beautiful beaches, fresh seafood, and thriving wine industry."
    },
    province: "Shandong Province",
    region: East,
    visa240: true,
    staying240: "Shandong Province",
    link: "/yantai",
    location: "37.5349161131045, 121.39846702607153",
    tags: [Seaside],
    slogan: { root: "Wine Coast & Pagoda Sunset Views", ja: "ワイン海岸＆灯台夕景" },
    introduce: {
      root: 'Yantai is a vibrant coastal city known for its beautiful beaches, fresh seafood, and thriving wine industry. Often referred to as the "Oriental Wine City," Yantai offers visitors a perfect blend of natural beauty and modern amenities.',
      ja: "烟台は美しいビーチ、新鮮なシーフード、そして活気あるワイン産業で知られる活気ある海沿いの都市です。しばしば「東方のワインの街」と呼ばれ、烟台は自然の美しさと現代的な設備が調和した理想的な場所を提供します。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Situated on the northern coast of the Shandong Peninsula, bordering the Bohai Sea and Yellow Sea.",
      ja: "山東半島の北海岸に位置し、渤海と黄海に面している"
    },
    bestTime: {
      root: {
        peakTime: { title: "Aug – Nov", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Apr", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "8月 – 11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 4月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Temperate monsoon climate",
    area: 13745,
    population: 7,
    ports: [
      {
        title: { root: "Yantai Penglai International Airport (YNT)", ja: "烟台蓬莱国際空港 (YNT)" },
        city: { root: "Yantai", ja: "烟台" },
        distance: 47,
        duration: 62,
        hour240: true
      },
      {
        title: {
          root: "Weihai Daxueba International Airport (WEH)",
          ja: "威海大水泊国際空港 (WEH)"
        },
        city: { root: "Weihai", ja: "威海" },
        distance: 76,
        duration: 98,
        hour240: true
      },
      {
        title: {
          root: "Qingdao Jiaodong International Airport (TAO)",
          ja: "青岛胶东国際空港 (TAO)"
        },
        city: { root: "Qingdao", ja: "青岛" },
        distance: 171,
        duration: 157,
        hour240: true
      }
    ],
    rank: { root: Infinity, ja: Infinity, ko: 11 }
  },
  {
    name: "Qingdao",
    nameLocale: { ja: "青島", root: "Qingdao" },
    nameChinese: "青岛",
    namePinyin: "qīng dǎo",
    description: {
      ja: "ドイツ様式の建築と爽やかな海岸線が魅力の青島。毎年開催される国際ビアフェスティバルは必見。ビール博物館で醸造工程を学びつつ試飲。八大関の異人館街でヨーロッパ情緒を満喫。",
      root: "Discover Qingdao, a famous coastal city in Shandong Province, known for its beautiful coastline, pleasant climate, and the annual International Beer Festival."
    },
    province: "Shandong Province",
    region: East,
    visa240: true,
    staying240: "Shandong Province",
    rank: { root: 9, ja: 8, ko: 1 },
    link: "/qingdao",
    location: "36.05939270079982, 120.33118066123022",
    tags: [Seaside],
    slogan: { root: "Tsingtao Beer & Golden Beaches", ja: "ビール発祥地＆海水浴" },
    introduce: {
      root: "Qingdao is located along the coast of the Yellow Sea and is renowned for its beautiful coastline and pleasant climate. It is also beloved by tourists for its unique German-style architecture. Qingdao Beer is a well-known beer brand, and the annual Qingdao International Beer Festival held every summer attracts a large number of domestic and international visitors.",
      ja: "青島は黄海の沿岸に位置し、美しい海岸線と快適な気候で知られています。また、独特なドイツ様式の建築物も観光客に愛されています。青島ビールは世界的に有名なビールブランドであり、毎夏開催される「青島国際ビール祭」は多くの国内外の観光客を引きつけています。"
    },
    nickname: { root: ["Tsingtao"], ja: ["チンタオ"] },
    geography: {
      root: "Southeastern Shandong Peninsula, along the coast of the Yellow Sea",
      ja: "山東半島南東部、黄海沿岸"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Jun – Aug",
          description: "Qingdao's summer is cool and pleasant, with refreshing sea breezes, making it an ideal retreat from the heat."
        },
        offTime: { title: "Dec – Mar", description: "The winter in Qingdao is relatively cold." }
      },
      ja: {
        peakTime: {
          title: "6月 – 8月",
          description: "青島の夏は涼しくて快適で、爽やかな海風が吹き、暑さから逃れる理想的な場所です。"
        },
        offTime: { title: "12月 – 3月", description: "青島の冬は比較的寒いです。" }
      }
    },
    climate: "Temperate monsoon climate",
    area: 11293,
    population: 10,
    ports: [
      {
        title: {
          root: "Qingdao Jiaodong International Airport (TAO)",
          ja: "青島胶東国際空港 (TAO)"
        },
        city: { root: "Qingdao", ja: "青島" },
        distance: 42,
        description: {
          root: "Qingdao Jiaodong International Airport has numerous international routes connecting major cities in Asia, Europe, North America, and other regions.",
          ja: "青島胶東国際空港はアジア、ヨーロッパ、北アメリカなどの主要都市を結ぶ多くの国際路線があります。"
        },
        duration: 70,
        hour240: true
      },
      {
        title: { root: "Yantai Penglai International Airport (YNT)", ja: "煙台蓬莱国際空港 (YNT)" },
        city: { root: "Yantai", ja: "煙台" },
        distance: 185,
        duration: 148,
        hour240: true
      },
      {
        title: { root: "Weihai Airport (WEH)", ja: "威海空港 (WEH)" },
        city: { root: "Weihai", ja: "威海" },
        distance: 206,
        duration: 178,
        hour240: true
      },
      {
        title: { root: "Jinan Yaoqiang International Airport (TNA)", ja: "济南遥墙国際空港 (TNA)" },
        city: { root: "Jinan", ja: "济南" },
        distance: 296,
        duration: 213,
        hour240: true
      },
      {
        title: { root: "Port of Qingdao", ja: "青島港" },
        city: { root: "Jinan", ja: "青島" },
        distance: 5,
        description: {
          root: "Qingdao Port is one of the most important international ports in Northern China, with a well-developed network of international shipping routes connecting it to major ports around the world.",
          ja: "青島港は中国北部の重要な国際港の一つで、世界中の主要港と結ばれた発達した国際航路ネットワークを持っています。"
        },
        duration: 15,
        hour240: true
      }
    ]
  },
  {
    name: "Nanning",
    nameLocale: { ja: "南寧", root: "Nanning" },
    nameChinese: "南宁",
    namePinyin: "nán níng",
    description: {
      ja: "広西チワン族自治区の省都南寧。多様な民族文化と豊かな緑が広がる南国情緒あふれる都市。青秀山公園で亜熱帯植物観察。夜市で酸笋入り螺蛳粉に挑戦。",
      root: `Discover Nanning, the capital of Guangxi. Explore its lush greenery, rich ethnic culture, and vibrant tourism, including Qingxiushan Park and Nanning Zoo.`
    },
    province: "Guangxi Zhuang Autonomous Region",
    region: South,
    visa240: true,
    staying240: "Nanning, Guilin, Beihai, Qinzhou, Yulin, Hechi, Liuzhou, Wuzhou, Fangchenggang, Guigang, Hezhou, Laibin",
    link: "/nanning",
    location: "22.804057182200715, 108.29634313282932",
    tags: [Minority],
    slogan: {
      root: "ASEAN Gateway & Tropical Canals",
      ja: "ASEAN玄関＆緑の回廊"
    },
    introduce: {
      root: "Nanning, the capital of Guangxi Zhuang Autonomous Region, is a vibrant city known for its lush greenery, rich ethnic culture, and strategic importance as a gateway to Southeast Asia. With a mix of modern development and traditional charm, Nanning offers visitors a unique blend of natural beauty and cultural experiences.",
      ja: "南寧は広西チワン族自治区の省都であり、豊かな緑と多彩な民族文化、東南アジアへのゲートウェイとしての戦略的重要性で知られる活気ある都市です。現代的な発展と伝統的な魅力が融合し、自然の美しさと文化的な体験を提供する独特な街です。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Situated in the southern part of Guangxi.",
      ja: "広西チワン族自治区南部に位置"
    },
    bestTime: {
      root: {
        peakTime: { title: "Sep – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Mar, Jun", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "9月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 3月、6月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Tropical monsoon climate",
    area: 22112,
    population: 9,
    ports: [
      {
        title: { root: "Nanning Wuxu International Airport (NNG)", ja: "南宁吴圩国際空港 (NNG)" },
        city: { root: "Nanning", ja: "南宁" },
        distance: 31,
        duration: 38,
        hour240: true
      },
      {
        title: { root: "Beihai Fucheng International Airport (BHY)", ja: "北海福城国際空港 (BHY)" },
        city: { root: "Beihai", ja: "北海" },
        distance: 171,
        duration: 148,
        hour240: true
      },
      {
        title: { root: "Liuzhou Bailian Airport (LZH)", ja: "柳州白莲机场 (LZH)" },
        city: { root: "Liuzhou", ja: "柳州" },
        distance: 187,
        duration: 158
      },
      {
        title: { root: "Yulin Fumian Airport (YLX)", ja: "玉林福绵机场 (YLX)" },
        city: { root: "Yulin", ja: "玉林" },
        distance: 185,
        duration: 177
      }
    ],
    rank: { root: Infinity, ja: Infinity, ko: 20 }
  },
  {
    name: "Guilin",
    nameLocale: { ja: "桂林", root: "Guilin" },
    nameChinese: "桂林",
    namePinyin: "guì lín",
    description: {
      ja: "漓江の美しい風景で知られる桂林。石灰岩地形や伝統的な漁舟が織りなす詩的な景色を堪能。漓江下りで20元紙幣の風景を実見。鍾乳洞探検後は田舎料理の啤酒魚を賞味。",
      root: "Discover Guilin, famed for its karst mountains. Experience its rich history, scenic Li River cruises, and iconic landscapes like Elephant Trunk Hill."
    },
    province: "Guangxi Zhuang Autonomous Region",
    region: South,
    visa240: true,
    staying240: "Nanning, Guilin, Beihai, Qinzhou, Yulin, Hechi, Liuzhou, Wuzhou, Fangchenggang, Guigang, Hezhou, Laibin",
    link: "/guilin",
    location: "25.2730961767543, 110.29105818260975",
    tags: [Minority, Nature],
    slogan: {
      root: "Karst Peaks & Li River Serenity",
      ja: "水墨画的な山水風景"
    },
    introduce: {
      root: "Guilin, located in the Li River basin and surrounded by beautiful karst mountains, is a city that combines natural beauty and historical culture. Whether you love natural scenery or history, you will find something to enjoy here.",
      ja: "桂林は漓江流域に位置し、美しいカルスト山々に囲まれた都市です。自然の美しさと歴史文化が融合した場所で、自然風景や歴史を愛する人なら誰でも楽しめるでしょう。"
    },
    nickname: { root: [], ja: [] },
    geography: { root: "Northeastern Guangxi", ja: "広西チワン族自治区北東部" },
    bestTime: {
      root: {
        peakTime: { title: "Apr, Oct – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Mar, Jul", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "4月、10月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 3月、7月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 27800,
    population: 4,
    ports: [
      {
        title: {
          root: "Guilin Liangjiang International Airport (KWL)",
          ja: "桂林两江国际机场 (KWL)"
        },
        city: { root: "Guilin", ja: "桂林" },
        distance: 26,
        duration: 59,
        hour240: true
      },
      {
        title: { root: "Liuzhou Bailian Airport (LZH)", ja: "柳州白莲机场 (LZH)" },
        city: { root: "Liuzhou", ja: "柳州" },
        distance: 150,
        duration: 151
      },
      {
        title: { root: "Shaoyang Wugang Airport (WGN)", ja: "邵阳武冈机场 (WGN)" },
        city: { root: "Shaoyang", ja: "邵阳" },
        distance: 172,
        duration: 187
      },
      {
        title: { root: "Lingling Airport (LLF)", ja: "零陵机场 (LLF)" },
        city: { root: "Yongzhou", ja: "永州" },
        distance: 177,
        duration: 162
      }
    ]
  },
  {
    name: "Beihai",
    nameLocale: { ja: "北海", root: "Beihai" },
    nameChinese: "北海",
    namePinyin: "běi hǎi",
    description: {
      ja: "古代海上シルクロードの拠点北海。白い砂浜とエメラルドグリーンの海が広がるリゾート都市。銀灘で朝日を見ながら海水浴。ベトナム国境近くの東興で国際市場散策。",
      root: `Discover Beihai, a scenic seaside city with a rich history. Experience its Maritime Silk Road origins, stunning beaches, and vibrant tourism.`
    },
    province: "Guangxi Zhuang Autonomous Region",
    region: South,
    visa240: true,
    staying240: "Nanning, Guilin, Beihai, Qinzhou, Yulin, Hechi, Liuzhou, Wuzhou, Fangchenggang, Guigang, Hezhou, Laibin",
    link: "/beihai",
    location: "21.45312321702932, 109.10177811373111",
    tags: [Seaside, Island],
    slogan: { root: "Silver Sands & Pearl Diving Legacy", ja: "真珠の浜＆南洋風情" },
    introduce: {
      root: "Beihai is a picturesque seaside city known for its beautiful natural scenery. With a long history, it was one of the important starting points of the ancient Maritime Silk Road.",
      ja: "北海は美しい自然景観で知られる風光明媚な海辺の街です。長い歴史を持ち、古代の海上シルクロードの重要な出発点の一つでした。"
    },
    nickname: { root: ["Pakhoi"], ja: ["Pakhoi"] },
    geography: {
      root: "Southeastern coastal region of Guangxi",
      ja: "広西チワン族自治区南東部沿岸地域"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jul – Sep, Dec", description: "Most popular and higher prices" },
        offTime: { title: "Mar – Jun", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "7月 – 9月、12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "3月 – 6月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical marine monsoon climate",
    area: 3337,
    population: 1,
    ports: [
      {
        title: { root: "Beihai Fucheng International Airport (BHY)", ja: "北海福城国際空港 (BHY)" },
        city: { root: "Beihai", ja: "北海" },
        distance: 19,
        duration: 44,
        hour240: true
      },
      {
        title: { root: "Nanning Wuxu International Airport (NNG)", ja: "南宁吴圩国際空港 (NNG)" },
        city: { root: "Nanning", ja: "南宁" },
        distance: 158,
        duration: 151,
        hour240: true
      },
      {
        title: { root: "Beihai Port", ja: "北海港" },
        city: { root: "Beihai", ja: "北海" },
        distance: 15,
        duration: 31,
        hour240: true
      }
    ]
  },
  {
    name: "Shenyang",
    nameLocale: { ja: "瀋陽", root: "Shenyang" },
    nameChinese: "洛阳",
    namePinyin: "luò yáng",
    description: {
      ja: "中国東北部最大の都市瀋陽。清王朝の歴史を残す故宮や豊かな自然景観を探索。清朝故宮で満州族の文化に触れる。老辺餃子館の水餃子は皮が驚くほど薄い！",
      root: `Discover Shenyang, the capital of Liaoning. Explore its historical landmarks, including the Imperial Palace, and experience Northeast China's largest city.`
    },
    province: "Liaoning Province",
    region: Northeast,
    visa240: true,
    staying240: "Liaoning Province",
    link: "/shenyang",
    location: "41.795487650862974, 123.42344136808913",
    tags: [HeritageSites],
    slogan: {
      root: "Imperial Legacy & Industrial Heritage",
      ja: "清朝故宮＆工業遺産"
    },
    introduce: {
      root: "Shenyang not only has a long history and rich cultural heritage but also is a modern city that blends traditional and contemporary elements.",
      ja: "沈陽は長い歴史と豊かな文化遺産を持ちつつ、伝統的な要素と現代的な要素が融合した近代都市でもあります。"
    },
    nickname: { root: ["Mukden"], ja: ["Mukden"] },
    geography: {
      root: "Southern Northeast China, central Liaoning Province",
      ja: "中国東北南部、遼寧省中央部"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jun, Aug – Oct", description: "Most popular and higher prices" },
        offTime: { title: "Feb – May", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "6月、8月 – 10月", description: "最も人気があり、料金も高い" },
        offTime: { title: "2月 – 5月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Temperate humid continental climate",
    area: 12860,
    population: 9,
    ports: [
      {
        title: {
          root: "Shenyang Taoxian International Airport (SHE)",
          ja: "沈陽桃仙国際空港 (SHE)"
        },
        city: { root: "Shenyang", ja: "沈陽" },
        distance: 18,
        duration: 37,
        hour240: true
      }
    ],
    rank: { root: 12, ja: 11, ko: 8 }
  },
  {
    name: "Zhengzhou",
    nameLocale: { ja: "鄭州", root: "Zhengzhou" },
    nameChinese: "郑州",
    namePinyin: "zhèng zhōu",
    description: {
      ja: "河南省の省都鄭州。中国中部の交通ハブであり、古都としての歴史的名所が点在する都市。少林寺でカンフー実演を見学。近郊の黄河景勝区で黄土高原の絶景を撮影。",
      root: "Discover Zhengzhou, the capital of Henan Province. Explore its central China transportation hub, rich history, and iconic landmarks like Shaolin Temple."
    },
    province: "Henan Province",
    region: Central,
    visa240: true,
    staying240: "Henan Province",
    link: "/zhengzhou",
    location: "34.75152796177038, 113.68307864664126",
    tags: [AncienCapital],
    slogan: { root: "Shaolin Kung Fu & Central Crossroads", ja: "少林寺武道＆中原の要" },
    introduce: {
      root: "Zhengzhou is the capital city of Henan Province and is also a modern Megacity with a long history and developed economy.",
      ja: "鄭州は河南省の省都であり、長い歴史と発達した経済を持つ現代的な大都市です。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The boundary between the middle and lower Yellow River",
      ja: "黄河流域の中流と下流の境界"
    },
    bestTime: {
      root: {
        peakTime: { title: "Apr, Sep – Nov", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Feb, May – Jun", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "4月、9月 – 11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 2月、5月 – 6月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Temperate continental monsoon climate",
    area: 7567,
    population: 13,
    ports: [
      {
        title: {
          root: "Zhengzhou Xinzheng International Airport (CGO)",
          ja: "鄭州新鄭国際空港 (CGO)"
        },
        city: { root: "Zhengzhou", ja: "鄭州" },
        distance: 32,
        duration: 46,
        hour240: true
      },
      {
        title: { root: "Luoyang Beijiao Airport (LYA)", ja: "洛陽北郊空港 (LYA)" },
        city: { root: "Luoyang", ja: "洛陽" },
        distance: 113,
        duration: 103
      },
      {
        title: { root: "Heze Mudan Airport (HZA)", ja: "菏澤牡丹空港 (HZA)" },
        city: { root: "Heze", ja: "菏澤" },
        distance: 198,
        duration: 161
      },
      {
        title: { root: "Handan Airport (HDG)", ja: "邯鄲空港 (HDG)" },
        city: { root: "Handan", ja: "邯鄲" },
        distance: 209,
        duration: 177
      }
    ]
  },
  {
    name: "Hefei",
    nameLocale: { ja: "合肥", root: "Hefei" },
    nameChinese: "合肥",
    namePinyin: "hé féi",
    description: {
      ja: "安徽省の省都合肥。紅葉シーズンの美しい自然景観と現代的な都市機能が調和した街。包公園で北宋名臣の足跡を追う。逍遥津で地元っこに混ざって湖上ボート体験。",
      root: "Explore Hefei, a city with a long history and rich cultural heritage, featuring beautiful natural scenery and modern urban charm."
    },
    province: "Anhui Province",
    region: East,
    visa240: true,
    staying240: "Anhui Province",
    link: "/hefei",
    location: "31.840253304009515, 117.27595082334025",
    tags: [Nature],
    slogan: {
      root: "Tech Hub & Swan Lake Innovations",
      ja: "科学島＆白鳥湖革新"
    },
    introduce: {
      root: "Hefei is a city with a long history and rich cultural heritage. Its beautiful natural scenery and modern urban charm attract numerous visitors.",
      ja: "合肥は長い歴史と豊かな文化遺産を持つ都市で、美しい自然景観と現代的な都市的魅力が多くの訪問者を引きつけています。中国の科学技術革新の中心地の一つとしても知られています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "North of the Yangtze River, surrounding Chaohu Lake",
      ja: "長江北部、巢湖周辺"
    },
    bestTime: {
      root: {
        peakTime: {
          title: "Apr – Oct",
          description: "The climate is pleasant and the natural scenery is beautiful"
        },
        offTime: { title: "Nov – Feb", description: "The temperatures drop" }
      },
      ja: {
        peakTime: { title: "4月 – 10月", description: "気候は適度で、自然景観が美しく" },
        offTime: { title: "11月 – 2月", description: "気温が下がり" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 11445,
    population: 9,
    ports: [
      {
        title: { root: "Hefei Xinqiao International Airport (HFE)", ja: "合肥新橋国際空港 (HFE)" },
        city: { root: "Hefei", ja: "合肥" },
        distance: 31,
        duration: 40,
        hour240: true
      }
    ]
  },
  {
    name: "Huangshan",
    nameLocale: { ja: "黄山", root: "Huangshan" },
    nameChinese: "黄山",
    namePinyin: "huáng shān",
    description: {
      ja: "中国十大景観の一つ黄山。「奇松、怪石、雲海、温泉」の四絶が織りなす雄大な自然美。雲海を見るなら早朝5時が勝負！山頂ホテルに宿泊して日の出を独占撮影。",
      root: "Explore Huangshan, one of China's Ten Great Scenic Wonders, famous for its 'Four Wonders': unique pines, bizarre rocks, sea of clouds, and hot springs."
    },
    province: "Anhui Province",
    region: East,
    visa240: true,
    staying240: "Anhui Province",
    link: "/huangshan",
    location: "29.70823495008392, 118.317820945432",
    tags: [Nature],
    slogan: { root: "Misty Peaks & Ink Painting Landscapes", ja: "雲海＆水墨画の峰" },
    introduce: {
      root: `As one of China's Ten Great Scenic Wonders, Mount Huang (Yellow Mountain) is renowned for its "Four Wonders": unique pines, bizarre rocks, sea of clouds, and hot springs, earning it the title of "The First Marvelous Mountain under Heaven." The peaks here soar into the clouds, with steep cliffs and verdant pines perched on the precipices. Jagged rocks dot the landscape, and misty clouds envelop the mountains, showcasing the beauty of nature in its most exquisite form.`,
      ja: "中国の十大景勝地の一つである黄山（黄山区）は、「四絶」として知られています：奇岩、珍しい松、雲海、そして温泉。これらが「天下第一奇山」と呼ばれる所以です。ここでは山々が雲に聳え立ち、断崖絶壁には緑の松が生い茂り、尖った岩石が点在し、霧の中の雲が山を包み込んでいます。自然の美しさが最も精緻な形で表現されています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The southern part of Anhui Province, bordering Zhejiang to the southeast and Jiangxi to the southwest.",
      ja: "安徽省南部、浙江省との境界の南東、江西省との境界の南西"
    },
    bestTime: {
      root: {
        peakTime: { title: "Apr, Sep – Nov", description: "Most popular and higher prices" },
        offTime: { title: "Dec – Mar", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "4月、9月 – 11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "12月 – 3月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 11445,
    population: 9,
    ports: [
      {
        title: {
          root: "Huangshan Tunxi International Airport (TXN)",
          ja: "黄山屯溪国際空港 (TXN)"
        },
        city: { root: "Huangshan", ja: "黄山市" },
        distance: 8,
        duration: 32,
        hour240: true
      }
    ],
    rank: { root: Infinity, ja: 14 }
  },
  {
    name: "Taiyuan",
    nameLocale: { ja: "太原", root: "Taiyuan" },
    nameChinese: "太原",
    namePinyin: "tài yuán",
    description: {
      ja: "山西省の省都太原。歴史的な寺院や博物館が豊富で、深遠な中国文化を学ぶことができる都市。晋祠で古代建築の美を堪能。刀削麺の実演調理を見ながら食事が楽しめる。",
      root: "Discover Taiyuan, a renowned historic and cultural city in northern China. Experience its history, including Jinci Temple, and vibrant cultural attractions."
    },
    province: "Shanxi Province",
    region: North,
    visa240: true,
    staying240: "Taiyuan, Datong",
    link: "/taiyuan",
    location: "37.85233740901113, 112.53569446119702",
    tags: [HeritageSites],
    slogan: { root: "Jinci Temple Complex & Shanxi Noodles", ja: "晋祠と山西刀削麺" },
    introduce: {
      root: "The city of Taiyuan is surrounded by mountains on its east, west, and north sides, while the central and southern parts consist of the Fen River valley plain. The overall terrain slopes from higher in the north to lower in the south.",
      ja: "太原市は東、西、北側を山に囲まれており、中央部と南部は汾河谷平原で構成されています。全体的な地形は北が高く、南が低くなっています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "Central to northern Shanxi, in the northern part of the Taiyuan Basin",
      ja: "山西省中部から北部、太原盆地の北部"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jun, Aug – Oct", description: "Most popular and higher prices" },
        offTime: { title: "Jan – Apr", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "6月、8月 – 10月", description: "最も人気があり、料金も高い" },
        offTime: { title: "1月 – 4月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Warm temperate continental monsoon climate",
    area: 6988,
    population: 5,
    ports: [
      {
        title: { root: "Taiyuan Wusu International Airport (TYN)", ja: "太原武宿国際空港 (TYN)" },
        city: { root: "Taiyuan", ja: "太原" },
        distance: 15,
        duration: 34,
        hour240: true
      },
      {
        title: {
          root: "Shijiazhuang Zhengding International Airport (SJW)",
          ja: "石家莊正定国際空港 (SJW)"
        },
        city: { root: "Shijiazhuang", ja: "石家莊" },
        distance: 193,
        duration: 177,
        hour240: true
      }
    ]
  },
  {
    name: "Datong",
    nameLocale: { ja: "大同", root: "Datong" },
    nameChinese: "大同",
    namePinyin: "dà tóng",
    description: {
      ja: "中国九古都の一つ大同。雲岡石窟など世界遺産級の歴史的名所を訪ねる歴史探訪の旅。懸空寺の空中楼閣に感動。石窟寺院のライトアップナイトツアーが幻想的。",
      root: "Explore Datong, one of China's Nine Ancient Capitals. Discover its Yungang Grottoes, historical sites, and vibrant tourism."
    },
    province: "Shanxi Province",
    region: North,
    visa240: true,
    staying240: "Taiyuan, Datong",
    link: "/datong",
    location: "40.09309467655515, 113.31401557918682",
    tags: [HeritageSites],
    slogan: { root: "Yungang Grottoes & Hanging Monastery", ja: "雲岡石窟＆懸空寺" },
    introduce: {
      root: "Datong is one of China's Nine Ancient Capitals and is renowned for its numerous historical sites, including the Yungang Grottoes, the Ancient City of Datong, Mount Hengshan (North Constant Mountain), the Great Wall of Datong, Huayan Temple, Shanhua Temple, the Hanging Temple, and the Nine Dragon Wall. Datong also served as a primary filming location for the game 'Black Myth: Wukong,' featuring several famous ancient structures and attractions that have been incorporated into the game, such as the Yungang Grottoes, Hanging Temple, Huayan Temple, Shanhua Temple, Jueshan Temple, and Yong'an Temple. The Yungang Grottoes are among the most celebrated historical sites in Datong and are considered one of the three largest Buddhist cave complexes in the world.",
      ja: "大同は中国九古都の一つとして知られ、雲岡石窟、大同城、恒山（北恆山）、大同の万里の長城、華厳寺、善化寺、懸空寺、九龍壁など多くの歴史的名所があります。また、大同はゲーム「黒神：悟空」の主要な撮影地でもあり、雲岡石窟や懸空寺、華厳寺、善化寺、覚王寺、永安寺などの有名な古代建築物と観光スポットがゲームに取り入れられています。雲岡石窟は大同で最も有名な歴史的遺跡の一つであり、世界最大の仏教洞窟群の一つとして知られています。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The junction of Shanxi, Hebei, and Inner Mongolia, at the center of the Datong Basin",
      ja: "山西省、河北省、内モンゴル自治区の接点、大同盆地の中心部"
    },
    bestTime: {
      root: {
        peakTime: { title: "Jul – Oct", description: "Most popular and higher prices" },
        offTime: { title: "Dec – Mar", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "7月 – 10月", description: "最も人気があり、料金も高い" },
        offTime: { title: "12月 – 3月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Temperate semi-arid monsoon climate",
    area: 14176,
    population: 3,
    ports: [
      {
        title: { root: "Datong Yungang International Airport (DAT)", ja: "大同雲崗国際空港 (DAT)" },
        city: { root: "Datong", ja: "大同" },
        distance: 15,
        duration: 29
      },
      {
        title: { root: "Taiyuan Wusu International Airport (TYN)", ja: "太原武宿国際空港 (TYN)" },
        city: { root: "Taiyuan", ja: "太原" },
        distance: 265,
        description: {
          root: "The high-speed train journey from Taiyuan to Datong takes approximately 1 hour.",
          ja: "太原から大同までの新幹線の旅は約1時間かかります。"
        },
        duration: 199,
        hour240: true
      }
    ]
  },
  {
    name: "Nanchang",
    nameLocale: { ja: "南昌", root: "Nanchang" },
    nameChinese: "南昌",
    namePinyin: "nán chāng",
    description: {
      ja: "江西省の省都南昌。「英雄の都」として知られ、近代史と豊かな自然が共存する都市。滕王閣で唐代詩人の世界に浸る。鄱陽湖で冬季の渡り鳥観察ツアーが人気。",
      root: `Discover Nanchang, the "Hero City" of Jiangxi Province. Explore its rich history, modern attractions, and vibrant tourism, including Tengwang Pavilion.`
    },
    province: "Jiangxi Province",
    region: East,
    visa240: true,
    staying240: "Nanchang, Jingdezhen",
    link: "/nanchang",
    location: "28.67480508910552, 115.85356426235477",
    tags: [Nature],
    slogan: { root: "Poyang Lake & Tengwang Pavilion", ja: "鄱陽湖渡り鳥＆滕王閣" },
    introduce: {
      root: `Nanchang, the capital of Jiangxi Province, is a vibrant city with a rich history and modern flair. Known as the "Hero City" for its significant role in Chinese history, particularly during the August 1st Nanchang Uprising in 1927, which marked the beginning of the Chinese People's Liberation Army, Nanchang offers a unique blend of cultural landmarks, natural beauty, and bustling urban life. Visitors can explore historical sites like the August 1st Uprising Memorial Hall, enjoy the scenic views of Ganjiang River, and experience the vibrant nightlife and shopping districts.`,
      ja: "南昌は江西省の省都で、長い歴史と現代的な魅力を持つ活気ある都市です。1927年の8月1日に起きた南昌起義により中国人民解放軍が誕生したことから、「英雄の都市」として知られています。南昌では、歴史的な名所（如：八一起義記念館）、贛江の美しい景色、賑やかな夜の街やショッピング地区を楽しむことができます。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The northern part of Jiangxi Province, on the west bank of the Ganjiang River.",
      ja: "江西省北部、贛江の西岸"
    },
    bestTime: {
      root: {
        peakTime: { title: "Sep – Dec", description: "Most popular and higher prices" },
        offTime: { title: "Feb – May", description: "Less popular and lower prices" }
      },
      ja: {
        peakTime: { title: "9月 – 12月", description: "最も人気があり、料金も高い" },
        offTime: { title: "2月 – 5月", description: "あまり人気がなく、料金も低い" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 7402,
    population: 6,
    ports: [
      {
        title: {
          root: "Nanchang Changbei International Airport (KHN)",
          ja: "南昌昌北国際空港 (KHN)"
        },
        city: { root: "Nanchang", ja: "南昌" },
        distance: 19,
        duration: 37,
        hour240: true
      },
      {
        title: {
          root: "Changsha Huanghua International Airport (CSX)",
          ja: "長沙黄花国際空港 (CSX)"
        },
        city: { root: "Changsha", ja: "長沙" },
        distance: 262,
        duration: 207,
        hour240: true
      },
      {
        title: { root: "Jingdezhen Airport (JDZ)", ja: "景德镇空港 (JDZ)" },
        city: { root: "Jingdezhen", ja: "景德镇" },
        distance: 146,
        duration: 150
      }
    ]
  },
  {
    name: "Jingdezhen",
    nameLocale: { ja: "景徳鎮", root: "Jingdezhen" },
    nameChinese: "景德镇",
    namePinyin: "jǐng dé zhèn",
    description: {
      ja: "「陶磁器の都」として1,700年以上の歴史を持つ景徳鎮。伝統的な製法で作られた美しい陶磁器を手に入れよう。陶芸体験工房でMy茶器を制作。古窯民俗博物館で千年の焼き物文化を学習。",
      root: `Explore Jingdezhen, China's "Porcelain Capital." Discover its over 1,700 years of ceramic history, iconic kilns, and vibrant cultural heritage.`
    },
    province: "Jiangxi Province",
    region: East,
    visa240: true,
    staying240: "Nanchang, Jingdezhen",
    link: "/jingdezhen",
    location: "29.28045409569391, 117.19289711381693",
    tags: [HeritageSites, Art],
    slogan: { root: "Porcelain Capital & Ancient Kiln Fires", ja: "千年の窯＆陶磁器手作り体験" },
    introduce: {
      root: `Jingdezhen, often referred to as the "Porcelain Capital" of China, has been a hub for ceramic production for over 1,700 years. The city's rich history and unparalleled craftsmanship in porcelain have earned it global recognition. Visitors can delve into the world of ceramics through visits to ancient kilns, museums, and artisan workshops, making it a must-see destination for Chinese Cultural Heritage enthusiasts.`,
      ja: "中国の「磁器の首都」として知られる景德镇は、1,700年以上にわたる陶磁器生産の中心地です。この都市の豊かな歴史と磁器製造における比類なき技術は、世界中から称賛されています。訪問者は古代の窯、博物館、職人の工房を訪れることで、陶磁器の世界に深く浸かることができます。芸術や文化に興味がある方には欠かせない観光地です。"
    },
    nickname: { root: [], ja: [] },
    geography: {
      root: "The northeastern part of Jiangxi Province, in the southern foothills of the Huangshan Mountains.",
      ja: "江西省北部東部、黄山の南麓"
    },
    bestTime: {
      root: {
        peakTime: { title: "Apr, Sep – Nov", description: "Most popular and higher prices." },
        offTime: {
          title: "Dec – Feb",
          description: "Winter temperatures can be cool, less crowded."
        }
      },
      ja: {
        peakTime: { title: "4月、9月 – 11月", description: "最も人気があり、料金も高い" },
        offTime: { title: "12月 – 2月", description: "冬の気温は涼しく、比較的混雑していない" }
      }
    },
    climate: "Subtropical monsoon climate",
    area: 1894,
    population: 2,
    ports: [
      {
        title: {
          root: "Nanchang Changbei International Airport (KHN)",
          ja: "南昌昌北国際空港 (KHN)"
        },
        city: { root: "Nanchang", ja: "南昌" },
        distance: 132,
        duration: 142,
        hour240: true
      },
      {
        title: { root: "Jingdezhen Airport (JDZ)", ja: "景德镇空港 (JDZ)" },
        city: { root: "Jingdezhen", ja: "景德镇" },
        distance: 6,
        duration: 27
      }
    ]
  }
];
const getDestinations = () => destinations.map((destination, i) => {
  return {
    ...destination,
    ...destinationsAssets[destination.name] || {}
  };
});
export {
  getDestinations as g
};
