const videoData = [
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239022&hd=2",
    title: "Миофасциальный релиз",
    type: "all"
  },
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239029&hd=2",
    title: "Тренировка для стоп",
    type: "all"
  },
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239028&hd=2",
    title: "Артикуляция позвоночника",
    type: "all"
  },
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239027&hd=2",
    title: "Комплекс на подвижность шеи, плечевого пояса и лопаток",
    type: "all"
  },
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239025&hd=2",
    title: "Пилатес на каждый день",
    type: "all"
  },
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239020&hd=2",
    title: "Комплекс для грудного отдела позвоночника",
    type: "all"
  },
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239029&hd=2",
    title: "Комплекс для расслабления мышц спины, шеи, плечевого пояса",
    type: "all"
  },
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239021&hd=2",
    title: "Комплекс для проработки мышц КОРа",
    type: "all"
  },
  {
    src: "https://vkvideo.ru/video_ext.php?oid=-229182924&id=456239023&hd=2",
    title: "Растяжка мышц ног и спины",
    type: "all"
  },
];

// Конфигурация для разных страниц
const pageConfig = {
  home: {
    containerId: 'workoutHomeContainer',
    openBtnId: 'workoutHomeOpen',
    closeBtnId: 'workoutHomeClose',
    videosPerPage: 3
  },
  blog: {
    containerId: 'workoutBlogContainer',
    openBtnId: 'workoutBlogOpen',
    closeBtnId: 'workoutBlogClose',
    videosPerPage: 3
  }
};

// State для хранения текущей страницы каждого типа
const currentPages = {
  home: 1,
  blog: 1
};

// Функция для создания видео элемента
function createVideoElement(video) {
  return `
        <div class="workout__item">
            <div class="workout__video">
                <iframe
                    width="371"
                    height="221"
                    src="${video.src}"
                    frameborder="0"
                    allowfullscreen
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
            </div>
            <p class="workout__item-description">${video.title}</p>
        </div>
    `;
}

// Функция для получения видео по типу страницы
function getVideosByPageType(pageType) {
  return videoData.filter(video =>
    video.type === pageType || video.type === 'all'
  );
}

// Функция для отображения видео по типу страницы
function renderVideos(pageType) {
  const config = pageConfig[pageType];

  const container = document.getElementById(config.containerId);

  if (!container) {
    console.error(`Контейнер не найден для страницы: ${pageType}`);
    return;
  }

  // Получаем видео для этой страницы (включая 'all')
  const pageVideos = getVideosByPageType(pageType);
  const startIndex = 0;
  const endIndex = currentPages[pageType] * config.videosPerPage;
  const videosToShow = pageVideos.slice(startIndex, endIndex);

  container.innerHTML = videosToShow.map(video => createVideoElement(video)).join('');

  updateButtons(pageType);
}

// Функция для обновления состояния кнопок
function updateButtons(pageType) {
  const config = pageConfig[pageType];
  const openBtn = document.getElementById(config.openBtnId);
  const closeBtn = document.getElementById(config.closeBtnId);

  const pageVideos = getVideosByPageType(pageType);
  const totalPages = Math.ceil(pageVideos.length / config.videosPerPage);

  if (currentPages[pageType] >= totalPages) {
    if (openBtn) openBtn.style.display = 'none';
    if (closeBtn) closeBtn.style.display = 'block';
  } else {
    if (openBtn) openBtn.style.display = 'block';
    if (closeBtn) closeBtn.style.display = 'none';
  }
}

// Функция "Показать еще" для конкретного типа
function openVideoBlock(pageType) {
  const config = pageConfig[pageType];
  const pageVideos = getVideosByPageType(pageType);
  const totalPages = Math.ceil(pageVideos.length / config.videosPerPage);

  if (currentPages[pageType] < totalPages) {
    currentPages[pageType]++;
    renderVideos(pageType);
  }
}

// Функция "Скрыть" для конкретного типа
function closeVideoBlock(pageType) {
  currentPages[pageType] = 1;
  renderVideos(pageType);
}

// Инициализация для всех страниц
function initVideoLists() {

  // Проверяем, какая страница загружена и инициализируем соответствующие видео
  if (document.getElementById('workoutHomeContainer')) {
    renderVideos('home');
  } else {
    console.log('Главная страница НЕ найдена');
  }

  if (document.getElementById('workoutBlogContainer')) {
    renderVideos('blog');
  } else {
    console.log('Страница блога НЕ найдена');
  }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', initVideoLists);