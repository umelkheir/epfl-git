first_input = input("Enter a number: ")
second_input = input("Enter a second number: ")
result = float(first_input) - float(second_input)

if result > 10:
    print("The result is greater than 10")
elif result > 0:
    print("The result is greater than 0 but not than 10")
elif result == 0:
    print("The result is zero")
else: 
    print("The result is a negative number")

print("You can try again")