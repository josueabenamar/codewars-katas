def cakes(recipe, available):
	num = []
	for i in recipe:
		if i not in available:
			return 0
		num.append(available[i] / recipe[i])
	return min(num)

recipe = {"flour": 500, "sugar": 200, "eggs": 1}
available = {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}
print(cakes(recipe, available)) #2

recipe = {"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}
available = {"sugar": 500, "flour": 2000, "milk": 2000}
print(cakes(recipe, available)) #0
