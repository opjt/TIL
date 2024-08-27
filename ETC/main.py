text = "()"
stack = []
for char in text:
    if(char == '('):
        stack.append(0)
    if(char == ')'):
        if(stack[-1] == 0):
            stack.pop[-1]
        elif()