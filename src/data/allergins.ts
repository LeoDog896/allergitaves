import { AllerginType, Allergin } from "./allergin_type"
import { palm_oil_data } from './600_palm_oil'

export const allergins: Allergin[] = [
	{
		name: "Glycerin",
		types: [AllerginType.PALM_OIL, AllerginType.COCONUT, AllerginType.SOY],
	},
	...palm_oil_data
].sort()