serve:
	python -m mkdocs serve

install:
	python -m pip install --upgrade pip
	python -m pip install -r ./requirements.txt

build:
	python -m mkdocs build
