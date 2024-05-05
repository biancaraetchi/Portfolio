import numpy as np

class Bomb:
  """
  Describes state of bomb in minesweeper array.
  """
  def __init__(self) -> None:
    self.pos_x = None
    self.pos_y = None

def generate_array(dims, bombs) -> list[list[int]]:
  """
  Generates a list of bombs in an array of shape=(dims, dims).

  dims: dimension of square array
  bombs: number of bombs in array
  """

  def _pick_bomb_tile(array, dims) -> Bomb:
    """
    Function to generate bomb in array

    array: square minesweeper array with bombs
    dims: dimensions of square array
    """
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
    """Generates list of bombs in minesweeper array.
    
    dims: dimension of array
    bombs: number of bombs in minesweeper array
    """
    array = np.zeros((dims, dims))
    list_bombs:list[Bomb] = []
    for i in range(bombs):
      list_bombs.append(_pick_bomb_tile(array, dims))
    return list_bombs, array

  result = _create_return(dims, bombs)

  return result[0]



