from animal import Animal

class Dog(Animal):
    def __init__(self, type, name, age, breed):
        super().__init__(type, name, age)
        self.breed = breed

    def eat(self):
        return f"{self.name} is eating"
    