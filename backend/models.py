from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class YearRange(BaseModel):
    hijri: int
    gregorian: int

class Scholar(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nameArabic: str
    nameEnglish: str
    birthYear: YearRange
    deathYear: YearRange
    biography: str  # Arabic
    biographyEnglish: str
    teachers: List[str] = []
    students: List[str] = []
    books: List[str] = []
    madhhab: str
    region: str
    century: int  # Hijri century
    image: str
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class ScholarCreate(BaseModel):
    nameArabic: str
    nameEnglish: str
    birthYear: YearRange
    deathYear: YearRange
    biography: str
    biographyEnglish: str
    teachers: List[str] = []
    students: List[str] = []
    books: List[str] = []
    madhhab: str
    region: str
    century: int
    image: str

class Quote(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    text: str  # Arabic
    translation: str  # English
    author: str
    createdAt: datetime = Field(default_factory=datetime.utcnow)

class QuoteCreate(BaseModel):
    text: str
    translation: str
    author: str

class ScholarFilter(BaseModel):
    century: Optional[str] = None
    madhhab: Optional[str] = None
    region: Optional[str] = None
    search: Optional[str] = None
    limit: int = 50
    skip: int = 0