# tidev.io Website

## Dev

	sudo apt-get install openjdk-8-jdk
	pnpm i
	pnpm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

One time:

	git remote add dokku dokku@tisdk.com:tidev.io

Then to release:

	git push dokku main
