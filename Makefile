BUILD = build/tests.js
T = ./node_modules/duo-test/bin/duo-test
TESTS = $(filter-out test/tests.js, $(wildcard test/*.js))
SRC = $(wildcard index.js lib/*.js)

$(BUILD): test/tests.js
	duo -u duo-jsx --root . --type js < $< > $@

test/tests.js: $(SRC) $(TESTS)
	@echo '// GENERATED FILE: DO NOT EDIT!' > $@
	@$(foreach test, $(TESTS), echo 'require("./$(test)");' >> $@;)

test: test-phantomjs

test-phantomjs: $(BUILD)
	@$(T) phantomjs --build build/tests.js --reporter spec

test-browser: $(BUILD)
	@$(T) browser --build build/tests.js

test-saucelabs: $(BUILD)
	@$(T) saucelabs --build build/tests.js -b safari:6..7

clean:
	rm -rf test/tests.js build/** components

build:
	NODE_ENV=production node app.js

dev:
	NODE_ENV=development node app.js

.PHONY: clean test test-phantomjs test-browser build dev
