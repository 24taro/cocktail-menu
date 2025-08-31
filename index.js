// SVG Icons - simplified to use image files
function createSvgIcon(type) {
  return `<img src="images/cocktails/nonalcoholic.svg" alt="${type} icon" />`;
}

// Function to get ingredient icon path
function getIngredientIcon(ingredientName) {
  const name = ingredientName.toLowerCase();
  
  // Map ingredient names to image files
  if (name.includes("ウォッカ")) return "images/ingredients/vodka.svg";
  if (name.includes("ジン") && !name.includes("ジンジャー")) return "images/ingredients/gin.svg";
  if (name.includes("カンパリ")) return "images/ingredients/campari.svg";
  if (name.includes("オレンジジュース")) return "images/ingredients/orange-juice.svg";
  if (name.includes("カシスリキュール")) return "images/ingredients/cassis-liqueur.svg";
  if (name.includes("トニックウォーター")) return "images/ingredients/tonic-water.svg";
  if (name.includes("ソーダ")) return "images/ingredients/soda.svg";
  if (name.includes("ライムジュース")) return "images/ingredients/lime-juice.svg";
  if (name.includes("ライム")) return "images/ingredients/lime.svg";
  if (name.includes("レモン")) return "images/ingredients/lemon.svg";
  if (name.includes("チェリー")) return "images/ingredients/cherry.svg";
  if (name.includes("グレープフルーツジュース")) return "images/ingredients/grapefruit-juice.svg";
  if (name.includes("ジンジャービア")) return "images/ingredients/ginger-beer.svg";
  if (name.includes("ジンジャーエール")) return "images/ingredients/ginger-ale.svg";
  if (name.includes("白ワイン")) return "images/ingredients/white-wine.svg";
  if (name.includes("赤ワイン")) return "images/ingredients/red-wine.svg";
  if (name.includes("グレナデンシロップ")) return "images/ingredients/grenadine-syrup.svg";
  if (name.includes("ウーロン茶")) return "images/ingredients/oolong-tea.svg";
  if (name.includes("白ぶどうジュース")) return "images/ingredients/white-grape-juice.svg";
  if (name.includes("赤ぶどうジュース")) return "images/ingredients/red-grape-juice.svg";
  if (name.includes("トロピカルフルーツジュース")) return "images/ingredients/tropical-fruit-juice.svg";
  if (name.includes("パッションフルーツジュース")) return "images/ingredients/passion-fruit-juice.svg";
  if (name.includes("グリーンアップルジュース")) return "images/ingredients/green-apple-juice.svg";
  if (name.includes("フルーツ")) return "images/ingredients/fruits.svg";
  
  // Default ingredient icon (can be a generic bottle or glass)
  return "images/ingredients/soda.svg";
}

// Function to get specific cocktail icon path
function getCocktailIcon(cocktailName) {
  const name = cocktailName.toLowerCase();

  // Map cocktail names to image files - Alcoholic cocktails
  if (name.includes("ジントニック")) return "images/cocktails/gintonic.svg";
  if (name.includes("ジンバック")) return "images/cocktails/ginbuck.svg";
  if (name.includes("オレンジブロッサム"))
    return "images/cocktails/orangeblossom.svg";
  if (name.includes("ブルドッグハイボール"))
    return "images/cocktails/bulldoghighball.svg";
  if (name.includes("カンパリオレンジ"))
    return "images/cocktails/campariorange.svg";
  if (name.includes("カンパリグレープフルーツ"))
    return "images/cocktails/camparigrapefruit.svg";
  if (name.includes("カンパリソーダ"))
    return "images/cocktails/camparisoda.svg";
  if (name.includes("カンパリトニック"))
    return "images/cocktails/camparitonic.svg";
  if (name.includes("スプモーニ")) return "images/cocktails/spumoni.svg";
  if (name.includes("カシスオレンジ"))
    return "images/cocktails/cassisorange.svg";
  if (name.includes("カシスグレープフルーツ"))
    return "images/cocktails/cassisgrapefruit.svg";
  if (name.includes("カシスソーダ")) return "images/cocktails/cassissoda.svg";
  if (name.includes("カシスウーロン"))
    return "images/cocktails/cassisoolong.svg";
  if (name.includes("キール")) return "images/cocktails/kir.svg";
  if (name.includes("カーディナル")) return "images/cocktails/cardinal.svg";
  if (name.includes("ウォッカトニック"))
    return "images/cocktails/vodkatonic.svg";
  if (name.includes("スクリュードライバー"))
    return "images/cocktails/screwdriver.svg";
  if (name.includes("ウォッカソーダ")) return "images/cocktails/vodkasoda.svg";
  if (name.includes("モスコミュール")) return "images/cocktails/moscomule.svg";
  if (name.includes("スプリッツァー・ルージュ"))
    return "images/cocktails/spritzerrouge.svg";
  if (name.includes("スプリッツァー")) return "images/cocktails/spritzer.svg";

  // Map cocktail names to image files - Non-alcoholic cocktails
  if (name.includes("シャーリーテンプル"))
    return "images/cocktails/shirleytemple.svg";
  if (name.includes("サラトガクーラー"))
    return "images/cocktails/saratogacooler.svg";
  if (name.includes("サマーディライト"))
    return "images/cocktails/summerdelight.svg";
  if (name.includes("ホワイトサングリア"))
    return "images/cocktails/whitesangria.svg";
  if (name.includes("サングリア")) return "images/cocktails/sangria.svg";
  if (name.includes("トロピカルフルーツソーダ"))
    return "images/cocktails/tropicalfruitsoda.svg";
  if (name.includes("トロピカルフルーツオレンジ"))
    return "images/cocktails/tropicalfruitorange.svg";
  if (name.includes("トロピカルフルーツジンジャー"))
    return "images/cocktails/tropicalfruitginger.svg";
  if (name.includes("パッションフルーツソーダ"))
    return "images/cocktails/passionfruitsoda.svg";
  if (name.includes("グリーンアップルソーダ"))
    return "images/cocktails/greenapplesoda.svg";

  // Default to nonalcoholic icon
  return "images/cocktails/nonalcoholic.svg";
}

// Cocktail data with descriptions
const alcoholicCocktails = [
  {
    name: "ジントニック",
    description: "英国紳士が何世代にも渡り愛し続ける時代を超えた永遠のクラシカル",
    ingredients: ["ジン", "トニックウォーター", "ライム"],
  },
  {
    name: "ジンバック",
    description: "ジンジャーの繊細なスパイスが優雅に踊る洗練されたハーモニー",
    ingredients: ["ジン", "ジンジャーエール", "レモン"],
  },
  {
    name: "オレンジブロッサム",
    description: "春の優しい陽だまりのように心を温める優雅な柑橘の調べ",
    ingredients: ["ジン", "オレンジジュース"],
  },
  {
    name: "ブルドッグハイボール",
    description: "クリアなウォッカの力強さとほろ苦いグレープフルーツの魅惑的な誘惑",
    ingredients: ["ウォッカ", "グレープフルーツジュース"],
  },
  {
    name: "カンパリオレンジ",
    description: "地中海の眩しい陽光が織りなすビターとオレンジの絶妙なバランス",
    ingredients: ["カンパリ", "オレンジジュース"],
  },
  {
    name: "カンパリグレープフルーツ",
    description: "大人の心をしっとり虜にする禁断のほろ苦く甘美な誘惑",
    ingredients: ["カンパリ", "グレープフルーツジュース"],
  },
  {
    name: "カンパリソーダ",
    description: "シンプルでミニマルな美学に秘められた深遠で奥深い味わい",
    ingredients: ["カンパリ", "ソーダ"],
  },
  {
    name: "カンパリトニック",
    description: "カンパリの繊細なビターと泡が奏でる洗練された大人の調べ",
    ingredients: ["カンパリ", "トニックウォーター"],
  },
  {
    name: "スプモーニ",
    description: "地中海の美しくロマンチックな夕暮れを思わせる三つの味の協奏曲",
    ingredients: ["カンパリ", "グレープフルーツジュース", "トニックウォーター"],
  },
  {
    name: "カシスオレンジ",
    description: "甘いカシスベリーとオレンジシトラスの魅惑的な黄金比",
    ingredients: ["カシスリキュール", "オレンジジュース"],
  },
  {
    name: "カシスグレープフルーツ",
    description: "甘美なカシスの誘惑とグレープフルーツのほろ苦い現実が織りなす絶妙な均衡",
    ingredients: ["カシスリキュール", "グレープフルーツジュース"],
  },
  {
    name: "カシスソーダ",
    description: "シンプルでミニマルな美学に宿る軽やかで自由な魂",
    ingredients: ["カシスリキュール", "ソーダ"],
  },
  {
    name: "カシスウーロン",
    description: "和と洋の異なる文化が美しく交差する独創的なカクテルアート",
    ingredients: ["カシスリキュール", "ウーロン茶"],
  },
  {
    name: "キール",
    description: "フランス・ブルゴーニュの古き伝統に彩られた優雅な食前の儀式",
    ingredients: ["白ワイン", "カシスリキュール"],
  },
  {
    name: "カーディナル",
    description: "深い紅に染まるロマンティックで情熱的なワインの豊かな調べ",
    ingredients: ["赤ワイン", "カシスリキュール"],
  },
  {
    name: "ウォッカトニック",
    description: "美しいクリスタルのように透明な魂に宿る純粋なエレガンス",
    ingredients: ["ウォッカ", "トニックウォーター", "ライム"],
  },
  {
    name: "スクリュードライバー",
    description: "カジュアルでシンプルな装いに秘められた洗練された美しい心",
    ingredients: ["ウォッカ", "オレンジジュース"],
  },
  {
    name: "ウォッカソーダ",
    description: "まるでクリスタルのような透明感と心に響く爽快な余韻",
    ingredients: ["ウォッカ", "ソーダ", "ライム"],
  },
  {
    name: "モスコミュール",
    description: "ロシア・モスクワの銅製マグが奏でる伝統的で温かな響き",
    ingredients: ["ウォッカ", "ジンジャービア", "ライム"],
  },
  {
    name: "スプリッツァー",
    description: "白い花びらのように軽やかで優雅な春の午後のワインの調べ",
    ingredients: ["白ワイン", "ソーダ"],
  },
  {
    name: "スプリッツァー・ルージュ",
    description: "深紅のベルベットに包まれた上品で贅沢な秋の午後のひととき",
    ingredients: ["赤ワイン", "ソーダ"],
  },
];

const nonAlcoholicCocktails = [
  {
    name: "シャーリーテンプル",
    description: "少女時代の美しい夢と希望を込めた甘くて華やかな調べ",
    ingredients: ["ジンジャーエール", "グレナデンシロップ", "チェリー"],
  },
  {
    name: "サラトガクーラー",
    description: "爽やかな初夏のさっぱりとした風とジンジャーが織りなす涼やかなひととき",
    ingredients: ["ジンジャーエール", "ライムジュース", "ライム"],
  },
  {
    name: "サマーディライト",
    description: "夏の照りつける太陽が育んだ柑橘フルーツたちの美しく爽やかな協奏曲",
    ingredients: ["オレンジジュース", "グレープフルーツジュース", "ソーダ"],
  },
  {
    name: "ホワイトサングリア",
    description: "白く美しいブドウが静かに奏でる気品に満ちた自然の歌声",
    ingredients: ["白ぶどうジュース", "フルーツ", "ソーダ"],
  },
  {
    name: "サングリア",
    description: "深い紅色の美しいブドウに込められた大地からの豊かな恵み",
    ingredients: ["赤ぶどうジュース", "フルーツ", "ソーダ"],
  },
  {
    name: "トロピカルフルーツソーダ",
    description: "常夏の美しい南国楽園が呼び起こす甘美で懐かしい記憶",
    ingredients: ["トロピカルフルーツジュース", "ソーダ"],
  },
  {
    name: "トロピカルフルーツオレンジ",
    description: "南国の色とりどりのトロピカルフルーツたちが織りなす豪華絢爛な饗宴",
    ingredients: ["トロピカルフルーツジュース", "オレンジジュース"],
  },
  {
    name: "トロピカルフルーツジンジャー",
    description: "南国の美しいフルーツの恵みにジンジャーが加える刺激的な魔法",
    ingredients: ["トロピカルフルーツジュース", "ジンジャーエール"],
  },
  {
    name: "パッションフルーツソーダ",
    description: "パッションフルーツの燃えるような情熱と泡の心地よい軽やかさ",
    ingredients: ["パッションフルーツジュース", "ソーダ"],
  },
  {
    name: "グリーンアップルソーダ",
    description: "青い空のような美しい透明感と初恋を思わせる甘酸っぱさ",
    ingredients: ["グリーンアップルジュース", "ソーダ"],
  },
];

function createCocktailItem(cocktail, index, isNonAlcoholic = false) {
  const item = document.createElement("div");
  item.className = "cocktail-item";
  const iconPath = getCocktailIcon(cocktail.name);

  item.innerHTML = `
        <div class="cocktail-header">
            <div class="cocktail-icon">
                <img src="${iconPath}" alt="${cocktail.name} icon" />
            </div>
            <div class="cocktail-info">
                <div class="cocktail-name">${cocktail.name}</div>
                <div class="cocktail-description">${cocktail.description}</div>
            </div>
        </div>
        <div class="cocktail-ingredients" id="ingredients-${index}">
            <div class="ingredients-title">材料</div>
            <div class="ingredients-visual">
                ${cocktail.ingredients
                  .map((ingredient, idx) => `
                    <div class="ingredient-item">
                        <div class="ingredient-icon">
                            <img src="${getIngredientIcon(ingredient)}" alt="${ingredient}" />
                        </div>
                        <div class="ingredient-name">${ingredient}</div>
                    </div>
                    ${idx < cocktail.ingredients.length - 1 ? '<div class="plus-symbol">+</div>' : ''}
                  `)
                  .join("")}
            </div>
        </div>
        <div class="geometric-accent"></div>
    `;

  item.addEventListener("click", () => {
    const ingredientsDiv = item.querySelector(".cocktail-ingredients");
    ingredientsDiv.classList.toggle("show");
  });

  return item;
}

// Populate lists
function populateList(
  cocktails,
  listId,
  startIndex = 0,
  isNonAlcoholic = false
) {
  const list = document.getElementById(listId);
  cocktails.forEach((cocktail, index) => {
    const item = createCocktailItem(
      cocktail,
      startIndex + index,
      isNonAlcoholic
    );
    list.appendChild(item);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  populateList(alcoholicCocktails, "alcoholic-list", 0, false);
  populateList(
    nonAlcoholicCocktails,
    "non-alcoholic-list",
    alcoholicCocktails.length,
    true
  );
});
