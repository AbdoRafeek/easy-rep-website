document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

// Interactive 5-Screen App Data
const screensData = [
  {
    src: 'assets/screen-home.jpg',
    tag: '01 / COMMAND CENTER',
    title: 'YOUR PLAN IS READY',
    desc: 'Launch today’s session in one tap and track your weekly streak, workouts completed, sets logged, and current league rank at a glance.',
    bullets: [
      'One-tap workout launch with ~60 min session estimate',
      'Live weekly counters for Day Streak & Sets Completed',
      'Instant Bronze-to-Champion League rank badge'
    ]
  },
  {
    src: 'assets/screen-plan.jpg',
    tag: '02 / TRAINING SCHEDULE',
    title: 'YOUR TRAINING WEEK',
    desc: 'Organize your entire Saturday-to-Friday training week. Balance 5 training days and 2 rest days, and customize every exercise.',
    bullets: [
      'Full weekly split planner with active & rest days',
      'Edit sets, target reps, and working weights per exercise',
      'Instant reordering and day-by-day session breakdown'
    ]
  },
  {
    src: 'assets/screen-exercises.jpg',
    tag: '03 / MOVEMENT DATABASE',
    title: 'EXERCISE LIBRARY',
    desc: 'Explore a structured library of gym and machine exercises with anatomical muscle highlights so you train with proper form.',
    bullets: [
      'Clear muscle-group targeting illustrations',
      'Filtered by equipment (Leverage Machine, Barbell, Cable)',
      'Add any movement straight into your weekly plan'
    ]
  },
  {
    src: 'assets/screen-league.jpg',
    tag: '04 / TRAIN. IMPROVE. RISE.',
    title: 'EASY REP LEAGUE',
    desc: 'Stay consistent and climb the leaderboard. Compete every week, build your monthly score, and stack lifetime global points.',
    bullets: [
      'Three competitive brackets: Weekly, Monthly & Global',
      'Points earned through real workout consistency',
      'Live podium rankings against active athletes'
    ]
  },
  {
    src: 'assets/screen-profile.jpg',
    tag: '05 / SYNC & CONTROL',
    title: 'PROFILE & DATA BACKUP',
    desc: 'Sign in with your Google Account to compete in the league, customize your display name, and export workout backups anytime.',
    bullets: [
      'Seamless Google Account sign-in for league sync',
      'One-tap workout history export & local backup',
      'Full control over your personal training data'
    ]
  }
];

const tabBtns = document.querySelectorAll('.tab-btn');
const stripCards = document.querySelectorAll('.strip-card');
const activeImg = document.getElementById('activeScreenImg');
const activeTag = document.getElementById('activeScreenTag');
const activeTitle = document.getElementById('activeScreenTitle');
const activeDesc = document.getElementById('activeScreenDesc');
const activeBullets = document.getElementById('activeScreenBullets');

function selectScreen(index) {
  const item = screensData[index];
  if (!item) return;

  tabBtns.forEach((btn, i) => btn.classList.toggle('active', i === index));

  activeImg.style.opacity = '0.25';
  activeImg.style.transform = 'scale(0.97)';

  setTimeout(() => {
    activeImg.src = item.src;
    activeTag.textContent = item.tag;
    activeTitle.textContent = item.title;
    activeDesc.textContent = item.desc;
    activeBullets.innerHTML = item.bullets.map(b => `<li>${b}</li>`).join('');

    activeImg.style.opacity = '1';
    activeImg.style.transform = 'scale(1)';
  }, 150);
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => selectScreen(Number(btn.dataset.index)));
});

stripCards.forEach(card => {
  card.addEventListener('click', () => {
    const idx = Number(card.dataset.select);
    selectScreen(idx);
    document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));