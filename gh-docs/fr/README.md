<p align="center">
	<a
		href="https://assurance-maladie-digital.github.io/vue-dot/"
		target="_blank"
		rel="noopener noreferrer"
	>
		<img
			width="280"
			src="./docs/.vuepress/public/vue.js.svg"
			alt="VueDot"
		>
	</a>
</p>

<h1 align="center">CNAM – Vue dot</h1>

<p align="center">Bibliothèque de composants officielle de la CNAM.</p>

<p align="center">
	<a href="https://www.npmjs.com/package/@cnamts/vue-dot">
		<img
			src="https://img.shields.io/npm/v/@cnamts/vue-dot.svg?style=flat-square"
			alt="Version NPM"
		>
	</a>
	<a href="https://www.npmjs.com/package/@cnamts/vue-dot">
		<img
			src="https://img.shields.io/npm/dw/@cnamts/vue-dot.svg?style=flat-square"
			alt="Téléchargements NPM"
		>
	</a>
	<a
		href="https://github.com/assurance-maladie-digital/vue-dot/blob/master/LICENSE">
		<img
			src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"
			alt="Licence"
		>
	</a>
	<a
		class="badge-align"
		href="https://www.codacy.com/app/Deraw-/vue-dot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=assurance-maladie-digital/vue-dot&amp;utm_campaign=Badge_Grade"
	>
		<img
			src="https://api.codacy.com/project/badge/Grade/3d671fb222b04201997aae91c49d510d"
			alt="Badge Codacy"
		>
	</a>
</p>

## Aussi simple que 1, 2, 3

### Installer

``` bash
yarn add @cnamts/vue-dot # OU npm install @cnamts/vue-dot
```

### Charger

```ts
// main.ts
import Vue from 'vue';
import VueDot from '@cnamts/vue-dot';

Vue.use(VueDot);

new Vue({
    render: (h) => h(App)
}).$mount('#app');
```

### Et voilà ! 🎉

``` bash
# lancer votre projet
yarn serve # OU votre propre commande
```
Cela va charger automatiquement tous les composants et les directives de la librairie et les rendre disponnibles globalement.

## [Documentation](https://assurance-maladie-digital.github.io/vue-dot/)

Voir la [documentation](https://assurance-maladie-digital.github.io/vue-dot/).

## License

VueDot est sous [licence MIT](./LICENSE).
