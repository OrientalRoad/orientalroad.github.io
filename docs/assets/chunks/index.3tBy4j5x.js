const North = "North";
const East = "East";
const Southwest = "Southwest";
const Northwest = "Northwest";
const Central = "Central";
const South = "South";
const Northeast = "Northeast";
const ChinaNationwide = "China Nationwide";
const regions = [North, East, Southwest, Northwest, Central, South, Northeast];
const regionsDescription = {
  [ChinaNationwide]: {
    ja: "中国は景観、気候、文化が多様です。東北は森林と雪、西北は砂漠と草原、西南は高原や峡谷、東南沿海部は長い海岸線と美しい海浜を持ちます。北方は四季が明確で冬は寒く乾燥し、南方は温暖で湿度が高いです。青蔵高原は「世界の屋根」と呼ばれ、高地気候です。漢族が多く住みますが、多くの少数民族も独自の文化を持つ。",
    root: 'China varies greatly in landscape, climate, and culture. The Northeast features forests and snowy winters; the Northwest has deserts and grasslands. The Southwest includes plateaus and canyons, while the Southeast coast offers beautiful seaside views. Northern regions experience four distinct seasons, contrasting with the warm, humid South. The Qinghai-Tibet Plateau stands as the "Roof of the World." Han Chinese dominate, alongside numerous ethnic minorities with unique traditions.'
  },
  [North]: {
    ja: "华北地域（北京、天津、河北、山西および内モンゴルの一部を含む）は中華文明の発祥地の一つであり、万里の長城、紫禁城、頤和園、天壇など多くの歴史的・文化的遺産が保存されています。",
    root: "The North China region, including Beijing, Tianjin, Hebei, Shanxi, and parts of Inner Mongolia, is one of the cradles of Chinese civilization, preserving a wealth of historical and cultural heritage such as the Great Wall, the Forbidden City, the Summer Palace, and the Temple of Heaven."
  },
  [East]: {
    ja: "华东地域は温暖で湿潤な気候で、黄山、九華山、廬山などの有名な山脈や多くの河川があります。南京、杭州、蘇州などの都市は歴史が深く、文化的にも豊かです。",
    root: "East China, with its mild and humid climate, is home to famous mountains like Huangshan, Jiuhuashan, and Lushan, along with numerous rivers. Cities such as Nanjing, Hangzhou, and Suzhou are historically rich."
  },
  [Southwest]: {
    ja: "中国西南地域は地理的に多様で、チベット高原東部の高山と峡谷、四川盆地、そして雲貴高原を含んでいます。地理的な違いが大きいため、気候も非常に多様です。さらに、この地域は多くの少数民族が住む場所であり、文化的な多様性が豊かです。",
    root: "The southwestern region of China is geographically diverse, featuring high mountains and deep valleys in the eastern part of the Qinghai-Tibet Plateau, the Sichuan Basin, and the Yunnan-Guizhou Plateau. Due to significant geographical differences, the climate varies greatly. Additionally, this region is home to multiple ethnic minorities, contributing to its rich cultural diversity."
  },
  [Northwest]: {
    ja: "中国華北地域は、太行山脈や燕山脈などの壮大な山々、河川、湖沼など豊かな自然景観を持っています。また、多くの自然保護区や観光名所も点在しています。内蒙古自治区は広大な草原で知られており、例えば呼倫貝爾大草原は草原文化を体験するのに最適な場所です。さらに、この地域には多くの有名な歴史的および文化的遺産があります。",
    root: "The North China region boasts magnificent natural landscapes, including mountains, rivers, and lakes such as the Taihang Mountains and the Yan Mountains, along with numerous nature reserves and scenic spots. The Inner Mongolia Autonomous Region is famous for its vast grasslands, like the Hulunbuir Grassland, which is an excellent place to experience grassland culture. Additionally, there are many renowned historical and cultural relics."
  },
  [Central]: {
    ja: "華中地域は楚文化的発祥地であり、多くの歴史的遺跡や文化的名所があります。長江三峡と張家界国立森林公園もここに位置しています。この地域は亜熱帯モンスーン気候に属し、四季がはっきりとしており、夏は暑く雨が多く、冬は比較的温暖です。",
    root: "The Central China region, the birthplace of Chu culture, features numerous historical sites and cultural attractions. The Yangtze River Gorges and Zhangjiajie National Forest Park are also located here. It has a subtropical monsoon climate with distinct seasons, hot and rainy summers, and relatively mild winters."
  },
  [South]: {
    ja: "华南地域（広東、広西、海南、香港、マカオを含む）は、発展した経済、温暖で湿潤な気候、多様な文化で知られています。",
    root: "The South China region, including Guangdong, Guangxi, Hainan, Hong Kong, and Macau, is known for its developed economy, warm and humid climate, and diverse culture."
  },
  [Northeast]: {
    ja: "中国東北地域は長白山自然保護区などの広大な原始林を持っています。東北の冬は長く寒く、豊富な氷雪観光資源があります。この地域は満族の発祥地であり、ここにある朝鮮族自治州では朝鮮族の文化が濃厚に残されています。",
    root: "The Northeast region boasts vast stretches of primeval forests, such as the Changbai Mountain Nature Reserve. The winters in the Northeast are long and cold, offering abundant ice and snow tourism resources. The region is the birthplace of the Manchu ethnic group, and the Korean Autonomous Prefecture here retains a rich cultural heritage of the Korean ethnic group."
  }
};
export {
  Central as C,
  East as E,
  North as N,
  Southwest as S,
  Northwest as a,
  South as b,
  Northeast as c,
  ChinaNationwide as d,
  regionsDescription as e,
  regions as r
};
