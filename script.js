const DIET_MYTHS = [
  {
    statement: "Detox teas cleanse your liver and kidneys of toxins.",
    verdict: "Myth",
    risk: "red",
    category: "Detox",
    keywords: ["detox tea", "detox", "cleanse", "liver", "kidney", "tea"],
    explanation: "Your liver and kidneys already filter toxins effectively. Many detox teas contain laxatives like senna, which can cause dehydration, electrolyte imbalance, and dependence on laxatives to have a bowel movement."
  },
  {
    statement: "Multi-day water fasting safely 'resets' your metabolism for anyone.",
    verdict: "Myth",
    risk: "red",
    category: "Fasting",
    keywords: ["water fast", "fasting", "multi-day fast", "reset metabolism", "starve"],
    explanation: "Extended fasting without medical supervision can cause dizziness, muscle loss, gallstones, and dangerous refeeding syndrome in some people. It is not a safe general 'reset' — short intermittent fasting windows are a different, lower-risk practice."
  },
  {
    statement: "Laxatives are an effective way to lose weight fast.",
    verdict: "Myth",
    risk: "red",
    category: "Weight Loss",
    keywords: ["laxative", "laxatives", "purge", "fast weight loss"],
    explanation: "Laxatives cause water loss, not fat loss, and the weight returns once you rehydrate. Regular misuse can cause severe dehydration, electrolyte imbalances, and long-term bowel dependency."
  },
  {
    statement: "Diet pills and fat burner supplements are a safe, effective way to lose weight fast.",
    verdict: "Myth",
    risk: "red",
    category: "Supplements",
    keywords: ["diet pills", "fat burner", "fat burners", "supplement", "weight loss pill"],
    explanation: "Many over-the-counter fat burners are poorly regulated and have been linked to increased heart rate, high blood pressure, liver injury, and even hospitalizations. Sustainable fat loss doesn't come from a pill."
  },
  {
    statement: "The alkaline diet can prevent or cure cancer by changing your body's pH.",
    verdict: "Myth",
    risk: "red",
    category: "Disease Claims",
    keywords: ["alkaline diet", "ph diet", "cancer diet", "alkaline water"],
    explanation: "Your blood pH is tightly regulated by your lungs and kidneys regardless of what you eat — food cannot meaningfully change it. Believing this can lead people to delay or refuse real medical treatment, which is dangerous."
  },
  {
    statement: "You can 'starve' cancer cells by cutting all sugar from your diet.",
    verdict: "Myth",
    risk: "red",
    category: "Disease Claims",
    keywords: ["starve cancer", "sugar cancer", "cut sugar cancer", "cancer diet"],
    explanation: "All cells, including healthy ones, need glucose to function — you cannot selectively starve cancer cells this way. This myth can cause severe malnutrition and lead people away from evidence-based cancer treatment."
  },
  {
    statement: "Supplements can fully replace a balanced diet of real food.",
    verdict: "Myth",
    risk: "red",
    category: "Supplements",
    keywords: ["supplements replace food", "meal replacement", "vitamins instead of food", "supplement diet"],
    explanation: "Whole foods provide fiber, phytonutrients, and nutrient combinations that pills can't replicate. Relying on supplements alone can cause serious deficiencies, and megadosing certain vitamins (like A, D, or iron) can be toxic."
  },
  {
    statement: "Eating raw meat and raw eggs is healthier because cooking destroys nutrients.",
    verdict: "Myth",
    risk: "red",
    category: "Food Safety",
    keywords: ["raw meat", "raw eggs", "raw food diet", "uncooked meat"],
    explanation: "Cooking does reduce some nutrients slightly but also kills harmful bacteria like Salmonella, E. coli, and Listeria. Raw meat and eggs carry a real risk of serious foodborne illness."
  },
  {
    statement: "Eating cotton balls is a safe way to feel full and cut calories.",
    verdict: "Myth",
    risk: "red",
    category: "Weight Loss",
    keywords: ["cotton ball diet", "cotton balls", "appetite trick"],
    explanation: "Cotton balls are not digestible and are often coated in chemicals like bleach. Eating them can cause choking, intestinal blockages, and toxic exposure — this is a genuinely dangerous trend, not a diet method."
  },
  {
    statement: "Juice cleanses flush toxins out of your organs.",
    verdict: "Myth",
    risk: "yellow",
    category: "Detox",
    keywords: ["juice cleanse", "juicing", "cleanse", "detox juice"],
    explanation: "There's no evidence juicing removes 'toxins' — your liver and kidneys do that job. Short juice cleanses are usually not acutely dangerous for healthy adults, but they're low in protein and fiber and can cause blood sugar swings, especially risky for people with diabetes."
  },
  {
    statement: "Apple cider vinegar melts belly fat.",
    verdict: "Myth",
    risk: "yellow",
    category: "Weight Loss",
    keywords: ["apple cider vinegar", "acv", "vinegar diet", "belly fat"],
    explanation: "Evidence for meaningful fat loss from ACV is very weak. Drinking it undiluted can also erode tooth enamel and irritate your throat and esophagus, so any use should be diluted."
  },
  {
    statement: "Carbs are the enemy and should be eliminated completely from your diet.",
    verdict: "Myth",
    risk: "yellow",
    category: "Macros",
    keywords: ["carbs bad", "no carb", "zero carb", "cut carbs", "low carb"],
    explanation: "Carbohydrates are your body's preferred energy source and whole-food carbs (vegetables, fruit, whole grains) provide fiber and nutrients. Fully eliminating them long-term can cause fatigue, nutrient gaps, and difficulty sustaining the diet."
  },
  {
    statement: "The cabbage soup diet is a safe way to lose weight long-term.",
    verdict: "Myth",
    risk: "yellow",
    category: "Fad Diets",
    keywords: ["cabbage soup diet", "cabbage soup", "crash diet"],
    explanation: "This very low-calorie, nutritionally unbalanced plan may produce quick water-weight loss but isn't sustainable or nutritionally adequate, and can leave you low on protein and key nutrients if followed for more than a few days."
  },
  {
    statement: "Gluten-free diets are healthier for everyone, not just people with celiac disease.",
    verdict: "Myth",
    risk: "yellow",
    category: "Fad Diets",
    keywords: ["gluten free", "gluten", "celiac"],
    explanation: "For people without celiac disease or gluten sensitivity, cutting gluten offers no proven health benefit and can mean missing out on whole-grain fiber and nutrients, since many gluten-free packaged foods are lower in fiber."
  },
  {
    statement: "The grapefruit diet burns fat by itself through special enzymes.",
    verdict: "Myth",
    risk: "yellow",
    category: "Fad Diets",
    keywords: ["grapefruit diet", "grapefruit", "fat burning enzyme"],
    explanation: "No food burns fat through 'special enzymes.' Grapefruit is healthy, but this diet's results mostly come from its very low overall calories, which isn't sustainable and can be low in protein and variety."
  },
  {
    statement: "Coconut oil is a miracle food that dramatically boosts metabolism.",
    verdict: "Myth",
    risk: "yellow",
    category: "Superfoods",
    keywords: ["coconut oil", "superfood", "boost metabolism"],
    explanation: "Coconut oil has a small, temporary effect on metabolism, but it's still very high in saturated fat. Using it as a 'miracle' health food in large amounts can raise LDL cholesterol for many people."
  },
  {
    statement: "Sugar directly causes diabetes.",
    verdict: "Partly True",
    risk: "yellow",
    category: "Macros",
    keywords: ["sugar diabetes", "sugar causes diabetes", "sugar"],
    explanation: "Type 2 diabetes risk is driven mainly by excess calorie intake, body weight, and genetics — sugar itself doesn't directly cause it, though diets high in added sugar can contribute to weight gain, which is a risk factor. Oversimplifying this can cause unnecessary fear or, conversely, complacency about total diet quality."
  },
  {
    statement: "Drinking only lemon water in the morning detoxes your liver.",
    verdict: "Myth",
    risk: "yellow",
    category: "Detox",
    keywords: ["lemon water", "lemon detox", "morning detox"],
    explanation: "Lemon water can be a pleasant hydrating habit, but it has no special detox effect — your liver handles that on its own. Relying on it as a 'cleanse' can create a false sense of health progress."
  },
  {
    statement: "Eating late at night directly causes weight gain.",
    verdict: "Myth",
    risk: "yellow",
    category: "Weight Loss",
    keywords: ["eating late", "late night eating", "eat after 8pm"],
    explanation: "Weight gain comes from total daily calories versus what you burn, not the clock. That said, late-night eating is often mindless snacking on high-calorie foods, so the myth can lead to both unnecessary guilt or, if ignored, real overeating."
  },
  {
    statement: "Eating fat makes you fat.",
    verdict: "Myth",
    risk: "green",
    category: "Macros",
    keywords: ["fat makes you fat", "dietary fat", "eating fat"],
    explanation: "Dietary fat is essential for hormone production and nutrient absorption. Weight gain comes from consuming more total calories than you burn, not from fat specifically. Believing this myth mostly just leads to unnecessary food guilt, not physical harm."
  },
  {
    statement: "You need to eat 6 small meals a day to boost your metabolism.",
    verdict: "Myth",
    risk: "green",
    category: "Meal Timing",
    keywords: ["6 small meals", "meal frequency", "boost metabolism meals"],
    explanation: "Meal frequency has little effect on total metabolism — what matters most is total daily intake. Eating this way isn't harmful, just unnecessary for most people."
  },
  {
    statement: "Brown eggs are more nutritious than white eggs.",
    verdict: "Myth",
    risk: "green",
    category: "Superfoods",
    keywords: ["brown eggs", "white eggs", "egg color"],
    explanation: "Shell color is determined by the breed of hen and has no effect on nutrition. This is a harmless misconception with no real-world downside beyond possibly paying more."
  },
  {
    statement: "Celery has 'negative calories' because digesting it burns more energy than it contains.",
    verdict: "Myth",
    risk: "green",
    category: "Weight Loss",
    keywords: ["negative calorie", "celery", "negative calorie food"],
    explanation: "No food has truly negative calories — digestion burns only a small fraction of a food's energy. Celery is low-calorie and healthy, just not magic, and this myth is harmless."
  },
  {
    statement: "You must drink exactly 8 glasses of water a day.",
    verdict: "Myth",
    risk: "green",
    category: "Hydration",
    keywords: ["8 glasses water", "water intake", "how much water"],
    explanation: "Hydration needs vary by body size, activity, and climate — there's no single magic number. Aiming for 8 glasses isn't harmful, it's just not a strict medical requirement."
  },
  {
    statement: "Organic food has zero calories.",
    verdict: "Myth",
    risk: "green",
    category: "Superfoods",
    keywords: ["organic food", "organic calories"],
    explanation: "Organic simply refers to how food is grown, not its calorie content — organic sugar still has calories. This is an obviously harmless misunderstanding."
  },
  {
    statement: "Skipping breakfast will automatically make you gain weight.",
    verdict: "Myth",
    risk: "green",
    category: "Meal Timing",
    keywords: ["skip breakfast", "breakfast weight gain", "most important meal"],
    explanation: "Whether breakfast helps or hurts weight management depends on your overall eating pattern, not a fixed rule. Skipping it occasionally is not harmful for most healthy adults."
  },
  {
    statement: "Intermittent fasting (like a 16:8 eating window) is dangerous for everyone.",
    verdict: "Myth",
    risk: "green",
    category: "Fasting",
    keywords: ["intermittent fasting", "16:8", "eating window"],
    explanation: "For most healthy adults, time-restricted eating within a normal daily window is a well-studied, generally low-risk approach — it's not the same as extreme multi-day fasting. It isn't right for everyone (e.g. some people with diabetes or a history of disordered eating), but it isn't inherently dangerous."
  },
  {
    statement: "The Master Cleanse (lemon juice, cayenne pepper, and maple syrup only, for days) is a safe way to detox.",
    verdict: "Myth",
    risk: "red",
    category: "Detox",
    keywords: ["master cleanse", "lemon detox", "lemonade diet", "maple syrup diet", "cayenne pepper diet", "lemon"],
    explanation: "Living on a liquid-only mix of lemon juice, cayenne, and maple syrup for several days provides almost no protein or essential nutrients. It can cause muscle loss, dizziness, and dangerously low blood sugar — any 'detox' effect is just water weight."
  },
  {
    statement: "Drinking lemon water first thing in the morning burns belly fat.",
    verdict: "Myth",
    risk: "yellow",
    category: "Weight Loss",
    keywords: ["lemon water", "lemon", "belly fat", "morning lemon water", "flat belly", "burn fat"],
    explanation: "Lemon water has no special fat-burning property. Any weight change from swapping it for sugary drinks comes from fewer overall calories, not the lemon itself — believing otherwise sets up false expectations."
  },
  {
    statement: "Lemons and lemon water 'alkalize' your body and prevent disease.",
    verdict: "Myth",
    risk: "yellow",
    category: "Detox",
    keywords: ["lemon", "alkaline", "alkalize", "ph balance", "lemon water"],
    explanation: "Your blood pH is tightly controlled by your lungs and kidneys and food cannot meaningfully shift it, even acidic foods like lemon. Chasing 'alkalinity' through diet is based on a misunderstanding of body chemistry."
  },
  {
    statement: "Lemon peel or lemon rind can cure or shrink cancer.",
    verdict: "Myth",
    risk: "red",
    category: "Disease Claims",
    keywords: ["lemon", "lemon peel", "lemon rind", "cancer cure", "lemon cancer"],
    explanation: "There is no credible evidence lemon peel treats cancer. This viral claim can lead people to delay or refuse evidence-based medical treatment, which can be life-threatening."
  },
  {
    statement: "Adding lemon to your water makes it more hydrating than plain water.",
    verdict: "Myth",
    risk: "green",
    category: "Hydration",
    keywords: ["lemon water", "lemon", "hydration", "hydrating"],
    explanation: "Plain water hydrates just as well — lemon only adds flavor and a small amount of vitamin C. This is a harmless habit, just not a hydration upgrade."
  },
  {
    statement: "Rinsing with straight lemon juice safely whitens your teeth.",
    verdict: "Myth",
    risk: "yellow",
    category: "Wellness Trends",
    keywords: ["lemon", "teeth whitening", "lemon teeth", "natural whitening"],
    explanation: "Lemon juice is highly acidic and repeated use can erode tooth enamel, potentially making teeth more sensitive and prone to decay over time — it doesn't safely whiten them."
  },
  {
    statement: "'Oatzempic' (blended oats and lime juice) suppresses appetite like Ozempic.",
    verdict: "Myth",
    risk: "yellow",
    category: "Weight Loss",
    keywords: ["oatzempic", "oats lime", "ozempic natural", "tiktok diet", "oat drink"],
    explanation: "This viral drink is just oats blended with lime juice and water — any fullness comes from the fiber and liquid volume, not a drug-like effect. It is not comparable to GLP-1 medications and shouldn't replace balanced meals."
  },
  {
    statement: "Berberine is a 'natural Ozempic' and a safe substitute for prescribed GLP-1 medication.",
    verdict: "Myth",
    risk: "red",
    category: "Supplements",
    keywords: ["berberine", "natural ozempic", "glp-1", "nature's ozempic"],
    explanation: "Berberine can lower blood sugar and interacts with diabetes medications, sometimes causing dangerously low blood sugar. It is not equivalent to prescription GLP-1 drugs, and switching without medical guidance can be harmful."
  },
  {
    statement: "Sea moss is a cure-all superfood that fixes your thyroid, immunity, and skin.",
    verdict: "Myth",
    risk: "red",
    category: "Superfoods",
    keywords: ["sea moss", "seamoss", "cure all", "superfood"],
    explanation: "Sea moss is very high in iodine, and regularly overconsuming it can actually trigger thyroid problems (both under- and overactive thyroid). It is not a scientifically proven cure-all."
  },
  {
    statement: "The 'snake juice' fasting drink (just water, salt, and potassium) makes extended multi-day fasting safe for anyone.",
    verdict: "Myth",
    risk: "red",
    category: "Fasting",
    keywords: ["snake juice", "fasting drink", "dry fasting", "extended fast"],
    explanation: "Homemade electrolyte mixes without medical guidance can easily be dosed wrong, and combined with days of no food this raises real risk of dangerous heart rhythm problems from electrolyte imbalance."
  },
  {
    statement: "A 'cortisol cocktail' (juice, coconut water, and salt) lowers your cortisol and burns belly fat.",
    verdict: "Myth",
    risk: "yellow",
    category: "Wellness Trends",
    keywords: ["cortisol cocktail", "cortisol", "adrenal cocktail", "belly fat drink"],
    explanation: "There's no evidence this drink meaningfully changes your cortisol levels or targets belly fat specifically. It's essentially a sugary electrolyte drink marketed with pseudoscientific hormone claims."
  },
  {
    statement: "Celery juice every morning on an empty stomach cures chronic illness.",
    verdict: "Myth",
    risk: "yellow",
    category: "Wellness Trends",
    keywords: ["celery juice", "celery", "juice cleanse", "morning celery"],
    explanation: "There is no clinical evidence celery juice cures or reverses chronic diseases. It provides hydration and nutrients like any vegetable juice, but relying on it over real medical care can delay treatment."
  },
  {
    statement: "Chia seed 'internal shower' water instantly flushes your gut and cures constipation.",
    verdict: "Myth",
    risk: "yellow",
    category: "Wellness Trends",
    keywords: ["chia seed water", "internal shower", "chia seeds", "gut flush"],
    explanation: "Soaked chia seeds add fiber and can support regularity, but they don't 'flush' your gut instantly — and dry chia seeds swallowed without enough liquid can swell and pose a choking or blockage risk, so always soak them first."
  },
  {
    statement: "Bone broth heals a 'leaky gut' and repairs your joints.",
    verdict: "Myth",
    risk: "yellow",
    category: "Wellness Trends",
    keywords: ["bone broth", "leaky gut", "joint health", "collagen broth"],
    explanation: "Bone broth can be a nutritious, protein-containing food, but there's no strong clinical evidence it treats 'leaky gut' (not a formally recognized diagnosis) or meaningfully repairs joints on its own."
  },
  {
    statement: "Dry scooping pre-workout powder straight, without water, gives you a safe energy boost.",
    verdict: "Myth",
    risk: "red",
    category: "Supplements",
    keywords: ["dry scoop", "dry scooping", "pre workout", "preworkout powder"],
    explanation: "Swallowing concentrated caffeine and stimulant powder without water has been linked to choking, heart palpitations, and in rare cases heart attacks, because you absorb a very high dose very fast."
  },
  {
    statement: "An all-egg 'egg fast' diet is a safe way to rapidly boost ketosis long-term.",
    verdict: "Myth",
    risk: "yellow",
    category: "Fad Diets",
    keywords: ["egg fast", "egg diet", "keto egg fast", "all egg diet"],
    explanation: "Eating almost nothing but eggs and cheese for days can produce fast water-weight loss but lacks fiber, variety, and key nutrients, and isn't meant to be sustained beyond a few days."
  },
  {
    statement: "Apple cider vinegar gummies work exactly like liquid ACV and are a safe daily weight-loss aid.",
    verdict: "Myth",
    risk: "yellow",
    category: "Supplements",
    keywords: ["acv gummies", "apple cider vinegar gummies", "gummy vitamins"],
    explanation: "Many ACV gummies contain little of the actual acetic acid thought to be the active component, plus added sugar. Evidence that ACV meaningfully aids weight loss is weak in any form."
  },
  {
    statement: "Cucumber water gives you a 'flat belly' by flushing out bloat.",
    verdict: "Myth",
    risk: "green",
    category: "Hydration",
    keywords: ["cucumber water", "flat belly", "detox water", "bloat"],
    explanation: "Cucumber water is just flavored water — it can help you stay hydrated, which may ease temporary water-retention bloating, but it doesn't uniquely 'flush' fat or give a flat belly. Harmless, just not magic."
  },
  {
    statement: "The carnivore diet (only meat, eggs, and animal products) is the healthiest way to eat for everyone.",
    verdict: "Myth",
    risk: "yellow",
    category: "Fad Diets",
    keywords: ["carnivore diet", "carnivore", "meat only diet", "zero carb diet"],
    explanation: "Cutting out all plant foods removes fiber, vitamin C, and other nutrients linked to long-term health, and long-term safety data is very limited. Some people report short-term benefits, but 'healthiest for everyone' isn't supported by evidence."
  },
  {
    statement: "GOMAD (gallon of milk a day) is a safe way to bulk up fast.",
    verdict: "Myth",
    risk: "yellow",
    category: "Fad Diets",
    keywords: ["gomad", "gallon of milk", "milk diet", "bulking"],
    explanation: "A gallon of whole milk a day is roughly 2,400 extra calories and very high in saturated fat, and commonly causes nausea, bloating, and diarrhea, especially in anyone with lactose sensitivity. It's not a controlled or necessary way to gain weight."
  },
  {
    statement: "The viral 'ice hack' (or ice hack diet pills) melts fat by lowering your inner body temperature.",
    verdict: "Myth",
    risk: "red",
    category: "Supplements",
    keywords: ["ice hack", "ice hack diet", "alpine ice hack", "inner body temperature"],
    explanation: "This claim was the marketing hook behind a viral weight-loss supplement scam with no credible science behind the 'body temperature' theory. Beyond wasted money, unregulated diet pills sold this way carry real safety risks."
  },
  {
    statement: "Microdosing compounded semaglutide (Ozempic) without a prescription or doctor is a safe way to lose weight.",
    verdict: "Myth",
    risk: "red",
    category: "Supplements",
    keywords: ["ozempic microdosing", "semaglutide", "compounded ozempic", "ozempic without prescription"],
    explanation: "Unregulated, unsupervised semaglutide dosing has been linked to dosing errors, severe nausea and dehydration, pancreatitis, and other serious complications. GLP-1 medications need medical supervision, not social media dosing advice."
  },
  {
    statement: "Drinking pickle juice boosts your metabolism and speeds up weight loss.",
    verdict: "Myth",
    risk: "green",
    category: "Wellness Trends",
    keywords: ["pickle juice", "muscle cramps", "electrolyte drink"],
    explanation: "Pickle juice may help relieve exercise-induced muscle cramps, but it has no meaningful effect on metabolism or fat loss. It's also very high in sodium, so it's not something to drink freely as a weight-loss trick."
  },
  {
    statement: "Himalayan pink salt has special detoxifying minerals that regular table salt doesn't.",
    verdict: "Myth",
    risk: "yellow",
    category: "Superfoods",
    keywords: ["himalayan pink salt", "pink salt", "sea salt", "detox salt"],
    explanation: "The trace minerals in pink salt are present in amounts too small to matter nutritionally, and it isn't lower in sodium than table salt. Marketing it as 'healthier' can lead people to use more of it than they realize."
  },
  {
    statement: "Cold plunges and ice baths dramatically boost your metabolism and melt fat.",
    verdict: "Myth",
    risk: "yellow",
    category: "Wellness Trends",
    keywords: ["cold plunge", "ice bath", "cold exposure", "cold therapy"],
    explanation: "Cold exposure does trigger a small amount of extra calorie burn as your body warms itself back up, but the effect is minor, not a real weight-loss method. Cold plunges also carry their own risks like cold shock if done unsafely."
  },
  {
    statement: "Chugging a gallon of water first thing in the morning 'kickstarts' your metabolism.",
    verdict: "Myth",
    risk: "green",
    category: "Hydration",
    keywords: ["gallon of water", "morning water", "kickstart metabolism", "water challenge"],
    explanation: "Water has only a tiny, temporary effect on metabolic rate. Staying hydrated is healthy, but chugging huge amounts at once mostly just means frequent bathroom trips, not meaningfully faster metabolism."
  },
  {
    statement: "Eating spicy food with chili peppers burns significant amounts of fat.",
    verdict: "Myth",
    risk: "green",
    category: "Weight Loss",
    keywords: ["spicy food", "chili peppers", "capsaicin", "spicy diet"],
    explanation: "Capsaicin in chili peppers has a small, measurable thermogenic effect, but it's nowhere near enough to meaningfully burn fat on its own. Enjoy spicy food for flavor, not as a fat-loss strategy."
  },
  {
    statement: "You have to eat protein within 30 minutes after a workout or you lose all your gains.",
    verdict: "Myth",
    risk: "green",
    category: "Macros",
    keywords: ["anabolic window", "protein timing", "post workout window", "30 minute window"],
    explanation: "The 'anabolic window' is much wider than 30 minutes — total daily protein intake matters far more than precise timing for most people. Missing that window isn't harmful, just a source of unnecessary stress."
  },
  {
    statement: "You can't lose weight unless you count every single calorie you eat.",
    verdict: "Myth",
    risk: "green",
    category: "Weight Loss",
    keywords: ["calorie counting", "count calories", "track calories"],
    explanation: "Calorie tracking can help some people, but consistent portion awareness, whole foods, and sustainable habits can also work without obsessive tracking. This myth mostly just adds unnecessary pressure."
  },
  {
    statement: "Fasted cardio (working out before eating) burns significantly more fat than eating first.",
    verdict: "Myth",
    risk: "green",
    category: "Weight Loss",
    keywords: ["fasted cardio", "fasted workout", "empty stomach cardio"],
    explanation: "Studies show total fat loss over time is driven mainly by overall calorie balance, not whether you ate right before cardio. Any difference in fuel source during the workout doesn't translate into meaningfully more fat lost."
  },
  {
    statement: "Replacing meals with just coffee all day is a healthy, effective way to diet.",
    verdict: "Myth",
    risk: "red",
    category: "Weight Loss",
    keywords: ["coffee diet", "coffee only", "appetite suppressant coffee", "skip meals coffee"],
    explanation: "Relying on caffeine to suppress hunger instead of eating can cause blood sugar crashes, heart palpitations, anxiety, and nutrient deficiencies, and it can reinforce disordered eating patterns over time."
  },
  {
    statement: "Extreme 'clean eating' that cuts out entire food groups is always the healthiest approach.",
    verdict: "Myth",
    risk: "red",
    category: "Fad Diets",
    keywords: ["clean eating", "extreme clean eating", "orthorexia", "cutting food groups"],
    explanation: "Rigid all-or-nothing 'clean eating' can spiral into orthorexia, an unhealthy obsession with food purity that causes real nutrient deficiencies, social isolation, and anxiety around eating — it isn't simply the healthy option."
  },
  {
    statement: "Activated charcoal drinks and lattes detox your body and improve digestion.",
    verdict: "Myth",
    risk: "red",
    category: "Detox",
    keywords: ["activated charcoal", "charcoal detox", "charcoal latte", "charcoal lemonade"],
    explanation: "Activated charcoal can bind to and block absorption of medications and nutrients, including birth control. Using it as a casual 'detox' drink isn't supported by evidence and can interfere with medicines you actually need."
  },
  {
    statement: "Bulletproof coffee (coffee blended with butter) is a nutritionally complete breakfast replacement.",
    verdict: "Myth",
    risk: "yellow",
    category: "Fad Diets",
    keywords: ["bulletproof coffee", "butter coffee", "keto coffee"],
    explanation: "Butter coffee is high in saturated fat and calories but has essentially no protein, fiber, or micronutrients — it isn't a complete meal. Using it as a regular breakfast substitute can leave real nutritional gaps."
  },
  {
    statement: "The 5:2 diet (eating normally 5 days, very low calorie 2 days) is dangerous for everyone.",
    verdict: "Myth",
    risk: "green",
    category: "Fasting",
    keywords: ["5:2 diet", "5 2 diet", "intermittent fasting", "two day fast"],
    explanation: "For most healthy adults, the 5:2 pattern is a well-studied, generally low-risk form of intermittent fasting, distinct from extreme multi-day fasting. It isn't right for everyone, but it isn't inherently dangerous either."
  },
  {
    statement: "Fruit is bad for weight loss because of its sugar content, so it should be avoided while dieting.",
    verdict: "Myth",
    risk: "yellow",
    category: "Macros",
    keywords: ["fruit sugar", "avoid fruit", "fruit diet", "fruit weight loss"],
    explanation: "Whole fruit comes packaged with fiber, water, and micronutrients that slow sugar absorption and support fullness. Cutting it out of a diet removes a genuinely healthy food group for little real benefit."
  },
  {
    statement: "Detox foot patches pull toxins out of your body overnight while you sleep.",
    verdict: "Myth",
    risk: "yellow",
    category: "Detox",
    keywords: ["detox foot patches", "foot pads", "toxin patches", "overnight detox"],
    explanation: "There's no evidence these patches remove toxins — the dark residue often seen the next morning is just from moisture and heat reacting with the patch ingredients, not extracted toxins. Mainly a financial and false-reassurance issue."
  },
  {
    statement: "Wearing a waist trainer regularly while eating helps you lose belly fat permanently.",
    verdict: "Myth",
    risk: "red",
    category: "Weight Loss",
    keywords: ["waist trainer", "waist training", "corset diet", "belly fat trainer"],
    explanation: "Waist trainers only compress your midsection temporarily and don't reduce fat. Prolonged, tight use has been linked to restricted breathing, acid reflux, and even rib or organ compression with habitual heavy use."
  },
  {
    statement: "Sweating a lot during a workout means you're burning more fat.",
    verdict: "Myth",
    risk: "green",
    category: "Weight Loss",
    keywords: ["sweating", "sweat fat loss", "sweat more burn fat"],
    explanation: "Sweat is your body cooling itself, not a sign of fat loss — how much you sweat depends mostly on temperature, humidity, and individual physiology. It's a harmless misconception, just not a useful fat-loss indicator."
  },
  {
    statement: "Replacing all your meals with meal-replacement shakes is a safe way to lose weight fast.",
    verdict: "Myth",
    risk: "yellow",
    category: "Weight Loss",
    keywords: ["meal replacement shake", "shake diet", "liquid diet", "meal replacement"],
    explanation: "Short-term, medically supervised meal-replacement plans exist, but doing this on your own long-term can mean missing fiber and nutrient variety, and it isn't a sustainable habit for most people without guidance."
  },
  {
    statement: "A high-protein diet always damages your kidneys, even in healthy people.",
    verdict: "Partly True",
    risk: "yellow",
    category: "Macros",
    keywords: ["high protein diet", "protein kidney damage", "too much protein"],
    explanation: "In people with healthy kidneys, research hasn't shown high protein intake causes kidney damage. The real risk is for people who already have kidney disease, where high protein can worsen things — the blanket claim oversimplifies who is actually at risk."
  },
  {
    statement: "'Girl dinner' (a plate of small snacks instead of a real meal) is a nutritionally balanced way to eat every day.",
    verdict: "Myth",
    risk: "yellow",
    category: "Wellness Trends",
    keywords: ["girl dinner", "snack plate dinner", "no cook dinner"],
    explanation: "As an occasional fun, low-effort meal it's harmless, but treating a plate of assorted snacks as a regular dinner pattern can mean consistently missing protein, vegetables, and other nutrients your body needs daily."
  },
  {
    statement: "With 'If It Fits Your Macros' (IIFYM), food quality doesn't matter at all as long as the macros match.",
    verdict: "Myth",
    risk: "yellow",
    category: "Macros",
    keywords: ["iifym", "if it fits your macros", "flexible dieting", "macro counting"],
    explanation: "Hitting protein/carb/fat targets is useful, but two foods with identical macros aren't nutritionally equal — fiber, vitamins, minerals, and food quality still affect long-term health beyond the macro numbers."
  },
  {
    statement: "Skipping meals during the day to 'save up' calories for a big dinner or night of drinking is a safe habit.",
    verdict: "Myth",
    risk: "red",
    category: "Weight Loss",
    keywords: ["saving calories", "skip meals drinking", "drunkorexia", "save calories for alcohol"],
    explanation: "This pattern, sometimes called 'drunkorexia,' combines low blood sugar with alcohol on an empty stomach, increasing risk of alcohol poisoning, poor decision-making, and reinforcing disordered eating habits."
  },
  {
    statement: "Vaping or smoking to suppress your appetite is an effective way to manage your weight.",
    verdict: "Myth",
    risk: "red",
    category: "Weight Loss",
    keywords: ["vaping weight loss", "smoking appetite suppressant", "nicotine diet"],
    explanation: "Nicotine can blunt appetite, but vaping and smoking carry serious, well-documented health risks — lung damage, addiction, and cardiovascular harm — that far outweigh any effect on weight."
  }
];

const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");
const filterRow = document.getElementById("filter-row");
const resultsGrid = document.getElementById("results-grid");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");
const chipContainer = document.getElementById("suggestion-chips");

const SUGGESTIONS = ["lemon", "carnivore", "ice hack", "ozempic", "cold plunge", "girl dinner", "waist trainer", "cortisol"];

let currentFilter = "all";

function renderChips() {
  SUGGESTIONS.forEach((term) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.type = "button";
    chip.textContent = term;
    chip.addEventListener("click", () => {
      searchInput.value = term;
      render();
      searchInput.focus();
    });
    chipContainer.appendChild(chip);
  });
}

function matchesSearch(myth, query) {
  if (!query) return true;
  const haystack = [myth.statement, myth.category, myth.verdict, ...myth.keywords]
    .join(" ")
    .toLowerCase();
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  // Every word the user typed must appear somewhere in the myth's text,
  // so word order or an exact phrase match is never required.
  return tokens.every((token) => haystack.includes(token));
}

function riskLabel(risk) {
  if (risk === "red") return "Dangerous";
  if (risk === "yellow") return "Caution";
  return "Low Risk";
}

function riskEmoji(risk) {
  if (risk === "red") return "🔴";
  if (risk === "yellow") return "🟡";
  return "🟢";
}

function riskRank(risk) {
  return risk === "red" ? 0 : risk === "yellow" ? 1 : 2;
}

function createCard(myth) {
  const card = document.createElement("article");
  card.className = "myth-card";
  card.style.setProperty(
    "--card-color",
    myth.risk === "red" ? "var(--red)" : myth.risk === "yellow" ? "var(--yellow)" : "var(--green)"
  );

  const top = document.createElement("div");
  top.className = "card-top";

  const category = document.createElement("span");
  category.className = "category-tag";
  category.textContent = myth.category;

  const badge = document.createElement("span");
  badge.className = `risk-badge ${myth.risk}`;
  badge.textContent = `${riskEmoji(myth.risk)} ${riskLabel(myth.risk)}`;

  top.appendChild(category);
  top.appendChild(badge);

  const statement = document.createElement("p");
  statement.className = "myth-statement";
  statement.textContent = myth.statement;

  const verdict = document.createElement("p");
  verdict.className = "verdict-line";
  verdict.textContent = `Verdict: ${myth.verdict}`;

  const explanation = document.createElement("p");
  explanation.className = "myth-explanation";
  explanation.textContent = myth.explanation;

  card.appendChild(top);
  card.appendChild(statement);
  card.appendChild(verdict);
  card.appendChild(explanation);

  return card;
}

function render() {
  const query = searchInput.value.trim();
  clearBtn.hidden = query.length === 0;

  let filtered = DIET_MYTHS.filter((myth) => matchesSearch(myth, query));
  if (currentFilter !== "all") {
    filtered = filtered.filter((myth) => myth.risk === currentFilter);
  }
  filtered = [...filtered].sort((a, b) => riskRank(a.risk) - riskRank(b.risk));

  resultsGrid.innerHTML = "";

  if (filtered.length === 0) {
    resultCount.textContent = "";
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;
  resultCount.textContent = `${filtered.length} myth${filtered.length === 1 ? "" : "s"} found`;

  const fragment = document.createDocumentFragment();
  filtered.forEach((myth) => fragment.appendChild(createCard(myth)));
  resultsGrid.appendChild(fragment);
}

searchInput.addEventListener("input", render);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  render();
  searchInput.focus();
});

filterRow.addEventListener("click", (event) => {
  const btn = event.target.closest(".filter-btn");
  if (!btn) return;
  currentFilter = btn.dataset.filter;
  [...filterRow.children].forEach((child) => child.classList.remove("active"));
  btn.classList.add("active");
  render();
});

renderChips();
render();