puts "🌱 Seeding spices..."

# Seed your database here
Person.create([
    {
        name: "Dani"
    },
    {
        name: "Brad"
    },
    {
        name: "Cam"
    },
    {
        name: "Michael"
    },
    {
        name: "Funston"
    },
    {
        name: "Cody"
    },
    { 
        name: "Tank"
    }
])

Bet.create([
    {
        description: "Braves-Giants under 8",
        odds: "-115",
        league: "MLB",
        bet_type: "Total",
        result: "Loss",
        units_change: -1.15,
        segment: "Top Props",
        person_id: 1
    },
    {
        description: "Vikings-Eagles over 51.5",
        odds: "-110",
        league: "NFL",
        bet_type: "Total",
        result: "Win",
        units_change: 1,
        segment: "Sledgehammer",
        person_id: 2
    },
    {
        description: "Sun 1st Half ML vs Aces",
        odds: "+135",
        league: "WNBA",
        bet_type: "Moneyline",
        result: "Win",
        units_change: 1.35,
        segment: "Bold & Disputable",
        person_id: 3
    },
    {
        description: "Mike Trout over 1.5 total bases vs Guardians",
        odds: "-115",
        league: "MLB",
        bet_type: "Player Prop",
        result: "Loss",
        units_change: -1.15,
        segment: "Bank",
        person_id: 4
    },
    {
        description: "Cooper Kupp over 89.5 receiving yards vs Bills",
        odds: "-115",
        league: "NFL",
        bet_type: "Player Prop",
        result: "Win",
        units_change: 1,
        segment: "NFL Sunday Show",
        person_id: 5
    },
    {
        description: "Mike Trout to hit a home run",
        odds: "+300",
        league: "MLB",
        bet_type: "Player Prop",
        result: "Loss",
        units_change: -1,
        segment: "Moonshot",
        person_id: 6
    },
    {
        description: "Bears (+10) vs Packers",
        odds: "-110",
        league: "NFL",
        bet_type: "Spread",
        result: "Win",
        units_change: 1,
        segment: "Bank",
        person_id: 7
    },
    {
        description: "Bears (+10) vs Packers",
        odds: "-110",
        league: "NFL",
        bet_type: "Spread",
        result: "Win",
        units_change: 1,
        segment: "Bank",
        person_id: 1
    }
])
puts "✅ Done seeding!"
