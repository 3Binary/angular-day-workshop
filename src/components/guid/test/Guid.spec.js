describe('Guid', function () {
	describe('Guid factory', function () {
		beforeEach(module('app'));
		
		beforeEach(inject(function (Guid) {
			this.Guid = Guid;
		}));
		
		it('creates unique Guids', function () {
			var guid1 = this.Guid();
			var guid2 = this.Guid();
			
			expect(guid1).not.toEqual(guid2);
		});
	});
});