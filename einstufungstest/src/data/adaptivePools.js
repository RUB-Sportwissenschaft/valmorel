// Adaptive Pools — Auswahl nach Frage 5: <8 Pkt → low, 8-14 → mid, ≥14 → high
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
