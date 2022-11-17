import math

def game_money(leather,gold=True,silver=False,copper=True) : 
  if(type(leather)is int):
    silvers = (leather * 2) if silver == True else None
    golds = (leather * 2) / 4 if gold == True else None
    coppers = math.floor((golds % 1) * 32) if copper == True else None
    
    onehour = golds / 8
    onehourcopper = math.floor((onehour % 1) * 32)
    
    return f'이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 {math.floor(onehour)}개 입니다. \n gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 {onehourcopper}개의 copper를 챙겼습니다.\n공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 {math.floor(golds)}gold, {coppers}copper를 얻었습니다'
  else:
    print('인자 타입을 확인해주세요.')
  
print(game_money('안녕'));