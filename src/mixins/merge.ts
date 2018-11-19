import Vue from 'vue';

import mergeFn from 'deepmerge';

const merge = {
	computed: {
		merged(this: any): object {
			// Don't do anything without $theme
			if (this.$theme) {
				const componentTheme = this.$theme.config.components[this.name];

				// Load the 'default' theme (if any)
				let merged = componentTheme && componentTheme.default ? {...componentTheme.default} : {};

				if (componentTheme) {
					// Load per-prop theme
					Object.keys(componentTheme).map((prop: any) => {
						if (prop !== 'default') {
							let extend = {};

							// If the custom prop depends on another one
							if (prop in this.$attrs && componentTheme[prop].extends) {
								extend = componentTheme[componentTheme[prop].extends] || {};
							}

							const propTheme = prop in this.$attrs ? componentTheme[prop] : {};

							// Merge defaults, extended, prop and manually applied themes
							merged = mergeFn.all([merged, extend, propTheme, ...this.$attrs]);
						}
					});
				}

				return merged;
			}

			// By default return $attrs
			return {...this.$attrs};
		}
	}
};

export default merge;