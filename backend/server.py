from fastapi import FastAPI, APIRouter, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from typing import List, Optional
from models import Scholar, Quote, ScholarFilter
from database import ScholarService, QuoteService

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Salaf Scholars API", description="API for Islamic Scholars Database")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Salaf Scholars API - Serving the legacy of Islamic scholarship"}

# Scholars endpoints
@api_router.get("/scholars", response_model=dict)
async def get_scholars(
    century: Optional[str] = Query(None),
    madhhab: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=100),
    skip: int = Query(0, ge=0)
):
    """Get all scholars with optional filters"""
    filters = ScholarFilter(
        century=century,
        madhhab=madhhab,
        region=region,
        search=search,
        limit=limit,
        skip=skip
    )
    
    scholars = await ScholarService.get_scholars(filters)
    total = await ScholarService.get_total_count(filters)
    
    return {
        "scholars": [scholar.dict() for scholar in scholars],
        "total": total,
        "limit": limit,
        "skip": skip
    }

@api_router.get("/scholars/{scholar_id}", response_model=Scholar)
async def get_scholar(scholar_id: str):
    """Get a single scholar by ID"""
    scholar = await ScholarService.get_scholar_by_id(scholar_id)
    if not scholar:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Scholar not found")
    return scholar

@api_router.get("/centuries")
async def get_centuries():
    """Get list of available centuries"""
    centuries = await ScholarService.get_centuries()
    return {"centuries": centuries}

@api_router.get("/madhabs")
async def get_madhabs():
    """Get list of available madhabs"""
    madhabs = await ScholarService.get_madhabs()
    return {"madhabs": madhabs}

@api_router.get("/regions")
async def get_regions():
    """Get list of available regions"""
    regions = await ScholarService.get_regions()
    return {"regions": regions}

# Quotes endpoints
@api_router.get("/quotes", response_model=List[Quote])
async def get_quotes():
    """Get all quotes"""
    return await QuoteService.get_quotes()

@api_router.get("/quotes/random", response_model=Quote)
async def get_random_quote():
    """Get a random quote"""
    quote = await QuoteService.get_random_quote()
    if not quote:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="No quotes found")
    return quote

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


