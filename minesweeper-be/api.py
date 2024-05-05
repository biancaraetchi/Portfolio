# use instance of this object to create API later
from fastapi import FastAPI, HTTPException
from generator import generate_array
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

app = FastAPI()

@app.get("/")
def create_game(dims: int = 5, bombs: int = 5):
  if(bombs > dims*dims):
    return HTTPException(status_code=400, detail="Bad Request; there cannot be more bombs than tiles.")
  result = generate_array(dims, bombs)
  data = {}
  index = 0
  for i in result:
    data[index] = {'x': i.pos_x, 'y':i.pos_y}
    index += 1
  return JSONResponse(jsonable_encoder(data))