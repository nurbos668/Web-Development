n = int(input())
arr = []
cnt = 0

for _ in range(n):
    arr.append(int(input()))

for i in range(1, n - 1):
    if arr[i - 1] < arr[i] > arr[i + 1]:
        cnt += 1

print(cnt)