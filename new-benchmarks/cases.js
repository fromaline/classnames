module.exports = [
	{
		description: 'strings',
		args: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
		expected: 'one two three four five six seven eight nine ten'
	},
	{
		description: 'object',
		args: [{one: true, two: 'true', three: '', four: true, five: false, six: true, seven: 'false', eight: false, nine: 0, ten: true}],
		expected: 'one two four six seven ten'
	},
	{
		description: 'strings & objects',
		args: ['one', {two: true, three: false, four: true}, 'five', {six: false, seven: false}, 'eight', {nine: true, ten: false}],
		expected: 'one two four five eight nine'
	},
	{
		description: 'arrays',
		args: [['one', 'two'], ['three'], ['four', ['five']], [{six: true}, {seven: false}]],
		expected: 'one two three four five six'
	},
	{
		description: 'strings & objects & arrays',
		args: ['one', ['two', 'three'], {four: false, five: true}, ['six', {seven: false, eight: true}], 'nine', {}],
		expected: 'one two three five six eight nine'
	},
];
