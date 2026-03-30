class Pair:
    def __init__(self, key, val):
        self.key = key
        self.val = val
class HashTable:
    
    def __init__(self, capacity: int):
        self.capacity=capacity
        self.hashmap=[]
        self.size=0
        for i in range(self.capacity):
            self.hashmap.append(None)

    def hash(self,key):
        index=0
        for i in key:
            index+=ord(str(i))
        print(index,self.capacity)
        index=index % self.capacity
        print(index)
        return index

    def insert(self, key: int, value: int) -> None:  
        index=self.hash(str(key))
        print(index)
        while True:
            if self.hashmap[index]==None:
                self.hashmap[index]=Pair(key,value)
                self.size+=1
                if self.size>=self.capacity //2:
                    self.resize()
                return
            elif self.hashmap[index].key == key:
                self.hashmap[index].val = value
                return
        
            index += 1
            index = index % self.capacity



    def get(self, key: int) -> int:
        index=self.hash(str(key))
        while self.hashmap[index]!=None:
            if self.hashmap[index].key==key:
                return self.hashmap[index].val
            index+=1
            index=index%self.capacity
        return -1


    def remove(self, key: int) -> bool:
        if  self.get(key)==-1:
            return False
        index=self.hash(str(key))
        while True:
            if self.hashmap[index].key==key:
                self.hashmap[index]=None
                self.size-=1
                return True
            index=index+1
            index=index%self.capacity



    def getSize(self) -> int:
        return self.size


    def getCapacity(self) -> int:
        return self.capacity


    def resize(self) -> None:
        self.capacity=2*self.capacity
        newmap=[]
        for i in range(self.capacity):
            newmap.append(None)
        oldmap=self.hashmap
        self.hashmap=newmap
        self.size=0
        for pair in oldmap:
            if pair:
                self.insert(pair.key,pair.val)


