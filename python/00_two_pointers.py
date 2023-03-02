# Two pointers: one input, opposite ends
def fn(arr):
    left = ans = 0
    right = len(arr) - 1

    while left < right:
        # do some logic here with left and right
        if "CONDITION":
            left += 1
        else:
            right -= 1
    
    return ans



# Two pointers: two inputs, exhaust both
def fn2(arr1, arr2):
    i = j = ans = 0

    while i < len(arr1) and j < len(arr2):
        # do some logic here
        if "CONDITION":
            i += 1
        else:
            j += 1
    
    while i < len(arr1):
        # do logic
        i += 1
    
    while j < len(arr2):
        # do logic
        j += 1
    
    return ans
