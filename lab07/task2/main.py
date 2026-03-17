from animal import Animal
from cat import Cat
from dog import Dog

def main():
    # Создаем список объектов разных классов (Инстанцирование)
    animals = [
        Animal("Universal", "Generic Critter", 5),
        Cat("Mammal", "Barsik", 3, "British Shorthair"),
        Dog("Mammal", "Rex", 5, "German Shepherd"),
        Cat("Mammal", "Murka", 2, "Sphynx")
    ]

    print("=== Демонстрация __str__ и итерации ===")
    for a in animals:
        # Сработает твой метод __str__
        print(a)

    print("\n=== Демонстрация полиморфизма (метод eat) ===")
    for a in animals:
        # Объекты разные, но метод называем одинаково
        # У кошек и собак сработает переопределенный (overridden) метод
        print(f"{a.getName()}: {a.eat()}")

    print("\n=== Демонстрация метода voice ===")
    for a in animals:
        print(a.voice())

if __name__ == "__main__":
    main()
    
