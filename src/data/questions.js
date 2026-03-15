// DRAFT — Fragen werden sp\u00e4ter einzeln verfeinert
// Format: SJT-Szenarien mit BARS-verankerten Antwortoptionen (5 pro Frage)

export const LEVEL_LABELS = {
  1: 'Einsteiger',
  2: 'Anfaenger',
  3: 'Leicht Fortgeschritten',
  4: 'Fortgeschritten',
  5: 'Sicher Fortgeschritten',
  6: 'Weit Fortgeschritten',
  7: 'Experte',
  8: 'Profi',
}

// Feste Fragen 1-5 (Grundprofil)
export const fixedQuestions = [
  {
    id: 'f1',
    text: 'Du stehst zum ersten Mal an diesem Tag oben an der Piste. Wie faehrst du los?',
    options: [
      { text: 'Ich brauche jemanden, der mir zeigt wie', points: 0 },
      { text: 'Im Pflug, langsam und vorsichtig', points: 1 },
      { text: 'Ich starte mit breiten Schwuengen, taste mich rein', points: 2 },
      { text: 'Parallelschwung, ich finde schnell meinen Rhythmus', points: 3 },
      { text: 'Direkt locker am Hang, passe Tempo und Technik dem Gelaende an', points: 4 },
    ],
  },
  {
    id: 'f2',
    text: 'Die Piste wird steiler als erwartet. Was passiert bei dir?',
    options: [
      { text: 'Ich setze mich hin oder halte mich am Rand fest', points: 0 },
      { text: 'Ich bremse im Pflug und rutsche quer zum Hang', points: 1 },
      { text: 'Ich fahre breite Kurven mit viel Geschwindigkeitskontrolle', points: 2 },
      { text: 'Ich verkuerze meine Schwuenge und halte das Tempo', points: 3 },
      { text: 'Ich nutze Kantendruck und Rhythmuswechsel je nach Steilheit', points: 4 },
    ],
  },
  {
    id: 'f3',
    text: 'Wie beschreibst du deine Kurventechnik am besten?',
    options: [
      { text: 'Ich kann noch nicht gezielt Kurven fahren', points: 0 },
      { text: 'Pflug/Schneepflug \u2014 Skispitzen zusammen, Bremsen in der Kurve', points: 1 },
      { text: 'Meine Ski sind meistens parallel, aber ich rutsche oft nach', points: 2 },
      { text: 'Sauberer Parallelschwung mit bewusstem Kantenwinkel', points: 3 },
      { text: 'Geschnittene Kurven (Carving) mit Belastungswechsel und Oberkoerpertaloffenheit', points: 4 },
    ],
  },
  {
    id: 'f4',
    text: 'Auf der Piste kreuzt eine Gruppe langsamer Fahrer deinen Weg. Wie reagierst du?',
    options: [
      { text: 'Ich wuesste nicht, wie ich ausweichen soll', points: 0 },
      { text: 'Ich bremse hart im Pflug und warte', points: 1 },
      { text: 'Ich weiche mit einem grossen Bogen aus', points: 2 },
      { text: 'Ich passe mein Tempo an und umfahre sie mit kontrollierten Schwuengen', points: 3 },
      { text: 'Ich wechsle spontan Radius und Tempo, ohne meinen Fluss zu verlieren', points: 4 },
    ],
  },
  {
    id: 'f5',
    text: 'Du faehrst eine laengere rote Piste. Was beschreibt dich am Ende der Abfahrt am besten?',
    options: [
      { text: 'Ich wuerde eine rote Piste nicht fahren', points: 0 },
      { text: 'Ich bin erschoepft und musste mehrmals anhalten', points: 1 },
      { text: 'Ich bin etwas muede, hab es aber runtergeschafft', points: 2 },
      { text: 'War angenehm, gute Kontrolle durchgehend', points: 3 },
      { text: 'Locker, ich haette noch Reserven fuer schwierigeres Gelaende', points: 4 },
    ],
  },
]

// Adaptive Pools
export const adaptivePools = {
  low: [
    {
      id: 'a-low-1',
      text: 'Der Sessellift haelt nicht an \u2014 du musst im Fahren aufsteigen. Wie gehst du das an?',
      options: [
        { text: 'Ich kenne Sessellifte noch nicht', points: 0 },
        { text: 'Ich brauche Hilfe beim Einsteigen', points: 1 },
        { text: 'Klappt, aber ich bin nervoes', points: 2 },
        { text: 'Routine, auch das Aussteigen ist sicher', points: 3 },
        { text: 'Problemlos, auch bei schwierigen Ausstiegsstellen', points: 4 },
      ],
    },
    {
      id: 'a-low-2',
      text: 'Du faehrst in einer Gruppe und sollst dem Vordermann folgen. Was passiert?',
      options: [
        { text: 'Ich verliere sofort den Anschluss', points: 0 },
        { text: 'Ich fahre viel langsamer und bleibe zurueck', points: 1 },
        { text: 'Ich kann folgen, wenn das Tempo nicht zu hoch ist', points: 2 },
        { text: 'Ich halte gut mit und kann das Tempo anpassen', points: 3 },
        { text: 'Ich koennte fuehren und das Tempo fuer die Gruppe setzen', points: 4 },
      ],
    },
  ],
  mid: [
    {
      id: 'a-mid-1',
      text: 'Am Ende des Tages ist die Piste hart und griffig gefroren. Was aendert sich bei dir?',
      options: [
        { text: 'Ich hoere bei diesen Bedingungen auf zu fahren', points: 0 },
        { text: 'Ich fahre sehr vorsichtig und nur auf blauen Pisten', points: 1 },
        { text: 'Ich fahre, aber meine Ski rutschen oefter weg', points: 2 },
        { text: 'Ich erhoehe den Kantendruck bewusst und fahre kontrolliert', points: 3 },
        { text: 'Hart oder weich macht fuer mich kaum einen Unterschied', points: 4 },
      ],
    },
    {
      id: 'a-mid-2',
      text: 'Dein Skilehrer sagt: "Jetzt fahren wir mal nur auf den Kanten, ohne Rutschen." Wie klingt das fuer dich?',
      options: [
        { text: 'Ich weiss nicht was damit gemeint ist', points: 0 },
        { text: 'Das hab ich noch nie gemacht', points: 1 },
        { text: 'Ich kann es auf flachen Abschnitten ansatzweise', points: 2 },
        { text: 'Ich carve bewusst, spuere die Kante greifen', points: 3 },
        { text: 'Mein Standardfahren ist Carving, Rutschen muss ich bewusst einsetzen', points: 4 },
      ],
    },
  ],
  high: [
    {
      id: 'a-high-1',
      text: 'Du stehst vor einem Buckelpisten-Abschnitt (Moguls). Was tust du?',
      options: [
        { text: 'Ich fahre einen anderen Weg', points: 0 },
        { text: 'Ich kaempfe mich irgendwie durch', points: 1 },
        { text: 'Ich fahre durch, aber verliere oft den Rhythmus', points: 2 },
        { text: 'Ich absorbiere die Buckel mit den Beinen und halte den Rhythmus', points: 3 },
        { text: 'Ich nutze die Buckelform aktiv fuer meine Schwuenge', points: 4 },
      ],
    },
    {
      id: 'a-high-2',
      text: 'Neben der Piste liegt 30cm unverspurter Pulverschnee. Wie faehrst du?',
      options: [
        { text: 'Ich bleibe auf der Piste', points: 0 },
        { text: 'Ich probiere es, komme aber kaum voran', points: 1 },
        { text: 'Ich fahre rein, muss aber hart arbeiten', points: 2 },
        { text: 'Ich passe meinen Schwung an: mehr Belastung, weniger Kante', points: 3 },
        { text: 'Tiefschnee ist mein Lieblingsterrain \u2014 fluessige Schwuenge, Gewichtsverlagerung nach hinten', points: 4 },
      ],
    },
  ],
}

// Gemeinsame Fragen 8-10 (alle Levels)
export const commonQuestions = [
  {
    id: 'c1',
    text: 'Wie schaetzt du dein Koennen im Vergleich zu dem, was du auf dem Berg siehst?',
    options: [
      { text: 'Ich bin absoluter Anfaenger', points: 0 },
      { text: 'Ich gehoere zu den unsichereren Fahrern', points: 1 },
      { text: 'Durchschnitt \u2014 solide, aber nicht auffaellig', points: 2 },
      { text: 'Ueberdurchschnittlich \u2014 ich fahre sicherer als die meisten', points: 3 },
      { text: 'Ich gehoere zu den besten Fahrern auf der Piste', points: 4 },
    ],
  },
  {
    id: 'c2',
    text: 'Wie viele Skitage hattest du insgesamt in deinem Leben?',
    options: [
      { text: '0 (noch nie)', points: 0 },
      { text: '1\u20135 Tage', points: 1 },
      { text: '6\u201320 Tage', points: 2 },
      { text: '21\u201350 Tage', points: 3 },
      { text: 'Mehr als 50 Tage', points: 4 },
    ],
  },
  {
    id: 'c3',
    text: 'Welche Aussage trifft am besten auf dich zu?',
    options: [
      { text: 'Ich muss alles von Grund auf lernen', points: 0 },
      { text: 'Ich kenne die Grundlagen, will aber sicherer werden', points: 1 },
      { text: 'Ich fahre solide und will meine Technik verbessern', points: 2 },
      { text: 'Ich bin fortgeschritten und suche spezifisches Feintuning', points: 3 },
      { text: 'Ich fahre quasi alles und will an Details wie Rennlauftechnik arbeiten', points: 4 },
    ],
  },
]
