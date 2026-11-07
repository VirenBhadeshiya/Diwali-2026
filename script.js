/**
 * HAUTE DEEPAWALI CINEMATIC ORCHESTRATION ENGINE
 * Dedicated Exclusively to Nandita Jayswal
 */

(function () {
  'use strict';

  // DOM Elements
  const body = document.body;
  const stage = document.getElementById('stage');
  const video = document.getElementById('fireworks-video');
  const canvas = document.getElementById('fireworks-canvas');
  const introCurtain = document.getElementById('intro-curtain');
  const enterBtn = document.getElementById('enter-btn');
  const soundToggle = document.getElementById('sound-toggle');
  const soundLabel = document.getElementById('sound-label');
  const ambientAudio = document.getElementById('ambient-audio');
  const interactiveDiyaBtn = document.getElementById('interactive-diya-btn');
  const ritualFlameGroup = document.getElementById('ritual-flame-group');
  const ritualStatus = document.getElementById('ritual-status');
  const ritualHint = document.getElementById('ritual-hint');
  const replayBtn = document.getElementById('replay-btn');
  const shareBtn = document.getElementById('share-btn');
  const toast = document.getElementById('toast');

  // State Management
  let isSoundActive = false;
  let isVideoAvailable = false;
  let isDiyaLit = false;
  let audioCtx = null;

  /* ==========================================================================
     CANVAS PARTICLE & FIREWORKS ENGINE
     Provides 60fps golden stardust and procedural fireworks
     ========================================================================== */
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const sparks = [];
  const maxAmbientParticles = window.innerWidth < 768 ? 35 : 70;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas, { passive: true });

  class AmbientParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = -(Math.random() * 0.8 + 0.3);
      this.size = Math.random() * 2.2 + 0.8;
      this.alpha = Math.random() * 0.7 + 0.2;
      this.fade = Math.random() * 0.004 + 0.002;
      this.color = Math.random() > 0.3 ? '#D4AF37' : '#FAF0D7';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.fade;
      if (this.alpha <= 0 || this.y < -10) {
        this.reset();
      }
    }
    draw(c) {
      c.save();
      c.globalAlpha = Math.max(0, this.alpha);
      c.fillStyle = this.color;
      c.shadowColor = '#FFD700';
      c.shadowBlur = this.size * 2;
      c.beginPath();
      c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }
  }

  // Active Spark Bursts (from Diya or Fireworks)
  class SparkParticle {
    constructor(x, y, color, speedScale = 1) {
      this.x = x;
      this.y = y;
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 4 + 1.5) * speedScale;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.size = Math.random() * 2.5 + 1.2;
      this.color = color || (Math.random() > 0.4 ? '#F6E27A' : '#FF9E1B');
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.015;
      this.gravity = 0.06;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.vx *= 0.98;
      this.vy *= 0.98;
      this.alpha -= this.decay;
    }
    draw(c) {
      c.save();
      c.globalAlpha = Math.max(0, this.alpha);
      c.fillStyle = this.color;
      c.shadowColor = this.color;
      c.shadowBlur = 6;
      c.beginPath();
      c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }
  }

  // Initialize Ambient Dust
  for (let i = 0; i < maxAmbientParticles; i++) {
    const p = new AmbientParticle();
    p.y = Math.random() * height; // initial distribution
    particles.push(p);
  }

  // Trigger Burst
  function triggerBurst(x, y, count = 40, color = null) {
    for (let i = 0; i < count; i++) {
      sparks.push(new SparkParticle(x, y, color));
    }
  }

  // Procedural Fireworks Simulation (Graceful Fallback & Festive Accent)
  let lastRocketTime = 0;
  function simulateFireworks(timestamp) {
    if (!isVideoAvailable && timestamp - lastRocketTime > 2200) {
      lastRocketTime = timestamp;
      const launchX = width * (0.2 + Math.random() * 0.6);
      const launchY = height * (0.15 + Math.random() * 0.35);
      const colors = ['#F6E27A', '#DFBA73', '#FF9E1B', '#FFF0D4', '#FF5722'];
      const pickColor = colors[Math.floor(Math.random() * colors.length)];
      triggerBurst(launchX, launchY, 50, pickColor);
    }
  }

  // Main Render Loop
  function render(timestamp) {
    ctx.clearRect(0, 0, width, height);

    // Update ambient particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(ctx);
    }

    // Update burst sparks
    for (let i = sparks.length - 1; i >= 0; i--) {
      sparks[i].update();
      sparks[i].draw(ctx);
      if (sparks[i].alpha <= 0) {
        sparks.splice(i, 1);
      }
    }

    simulateFireworks(timestamp);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  /* ==========================================================================
     VIDEO PLAYBACK & HARDWARE ACCELERATION
     ========================================================================== */
  function initVideo() {
    video.playsInline = true;
    video.muted = true; // start muted for bulletproof mobile autoplay policies

    function handleVideoReady() {
      isVideoAvailable = true;
      console.log('Festive 4K video active:', video.videoWidth + 'x' + video.videoHeight, 'Duration:', video.duration + 's');
    }

    video.addEventListener('loadeddata', handleVideoReady);
    video.addEventListener('canplay', handleVideoReady);
    video.addEventListener('playing', handleVideoReady);

    video.addEventListener('error', function () {
      console.warn('Video asset could not be loaded. Procedural fireworks active.');
      isVideoAvailable = false;
    });

    // Attempt gentle muted background autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        console.log('Video autoplay deferred until user gesture.');
      });
    }
  }
  initVideo();

  /* ==========================================================================
     AUDIO ENGINE (CLEAN, LAG-FREE NATIVE VIDEO SOUND + SACRED DIYA CHIME)
     Optimized for 100% zero audio lag and perfect fireworks sync
     ========================================================================== */
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Crisp, single celebratory chime for Diya ritual (zero lag, no continuous loops)
  function playDiyaBlessingChime() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5 shimmer

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.25);
    } catch (e) {
      // Graceful fallback if audio context is blocked
    }
  }

  function setSoundState(enabled) {
    isSoundActive = enabled;
    const hudBtn = soundToggle;

    if (enabled) {
      hudBtn.classList.remove('sound-muted');
      hudBtn.classList.add('sound-playing');
      soundLabel.textContent = 'Sound On';

      // Unmute and play native video audio with zero latency
      video.muted = false;
      video.volume = 1.0;
      video.play().catch(() => {});
    } else {
      hudBtn.classList.add('sound-muted');
      hudBtn.classList.remove('sound-playing');
      soundLabel.textContent = 'Muted';

      video.muted = true;
    }
  }

  soundToggle.addEventListener('click', function () {
    setSoundState(!isSoundActive);
  });

  /* ==========================================================================
     STEP 2: CINEMATIC OPENING CEREMONY (TAP-TO-ENTER)
     ========================================================================== */
  enterBtn.addEventListener('click', function () {
    // 1. Unmute and start video audio instantly on user gesture (zero lag)
    video.muted = false;
    video.volume = 1.0;
    setSoundState(true);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function (err) {
        console.log('Video playback error handled: ', err);
      });
    }

    // 2. Dissolve intro curtain with gold light bloom
    introCurtain.classList.add('is-opened');
    body.classList.remove('is-locked');

    // 3. Trigger celebration burst on screen
    triggerBurst(width / 2, height * 0.4, 70, '#F6E27A');

    // 4. Trigger initial reveal check
    setTimeout(checkScrollReveals, 300);
  });

  /* ==========================================================================
     STEP 3 & 6: SCROLL CHOREOGRAPHY & CINEMATIC BLUR
     ========================================================================== */
  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroHeight = window.innerHeight * 0.7;

    // Apply soft cinematic blur once user scrolls into the greetings
    if (scrollY > heroHeight) {
      stage.classList.add('stage-blurred');
    } else {
      stage.classList.remove('stage-blurred');
    }

    checkScrollReveals();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Intersection Observer for Smooth Luxury Reveals
  const revealElements = document.querySelectorAll('[data-reveal]');
  function checkScrollReveals() {
    const triggerBottom = window.innerHeight * 0.88;
    revealElements.forEach((el) => {
      const box = el.getBoundingClientRect();
      if (box.top < triggerBottom) {
        el.classList.add('is-revealed');
      }
    });
  }

  /* ==========================================================================
     STEP 6B: INTERACTIVE DIYA CEREMONY
     ========================================================================== */
  interactiveDiyaBtn.addEventListener('click', function () {
    if (isDiyaLit) {
      showToast('Nandita’s Diya is already radiating warmth ✨');
      return;
    }

    isDiyaLit = true;
    interactiveDiyaBtn.classList.add('diya-lit');
    ritualFlameGroup.classList.remove('flame-dormant');
    ritualFlameGroup.classList.add('flame-active');

    // Haptic feedback for touch devices
    if (navigator.vibrate) {
      try {
        navigator.vibrate([40, 80, 140]);
      } catch (e) {}
    }

    // Sacred Sound Chime (Lightweight, lag-free)
    if (isSoundActive) {
      playDiyaBlessingChime();
    }

    // Explode Golden Sparks from Diya Location
    const rect = interactiveDiyaBtn.getBoundingClientRect();
    const diyaCenterX = rect.left + rect.width / 2;
    const diyaCenterY = rect.top + rect.height * 0.35;
    triggerBurst(diyaCenterX, diyaCenterY, 80, '#FFD700');

    // Reveal Status
    ritualStatus.classList.add('is-visible');
    ritualHint.textContent = 'The sacred flame has been ignited in your honor.';
    showToast('✦ Sacred Diya Lit for Nandita Jayswal ✦');
  });

  /* ==========================================================================
     REPLAY & SHARING UTILITIES
     ========================================================================== */
  replayBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Reliving the celebration ✨');
    setTimeout(() => {
      triggerBurst(width / 2, height * 0.3, 40, '#F6E27A');
    }, 600);
  });

  shareBtn.addEventListener('click', function () {
    const shareData = {
      title: 'Happy Diwali, Nandita Jayswal ✨',
      text: 'A private cinematic Diwali celebration crafted exclusively for you.',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      navigator.share(shareData).catch(() => {});
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Private Link Copied to Clipboard! ✨');
      }).catch(() => {
        showToast('Share URL: ' + window.location.href);
      });
    }
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Initial check on load
  window.addEventListener('DOMContentLoaded', () => {
    checkScrollReveals();
  });

})();

