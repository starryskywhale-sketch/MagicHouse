const categories = [
  {
    id: "candle",
    name: "魔法蠟燭",
    intro: "今天的你，也許需要一點溫柔而安定的光。"
  },
  {
    id: "salt",
    name: "儀式海鹽",
    intro: "今天的你，也許適合把雜訊慢慢洗去。"
  },
  {
    id: "kit",
    name: "釀造材料包",
    intro: "今天的你，也許正適合使一個意圖慢慢成形。"
  },
  {
    id: "gentle",
    name: "溫柔建議",
    intro: "今天的你，也許不需要任何東西，只需要先好好呼吸一下。"
  }
];

const products = [
  {
    id: "candle_01",
    category: "candle",
    name: "打開窗戶蠟燭",
    shortDescription: "適合在思緒太滿、需要慢慢安靜下來的時候。",
    ritualSuggestion: "淨化有很多形式，不想點蠟燭也沒關係，今天在洗手的時候，專心地感受水流經過雙手，想像水流為你帶去疲憊與負能量。",
    image: "images/candle1.jpg",
    detailLink: "product-open-window.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["淨化", "安靜", "敞開", "柔和"]
  },
  {
    id: "candle_02",
    category: "candle",
    name: "夢想行動力蠟燭",
    shortDescription: "適合需要來點活力展開行動的時候。",
    ritualSuggestion: "今天為自己整理一個小角落，收拾桌上的筆或紙，或丟點小垃圾，告訴自己：我願意替新的開始騰出空間。",
    image: "images/test.png",
    detailLink: "product-dream-action.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["行動力", "推進", "意圖", "願景"]
  },
  {
    id: "candle_03",
    category: "candle",
    name: "豐盛之道蠟燭",
    shortDescription: "想要邁向豐盛喜悅的人生又感覺阻礙重重時，清掃豐盛道路上的阻礙。",
    ritualSuggestion: "今天好好整理自己的錢包，看看每一張鈔票、每一枚硬幣，想像它們閃閃發光。",
    image: "images/candle3.jpg",
    detailLink: "product-path-of-abundance.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["財富", "豐盛", "喜悅", "敞開"]
  },
  {
    id: "candle_04",
    category: "candle",
    name: "回到愛中蠟燭",
    shortDescription: "適合情緒需要被照料、傷心需要被擁抱的時刻。",
    ritualSuggestion: "今天好好照料自己，請自己吃頓好吃的、誇獎自己今天也很努力、好好睡覺，如果可以，感謝今天的你為自己做的那些再尋常不過的小事。",
    image: "images/candle4.jpg",
    detailLink: "product-back-to-love.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["愛", "幸福", "擁抱", "溫柔"]
  },
  {
    id: "candle_05",
    category: "candle",
    name: "靈感深呼吸蠟燭",
    shortDescription: "適合需要大量思考、創意與腦力激盪的人，感覺腦袋空空想不出解決問題的時刻。",
    ritualSuggestion: "今天有意識地深呼吸，可以簡短的三次深呼吸，或者抽空十次深呼吸。感覺胸腔充滿空氣、感覺心臟的跳動。",
    image: "images/candle5.jpg",
    detailLink: "product-breathe-inspiration.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["靈感", "創意", "直覺", "想法"]
  },
  {
    id: "candle_06",
    category: "candle",
    name: "陰影之獅蠟燭",
    shortDescription: "想要自我突破，找到深藏在恐懼中的力量時。",
    ritualSuggestion: "雙手握拳、張開、再握拳。感覺用力時的力道，你要相信你自己是有力量的，只是你需要去意識到這件事。",
    image: "images/candle6.jpg",
    detailLink: "product-shadow-lion.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["突破", "陰影", "力量", "行動"]
  },
  {
    id: "candle_07",
    category: "candle",
    name: "光明火焰蠟燭",
    shortDescription: "感覺現況充滿阻礙，需要得到支持的突破力量時。",
    ritualSuggestion: "今天試著練習放手，將自己處理不來的部分交託給宇宙，允許宇宙協助你有足夠的力量去打破現況。",
    image: "images/test.png",
    detailLink: "product-light-flame.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["火焰", "太陽", "力量", "行動"]
  },
  {
    id: "salt_01",
    category: "salt",
    name: "神聖海晶淨化鹽",
    shortDescription: "適合在能量混亂、需要重新整理邊界與節奏時使用。",
    ritualSuggestion: "今天洗手或洗澡時，想像鹽與水一起把不屬於你的能量慢慢帶走。",
    image: "images/saltsea1.jpg",
    detailLink: "product-sacred-sea-crystal.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["淨化", "邊界", "清理", "海洋"]
  },
  {
    id: "salt_02",
    category: "salt",
    name: "允許流動淨化鹽",
    shortDescription: "適合在心裡卡住、想鬆開控制感時，慢慢替自己敞開內心，允許情緒流出。",
    ritualSuggestion: "今天在擦乾雙手時，默念：我允許內心（或關係）僵住的部分慢慢鬆開。",
    image: "images/saltsea2.jpg",
    detailLink: "product-let-it-flow.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["流動", "情緒", "鬆開", "溫柔"]
  },
  {
    id: "kit_01",
    category: "kit",
    name: "甜蜜豐盛釀造材料包",
    shortDescription: "適合在你想把甜蜜、豐盛與期待慢慢帶進生活裡的時候。",
    ritualSuggestion: "今天喝水前，看著水默念：我願意在日常裡接住真實且甜蜜的豐盛。",
    image: "images/test.png",
    detailLink: "product-sweet-abundance-kit.html",
    buyLink: "https://myship.7-11.com.tw/general/detail/GM2401190051541",
    tags: ["豐盛", "甜蜜", "釀造", "溫柔"]
  }
];

const gentleMessages = [
  {
    id: "gentle_01",
    title: "今天不必急著向前走",
    message: "有些日子我們會感到急躁，想要用力衝刺，但偶爾允許自己放慢步調，在抵達目的地之前，看一看路程的風景。",
    ritualSuggestion: "有意識地關注自己前進的每一步，哪怕很小，但也別忘了感謝自己：今天這樣也很棒。",
    image: "images/recommend-gentle-water.jpg"
  },
  {
    id: "gentle_02",
    title: "請允許自己先休息一下",
    message: "不是每一份疲憊都需要立刻克服。有時候先好好地坐下來、有意識地鬆開肩膀，就是今天最重要的事。",
    ritualSuggestion: "找一個舒服的位置坐好，感覺肩膀輕輕往下沉，做三次慢慢的深呼吸，對自己說：「今天，我允許自己好好休息。」",
    image: "images/recommend-gentle-rest.jpg"
  },
  {
    id: "gentle_03",
    title: "今天適合溫柔地感謝自己",
    message: "如果你覺得自己什麼都做不好、生活終有許多棘手的困境仍未解決，這不是你不夠努力，而是你每一步的改變不會即時呈現，但相信未來你會看見過去每一刻的你做出的累積。",
    ritualSuggestion: "來點零極限吧。對不起，請原諒我，謝謝你，我愛你，我原諒我自己。",
    image: "images/recommend-gentle-night.jpg"
  },
  {
    id: "gentle_04",
    title: "今天先回到自己身上",
    message: "外面的聲音很多，別人的期待也很多，我們對自己的要求也很多。但今天的你，可以先回到自己的身上，謝謝這個你存在著，今天也有好好在呼吸。你不需要完美地符合所有外界的一切期待，你就是你。而為此做了許多努力的你，也辛苦了呢。",
    ritualSuggestion: "今天只要有空，就握拳，在心裡輕聲對自己說一句：某某某（你的名字），今天也辛苦了呢。",
    image: "images/recommend-gentle-heart.jpg"
  },
  {
    id: "gentle_05",
    title: "不必每一次都要得到答案或抵達終點",
    message: "有些安靜，不是退縮；有時停下，也不代表失敗。今天如果只能做一點點，那一點點也很好，積沙成塔。",
    ritualSuggestion: "為自己點一顆蠟燭，或看著遠方的綠意，安靜注視個十秒，提醒自己：今天我也有好好活著哦。",
    image: "images/recommend-gentle-light.jpg"
  },
  {
    id: "gentle_06",
    title: "允許自己的不完美",
    message: "今天不需要把所有一切都做到「完美」，允許自己今天有點邋遢、不想洗衣服、想點外食，你可以疲憊、安靜、厭世、躺平不想動，不要緊，這都還是你的一部分。",
    ritualSuggestion: "今天什麼都不必做，好好睡覺、好好吃飯、好好活著，就很棒了。",
    image: "images/recommend-gentle-journal.jpg"
  },
  {
    id: "gentle_07",
    title: "為自己尋找生命中的小確幸",
    message: "今天有意識地觀察車牌號碼，看看路邊的樹木，對經過的路人微笑，為自己點一杯喜歡的咖啡品項，來點小點心吧。",
    ritualSuggestion: "祝福藏在生活之中，並不顯眼，但我們可以用「今天的我想看到更多開心的事情」的想法去發現生活中的每一份小禮物。",
    image: "images/recommend-gentle-small.jpg"
  },
  {
    id: "gentle_08",
    title: "你值得被溫柔對待",
    message: "就算今天沒有完成什麼事情，這也不是空白的一天。你的存在本身，就值得被好好對待。",
    ritualSuggestion: "手放在自己的胸口上，以4-7-8的頻率深吸4秒，憋氣7秒，呼氣8秒，感覺自己的心跳與呼吸。",
    image: "images/recommend-gentle-touch.jpg"
  },
  {
    id: "gentle_09",
    title: "先讓心安靜下來",
    message: "當腦袋很吵的時候、情緒很多的時候，不一定要立刻想明白或者得出一個結論。先讓自己安靜下來，答案才有空間得以慢慢浮現。",
    ritualSuggestion: "現在先選一個顏色，然後觀察你周遭環境中有哪些關於那些顏色的事物吧。這可以幫助你僵注意從情緒上轉移。",
    image: "images/recommend-gentle-silence.jpg"
  },
  {
    id: "gentle_10",
    title: "放下苛責",
    message: "有些日子不需要被定義成成功或失敗。能夠好好走到今天，已經很值得被珍惜。",
    ritualSuggestion: "睡前替自己整理一下枕邊或桌面，當作今天溫柔收尾的小儀式。",
    image: "images/recommend-gentle-closing.jpg"
  }
];

const productGrid = document.getElementById('productGrid');
const recommendEyebrow = document.getElementById('recommendEyebrow');
const recommendCategory = document.getElementById('recommendCategory');
const recommendDetails = document.getElementById('recommendDetails');
const recommendLabel = document.getElementById('recommendLabel');
const recommendName = document.getElementById('recommendName');
const recommendDescription = document.getElementById('recommendDescription');
const recommendRitual = document.getElementById('recommendRitual');
const recommendImage = document.getElementById('recommendImage');
const detailButton = document.getElementById('detailButton');
const buyButton = document.getElementById('buyButton');
const rerollButton = document.getElementById('rerollButton');

const modal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalRitual = document.getElementById('modalRitual');
const modalBuy = document.getElementById('modalBuy');
const modalBackToProducts = document.getElementById('modalBackToProducts');

let currentRecommendation = null;

function animateRecommendationText() {
  const targets = [
    recommendCategory,
    recommendLabel,
    recommendName,
    recommendDescription,
    recommendRitual
  ];

  targets.forEach(el => {
    el.classList.remove('recommend-fade');
    void el.offsetWidth;
    el.classList.add('recommend-fade');
  });
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomCategory() {
  const weighted = [
    'candle', 'candle',
    'salt', 'salt',
    'kit',
    'gentle', 'gentle'
  ];
  const picked = randomItem(weighted);
  return categories.find(category => category.id === picked);
}

function getRandomProductByCategory(categoryId) {
  const matched = products.filter(product => product.category === categoryId);
  return randomItem(matched);
}

function getRandomGentleMessage() {
  return randomItem(gentleMessages);
}

function renderProductCards() {
  productGrid.innerHTML = products.map(product => `
    <article class="product-card" id="product-${product.id}">
      <div class="product-card__image">
        <a href="${product.detailLink}">
          <img src="${product.image}" alt="${product.name} 意象圖" />
        </a>
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">
          <a href="${product.detailLink}">${product.name}</a>
        </h3>
        <p class="product-card__desc">${product.shortDescription}</p>
        <div class="product-card__actions">
          <a class="button--ghost" href="${product.detailLink}">查看詳情</a>
          <a class="button" href="${product.buyLink}" target="_blank" rel="noopener">前往購買</a>
        </div>
      </div>
    </article>
  `).join('');
}

function openModal(productId) {
  const product = products.find(item => item.id === productId);
  if (!product || !modal) return;
  modalImage.src = product.image;
  modalImage.alt = `${product.name} 意象圖`;
  const category = categories.find(item => item.id === product.category);
  modalCategory.textContent = category ? category.name : 'Product Detail';
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.shortDescription;
  modalRitual.textContent = product.ritualSuggestion;
  modalBuy.href = product.buyLink;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModalDialog() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

async function renderRecommendation() {
  const category = getRandomCategory();
  if (!category) return;

  recommendEyebrow.textContent = "";
  recommendDetails.classList.remove('is-visible');

  await typeText(recommendEyebrow, "旅人，歡迎你來到這裡。", 200);

  recommendCategory.textContent = category.intro;

  if (category.id === 'gentle') {
    const gentle = getRandomGentleMessage();
    currentRecommendation = { type: 'gentle', data: gentle };
    recommendName.textContent = gentle.title;
    recommendDescription.textContent = gentle.message;
    recommendRitual.textContent = gentle.ritualSuggestion;
    recommendImage.src = gentle.image;
    recommendImage.alt = `${gentle.title} 意象圖`;
    recommendLabel.style.display = 'none';
    detailButton.style.display = 'none';
    buyButton.style.display = 'none';
  } else {
    const product = getRandomProductByCategory(category.id);
    currentRecommendation = { type: 'product', data: product };
    recommendName.textContent = product.name;
    recommendDescription.textContent = product.shortDescription;
    recommendRitual.textContent = product.ritualSuggestion;
    recommendImage.src = product.image;
    recommendImage.alt = `${product.name} 意象圖`;
    recommendLabel.style.display = 'block';
    detailButton.style.display = 'inline-flex';
    buyButton.style.display = 'inline-flex';
    buyButton.href = product.buyLink;
  }

  setTimeout(() => {
    fadeInRecommendationDetails();
  }, 180);
}

if (rerollButton) {
  rerollButton.addEventListener('click', renderRecommendation);
}

if (detailButton) {
  detailButton.addEventListener('click', () => {
    if (currentRecommendation?.type === 'product') {
      openModal(currentRecommendation.data.id);
    }
  });
}

if (productGrid) {
}

if (closeModal) {
  closeModal.addEventListener('click', closeModalDialog);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModalDialog();
  });
}

if (modalBackToProducts) {
  modalBackToProducts.addEventListener('click', () => {
    closeModalDialog();
    const section = document.getElementById('products');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
}

function typeText(element, text, speed = 150) {
  element.textContent = "";
  let index = 0;

  return new Promise(resolve => {
    function tick() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(tick, speed);
      } else {
        resolve();
      }
    }
    tick();
  });
}

function fadeInRecommendationDetails() {
  recommendDetails.classList.remove('is-visible');
  void recommendDetails.offsetWidth;
  recommendDetails.classList.add('is-visible');
}

renderProductCards();
renderRecommendation();
