
name = "Ramon";
print(name);

print("Hello World");


name1 = "haryindey";
print(name1.capitalize());
print(name1.upper());
print(name1.endswith("y"));
print(name1 + " " + name);
print(name1.index("y"));


age = 18;

if(age >= 18):
    print("You can vote");
else:
    print("You cannot Vote");

grade = 35;

if(grade <= 35):
    print("You Scored an F" + " " + "Fail !!!");
elif(grade > 35 and grade <= 40):
    print("You Scored an E" + " " + "Pass !!!");
elif(grade > 40 and grade <= 55):
    print("You Scored a D" + " " + "Average !!!");
elif(grade > 55 and grade <= 70):
    print("You Scored a C" + " " + "Credit !!!");
elif(grade > 70 and grade <= 79):
    print("You Scored a B" + " " + "Excellent !!!");
elif(grade > 79 and grade <= 100):
    print("You Scored an A" + " " + "Distinction !!!");
else:
    print("Invalid Grade");


