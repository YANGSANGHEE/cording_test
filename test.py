import math
import random


numberSet = []
for i in range(1,3):
    number = random.randint(1,101)
    numberSet.append(number)

def cone_volumns(radius,height):
    pi = math.pi
    pows = math.pow(radius,2);
    cal = int((pi*pows*height)/3)
    return cal
  
print(cone_volumns(numberSet[0],numberSet[1])) 


def cone_volumn():
  numberSet = []
  for i in range(1,3):
    number = random.randint(1,101)
    numberSet.append(number)
    
    pi = math.pi
    pows = math.pow(numberSet[0],2);
    
  return int((pi*pows*numberSet[1])/3);

print(cone_volumn()) 