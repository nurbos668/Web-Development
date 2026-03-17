n = int(input())

current = 0
while not(2 ** current >= n):
    current += 1

print(current)