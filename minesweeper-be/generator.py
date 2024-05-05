import numpy as np

class Bomb:
  def __init__(self) -> None:
    self.pos_x = None
    self.pos_y = None

def generate_array(dims, bombs) -> list[list[int]]:
  def _pick_bomb_tile(array, dims) -> Bomb:
    bomb = Bomb()
    pos_x = np.random.randint(low=0, high=dims)
    pos_y = np.random.randint(low=0, high=dims)
    if(array[pos_x, pos_y] == 1):
      bomb = _pick_bomb_tile(array, dims)
    else:
      array[pos_x, pos_y] = 1
      bomb.pos_x = pos_x
      bomb.pos_y = pos_y
    return bomb


  def _create_return(dims, bombs) -> tuple[list[Bomb], list[list[int]]]:
    array = np.zeros((dims, dims))
    list_bombs:list[Bomb] = []
    for i in range(bombs):
      list_bombs.append(_pick_bomb_tile(array, dims))
    return list_bombs, array

  result = _create_return(dims, bombs)

  return result[0]



