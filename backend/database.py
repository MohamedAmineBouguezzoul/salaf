from motor.motor_asyncio import AsyncIOMotorClient
import os
from typing import List, Optional
from models import Scholar, Quote, ScholarCreate, QuoteCreate, ScholarFilter

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
scholars_collection = db.scholars
quotes_collection = db.quotes

class ScholarService:
    @staticmethod
    async def create_scholar(scholar_data: ScholarCreate) -> Scholar:
        scholar = Scholar(**scholar_data.dict())
        await scholars_collection.insert_one(scholar.dict())
        return scholar

    @staticmethod
    async def get_scholars(filters: ScholarFilter) -> List[Scholar]:
        query = {}
        
        if filters.century:
            query["century"] = int(filters.century)
        
        if filters.madhhab:
            query["madhhab"] = filters.madhhab
        
        if filters.region:
            query["region"] = filters.region
        
        if filters.search:
            query["$or"] = [
                {"nameArabic": {"$regex": filters.search, "$options": "i"}},
                {"nameEnglish": {"$regex": filters.search, "$options": "i"}},
                {"biography": {"$regex": filters.search, "$options": "i"}},
                {"biographyEnglish": {"$regex": filters.search, "$options": "i"}},
                {"madhhab": {"$regex": filters.search, "$options": "i"}},
                {"region": {"$regex": filters.search, "$options": "i"}}
            ]
        
        cursor = scholars_collection.find(query).skip(filters.skip).limit(filters.limit).sort("deathYear.hijri", 1)
        scholars = await cursor.to_list(length=filters.limit)
        return [Scholar(**scholar) for scholar in scholars]

    @staticmethod
    async def get_scholar_by_id(scholar_id: str) -> Optional[Scholar]:
        scholar = await scholars_collection.find_one({"id": scholar_id})
        if scholar:
            return Scholar(**scholar)
        return None

    @staticmethod
    async def get_total_count(filters: ScholarFilter) -> int:
        query = {}
        
        if filters.century:
            query["century"] = int(filters.century)
        
        if filters.madhhab:
            query["madhhab"] = filters.madhhab
        
        if filters.region:
            query["region"] = filters.region
        
        if filters.search:
            query["$or"] = [
                {"nameArabic": {"$regex": filters.search, "$options": "i"}},
                {"nameEnglish": {"$regex": filters.search, "$options": "i"}},
                {"biography": {"$regex": filters.search, "$options": "i"}},
                {"biographyEnglish": {"$regex": filters.search, "$options": "i"}},
                {"madhhab": {"$regex": filters.search, "$options": "i"}},
                {"region": {"$regex": filters.search, "$options": "i"}}
            ]
        
        return await scholars_collection.count_documents(query)

    @staticmethod
    async def get_centuries() -> List[str]:
        centuries = await scholars_collection.distinct("century")
        return [str(c) for c in sorted(centuries)]

    @staticmethod
    async def get_madhabs() -> List[str]:
        return await scholars_collection.distinct("madhhab")

    @staticmethod
    async def get_regions() -> List[str]:
        return await scholars_collection.distinct("region")

class QuoteService:
    @staticmethod
    async def create_quote(quote_data: QuoteCreate) -> Quote:
        quote = Quote(**quote_data.dict())
        await quotes_collection.insert_one(quote.dict())
        return quote

    @staticmethod
    async def get_quotes() -> List[Quote]:
        quotes = await quotes_collection.find().to_list(100)
        return [Quote(**quote) for quote in quotes]

    @staticmethod
    async def get_random_quote() -> Optional[Quote]:
        # MongoDB aggregation pipeline to get random document
        pipeline = [{"$sample": {"size": 1}}]
        cursor = quotes_collection.aggregate(pipeline)
        quotes = await cursor.to_list(1)
        if quotes:
            return Quote(**quotes[0])
        return None