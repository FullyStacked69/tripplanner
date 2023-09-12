const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');

const User = require('../models/User');
const Itinerary = require('../models/Itinerary');
const Activity = require('../models/Activity');
const Day = require('../models/Day');
const bcrypt = require('bcryptjs');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(async () => {
    console.log('Connected to MongoDB successfully');
    await insertSeeds();
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

const insertSeeds = async () => {
  console.log("Resetting db and seeding users, itineraries, activities, and days...");

  try {
    await User.collection.drop();
    await Itinerary.collection.drop();
    await Activity.collection.drop();
    await Day.collection.drop();

    // Hardcode users
    const users = [];

    const u1 = new User({
      username: 'seed1',
      email: 'seed1@seed.com',
      hashedPassword: bcrypt.hashSync('password', 10)
    });
    users.push(u1);

    const u2 = new User({
      username: 'Bilbo Baggins',
      email: 'willy@mail.com',
      hashedPassword: bcrypt.hashSync('password', 10)
    });
    users.push(u2);

    const u3 = new User({
      username: 'Eowyn Snow',
      email: 'kim@mail.com',
      hashedPassword: bcrypt.hashSync('password', 10)
    });
    users.push(u3);

    const u4 = new User({
      username: 'Legolas Rivers',
      email: 'jackie@mail.com',
      hashedPassword: bcrypt.hashSync('password', 10)
    });
    users.push(u4);

    const createdUsers = await User.insertMany(users);

    const activities = []

    const act1 = new Activity({

      name: 'Safari Quads ATV & Buggy Operator Iceland',
      lat: 64.1366114390312,
      lng: -21.734277847725043

    });
    activities.push(act1);

    const act2 = new Activity({
      name: 'Blue Lagoon',

      lat: 64.128288,
      lng: -21.827774

    });
    activities.push(act2);

    const act3 = new Activity({

      name: 'Reykjavik Sightseeing',
      lat: 64.13443106229444,
      lng: -21.91916458067354

    });
    activities.push(act3);

    const act4 = new Activity({

      name: 'Glaciers and waterfalls',
      lat: 64.19008519033784,
      lng: -21.839727981024378

    });
    activities.push(act4);

    const act5 = new Activity({

      name: 'Caves of Hella',
      lat: 63.90658366959228,
      lng: -20.376301317880845

    });
    activities.push(act5);

    const act6 = new Activity({

      name: 'Elding Whale Watching',
      lat: 64.20918504799032, 
      lng: -21.95440367413761

    });
    activities.push(act6);

    const act7 = new Activity({

      name: 'Hot Springs',
      lat: 64.013717511211,
      lng: -21.18322054274239

    });
    activities.push(act7);

    const act8 = new Activity({

      name: 'Kerið',
      lat: 64.08685999528122,
      lng: -20.864929418735038

    });
    activities.push(act8);

    const act9 = new Activity({

      name: 'Katla Ice Cave',
      lat: 63.610221367965956,
      lng: -18.868951206864445

    });
    activities.push(act9);

    const act10 = new Activity({

      name: 'Tröll Expeditions Crystal Blue Ice Cave',
      lat: 64.21143730587931,
      lng: -16.01813626331551

    });
    activities.push(act10);

    const act11 = new Activity({

      name: 'Víkurfjara black sand beach',
      lat: 63.46072741307987,
      lng: -19.001838234868238

    });
    activities.push(act11);
    
    const act12 = new Activity({

      name: 'Aurora Cabins Höfn Iceland',
      lat: 64.48036916597164,
      lng: -15.014822516253794

    });
    activities.push(act12);

    const act13 = new Activity({

      name: 'Fáskrúðsfjörður',
      lat: 64.94804633330382,
      lng: -13.862774587655506

    });
    activities.push(act13);

    const act14 = new Activity({

      name: 'Svartifoss',
      lat: 64.21810789742759,
      lng: -16.826658713042253

    });
    activities.push(act14);

    const act15 = new Activity({

      name: 'Gljufrafoss',
      lat: 63.67778222042846,
      lng: -19.947505672890117

    });
    activities.push(act15);

    const act16 = new Activity({

      name: 'Reykjavík Art Museum Kjarvalsstaðir',
      lat: 64.1447205888434,
      lng: -21.914481683237195

    });
    activities.push(act16);

    const act17 = new Activity({

      name: 'Austurvöllur',
      lat: 64.14931889509741,
      lng: -21.939739454264675


    });
    activities.push(act17);

    const act18 = new Activity({

      name: 'Grábrók',
      lat: 64.89479978179192,
      lng: -21.502061338456897

    });
    activities.push(act18);

    const act19 = new Activity({

      name: 'Vatnajökull National Park',
      lat: 64.95555643850561,
      lng: -17.080392723990844

    });
    activities.push(act19);

    const act20 = new Activity({

      name: 'Kolugljúfur Canyon',
      lat: 65.5937066895629,
      lng: -20.561056506361854

    });
    activities.push(act20);

    const act21 = new Activity({

      name: 'Gýgjarfoss waterfall',
      lat: 64.90047210503278,
      lng: - 19.183399247536926

    });
    activities.push(act21);

    const act22 = new Activity({

      name: 'Þingvellir',
      lat: 64.36335392212345,
      lng: -20.727854716684746

    });
    activities.push(act22);

    const act23 = new Activity({

      name: 'Skyrland',
      lat: 63.98301249336951,
      lng: -20.980513974200697

    });
    activities.push(act23);

    const act24 = new Activity({

      name: 'Raufarhólshellir',
      lat: 63.97513057633901,
      lng: -21.384358172260587

    });
    activities.push(act24);

    const act25 = new Activity({

      name: 'Árbær Open Air Museum',
      lat: 64.12909539882304,
      lng: -21.741643405715724

    });
    activities.push(act25);

    const act26 = new Activity({

      name: 'Langistígur',
      lat: 64.28973184037633,
      lng: -21.122496772603704

    });
    activities.push(act26);

    const act27 = new Activity({

      name: 'Brúarárfoss',
      lat: 64.29413783945911,
      lng: -20.538645806645576

    });
    activities.push(act27);

    const act28 = new Activity({

      name: 'Zipline Akureyri',
      lat: 65.68901173490445,
      lng: -18.126004812470704

    });
    activities.push(act28);

    const act29 = new Activity({

      name: 'Stuðlagil Walk Inside Canyon',
      lat: 65.2855391074864,
      lng: -15.289674962802106

    });
    activities.push(act29);

    const act30 = new Activity({

      name: 'Tófufoss',
      lat: 65.11956577789365,
      lng: -14.93111475958036

    });
    activities.push(act30);

    const act31 = new Activity({

      name: 'Kirkjufoss',
      lat: 64.95323632058312,
      lng: -15.343181314935618

    });
    activities.push(act31);

    const act32 = new Activity({

      name: 'Stútur crater',
      lat: 64.05506194594984,
      lng: -19.037988736786644

    });
    activities.push(act32);

    const act33 = new Activity({

      name: 'Fossabrekkur',
      lat: 64.09672015249595,
      lng: -19.750057686423208

    });
    activities.push(act33);

    const act34 = new Activity({

      name: 'Caves of Hella',
      lat: 63.850263162986295,
      lng: -20.41409138361503

    });
    activities.push(act34);

    const act35 = new Activity({

      name: 'Lava Show',
      lat: 64.15833701929431,
      lng: -21.9422585366455

    });
    activities.push(act35);

    const act36 = new Activity({

      name: 'Seltjörn',
      lat: 64.15952008281398,
      lng: -22.01709755951638

    });
    activities.push(act36);

    const act37 = new Activity({

      name: 'Tokyo Tower',
      lat: 35.65874607174958,
      lng: 139.7454758204727

    });
    activities.push(act37);

    const act38 = new Activity({

      name: 'Shibuya Scramble Crossing',
      lat: 35.65963885295896,
      lng: 139.70059179127364

    });
    activities.push(act38);

    const act39 = new Activity({

      name: 'Asakusa Temple',
      lat: 35.715122503902634,
      lng: 139.79738721976452

    });
    activities.push(act39);

    const act40 = new Activity({

      name: 'Tsukiji Outer Market',
      lat: 35.66574024795559, 
      lng: 139.77007357146186

    });
    activities.push(act40);

    const act41 = new Activity({

      name: 'Sakura Street (Shibuya)',
      lat: 35.657652109693245,
      lng: 139.70104324103866

    });
    activities.push(act41);

    const act42 = new Activity({

      name: 'Ryogoku Kokugikan National Sumo Arena',
      lat: 35.70036405613505,
      lng: 139.79474387455903

    });
    activities.push(act42);

    const act43 = new Activity({

      name: 'Akihabara Electronics',
      lat: 35.70314813344853,
      lng: 139.77170885690882

    });
    activities.push(act43);

    const act44 = new Activity({

      name: 'Ginza Pedestrian Paradise',
      lat: 35.67141961733058,
      lng: 139.76398527326768

    });
    activities.push(act44);

    const act45 = new Activity({

      name: 'Meiji Shrine',
      lat: 35.6765631356979,
      lng: 139.69932590483052

    });
    activities.push(act45);

    const act46 = new Activity({

      name: 'Ueno Park',
      lat: 35.714895022474835,
      lng: 139.7734419328915

    });
    activities.push(act46);

    const act47 = new Activity({

      name: 'Santa Barbara Castle',
      lat: 38.349165367357934,
      lng: -0.4780503514452701

    });
    activities.push(act47);

    const act48 = new Activity({

      name: 'Explanada de España',
      lat: 38.34352342394694,
      lng: -0.48327031045883895

    });
    activities.push(act48);

    const act49 = new Activity({

      name: 'Postiguet Beach',
      lat: 38.3464339707937,
      lng: -0.47609407641177753

    });
    activities.push(act49);

    const act50 = new Activity({

      name: 'Santa Maria Basilic',
      lat: 38.34624301631397,
      lng: -0.4793210081084064

    });
    activities.push(act50);

    const act51 = new Activity({

      name: 'San Nicolas Cathedral',
      lat: 38.345686635548766,
      lng: -0.4826369659088519

    });
    activities.push(act51);

    const act52 = new Activity({

      name: 'Ereta Park',
      lat: 38.34805950267509,
      lng: -0.4799380539185773

    });
    activities.push(act52);

    const act53 = new Activity({

      name: 'Mercado Central',
      lat: 38.35347031491778,
      lng: -0.4697695899176873

    });
    activities.push(act53);

    const act54 = new Activity({

      name: 'Museo Arqueológico de Alicante MARQ',
      lat: 38.35365283313212,
      lng: -0.47641443963329216

    });
    activities.push(act54);

    // Activity 55
    const act55 = new Activity({

      name: 'The British Museum',
      lat: 51.51950669723901,
      lng: -0.1265167102771911

    });
    activities.push(act55);

    // Activity 56
    const act56 = new Activity({

      name: 'The Tower of London',
      lat: 51.508285963207484,
      lng: -0.07596001962516134

    });
    activities.push(act56);

    // Activity 57
    const act57 = new Activity({

      name: 'London Eye',
      lat: 51.50329319002855,
      lng: -0.11918659849697137

    });
    activities.push(act57);

    // Activity 58
    const act58 = new Activity({

      name: 'Buckingham Palace',
      lat: 51.50150419535673,
      lng: -0.14188999261391402

    });
    activities.push(act58);

    // Activity 59
    const act59 = new Activity({

      name: 'Hyde Park',
      lat: 51.50739502040792,
      lng: -0.1656766488527621

    });
    activities.push(act59);

    // Activity 60
    const act60 = new Activity({

      name: 'Natural History Museum',
      lat: 51.496855204526184,
      lng: -0.17614188550624404

    });
    activities.push(act60);

    // Activity 61
    const act61 = new Activity({

      name: 'Tate Modern',
      lat: 51.50772211925287,
      lng: -0.09929201994840796

    });
    activities.push(act61);

    // Activity 62
    const act62 = new Activity({

      name: 'hames River Sightseeing',
      lat: 51.50215406872328,
      lng: -0.12311447173720533

    });
    activities.push(act62);

    // Activity 63
    const act63 = new Activity({

      name: 'Prince Edward Theatre',
      lat: 51.51475014925888,
      lng: -0.13056059140526913

    });
    activities.push(act63);

    // Activity 64
    const act64 = new Activity({

      name: 'Royal Observatory in Greenwich',
      lat: 51.477019999560426,
      lng: -0.0004894621816889371

    });
    activities.push(act64);

    // Activity 65
    const act65 = new Activity({
      name: 'Statue of Liberty',
      lat: 40.689247,
      lng: -74.044502
    });
    activities.push(act65);

    // Activity 66
    const act66 = new Activity({
      name: 'Central Park',
      lat: 40.785091,
      lng: -73.968285
    });
    activities.push(act66);

    // Activity 67
    const act67 = new Activity({
      name: 'Empire State Building',
      lat: 40.748817,
      lng: -73.985428
    });
    activities.push(act67);

    // Activity 68
    const act68 = new Activity({
      name: 'Times Square',
      lat: 40.758896,
      lng: -73.985130
    });
    activities.push(act68);

    // Activity 69
    const act69 = new Activity({
      name: 'Metropolitan Museum of Art',
      lat: 40.779437,
      lng: -73.963244
    });
    activities.push(act69);

    // Activity 70
    const act70 = new Activity({
      name: 'Brooklyn Bridge',
      lat: 40.706086,
      lng: -73.996864
    });
    activities.push(act70);

    // Activity 71
    const act71 = new Activity({
      name: 'Museum of Modern Art (MoMA)',
      lat: 40.761436,
      lng: -73.977621
    });
    activities.push(act71);

    // Activity 72
    const act72 = new Activity({
      name: 'One World Observatory',
      lat: 40.713353,
      lng: -74.013031
    });
    activities.push(act72);

    // Activity 73
    const act73 = new Activity({
      name: 'Brooklyn Botanic Garden',
      lat: 40.668819,
      lng: -73.965363
    });
    activities.push(act73);

    // Activity 74
    const act74 = new Activity({
      name: 'The High Line',
      lat: 40.747993,
      lng: -74.004765
    });
    activities.push(act74);

    // Activity 75
    const act75 = new Activity({
      name: 'Brandenburg Gate',
      lat: 52.5163,
      lng: 13.3777
    });
    activities.push(act75);

    // Activity 76
    const act76 = new Activity({
      name: 'Berlin Wall Memorial',
      lat: 52.5295,
      lng: 13.3869
    });
    activities.push(act76);

    // Activity 77
    const act77 = new Activity({
      name: 'Museum Island',
      lat: 52.5161,
      lng: 13.4011
    });
    activities.push(act77);

    // Activity 78
    const act78 = new Activity({
      name: 'Checkpoint Charlie',
      lat: 52.5074,
      lng: 13.3904
    });
    activities.push(act78);

    // Activity 79
    const act79 = new Activity({
      name: 'Berlin Cathedral',
      lat: 52.5192,
      lng: 13.4026
    });
    activities.push(act79);

    // Activity 80
    const act80 = new Activity({
      name: 'East Side Gallery',
      lat: 52.5052,
      lng: 13.4397
    });
    activities.push(act80);

    // Activities in Taormina
    // Activity 81
    const act81 = new Activity({
      name: 'Taormina Ancient Theater',
      lat: 37.8521,
      lng: 15.2887
    });
    activities.push(act81);

    // Activity 82
    const act82 = new Activity({
      name: 'Isola Bella',
      lat: 37.8423,
      lng: 15.2766
    });
    activities.push(act82);

    // Activities in Catania
    // Activity 83
    const act83 = new Activity({
      name: 'Mount Etna',
      lat: 37.7510,
      lng: 14.9934
    });
    activities.push(act83);

    // Activity 84
    const act84 = new Activity({
      name: 'Catania Cathedral',
      lat: 37.5027,
      lng: 15.0870
    });
    activities.push(act84);

    // Activities in Siracusa
    // Activity 85
    const act85 = new Activity({
      name: 'Ortigia Island',
      lat: 37.0656,
      lng: 15.2937
    });
    activities.push(act85);

    // Activity 86
    const act86 = new Activity({
      name: 'Greek Theater of Syracuse',
      lat: 37.0756,
      lng: 15.2813
    });
    activities.push(act86);

    // Activity 87
    const act87 = new Activity({
      name: 'Archaeological Park of Neapolis',
      lat: 37.0807,
      lng: 15.2709
    });
    activities.push(act87);

    // Activities in Noto
    // Activity 88
    const act88 = new Activity({
      name: 'Noto Cathedral',
      lat: 36.8910,
      lng: 15.0710
    });
    activities.push(act88);

    // Activity in Modica
    // Activity 89
    const act89 = new Activity({
      name: 'Modica Chocolate Museum',
      lat: 36.8582,
      lng: 14.7601
    });
    activities.push(act89);

    // Activity in Ragusa
    // Activity 90
    const act90 = new Activity({
      name: 'Ragusa Ibla',
      lat: 36.9297,
      lng: 14.7224
    });
    activities.push(act90);

    // Activities in Agrigento
    // Activity 91
    const act91 = new Activity({
      name: 'Valley of the Temples',
      lat: 37.2859,
      lng: 13.5883
    });
    activities.push(act91);

    // Activity 92
    const act92 = new Activity({
      name: 'Scala dei Turchi',
      lat: 37.2971,
      lng: 13.3893
    });
    activities.push(act92);

    // Activity in Monreale
    // Activity 93
    const act93 = new Activity({
      name: 'Monreale Cathedral',
      lat: 38.0820,
      lng: 13.2918
    });
    activities.push(act93);

    // Activities in Palermo
    // Activity 94
    const act94 = new Activity({
      name: 'Palermo Cathedral',
      lat: 38.1157,
      lng: 13.3619
    });
    activities.push(act94);

    // Activity 95
    const act95 = new Activity({
      name: 'Palazzo dei Normanni',
      lat: 38.1151,
      lng: 13.3611
    });
    activities.push(act95);

    // Activity 96
    const act96 = new Activity({
      name: 'Mondello Beach',
      lat: 38.2062,
      lng: 13.3300
    });
    activities.push(act96);

    // Activity 97
    const act97 = new Activity({
      name: 'Capuchin Catacombs of Palermo',
      lat: 38.1152,
      lng: 13.3587
    });
    activities.push(act97);

    // Activity in Cefalù
    // Activity 98
    const act98 = new Activity({
      name: 'Cefalù Cathedral',
      lat: 38.0344,
      lng: 14.0228
    });
    activities.push(act98);

    // Activity in Agira
    // Activity 99
    const act99 = new Activity({
      name: 'Sicilia Outlet Village',
      lat: 337.5730974107189, 
      lng: 14.480539265564628
    });
    activities.push(act99);

    // Activities in Paris
    // Activity 100
    const act100 = new Activity({
      name: 'Eiffel Tower',
      lat: 48.858844,
      lng: 2.294351
    });
    activities.push(act100);

    // Activity 101
    const act101 = new Activity({
      name: 'Louvre Museum',
      lat: 48.860611,
      lng: 2.337644
    });
    activities.push(act101);

    // Activity 102
    const act102 = new Activity({
      name: 'Notre-Dame Cathedral',
      lat: 48.855708,
      lng: 2.351452
    });
    activities.push(act102);

    // Activity 103
    const act103 = new Activity({
      name: 'Montmartre and the Basilica of the Sacré-Cœur',
      lat: 48.886845,
      lng: 2.343206
    });
    activities.push(act103);

    // Activity 104
    const act104 = new Activity({
      name: 'Arc de Triomphe',
      lat: 48.873822,
      lng: 2.295048
    });
    activities.push(act104);

    // Activity 105
    const act105 = new Activity({
      name: 'Seine River Cruise',
      lat: 48.860933,
      lng: 2.323461
    });
    activities.push(act105);

    // Activity 106
    const act106 = new Activity({
      name: 'Musée d\'Orsay',
      lat: 48.859961,
      lng: 2.326561
    });
    activities.push(act106);

    // Activity 107
    const act107 = new Activity({
      name: 'Palace of Versailles',
      lat: 48.8049,
      lng: 2.1204
    });
    activities.push(act107);

    // Activity 108
    const act108 = new Activity({
      name: 'Pantheon',
      lat: 48.8462,
      lng: 2.3467
    });
    activities.push(act108);


    const createdActivities = await Activity.insertMany(activities);

    const days = [];

    // Day 1
    const day1Activities = [act1.id, act2.id];
    const d1 = new Day({
      accommodation: 'Harbor Hotel Reykjavik',
      activities: day1Activities
    });
    days.push(d1);

    // Day 2
    const day2Activities = [act3.id, act4.id, act5.id];
    const d2 = new Day({
      accommodation: 'Blue Lagoon Spa Hotel',
      activities: day2Activities
    });
    days.push(d2);

    // Day 3
    const day3Activities = [act6.id, act7.id];
    const d3 = new Day({
      accommodation: 'Hofn Glacier Inn',
      activities: day3Activities
    });
    days.push(d3);

    // Day 4
    const day4Activities = [act8.id, act9.id];
    const d4 = new Day({
      accommodation: 'Akureyri Guesthouse',
      activities: day4Activities
    });
    days.push(d4);

    // Day 5
    const day5Activities = [act10.id];
    const d5 = new Day({
      accommodation: 'CenterHotel Midgardur',
      activities: day5Activities
    });
    days.push(d5);

    // Day 6
    const day6Activities = [act11.id, act12.id];
    const d6 = new Day({
      accommodation: 'Hotel Borg',
      activities: day6Activities
    });
    days.push(d6);

    // Day 7
    const day7Activities = [act13.id, act14.id, act15.id];
    const d7 = new Day({
      accommodation: 'Hofn Glacier Inn',
      activities: day7Activities
    });
    days.push(d7);

    // Day 8
    const day8Activities = [act16.id, act17.id];
    const d8 = new Day({
      accommodation: 'Fosshotel Vatnajokull',
      activities: day8Activities
    });
    days.push(d8);

    // Day 9
    const day9Activities = [act18.id, act19.id];
    const d9 = new Day({
      accommodation: 'Akureyri Guesthouse',
      activities: day9Activities
    });
    days.push(d9);

    // Day 10
    const day10Activities = [act20.id];
    const d10 = new Day({
      accommodation: 'Reykjavik Marina Residence',
      activities: day10Activities
    });
    days.push(d10);

    // Day 11
    const day11Activities = [act21.id, act22.id];
    const d11 = new Day({
      accommodation: 'Hotel Glymur',
      activities: day11Activities
    });
    days.push(d11);

    // Day 12
    const day12Activities = [act23.id, act24.id, act25.id];
    const d12 = new Day({
      accommodation: 'Canopy by Hilton Reykjavik City Centre',
      activities: day12Activities
    });
    days.push(d12);

    // Day 13
    const day13Activities = [act26.id, act27.id];
    const d13 = new Day({
      accommodation: 'Fosshotel Reykjavik',
      activities: day13Activities
    });
    days.push(d13);

    // Day 14
    const day14Activities = [act28.id, act29.id, act30.id];
    const d14 = new Day({
      accommodation: 'Hotel Skogafoss',
      activities: day14Activities
    });
    days.push(d14);

    // Day 15
    const day15Activities = [act31.id, act32.id];
    const d15 = new Day({
      accommodation: 'Husavik Cape Hotel',
      activities: day15Activities
    });
    days.push(d15);

    // Day 16
    const day16Activities = [act33.id, act34.id];
    const d16 = new Day({
      accommodation: 'CenterHotel Thingholt',
      activities: day16Activities
    });
    days.push(d16);

    // Day 17
    const day17Activities = [act35.id, act36.id];
    const d17 = new Day({
      accommodation: 'Fosshotel Eastfjords',
      activities: day17Activities
    });
    days.push(d17);

    // Day 18
    
    const d18 = new Day({
      accommodation: 'Icelandair Hotel Vik'
    });
    days.push(d18);

    // Day 19
    const day19Activities = [act37.id];
    const d19 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day19Activities
    });
    days.push(d19);

    // Day 20
    const day20Activities = [act38.id, act39.id];
    const d20 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day20Activities
    });
    days.push(d20);

    // Day 21
    const day21Activities = [act40.id, act41.id, act42.id];
    const d21 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day21Activities
    });
    days.push(d21);

    // Day 22
    const day22Activities = [act43.id, act44.id];
    const d22 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day22Activities
    });
    days.push(d22);

    // Day 23
    const day23Activities = [act45.id, act46.id];
    const d23 = new Day({
      accommodation: 'Tokyo Hotel',
      activities: day23Activities
    });
    days.push(d23);

    // Day 24
    const day24Activities = [act47.id, act48.id];
    const d24 = new Day({
      accommodation: 'Alicante Beachfront Hotel',
      activities: day24Activities
    });
    days.push(d24);

    // Day 25
    const day25Activities = [act49.id, act50.id, act51.id];
    const d25 = new Day({
      accommodation: 'Alicante Beachfront Hotel',
      activities: day25Activities
    });
    days.push(d25);

    // Day 26
    const day26Activities = [act52.id, act53.id, act54.id];
    const d26 = new Day({
      accommodation: 'Alicante Beachfront Hotel',
      activities: day26Activities
    });
    days.push(d26);

    // Day 27
    const day27Activities = [act55.id, act56.id, act57.id];
    const d27 = new Day({
      accommodation: 'Bulgari Hotel London',
      activities: day27Activities
    });
    days.push(d27);

    // Day 28
    const day28Activities = [act58.id, act59.id];
    const d28 = new Day({
      accommodation: 'Bulgari Hotel London',
      activities: day28Activities
    });
    days.push(d28);

    // Day 29
    const day29Activities = [act60.id, act61.id];
    const d29 = new Day({
      accommodation: 'Bulgari Hotel London',
      activities: day29Activities
    });
    days.push(d29);

    // Day 30
    const day30Activities = [act62.id, act63.id, act64.id];
    const d30 = new Day({
      accommodation: 'Bulgari Hotel London',
      activities: day30Activities
    });
    days.push(d30);

    // Day 31
    const day31Activities = [act65.id, act66.id];
    const d31 = new Day({
      accommodation: 'Your New York Hotel 1',
      activities: day31Activities
    });
    days.push(d31);

    // Day 32
    const day32Activities = [act67.id, act68.id];
    const d32 = new Day({
      accommodation: 'Your New York Hotel 1',
      activities: day32Activities
    });
    days.push(d32);

    // Day 33
    const day33Activities = [act69.id, act70.id];
    const d33 = new Day({
      accommodation: 'Your New York Hotel 2',
      activities: day33Activities
    });
    days.push(d33);

    // Day 34
    const day34Activities = [act71.id, act72.id];
    const d34 = new Day({
      accommodation: 'Your New York Hotel 2',
      activities: day34Activities
    });
    days.push(d34);

    // Day 35
    const day35Activities = [act73.id, act74.id];
    const d35 = new Day({
      accommodation: 'Your New York Hotel 3',
      activities: day35Activities
    });
    days.push(d35);

    // Day 36
    const day36Activities = [act75.id, act76.id, act77.id];
    const d36 = new Day({
      accommodation: 'Your Berlin Hotel 1',
      activities: day36Activities
    });
    days.push(d36);

    // Day 37
    const day37Activities = [act78.id, act79.id, act80.id];
    const d37 = new Day({
      accommodation: 'Your Berlin Hotel 2',
      activities: day37Activities
    });
    days.push(d37);

    // Day 38
    const day38Activities = [act81.id, act82.id, act83.id];
    const d38 = new Day({
      accommodation: 'Your Taormina Hotel',
      activities: day38Activities
    });
    days.push(d38);

    // Day 39
    const day39Activities = [act84.id, act85.id, act86.id];
    const d39 = new Day({
      accommodation: 'Your Catania Hotel',
      activities: day39Activities
    });
    days.push(d39);

    // Day 40
    const day40Activities = [act87.id, act88.id, act89.id];
    const d40 = new Day({
      accommodation: 'Your Siracusa Hotel',
      activities: day40Activities
    });
    days.push(d40);

    // Day 41
    const day41Activities = [act90.id, act91.id, act92.id];
    const d41 = new Day({
      accommodation: 'Your Noto Hotel',
      activities: day41Activities
    });
    days.push(d41);

    // Day 42
    const day42Activities = [act93.id, act94.id, act95.id, act96.id];
    const d42 = new Day({
      accommodation: 'Your Modica Hotel',
      activities: day42Activities
    });
    days.push(d42);

    // Day 43
    const day43Activities = [ act97.id, act98.id, act99.id];
    const d43 = new Day({
      accommodation: 'Your Ragusa Hotel',
      activities: day43Activities
    });
    days.push(d43);

    // Day 44
    const day44Activities = [act100.id, act101.id, act102.id];
    const d44 = new Day({
      accommodation: 'Your Paris Hotel 1',
      activities: day44Activities
    });
    days.push(d44);

    // Day 45
    const day45Activities = [act103.id, act104.id, act105.id];
    const d45 = new Day({
      accommodation: 'Your Paris Hotel 2',
      activities: day45Activities
    });
    days.push(d45);

    // Day 46
    const day46Activities = [act106.id, act107.id, act108.id];
    const d46 = new Day({
      accommodation: 'Your Paris Hotel 3',
      activities: day46Activities
    });
    days.push(d46);


    const createdDays = await Day.insertMany(days);

    const itineraries = [];

    // Itinerary 1: Iceland: Nature's Wonders (5 days)
    const itinerary1Days = [d1.id, d2.id, d3.id, d4.id, d5.id];
    const it1 = new Itinerary({
      title: "Exploring the Land of Fire and Ice",
      locationName: 'Iceland',
      locationType: 'Country',
      countryCode: 'IS',
      lng: -19.02,
      lat: 64.96,
      length: 5,
      fakeLikes: 106,
      fakeViews: 1240,
      author: u2.id,
      days: itinerary1Days,
      startDate: new Date('2022-01-15'), 
    });
    itineraries.push(it1);

    // Itinerary 2: Iceland Adventure (6 days)
    const itinerary2Days = [d6.id, d7.id, d8.id, d9.id, d10.id, d11.id];
    const it2 = new Itinerary({
      title: 'Icelandic Wonders: From Reykjavik to the Glaciers',
      locationName: 'Iceland',
      locationType: 'Country',
      countryCode: 'IS',
      lng: -19.02,
      lat: 64.96,
      length: 6,
      fakeLikes: 95,
      fakeViews: 862,
      author: u3.id,
      days: itinerary2Days,
      startDate: new Date('2022-02-20'), 
    });
    itineraries.push(it2);

    // Itinerary 3: Iceland Explorer (7 days)
    const itinerary3Days = [d12.id, d13.id, d14.id, d15.id, d16.id, d17.id, d18.id];
    const it3 = new Itinerary({
      title: 'Northern Lights Quest: Chasing Aurora Borealis in Iceland',
      locationName: 'Iceland',
      locationType: 'Country',
      countryCode: 'IS',
      lng: -19.02,
      lat: 64.96,
      length: 7,
      fakeLikes: 25,
      fakeViews: 451,
      author: u1.id,
      days: itinerary3Days,
      startDate: new Date('2022-03-10'), 
    });
    itineraries.push(it3);

    // Itinerary 4: Sushi and Sake tour (5 days)
    const itinerary4Days = [d19.id, d20.id, d21.id, d22.id, d23.id];
    const it4 = new Itinerary({
      title: 'Sushi and Sake tour',
      locationName: 'Tokyo',
      locationType: 'City',
      countryCode: 'JP',
      lng: 139.83,
      lat: 35.65,
      length: 5,
      fakeLikes: 497,
      fakeViews: 1305,
      author: u4.id,
      days: itinerary4Days,
      startDate: new Date('2022-04-05'), 
    });
    itineraries.push(it4);

    // Itinerary 5: Alicante Beach Vacation (3 days)
    const itinerary5Days = [d24.id, d25.id, d26.id];
    const it5 = new Itinerary({
      title: 'Alicante Beach Vacation',
      locationName: 'Alicante',
      locationType: 'City',
      countryCode: 'ES',
      lng: -0.4813,
      lat: 38.3452,
      length: 3,
      fakeLikes: 49,
      fakeViews: 130,
      author: u1.id,
      days: itinerary5Days,
      startDate: new Date('2022-05-15'), 
    });
    itineraries.push(it5);

    // Itinerary 6: Exploring London (4 days)
    const itineraryLondonDays = [d27.id, d28.id, d29.id, d30.id];
    const itinerary6 = new Itinerary({
      title: 'Exploring London: A 4-Day Adventure',
      locationName: 'London',
      locationType: 'City',
      countryCode: 'GB',
      lng: -0.1276,
      lat: 51.5072,
      length: 4,
      fakeLikes: 497,
      fakeViews: 1305,
      author: u4.id,
      days: itineraryLondonDays,
      startDate: new Date('2022-06-20'), 
    });
    itineraries.push(itinerary6);

    // Itinerary 7: Exploring New York (4 days)
    const itineraryNewYorkDays = [d31.id, d32.id, d33.id, d34.id, d35.id];
    const itinerary7 = new Itinerary({
      title: 'Exploring New York: A 4-Day Adventure',
      locationName: 'New York',
      locationType: 'City',
      countryCode: 'US',
      lng: -74.006,
      lat: 40.7128,
      length: 4,
      fakeLikes: 445,
      fakeViews: 1265,
      author: u1.id,
      days: itineraryNewYorkDays,
      startDate: new Date('2022-05-01'),
    });
    itineraries.push(itinerary7);

    // Itinerary 8: Exploring Berlin (2 days)
    const itineraryBerlinDays = [d36.id, d37.id];
    const itinerary8 = new Itinerary({
      title: 'Exploring Berlin: A 2-Day Adventure',
      locationName: 'Berlin',
      locationType: 'City',
      countryCode: 'DE',
      lng: 13.4050,
      lat: 52.5200,
      length: 2,
      fakeLikes: 0,
      fakeViews: 0,
      author: u1.id,
      days: itineraryBerlinDays,
      startDate: new Date('2024-03-15'),
    });
    itineraries.push(itinerary8);

    // Itinerary 9: Best Trip Ever in Sicily (6 days)
    const itinerarySicilyDays = [d38.id, d39.id, d40.id, d41.id, d42.id, d43.id];
    const itinerary9 = new Itinerary({
      title: 'Best Trip Ever in Sicily',
      locationName: 'Sicily',
      locationType: 'Region',
      countryCode: 'IT',
      lng: 14.0154,
      lat: 37.5994,
      length: 6,
      fakeLikes: 852,
      fakeViews: 2105,
      author: u1.id,
      days: itinerarySicilyDays,
      startDate: new Date('2022-10-01'),
    });
    itineraries.push(itinerary9);

    // Itinerary 10: Discovering Paris (3 days)
    const itineraryParisDays = [d44.id, d45.id, d46.id];
    const itinerary10 = new Itinerary({
      title: 'Discovering Paris: A 3-Day Adventure',
      locationName: 'Paris',
      locationType: 'City',
      countryCode: 'FR',
      lng: 2.3522,
      lat: 48.8566,
      length: 3,
      fakeLikes: 723,
      fakeViews: 1895,
      author: u1.id,
      days: itineraryParisDays,
      startDate: new Date('2022-11-15'),
    });
    itineraries.push(itinerary10);



    const createdItineraries = await Itinerary.insertMany(itineraries);





    console.log("Done!");
  } catch (err) {
    console.error(err.stack);
  }
};
