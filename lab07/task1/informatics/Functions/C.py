def xor(x, y):
    return (x or y) and not(x and y)

print(xor(int(input()), int(input())))
