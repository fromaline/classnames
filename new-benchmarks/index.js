const cases = require('./cases')
const functions = require('./functions')

const AMOUNT_OF_OPERATIONS = 1_000_000

const performanceData = new Array(cases.length).fill(0)

cases.forEach(({ description, args, expected }, caseIndex) => {
	performanceData[caseIndex] = {
		caseDescription: description,
		functions: new Array(functions.length).fill(0),
		data: new Array(functions.length).fill(0)
	}

	functions.forEach(({ f_description, f }, functionIndex) => {
		performanceData[caseIndex].functions[functionIndex] = {
			functionDescription: f_description
		}

		const t0 = performance.now()

		for (let k = 0; k < AMOUNT_OF_OPERATIONS; k++) {
			const result = f(args)

			if (expected !== result) {
				throw new Error(`performance case "${description}" failed`)
			}
		}

		const t1 = performance.now()

		performanceData[caseIndex].data[functionIndex] = t1 - t0
	})
})

performanceData.forEach(({caseDescription, functions, data}, index) => {
	const minDuration = Math.min(...data)
	const maxDuration = Math.max(...data)
	let fastest = ''

	console.log(`Case ${caseDescription}:`)

	functions.forEach(({functionDescription}, functionIndex) => {
		const durationMs = data[functionIndex]
		const durationSec = durationMs / 1000
		const opearionsRate = (AMOUNT_OF_OPERATIONS / durationSec).toLocaleString("en-US")

		if (durationMs === minDuration) {
			fastest = functionDescription
		}

		console.log(`- ${functionDescription} is ${opearionsRate} op/sec`)
	})

	const difference = (maxDuration - minDuration) * 100 / maxDuration

	console.log(`Conclusion: ${fastest} is faster by ${difference.toFixed(2)}%`)

	if (index !== performanceData.length - 1) {
		console.log('')
	}
})
