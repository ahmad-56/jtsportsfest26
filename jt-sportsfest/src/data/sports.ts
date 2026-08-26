export type Sport = {
  number: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  teamSize: string;
  date: string;
  age: string;
  format: string;
  rules: string[];
  note?: string;
};

const sportsCatalog: Sport[] = [
  {
    number: "01",
    name: "Cricket",
    slug: "cricket",
    category: "Team Sport",
    image: "/images/sports/cricket.jpg",
    description:
      "Compete in an exciting cricket tournament that tests teamwork, strategy, discipline and individual performance.",
    teamSize: "11 playing + 2 subs",
    date: "September 25–27",
    age: "U17, U19",
    format: "10 Overs / 5 Overs",
    rules: [
      "All teams must report at least 30 minutes before their scheduled match.",
      "Boys Category: 10 Overs per Innings.",
      "Girls Category: 5 Overs per Innings.",
      "Boys Category: Hardball.",
      "Girls Category: Tapeball.",
    ],
    note:
      "Teams must bring their own approved cricket equipment unless informed otherwise. The umpire’s decision will be considered final.",
  },
  {
    number: "02",
    name: "Football",
    slug: "football",
    category: "Team Sport",
    image: "/images/sports/football.png",
    description:
      "A fast-paced football competition focused on teamwork, skill, coordination and sportsmanship.",
    teamSize: "6 playing + 2 subs",
    date: "October 4–6",
    age: "U17, U19",
    format: "Knockout",
    rules: [
      "Teams must arrive 30 minutes before their match.",
      "Only registered players may participate.",
      "The referee’s decision will be final.",
      "Serious misconduct may result in immediate disqualification.",
    ],
    note:
      "Players should bring appropriate footwear and protective equipment.",
  },
  {
    number: "03",
    name: "Archery",
    slug: "archery",
    category: "Individual Sport",
    image: "/images/sports/archery.png",
    description:
      "A precision archery competition testing focus, accuracy, consistency, and composure under pressure.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "U17, U19",
    format: "Individual",
    rules: [
      "Participants must follow all range safety instructions.",
      "Only official equipment is permitted.",
      "Each shot must be taken within the allotted time.",
      "The judges’ decisions will be final.",
    ],
    note:
      "Participants should handle equipment responsibly and follow all safety guidelines.",
  },

  {
    number: "04",
    name: "Arm Wrestling",
    slug: "arm-wrestling",
    category: "Individual Sport",
    image: "/images/sports/arm-wrestling.png",
    description:
      "A strength-based contest emphasizing power, technique, endurance, and fair competition.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "U17, U19",
    format: "Individual",
    rules: [
      "Matches begin only on the referee’s signal.",
      "Elbows must remain on the designated pad.",
      "Unsportsmanlike conduct may result in disqualification.",
      "The referee’s decision is final.",
    ],
    note:
      "Participants should warm up properly before competing.",
  },

  {
    number: "05",
    name: "Badminton",
    slug: "badminton",
    category: "Racquet Sport",
    image: "/images/sports/badminton.png",
    description:
      "A fast-paced badminton tournament showcasing agility, precision, strategy, and quick reflexes.",
    teamSize: "Singles / Doubles",
    date: "October 4–6",
    age: "U17, U19",
    format: "Singles / Doubles",
    rules: [
      "Players must report before their scheduled match.",
      "Standard badminton rules will apply.",
      "Only registered participants may compete.",
      "Officials' decisions are final.",
    ],
    note:
      "Participants should bring their own racquets if possible.",
  },

  {
    number: "06",
    name: "Athletics",
    slug: "athletics",
    category: "Track & Field",
    image: "/images/sports/atheletics.png",
    description:
      "A competitive athletics event featuring speed, endurance, strength, and determination across multiple disciplines.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "U17, U19",
    format: "Individual Events",
    rules: [
      "Athletes must compete only in registered events.",
      "False starts may result in disqualification.",
      "Officials' decisions are final.",
      "Proper sports attire is required.",
    ],
    note:
      "Arrive early for event check-in and warm-up.",
  },

  {
    number: "07",
    name: "Basketball",
    slug: "basketball",
    category: "Team Sport",
    image: "/images/sports/basket-ball.jpg",
    description:
      "An exciting basketball tournament highlighting teamwork, skill, speed, and competitive spirit.",
    teamSize: "6 playing + 2 subs",
    date: "October 4–6",
    age: "U17, U19",
    format: "Knockout",
    rules: [
      "Teams must report 30 minutes before matches.",
      "Only registered players may participate.",
      "FIBA-based rules will be followed.",
      "Referees’ decisions are final.",
    ],
    note:
      "Players should wear appropriate non-marking sports shoes.",
  },

  {
    number: "08",
    name: "Chess",
    slug: "chess",
    category: "Mind Sport",
    image: "/images/sports/chess.png",
    description:
      "A strategic chess competition testing critical thinking, planning, patience, and decision-making skills.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "U17, U19",
    format: "Individual",
    rules: [
      "Standard chess rules will apply.",
      "Touch-move rule is enforced.",
      "Players must respect time controls.",
      "Arbiters' decisions are final.",
    ],
    note:
      "Maintain silence throughout all matches.",
  },

  {
    number: "09",
    name: "Darts",
    slug: "darts",
    category: "Precision Sport",
    image: "/images/sports/darts.png",
    description:
      "A precision darts competition rewarding accuracy, consistency, concentration, and steady nerves.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "U17, U19",
    format: "Individual",
    rules: [
      "Players throw only after the previous turn ends.",
      "Official scoring will be maintained.",
      "Unsportsmanlike conduct is prohibited.",
      "Judges' decisions are final.",
    ],
    note:
      "Handle darts safely at all times.",
  },

  {
    number: "10",
    name: "Gaming",
    slug: "gaming",
    category: "Esports",
    image: "/images/sports/gaming.png",
    description:
      "A competitive esports tournament showcasing teamwork, strategy, quick decision-making, and gaming excellence.",
    teamSize: "Depends on game",
    date: "October 4–6",
    age: "U17, U19",
    format: "Game-dependent",
    rules: [
      "Only approved game settings may be used.",
      "Cheating results in immediate disqualification.",
      "Players must arrive before match time.",
      "Tournament officials' decisions are final.",
    ],
    note:
      "Bring personal peripherals if permitted by organizers.",
  },

  {
    number: "11",
    name: "Hockey",
    slug: "hockey",
    category: "Team Sport",
    image: "/images/hero-sports.jpg",
    description:
      "A dynamic hockey competition emphasizing teamwork, speed, coordination, and tactical gameplay.",
    teamSize: "11 playing + 2 subs",
    date: "October 4–6",
    age: "U17, U19",
    format: "Knockout",
    rules: [
      "Teams must report before match time.",
      "Only registered players may participate.",
      "Officials' decisions are final.",
      "Dangerous play may result in penalties.",
    ],
    note:
      "Players should wear appropriate protective equipment.",
  },

  {
    number: "12",
    name: "Scavenger Hunt",
    slug: "scavenger-hunt",
    category: "Adventure Event",
    image: "/images/hero-sports.jpg",
    description:
      "An engaging scavenger hunt challenging teamwork, creativity, problem-solving, and time management skills.",
    teamSize: "4 playing + 2 subs",
    date: "October 4–6",
    age: "U17, U19",
    format: "Team Challenge",
    rules: [
      "Teams must stay together throughout the event.",
      "All clues must be completed fairly.",
      "Damaging property is strictly prohibited.",
      "Organizers' decisions are final.",
    ],
    note:
      "Comfortable footwear is recommended.",
  },

  {
    number: "13",
    name: "Snooker",
    slug: "snooker",
    category: "Cue Sport",
    image: "/images/hero-sports.jpg",
    description:
      "A snooker tournament testing precision, strategy, patience, and tactical shot-making abilities.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "U17, U19",
    format: "Individual",
    rules: [
      "Standard snooker rules apply.",
      "Respect opponents and equipment.",
      "Only registered players may compete.",
      "Referees' decisions are final.",
    ],
    note:
      "Handle cues and tables with care.",
  },

  {
    number: "14",
    name: "Strongmen",
    slug: "strongman",
    category: "Strength Sport",
    image: "/images/sports/strongman.png",
    description:
      "A challenging strongman competition measuring strength, endurance, determination, and resilience.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "U17, U19",
    format: "Individual",
    rules: [
      "Participants must follow event instructions.",
      "Unsafe lifting techniques are prohibited.",
      "Officials' decisions are final.",
      "Proper sports attire is required.",
    ],
    note:
      "Warm up thoroughly before participating.",
  },

  {
    number: "15",
    name: "Swimming",
    slug: "swimming",
    category: "Aquatic Sport",
    image: "/images/hero-sports.jpg",
    description:
      "A competitive swimming event highlighting speed, endurance, technique, and determination in the pool.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "U17, U19",
    format: "Individual Events",
    rules: [
      "Swimmers must report before race time.",
      "False starts may result in penalties.",
      "Officials' decisions are final.",
      "Appropriate swimwear is mandatory.",
    ],
    note:
      "Bring your own swim cap and goggles.",
  },

  {
    number: "16",
    name: "Tennis",
    slug: "tennis",
    category: "Racquet Sport",
    image: "/images/sports/tennis.png",
    description:
      "A competitive tennis tournament showcasing agility, precision, endurance, and strategic gameplay.",
    teamSize: "Singles / Doubles",
    date: "October 4–6",
    age: "U17, U19",
    format: "Singles / Doubles",
    rules: [
      "Players must arrive before scheduled matches.",
      "Standard tennis rules apply.",
      "Only registered participants may compete.",
      "Officials' decisions are final.",
    ],
    note:
      "Participants are encouraged to bring their own racquets.",
  },

  {
    number: "17",
    name: "Tug of War",
    slug: "tug-of-war",
    category: "Team Sport",
    image: "/images/sports/tug-of-war.jpg",
    description:
      "A thrilling tug of war contest emphasizing teamwork, coordination, strength, and determination.",
    teamSize: "8 playing",
    date: "October 4–6",
    age: "U17, U19",
    format: "Knockout",
    rules: [
      "Teams compete only on the referee’s signal.",
      "Only registered players may participate.",
      "Unsportsmanlike conduct is prohibited.",
      "Referees' decisions are final.",
    ],
    note:
      "Wear shoes with good grip for safety.",
  },

  {
    number: "18",
    name: "Throwball",
    slug: "throwball",
    category: "Team Sport",
    image: "/images/sports/throwball.png",
    description:
      "A fast-moving throwball tournament focused on teamwork, coordination, communication, and quick reflexes.",
    teamSize: "7 playing + 2 subs",
    date: "October 4–6",
    age: "U17, U19",
    format: "Knockout",
    rules: [
      "Teams must report before match time.",
      "Only registered players may participate.",
      "Standard throwball rules apply.",
      "Officials' decisions are final.",
    ],
    note:
      "Players should wear appropriate sports attire.",
  },

  {
    number: "19",
    name: "Table Tennis",
    slug: "table-tennis",
    category: "Racquet Sport",
    image: "/images/sports/table-tennis.jpg",
    description:
      "A competitive table tennis tournament testing speed, precision, reflexes, and tactical play.",
    teamSize: "Singles / Doubles",
    date: "October 4–6",
    age: "U17, U19",
    format: "Singles / Doubles",
    rules: [
      "Standard table tennis rules apply.",
      "Players must arrive before their match.",
      "Only registered participants may compete.",
      "Officials' decisions are final.",
    ],
    note:
      "Participants are encouraged to bring their own paddles.",
  },

  {
    number: "20",
    name: "Volleyball",
    slug: "volleyball",
    category: "Team Sport",
    image: "/images/sports/volleyball.png",
    description:
      "An energetic volleyball tournament celebrating teamwork, coordination, athleticism, and competitive excellence.",
    teamSize: "6 playing + 2 subs",
    date: "October 4–6",
    age: "U17, U19",
    format: "Knockout",
    rules: [
      "Teams must report before match time.",
      "Only registered players may participate.",
      "Standard volleyball rules apply.",
      "Referees' decisions are final.",
    ],
    note:
      "Players should wear appropriate sports shoes and attire.",
  },

  {
  number: "21",
  name: "Ludo",
  slug: "ludo",
  category: "Board Game",
  image: "/images/sports/ludo.png",
  description:
    "A thrilling Ludo tournament emphasizing strategy, classic board tactics, precise dice rolls, and good sportsmanship.",
  teamSize: "1 player (or 2 for doubles)",
  date: "October 4–6",
  age: "U17, U19",
  format: "Knockout",
  rules: [
    "Players must arrive 15 minutes before their scheduled match.",
    "Only registered participants may play.",
    "Standard Ludo tournament rules will apply regarding dice rolls and token movement.",
    "The referee/arbiter's decision will be final.",
  ],
  note:
    "Game boards and official dice will be provided at the venue.",
  },

  {
    number: "22",
    name: "Water Polo",
    slug: "water-polo",
    category: "Team Sport",
    image: "/images/sports/water-polo.png",
    description:
      "A fast-paced water polo competition showcasing teamwork, endurance, tactical play, and swimming ability.",
    teamSize: "7 playing + 2 subs",
    date: "October 4–6",
    age: "U17, U19",
    format: "Knockout",
    rules: [
      "Teams must report before their scheduled match.",
      "Only registered players may participate.",
      "Dangerous play may result in penalties or disqualification.",
      "The referee’s decision will be final.",
    ],
    note:
      "Participants should wear appropriate swimwear and water polo caps.",
  },

  {
    number: "23",
    name: "Padel",
    slug: "padel",
    category: "Racquet Sport",
    image: "/images/hero-sports.jpg",
    description:
      "A dynamic padel tournament combining teamwork, quick reflexes, precision, and strategic shot-making.",
    teamSize: "2 playing",
    date: "October 4–6",
    age: "U17, U19",
    format: "Doubles Only",
    rules: [
      "Players must report before their scheduled match.",
      "Standard padel rules will be followed.",
      "Only registered participants may compete.",
      "Officials' decisions are final.",
    ],
    note:
      "Participants are encouraged to bring their own padel racquets if available.",
  },
];

const pdfSports: Array<{
  slug: string;
  name?: string;
  age: string;
}> = [
  { slug: "football", name: "Futsal", age: "Boys U17, U19; Girls U17, U19" },
  { slug: "basketball", age: "Boys U17, U19; Girls U17, U19" },
  { slug: "cricket", age: "Boys Open; Girls Open" },
  { slug: "table-tennis", age: "U17, U19, Open" },
  { slug: "badminton", age: "U17, U19, Open" },
  { slug: "volleyball", age: "Boys U17, U19; Girls U17, U19" },
  { slug: "throwball", age: "Boys Open; Girls U17, U19" },
  { slug: "tug-of-war", age: "Boys U17, U19; Girls U17, U19" },
  { slug: "padel", age: "Boys U17, U19; Girls Open" },
  { slug: "chess", age: "Open" },
  { slug: "arm-wrestling", age: "Open" },
  { slug: "darts", age: "Open" },
  { slug: "athletics", age: "Boys U17, U19; Girls U17, U19" },
  { slug: "strongman", age: "Open" },
  { slug: "snooker", age: "Open" },
  { slug: "gaming", age: "Open" },
  { slug: "swimming", age: "Boys U17, U19" },
  { slug: "water-polo", age: "Boys Open" },
  { slug: "archery", age: "Open" },
  { slug: "hockey", age: "Boys Open" },
  { slug: "scavenger-hunt", age: "Open" },
];

const pdfSportBySlug = new Map(
  pdfSports.map((sport, index) => [
    sport.slug,
    { ...sport, order: index },
  ]),
);

export const sports: Sport[] = sportsCatalog
  .map((sport, originalIndex) => {
    const pdfSport = pdfSportBySlug.get(sport.slug);

    return {
      ...sport,
      name: pdfSport?.name ?? sport.name,
      age: pdfSport?.age ?? sport.age,
      pdfOrder: pdfSport?.order ?? pdfSports.length + originalIndex,
    };
  })
  .sort((a, b) => a.pdfOrder - b.pdfOrder)
  .map(({ pdfOrder, ...sport }, index) => {
    void pdfOrder;

    return {
      ...sport,
      number: String(index + 1).padStart(2, "0"),
    };
  });
