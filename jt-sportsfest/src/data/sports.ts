export type SportEventDetail = {
  events: string[];
  rules: string[];
  note?: string[];
};

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
  events?: string[];
  eventDetails?: SportEventDetail[];
  note?: string[];
};

const sportsCatalog: Sport[] = [
  {
    number: "01",
    name: "Cricket",
    slug: "cricket",
    category: "Team Sport",
    image: "/images/sports/cricket.jpg",
    description: "Compete in an exciting cricket tournament that tests teamwork, strategy, discipline and individual performance.",
    teamSize: "11 A Side with 1 Super Sub",
    date: "September 25–27",
    age: "BOYS Open Hard Ball, BOYS Open Tape Ball; GIRLS Open Tape Ball",
    format: "8 Overs per inning Match (with 8 ball per Over) / 6 Overs per inning Match",
    rules: [
      "11 A Side with 1 Super Sub",
      "White Ball to be used",
      "All ICC Rules for Cricket to be applied except LBW",
      "8 Overs per inning Match (with 8 ball per Over)",
      "One bowler can bowl maximum 2 overs in an innings",
      "2 Golden balls will be bowled per innings, for which score will be doubled (e.g. if 2 scored, that will be counted as 4)",
      "6 Overs per inning Match",
    ],
    events: [
      "BOYS Open Hard Ball",
      "BOYS Open Tape Ball",
      "GIRLS Open Tape Ball",
    ],
    eventDetails: [
      {
        events: [
          "Boys (Open) Hardball",
        ],
        rules: [
          "11 A Side with 1 Super Sub",
          "White Ball to be used",
          "All ICC Rules for Cricket to be applied except LBW",
          "8 Overs per inning Match (with 8 ball per Over)",
          "One bowler can bowl maximum 2 overs in an innings",
          "2 Golden balls will be bowled per innings, for which score will be doubled (e.g. if 2 scored, that will be counted as 4)",
        ],
        note: [
          "Proper Sports Kit with White Shirt & white trouser",
        ],
      },
      {
        events: [
          "Boys (Open) Tapeball",
          "Girls (Open) Tapeball",
        ],
        rules: [
          "11 A Side with 1 Super Sub",
          "All ICC Rules for Cricket to be applied except LBW",
          "6 Overs per inning Match",
          "One bowler can bowl maximum 2 overs in an innings",
          "2 Golden balls will be bowled per innings, for which score will be doubled (e.g. if 2 scored, that will be counted as 4)",
        ],
        note: [
          "Colored Kit",
          "Proper Sports Kit (Shirt & trouser) with Joggers",
        ],
      },
    ],
    note: [
      "Proper Sports Kit with White Shirt & white trouser",
      "Colored Kit",
      "Proper Sports Kit (Shirt & trouser) with Joggers",
      "Teams must bring their own approved cricket equipment unless informed otherwise. The umpire’s decision will be considered final.",
    ],
  },

  {
    number: "02",
    name: "Futsal",
    slug: "football",
    category: "Team Sport",
    image: "/images/sports/football.png",
    description: "A fast-paced football competition focused on teamwork, skill, coordination and sportsmanship.",
    teamSize: "5 A Side, 3 Rolling Subs",
    date: "October 4–6",
    age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19",
    format: "2 halves of 10 minutes duration with 5 minutes break",
    rules: [
      "5 A Side, 3 Rolling Subs",
      "4 Size (Low Bounce) Ball to be used for the event",
      "a yellow card cautions a player for unsporting behavior, dissent, or persistent fouls, resulting in the team playing short-handed for two minutes or until a goal is conceded.",
      "A red card leads to an ejection for serious foul play or two yellow cards, forcing the team to play with one less player for two full minutes (the sent-off player cannot return or be substituted)",
      "5-meter (5m) distance rule requires all opposing players to retreat at least 5 meters away from the ball during restarts like free kicks, kick-ins, corner kicks, and kick-offs. Defenders must maintain this spacing until the ball is put back into play",
      "The team taking the restart has only 4 seconds to play the ball once ready, or possession passes to the opponent",
      "2 halves of 10 minutes duration with 5 minutes break",
    ],
    events: [
      "BOYS U-17",
      "BOYS U-19",
      "GIRLS U-17",
      "GIRLS U-19",
    ],
    eventDetails: [
      {
        events: [
          "U17 Girls",
          "U19 Girls",
          "U17 Boys",
          "U19 Boys",
        ],
        rules: [
          "5 A Side, 3 Rolling Subs",
          "4 Size (Low Bounce) Ball to be used for the event",
          "a yellow card cautions a player for unsporting behavior, dissent, or persistent fouls, resulting in the team playing short-handed for two minutes or until a goal is conceded.",
          "A red card leads to an ejection for serious foul play or two yellow cards, forcing the team to play with one less player for two full minutes (the sent-off player cannot return or be substituted)",
          "5-meter (5m) distance rule requires all opposing players to retreat at least 5 meters away from the ball during restarts like free kicks, kick-ins, corner kicks, and kick-offs. Defenders must maintain this spacing until the ball is put back into play",
          "The team taking the restart has only 4 seconds to play the ball once ready, or possession passes to the opponent",
          "2 halves of 10 minutes duration with 5 minutes break",
        ],
        note: [
          "Footwear: Only Grippers allowed for Artificial Grass Field",
          "KIT: Proper Sports Shirt with Shorts, Trouser allowed for Goal Keeper",
        ],
      },
    ],
    note: [
      "Footwear: Only Grippers allowed for Artificial Grass Field",
      "KIT: Proper Sports Shirt with Shorts, Trouser allowed for Goal Keeper",
      "Players should bring appropriate footwear and protective equipment.",
    ],
  },

  {
    number: "03",
    name: "Archery",
    slug: "archery",
    category: "Individual Sport",
    image: "/images/sports/archery.png",
    description: "A precision archery competition testing focus, accuracy, consistency, and composure under pressure.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "BOYS; GIRLS",
    format: "Individual",
    rules: [
      "Participants must follow all range safety instructions.",
      "Only official equipment is permitted.",
      "Each shot must be taken within the allotted time.",
      "The judges’ decisions will be final.",
    ],
    events: [
      "BOYS",
      "GIRLS",
    ],
    eventDetails: [
      {
        events: [
          "Boys",
          "Girls",
        ],
        rules: [
        ],
      },
    ],
    note: [
      "Participants should handle equipment responsibly and follow all safety guidelines.",
    ],
  },

  {
    number: "04",
    name: "Arm Wrestling",
    slug: "arm-wrestling",
    category: "Individual Sport",
    image: "/images/sports/arm-wrestling.png",
    description: "A strength-based contest emphasizing power, technique, endurance, and fair competition.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "Open",
    format: "Individual",
    rules: [
      "Arm wrestling matches require both competitors to keep their elbows on a padded surface and pin an opponent's hand to the touch pad",
      "Elbow Placement: Your competing elbow must stay flat on the elbow pad at all times.",
      "Grip Position: Palms must touch palm-to-palm with straight wrists and visible thumb knuckles.",
      "The Peg: Your free hand must hold onto the peg on the side of the table throughout the match.",
      "Shoulders: Shoulders must be square to the table and not cross the center line before the start.",
      "The Start: The match officially begins only when the referee gives the audible command \"Ready, Go!",
      "The Pin: You win by forcing any part of your opponent's wrist, hand, or fingers down to touch the touch pad.",
      "The Strap: If grips slip apart during a match, the referees will tie the hands together using a strap.",
      "Elbow Foul: Lifting your elbow off the pad or letting it slip outside the pad's border.",
      "False Start: Moving your hand or arm before the referee says \"Go\".",
      "Body Contact: Touching your own arm, chin, or shoulder with your competing hand.",
      "Running/Loss of Contact: Losing contact with the peg using your non-competing hand.",
    ],
    events: [
      "70kg",
      "80kg",
      "Open",
      "60kg",
      "70 kg",
    ],
    eventDetails: [
      {
        events: [
          "Under 70Kg  Boys",
          "Under 80Kg Boys",
          "Free Weight Boys",
          "Under 60Kg Girls",
          "Under 70Kg Girls",
          "Free Weight Girls",
        ],
        rules: [
          "Arm wrestling matches require both competitors to keep their elbows on a padded surface and pin an opponent's hand to the touch pad",
          "Elbow Placement: Your competing elbow must stay flat on the elbow pad at all times.",
          "Grip Position: Palms must touch palm-to-palm with straight wrists and visible thumb knuckles.",
          "The Peg: Your free hand must hold onto the peg on the side of the table throughout the match.",
          "Shoulders: Shoulders must be square to the table and not cross the center line before the start.",
          "The Start: The match officially begins only when the referee gives the audible command \"Ready, Go!",
          "The Pin: You win by forcing any part of your opponent's wrist, hand, or fingers down to touch the touch pad.",
          "The Strap: If grips slip apart during a match, the referees will tie the hands together using a strap.",
          "Elbow Foul: Lifting your elbow off the pad or letting it slip outside the pad's border.",
          "False Start: Moving your hand or arm before the referee says \"Go\".",
          "Body Contact: Touching your own arm, chin, or shoulder with your competing hand.",
          "Running/Loss of Contact: Losing contact with the peg using your non-competing hand.",
        ],
      },
    ],
    note: [
      "Participants should warm up properly before competing.",
    ],
  },

  {
    number: "05",
    name: "Badminton",
    slug: "badminton",
    category: "Racquet Sport",
    image: "/images/sports/badminton.png",
    description: "A fast-paced badminton tournament showcasing agility, precision, strategy, and quick reflexes.",
    teamSize: "Singles / Doubles",
    date: "October 4–6",
    age: "BOYS U-17 Singles, BOYS U-19 Singles, BOYS Open Doubles; GIRLS U-17 Singles, GIRLS U-19 Singles, Girls Open Doubles",
    format: "For Round 1, One game of 15 points will be played",
    rules: [
      "For Round 1, One game of 15 points will be played",
      "Standard Serving , General Faults & Play Rules to be followed",
    ],
    events: [
      "BOYS U-17  Singles",
      "BOYS U-19  Singles",
      "BOYS Open Doubles",
      "GIRLS U-17  Singles",
      "GIRLS U-19  Singles",
      "Girls Open Doubles",
    ],
    eventDetails: [
      {
        events: [
          "U17 Girls Singles",
          "U19 Girls Singles",
          "Girls Open Doubles",
          "U17 Boys Singles",
          "U19 Boys Singles",
          "Boys Open Doubles",
        ],
        rules: [
          "For Round 1, One game of 15 points will be played",
          "Standard Serving , General Faults & Play Rules to be followed",
        ],
        note: [
          "Proper Sports Kit with Sports Shirt & Shorts (trousers for Girls), Only Non-marking shoes allowed to have sufficient grip on floor surface",
        ],
      },
    ],
    note: [
      "Proper Sports Kit with Sports Shirt & Shorts (trousers for Girls), Only Non-marking shoes allowed to have sufficient grip on floor surface",
      "Participants should bring their own racquets if possible.",
    ],
  },

  {
    number: "06",
    name: "Athletics",
    slug: "athletics",
    category: "Track & Field",
    image: "/images/sports/atheletics.png",
    description: "A competitive athletics event featuring speed, endurance, strength, and determination across multiple disciplines.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19",
    format: "Individual Events",
    rules: [
      "Running Events",
      "Starting: Runners must wait for the Starter's Caution and start behind the line. Moving before the caution causes a false start, leading to disqualification.",
      "Lanes: Sprint athletes must stay inside their assigned lanes from start to finish. Stepping out of a lane to gain an unfair advantage brings disqualification.",
      "Obstruction: Runners cannot push, block, or trip other competitors.",
      "Relays: The baton must pass completely within the designated exchange zone.",
      "Finish: The official placing is decided by the first part of the competitor's torso reaching the finish line plane. (Camera finish will only be recorded by Officials & their decision will be considered final). Review can be claimed within 30 minutes after the end of that event by paying the Review fee.",
      "Jumping Events",
      "Long Jump: Athletes must take off behind or on the takeoff board line; stepping past it renders the jump a foul (invalid).",
      "Throwing Events (Shot Put)",
      "Sector Boundaries: The thrown implement must land completely inside the marked landing sector lines.",
      "Foul Lines: Athletes cannot step outside or touch the front line of the throwing circle or runway during the attempt.",
      "Other Standard Athletics Rules (IAAF) will be applicable.",
    ],
    events: [
      "100m-Race BOYS U-17",
      "100m-Race BOYS U-19",
      "110-Hurdle BOYS U-17",
      "110-Hurdle BOYS U-19",
      "400m Race BOYS U-17",
      "400m Race BOYS U-19",
      "Long Jump BOYS U-17",
      "Long Jump BOYS U-19",
      "400m Relay Race BOYS U-17  (4x100)",
      "400m Relay Race BOYS U-19  (4x100)",
      "Shot Put BOYS U-17",
      "Shot Put  BOYS U-19",
      "100m-Race GIRLS U-17",
      "100m-Race GIRLS U-19",
      "100m-Hurdle GIRLS U-17",
      "100m-Hurdle GIRLS U-19",
      "400m-Race GIRLS U-17",
      "400m-Race GIRLS U-19",
      "Long Jump GIRLS U-17",
      "Long Jump GIRLS U-19",
      "400m Relay Race GIRLS U-17  (4x100)",
      "400m Relay Race GIRLS U-19  (4x100)",
      "Shot Put  GIRLS U-17",
      "Shot Put  GIRLS U-19",
    ],
    eventDetails: [
      {
        events: [
          "U17 Girls 100m Sprint",
          "U17 Girls 400m Race",
          "U17 Girls 4 x100m Relay Race",
          "U19 Girls 100m Sprint",
          "U19 Girls 400m Race",
          "U19 Girls 4 x100m Relay Race",
          "U17 Girls 50m Hurdles",
          "U19 Girls 50m Hurdles",
          "U17 Girls Long Jump",
          "U19 Girls Long Jump",
          "U17 Girls Shot Put",
          "U19 Girls Shot Put",
          "U17 Boys 100m Sprint",
          "U17 Boys 400m Race",
          "U17 Boys 4 x100m Relay Race",
          "U17 Boys 110m Hurdles",
          "U17 Boys Long Jump",
          "U17 Boys Shot Put",
          "U19 Boys 100m Sprint",
          "U19 Boys 400m Race",
          "U19 Boys 4 x100m Relay Race",
          "U19 Boys 110m Hurdles",
          "U19 Boys Long Jump",
          "U19 Boys Shot Put",
        ],
        rules: [
          "Running Events",
          "Starting: Runners must wait for the Starter's Caution and start behind the line. Moving before the caution causes a false start, leading to disqualification.",
          "Lanes: Sprint athletes must stay inside their assigned lanes from start to finish. Stepping out of a lane to gain an unfair advantage brings disqualification.",
          "Obstruction: Runners cannot push, block, or trip other competitors.",
          "Relays: The baton must pass completely within the designated exchange zone.",
          "Finish: The official placing is decided by the first part of the competitor's torso reaching the finish line plane. (Camera finish will only be recorded by Officials & their decision will be considered final). Review can be claimed within 30 minutes after the end of that event by paying the Review fee.",
          "Jumping Events",
          "Long Jump: Athletes must take off behind or on the takeoff board line; stepping past it renders the jump a foul (invalid).",
          "Throwing Events (Shot Put)",
          "Sector Boundaries: The thrown implement must land completely inside the marked landing sector lines.",
          "Foul Lines: Athletes cannot step outside or touch the front line of the throwing circle or runway during the attempt.",
          "Other Standard Athletics Rules (IAAF) will be applicable.",
        ],
      },
    ],
    note: [
      "Arrive early for event check-in and warm-up.",
    ],
  },

  {
    number: "07",
    name: "Basketball",
    slug: "basketball",
    category: "Team Sport",
    image: "/images/sports/basket-ball.jpg",
    description: "An exciting basketball tournament highlighting teamwork, skill, speed, and competitive spirit.",
    teamSize: "5 A Side with maximum 5 Substitutions allowed",
    date: "October 4–6",
    age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19",
    format: "Games use four 8-minute quarters.",
    rules: [
      "5 A Side with maximum 5 Substitutions allowed",
      "Field goals: Shots inside the three-point arc are worth 2 points. Shots from behind the arc are worth 3 points.",
      "Free throws: Worth 1 point each; awarded after specific fouls.",
      "Game length: Games use four 8-minute quarters.",
      "Traveling: Taking more than two steps without dribbling the ball.",
      "Double dribble: Stopping a dribble and starting it again, or dribbling with both hands at once.",
      "Carrying: Placing your hand underneath the ball while dribbling.",
      "Out-of-bounds: Stepping on or outside the boundary lines while holding the ball.",
      "Shot clock violation: 24 seconds of gaining possession. “3-seconds & 8-Seconds”  Rules also applicable.",
      "Other Standard FIBA Rules to be applied",
    ],
    events: [
      "BOYS U-17",
      "BOYS U-19",
      "GIRLS U-17",
      "GIRLS U-19",
    ],
    eventDetails: [
      {
        events: [
          "U17 Girls",
          "U19 Girls",
          "U17 Boys",
          "U19 Boys",
        ],
        rules: [
          "5 A Side with maximum 5 Substitutions allowed",
          "Field goals: Shots inside the three-point arc are worth 2 points. Shots from behind the arc are worth 3 points.",
          "Free throws: Worth 1 point each; awarded after specific fouls.",
          "Game length: Games use four 8-minute quarters.",
          "Traveling: Taking more than two steps without dribbling the ball.",
          "Double dribble: Stopping a dribble and starting it again, or dribbling with both hands at once.",
          "Carrying: Placing your hand underneath the ball while dribbling.",
          "Out-of-bounds: Stepping on or outside the boundary lines while holding the ball.",
          "Shot clock violation: 24 seconds of gaining possession. “3-seconds & 8-Seconds”  Rules also applicable.",
          "Other Standard FIBA Rules to be applied",
        ],
      },
    ],
    note: [
      "Players should wear appropriate non-marking sports shoes.",
    ],
  },

  {
    number: "08",
    name: "Chess",
    slug: "chess",
    category: "Mind Sport",
    image: "/images/sports/chess.png",
    description: "A strategic chess competition testing critical thinking, planning, patience, and decision-making skills.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "BOYS open; GIRLS",
    format: "Individual",
    rules: [
      "Standard chess rules will apply.",
      "Touch-move rule is enforced.",
      "Players must respect time controls.",
      "Arbiters' decisions are final.",
    ],
    events: [
      "BOYS open",
      "GIRLS",
    ],
    eventDetails: [
      {
        events: [
          "Girls",
          "Boys",
        ],
        rules: [
        ],
      },
    ],
    note: [
      "Maintain silence throughout all matches.",
    ],
  },

  {
    number: "09",
    name: "Darts",
    slug: "darts",
    category: "Precision Sport",
    image: "/images/sports/darts.png",
    description: "A precision darts competition rewarding accuracy, consistency, concentration, and steady nerves.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "BOYS Open; GIRLS",
    format: "Individual",
    rules: [
      "Players throw only after the previous turn ends.",
      "Official scoring will be maintained.",
      "Unsportsmanlike conduct is prohibited.",
      "Judges' decisions are final.",
    ],
    events: [
      "BOYS Open",
      "GIRLS",
    ],
    eventDetails: [
      {
        events: [
          "Open (Boys)",
          "Open (Girls)",
        ],
        rules: [
        ],
      },
    ],
    note: [
      "Handle darts safely at all times.",
    ],
  },

  {
    number: "10",
    name: "Gaming",
    slug: "gaming",
    category: "Esports",
    image: "/images/sports/gaming.png",
    description: "A competitive esports tournament showcasing teamwork, strategy, quick decision-making, and gaming excellence.",
    teamSize: "Depends on game",
    date: "October 4–6",
    age: "BOYS Open; GIRLS (FIFA)",
    format: "FIFA",
    rules: [
      "Only approved game settings may be used.",
      "Cheating results in immediate disqualification.",
      "Players must arrive before match time.",
      "Tournament officials' decisions are final.",
    ],
    events: [
      "BOYS Open",
      "GIRLS     (FIFA)",
    ],
    eventDetails: [
      {
        events: [
          "Open (Boys)",
          "Open (Girls)",
        ],
        rules: [
        ],
      },
    ],
    note: [
      "Bring personal peripherals if permitted by organizers.",
    ],
  },

  {
    number: "11",
    name: "Hockey",
    slug: "hockey",
    category: "Team Sport",
    image: "/images/hero-sports.jpg",
    description: "A dynamic hockey competition emphasizing teamwork, speed, coordination, and tactical gameplay.",
    teamSize: "Team size: 6 players per side with maximum 2 rolling substitutions made from the sideline.",
    date: "October 4–6",
    age: "BOYS",
    format: "Knockout",
    rules: [
      "Team size: 6 players per side with maximum 2 rolling substitutions made from the sideline.",
      "Flat side only: Players may only control, pass, or shoot the ball using the flat face of the hockey stick.",
      "No feet: Using feet or any body part to direct or stop the ball deliberately is a foul.",
      "Stick limits: Sticks must never be raised above waist height (or shoulder height in specific loose contexts) to prevent dangerous play.",
      "No contact or rough play: Physical body contact, pushing, hacking, or hitting an opponent's stick is strictly forbidden.",
      "Obstruction: Players cannot use your body or stick to shield the ball by blocking an opponent from reaching it.",
      "Free hits: Awarded for minor fouls. All opposing players must stand at least 5 meters away from the ball when the free hit is taken.",
      "No traditional penalty corners: Complex penalty corners are usually replaced in small-sided rules by a direct 1-on-1 \"Challenge\" against a single defender or played as a simple indirect free hit.",
      "Scoring: Goals can either be scored from anywhere or restricted to a designated \"striking/danger zone\" in front of the goal, depending on your specific local format.",
    ],
    events: [
      "BOYS",
    ],
    eventDetails: [
      {
        events: [
          "Boys Open",
        ],
        rules: [
          "Team size: 6 players per side with maximum 2 rolling substitutions made from the sideline.",
          "Flat side only: Players may only control, pass, or shoot the ball using the flat face of the hockey stick.",
          "No feet: Using feet or any body part to direct or stop the ball deliberately is a foul.",
          "Stick limits: Sticks must never be raised above waist height (or shoulder height in specific loose contexts) to prevent dangerous play.",
          "No contact or rough play: Physical body contact, pushing, hacking, or hitting an opponent's stick is strictly forbidden.",
          "Obstruction: Players cannot use your body or stick to shield the ball by blocking an opponent from reaching it.",
          "Free hits: Awarded for minor fouls. All opposing players must stand at least 5 meters away from the ball when the free hit is taken.",
          "No traditional penalty corners: Complex penalty corners are usually replaced in small-sided rules by a direct 1-on-1 \"Challenge\" against a single defender or played as a simple indirect free hit.",
          "Scoring: Goals can either be scored from anywhere or restricted to a designated \"striking/danger zone\" in front of the goal, depending on your specific local format.",
        ],
      },
    ],
    note: [
      "Players should wear appropriate protective equipment.",
    ],
  },

  {
    number: "12",
    name: "Scavenger Hunt",
    slug: "scavenger-hunt",
    category: "Adventure Event",
    image: "/images/hero-sports.jpg",
    description: "An engaging scavenger hunt challenging teamwork, creativity, problem-solving, and time management skills.",
    teamSize: "4 playing + 2 subs",
    date: "October 4–6",
    age: "Open",
    format: "Team Challenge",
    rules: [
      "Teams must stay together throughout the event.",
      "All clues must be completed fairly.",
      "Damaging property is strictly prohibited.",
      "Organizers' decisions are final.",
    ],
    events: [
      "Open",
    ],
    eventDetails: [
      {
        events: [
          "Open",
        ],
        rules: [
        ],
      },
    ],
    note: [
      "Comfortable footwear is recommended.",
    ],
  },

  {
    number: "13",
    name: "Snooker",
    slug: "snooker",
    category: "Cue Sport",
    image: "/images/hero-sports.jpg",
    description: "A snooker tournament testing precision, strategy, patience, and tactical shot-making abilities.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "BOYS Open",
    format: "Individual",
    rules: [
      "Standard snooker rules apply.",
      "Respect opponents and equipment.",
      "Only registered players may compete.",
      "Referees' decisions are final.",
    ],
    events: [
      "BOYS Open",
    ],
    eventDetails: [
      {
        events: [
          "Open (Boys)",
        ],
        rules: [
        ],
      },
    ],
    note: [
      "Handle cues and tables with care.",
    ],
  },

  {
    number: "14",
    name: "Strong Man",
    slug: "strongman",
    category: "Strength Sport",
    image: "/images/sports/strongman.png",
    description: "A challenging strongman competition measuring strength, endurance, determination, and resilience.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "BOYS",
    format: "Individual",
    rules: [
      "Grip the bar: Use an approved overhand or specialized grip (such as revolving thick-bars if specified by the event).",
      "Dead hang: Begin each repetition with arms fully locked out and straight at the elbow.",
      "No momentum: Feet must be off the ground. The body must remain still with no swinging, kicking, or kipping from the legs or hips",
      "Pull evenly: Elevate your body smoothly by pulling your elbows down and back.",
      "Clear the bar: Continue the upward motion until your chin is clearly higher than the top edge of the bar.",
      "Body control: Maintain a tight core and prevent excessive flaring or body twisting.",
      "Lower with control: Descend under control until your arms return to a complete dead hang with full elbow extension.",
      "Wait for the count: You cannot start the next repetition or dismount until the judge confirms the current rep is successful and your arms are fully straight",
      "Common Reasons for a \"No-Rep\"",
      "Bending the knees or kicking the legs to generate momentum.",
      "Failing to fully straighten the arms at the bottom of the movement.",
      "Not getting the chin visibly over the top of the bar.",
      "Letting go of the bar or dropping off prematurely before arm extension is verified.",
      "Plank setup: Assume a high plank (front leaning rest) with hands placed slightly wider than shoulder-width.",
      "Body alignment: Create a rigid, straight line from the top of your head down through your heels or ankles.",
      "Core engagement: Brace your abs and squeeze your glutes tightly to prevent your lower back from sagging or your hips from pikes.",
      "Descent: Bend your elbows to lower your entire body as a single synchronized unit.",
      "Elbow angle: Keep your elbows tucked at roughly a 30 to 45-degree angle relative to your torso—avoid flaring them straight out to 90 degrees.",
      "Target depth: Lower your torso until your chest reaches the required depth standard (often touching the floor, a fist, or a designated marker).",
      "The push: Press back up explosively while maintaining body rigidity.",
      "Full extension: Extend your arms completely to a full lockout at the top of each repetition.",
      "No resting: Continuous movement is required; resting is only permitted in the fully locked-out top position without sagging.",
    ],
    events: [
      "Push-Up",
      "Pull Up",
      "Circuit",
    ],
    eventDetails: [
      {
        events: [
          "Pull Ups (Boys)",
        ],
        rules: [
          "Grip the bar: Use an approved overhand or specialized grip (such as revolving thick-bars if specified by the event).",
          "Dead hang: Begin each repetition with arms fully locked out and straight at the elbow.",
          "No momentum: Feet must be off the ground. The body must remain still with no swinging, kicking, or kipping from the legs or hips",
          "Pull evenly: Elevate your body smoothly by pulling your elbows down and back.",
          "Clear the bar: Continue the upward motion until your chin is clearly higher than the top edge of the bar.",
          "Body control: Maintain a tight core and prevent excessive flaring or body twisting.",
          "Lower with control: Descend under control until your arms return to a complete dead hang with full elbow extension.",
          "Wait for the count: You cannot start the next repetition or dismount until the judge confirms the current rep is successful and your arms are fully straight",
          "Common Reasons for a \"No-Rep\"",
          "Bending the knees or kicking the legs to generate momentum.",
          "Failing to fully straighten the arms at the bottom of the movement.",
          "Not getting the chin visibly over the top of the bar.",
          "Letting go of the bar or dropping off prematurely before arm extension is verified.",
        ],
      },
      {
        events: [
          "Push Ups (Boys)",
        ],
        rules: [
          "Plank setup: Assume a high plank (front leaning rest) with hands placed slightly wider than shoulder-width.",
          "Body alignment: Create a rigid, straight line from the top of your head down through your heels or ankles.",
          "Core engagement: Brace your abs and squeeze your glutes tightly to prevent your lower back from sagging or your hips from pikes.",
          "Descent: Bend your elbows to lower your entire body as a single synchronized unit.",
          "Elbow angle: Keep your elbows tucked at roughly a 30 to 45-degree angle relative to your torso—avoid flaring them straight out to 90 degrees.",
          "Target depth: Lower your torso until your chest reaches the required depth standard (often touching the floor, a fist, or a designated marker).",
          "The push: Press back up explosively while maintaining body rigidity.",
          "Full extension: Extend your arms completely to a full lockout at the top of each repetition.",
          "No resting: Continuous movement is required; resting is only permitted in the fully locked-out top position without sagging.",
        ],
      },
      {
        events: [
          "Circuit (Boys)",
        ],
        rules: [
        ],
      },
    ],
    note: [
      "Warm up thoroughly before participating.",
    ],
  },

  {
    number: "15",
    name: "Swimming",
    slug: "swimming",
    category: "Aquatic Sport",
    image: "/images/hero-sports.jpg",
    description: "A competitive swimming event highlighting speed, endurance, technique, and determination in the pool.",
    teamSize: "Individual",
    date: "October 4–6",
    age: "BOYS UNDER-17, BOYS UNDER-19",
    format: "Individual Events",
    rules: [
      "The Start: Freestyle, breaststroke, butterfly, and individual medley races begin with a forward dive off the starting block. Backstroke and medley relays start directly in the water gripping the starting handles.",
      "False Starts: Most competitions enforce a single-start rule; moving or diving before the starting signal results in disqualification.",
      "The 15-Meter Rule: Swimmers must break the surface of the water with their head within 15 meters after the start and after each turn.",
      "Turns and Finishes: Some part of the swimmer must physically touch the pool wall at the completion of each length and at the final finish.",
      "Maximum 2 participants/event from a single school",
      "One Swimmer can participate in maximum 3 events",
    ],
    events: [
      "100m FREESTYLE UNDER-17",
      "100m FREESTYLE UNDER-19",
      "50m FREESTYLE UNDER-17",
      "50m FREESTYLE UNDER-19",
      "50m BACK STROKE UNDER-17",
      "50m BACK STROKE UNDER-19",
      "50m BREST STROKE UNDER-17",
      "50m BREST STROKE UNDER-19",
      "50m BUTTERFLY UNDER-17",
      "50m BUTTERFLY UNDER-19",
      "100m MEDLEY RELAY UNDER-17",
      "100m MEDLEY RELAY UNDER-19",
      "100m FREE RELAY UNDER-17",
      "100m FREE RELAY UNDER-19",
      "100m Individual MEDLEY U-17",
      "100m Individual MEDLEY U-19",
    ],
    eventDetails: [
      {
        events: [
          "U17 100m FC",
          "U17 50m FC",
          "U17 50m BC",
          "U17 50m Br",
          "U17 50m Bu",
          "U17 100m Medley",
          "U17 4 x 25m Medley Relay",
          "U17 4 x 25m FC Relay",
          "U19 100m FC",
          "U19 50m FC",
          "U19 50m BC",
          "U19 50m Br",
          "U19 50m Bu",
          "U19 100m Medley",
          "U19 4 x 25m Medley Relay",
          "U19 4 x 25m FC Relay",
        ],
        rules: [
          "The Start: Freestyle, breaststroke, butterfly, and individual medley races begin with a forward dive off the starting block. Backstroke and medley relays start directly in the water gripping the starting handles.",
          "False Starts: Most competitions enforce a single-start rule; moving or diving before the starting signal results in disqualification.",
          "The 15-Meter Rule: Swimmers must break the surface of the water with their head within 15 meters after the start and after each turn.",
          "Turns and Finishes: Some part of the swimmer must physically touch the pool wall at the completion of each length and at the final finish.",
          "Maximum 2 participants/event from a single school",
          "One Swimmer can participate in maximum 3 events",
        ],
      },
    ],
    note: [
      "Bring your own swim cap and goggles.",
    ],
  },

  {
    number: "16",
    name: "Tennis",
    slug: "tennis",
    category: "Racquet Sport",
    image: "/images/sports/tennis.png",
    description: "A competitive tennis tournament showcasing agility, precision, endurance, and strategic gameplay.",
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
    note: [
      "Participants are encouraged to bring their own racquets.",
    ],
  },

  {
    number: "17",
    name: "Tug of War",
    slug: "tug-of-war",
    category: "Team Sport",
    image: "/images/sports/tug-of-war.jpg",
    description: "A thrilling tug of war contest emphasizing teamwork, coordination, strength, and determination.",
    teamSize: "Team size: 8 pullers",
    date: "October 4–6",
    age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19",
    format: "Tug of War matches are completed in a best of three format",
    rules: [
      "Tug of War matches are completed in a best of three format",
      "Team size: 8 pullers",
      "Weight limits: No weight limit",
      "The Anchor: The final person in line is the anchor. The rope passes around their back and shoulder in a specified non-locking grip",
      "Grip: Hands must hold the rope with palms facing up; the rope must pass under the arms.",
      "No Locking: Wrapping the rope around any body part or locking elbows below knees is an automatic foul.",
      "No Sitting: Intentionally sitting or dropping to the ground for an extended time is prohibited.",
      "Commands: Pulls start only after the referee gives the final \"Pull\" command following preliminary ready signals.",
    ],
    events: [
      "BOYS U-17",
      "BOYS U-19",
      "GIRLS U-17",
      "GIRLS U-19",
    ],
    eventDetails: [
      {
        events: [
          "U17 Girls",
          "U19 Girls",
          "U17 Boys",
          "U19 Boys",
        ],
        rules: [
          "Tug of War matches are completed in a best of three format",
          "Team size: 8 pullers",
          "Weight limits: No weight limit",
          "The Anchor: The final person in line is the anchor. The rope passes around their back and shoulder in a specified non-locking grip",
          "Grip: Hands must hold the rope with palms facing up; the rope must pass under the arms.",
          "No Locking: Wrapping the rope around any body part or locking elbows below knees is an automatic foul.",
          "No Sitting: Intentionally sitting or dropping to the ground for an extended time is prohibited.",
          "Commands: Pulls start only after the referee gives the final \"Pull\" command following preliminary ready signals.",
        ],
      },
    ],
    note: [
      "Wear shoes with good grip for safety.",
    ],
  },

  {
    number: "18",
    name: "Throwball",
    slug: "throwball",
    category: "Team Sport",
    image: "/images/sports/throwball.png",
    description: "A fast-moving throwball tournament focused on teamwork, coordination, communication, and quick reflexes.",
    teamSize: "7 players per team on the court, with up to 2 substitutes",
    date: "October 4–6",
    age: "BOYS Open; GIRLS U-17, GIRLS U-19",
    format: "Played in best-of-three sets. One set goes up to 15 points",
    rules: [
      "Players: 7 players per team on the court, with up to 2 substitutes",
      "Scoring: Played in best-of-three sets. One set goes up to 15 points",
      "Catching: The ball must be caught using both hands. Catching with only one hand or double-touching/juggling the ball in your hands is a foul.",
      "Throwing: After catching, the ball must be thrown back across the net using only one hand from above the shoulder line.",
      "Time Limit: A player must release the throw within 3 seconds of catching the ball.",
      "Net Contact: The ball is allowed to touch the net during a regular rally, but net contact is not allowed during a service.",
      "Passing: Passing or handing the ball to a teammate during a rally is not allowed",
      "The Serve: Must be executed within 5 seconds after the referee's whistle from behind the end line (service zone).",
      "No Net Touch on Serve: The served ball cannot touch the net.",
      "No Double Touch: Receiving a served ball with a double touch is prohibited.",
    ],
    events: [
      "BOYS Open",
      "GIRLS U-17",
      "GIRLS U-19",
    ],
    eventDetails: [
      {
        events: [
          "U17 Girls",
          "U19 Girls",
          "Boys Open",
        ],
        rules: [
          "Players: 7 players per team on the court, with up to 2 substitutes",
          "Scoring: Played in best-of-three sets. One set goes up to 15 points",
          "Catching: The ball must be caught using both hands. Catching with only one hand or double-touching/juggling the ball in your hands is a foul.",
          "Throwing: After catching, the ball must be thrown back across the net using only one hand from above the shoulder line.",
          "Time Limit: A player must release the throw within 3 seconds of catching the ball.",
          "Net Contact: The ball is allowed to touch the net during a regular rally, but net contact is not allowed during a service.",
          "Passing: Passing or handing the ball to a teammate during a rally is not allowed",
          "The Serve: Must be executed within 5 seconds after the referee's whistle from behind the end line (service zone).",
          "No Net Touch on Serve: The served ball cannot touch the net.",
          "No Double Touch: Receiving a served ball with a double touch is prohibited.",
        ],
      },
    ],
    note: [
      "Players should wear appropriate sports attire.",
    ],
  },

  {
    number: "19",
    name: "Table Tennis",
    slug: "table-tennis",
    category: "Racquet Sport",
    image: "/images/sports/table-tennis.jpg",
    description: "A competitive table tennis tournament testing speed, precision, reflexes, and tactical play.",
    teamSize: "Singles / Doubles",
    date: "October 4–6",
    age: "BOYS U-17 Singles, BOYS U-19 Singles, BOYS Open Doubles; GIRLS U-17 Singles, GIRLS U-19 Singles, Girls Open Doubles",
    format: "For Round 1, One game of 15 points will be played",
    rules: [
      "For Round 1, One game of 15 points will be played",
      "Standard Serving , General Faults & Play Rules to be followed",
    ],
    events: [
      "BOYS U-17  Singles",
      "BOYS U-19  Singles",
      "BOYS Open Doubles",
      "GIRLS U-17  Singles",
      "GIRLS U-19  Singles",
      "Girls Open Doubles",
    ],
    eventDetails: [
      {
        events: [
          "U17 Girls Singles",
          "U19 Girls Singles",
          "Girls Open Doubles",
          "U17 Boys Singles",
          "U19 Boys Singles",
          "Boys Open Doubles",
        ],
        rules: [
          "For Round 1, One game of 15 points will be played",
          "Standard Serving , General Faults & Play Rules to be followed",
        ],
        note: [
          "Proper Sports Kit with Sports Shirt & Shorts (trousers for Girls),",
          "Only Non-marking shoes allowed to have sufficient grip on floor surface",
        ],
      },
    ],
    note: [
      "Proper Sports Kit with Sports Shirt & Shorts (trousers for Girls),",
      "Only Non-marking shoes allowed to have sufficient grip on floor surface",
      "Participants are encouraged to bring their own paddles.",
    ],
  },

  {
    number: "20",
    name: "Volleyball",
    slug: "volleyball",
    category: "Team Sport",
    image: "/images/sports/volleyball.png",
    description: "An energetic volleyball tournament celebrating teamwork, coordination, athleticism, and competitive excellence.",
    teamSize: "Each team has 6 players on the court, with a total squad of 8 players.",
    date: "October 4–6",
    age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19",
    format: "Best of Three Sets, with 15 points each.",
    rules: [
      "Players: Each team has 6 players on the court, with a total squad of 8 players.",
      "Scoring: A point is awarded after every rally. Best of Three Sets, with 15 points each.",
      "Touches: A team can touch the ball maximum 3 times before sending it over the net.",
      "Ball: The ball may touch any part of the body, but it must not be caught or thrown.",
      "Block: A block touch does not count as one of the team’s three regular touches.",
      "Whistle to serve: the server has 8 seconds to serve the ball.",
      "Other Standard FIVB rules applicable.",
    ],
    events: [
      "BOYS U-17",
      "BOYS U-19",
      "GIRLS U-17",
      "GIRLS U-19",
    ],
    eventDetails: [
      {
        events: [
          "U17 Girls",
          "U19 Girls",
          "U17 Boys",
          "U19 Boys",
        ],
        rules: [
          "Players: Each team has 6 players on the court, with a total squad of 8 players.",
          "Scoring: A point is awarded after every rally. Best of Three Sets, with 15 points each.",
          "Touches: A team can touch the ball maximum 3 times before sending it over the net.",
          "Ball: The ball may touch any part of the body, but it must not be caught or thrown.",
          "Block: A block touch does not count as one of the team’s three regular touches.",
          "Whistle to serve: the server has 8 seconds to serve the ball.",
          "Other Standard FIVB rules applicable.",
        ],
      },
    ],
    note: [
      "Players should wear appropriate sports shoes and attire.",
    ],
  },

  {
    number: "21",
    name: "Ludo",
    slug: "ludo",
    category: "Board Game",
    image: "/images/sports/ludo.png",
    description: "A thrilling Ludo tournament emphasizing strategy, classic board tactics, precise dice rolls, and good sportsmanship.",
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
    note: [
      "Game boards and official dice will be provided at the venue.",
    ],
  },

  {
    number: "22",
    name: "Water Polo",
    slug: "water-polo",
    category: "Team Sport",
    image: "/images/sports/water-polo.png",
    description: "A fast-paced water polo competition showcasing teamwork, endurance, tactical play, and swimming ability.",
    teamSize: "Team Size: 13 players total per roster, with 7 players in the water per team at a time (6 field players, 1 goalkeeper).",
    date: "October 4–6",
    age: "BOYS Open",
    format: "4 quarters, typically lasting 8 minutes of actual play per quarter.",
    rules: [
      "Team Size: 13 players total per roster, with 7 players in the water per team at a time (6 field players, 1 goalkeeper).",
      "Match Duration: 4 quarters, typically lasting 8 minutes of actual play per quarter.",
      "Ball Control: Outfield players can only touch the ball with one hand. The goalie can use both hands inside the 5-meter zone.",
      "Shot Clock: A team has 30 seconds to attempt a shot on goal after gaining possession, or else ownership turns over.",
      "Movement: Players constantly tread water using an \"eggbeater\" kick and swim to move the ball. Touching or pushing off the bottom or sides of the pool is illegal.",
      "Ordinary Fouls: Minor infractions (like touching the ball with two hands or impeding an opponent not holding the ball). Results in a free throw for the opposing team.",
      "Exclusion (Major) Fouls: Aggressive actions like holding, sinking, or pulling back an opponent without the ball. The offending player is sent to the penalty area for 20 seconds, creating a temporary 6-on-5 advantage. Three major fouls result in a permanent ejection.",
      "Penalty Fouls: Committed by the defense inside the 5-meter zone to stop a probable goal, granting the opponent a direct penalty shot.",
    ],
    events: [
      "BOYS Open",
    ],
    eventDetails: [
      {
        events: [
          "Boys",
        ],
        rules: [
          "Team Size: 13 players total per roster, with 7 players in the water per team at a time (6 field players, 1 goalkeeper).",
          "Match Duration: 4 quarters, typically lasting 8 minutes of actual play per quarter.",
          "Ball Control: Outfield players can only touch the ball with one hand. The goalie can use both hands inside the 5-meter zone.",
          "Shot Clock: A team has 30 seconds to attempt a shot on goal after gaining possession, or else ownership turns over.",
          "Movement: Players constantly tread water using an \"eggbeater\" kick and swim to move the ball. Touching or pushing off the bottom or sides of the pool is illegal.",
          "Ordinary Fouls: Minor infractions (like touching the ball with two hands or impeding an opponent not holding the ball). Results in a free throw for the opposing team.",
          "Exclusion (Major) Fouls: Aggressive actions like holding, sinking, or pulling back an opponent without the ball. The offending player is sent to the penalty area for 20 seconds, creating a temporary 6-on-5 advantage. Three major fouls result in a permanent ejection.",
          "Penalty Fouls: Committed by the defense inside the 5-meter zone to stop a probable goal, granting the opponent a direct penalty shot.",
        ],
      },
    ],
    note: [
      "Participants should wear appropriate swimwear and water polo caps.",
    ],
  },

  {
    number: "23",
    name: "Padel",
    slug: "padel",
    category: "Racquet Sport",
    image: "/images/hero-sports.jpg",
    description: "A dynamic padel tournament combining teamwork, quick reflexes, precision, and strategic shot-making.",
    teamSize: "2 playing",
    date: "October 4–6",
    age: "BOYS U-17, BOYS U-19; GIRLS Open",
    format: "Matches are typically the best of 3 sets.",
    rules: [
      "Scoring System: Matches follow standard tennis scoring: 15, 30, 40, and game. At 40–40 (deuce), a single \"Golden Point\" decides the game in many circuits, or play continues until a two-point advantage is secured.",
      "Sets and Matches: A set is won by the first team to reach 6 games with at least a 2-game lead. At 6–6, a tie-break is played to 7 points (must win by 2). Matches are typically the best of 3 sets.",
      "Underhand Motion: Serves must be hit underhand, with contact made at or below waist height after letting the ball bounce once behind the service line.",
      "Diagonal Delivery: The ball must land in the opposing diagonal service box.",
      "Wall Interaction on Serve: A legal serve can hit the glass walls after bouncing in the box, but if it hits the wire mesh fence directly after the bounce, it is a fault. Servers receive two attempts per point.",
      "Floor Bounce First: During a rally, the ball must always bounce once on the opponent's floor before hitting any wall or fence.",
      "Using the Walls: After the ball bounces on the opponent's side, it can hit the glass or mesh walls, and players can legally return it by hitting it against their own glass walls back over the net.",
      "Direct Wall Hits (Out): If a player hits the ball directly into the walls or fence without it bouncing on the floor first, it is out.",
    ],
    events: [
      "BOYS U-17",
      "BOYS U-19",
      "GIRLS Open",
    ],
    eventDetails: [
      {
        events: [
          "U17 Boys Doubles",
          "U19 Boys Doubles",
          "Open (Girls) Doubles",
        ],
        rules: [
          "Scoring System: Matches follow standard tennis scoring: 15, 30, 40, and game. At 40–40 (deuce), a single \"Golden Point\" decides the game in many circuits, or play continues until a two-point advantage is secured.",
          "Sets and Matches: A set is won by the first team to reach 6 games with at least a 2-game lead. At 6–6, a tie-break is played to 7 points (must win by 2). Matches are typically the best of 3 sets.",
          "Underhand Motion: Serves must be hit underhand, with contact made at or below waist height after letting the ball bounce once behind the service line.",
          "Diagonal Delivery: The ball must land in the opposing diagonal service box.",
          "Wall Interaction on Serve: A legal serve can hit the glass walls after bouncing in the box, but if it hits the wire mesh fence directly after the bounce, it is a fault. Servers receive two attempts per point.",
          "Floor Bounce First: During a rally, the ball must always bounce once on the opponent's floor before hitting any wall or fence.",
          "Using the Walls: After the ball bounces on the opponent's side, it can hit the glass or mesh walls, and players can legally return it by hitting it against their own glass walls back over the net.",
          "Direct Wall Hits (Out): If a player hits the ball directly into the walls or fence without it bouncing on the floor first, it is out.",
        ],
      },
    ],
    note: [
      "Participants are encouraged to bring their own padel racquets if available.",
    ],
  }
];

const pdfSports: Array<{
  slug: string;
  name?: string;
  age: string;
}> = [
  { slug: "football", name: "Futsal", age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19" },
  { slug: "basketball", age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19" },
  { slug: "cricket", age: "BOYS Open Hard Ball, BOYS Open Tape Ball; GIRLS Open Tape Ball" },
  { slug: "table-tennis", age: "BOYS U-17 Singles, BOYS U-19 Singles, BOYS Open Doubles; GIRLS U-17 Singles, GIRLS U-19 Singles, Girls Open Doubles" },
  { slug: "badminton", age: "BOYS U-17 Singles, BOYS U-19 Singles, BOYS Open Doubles; GIRLS U-17 Singles, GIRLS U-19 Singles, Girls Open Doubles" },
  { slug: "volleyball", age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19" },
  { slug: "throwball", age: "BOYS Open; GIRLS U-17, GIRLS U-19" },
  { slug: "tug-of-war", age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19" },
  { slug: "padel", age: "BOYS U-17, BOYS U-19; GIRLS Open" },
  { slug: "chess", age: "BOYS open; GIRLS" },
  { slug: "arm-wrestling", age: "Open" },
  { slug: "darts", age: "BOYS Open; GIRLS" },
  { slug: "athletics", age: "BOYS U-17, BOYS U-19; GIRLS U-17, GIRLS U-19" },
  { slug: "strongman", age: "BOYS" },
  { slug: "snooker", age: "BOYS Open" },
  { slug: "gaming", age: "BOYS Open; GIRLS (FIFA)" },
  { slug: "swimming", age: "BOYS UNDER-17, BOYS UNDER-19" },
  { slug: "water-polo", age: "BOYS Open" },
  { slug: "archery", age: "BOYS; GIRLS" },
  { slug: "hockey", age: "BOYS" },
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
  