import math

def change_money(paymoeny,cost):
  changes = {}
  change = paymoeny-cost
  
  arr=[
    [50000, '오만원권'],
    [10000, '만원권'],
    [500, '오백원동전'],
    [100, '일백원동전'],
    [50, '오십원동전'],
    [10, '십원동전']
  ]
  
  for i in arr:
    if(change/i[0]>=0):
      changes[i[1]]=math.floor(change/i[0])
      change=change%i[0]
      
  return changes

print(change_money(100000,34830))