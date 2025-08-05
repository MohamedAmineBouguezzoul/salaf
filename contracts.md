# Salaf Scholars Website - Backend Contracts

## API Endpoints

### Scholars Management
- **GET /api/scholars** - Get all scholars with optional filters
  - Query params: `century`, `madhhab`, `region`, `search`, `limit`, `skip`
  - Response: `{ scholars: Scholar[], total: number }`

- **GET /api/scholars/:id** - Get single scholar by ID
  - Response: `Scholar`

- **GET /api/centuries** - Get list of available centuries
  - Response: `{ centuries: string[] }`

- **GET /api/madhabs** - Get list of available madhabs
  - Response: `{ madhabs: string[] }`

- **GET /api/regions** - Get list of available regions
  - Response: `{ regions: string[] }`

### Quotes Management
- **GET /api/quotes** - Get all quotes
- **GET /api/quotes/random** - Get random quote
  - Response: `Quote`

## Data Models

### Scholar Model
```javascript
{
  _id: ObjectId,
  nameArabic: String,
  nameEnglish: String,
  birthYear: { hijri: Number, gregorian: Number },
  deathYear: { hijri: Number, gregorian: Number },
  biography: String, // Arabic
  biographyEnglish: String,
  teachers: [String], // Array of teacher names
  students: [String], // Array of student names
  books: [String], // Array of book titles
  madhhab: String,
  region: String,
  century: Number, // Hijri century
  image: String, // URL to scholar image
  createdAt: Date,
  updatedAt: Date
}
```

### Quote Model
```javascript
{
  _id: ObjectId,
  text: String, // Arabic text
  translation: String, // English translation
  author: String, // Scholar name
  createdAt: Date
}
```

## Mock Data Migration
Current mock.js contains:
- 8 scholars from first 3 centuries
- 3 quotes
- Need to expand to include scholars from all centuries (1st-15th Hijri / 7th-21st CE)

## Backend Implementation Plan
1. Create MongoDB models for Scholar and Quote
2. Implement CRUD endpoints with filtering/search
3. Seed database with expanded scholar data
4. Get scholar images from Wikipedia/appropriate sources
5. Replace frontend mock data calls with real API calls

## Frontend Integration
- Replace mockScholars import with API calls
- Update search/filter logic to use backend
- Add loading states and error handling
- Maintain existing UI/UX functionality

## Scholar Data Expansion
Target scholars from each century:
- **1st Century**: Companions and early Tabi'een
- **2nd-3rd Centuries**: Classical scholars (current data)
- **4th-6th Centuries**: Classical period scholars
- **7th-10th Centuries**: Medieval Islamic scholars
- **11th-15th Centuries**: Modern Islamic scholars and reformers

## Image Sources
- Wikipedia images of scholars
- Historical Islamic art
- Calligraphy of scholar names
- Traditional Islamic scholarly imagery