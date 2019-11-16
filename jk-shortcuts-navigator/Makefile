NAME=background options page_action sites

# siteitem

COFFEE=$(addsuffix .coffee, $(NAME))
JS=$(addsuffix .js, $(NAME))

all:
	tr -d '\n' < siteitem2.js > siteitem2.nonewline.js
	coffee --compile *.coffee

clean:
	rm -f $(JS) siteitem2.nonewline.js
