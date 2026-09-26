const doctors = [
  {
    "id": "d1",
    "name": "Dr. Ananya Sharma",
    "specialty": "Cardiology",
    "qualification": "MBBS, MD (Cardiology)",
    "experience": 9,
    "rating": 4.8,
    "reviews": 142,
    "fee": 600,
    "availableToday": true,
    "symptoms": [
      "chest pain",
      "palpitations",
      "blood pressure",
      "heart health"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Focuses on preventive heart care and long-term lifestyle management for cardiac patients.",
    "color": "#65e4c5",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d2",
    "name": "Dr. Karthik Rajan",
    "specialty": "Cardiology",
    "qualification": "MBBS, DM (Cardiology)",
    "experience": 14,
    "rating": 4.9,
    "reviews": 210,
    "fee": 800,
    "availableToday": false,
    "symptoms": [
      "chest pain",
      "heart",
      "cardiac",
      "cholesterol"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Specializes in interventional cardiology and post-surgical recovery plans.",
    "color": "#5bb9ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d3",
    "name": "Dr. Meera Iyer",
    "specialty": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "experience": 6,
    "rating": 4.6,
    "reviews": 98,
    "fee": 400,
    "availableToday": true,
    "symptoms": [
      "fever",
      "cold",
      "cough",
      "headache",
      "general checkup"
    ],
    "slots": [
      "9:00 AM",
      "10:30 AM",
      "11:00 AM",
      "1:30 PM",
      "3:00 PM"
    ],
    "bio": "Handles everyday illnesses, checkups, and referrals with a calm, thorough approach.",
    "color": "#c28cff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d4",
    "name": "Dr. Rohan Verma",
    "specialty": "General Physician",
    "qualification": "MBBS",
    "experience": 4,
    "rating": 4.4,
    "reviews": 61,
    "fee": 350,
    "availableToday": true,
    "symptoms": [
      "fever",
      "flu",
      "cough",
      "body pain"
    ],
    "slots": [
      "9:30 AM",
      "11:00 AM",
      "12:30 PM",
      "2:00 PM",
      "4:30 PM"
    ],
    "bio": "Young GP known for clear explanations and quick, practical treatment plans.",
    "color": "#ffbd66",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d5",
    "name": "Dr. Priya Nair",
    "specialty": "Dermatology",
    "qualification": "MBBS, MD (Dermatology)",
    "experience": 8,
    "rating": 4.7,
    "reviews": 133,
    "fee": 550,
    "availableToday": false,
    "symptoms": [
      "acne",
      "rash",
      "pigmentation",
      "itching",
      "skin allergy"
    ],
    "slots": [
      "10:00 AM",
      "11:30 AM",
      "1:00 PM",
      "3:00 PM",
      "4:00 PM"
    ],
    "bio": "Treats acne, pigmentation, and chronic skin conditions with a patient-first approach.",
    "color": "#ff7ca8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d6",
    "name": "Dr. Farhan Ahmed",
    "specialty": "Dermatology",
    "qualification": "MBBS, DVD",
    "experience": 11,
    "rating": 4.8,
    "reviews": 176,
    "fee": 650,
    "availableToday": true,
    "symptoms": [
      "acne",
      "hair loss",
      "eczema",
      "skin allergy"
    ],
    "slots": [
      "9:00 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:30 PM"
    ],
    "bio": "Specializes in cosmetic dermatology and skin allergy diagnostics.",
    "color": "#79a8ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d7",
    "name": "Dr. Sneha Kapoor",
    "specialty": "Pediatrics",
    "qualification": "MBBS, MD (Pediatrics)",
    "experience": 10,
    "rating": 4.9,
    "reviews": 188,
    "fee": 500,
    "availableToday": true,
    "symptoms": [
      "child fever",
      "vaccination",
      "growth",
      "baby cough"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Gentle, experienced care for infants and children, from vaccinations to growth checks.",
    "color": "#8fe6b8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d8",
    "name": "Dr. Arjun Menon",
    "specialty": "Pediatrics",
    "qualification": "MBBS, DCH",
    "experience": 5,
    "rating": 4.5,
    "reviews": 72,
    "fee": 450,
    "availableToday": false,
    "symptoms": [
      "children",
      "nutrition",
      "development",
      "fever"
    ],
    "slots": [
      "10:00 AM",
      "11:00 AM",
      "12:30 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Focuses on early childhood development and family-friendly consultations.",
    "color": "#b69cff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d9",
    "name": "Dr. Vikram Desai",
    "specialty": "Orthopedics",
    "qualification": "MBBS, MS (Ortho)",
    "experience": 13,
    "rating": 4.7,
    "reviews": 154,
    "fee": 700,
    "availableToday": true,
    "symptoms": [
      "joint pain",
      "fracture",
      "sports injury",
      "knee pain"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Treats joint pain, fractures, and sports injuries with modern rehab techniques.",
    "color": "#65e4c5",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d10",
    "name": "Dr. Lakshmi Pillai",
    "specialty": "Orthopedics",
    "qualification": "MBBS, MS (Ortho)",
    "experience": 7,
    "rating": 4.6,
    "reviews": 89,
    "fee": 600,
    "availableToday": true,
    "symptoms": [
      "back pain",
      "spine",
      "joint pain",
      "physiotherapy"
    ],
    "slots": [
      "9:30 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
      "4:30 PM"
    ],
    "bio": "Specializes in spine care and post-injury physiotherapy planning.",
    "color": "#5bb9ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d11",
    "name": "Dr. Aditya Rao",
    "specialty": "Dentistry",
    "qualification": "BDS, MDS",
    "experience": 9,
    "rating": 4.8,
    "reviews": 121,
    "fee": 450,
    "availableToday": true,
    "symptoms": [
      "toothache",
      "root canal",
      "dental cleaning",
      "teeth"
    ],
    "slots": [
      "9:00 AM",
      "10:30 AM",
      "12:00 PM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Covers routine dental care, root canals, and cosmetic dentistry.",
    "color": "#c28cff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d12",
    "name": "Dr. Divya Krishnan",
    "specialty": "Dentistry",
    "qualification": "BDS",
    "experience": 3,
    "rating": 4.3,
    "reviews": 44,
    "fee": 350,
    "availableToday": false,
    "symptoms": [
      "cavity",
      "gums",
      "dental cleaning",
      "toothache"
    ],
    "slots": [
      "10:00 AM",
      "11:30 AM",
      "1:30 PM",
      "3:00 PM",
      "4:00 PM"
    ],
    "bio": "Friendly, detail-oriented dentist focused on preventive oral care.",
    "color": "#ffbd66",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d13",
    "name": "Dr. Neha Iyer",
    "specialty": "Neurology",
    "qualification": "MBBS, MD (Neurology)",
    "experience": 8,
    "rating": 4.7,
    "reviews": 116,
    "fee": 650,
    "availableToday": true,
    "symptoms": [
      "migraine",
      "headache",
      "nerves",
      "neurology"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "11:00 AM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Focuses on migraine care, nerve disorders, and practical long-term neurological management.",
    "color": "#ff7ca8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d14",
    "name": "Dr. Sameer Nair",
    "specialty": "Neurology",
    "qualification": "MBBS, DM (Neurology)",
    "experience": 12,
    "rating": 4.8,
    "reviews": 149,
    "fee": 750,
    "availableToday": false,
    "symptoms": [
      "migraine",
      "movement disorder",
      "headache",
      "neurology"
    ],
    "slots": [
      "9:00 AM",
      "11:00 AM",
      "12:30 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Specializes in headache disorders, movement conditions, and neurological consultations.",
    "color": "#79a8ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d15",
    "name": "Dr. Kavya Menon",
    "specialty": "Gynecology",
    "qualification": "MBBS, MS (OBGYN)",
    "experience": 11,
    "rating": 4.8,
    "reviews": 137,
    "fee": 700,
    "availableToday": true,
    "symptoms": [
      "period care",
      "pregnancy",
      "PCOS",
      "women health"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Supports preventive women’s health, PCOS care and pregnancy planning with a calm, evidence-led approach.",
    "color": "#72e6c6",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d16",
    "name": "Dr. Nandini Iyer",
    "specialty": "Gynecology",
    "qualification": "MBBS, DNB (Obstetrics & Gynecology)",
    "experience": 7,
    "rating": 4.7,
    "reviews": 92,
    "fee": 600,
    "availableToday": true,
    "symptoms": [
      "pregnancy",
      "PCOS",
      "menstrual pain",
      "fertility"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Provides compassionate reproductive health consultations, prenatal guidance and menstrual care.",
    "color": "#5bb9ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d17",
    "name": "Dr. Arvind Krishnan",
    "specialty": "Ophthalmology",
    "qualification": "MBBS, MS (Ophthalmology)",
    "experience": 12,
    "rating": 4.8,
    "reviews": 164,
    "fee": 650,
    "availableToday": true,
    "symptoms": [
      "blurred vision",
      "eye pain",
      "cataract",
      "dry eyes"
    ],
    "slots": [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Focuses on comprehensive eye examinations, cataract evaluation and long-term vision care.",
    "color": "#c28cff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d18",
    "name": "Dr. Ishita Bose",
    "specialty": "Ophthalmology",
    "qualification": "MBBS, DNB (Ophthalmology)",
    "experience": 6,
    "rating": 4.6,
    "reviews": 78,
    "fee": 500,
    "availableToday": true,
    "symptoms": [
      "eye strain",
      "dry eyes",
      "vision",
      "red eye"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Specializes in digital eye strain, dry-eye management and routine vision screening.",
    "color": "#ffbd66",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d19",
    "name": "Dr. Vivek Srinivasan",
    "specialty": "Pulmonology",
    "qualification": "MBBS, MD, DM (Pulmonology)",
    "experience": 15,
    "rating": 4.9,
    "reviews": 201,
    "fee": 850,
    "availableToday": true,
    "symptoms": [
      "asthma",
      "breathing",
      "cough",
      "sleep apnea"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Treats asthma, chronic breathing concerns and sleep-related respiratory conditions.",
    "color": "#ff7ca8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d20",
    "name": "Dr. Ritu Malhotra",
    "specialty": "Pulmonology",
    "qualification": "MBBS, MD (Respiratory Medicine)",
    "experience": 8,
    "rating": 4.7,
    "reviews": 105,
    "fee": 700,
    "availableToday": true,
    "symptoms": [
      "asthma",
      "wheezing",
      "breathlessness",
      "allergy"
    ],
    "slots": [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Provides structured respiratory evaluations and personalized inhaler and lifestyle guidance.",
    "color": "#79a8ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d21",
    "name": "Dr. Harish Balan",
    "specialty": "Endocrinology",
    "qualification": "MBBS, MD, DM (Endocrinology)",
    "experience": 13,
    "rating": 4.8,
    "reviews": 173,
    "fee": 800,
    "availableToday": false,
    "symptoms": [
      "diabetes",
      "thyroid",
      "hormones",
      "insulin"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Manages diabetes, thyroid disorders and metabolic health with long-term follow-up plans.",
    "color": "#8fe6b8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d22",
    "name": "Dr. Aditi Shah",
    "specialty": "Endocrinology",
    "qualification": "MBBS, MD (Medicine), Fellowship in Endocrinology",
    "experience": 7,
    "rating": 4.7,
    "reviews": 101,
    "fee": 650,
    "availableToday": true,
    "symptoms": [
      "thyroid",
      "diabetes",
      "pcos",
      "hormones"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Focuses on thyroid health, diabetes prevention and hormone-related concerns.",
    "color": "#ff9d7a",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d23",
    "name": "Dr. Sameera Joseph",
    "specialty": "Psychiatry",
    "qualification": "MBBS, MD (Psychiatry)",
    "experience": 10,
    "rating": 4.8,
    "reviews": 126,
    "fee": 750,
    "availableToday": true,
    "symptoms": [
      "anxiety",
      "stress",
      "sleep",
      "mood"
    ],
    "slots": [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Offers confidential consultations around stress, sleep, mood and everyday emotional wellbeing.",
    "color": "#9d8cff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d24",
    "name": "Dr. Nikhil Varma",
    "specialty": "Psychiatry",
    "qualification": "MBBS, DPM",
    "experience": 6,
    "rating": 4.6,
    "reviews": 74,
    "fee": 600,
    "availableToday": true,
    "symptoms": [
      "anxiety",
      "insomnia",
      "stress",
      "behavior"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Uses practical, patient-centred consultations for anxiety, sleep and behavioural concerns.",
    "color": "#65d9e8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d25",
    "name": "Dr. Rahul Bhat",
    "specialty": "Hematology",
    "qualification": "MBBS, MD, DM (Hematology)",
    "experience": 14,
    "rating": 4.9,
    "reviews": 149,
    "fee": 900,
    "availableToday": false,
    "symptoms": [
      "anemia",
      "blood count",
      "clotting",
      "bleeding"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Specializes in blood-count abnormalities, anemia workups and clotting evaluations.",
    "color": "#72e6c6",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d26",
    "name": "Dr. Pooja Kulkarni",
    "specialty": "Hematology",
    "qualification": "MBBS, MD (Pathology), Fellowship in Hematology",
    "experience": 8,
    "rating": 4.7,
    "reviews": 83,
    "fee": 700,
    "availableToday": true,
    "symptoms": [
      "anemia",
      "fatigue",
      "blood test",
      "platelets"
    ],
    "slots": [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Provides careful interpretation of blood investigations and referral-based hematology care.",
    "color": "#5bb9ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d27",
    "name": "Dr. Sanjay Menon",
    "specialty": "Nephrology",
    "qualification": "MBBS, MD, DM (Nephrology)",
    "experience": 16,
    "rating": 4.9,
    "reviews": 188,
    "fee": 950,
    "availableToday": false,
    "symptoms": [
      "kidney",
      "creatinine",
      "stones",
      "blood pressure"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Focuses on kidney health, hypertension-related kidney disease and chronic renal care.",
    "color": "#c28cff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d28",
    "name": "Dr. Keerthi Rao",
    "specialty": "Nephrology",
    "qualification": "MBBS, MD (Medicine), DNB (Nephrology)",
    "experience": 8,
    "rating": 4.7,
    "reviews": 97,
    "fee": 750,
    "availableToday": true,
    "symptoms": [
      "kidney stones",
      "urine",
      "kidney",
      "swelling"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Provides early kidney-risk assessment, stone management and preventive renal guidance.",
    "color": "#ffbd66",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d29",
    "name": "Dr. Manish Kapoor",
    "specialty": "Oncology",
    "qualification": "MBBS, MD, DM (Medical Oncology)",
    "experience": 17,
    "rating": 4.9,
    "reviews": 221,
    "fee": 1200,
    "availableToday": false,
    "symptoms": [
      "cancer",
      "oncology",
      "chemotherapy",
      "tumor"
    ],
    "slots": [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Coordinates oncology consultations, treatment planning discussions and supportive care pathways.",
    "color": "#ff7ca8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d30",
    "name": "Dr. Anjali Thomas",
    "specialty": "Oncology",
    "qualification": "MBBS, MD (Radiation Oncology)",
    "experience": 10,
    "rating": 4.8,
    "reviews": 118,
    "fee": 1000,
    "availableToday": true,
    "symptoms": [
      "cancer",
      "screening",
      "tumor",
      "radiation"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Provides oncology evaluations and helps patients understand treatment and follow-up pathways.",
    "color": "#79a8ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d31",
    "name": "Dr. Joseph Mathew",
    "specialty": "ENT",
    "qualification": "MBBS, MS (ENT)",
    "experience": 12,
    "rating": 4.8,
    "reviews": 156,
    "fee": 650,
    "availableToday": true,
    "symptoms": [
      "ear pain",
      "sinus",
      "throat",
      "hearing"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Treats common ear, nose and throat conditions, including sinus and hearing concerns.",
    "color": "#8fe6b8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d32",
    "name": "Dr. Swati Rao",
    "specialty": "ENT",
    "qualification": "MBBS, DNB (ENT)",
    "experience": 6,
    "rating": 4.6,
    "reviews": 69,
    "fee": 500,
    "availableToday": true,
    "symptoms": [
      "tonsils",
      "sinus",
      "ear infection",
      "voice"
    ],
    "slots": [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Focuses on sinus, throat, voice and routine ENT assessments for adults and children.",
    "color": "#ff9d7a",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d33",
    "name": "Dr. Deepak Iyer",
    "specialty": "Radiology",
    "qualification": "MBBS, MD (Radiodiagnosis)",
    "experience": 13,
    "rating": 4.8,
    "reviews": 132,
    "fee": 700,
    "availableToday": false,
    "symptoms": [
      "MRI",
      "CT",
      "ultrasound",
      "imaging"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Experienced in diagnostic imaging review and clear communication of imaging findings.",
    "color": "#9d8cff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d34",
    "name": "Dr. Tanya Kapoor",
    "specialty": "Radiology",
    "qualification": "MBBS, DNB (Radiology)",
    "experience": 7,
    "rating": 4.7,
    "reviews": 88,
    "fee": 600,
    "availableToday": true,
    "symptoms": [
      "ultrasound",
      "x-ray",
      "MRI",
      "scan"
    ],
    "slots": [
      "9:30 AM",
      "10:30 AM",
      "12:00 PM",
      "2:30 PM",
      "4:00 PM"
    ],
    "bio": "Specializes in ultrasound, X-ray and cross-sectional imaging workflows.",
    "color": "#65d9e8",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d35",
    "name": "Dr. Prakash Reddy",
    "specialty": "General Surgery",
    "qualification": "MBBS, MS (General Surgery)",
    "experience": 15,
    "rating": 4.8,
    "reviews": 145,
    "fee": 900,
    "availableToday": false,
    "symptoms": [
      "hernia",
      "gallbladder",
      "surgery",
      "appendix"
    ],
    "slots": [
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "4:30 PM"
    ],
    "bio": "Provides surgical assessments, pre-operative planning and recovery guidance.",
    "color": "#72e6c6",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  },
  {
    "id": "d36",
    "name": "Dr. Ananya Paul",
    "specialty": "General Surgery",
    "qualification": "MBBS, MS (General Surgery)",
    "experience": 9,
    "rating": 4.7,
    "reviews": 103,
    "fee": 750,
    "availableToday": true,
    "symptoms": [
      "hernia",
      "appendix",
      "minor surgery",
      "gallbladder"
    ],
    "slots": [
      "9:00 AM",
      "10:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:30 PM"
    ],
    "bio": "Focuses on elective surgical consultations, minimally invasive options and follow-up planning.",
    "color": "#5bb9ff",
    "consultationModes": [
      "In-person",
      "Video"
    ],
    "location": "Chennai"
  }
];
const SPECIALTIES = [
  {
    "id": "cardiology",
    "name": "Cardiologist",
    "icon": "🫀",
    "description": "Heart & blood pressure",
    "value": "Cardiology"
  ,
    "image": "assets/specialties/cardiology.jpg"
  },
  {
    "id": "neurology",
    "name": "Neurologist",
    "icon": "🧠",
    "description": "Brain & nervous system",
    "value": "Neurology"
  ,
    "image": "assets/specialties/neurology.jpg"
  },
  {
    "id": "orthopedics",
    "name": "Orthopedist",
    "icon": "🦴",
    "description": "Bones, joints & muscles",
    "value": "Orthopedics"
  ,
    "image": "assets/specialties/orthopedics.jpg"
  },
  {
    "id": "pediatrics",
    "name": "Pediatrician",
    "icon": "👶",
    "description": "Children's health",
    "value": "Pediatrics"
  ,
    "image": "assets/specialties/pediatrics.jpg"
  },
  {
    "id": "gynecology",
    "name": "Gynecologist",
    "icon": "👩‍⚕️",
    "description": "Women's health",
    "value": "Gynecology"
  ,
    "image": "assets/specialties/gynecology.jpg"
  },
  {
    "id": "general",
    "name": "General Physician",
    "icon": "🩺",
    "description": "Fever, infections & common illnesses",
    "value": "General Physician"
  ,
    "image": "assets/specialties/general.jpg"
  },
  {
    "id": "dermatology",
    "name": "Dermatologist",
    "icon": "🧴",
    "description": "Skin, hair & nails",
    "value": "Dermatology"
  ,
    "image": "assets/specialties/dermatology.jpg"
  },
  {
    "id": "ophthalmology",
    "name": "Ophthalmologist",
    "icon": "👁️",
    "description": "Eyes & vision",
    "value": "Ophthalmology"
  ,
    "image": "assets/specialties/ophthalmology.jpg"
  },
  {
    "id": "dentistry",
    "name": "Dentist",
    "icon": "🦷",
    "description": "Teeth & oral health",
    "value": "Dentistry"
  ,
    "image": "assets/specialties/dentistry.jpg"
  },
  {
    "id": "pulmonology",
    "name": "Pulmonologist",
    "icon": "🫁",
    "description": "Lungs & breathing",
    "value": "Pulmonology"
  ,
    "image": "assets/specialties/pulmonology.jpg"
  },
  {
    "id": "endocrinology",
    "name": "Endocrinologist",
    "icon": "🧪",
    "description": "Diabetes, thyroid & hormones",
    "value": "Endocrinology"
  ,
    "image": "assets/specialties/endocrinology.jpg"
  },
  {
    "id": "psychiatry",
    "name": "Psychiatrist",
    "icon": "🧠",
    "description": "Mental & behavioral health",
    "value": "Psychiatry"
  ,
    "image": "assets/specialties/psychiatry.jpg"
  },
  {
    "id": "hematology",
    "name": "Hematologist",
    "icon": "🩸",
    "description": "Blood-related conditions",
    "value": "Hematology"
  ,
    "image": "assets/specialties/hematology.jpg"
  },
  {
    "id": "nephrology",
    "name": "Nephrologist",
    "icon": "🫘",
    "description": "Kidneys",
    "value": "Nephrology"
  ,
    "image": "assets/specialties/nephrology.jpg"
  },
  {
    "id": "oncology",
    "name": "Oncologist",
    "icon": "🧬",
    "description": "Cancer care",
    "value": "Oncology"
  ,
    "image": "assets/specialties/oncology.jpg"
  },
  {
    "id": "ent",
    "name": "ENT Specialist",
    "icon": "👂",
    "description": "Ear, nose & throat",
    "value": "ENT"
  ,
    "image": "assets/specialties/ent.jpg"
  },
  {
    "id": "radiology",
    "name": "Radiologist",
    "icon": "🩻",
    "description": "Medical imaging",
    "value": "Radiology"
  ,
    "image": "assets/specialties/radiology.jpg"
  },
  {
    "id": "surgery",
    "name": "General Surgeon",
    "icon": "🏥",
    "description": "Surgical conditions",
    "value": "General Surgery"
  ,
    "image": "assets/specialties/surgery.jpg"
  }
];
const HOSPITALS = [
  {
    "id": "h1",
    "name": "MediBook Care Hospital — Adyar",
    "area": "Adyar, Chennai",
    "description": "Multi-specialty care with cardiology, diagnostics, pharmacy and 24/7 emergency support.",
    "facilities": [
      "24/7 emergency",
      "Diagnostics",
      "Pharmacy",
      "ICU"
    ],
    "address": "12 LB Road, Adyar, Chennai"
  },
  {
    "id": "h2",
    "name": "MediBook City Hospital — Anna Nagar",
    "area": "Anna Nagar, Chennai",
    "description": "Family-focused hospital with neurology, pediatrics, ENT and general medicine services.",
    "facilities": [
      "Pediatric wing",
      "Imaging",
      "Pharmacy",
      "Video follow-up"
    ],
    "address": "45 2nd Avenue, Anna Nagar, Chennai"
  },
  {
    "id": "h3",
    "name": "MediBook Specialty Centre — Guindy",
    "area": "Guindy, Chennai",
    "description": "Specialty centre for orthopedics, respiratory care and advanced imaging.",
    "facilities": [
      "MRI/CT",
      "Physiotherapy",
      "Respiratory lab",
      "Specialty clinics"
    ],
    "address": "8 GST Road, Guindy, Chennai"
  },
  {
    "id": "h4",
    "name": "MediBook Women & Family Centre — Nungambakkam",
    "area": "Nungambakkam, Chennai",
    "description": "Women's and family healthcare with gynecology, pediatrics and endocrine support.",
    "facilities": [
      "Women's wellness",
      "Vaccination",
      "Diagnostics",
      "Family care"
    ],
    "address": "21 College Road, Nungambakkam, Chennai"
  }
];
const LAB_TESTS = [
  {
    "id": "l1",
    "name": "Complete Blood Count (CBC)",
    "category": "Blood",
    "price": 350,
    "turnaround": "Same day",
    "description": "Screens red cells, white cells, hemoglobin and platelets."
  },
  {
    "id": "l2",
    "name": "Lipid Profile",
    "category": "Heart Health",
    "price": 550,
    "turnaround": "Same day",
    "description": "Measures cholesterol and triglycerides."
  },
  {
    "id": "l3",
    "name": "Thyroid Profile",
    "category": "Hormones",
    "price": 600,
    "turnaround": "24 hours",
    "description": "Checks thyroid-related hormone levels."
  },
  {
    "id": "l4",
    "name": "HbA1c",
    "category": "Diabetes",
    "price": 450,
    "turnaround": "Same day",
    "description": "Estimates average blood glucose over 2–3 months."
  },
  {
    "id": "l5",
    "name": "Liver Function Test",
    "category": "Organ Health",
    "price": 700,
    "turnaround": "24 hours",
    "description": "Assesses common liver function markers."
  },
  {
    "id": "l6",
    "name": "Kidney Function Test",
    "category": "Organ Health",
    "price": 650,
    "turnaround": "24 hours",
    "description": "Assesses common kidney function markers."
  },
  {
    "id": "l7",
    "name": "Vitamin D",
    "category": "Nutrition",
    "price": 800,
    "turnaround": "48 hours",
    "description": "Checks vitamin D status."
  },
  {
    "id": "l8",
    "name": "Urine Routine",
    "category": "Urine",
    "price": 250,
    "turnaround": "Same day",
    "description": "Routine urine screening."
  }
];
const MEDICINES = [
  {
    "id": "m1",
    "name": "Paracetamol 650 mg",
    "category": "Fever & pain",
    "price": 45,
    "pack": "10 tablets"
  },
  {
    "id": "m2",
    "name": "Cetirizine 10 mg",
    "category": "Allergy",
    "price": 55,
    "pack": "10 tablets"
  },
  {
    "id": "m3",
    "name": "ORS Sachets",
    "category": "Hydration",
    "price": 35,
    "pack": "5 sachets"
  },
  {
    "id": "m4",
    "name": "Antacid Tablets",
    "category": "Digestive",
    "price": 65,
    "pack": "10 tablets"
  },
  {
    "id": "m5",
    "name": "Vitamin D3 60K",
    "category": "Supplements",
    "price": 120,
    "pack": "4 capsules"
  }
];
const SURGERIES = [
  {
    "id": "s1",
    "name": "Knee Replacement Consultation",
    "specialty": "Orthopedics",
    "description": "Pre-operative evaluation, imaging review, implant discussion and rehabilitation planning.",
    "starting": "₹1,80,000"
  },
  {
    "id": "s2",
    "name": "Gallbladder Surgery Planning",
    "specialty": "General Surgery",
    "description": "Surgical review, pre-op tests, hospital selection and recovery planning.",
    "starting": "₹75,000"
  },
  {
    "id": "s3",
    "name": "Cardiac Procedure Planning",
    "specialty": "Cardiology",
    "description": "Specialist consultation, diagnostic review and hospital coordination.",
    "starting": "₹2,50,000"
  },
  {
    "id": "s4",
    "name": "Hernia Surgery Planning",
    "specialty": "General Surgery",
    "description": "Assessment, procedure options and follow-up planning.",
    "starting": "₹60,000"
  }
];
const EXPERT_QA = [
  {
    "q": "How do I prepare for a video consultation?",
    "a": "Choose a quiet, well-lit space, keep your medication list nearby, and test your camera and microphone."
  },
  {
    "q": "Can I reschedule a consultation?",
    "a": "Yes. Open My Appointments, choose the appointment and select Reschedule."
  },
  {
    "q": "Can I choose which hospital I visit?",
    "a": "Yes. In-person booking includes a hospital selector with local demo hospital information."
  },
  {
    "q": "How does the care lifecycle work?",
    "a": "A case can move from consultation to initial record, treatment, follow-up, recovered, or recurring."
  }
];
