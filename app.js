(() => {
  "use strict";

  /* ================= i18n ================= */
  const T = {
    en: {
      title: "Grab the Mic",
      tagline: "Draw a word. Find a song. Sing it!",
      rules: "Rules",
      cardLang: "Card language",
      langEn: "English",
      langHu: "Magyar",
      langBoth: "Both",
      mode: "Mode",
      modeFree: "Just cards",
      modeScore: "Keep score",
      players: "Players",
      playerPh: "Player name",
      playersHint: "Add at least 2 players.",
      start: "Start game",
      resume: "Resume",
      tapToDraw: "Tap to draw",
      draw: "Draw card",
      next: "Next card",
      card: (n) => `Card ${n}`,
      hintBefore: "Draw a card to start the round",
      hintAfter: "Tap a name: one +1 per card, −1 for anyone who misses",
      clearRound: "Undo score for this card",
      scoreboard: "Scoreboard",
      resetScores: "Reset scores",
      close: "Close",
      confirmLeave: "Leave the game? Your scores are saved and you can resume.",
      confirmReset: "Reset all scores to 0?",
      duplicate: "That name is already taken.",
      remove: "Remove",
      leave: "Leave",
      cancel: "Cancel",
    },
    hu: {
      title: "Kapd el a mikit!",
      tagline: "Húzz egy szót. Találj egy dalt. Énekeld!",
      rules: "Szabályok",
      cardLang: "Kártyák nyelve",
      langEn: "English",
      langHu: "Magyar",
      langBoth: "Mindkettő",
      mode: "Játékmód",
      modeFree: "Csak kártyák",
      modeScore: "Pontozással",
      players: "Játékosok",
      playerPh: "Játékos neve",
      playersHint: "Legalább 2 játékos kell.",
      start: "Játék indítása",
      resume: "Folytatás",
      tapToDraw: "Koppints a húzáshoz",
      draw: "Kártyahúzás",
      next: "Következő kártya",
      card: (n) => `${n}. kártya`,
      hintBefore: "Húzz egy kártyát a kör indításához",
      hintAfter: "Koppints egy névre: kártyánként egy +1, −1 bárkinek, aki elrontja",
      clearRound: "Pont visszavonása ennél a kártyánál",
      scoreboard: "Eredmények",
      resetScores: "Pontok nullázása",
      close: "Bezár",
      confirmLeave: "Kilépsz a játékból? A pontok megmaradnak, később folytathatod.",
      confirmReset: "Minden pontot nullázol?",
      duplicate: "Ez a név már foglalt.",
      remove: "Törlés",
      leave: "Kilépés",
      cancel: "Mégse",
    },
  };

  const RULES = {
    en: `
      <h2>🎤 How to play</h2>
      <h3>Setup</h3>
      <ul>
        <li>Put an object in the middle of the table that will be the <b>“mic”</b> — a deodorant, a toilet roll, a water bottle, anything you can grab.</li>
        <li>Put the phone next to it. Each word is shown twice (once upside down), so everyone around the table can read it.</li>
      </ul>
      <h3>A round</h3>
      <ol>
        <li>Tap the card to reveal a word.</li>
        <li>Everyone thinks of a song that contains that word — or a variation of it (<i>love → lover, loving</i>).</li>
        <li>Got one? <b>Grab the mic</b> and sing at least one line from the song.</li>
        <li>Sang it correctly with the word in it? <span class="pill plus">+1</span><br/>Wrong lyrics, no word, or you froze? <span class="pill minus">−1</span></li>
        <li><b>Only one player can win the point per card</b> — whoever sings it right first. Anyone who grabs the mic and messes up still gets −1.</li>
        <li>Put the mic back and draw the next card.</li>
      </ol>
      <h3>Modes</h3>
      <ul>
        <li><b>Just cards</b> — the app only shows words. Keep score however you like (or don't).</li>
        <li><b>Keep score</b> — add the players' names. After a card is revealed, tap a name and give them +1 or −1.</li>
      </ul>
      <h3>Languages</h3>
      <ul>
        <li>Pick English, Hungarian, or <b>Both</b>: one side of the card shows the English word, the other side the Hungarian one. Songs in either language count.</li>
      </ul>
      <h3>House rules (optional)</h3>
      <ul>
        <li>Only one person can hold the mic at a time — fastest hand wins.</li>
        <li>A song can't be used twice in the same game.</li>
        <li>The group decides if the lyrics were correct.</li>
      </ul>`,
    hu: `
      <h2>🎤 Így kell játszani</h2>
      <h3>Előkészület</h3>
      <ul>
        <li>Tegyetek az asztal közepére egy tárgyat, ez lesz a <b>„mikrofon”</b> — egy dezodor, egy WC-papír, egy vizes palack, bármi, amit meg lehet ragadni.</li>
        <li>A telefont tegyétek mellé. Minden szó kétszer látszik (egyszer fejjel lefelé), így az asztal mindkét oldaláról olvasható.</li>
      </ul>
      <h3>Egy kör</h3>
      <ol>
        <li>Koppints a kártyára, és megjelenik egy szó.</li>
        <li>Mindenki kitalál egy dalt, amiben benne van az a szó — vagy annak egy változata (<i>szív → szívem, szívből</i>).</li>
        <li>Megvan? <b>Kapd el a mikit</b>, és énekelj el legalább egy sort a dalból.</li>
        <li>Helyesen énekelted, és benne volt a szó? <span class="pill plus">+1</span><br/>Rossz szöveg, nem volt benne a szó, vagy leblokkoltál? <span class="pill minus">−1</span></li>
        <li><b>Kártyánként csak egy játékos kaphat pontot</b> — aki elsőként helyesen elénekli. Aki elkapja a mikit, de elrontja, az −1-et kap.</li>
        <li>Tedd vissza a mikit, és jöhet a következő kártya.</li>
      </ol>
      <h3>Játékmódok</h3>
      <ul>
        <li><b>Csak kártyák</b> — az app csak a szavakat mutatja. A pontokat számoljátok, ahogy akarjátok (vagy sehogy).</li>
        <li><b>Pontozással</b> — add meg a játékosok nevét. Kártyahúzás után koppints egy névre, és adj neki +1-et vagy −1-et.</li>
      </ul>
      <h3>Nyelvek</h3>
      <ul>
        <li>Válaszd az angolt, a magyart vagy a <b>Mindkettőt</b>: ilyenkor a kártya egyik felén az angol, a másikon a magyar szó látszik. Bármelyik nyelvű dal elfogadható.</li>
      </ul>
      <h3>Házszabályok (opcionális)</h3>
      <ul>
        <li>Egyszerre csak egy ember foghatja a mikit — a leggyorsabb kéz nyer.</li>
        <li>Egy dalt egy játékban csak egyszer lehet használni.</li>
        <li>Hogy helyes volt-e a szöveg, arról a társaság dönt.</li>
      </ul>`,
  };

  /* ================= state ================= */
  const STORE_KEY = "grab-the-mic-v1";
  const defaultLang = (navigator.language || "").toLowerCase().startsWith("hu") ? "hu" : "en";

  let settings = { uiLang: defaultLang, cardLang: defaultLang, mode: "free", players: [] };
  let game = null; // { mode, players, deck, pos, current, revealed, drawn, scores, round }

  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    if (saved?.settings) settings = { ...settings, ...saved.settings };
    if (saved?.game) game = saved.game;
  } catch (_) { /* ignore corrupt storage */ }

  const save = () => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ settings, game })); } catch (_) {}
  };

  const t = (key, ...args) => {
    const v = T[settings.uiLang][key];
    return typeof v === "function" ? v(...args) : v;
  };

  /* ================= dom helpers ================= */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  function bindSeg(el, get, set) {
    const sync = () => el.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.val === get()));
    el.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      set(b.dataset.val);
      sync();
      save();
    });
    sync();
    return sync;
  }

  function applyI18n() {
    document.documentElement.lang = settings.uiLang;
    document.title = t("title");
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $("#player-name").placeholder = t("playerPh");
    renderSetup();
    if (game) renderGame();
  }

  /* ================= routing (hash → back button works) ================= */
  function route() {
    const h = location.hash.slice(1);
    let id = h === "rules" ? "rules" : h === "game" && game ? "game" : "setup";
    $$(".screen").forEach((s) => s.classList.toggle("active", s.id === `screen-${id}`));
    closeSheets();
    if (id === "rules") renderRules();
    if (id === "game") { renderGame(); fitWords(); requestWakeLock(); }
    else releaseWakeLock();
    if (id === "setup") renderSetup();
  }
  // we only ever go setup → rules / setup → game, so "back" is one step
  let pushed = false;
  function go(id) {
    if (id !== "setup") { pushed = true; location.hash = id; return; }
    if (pushed) { pushed = false; history.back(); return; }
    history.replaceState(null, "", location.pathname + location.search);
    route();
  }
  window.addEventListener("hashchange", () => { if (!location.hash) pushed = false; route(); });

  /* ================= setup screen ================= */
  bindSeg($("#ui-lang"), () => settings.uiLang, (v) => { settings.uiLang = v; applyI18n(); });
  bindSeg($("#card-lang"), () => settings.cardLang, (v) => { settings.cardLang = v; });
  bindSeg($("#mode"), () => settings.mode, (v) => { settings.mode = v; renderSetup(); });

  $("#add-player").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("#player-name");
    const name = input.value.trim();
    if (!name) return;
    if (settings.players.some((p) => p.toLowerCase() === name.toLowerCase())) {
      $("#players-hint").textContent = t("duplicate");
      $("#players-hint").hidden = false;
      $("#players-hint").classList.add("error");
      return;
    }
    settings.players.push(name);
    input.value = "";
    save();
    renderSetup();
  });

  $("#player-list").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-i]");
    if (!b) return;
    settings.players.splice(+b.dataset.i, 1);
    save();
    renderSetup();
  });

  $("#player-name").addEventListener("input", () => renderSetup());

  function renderSetup() {
    $("#players-hint").textContent = t("playersHint");
    $("#players-hint").classList.remove("error");
    const scoring = settings.mode === "score";
    $("#players-field").hidden = !scoring;
    $("#player-list").innerHTML = settings.players
      .map((p, i) => `<li>${esc(p)}<button data-i="${i}" aria-label="${t("remove")}">✕</button></li>`)
      .join("");
    $("#players-hint").hidden = settings.players.length >= 2;
    $("#btn-start").disabled = scoring && settings.players.length < 2;
    $("#btn-resume").hidden = !(game && game.drawn > 0);
  }

  $("#btn-rules").addEventListener("click", () => { rulesLang = settings.uiLang; go("rules"); });
  $("#btn-start").addEventListener("click", () => { newGame(); go("game"); });
  $("#btn-resume").addEventListener("click", () => go("game"));

  /* ================= rules screen ================= */
  let rulesLang = settings.uiLang;
  const syncRulesSeg = bindSeg($("#rules-lang"), () => rulesLang, (v) => { rulesLang = v; renderRules(); });
  function renderRules() {
    $("#rules-content").innerHTML = RULES[rulesLang];
    syncRulesSeg();
  }
  $("[data-back]").addEventListener("click", () => go("setup"));

  /* ================= game ================= */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function newGame() {
    const scoring = settings.mode === "score";
    game = {
      mode: settings.mode,
      players: scoring ? [...settings.players] : [],
      deck: shuffle(WORDS.map((_, i) => i)),
      pos: 0,
      current: null,
      revealed: false,
      drawn: 0,
      scores: Object.fromEntries((scoring ? settings.players : []).map((p) => [p, 0])),
      round: {},
    };
    save();
  }

  function nextWordIndex() {
    if (game.pos >= game.deck.length) {
      // deck used up: reshuffle, but don't repeat the last card right away
      const last = game.current;
      game.deck = shuffle(WORDS.map((_, i) => i));
      if (game.deck[0] === last) game.deck.push(game.deck.shift());
      game.pos = 0;
    }
    return game.deck[game.pos++];
  }

  const card = $("#card");
  let busy = false;

  function draw() {
    if (busy || !game) return;
    busy = true;
    closeSheets();

    const reveal = () => {
      game.current = nextWordIndex();
      game.revealed = true;
      game.drawn++;
      game.round = {};
      save();
      renderGame();
      fitWords();
      card.classList.add("flipped");
      vibrate(15);
      setTimeout(() => (busy = false), 600);
    };

    if (card.classList.contains("flipped")) {
      // flip back first, then deal the next card
      card.classList.remove("flipped");
      game.revealed = false;
      renderGame();
      setTimeout(reveal, 450);
    } else {
      reveal();
    }
  }

  card.addEventListener("click", draw);
  $("#btn-draw").addEventListener("click", draw);

  function cardSides() {
    const w = WORDS[game.current];
    if (!w) return null;
    const lang = settings.cardLang;
    if (lang === "both") return { bottom: [w.en, "EN"], top: [w.hu, "HU"] };
    return { bottom: [w[lang], lang.toUpperCase()], top: [w[lang], lang.toUpperCase()] };
  }

  function renderGame() {
    if (!game) return;
    const scoring = game.mode === "score";

    const sides = game.current != null ? cardSides() : null;
    if (sides) {
      $("#word-bottom").textContent = sides.bottom[0];
      $("#word-top").textContent = sides.top[0];
      const showFlag = settings.cardLang === "both";
      $("#flag-bottom").textContent = showFlag ? sides.bottom[1] : "";
      $("#flag-top").textContent = showFlag ? sides.top[1] : "";
      // colour each half by language when the card is bilingual
      $(".half.bottom").dataset.lang = showFlag ? sides.bottom[1].toLowerCase() : "";
      $(".half.top").dataset.lang = showFlag ? sides.top[1].toLowerCase() : "";
    }
    card.classList.toggle("flipped", game.revealed);

    $("#counter").textContent = game.drawn ? t("card", game.drawn) : "";
    $("#btn-draw").textContent = game.drawn ? t("next") : t("draw");
    $("#btn-scoreboard").style.visibility = scoring ? "visible" : "hidden";

    const strip = $("#score-strip");
    strip.hidden = !scoring;
    if (!scoring) return;

    $("#score-hint").textContent = game.revealed ? t("hintAfter") : t("hintBefore");
    const chips = $("#chips");
    chips.classList.toggle("wrap", game.players.length <= 6);
    chips.innerHTML = game.players
      .map((p, i) => {
        const r = game.round[p];
        const cls = r === 1 ? "got-plus" : r === -1 ? "got-minus" : "";
        return `<li><button class="chip ${cls}" data-i="${i}" ${game.revealed ? "" : "disabled"}>
          <span>${esc(p)}</span><span class="pts">${fmt(game.scores[p] ?? 0)}</span></button></li>`;
      })
      .join("");
  }

  /* shrink each word until it fits its half of the card */
  function fitWords() {
    requestAnimationFrame(() => {
      ["#word-top", "#word-bottom"].forEach((sel) => {
        const el = $(sel);
        const half = el.parentElement;
        const maxW = half.clientWidth - 28;
        const maxH = half.clientHeight * 0.55;
        let size = Math.min(maxH, 110);
        el.style.fontSize = size + "px";
        while (size > 18 && el.scrollWidth > maxW) {
          size -= 2;
          el.style.fontSize = size + "px";
        }
      });
    });
  }
  window.addEventListener("resize", () => game && fitWords());

  /* ---------- scoring ---------- */
  let scoringPlayer = null;

  $("#chips").addEventListener("click", (e) => {
    const b = e.target.closest("button.chip");
    if (!b || b.disabled) return;
    scoringPlayer = game.players[+b.dataset.i];
    openScoreSheet();
  });

  function openScoreSheet() {
    const r = game.round[scoringPlayer];
    $("#sheet-score-title").textContent = scoringPlayer;
    $$("#sheet-score [data-delta]").forEach((b) => b.classList.toggle("selected", +b.dataset.delta === r));
    $("#btn-clear-round").hidden = r == null;
    openSheet("#sheet-score");
  }

  function setRoundScore(player, delta) {
    // only one player can win the +1 per card: giving it to someone moves it
    if (delta === 1) {
      game.players.forEach((p) => {
        if (p !== player && game.round[p] === 1) {
          game.scores[p] -= 1;
          delete game.round[p];
        }
      });
    }
    const prev = game.round[player] ?? 0;
    game.scores[player] = (game.scores[player] ?? 0) - prev + (delta ?? 0);
    if (delta == null) delete game.round[player];
    else game.round[player] = delta;
    save();
    renderGame();
  }

  $$("#sheet-score [data-delta]").forEach((b) =>
    b.addEventListener("click", () => {
      setRoundScore(scoringPlayer, +b.dataset.delta);
      vibrate(+b.dataset.delta > 0 ? 20 : [20, 40, 20]);
      closeSheets();
    })
  );
  $("#btn-clear-round").addEventListener("click", () => {
    setRoundScore(scoringPlayer, null);
    closeSheets();
  });

  /* ---------- scoreboard ---------- */
  $("#btn-scoreboard").addEventListener("click", () => {
    const rows = [...game.players].sort((a, b) => game.scores[b] - game.scores[a]);
    const top = rows.length ? game.scores[rows[0]] : 0;
    $("#board").innerHTML = rows
      .map((p) => `<li class="${game.scores[p] === top && top > 0 ? "lead" : ""}">
        <span class="name">${esc(p)}</span><span class="pts">${fmt(game.scores[p])}</span></li>`)
      .join("");
    openSheet("#sheet-board");
  });
  $("#btn-close-board").addEventListener("click", closeSheets);
  $("#btn-reset-scores").addEventListener("click", () => {
    askConfirm(t("confirmReset"), t("resetScores"), () => {
      game.players.forEach((p) => (game.scores[p] = 0));
      game.round = {};
      save();
      renderGame();
    });
  });

  $("#btn-home").addEventListener("click", () => {
    if (game.drawn > 0 && game.mode === "score") askConfirm(t("confirmLeave"), t("leave"), () => go("setup"));
    else go("setup");
  });

  /* ---------- in-app confirm (browser dialogs are blocked in some viewers) ---------- */
  let onConfirm = null;
  function askConfirm(text, okLabel, cb) {
    $("#confirm-text").textContent = text;
    $("#btn-confirm-ok").textContent = okLabel;
    $("#btn-confirm-cancel").textContent = t("cancel");
    onConfirm = cb;
    openSheet("#sheet-confirm");
  }
  $("#btn-confirm-ok").addEventListener("click", () => {
    const cb = onConfirm;
    onConfirm = null;
    closeSheets();
    cb?.();
  });
  $("#btn-confirm-cancel").addEventListener("click", closeSheets);

  /* ---------- sheets ---------- */
  function openSheet(sel) {
    closeSheets();
    $("#sheet-backdrop").hidden = false;
    $(sel).hidden = false;
  }
  function closeSheets() {
    $("#sheet-backdrop").hidden = true;
    $$(".sheet").forEach((s) => (s.hidden = true));
  }
  $("#sheet-backdrop").addEventListener("click", closeSheets);

  /* ================= misc ================= */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  const fmt = (n) => (n > 0 ? `+${n}` : `${n}`);
  const vibrate = (p) => { try { navigator.vibrate?.(p); } catch (_) {} };

  // keep the screen awake while a game is on the table
  let wakeLock = null;
  async function requestWakeLock() {
    try { wakeLock = await navigator.wakeLock?.request("screen"); } catch (_) {}
  }
  function releaseWakeLock() {
    wakeLock?.release().catch(() => {});
    wakeLock = null;
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && location.hash === "#game") requestWakeLock();
  });

  /* ================= boot ================= */
  applyI18n();
  route();
})();
