import Hero from "../sections/Hero.astro";
import Title from "../sections/Title.astro";

<Fragment>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<meta name="generator" content={Astro.generator} />
<link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
<title>Nation Hack</title>
</head>
<body>
<Hero />
<Title />
<Tracks />
</body>
{/** styles */}
<style lang="scss">{`
		body {
			@apply  bg-black text-white sm:px-24 px-10;
		}
	`}</style>
</html>

</Fragment>;