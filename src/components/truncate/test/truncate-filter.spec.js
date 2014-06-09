describe('truncate', function () {
	describe('truncate filter', function () {
		beforeEach(module('app'));
		
		beforeEach(inject(function (truncateFilter) {
			this.truncateFilter = truncateFilter;
		}));
		
		it('truncates text', function () {
			var text = 'Angular';
			var characters = 3;
			var filtered = this.truncateFilter(text, characters);
			var expected = 'Ang'
			
			expect(filtered).toEqual(expected);
			expect(filtered).not.toEqual(text);
		});
		
		it('truncates text with ellipsis', function () {
			var text = 'Angular';
			var characters = 3;
			var filtered = this.truncateFilter(text, characters, true);
			var expected = 'Ang...'
			
			expect(filtered).toEqual(expected);
			expect(filtered).not.toEqual(text);
		});
		
		it('doesn\'t truncate if text and characters are the same length', function () {
			var text = 'Angular';
			var characters = 7;
			var filtered = this.truncateFilter(text, characters);
			
			expect(filtered).toEqual(text);
		});
		
		it('doesn\'t show ellipsis if text length = characters', function () {
			var text = 'Angular';
			var characters = 7;
			var filtered = this.truncateFilter(text, characters, true);
			
			expect(filtered).toEqual(text);
		});
		
		it('doesn\'t show ellipsis if text length < characters', function () {
			var text = 'Angular';
			var characters = 8;
			var filtered = this.truncateFilter(text, characters, true);
			
			expect(filtered).toEqual(text);
		});
	});
});