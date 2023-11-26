from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestData(BaseModel):
    token: str
    user: str
    system: str

@app.post("/process_messages")
async def process_messages(request_data: RequestData, authorization: str = Header(...)):
    if authorization != f"Bearer {request_data.token}":
        print("bruh")
        raise HTTPException(status_code=401, detail="Unauthorized")

    print(request_data)

    headers = {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
        "Authorization": authorization,
        "Content-Type": "application/json",
        "X-Request-Id": "c575148e-8ee4-4a77-98b1-b4b7b58233f4",
        "X-Session-Id": "ee7853ed-9b3e-45e6-a2ee-d2fce1a06c55",
        "Allow": "GET, POST",
        "X-Frame-Options": "SAMEORIGIN",
        "X-XSS-Protection": "1; mode=block",
        "X-Content-Type-Options": "nosniff",
    }

    data = {
        "model": "GigaChat:latest",
        "temperature": 0.87,
        "top_p": 0.47,
        "n": 1,
        "max_tokens": 512,
        "repetition_penalty": 1.07,
        "stream": False,
        "update_interval": 0,
        "messages": [
                            {
                                "role": 'system',
                                "content": request_data.system,
                            },
                            {
                                "role": 'user',
                                "content": request_data.user,
                            }
                        ]
    }

    async with httpx.AsyncClient(verify=False) as client:
        response = await client.post(
            "https://gigachat.devices.sberbank.ru/api/v1/chat/completions",
            headers=headers,
            json=data,
        )

    result = response.json()
    print(result)
    return result["choices"][0]['message']['content']

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
