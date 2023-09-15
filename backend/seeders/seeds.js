const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');

const User = require('../models/User');
const Itinerary = require('../models/Itinerary');
const Activity = require('../models/Activity');
const Day = require('../models/Day');
const bcrypt = require('bcryptjs');
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

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
      lng: 139.7454758204727,
      formatted_address:  "4-chōme-2-8 Shibakōen, Minato City, Tokyo 105-0011, Japan",
      formatted_phone_number: "03-3433-5111",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi846XcpmOS46fvhAoc2hX0k8Q282ID5KXkgoGkGZkMPutwhCOfk6Kku7ZXdN2bli74NSMrV1Pn0ipixExgtxCa3nQMYbmEJ4j4TUZfsRsGZsAbFU-k_9IMZzClcNGdWz7HsnJJm3zMZzCzyVx3UOFmWDI2RHQk39a8fSPUpIZlFaRE&3u1079&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=71443`,
      place_id: "ChIJCewJkL2LGGAR3Qmk0vCTGkg",
      rating: 4.4,
      user_ratings_total: 65412

    });
    activities.push(act37);

    const act38 = new Activity({

      name: 'Shibuya Scramble Crossing',
      lat: 35.65963885295896,
      lng: 139.70059179127364,
      formatted_address: "21 Udagawacho, Shibuya City, Tokyo 150-0042, Japan",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zigsyhIbQO9RXXi3e2EHaTGiEbf4w3Bx_c9asseN-a0U-KCF2T1Uw5nxDpIHQBl_n0CapYytYVuS_GMt3VQNXiLR2uRmLzKQ9eKHCy8MEi91IN-QxPELLKpgGGwS4yWdJKdhj2pDsnAmUvjzOLU9yyWdYZG0P_xB6W5xhFaAwXt0xEX&3u720&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=23827`,
      place_id: "ChIJK9EM68qLGGARacmu4KJj5SA",
      rating: 4.5,
      user_ratings_total : 2145

    });
    activities.push(act38);

    const act39 = new Activity({

      name: 'Asakusa Temple (Sensō-ji)',
      lat: 35.715122503902634,
      lng: 139.79738721976452,
      formatted_address: "2-chōme-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
      formatted_phone_number: "03-3842-0181",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhWbsp_iqHt8i7cvL72vkwRJcV7kAAFTBPVGEzuvHaRfHU4S30WavTOgL3AlmfLphKxBFon3L5XoVY_5pmF2hyPrwJcu1tPY4cXMziX5hzP_LYBL64-4FiDq102KBUjyXHjHV6JYupjvo1aHbUDCQDg3-TWebsmDaKUr2d0tM7e4ncB&3u800&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=7`,
      place_id: "ChIJ8T1GpMGOGGARDYGSgpooDWw",
      rating: 4.5,
      user_ratings_total: 65915

    });
    activities.push(act39);

    const act40 = new Activity({

      name: 'Tsukiji Outer Market',
      lat: 35.66574024795559, 
      lng: 139.77007357146186,
      formatted_address: "4-chōme-13-13 Tsukiji, Chuo City, Tokyo 104-0045, Japan",
      formatted_phone_number: undefined,
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgwDspGZIQTgXBWPAHP9fxJv8y__-wxtVRn-_TCa3k7bMgSg87N75fu9vUY_nkPVWjcPyjlsuwwAP0iZEwp-10vIejfPktG5BmLDsbzCTxHXWEn3EF3Adnuh0jpPYwQ1ZGt3j4F6DOzbwyulc1bb--6GRfeRLFSYtptmPYEN2AsKuCg&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=60978`,
      place_id: "ChIJW2cLzSGLGGARXAKXv6EkbqI",
      rating: 4.2,
      user_ratings_total:45388

    });
    activities.push(act40);

    const act41 = new Activity({

      name: 'Sakura Street (Shibuya)',
      lat: 35.657652109693245,
      lng: 139.70104324103866,
      formatted_address: "16-12 Sakuragaokachō, Shibuya City, Tokyo 150-0031, Japan",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjpgA_C6gFGuqjRYz5LXTr443bIAQUlGsuP3UohRuBqC4BcdY6dQgRkVLsXouFLdOEBgumSE2wbRjTGyrzARR8fiyYu4u6HnNaWH-LNWgz11i0309v5GVWoa8uCfGrbTszsED5LPAMExMPNKo30m7WjsAekStg16ECoIl-FMIXmlhhG&3u5839&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=89747`,
      place_id: "ChIJfUrHmT2LGGARHBT16UK7Fkw",
      rating: 4.5,
      user_ratings_total: 116

    });
    activities.push(act41);

    const act42 = new Activity({

      name: 'Ryogoku Kokugikan National Sumo Arena',
      lat: 35.70036405613505,
      lng: 139.79474387455903,
      formatted_address: "1-chōme-3-28 Yokoami, Sumida City, Tokyo 130-0015, Japan",
      formatted_phone_number: "03-3623-5111",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhKemM0sIBLE-eBdqc38NwcQWq1hYfrZJVGiz0dkzlhtKNpU0ZyxwX9KFym8tLskUQDe_UTfJI6LdQuPZaUX8WABJwqfwrSsW-rSTbyQ93KG67kQCB6j-5AsLq8GTRxjIRGGf2iqCY427P4JtQe437OVkbhj6gp_uGkjsNTcdwFXATj&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=77245`,
      place_id : "ChIJGeu4VDWJGGARdPoda8d8I3A",
      rating: 4.3,
      user_ratings_total: 7000

    });
    activities.push(act42);

    const act43 = new Activity({

      name: 'Akihabara Electronics',
      lat: 35.70314813344853,
      lng: 139.77170885690882,
      formatted_address: "Akihabara, Taito City, Tokyo 110-0006, Japan",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhzor7ViEI7i1eDAOq7Bdv0HnpVLPKYyZKQqbH7dEfPQwd30p5hbokWBOwPE6hOIlqDvYQ3y98PmwVbmV8ml6qbqdRrAUCPrMZN48VepAyexPxitIrrxxvuiAK9CLPg11TRP2Pcd_RJV6KHAfbgB8zuplIQIEmBU8oMFnqwHGiwuwmW&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=113980`,
      place_id: "ChIJzdWdgh2MGGARh4kg2pVZL3c",
      rating: 4.4,
      user_ratings_total: 3455

    });
    activities.push(act43);

    const act44 = new Activity({

      name: 'Ginza Pedestrian Paradise',
      lat: 35.67141961733058,
      lng: 139.76398527326768,
      formatted_address: "Japan, 〒104-0061 Tokyo, Chuo City, Ginza, 8-chōme−7, 中央通り",
      formatted_phone_number: "03-3561-0919",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjPipiojA6IY_i4QetbOQOjrMbcugCGrmMWLsM5rLMfopxxRhT6ZsZdbedsRBwuRzrNt-EhXGkJ5-B4G3kemeaEMWaBbq5MNjR6wwPYZ5lTNjnb4C2pJxd67AsOINxr_IJBRQ5Ay01VYKbOwMHBVKnwtZngeNYnpk8egFBS-axWijZQ&3u3024&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=11336`,
      place_id: "ChIJcTA-aeaLGGARj3kIPKAI23M",
      rating: 4.4,
      user_ratings_total: 86

    });
    activities.push(act44);

    const act45 = new Activity({

      name: 'Meiji Shrine',
      lat: 35.6765631356979,
      lng: 139.69932590483052,
      formatted_address: "1-1 Yoyogikamizonochō, Shibuya City, Tokyo 151-8557, Japan",
      formatted_phone_number: "03-3379-5511",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhVz50XJc9QMuALbqOSPa6fS0_tymAY8p3qBAp81K2prS2DTzTXVOwzRqpRhmQm661tLNRSJrwXIdVV83Ikc6yCShBz5M6EtXjhZkQgP1K4JOQGxbsg-TgJF5WMOmgBw9mJv42EaAyb-idY6_Bc-E8PTTWBtNRta1uP11J8yVmKszIT&3u4000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=76308`,
      place_id: "ChIJ5SZMmreMGGARcz8QSTiJyo8",
      rating: 4.6,
      user_ratings_total: 32764

    });
    activities.push(act45);

    const act46 = new Activity({

      name: 'Ueno Park',
      lat: 35.714895022474835,
      lng: 139.7734419328915,
      formatted_address: "4 Uenokoen, Taito City, Tokyo 110-0007, Japan",
      formatted_phone_number: "03-3828-5644",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zh8LEURn_rUvc_YT_f9MYEj9dbwCHZpIYi_8jUOI9QUVoIJmfgJQfzNKHjaYpmAWRR94jC43iX6HmSJWQazUpTWCQ1g_UHM0bYMj8_diTetdF_gTqGUpEZKo6SagaIVacpaYyNQa5sqkkQJ8RKvL6ehkk3wZaa7lbuyUpdap1TUA4ws&3u1440&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=123016`,
      place_id: "ChIJw2qQRZuOGGARWmROEiM2y7E",
      rating: 4.3,
      user_ratings_total: 26202

    });
    activities.push(act46);

    const act47 = new Activity({

      name: 'Santa Barbara Castle',
      lat: 38.349165367357934,
      lng: -0.4780503514452701,
      formatted_address: "03002 Alicante, Spain",
      formatted_phone_number: "673 84 98 90",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhaB5l2ouFZuXYTiR2Z9FJJdPGZ7T-8kxgSL0Z97hR4GDVyrZU87GkGe8ECwfjtl_sNQG4L39Go_D34UvHooW6l-2_VlBC1LRlysm8qiJrxWHiK1Y6wnKZBm7iTQCZXlITTNF48SdECJGQNvhb4dCoBGzCf8Ja30CJnVn7FmDRYcaTX&3u4128&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=77405`,
      place_id:  "ChIJ57iIa6U3Yg0RCD4iSor1MEM",
      rating: 4.7,
      user_ratings_total: 34539

    });
    activities.push(act47);

    const act48 = new Activity({

      name: 'Explanada de España',
      lat: 38.34352342394694,
      lng: -0.48327031045883895,
      formatted_address: "Passeig Esplanada d'Espanya, Alacant, Alicante, Spain",
      formatted_phone_number: undefined,
      imageUrl: undefined,
      place_id:  `EjVQYXNzZWlnIEVzcGxhbmFkYSBkJ0VzcGFueWEsIEFsYWNhbnQsIEFsaWNhbnRlLCBTcGFpbiIuKiwKFAoSCceMrWGxN2INEUj1C76fUG2_EhQKEglLq5072jViDRHjgQuscqh9HQ`,
      rating: undefined,
      user_ratings_total: undefined

    });
    activities.push(act48);

    const act49 = new Activity({

      name: 'Postiguet Beach',
      lat: 38.3464339707937,
      lng: -0.47609407641177753,
      formatted_address: "Playa del Postiguet, Spain",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zh7ohxqhrRCk9VN-Shn6OrT158DofshLkZIfIe74OfKSgzfJrTVPi4Z32-jrnLu8Vs3NpES76i0roVtg145uIbxGnKk6LzNZniSXY7kMSVyxo-QPJ1o3HbJkWNwcXP4udoeK2kDgKtL6xXo56Pe3CAL7CYHPGbPBK8RbX5lIAiAA6Dm&3u856&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=91498`,
      place_id:  "ChIJMdE7SLo3Yg0RT4ecQtC5BVE",
      rating: 4.3,
      user_ratings_total: 2326

    });
    activities.push(act49);

    const act50 = new Activity({

      name: 'Santa Maria Basilic',
      lat: 38.34624301631397,
      lng: -0.4793210081084064,
      formatted_address: "Pl. Sta. María, 1, 03001 Alicante (Alacant), Alicante, Spain",
      formatted_phone_number: "965 21 60 26",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zj3n9cpriXjRTeLdVgNccAAKi68Weadcng6qFGgXMumpcpbOTKl0Rb3g3rUbG_i8BjH-h4hlfuFPf5aKV1xpUoG0cHYbdm0w04fkSS1Y8ZjlBk3KVaVNsUobI_dmAmXtH_83L8sRfJfueLXY7qYSaWRR3JqTzg5Oiy6Iqpyv3vHVWyO&3u2581&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=11532`,
      place_id:  "ChIJa9njFbA3Yg0R3Fy9dU6CPy0",
      rating: 4.5,
      user_ratings_total: 1710

    });
    activities.push(act50);

    const act51 = new Activity({

      name: 'San Nicolas Cathedral',
      lat: 38.345686635548766,
      lng: -0.4826369659088519,
      formatted_address: "Plaza de, Pl. del Abad Penalva, 2, 03002 Alicante (Alacant), Alicante, Spain",
      formatted_phone_number: "965 21 26 62",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgJfRc9Pq334eukBpnnNo82giPiSSLLInnvxkGslR4w1ZaG9d-4F5DOfvKBkbJ1L0fhCJKEpfVkzt79S8Up84mbEuANU_581-_A1hUfFAMUWuJ0ISxC1h8FqOSZOlfJaLDoGTn2H8QZo8X5tEGjNMPHSyiS8Ei_sa4ldqQHvl7EO-gZ&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=48871`,
      place_id: "ChIJXV4olrE3Yg0REtiQ7JAKazo",
      rating: 4.5,
      user_ratings_total: 3196

    });
    activities.push(act51);

    const act52 = new Activity({

      name: 'Ereta Park',
      lat: 38.34805950267509,
      lng: -0.4799380539185773,
      formatted_address: "Calle Remigio Sebastià, 17, 03002 Alacant, Alicante, Spain",
      formatted_phone_number:"965 14 32 90",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgSMkBwGmPYaLwtvaR3xICe3FMpoN9aHZRzV2hBfjCXSwLVpZRH36VGPtHN8M1vI8TiATbPTvhLJKcCTca-Fy-zwVlSdGkB_kiaTNcumWkFtxTSwHvfMGz-fJ3ZN_w0hCwE0X_SLebZ4J2uKkmKRxFb6FH2aXE2Jqp7IVjxcDvDgRB0&3u5312&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=96482`,
      place_id: "ChIJ90O-z683Yg0RgflkgS_1Y_I",
      rating: 4.5,
      user_ratings_total: 1868

    });
    activities.push(act52);

    const act53 = new Activity({

      name: 'Mercado Central',
      lat: 38.35347031491778,
      lng: -0.4697695899176873,
      formatted_address: "Av. Alfonso El Sabio, nº 10, 03004 Alicante (Alacant), Alicante, Spain",
      formatted_phone_number: "965 14 08 41",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhXV2-u3jnmqm4s6UWkvFRFm-zC-OUUZvkQkiFiDhLVQcMH3tq8vW31lB1hWg9XD_ii1tI3hKyrOaSBViDTX03D2Pk9ZZ66h2-yaMWsmsb86PwmIPnk0WBWNyBKhb9qqcMn4c5DUDu0-V3C5PnQA3THvC57dO2hGCPf2QOMsFtmmDq8&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=103866`,
      place_id: "ChIJga68cK03Yg0R9pyPDap5OUA",
      rating: 4.5,
      user_ratings_total:24244

    });
    activities.push(act53);

    const act54 = new Activity({

      name: 'Museo Arqueológico de Alicante MARQ',
      lat: 38.35365283313212,
      lng: -0.47641443963329216,
      formatted_address: "Pl. Dr. Gómez Ulla, S/N, 03013 Alacant, Alicante, Spain",
      formatted_phone_number: "965 14 90 00",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgD9rUJqNuAJTLlPU0IDmqq4IylQgvgmpu-2HVegngfYnUTKB-AHlsVY5HFiDJc0zs4KIyprCgqfzbJNmcrvls41YVpnttsh1s0OMsTK8FlVqXZxu_vbV1dg60JgeTqHFmTtQmIFP8_ZTW15WonbVRKbhMlxXny1lgunRc61fn0XD9h&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=978`,
      place_id: "ChIJPcv3ZqY3Yg0RRBfMgwTapwk",
      rating:4.6,
      user_ratings_total: 8579

    });
    activities.push(act54);

    // Activity 55
    const act55 = new Activity({

      name: 'The British Museum',
      lat: 51.51950669723901,
      lng: -0.1265167102771911,
      formatted_address: "Great Russell St, London WC1B 3DG, UK",
      formatted_phone_number: "020 7323 8299",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg_9_JqPQkiw-io3cSPbJYnDRLq_eQHqzLPfAqfVv7psYkqBi-6aTDgX5nEVgAtJoO_J-hh_9reYEipG7AtXkVyMuSzfL8IRj0sv9Js08iKPOAbEo-ZibKMPsdsnHgfgJ7fDhFwB2C5MVWRqu2fvww7zmcWttTvMNi1xnP1doxe8LIU&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=49022`,
      place_id: "ChIJB9OTMDIbdkgRp0JWbQGZsS8",
      rating: 4.7,
      user_ratings_total: 144191,
    });
    activities.push(act55);

    // Activity 56
    const act56 = new Activity({

      name: 'The Tower of London',
      lat: 51.508285963207484,
      lng: -0.07596001962516134,
      formatted_address: "London EC3N 4AB, UK",
      formatted_phone_number: "0333 320 6000",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziRvCM97njQDTR_w5fMPEqKrPOyUwIulwpMeQe5bFJNUBYLGlkuu_swxr25UYtBkejzHNER7-czdA9nQdxJmUlSbpZvjZhKGb40eArNQgSQ-WmpuSQ8_mx19LFaja0GpJaffW-YANKj7elc8mqe6BKyGfw2qaasHFFJa59Q2JlS6RQw&3u640&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=15163`,
      place_id: "ChIJ3TgfM0kDdkgRZ2TV4d1Jv6g",
      rating: 4.6,
      user_ratings_total: 96537
    });
    activities.push(act56);

    // Activity 57
    const act57 = new Activity({

      name: 'London Eye',
      lat: 51.50329319002855,
      lng: -0.11918659849697137,
      formatted_address: "Riverside Building, County Hall, London SE1 7PB, UK",
      formatted_phone_number:  "020 7967 8021",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zidVqBDQb3PUcva0Gq3-JGLDIAs8HetBEqhbD-QdDY1PH0gJ1jHDII3_hYce7zBZdZYGoNhS1HNc0MM_d7MEt-4zkxs7BZdtLsn8xRWwVuRocgATF6D3R-tb5VJI6JAA0QzafhkHhQnTgY4dS7HUGvG_krnA4D7vONax1TwC4AZWWyI&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=64413`,
      place_id: "ChIJc2nSALkEdkgRkuoJJBfzkUI",
      rating: 4.5,
      user_ratings_total: 162903

    });
    activities.push(act57);

    // Activity 58
    const act58 = new Activity({

      name: 'Buckingham Palace',
      lat: 51.50150419535673,
      lng: -0.14188999261391402,
      formatted_address: "London SW1A 1AA, UK",
      formatted_phone_number: "0303 123 7300",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi3fk2ZBcNDhI9aKwOGoFU2b2K9nn6VyS1AWkhwXE8I0lxxFRP4Kt6U0Isg41ya1sZeAQCXBJo8SPVfLg0mk5QDktcjH0-aaMqKR_Bz4M-_sL4Th9Y-QJB-4hWt8uCq7Lv-UEfgJLfm-x75u6v6TqTB5BQjIYuSHiR4Wn7fbht6Gxvd&3u12000&5m1&2e1&callback=none&key=AIzaSyDCs-6zIIKmkGBfRzARM0qgDq2UM8W7TcQ&token=102427`,
      place_id: "ChIJtV5bzSAFdkgRpwLZFPWrJgo",
      rating: 4.5,
      user_ratings_total: 142603

    });
    activities.push(act58);

    // Activity 59
    const act59 = new Activity({

      name: 'Hyde Park',
      lat: 51.50739502040792,
      lng: -0.1656766488527621,
      formatted_address: "London, UK",
      formatted_phone_number:  "0300 061 2000",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhqqOxA1g8ilCds3T9POgA4fUM-1JEprIRi2f1QWuzHLfyDeglSuJn3HzVi0eWTGWBZoX26z-hCjLkfj2XLlznWVEY_PQCC5NWGm89udIssQzCu2wjG9bWc_UkEnN58Y1mlj37bKXVex0pSTjkYBhbQ0iPktSdGBsSn80n1ctfSgrOn&3u1944&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=2667`,
      place_id:  "ChIJhRoYKUkFdkgRDL20SU9sr9E",
      rating: 4.7,
      user_ratings_total: 122145

    });
    activities.push(act59);

    // Activity 60
    const act60 = new Activity({

      name: 'Natural History Museum',
      lat: 51.496855204526184,
      lng: -0.17614188550624404,
      formatted_address: "Cromwell Rd, South Kensington, London SW7 5BD, UK",
      formatted_phone_number:  "020 7942 5000",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziekExoE_8rQmQNtlQLkCDqQqKVT5dZldX5-aTPmz2JJhwroi5opydsTK6lYT60sfQ88NDe54FLXlYAv19f5UCRtAYFm-4WA9405q5d0AGI3FYpPUVO1cFqoS6y1w-zUtaloBUl7tC6LtrElqqSajCnQm6D0lNei2aSMGOfsDnvTk6f&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=130761`,
      place_id: "ChIJPy8Y5kIFdkgRxGSXw4Xjt3s",
      rating: 4.7,
      user_ratings_total: 22887

    });
    activities.push(act60);

    // Activity 61
    const act61 = new Activity({

      name: 'Tate Modern',
      lat: 51.50772211925287,
      lng: -0.09929201994840796,
      formatted_address: "Bankside, London SE1 9TG, UK",
      formatted_phone_number:  "020 7887 8888",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziTyQPMvHHlmNVQDLPLibmGb6YKzNLpuJc-yYkJTCO_3nnAf8HwfCzoApMf6PiFoe43kxeQdNc7u6wHn4b3-vK12vE7UMPTMazj2yEtX0tiPVy9JreOBBL2g5eGw65rpQg4oMz7zuS-Kg4ySwmomyg8fhU-wfnPJbIMKEuR-nL0n43C&3u2250&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=39131`,
      place_id:  "ChIJlRl2MakEdkgR55tr4CNv_B8",
      rating: 4.5,
      user_ratings_total: 69851

    });
    activities.push(act61);

    // Activity 62
    const act62 = new Activity({

      name: 'Thames River Sightseeing',
      lat: 51.50215406872328,
      lng: -0.12311447173720533,
      formatted_address: "Westminster Pier, Victoria Embankment, London SW1A 2JH, UK",
      formatted_phone_number: "020 3778 0700",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhCeSKYW3nJwWRqpQFsy0zJng9-zQJ1r9JBZODvER5OuQnUf4k9-rF7ZGcey2zx6lurqm5hzO9Y6iu8fH_ctmggrMaSZ4_bM6zl10Tr3YE07fMsguQyApLkZTCFEjBY4ik1JjffsUsY3pmFja9LHq17GZwMYLQGLkHq4ZDN4eCXpbLH&3u4896&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=32714`,
      place_id: "ChIJWRQ7JoUCdkgRWTutHYUlZA8",
      rating: 4.5,
      user_ratings_total: 421

    });
    activities.push(act62);

    // Activity 63
    const act63 = new Activity({

      name: 'Prince Edward Theatre',
      lat: 51.51475014925888,
      lng: -0.13056059140526913,
      formatted_address: "Old Compton St, London W1D 4HS, UK",
      formatted_phone_number: "0344 482 5151",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjolVhvRjvCmWgTKcNwEFAo6cn9gVUKHPniY1MBQBVcpTPa_eljjcFpZmmtdKiD8HDXrCgndWw2UkygaJ0BYCuZIPYxdFWtjfuLqfg9xAE7Q9k1TdsdDvX--IPfCi0UyfEodR6mbgA9DDPJw8GvlEenkHmYFHjDByE5hOJFbBLFZJMf&3u1586&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=29139`,
      place_id:  "ChIJa1mYwdIEdkgRftKU8KZcsx4",
      rating: 4.7,
      user_ratings_total: 9612
    });
    activities.push(act63);

    // Activity 64
    const act64 = new Activity({

      name: 'Royal Observatory in Greenwich',
      lat: 51.477019999560426,
      lng: -0.0004894621816889371,
      formatted_address: "Blackheath Ave, London SE10 8XJ, UK",
      formatted_phone_number:  "020 8312 6608",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zj5ghd1HOsQotzFfsLra1o6b6JtoHcX9m7aJ-M5vD2fQQ79hBdgzD_yA6chzUXltoHx2dW4GKmtLGr9RUaq3Igx3h_HpPG-ReznPc6Y58c2KQItEPrsOHbpgseFJempKyAEDFkSXLp7HprGx38gNuuRJk0lY-CnIiB_YwMSd_Gx-0s&3u4096&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=118973`,
      place_id: "ChIJp9ypjCqo2EcRAoQcRV-yqzE",
      rating: 4.5,
      user_ratings_total: 16631

    });
    activities.push(act64);

    // Activity 65
    const act65 = new Activity({
      name: 'Statue of Liberty',
      lat: 40.689247,
      lng: -74.044502,
      formatted_address:  "New York, NY 10004",
      formatted_phone_number: "(212) 363-3200",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg-pOehWxecU5cZSPuaSVBCk3m93s_9yD0Duv1BWNHuEjZdklZYlWGhp9dktqKDz7hjjM5B887WiIxE6CV6G6K9oFDxG-SAhDQqR2suOQ5VXBRpCVpstX4JMqdve_BftQEssWci-vojGWNmo78vR6rPxGVFWX_I_iGb_plUm6DvPx-_&3u12240&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=69017`,
      place_id: "ChIJPTacEpBQwokRKwIlDXelxkA",
      rating: 4.7,
      user_ratings_total: 95280
    });
    activities.push(act65);

    // Activity 66
    const act66 = new Activity({
      name: 'Central Park',
      lat: 40.785091,
      lng: -73.968285,
     formatted_address: "New York, NY",
      formatted_phone_number: "(212) 310-6600",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg1hOK6mUZszsKOsx-GR-EI8Z1IQ_nTQIII54mHFUOuvL9LpggXjRUOl3n6qBWxWZHNzNqlLiACRJqfPKhMgwRF_CfNOK4FhKbiSFXsZUAZuGwE9Tyn01t9U6IwUEYpH5sYpDwX6uRryJueifv3HCt65CbJTvl74GrEZW3b5iT0Q1Fh&3u4032&5m1&2e1&callback=none&key=AIzaSyDCs-6zIIKmkGBfRzARM0qgDq2UM8W7TcQ&token=126324`,
      place_id:  "ChIJ4zGFAZpYwokRGUGph3Mf37k",
      rating: "4.8",
      user_ratings_total: 259680
    });
    activities.push(act66);

    // Activity 67
    const act67 = new Activity({
      name: 'Empire State Building',
      lat: 40.748817,
      lng: -73.985428,
      formatted_address: "20 W 34th St., New York, NY 10001",
      formatted_phone_number:  "(212) 736-3100",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhfqIZ-DMQce3TRHMoE0-azcPAC9fCrJ4h2xJM8JO36WZSE3M_ySpbM1YgrmnS99L9GtDqNy6P_YaeVSmZ7hGIG0E5e8tqqlp4udDX7NOowUutom_MG3J1HZhTiMxffaVQMbcgRBcWgU9GrOLaD3mQOEHHRAI6nTn_-5dgrQmNzKE9p&3u828&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=101273`,
      place_id: "ChIJaXQRs6lZwokRY6EFpJnhNNE",
      rating: 4.7,
      user_ratings_total: 96636
    });
    activities.push(act67);

    // Activity 68
    const act68 = new Activity({
      name: 'Times Square',
      lat: 40.758896,
      lng: -73.985130,
      formatted_address: "Manhattan, NY 10036",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zggAjFN8h_1udeG7HcKS7OYwB9hN5jIMcbbsqlXepP2OMQNznRYwGidPRSSCEhUbtr-yLJLLMlgdIVbCSLwM5lZaY4XJjbI18rTTiVcdG3IQWRwwJkl9ms8A54iq_pgkVPW8k6KR8KE49UZWcVmqJcGsfkbXFXgxzm-ayuj0BKTewwi&3u2080&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=126877`,
      place_id: "ChIJmQJIxlVYwokRLgeuocVOGVU",
      rating: 4.7,
      user_ratings_total: 202488
    });
    activities.push(act68);

    // Activity 69
    const act69 = new Activity({
      name: 'Metropolitan Museum of Art',
      lat: 40.779437,
      lng: -73.963244,
      formatted_address: "1000 5th Ave, New York, NY 10028",
      formatted_phone_number: "(212) 535-7710",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zil1zSZZtJ9VA8wS1q1N9BginhSzjDiTEcOwRxWV4NN9MUidciX4KroE68favZNm6ni8S5oIyNgXEwt3nyg97R9HQrKFyNnPlQABnB2UE0owFpUACUqNTyJjtWCYfD8kEwH9I44yR-JmO9LkSbL2E5p2897vJwEfwY7i7fp00FOqaE&3u716&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=46067`,
      place_id: "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
      rating: 4.8,
      user_ratings_total: 77082
    });
    activities.push(act69);

    // Activity 70
    const act70 = new Activity({
      name: 'Brooklyn Bridge',
      lat: 40.706086,
      lng: -73.996864,
      formatted_address: "New York, NY 10038",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgOvuNgkyToT7UNra4zfjTuFXT3M2-yZ9FHS__-v_eKuJ--RhI4F-dySrztCxjIn7xhtaz3C_AqTq2a9xkyBNJRbp8pzZ0ryhgUH7P-rQ1eBC3XBwEer7cj94zXUsjxh-n8bBBlZDlapX9O8Sn1jNSzK82oe23oAXmeb3KReRYDYnnS&3u9000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=100949`,
      place_id: "ChIJK3vOQyNawokRXEa9errdJiU",
      rating: 4.8,
      user_ratings_total: 68513
    });
    activities.push(act70);

    // Activity 71
    const act71 = new Activity({
      name: 'Museum of Modern Art (MoMA)',
      lat: 40.761436,
      lng: -73.977621,
      formatted_address: "11 W 53rd St, New York, NY 10019",
      formatted_phone_number: "(212) 708-9400",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi1apAKadPP7hV9m2aK3RUp2DJovN1cYzeUFzlYxjZdLH2kiaPqT8yeapjmX4wSv4AQE4tlvK3qXPf-1RNFxREodiI3IFTgPyEFr4aISxTWPi5i8Z5MiJgojr_q9mBHqA9MQdvd67B1OkJW2sSFHcSfT9mSNaBZ_nziaskjXDFxcTMY&3u6000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=13824`,
      place_id: "ChIJKxDbe_lYwokRVf__s8CPn-o",
      rating: 4.6,
      user_ratings_total: 47219
    });
    activities.push(act71);

    // Activity 72
    const act72 = new Activity({
      name: 'One World Observatory',
      lat: 40.713353,
      lng: -74.013031,
      formatted_address:  "117 West St, New York, NY 10007",
      formatted_phone_number: "(844) 696-1776",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhvZp5-zDmleQJ8XGPIAyJ9yeU66Mv9wl72nLe443fpdF5z7-bQjvoTNBlOzrkcQdVh84hVRutlUHRWcJuTVbHDX8pPiLod1Nw48LxkQYaEGG0nN3lTnaRl827q6yvv6JfAyjD_8ibIlCi3BkBMfwu55l6llPfQ3xlfTujKS2vOZxPP&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=93435`,
      place_id:  "ChIJTWE_0BtawokRVJNGH5RS448",
      rating: 4.7,
      user_ratings_total: 18226
    });
    activities.push(act72);

    // Activity 73
    const act73 = new Activity({
      name: 'Brooklyn Botanic Garden',
      lat: 40.668819,
      lng: -73.965363,
      formatted_address: "Brooklyn, NY 11238",
      formatted_phone_number:"(718) 623-7200",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgUEsuhXcnDZ7r3GCVPOBUnrt4-VgXV-QOWlWnXteRqtl4d3Xl89CQ1KV_1cHPZEcBhHvWNQFZKSi_Zang7kO0b-EoAmQkX9PIC_p8l_uIeQUDDmwa0R3GgphafaG-TfnBfpnLxI3xZmxfxebBmdUMNFBKGQSll_7w109L8bgdKm_2k&3u3072&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=60526`,
      place_id: "ChIJwYu_aA5bwokR2lxjW-QvQlc",
      rating: 4.7,
      user_ratings_total: 12003
    });
    activities.push(act73);

    // Activity 74
    const act74 = new Activity({
      name: 'The High Line',
      lat: 40.747993,
      lng: -74.004765,
      formatted_address: "New York, NY 10011",
      formatted_phone_number: "(212) 500-6035",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zivvIJ-MAS4oodLYcuCiy6a3EbrvAyeRsUOB4Y0cyUV2DeEnkLE6qGYOhefaFwVr6EgL1VqNZ3X4hV-jv32eCB5aeQdFUVPgntf4j5a68IuvspsNfC0nCXb9GjOhD0QdG9NVUTSevZyJsmtSnDZCAgGIrVqHaqDhm3_VuyBnj4Cefk&3u4608&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=14996`,
      place_id: "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
      rating: 4.7,
      user_ratings_total: 54837
    });
    activities.push(act74);

    // Activity 75
    const act75 = new Activity({
      name: 'Brandenburg Gate',
      lat: 52.5163,
      lng: 13.3777,
      formatted_address: "Pariser Platz, 10117 Berlin, Germany",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhcX32xqYk4Kb1np0ptjY6tGHVWfIpBRPeHK1Ip33v9hGYCP3w0FGrQwK1H54w6ntD4LSeLSY579hEpHXKORQoRFYvu0sib-2VOjnX7qKlvTmXsp4moDRzk76k91Xf62_bSdIZ9xElbGfoq8VVq9P20d3gkb7holSiTRylHra0Kc2yc&3u1080&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=60970`,
      place_id: "ChIJiQnyVcZRqEcRY0xnhE77uyY",
      rating: 4.7,
      user_ratings_total: 151690,
    });
    activities.push(act75);

    // Activity 76
    const act76 = new Activity({
      name: 'Berlin Wall Memorial',
      lat: 52.5295,
      lng: 13.3869,
      formatted_address: "Bernauer Str. 111, 13355 Berlin, Germany",
      formatted_phone_number: "030 467986666",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjJX5usLxemagTYfHure8RLUneb6tMjhMcpE6CuW3u_0N-C2tNgUStm6VTWKyoQtEceF0J5qirTld92dXPg-aB7-7804IOAwVUyPlpfaFiUzJpGIoBe23RXoo195BXMwFWiVT8Qo_XiEqgW_VjbDM0yPDAgelAfzwICxGnXeojyZIbv&3u3464&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=31202`,
      place_id: "ChIJZ0KxF_JRqEcRrLHB-4r-U-o",
      rating: 4.6,
      user_ratings_total: 39119
    });
    activities.push(act76);

    // Activity 77
    const act77 = new Activity({
      name: 'Museum Island',
      lat: 52.5161,
      lng: 13.4011,
      formatted_address:  "Museum Island, Berlin, Germany",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zh4O21UJkeK_t_cQggSOZJTYL2VD2oedusHdMfFp4vTt_hj4BzmmHie6WH2AtaVVjMnpgm4bytKcGA31vtzFw5PNhiycbQ0T0X2eSfH2L4238vLnnUVAmhJNOsuhz4Cv23UU7sH11uXZo7DD7il4jaasKwJeJWKfeF7d7kj5hs01Bwf&3u1284&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=121015`,
      place_id:  "ChIJx8qLPN9RqEcRB2gSnmw5bJM",
      rating: 4.7,
      user_ratings_total: 2732
    });
    activities.push(act77);

    // Activity 78
    const act78 = new Activity({
      name: 'Checkpoint Charlie',
      lat: 52.5074,
      lng: 13.3904,
      formatted_address: "Friedrichstraße 43-45, 10117 Berlin, Germany",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zj32MvWtd_u_NV-0X9hibfwdaqTWbNBw1Us8aY-R5rDVRFQPqiONGxXdb45nS_9_1bTCm48xq9uMN0PN0DKD8nhVK5xhAAAIhMeSFm9xcpDiZD-xz-1-tZlT4-65dS4IhQauq2scysnC5MvCZ3JJzYj2noCJzwMjlD4AZlANZGXN6Vs&3u4000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=121173`,
      place_id: "ChIJzdgmXNFRqEcRyIl9R0IApSM",
      rating: 4.1,
      user_ratings_total: 78181
    });
    activities.push(act78);

    // Activity 79
    const act79 = new Activity({
      name: 'Berlin Cathedral',
      lat: 52.5192,
      lng: 13.4026,
      formatted_address: "Am Lustgarten, 10178 Berlin, Germany",
      formatted_phone_number: "030 20269136",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziCFQEBaiU2Ux9FiTLEtcDlXBas7GAf5zBnLyA21wxKAM5XPNaatvQWEEZSm3XLBJJVJmdNjO-XReGgxV9V_YpKgHbP4vWZqqfDlRAFavClakZuWeU1ymhuh3iBCw3V03i4YelsgfHLYOV2RkCyrPmZkvTV6Y4eCcQfeVYFrJANhPMD&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=21402`,
      place_id: "ChIJS9HC895RqEcR_IovsNVoDng",
      rating: 4.6,
      user_ratings_total: 33844
    });
    activities.push(act79);

    // Activity 80
    const act80 = new Activity({
      name: 'East Side Gallery',
      lat: 52.5052,
      lng: 13.4397,
      formatted_address: "Mühlenstraße 3-100, 10243 Berlin, Germany",
      formatted_phone_number: "030 2517159",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjq9341pQgfMWPIqNz6YpLHXSa6p3d2QFP4aBQtynozb-BorCU0BUetW6n4xXIrTCFPGToT-HhUgFSkc7_drX0BQDZP7aj0OdrHb4Lb28hfbCFyHz7W5bivw5GXXGLVpehKQQ-W0GvNDriJiuOWQiXbEUgbEMKFgvadXp_-a0JrQb-J&3u4000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=113553`,
      place_id: "ChIJS6_t9aZHqEcRGCiRSnvpm94",
      rating: 4.6,
      user_ratings_total: 50369
    });
    activities.push(act80);

    // Activities in Taormina
    // Activity 81
    const act81 = new Activity({
      name: 'Taormina Ancient Theater',
      lat: 37.8521,
      lng: 15.2887,
      formatted_address: "Via Teatro Greco, 1, 98039 Taormina ME, Italy",
      formatted_phone_number:  "0942 23220",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zj5-rbOgBo76uSXBNmk0xRNdBxyDIfGg-hXkA7-arbB6CA6G2LuKxVvA64X0OfndArJ2UhYL8bxbJYblyKKgOhHQzwGtQd-d8Wfvgvi2ptK5Il7pGSZ4fv0MWDRDx6G10bBUPl_TnjukAClzp3tKDsrNmB7tgVzXcvznNg3KBKPxl7U&3u4624&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=9981`,
      place_id: "ChIJXWSAM58RFBMRNoKQddHr3QE",
      rating: 4.6,
      user_ratings_total: 30037
    });
    activities.push(act81);

    // Activity 82
    const act82 = new Activity({
      name: 'Isola Bella',
      lat: 37.8423,
      lng: 15.2766,
      formatted_address: "Isola Bella, Italy",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg7pTnWjgjvousv-w0wHBbOUW6XE3q4h82Ri_j5XIKQ-VS5n9Fiy1zPD5c1k1ud6-e6npKszQkaozn8XgFPfbTO8UKjhl7zfA8AsD4PYlmulyojtIQxTRxSBtM7pP9Ocdf42FApH6O2uPCB6FzfQ5wqPq-5yjrckYTI4Fq7u977JQfP&3u1362&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=13636`,
      place_id: "ChIJC6DJT5sRFBMR-W66zNDOmvA",
      rating: 4.5,
      user_ratings_total: 1647,
    });
    activities.push(act82);

    // Activities in Catania
    // Activity 83
    const act83 = new Activity({
      name: 'Mount Etna',
      lat: 37.7510,
      lng: 14.9934,
      formatted_address: "Mt Etna, 95031 Adrano, Metropolitan city of Catania, Italy",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhlUjPSqfYtBPKhfmS2k7XW2gBj4Gjq7a3NDKbt4rfDr2GBiIwzcxjsDvv3UqtfmthMiFO688F4IAxcx7h4s_qoV4QX7wvKU2CzVAhdvJXNG0lysCI-KFpvPKSEooEv7fj0g8mZ_lRD1iytM8vKG8rRnNWC3Dwr4hl9-mNaPUP_3iM&3u1280&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=85673`,
      place_id:  "ChIJ66CnFDeqFhMRcCrFpSoECx0",
      rating: 4.7,
      user_ratings_total: 4953,
    });
    activities.push(act83);

    // Activity 84
    const act84 = new Activity({
      name: 'Catania Cathedral',
      lat: 37.5027,
      lng: 15.0870,
      formatted_address: "Piazza del Duomo, 95100 Catania CT, Italy",
      formatted_phone_number:  "339 485 9942",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjLUwgZUHlSppYsOMWTvvrRRzaCC0ZnMzK5AX4NKnM7tIdk9s8EN4utFROboo4HVLqhsBc2uzsjr-R3yi9fwp9Q-KPpTHJb5pDLfmCeaqcir94Kh8ami2Hpqav6mTwzFNzRX1ZTOVT56K3h3svSCPZzKwPw8W-iI2yY4dpGFzh8kT9a&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=110506`,
      place_id: "ChIJP0UjWi7jExMRJytI986aC6g",
      rating: 4.7,
      user_ratings_total: 6613
    });
    activities.push(act84);

    // Activities in Siracusa
    // Activity 85
    const act85 = new Activity({
      name: 'Island of Ortigia',
      lat: 37.0656,
      lng: 15.2937,
      formatted_address: "Island of Ortigia, Italy",
      formatted_phone_number: undefined,
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjjA1uw-aMRpfpuivuNmzi4mcE1aq-0OAxddqI4BNHaloZWYdpir8E1by9u4GbHHehDQcAarJmuJwRS5cBnqbLiLnI_d3DNPGo5Lub1m4ypWAS9k8efk0nb6hxoc-PKfGRfjHsPC6mCRHUoVnqBkmNT5Yx0-ihgQ7QMa6_ihzmD2K2d&3u1024&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=117094`,
      place_id: "ChIJT0_-TxrMExMRWvRZDC70lEk",
      rating: 4.8,
      user_ratings_total: 5689,
    });
    activities.push(act85);

    // Activity 86
    const act86 = new Activity({
      name: 'Greek Theater of Syracuse',
      lat: 37.0756,
      lng: 15.2813,
      formatted_address: "Via Luigi Bernabò Brea, 96100 Siracusa SR, Italy",
      formatted_phone_number: "0931 489511",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zj3Yg3dVJM2V1phwF9HnoZqcpem18uUTLujtx4eT_shQ4Qo0daewVW1aO6yOOEsyRYeQsJLPu4f8eBxZfEbILsqbKpIpTSPze2o1MSS5oKWIBU-iH7Z_jcoinlKta0FVF8C2kYMeV0q5sfZsUxv15iqvDLmPRoE4RfGxVjRXJ_xa4xz&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=17378`,
      place_id: "ChIJ2c87UoTOExMRovFOoplBnLk",
      rating:  4.6,
      user_ratings_total:  7998
    });
    activities.push(act86);

    // Activity 87
    const act87 = new Activity({
      name: 'Archaeological Park of Neapolis',
      lat: 37.0807,
      lng: 15.2709,
      formatted_address:  "Via del Teatro Greco, 96100 Siracusa SR, Italy",
      formatted_phone_number: "0931 489511",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjZ6tc1zEXeFdinSwHnS6hHlsqPmx4lW4ehCZUo6z1ToWw-mf2elTa6o7m6Bmpk6wSQJ0z9e8F9eplkM2x5aL40fwy-wH5Vk6YisTWOyOU7V9_osTEbnYIHeQQjqUCYrFyte5P8R7veJw-xFMFooc-9IN20D_OhiDKmAPG62FFe7suA&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=89726`,
      place_id:  "ChIJNxOoH4XOExMRhHybAmkE3UQ",
      rating: 4.3,
      user_ratings_total: 17932
    });
    activities.push(act87);

    // Activities in Noto
    // Activity 88
    const act88 = new Activity({
      name: 'Noto Cathedral',
      lat: 36.8910,
      lng: 15.0710,
      formatted_address: "Piazza del Municipio, 96017 Noto SR, Italy",
      formatted_phone_number :"0931 835286",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjd8-AC8iuYPEXHnH6bidllPnXXpWITPThPUC8XXuzXjH1rJwk2nKJe7QUP0bZUFBpcEEFZTHJ0Tv3xAsERujAyHZej-EOWKJBQOeJ27fqMBT21QjBHS3XCACf-92x7YrbXKLrEhThUxVpWfPcQs29ZafEPFQp6xjrRfHxt9yqRYoJr&3u4000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=39412`,
      place_id: "ChIJkcQ3964pEhMRwjKdylpBk4c",
      rating: 4.7,
      user_ratings_total: 7740
    });
    activities.push(act88);

    // Activity in Modica
    // Activity 89
    const act89 = new Activity({
      name: 'Modica Chocolate Museum',
      lat: 36.8582,
      lng: 14.7601,
      formatted_address: "Corso Umberto I, 149, 97015 Modica RG, Italy",
      formatted_phone_number: "347 461 2771",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg2Tu1ckEyNWAPDwHCyagtiz134MClJ4G7fhabVAwclUQn182AGXQvkGHLA3L_qoJRSE1NrDdxMY6Tvl422nMyxOBKfbFbUB7rzKs5j3P52M7m4eqZXeiUwY5OERuAgqdSlLsMIAPvZ_CadQKFZKV-_XgeUEWFjiRBmJVzEc9DGoEAL&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=102123`,
      place_id: "ChIJ8WXC0cmQERMRRunK7gmQ2UY",
      rating: 3.5,
      user_ratings_total: 443
    });
    activities.push(act89);

    // Activity in Ragusa
    // Activity 90
    const act90 = new Activity({
      name: 'Ragusa Ibla',
      lat: 36.9297,
      lng: 14.7224,
      formatted_address: "Via Giardino, 5, 97100 Ragusa RG, Italy",
      formatted_phone_number: undefined,
      imageUrl:`https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjkYay5dYbnl9DcNeZnXWCb8vku8M9AEq-1_GrmZYvKVTHzDhGyjGtNZRwqHIirjr-8VP8ovIC5TRypnBTo4j0Nxy6fsoAyaiO776zwPH98yYWNAVKEwYlTRMCQO4JWoqhk2Fub5dX2-4U5GcoK8tNRZJZClt1HuQM3N9fX8D1EZkwM&3u5805&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=40785`,
      place_id: "ChIJIQVeWKeZERMRVVp4jdZm8YE",
      rating: 4.8,
      user_ratings_total: 802
    });
    activities.push(act90);

    // Activities in Agrigento
    // Activity 91
    const act91 = new Activity({
      name: 'Valley of the Temples',
      lat: 37.2859,
      lng: 13.5883,
      formatted_address: "92100 Agrigento, AG, Italy",
      formatted_phone_number: "0922 183 9996",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjEVRRunKlc7M7YmyZDjUDMkoKjrsyEGAyEBXAEWqFsrswl59LTJJuZ0Gu2_zy6H3w7w2tXjIGtITFK6Sy-pDuXzBVFonxvMmIyEDwaWsFvX9OBSJJoEVO3TgKz08fXC8NRiWEUcMIzqW-jsVqap_fIHmb-OgmcF5d4uW-T2_llIzCu&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=65824`,
      place_id: "ChIJt6XuxTOCEBMRnrwHMdW4k_Y",
      rating: 4.7,
      user_ratings_total: 45793
    });
    activities.push(act91);

    // Activity 92
    const act92 = new Activity({
      name: 'Scala dei Turchi',
      lat: 37.2971,
      lng: 13.3893,
      formatted_address: "Stair of the Turks, 92010 Realmonte, AG, Italy",
      formatted_phone_number: undefined,
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg_72jBzgt14de3T8QpS7us-vloVuosBHX2WeiV6hTD1Jra57dn1EAaDq6iRwtPDd_l-sNSqnE8xCZkDbc8aAczHBiyGLVj2YFp7xRhj3hTJc_mzdsufYkadWnQr5kMQH5456YuUPaS5MHksnIRNL4qPigV8WLog-P3yYCeSSwTr_hd&3u1385&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=4161`,
      place_id: "ChIJcdpBykp5GhMRLgLTCaHpkMM",
      rating: 4.5,
      user_ratings_total: 4266,
    });
    activities.push(act92);

    // Activity in Monreale
    // Activity 93
    const act93 = new Activity({
      name: 'Monreale Cathedral',
      lat: 38.0820,
      lng: 13.2918,
      formatted_address: "Piazza Guglielmo II, 1, 90046 Monreale PA, Italy",
      formatted_phone_number: "091 640 4413",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziHn21-EENboWqZng148ap0u2spTUfzDmzsAuX1hvMDLNZ0yppg64kb6HmVYDApVD5vxRom0UpsJV9dghSjQnYrBBVJorwP_DM3uD51OcsjZ6uRt-FpuWR7aaIQtUodahV7xvBTDvzqYNeMhN7ccgYQl-yVTRi10o9HGN_Pf6ZOnfuF&3u3712&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=63148`,
      place_id: "ChIJkzHupj_uGRMRguQLH5DlPgM",
      rating: 4.8,
      user_ratings_total: 21543
    });
    activities.push(act93);

    // Activities in Palermo
    // Activity 94
    const act94 = new Activity({
      name: 'Palermo Cathedral',
      lat: 38.1157,
      lng: 13.3619,
      formatted_address: "Via Vittorio Emanuele, 490, 90134 Palermo PA, Italy",
      formatted_phone_number:  "091 334373",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhtMlH09RMaa08atoNmWjQgZRJQukgMfg6SbZbHbTIJX2oKhNXyAT-c5KHq-liRhX4sM5o-SlyX33aXhvih32i3Dt6bWgeAmdUFXsPsd9gD6wYEFQwHH-SW5EiXpk0P8rBFyjg87pSMHppG-BGTP3cDLqrLYyvgZNj9CXhNJFpV8hzE&3u3000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=11843`,
      place_id: "ChIJySXqmGHvGRMRancw-ZBf2ow",
      rating: 4.7,
      user_ratings_total: 35515
    });
    activities.push(act94);

    // Activity 95
    const act95 = new Activity({
      name: 'Palazzo dei Normanni',
      lat: 38.1151,
      lng: 13.3611,
      formatted_address: "Piazza del Parlamento, 1, 90129 Palermo PA, Italy",
      formatted_phone_number: "091 705 5611",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziuH0aYulBZdF91rCD5OQBPOy_w5PYLlt5t8SfyRAQnQsh27yDqijg6f1NNOFCtCzqqUNRJ51S4Iu1-06DBoM7CBVv2BypqNfnruqTAl5ii8sO9DFKraGFhQdFHxNaKDZUTlmYerRjh2VV2xoUKpap2fz86tOzUSwZ_gXv0ZwMqhQZT&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=127616`,
      place_id: "ChIJRT-UYGTvGRMRxSv7Jhaj7HE",
      rating: 4.5,
      user_ratings_total: 19524
    });
    activities.push(act95);

    // Activity 96
    const act96 = new Activity({
      name: 'Mondello Beach',
      lat: 38.2062,
      lng: 13.3300,
      formatted_address:  "Mondello Beach, Italy",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjh8-rf_q5QBKUCFXfpCkcMl7NGbXWncYZ7wVlkJi3BPpMYG8zKg_aRCoKBGcNVK6TjOD7YtKcYbKh63of_92cSoE4vjvjXUKLpVWtfAVQv-XFaP9v0SlMQasIEcFs7am-5sMM7nugLXidEFRjJkEPNSlXWxFUMC-ysvfhyUHCEOzcC&3u6000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=90501`,
      place_id: "ChIJmR0M1EDoGRMRRUuwA7kLmZI",
      rating: 4.1,
      user_ratings_total: 3977
    });
    activities.push(act96);

    // Activity 97
    const act97 = new Activity({
      name: 'Capuchin Catacombs of Palermo',
      lat: 38.1152,
      lng: 13.3587,
      formatted_address: "Piazza Cappuccini, 1, 90129 Palermo PA, Italy",
      formatted_phone_number: "091 652 7389",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhLrnMfJpKDrFPrJDaWE6u3mVLYxtpsCpucBEOKdglAfSWxQ73RLpGbI00ZlcIwedeUCuFy75dxsdEQJ5NPq5ycJik65AtfnS8S6CL9M5VqarjEj9yFODRLXYhKm3CDxqRqC9XL15pQQqtxAf6UbcSEp32NfOA2n-hqRrhX8Xb6udLt&3u1289&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=99720`,
      place_id:  "ChIJAbBCq2XvGRMRdn8cRrtvzUc",
      rating: 4.3,
      user_ratings_total: 10239
    });
    activities.push(act97);

    // Activity in Cefalù
    // Activity 98
    const act98 = new Activity({
      name: 'Cefalù Cathedral',
      lat: 38.0344,
      lng: 14.0228,
      formatted_address:  "Piazza del Duomo, 90015 Cefalù PA, Italy",
      formatted_phone_number: "350 008 1587",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgdPBj6n_3Gz0uV4F9GCeplmKdMNejnz3QasMgXbiCMo87t0sjTNLyHobk7iqBDGOOW9isSvfX191N1M64lRg_z4pRwxWQrigM1RNC-MiK1pRH4tykW9Fc1KgQQ1w9lnZAM_YQs4eegD7Tg34L4vm5XHx_k1nRItI1SNoHXD4nAKZgd&3u3060&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=44340`,
      place_id: "ChIJa0OFxOk7FxMRLo4qlyTPcO8",
      rating: 4.6,
      user_ratings_total: 10079,
    });
    activities.push(act98);

    // Activity in Agira
    // Activity 99
    const act99 = new Activity({
      name: 'Sicilia Outlet Village',
      lat: 337.5730974107189, 
      lng: 14.480539265564628,
      formatted_address: "A19, 94011 Agira EN, Italy",
      formatted_phone_number: "0935 950040",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg-YtIfH8EXj7_9EYcH33ztxgtI6t8ChRnQb7f4cIXje9qsNY6wIGwAdHGcayiw4xYXu85itKxFHdDqLJCxKWAGYR7lCEz95MvSnABwjAFHz_z4KuBrJg2mKnnN1UPJbwvymzMzhRNJwb_QOwbuw5t6_dJaKfLEVNsqupok8zKwD-sl&3u4160&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=123197`,
      place_id: "ChIJx9D3iLM6ERMRdYfqBuDv50E",
      rating: 4.4,
      user_ratings_total: 21882,
    });
    activities.push(act99);

    // Activities in Paris
    // Activity 100
    const act100 = new Activity({
      name: 'Eiffel Tower',
      lat: 48.858844,
      lng: 2.294351,
      formatted_address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    formatted_phone_number: undefined,
    imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziYsQZGLWQSLKA8P01otMJY-LzpDMO4G5g1ZrUQBBPV894ngCqRVkekFcqg94vkIvVhfdRkrI4WeAn2FKXU9Gwyy7UYovGd0f5dzt6MaVKBRaTr_mtzAWNDO6w2I4BBlLDkiH_-8xg_BvK5s5JGhsDoiy1oiSreJ6EWv4OtsZt6sxWw&3u3024&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=81443`,
    place_id: "ChIJLU7jZClu5kcR4PcOOO6p3I0",
    rating: 4.6,
    user_ratings_total: 370101
    });
    activities.push(act100);

    // Activity 101
    const act101 = new Activity({
      name: 'Louvre Museum',
      lat: 48.860611,
      lng: 2.337644,
      formatted_address: "75001 Paris, France",
      formatted_phone_number: "01 40 20 53 17",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zh6GmIzGdKpVwIdxQo9A-2s2oZmEcXxAeUX7ORb-mnmQsbCvj7A49gQk-iyp5Vtei6ONIxyXDM-X_qWHDQRvFmkwq67CpXfIQPELAPE2E1KPO66EOfmaygRE0RKfayGS5LPUSmht2w3WdzTP0jEgGr3ccbz9pxHP5KISZ-6rb_OCY9_&3u797&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=44255`,
      place_id: "ChIJD3uTd9hx5kcR1IQvGfr8dbk",
      rating: 4.7,
      user_ratings_total: 292539
    });
    activities.push(act101);

    // Activity 102
    const act102 = new Activity({
      name: 'Notre-Dame Cathedral',
      lat: 48.855708,
      lng: 2.351452,
      formatted_address: "Notre Dame, Paris, France",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhZ8zklVDDp-0m3ocRKT3_J7x4j4P-AfCxtKfS4mbv48bhn7VaKzOgm2ASzYNuKpDq4iNZpGgLOVT9mrRzMKM6mxbW2w7ScffQEFn6VcvGuktDLor4qdoLx2TqkkprXbsWkwsKUTr1bjIuFXJTrk0RLlveL8eDQjI78Rn4b1vIcN_-V&3u3928&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=29244`,
      place_id: "ChIJr0jUneNx5kcRQ_b6LMiOXek",
      rating: 4.8,
      user_ratings_total: 8769
    });
    activities.push(act102);

    // Activity 103
    const act103 = new Activity({
      name: 'Montmartre and the Basilica of the Sacré-Cœur',
      lat: 48.886845,
      lng: 2.343206,
      formatted_address: "Sacré-Cœur Basilica, 35 Rue du Chevalier de la Barre, 75018 Paris, France",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgbTdMhBVtRLzfK-mt8ADoG2i2AfNEV_V998A8uw2d-0U8zPmIDQM6AFg69V3ft54Rp_IkF5VqTSmwsxJwCFhav1rjHcGebTzPumAUcIsR4de28-Fq_3gw67Vmd_OMLWct6sgLt9p9gsHHxvyhoZsdlLbKELgll1RwbIKE-cMfMUC4L&3u6000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=2849`,
      place_id: "ChIJg8vfy1xu5kcRA1tGDNGsgHA",
      rating: 4.7,
      user_ratings_total: 6789
    });
    activities.push(act103);

    // Activity 104
    const act104 = new Activity({
      name: 'Arc de Triomphe',
      lat: 48.873822,
      lng: 2.295048,
      formatted_address: "Pl. Charles de Gaulle, 75008 Paris, France",
      formatted_phone_number:  "01 55 37 73 77",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi0cqf1rMIXrgUovjC11MnwxeFaZlocFLeMnYg0qDRxBsy-wuEkAPMUbAj2hmpXk-Y6ZO130QXm2ABmomHeuU7NJ7jBSpir5cZSkvVAia0iHYmXPH__pMZSp-P_jUrH5i03YZ537NRZ-9TnKRDUafhtop1PLblc6w6nHJndaUrQ5XS8&3u9000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=93928`,
      place_id:  "ChIJjx37cOxv5kcRPWQuEW5ntdk",
      rating: 4.7,
      user_ratings_total: 223985
    });
    activities.push(act104);

    // Activity 105
    const act105 = new Activity({
      name: 'Seine River Cruise',
      lat: 48.860933,
      lng: 2.323461,
      formatted_address: "Seine, France",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziPvJj9OrO71IgtoQsoeR3p_zHNONpGJLuwYPzOQA828_zwvu-0qAw57VABAW_otamzCrrfigE69egjOnkSJXyedjaLJSf9cOjobbT-tRGQCwilDJjYF-g8FVlhLD0qPuoBkufc3436wB-6BQGOPCFlZ2FFemM8N4tYMCji1pa6zR_r&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=52645`,
      place_id: "ChIJx12c9iK37UcRYa1Leh4sgUo",
      rating: 4.5,
      user_ratings_total: 2910
    });
    activities.push(act105);

    // Activity 106
    const act106 = new Activity({
      name: 'Musée d\'Orsay',
      lat: 48.859961,
      lng: 2.326561,
      formatted_address: "1 Rue de la Légion d'Honneur, 75007 Paris, France",
      formatted_phone_number: "01 40 49 48 14",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg169ei9SYGuff8VlNaIi6fhjYZEiaHGwPhBcq-9ZHqAcHYq3KyovaxLMewAMZ6foF5Jt5KxnsnQmBG0-gKlTjyuIXRvlGxNXn2jRUNuT9qxukOxRsFb4kUJAO2tK4En8EJDIjjOBgeMOibxdFEuofX2KaZ3XOykyG-3XgFY1Dji298&3u6048&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=82759`,
      place_id: "ChIJG5Qwtitu5kcR2CNEsYy9cdA",
      rating: 4.7,
      user_ratings_total: 82576
    });
    activities.push(act106);

    // Activity 107
    const act107 = new Activity({
      name: 'Palace of Versailles',
      lat: 48.8049,
      lng: 2.1204,
      formatted_address: "Place d'Armes, 78000 Versailles, France",
      formatted_phone_number: "01 30 83 78 00",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi-ZVZnHG6IC7gVVPy3FzZzjW6nwY7k929onQOz0jiJWV8G0T63ojIGicg4WTCEL7nHYFftgRAY47gFfSZE8kmw1CK6flsrlLyXrPKsMgcB6QHOHs0RRvSDD_tpD3C1C17Nt7f9DLM3o0WMBmt6xh230R72KFESA17J5rHbeXYqOjpk&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=53815`,
      place_id: "ChIJdUyx15R95kcRj85ZX8H8OAU",
      rating: 4.6,
      user_ratings_total: 135035
    });
    activities.push(act107);

    // Activity 108
    const act108 = new Activity({
      name: 'Pantheon',
      lat: 48.8462,
      lng: 2.3467,
      formatted_address: "Pl. du Panthéon, 75005 Paris, France",
      formatted_phone_number: "01 44 32 18 00",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgavesNhYJHTX4Y_cP0GetEudIva-mFI7P6Ua4Wgg0trP9E-9eczONYJh9t9Hv27ie38TctCiNE-2Z2f_HnxNdaXV8z8B20sE5K4mjai0V-S2AHx57GnIYM2EfX_VzozLyCqwxs9jNQy_HNZAQnNsB_I5qpQmQBluqkjMLq6cOPnz94&3u9280&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=22627`,
      place_id: "ChIJc8mX0udx5kcRWKcjTwDr5QA",
      rating: 4.6,
      user_ratings_total: 50704
    });
    activities.push(act108);

    // Activities in Florence
    // Activity 109
    const act109 = new Activity({
      name: 'Uffizi Gallery',
      lat: 43.7678,
      lng: 11.2569,
      formatted_address: "Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy",
      formatted_phone_number: "055 294883",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zj3eYLAV40ifks8wLl_5z1kZH8er9H3BCcfQAqAw6tzozNAMoBT2yKwrgNfG3BRmRbtwGWqnwnYZmOpw58qGi1vidV8rO13W8-4Qkbwy6mbjaMd1GG4E6O53tS36qrR8_B3SQZgIL9mGIa8K0hdX1d-GurZtlVvEZ6mLPuw5df9Jl-S&3u828&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=63555`,
      place_id: "ChIJgZDFjQBUKhMRzcTwm8i33s0",  
      rating: 4.7

    });
    activities.push(act109);

    // Activity 110
    const act110 = new Activity({
      name: 'Cathedral of Santa Maria del Fiore',
      lat: 43.7734,
      lng: 11.2558,
      formatted_address: "Cattedrale di Santa Maria del Fiore, Piazza del Duomo, 11, 50122 Firenze FI, Italy",
      formatted_phone_number:  undefined,
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjQWKS1h2WT2YefvLZKqyo-LQYoWmoO4AmIz0aAS8X12TxN4MhT3lCBrnd2UeD211wGRZCi8aoCbRifc_Iqzz8KlurCEHfau_w65vJbXCjLeVecA1D9PavjulGVbem6W9S2telo1xK546jOygeo9lXewfUzJcG1ukiO-_Ftw0Q_lHRL&3u3648&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=77858`,
      place_id:  "ChIJHT2PyANUKhMR3HvodTCGwkE",
      rating: 4.8

    });
    activities.push(act110);

    // Activity 111
    const act111 = new Activity({
      name: 'Ponte Vecchio',
      lat: 43.7673,
      lng: 11.2531,
      formatted_address:  "Ponte Vecchio, 50125 Firenze FI, Italy",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjHjozzb0euWCIc5W9F9xuYKDO0PCociloOAS_3bN4kwwxH-WzPsXmmIvqlN1a0DiGSJPuu74sLA5bg_XPR0nosVUqCh4NbGLT1DGITEH4F5h8sq1zWxtdlYLlIeU8p7XJ5KXaRUe5ykT0_JiBEhNz-gfdtWx6bGQnRHtIkEsmKp7ET&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=126246`,
      place_id:  "ChIJZ7bcoqpWKhMR6ALnMOgKMUA",
      rating: 4.7,
      user_ratings_total: 127349
    });
    activities.push(act111);

    // Activity 112
    const act112 = new Activity({
      name: 'Accademia Gallery',
      lat: 43.7774,
      lng: 11.2578,
      formatted_address: "Via Ricasoli, 58/60, 50129 Firenze FI, Italy",
      formatted_phone_number: "055 098 7100",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgQzLjwYGaePVEf0Et__9PAsMT3jVBtpTVavVdoO-ZwGWEZbcdvGGzV_RG0jdlvvNQtLFmN5k-JmZsqgG4mpped9orFaABerVVS70eeZjJDuQPZzDfoF5a6ANC4TscvApqpKxfNCjbcTG2U-8b2PMg2kKARHp2RKKAX6UCupfh94f8u&3u9000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=42065`,
      place_id: "ChIJJ7mRvIxVKhMRx6JB-q73TG0",
      rating: 4.6,
      user_ratings_total: 39268
    });
    activities.push(act112);

    // Activities in Siena
    // Activity 113
    const act113 = new Activity({
      name: 'Siena Cathedral (Duomo di Siena)',
      lat: 43.3171,
      lng: 11.3320,
      formatted_address:  "Piazza del Duomo, 8, 53100 Siena SI, Italy",
      formatted_phone_number:  "0577 286300",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhSjFIjNTG1Z-rw2QaGxMA3VE6y5efter6pctHqKW7pBPP5pbURE8kvoKGG7OCf3tG204_HRSrhUbrrbQ6x1w19Rn36njfJ0wKYQcw6HmBboHeFhdrpI3Fm-1RasCKXTCocEA0RTJKWSP1wti7onOlcdFymNNXIoKWAulcKA5XDoeAm&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=22724`,
      place_id:  "ChIJw6OmtLssKhMRRd5_XIUZ_VE",
      rating: 4.8,
      user_ratings_total: 23417
    });
    activities.push(act113);

    // Activity 114
    const act114 = new Activity({
      name: 'Piazza del Campo',
      lat: 43.3183,
      lng: 11.3314,
      formatted_address:  "Il Campo, 53100 Siena SI, Italy",
      formatted_phone_number: undefined,
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgY7w0gPxTZ503Csu32G3vwwNYIizpbUOpHqTh2jFK9RPN0H9qxhrv1nwOlLtGGjbKHN7Imv9yDr9DW2wQyNTebnCZ5J3zhe8Ymmx9HVD6FBNl0gWz2nmtNGD7mfPnw6n_jOzhQ2S9ppbIix8_1AEItyxOqj05UrpW88uaI9Xi9e5c5&3u12032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=79179`,
      place_id: "ChIJE5VD8bksKhMRWgKSMTA5q0Y",
      rating: 4.8,
      user_ratings_total: 69301

    });
    activities.push(act114);

    // Activities in San Gimignano
    // Activity 115
    const act115 = new Activity({
      name: 'Tower and Casa Campatelli',
      lat: 43.4676,
      lng: 11.0434,
      formatted_address: "Via S. Giovanni, 15, 53037 San Gimignano SI, Italy",
      formatted_phone_number: "0577 941419",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zh4JHBKrWU4btaiH_cjk8DffCYSD6aMsk-ynsutmQ4eOw5Sgof2U9vNZb3PUGpDhkPU-kTebVCkVBEICepylPAebwQZ3jrndXXeG8JT_K9-TgDWB6NY-Gl3wsx3464l9YaLb3unX5e8KxDIBM65qMdmWtQP95K-pndYcHD59cBeIWeJ&3u1200&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=5853`,
      place_id:  "ChIJ0XqMSz88KhMRTYXNcAw77O8",
      rating: 4.6,
      user_ratings_total: 683
    });
    activities.push(act115);

    // Activity 116
    const act116 = new Activity({
      name: 'Piazza della Cisterna',
      lat: 43.4687,
      lng: 11.0417,
      formatted_address: "Piazza Della Cisterna, 20, 53037 San Gimignano SI, Italy",
      formatted_phone_number: "0577 940008",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zihwNaa9vY8mYUyu1EOE-ex0LPKuLkR2G0pzKjf-f3CyXUJ0erQHBUdjA7t8ABG5KXEqInpVbqkUcmLzL8WcYWEa5uWyvyEGhQEWU_8BNBVNNhWsvKkIjP_aYav3U6C6-_WsD8HY8-B6ZpYNEGeG8dWSXveFXUMXgwStGC2LBwRIwyx&3u3840&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=68973`,
      place_id:  "ChIJ9fHLOz88KhMR8c1zkVOoatE",
      rating: 4.8,
      user_ratings_total: 1041

    });
    activities.push(act116);

    // Activities in Lucca
    // Activity 117
    const act117 = new Activity({
      name: 'Lucca City Walls',
      lat: 43.8396,
      lng: 10.5026,
      formatted_address: "Porta san Donato, Via delle Mura Urbane, 55100 Lucca LU, Italy",
      formatted_phone_number: "0583 2213",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi9xx7BVxmLzhK0ZVkWJwTW1weycKIZyW86HvhVZqCooZ9TZwOhLHaLuh8o41q106ZRNy2yyK0hTjtb8mBFGFSbgUreuYXv5lK6nEkqFgNSZvVjQHi0UTrCduDskMSZis98SYBOYTNcFpdvSKJHwdYRGb0PMXEwtj_6tQwudEof6J0c&3u2048&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=111191`,
      place_id:  "ChIJJXXwzfWD1RIRmbnybFc_1Ck",
      rating: 4.8,
      user_ratings_total: 4927
    });
    activities.push(act117);

    // Activity 118
    const act118 = new Activity({
      name: 'Piazza dell\'Anfiteatro',
      lat: 43.8424,
      lng: 10.5030,
      formatted_address:  "Piazza dell'Anfiteatro, 55100 Lucca LU, Italy",
      formatted_phone_number:  "0583 4422",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhYOmqWKD1glyGso2tOg0OkUB5IvZfI-r75sh3jBeuONMYmHRk72ZFBmF9NozdmmUFj8km4rJXIsWqSZ9TARCEM9kgvL4eyBx8I21qBIDHX6iScB7ZVwtA_S0Sv6BAhYRg008ZlLipixNp6sliuLUyH0C-ruLw0XYwC3dlneytrTHxl&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=83138`,
      place_id: "ChIJe_EYx4yD1RIRGO8BkOj2GkQ",
      rating: 4.6,
      user_ratings_total: 26469
    });
    activities.push(act118);

    // Activities in Pisa
    // Activity 119
    const act119 = new Activity({
      name: 'Leaning Tower of Pisa',
      lat: 43.7231,
      lng: 10.3964,
      formatted_address: "Piazza del Duomo, 56126 Pisa PI, Italy",
      formatted_phone_number: "050 835011",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zjdD7w-6E0aXKRrLXWKmlkEaPiFuUDpAMktHcdutPcIPRv21iAMSeyrFzEQF0l-BdkbYIGGm-4LFrGocVVblH3NcB9WG1pHt6pK-9Esdue8QV_hwqaqY3PYSHTBRNNCet0C3EbmVQS0UK_Jd967aGGYoO_M19xThIO9mpg3F32Jnd2g&3u12032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=64908`,
      place_id: "ChIJzYhOxKaR1RIRA_xU1bGp7DI",
      rating: 4.7,
      user_ratings_total: 137170,
    });
    activities.push(act119);

    // Activity 120
    const act120 = new Activity({
      name: 'Pisa Cathedral (Duomo di Pisa)',
      lat: 43.7230,
      lng: 10.3967,
      formatted_address:  "Piazza del Duomo, 56126 Pisa PI, Italy",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziOQSEQKYdB-r3pme0bBtaMNUAuKxvWQna_NqUUIeDjzibsCcSWgPE5RgBqM2RglO_na_WYs-wUwdX6ZSUuRmIEP3GQ9y_OqGjgOo5NymGSf1DOEjqj-9y-cbxkZLXWGhObQkFU9yUCtLKz9fCKs6KiUfCBQBRvC096FnHZ0saOB6cX&3u5184&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=10482`,
      place_id: "ChIJP6viXqeR1RIR4YESbSqoNks",
      rating: 4.8,
      user_ratings_total: 9909

    });
    activities.push(act120);

    // Activities in Volterra
    // Activity 121
    const act121 = new Activity({
      name: 'Volterra Etruscan Graves',
      lat: 43.4040,
      lng: 10.8598,
      formatted_address:  "Strada Comunale di Santa Margherita, 56048 Volterra PI, Italy",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zg7a9kk6DYcshckZA6oGwnTZrcB59I5tXPFfE9PR9zEKowgnPZXBcSpr6jHkFI54YwgQxsGtwKqJz1OkiD-gwCU3u0uhp9MeZr-JtXRTIlkCH7NGtlWyOfhiU1Nl3Yy46BJtMdkWz45tvo9gTIXyEXzs35-ugdbBOksD8QnyGYvz8ry&3u3024&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=115616`,
      place_id: "ChIJkdlmp20aKhMRB3F9rU_7iCs",
      rating: 4.6,
      user_ratings_total: 153
    });
    activities.push(act121);

    // Activity 122
    const act122 = new Activity({
      name: 'Volterra Roman Theater',
      lat: 43.4022,
      lng: 10.8629,
      formatted_address: "Piazza Caduti nei Lager Nazisti, 56048 Volterra PI, Italy",
      formatted_phone_number:  "0588 87257",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgRDApBrRE8XPFsK6Z_5u7LVnYZlcYzTtBimDMq4KukCsKJ7OOfJ4JdxlxjtS0iK20pXu0fSEWYpBiTJagxl5FgSZpgEB5h9cfmmuUXCUUezgAOyHyOV-DtHu6ZU7-avmEq_JZ0IMpMzJS0PReJuq-SK4amkULxwNifoojazniXLcAj&3u4608&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=19473`,
      place_id: "ChIJb5HikEMaKhMRJ5Qj39dulAA",
      rating: 4.4,
      user_ratings_total: 3707
    });
    activities.push(act122);

    // Activities in Lazio
    // Activity 123
    const act123 = new Activity({
      name: 'Colosseum',
      lat: 41.8902,
      lng: 12.4922,
      formatted_address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
      formatted_phone_number: "06 3996 7700",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi1CEV9dqatFCnoh9n05m06gUYaSuM3g9A3uFBXj62esOhJ1veobpH7g9_Qg-Bzv2qhETu_9Hsi0CVi0quohaIL4pCzt6JM3nSoXt1aJQWWZeGw1IPo8KfafezxHolP8xeuocqCK5yTdupNriO0hTKjsWB4P4t1LjDa3JQl16W1HYAg&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=93877`,
      place_id: "ChIJrRMgU7ZhLxMRxAOFkC7I8Sg",
      rating: 4.7,
      user_ratings_total: 366098
    });
    activities.push(act123);

    // Activity 124
    const act124 = new Activity({
      name: 'Roman Forum',
      lat: 41.8925,
      lng: 12.4853,
      formatted_address:  "Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy",
      formatted_phone_number:  "06 3996 7700",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhsla92cTESch3uBCWRvi3Jqk9VAtguJ8X55SEVSDAVWpwsWS_4PpICMZH-yKwe9Ub8WcgDZp_Dr8Xm6ZlRFb-MmH4mRWh3Qr9qf-4ecyhFFd2rEkfSalfnQVBYI71qNjyDg-juaF3u7w1mvBhm9rglYIHu0ahwrsyKwrJUFc3YmeIT&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=21605`,
      place_id: "ChIJ782pg7NhLxMR5n3swAdAkfo",
      rating: 4.7,
      user_ratings_total: 120903
    });
    activities.push(act124);

    // Activity 125
    const act125 = new Activity({
      name: 'Trevi Fountain',
      lat: 41.9019,
      lng: 12.4886,
      formatted_address:  "Piazza di Trevi, 00187 Roma RM, Italy",
      formatted_phone_number:"06 0608",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgD2YycTDPyb8lreHzM1K0QXqCFGLnD4g5S2cVh_QnN85KzTvciAhAECnfFFyJFMZnx-Aym2pjhmoezue1ZN2MvAtSqV25SkK6rktDwubYl-tTi-VKo_rH6j7-U-Rs2Q0aiPnuVKiJT5zOS2mOUWPHrJaLsWITRcvVzj4Sqp_WCrD4D&3u3520&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=104793`,
      place_id: "ChIJ1UCDJ1NgLxMRtrsCzOHxdvY",
      rating: 4.8,
      user_ratings_total: 382723
    });
    activities.push(act125);

    // Activity 126
    const act126 = new Activity({
      name: 'Vatican Museums',
      lat: 41.9061,
      lng: 12.4536,
      formatted_address: "00120, Vatican City",
      formatted_phone_number: "06 6988 4676",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhYYnxST4Zxb2GKBkVw5KJ8fNZPzynIbQcCT0JzATdkHh5LmWfiF72yg-HmsjwI4VbVh972er-g18Ncm6V0vtsVaKYh0xHIHpcyNYZzzGoVO1rqo6CoW-T2gRHWmT6JTW5RzS5vhbMA77g6kXsQ_gurKh6lEbxJ3-merd3Z1PLbLlz5&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=64385`,
      place_id: "ChIJKcGbg2NgLxMRthZkUqDs4M8",
      rating: 4.6,
      user_ratings_total: 157169
    });
    activities.push(act126);

    // Activity 127
    const act127 = new Activity({
      name: 'Sistine Chapel',
      lat: 41.9022,
      lng: 12.4548,
      formatted_address: "00120, Vatican City",
      formatted_phone_number: "06 6988 4676",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziV6Z1QM5pJvYijy6BIAvOSFkUpQc81bLCPGyJ9uWLYKoFsAL6Ubvty0WfCGy71bXnNTp06KTcW-XQ_MoUgqIH-rfZyaGh3LczODTJ5BiNG7E1goyAfubvoov5pA-ZpYKqwU5Ry7S4mT2a5VrhsDrctH89Tdo7Mp1my1hL-WYDJljIx&3u768&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=111199`,
      place_id: "ChIJ268jxWVgLxMRIj61f4fIFqs",
      rating: 4.7,
      user_ratings_total: 69016
    });
    activities.push(act127);

    // Activity 128
    const act128 = new Activity({
      name: 'St. Peter\'s Basilica',
      lat: 41.9022,
      lng: 12.4537,
      formatted_address: "Piazza San Pietro, 00120 Città del Vaticano, Vatican City",
      formatted_phone_number: "06 6982",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi9-X9AtvJuxLxKvbFHmJXNdcoIj2QuVoP3xBarCutXuX5-r2kNmhIAW3EJpZ45VO4w0Seaekp1TnKyu4V0NMUQl69C-yK1_yYOrJ4bjyW3IyiKREkYD2qzkpM7cwmNFnWR-1H3YjMoCj2surZdeACqNMpz3_9QD85edOCiLBVFwRSf&3u6240&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=7002`,
      place_id: "ChIJWZsUt2FgLxMRg1KHzXfwS3I",
      rating: 4.8,
      user_ratings_total: 137622,
    });
    activities.push(act128);

    // Activity 129
    const act129 = new Activity({
      name: 'Castel Sant\'Angelo',
      lat: 41.9031,
      lng: 12.4669,
      formatted_address: "Lungotevere Castello, 50, 00193 Roma RM, Italy",
      formatted_phone_number: "06 681 9111",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgQ7tC7IVo1jEJFxtnI35Pw6mPpFXNXdo2oSXqv1oS4ifGA2Wrf9jYkp_r18cVZQmBpjOUT22ITOHF_ObBv0yt2MMGcf84A6bqSXpQdeUfVe8M3FmXYitcnqBrGYvZ03TG_8HEqeOXyJvty6dsslRqfruXcL17AloO21a0v5HkXl7L9&3u1024&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=13646`,
      place_id: "ChIJ0aTnEYeKJRMRiUF95xwRbDY",
      rating: 4.7,
      user_ratings_total: 80072

    });
    activities.push(act129);

    // Activity 130
    const act130 = new Activity({
      name: 'Pantheon',
      lat: 41.8986,
      lng: 12.4768,
      formatted_address: "Piazza della Rotonda, 00186 Roma RM, Italy",
      formatted_phone_number: "06 6830 0230",
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zilp4k2vYqksCSKuM0kw6QCMFD8ZNgHPxYIy6PSLHc0oDP3m2ipmgQpi3ilvsIQHotLiqtyg44N76GSxgkNC0t3mQ91jg298EXtQ1JpDPcvfSJIUZ75nMRBvI9r0gVlxVnMxpX83O7axsfk8fU6D0o10IBAwZfdyZMxQBowXHkbGVsI&3u1050&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=68086`,
      place_id:  "ChIJqUCGZ09gLxMRLM42IPpl0co",
      rating: 4.8,
      user_ratings_total: 211963
    });
    activities.push(act130);

    // Activity 131
    const act131 = new Activity({
      name: 'Villa Borghese Gardens',
      lat: 41.9122,
      lng: 12.4889,
      formatted_address:  "00197 Rome, Metropolitan City of Rome Capital, Italy",
      formatted_phone_number: "06 0608",
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zi8lqjFWy_-ErYY9aRQ-kLQz4tu9ubHiFW18D9rKf0JR2WVDvyiL7NeMl6C_E8_guWQcnFvz4wpnPSSGrD-LkNDhSihm7reqSbc_vJefiUW-IuE75aojfKGsk1x9T2ddfpWCDZYzo6BVkN26AwTmUUWuyMDi6VV0NgSpQu7_emgMIee&3u12000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=103150`,
      place_id: "ChIJj1M8HQJhLxMRRI6D_z18Pes",
      rating: 4.6,
      user_ratings_total: 75950
    });
    activities.push(act131);

    // Activity 132
    const act132 = new Activity({
      name: 'Palatine Hill',
      lat: 41.8885,
      lng: 12.4883,
      formatted_address: "Palatine Hill, 00186 Rome, Metropolitan City of Rome Capital, Italy",
      formatted_phone_number: undefined,
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zgiOLP8D5L2zqxxFET_OmnPhQIExBfs4qvn3otald4Q4ksxzrdV8MRyct-X4syJqI7q4hIHV60aoACZp43mww_qWNGFl3NaVU-qYfchDv2rRLEBht8ID6R5NUnUVTKtJyYNWsfkmgSz1ra0LsbSWmdj-pW6pNc1dXPABfGFaYbbqunK&3u4000&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=18581`,
      place_id: "ChIJ8zdPo7VhLxMRwgAXwZzzm50",
      rating: 4.7,
      user_ratings_total:1805
    });
    activities.push(act132);

    // Activity 133
    const act133 = new Activity({
      name: 'Capitoline Hill',
      lat: 41.8931,
      lng: 12.4821,
      formatted_address: "Capitoline Hill, 00186 Rome, Metropolitan City of Rome Capital, Italy",
      formatted_phone_number: undefined,
      imageUrl:  `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83zhVlraR80aPB8_GLfML29YWezcOL0dnrTgqH8PNgKrszc29G7Iq565EFG5MGq5WXi06cg4YQgYwwKhtPdtJbCG8wspOh59aFuxs0KVe0FnJmLrGhef07extySuSVqaB14S79eG_Qs4tDf2FSkSCqCDsHgwe6qUT67PrFzAIWsQ-vctA&3u4032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=47715`,
      place_id: "ChIJuwpUX0tgLxMRCXiwBMdFxQ8",
      rating: 4.8,
      user_ratings_total: 143
    });
    activities.push(act133);

    // Activity 134
    const act134 = new Activity({
      name: 'Villa d\'Este',
      lat: 41.9633123,
      lng: 12.7958058,
      formatted_address: "P.za Trento, 5, 00019 Tivoli RM, Italy",
      formatted_phone_number: undefined,
      imageUrl: `https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sATJ83ziB6xvJpql-amxSghQf84gdTlCa1TRyQqVtvWatoHUqUdbfW3R0z3RAnf3o9lOdFJwu0dBI2MhXhMSsS5cOpUJ3qOM2Br6q96SXZoQARvzKGC4jDwnsdMDUvtCExLSvdTNfOCr7y50YX1lp8ZJEX-vDI0wgZlARwCHk4PJxRtGH92dK&3u12032&5m1&2e1&callback=none&key=${GOOGLE_MAPS_API_KEY}&token=74829`,
      place_id: "ChIJw-YlX3B4LxMRmeEzTuqQHr8",
      rating: 4.7,
      user_ratings_total: 27777
    });
    activities.push(act134);

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

    // Day 47
    const day47Activities = [act109.id, act110.id, act111.id];
    const d47 = new Day({
      activities: day47Activities
    });
    days.push(d47);

    // Day 48
    const day48Activities = [act112.id, act113.id];
    const d48 = new Day({
      activities: day48Activities
    });
    days.push(d48);

    // Day 49
    const day49Activities = [act114.id, act115.id, act116.id];
    const d49 = new Day({
      activities: day49Activities
    });
    days.push(d49);

    // Day 50
    const day50Activities = [act117.id, act118.id];
    const d50 = new Day({
      activities: day50Activities
    });
    days.push(d50);

    // Day 51
    const day51Activities = [act119.id, act120.id];
    const d51 = new Day({
      activities: day51Activities
    });
    days.push(d51);

    // Day 52
    const day52Activities = [act121.id, act122.id];
    const d52 = new Day({
      activities: day52Activities
    });
    days.push(d52);

    // Day 53
    const day53Activities = [act123.id, act124.id, act125.id];
    const d53 = new Day({
      activities: day53Activities
    });
    days.push(d53);

    // Day 54
    const day54Activities = [act126.id, act127.id];
    const d54 = new Day({
      activities: day54Activities
    });
    days.push(d54);

    // Day 55
    const day55Activities = [act128.id, act129.id, act130.id];
    const d55 = new Day({
      activities: day55Activities
    });
    days.push(d55);

    // Day 56
    const day56Activities = [act131.id, act132.id];
    const d56 = new Day({
      activities: day56Activities
    });
    days.push(d56);

    // Day 57
    const day57Activities = [act133.id, act134.id];
    const d57 = new Day({
      activities: day57Activities
    });
    days.push(d57);


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
      fakeViews: false,
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
      fakeViews: false,
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
      fakeViews: false,
      author: u1.id,
      days: itinerary3Days,
      startDate: new Date('2022-03-10'), 
      likes: [u1.id]
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
      fakeViews: false,
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
      fakeViews: false,
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
      fakeViews: false,
      author: u4.id,
      days: itineraryLondonDays,
      startDate: new Date('2022-06-20'), 
    });
    itineraries.push(itinerary6);

    // Itinerary 7: Exploring New York (4 days)
    const itineraryNewYorkDays = [d31.id, d32.id, d33.id, d34.id, d35.id];
    const itinerary7 = new Itinerary({
      title: '4 days in the Big Apple',
      locationName: 'New York City',
      locationType: 'City',
      countryCode: 'US',
      lng: -74.006,
      lat: 40.7128,
      length: 4,
      fakeLikes: 445,
      fakeViews: false,
      author: u1.id,
      days: itineraryNewYorkDays,
      startDate: new Date('2022-05-01'),
    });
    itineraries.push(itinerary7);

    // Itinerary 8: Exploring Berlin (2 days)
    const itineraryBerlinDays = [d36.id, d37.id];
    const itinerary8 = new Itinerary({
      title: 'Weekend in Berlin',
      locationName: 'Berlin',
      locationType: 'City',
      countryCode: 'DE',
      lng: 13.4050,
      lat: 52.5200,
      length: 2,
      fakeLikes: 0,
      fakeViews: false,
      author: u1.id,
      days: itineraryBerlinDays,
      startDate: new Date('2024-03-15'),
    });
    itineraries.push(itinerary8);

    // Itinerary 9: Best Trip Ever in Sicily (6 days)
    const itinerarySicilyDays = [d38.id, d39.id, d40.id, d41.id, d42.id, d43.id];
    const itinerary9 = new Itinerary({
      title: 'Best Trip Ever in Sicily',
      locationName: 'Italy',
      locationType: 'Country',
      countryCode: 'IT',
      lng: 14.0154,
      lat: 37.5994,
      length: 6,
      fakeLikes: 852,
      fakeViews: false,
      author: u1.id,
      days: itinerarySicilyDays,
      startDate: new Date('2022-10-01'),
    });
    itineraries.push(itinerary9);

    // Itinerary 10: Discovering Paris (3 days)
    const itineraryParisDays = [d44.id, d45.id, d46.id];
    const itinerary10 = new Itinerary({
      title: 'Quick scape to Paris',
      locationName: 'Paris',
      locationType: 'City',
      countryCode: 'FR',
      lng: 2.3522,
      lat: 48.8566,
      length: 3,
      fakeLikes: 723,
      fakeViews: false,
      author: u1.id,
      days: itineraryParisDays,
      startDate: new Date('2022-11-15'),
    });
    itineraries.push(itinerary10);

    // Itinerary 11: Exploring Italy (6 days)
    const itineraryItalyDays = [d47.id, d48.id, d49.id, d50.id, d51.id, d52.id];
    const itinerary11 = new Itinerary({
      title: 'Road trip around Tuscany',
      locationName: 'Italy',
      locationType: 'Country',
      countryCode: 'IT',
      lng: 12.4964,
      lat: 41.9028,
      length: 6,
      fakeLikes: 971,
      fakeViews: false,
      author: u2.id,
      days: itineraryItalyDays,
      startDate: new Date('2022-12-01'),
    });
    itineraries.push(itinerary11);

    // Itinerary 12: Exploring Lazio, Italy (5 days)
    const itineraryLazioDays = [d53.id, d54.id, d55.id, d56.id, d57.id];
    const itinerary12 = new Itinerary({
      title: 'Rome, the eternal city',
      locationName: 'Italy',
      locationType: 'Country',
      countryCode: 'IT',
      lng: 12.4964,
      lat: 41.9028,
      length: 5,
      fakeLikes: 810,
      fakeViews: false,
      author: u1.id,
      days: itineraryLazioDays,
      startDate: new Date('2023-01-10'),
    });
    itineraries.push(itinerary12);


    const createdItineraries = await Itinerary.insertMany(itineraries);





    console.log("Done!");
  } catch (err) {
    console.error(err.stack);
  }
};
