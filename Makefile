show:
	travis status

d:
	gatsby develop

public:
	gatsby build

clean:
	rm -Rf public

ci: clean public
