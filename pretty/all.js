let headLinks = `
	<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@4"></script>
	<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/@searchkit/instantsearch-client@latest"></script>
	<script src="https://cdn.jsdelivr.net/npm/searchkit@latest"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@8.0.0/themes/reset.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nasuyun/static@latest/pretty/theme.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nasuyun/static@latest/pretty/app.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nasuyun/static@latest/pretty/app.mobile.css" />
   `;
document.querySelector('#html-head').insertAdjacentHTML('beforeend', headLinks);