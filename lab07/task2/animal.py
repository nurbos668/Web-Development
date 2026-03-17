class Animal:
    def __init__(self, type, name, age):
        self.type = type
        self.name = name
        self.age = age

    def __str__(self):
        return f"Animal [type: {self.type}, name: {self.name}, age: {self.age}]"
    
    def getName(self):
        return self.name
    
    def setName(self, name):
        self.name = name
    
    def voice(self):
        return f"{self.name} voice"

    def eat(self):
        return f"{self.name} eating"