n = int(input())
current = 1

if n <= 0:
    print("NO")
else:
    while n > current:
        current *= 2

if current == n:
    print("YES")
else:
    print("NO")