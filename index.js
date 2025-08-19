// SVG Icons - simplified to use image files
function createSvgIcon(type) {
  return `<img src="images/cocktails/nonalcoholic.svg" alt="${type} icon" />`;
}

// Function to get specific cocktail icon path
function getCocktailIcon(cocktailName) {
  const name = cocktailName.toLowerCase();

  // Map cocktail names to image files - Alcoholic cocktails
  if (name.includes("ジントニック")) return "images/cocktails/gintonic.svg";
  if (name.includes("ジンバック")) return "images/cocktails/ginbuck.svg";
  if (name.includes("オレンジブロッサム"))
    return "images/cocktails/orangeblossom.svg";
  if (name.includes("ブルドックハイボール"))
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
  if (name.includes("サマーデライト"))
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
    description: "爽やかなジンとトニック",
    ingredients: ["ジン", "トニックウォーター", "ライム"],
  },
  {
    name: "ジンバック",
    description: "ジンとジンジャーエール",
    ingredients: ["ジン", "ジンジャーエール", "レモン"],
  },
  {
    name: "オレンジブロッサム",
    description: "ジンとオレンジの調和",
    ingredients: ["ジン", "オレンジジュース"],
  },
  {
    name: "ブルドックハイボール",
    description: "ウォッカとグレープフルーツ",
    ingredients: ["ウォッカ", "グレープフルーツジュース"],
  },
  {
    name: "カンパリオレンジ",
    description: "ビターとオレンジの絶品",
    ingredients: ["カンパリ", "オレンジジュース"],
  },
  {
    name: "カンパリグレープフルーツ",
    description: "ほろ苦さと酸味が絶品",
    ingredients: ["カンパリ", "グレープフルーツジュース"],
  },
  {
    name: "カンパリソーダ",
    description: "シンプルで奥深い大人味",
    ingredients: ["カンパリ", "ソーダ"],
  },
  {
    name: "カンパリトニック",
    description: "カンパリとトニックの洗練",
    ingredients: ["カンパリ", "トニックウォーター"],
  },
  {
    name: "スプモーニ",
    description: "三重奏が奏でる上品な一杯",
    ingredients: ["カンパリ", "グレープフルーツジュース", "トニックウォーター"],
  },
  {
    name: "カシスオレンジ",
    description: "甘酸っぱい黄金コンビ",
    ingredients: ["カシスリキュール", "オレンジジュース"],
  },
  {
    name: "カシスグレープフルーツ",
    description: "甘味と苦みが調和",
    ingredients: ["カシスリキュール", "グレープフルーツジュース"],
  },
  {
    name: "カシスソーダ",
    description: "シンプルで軽やかな味",
    ingredients: ["カシスリキュール", "ソーダ"],
  },
  {
    name: "カシスウーロン",
    description: "和の要素の創作カクテル",
    ingredients: ["カシスリキュール", "ウーロン茶"],
  },
  {
    name: "キール",
    description: "白ワインベースの食前酒",
    ingredients: ["白ワイン", "カシスリキュール"],
  },
  {
    name: "カーディナル",
    description: "濃厚で深い赤ワイン味",
    ingredients: ["赤ワイン", "カシスリキュール"],
  },
  {
    name: "ウォッカトニック",
    description: "純粋でクリアな美味しさ",
    ingredients: ["ウォッカ", "トニックウォーター", "ライム"],
  },
  {
    name: "スクリュードライバー",
    description: "シンプルで親しみやすい",
    ingredients: ["ウォッカ", "オレンジジュース"],
  },
  {
    name: "ウォッカソーダ",
    description: "純粋さと爽快感を楽しむ",
    ingredients: ["ウォッカ", "ソーダ", "ライム"],
  },
  {
    name: "モスコミュール",
    description: "伝統的なウォッカベース",
    ingredients: ["ウォッカ", "ジンジャービア", "ライム"],
  },
  {
    name: "スプリッツァー",
    description: "軽やかなワインカクテル",
    ingredients: ["白ワイン", "ソーダ"],
  },
  {
    name: "スプリッツァー・ルージュ",
    description: "色鮮やかで上品なワイン",
    ingredients: ["赤ワイン", "ソーダ"],
  },
];

const nonAlcoholicCocktails = [
  {
    name: "シャーリーテンプル",
    description: "甘酸っぱく華やかな定番",
    ingredients: ["ジンジャーエール", "グレナデンシロップ", "チェリー"],
  },
  {
    name: "サラトガクーラー",
    description: "ライムとジンジャーエール",
    ingredients: ["ジンジャーエール", "ライムジュース", "ライム"],
  },
  {
    name: "サマーデライト",
    description: "夏の柑橘系フルーツミックス",
    ingredients: ["オレンジジュース", "グレープフルーツジュース", "ソーダ"],
  },
  {
    name: "ホワイトサングリア",
    description: "上品で爽やかなフルーツ",
    ingredients: ["白ぶどうジュース", "フルーツ", "ソーダ"],
  },
  {
    name: "サングリア",
    description: "濃厚で贅沢なフルーツ味",
    ingredients: ["赤ぶどうジュース", "フルーツ", "ソーダ"],
  },
  {
    name: "トロピカルフルーツソーダ",
    description: "南国気分のエキゾチック",
    ingredients: ["トロピカルフルーツジュース", "ソーダ"],
  },
  {
    name: "トロピカルフルーツオレンジ",
    description: "贅沢なフルーツミックス",
    ingredients: ["トロピカルフルーツジュース", "オレンジジュース"],
  },
  {
    name: "トロピカルフルーツジンジャー",
    description: "スパイシーなジンジャー",
    ingredients: ["トロピカルフルーツジュース", "ジンジャーエール"],
  },
  {
    name: "パッションフルーツソーダ",
    description: "情熱的で爽快な組み合わせ",
    ingredients: ["パッションフルーツジュース", "ソーダ"],
  },
  {
    name: "グリーンアップルソーダ",
    description: "青りんごの爽やかな酸味",
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
            <ul class="ingredients-list">
                ${cocktail.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
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
