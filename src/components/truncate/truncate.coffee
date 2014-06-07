class Truncate extends Filter
	constructor: ->
		return (text, characters) ->
			truncated = text.substr 0, characters

			"#{truncated}..."