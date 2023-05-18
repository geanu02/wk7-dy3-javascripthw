# Clockwise Spiral Traversal
# You are given a square matrix (n x n 2D array). Your task is to return the elements of this array starting from the outermost elements and moving towards the center in a clockwise spiral pattern.

# For example, consider the following 3x3 matrix:

# matrix =[[1,2,3],
#          [4,5,6],
#          [7,8,9]]
# Your function should return: [1,2,3,6,9,8,7,4,5]

# This is because you start from the top left (1), move right to the end of the row, move down to the bottom of the current column, move left to the start of the row and then move up to the top of the current column. Now, you're at the start of the second row from which you repeat the same pattern until you have traversed the whole matrix.

# Another example for your understanding:

# matrix =[[1,2,3],
#          [8,9,4],
#          [7,6,5]]
# Your function should return: [1,2,3,4,5,6,7,8,9]

# Note: The aim is not to sort the elements from the lowest to the highest value, but to follow the spiral pattern.

# Also note: An empty matrix is represented as an empty array inside an array, i.e., [[]].

matrix = [[1,2,3],
         [4,5,6],
         [7,8,9]]
# Your function should return: [1,2,3,6,9,8,7,4,5]

def return_spiral(_m):
    answer = _m[0]
    for arr in _m[1::]:
        answer.append(arr[-1])
    for n in _m[2][-2::-1]:
        answer.append(n)
    for n in _m[1][::1]:
        answer.append(n)
    return answer

print(return_spiral(matrix))
