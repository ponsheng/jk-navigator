NAME=background options page_action sites

# siteitem

COFFEE=$(addsuffix .coffee, $(NAME))
JS=$(addsuffix .js, $(NAME))

all:
	coffee --compile *.coffee

clean:
	rm -f $(JS)
