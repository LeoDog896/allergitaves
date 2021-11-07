enum AllerginType {
	PALM_OIL = "Palm Oil",
	SOY = "Soy",
	GLUTEN = "Gluten",
	DAIRY = "Dairy",
	EGGS = "Eggs",
	SHELLFISH = "Shellfish",
	NUTS = "Nuts",
}

interface Allergin {
	name: string,
	types: AllerginType[],
	information?: string,
	more_information?: string
}

export const allergins: Allergin[] = [
	{
		name: "Glycerin",
		types: [AllerginType.PALM_OIL],
	}
]