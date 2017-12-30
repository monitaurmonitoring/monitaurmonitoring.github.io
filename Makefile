trite-cats.surge.sh: clean public
	surge -d `cat CNAME` public

public:
	gatsby build

clean:
	rm -Rf public
