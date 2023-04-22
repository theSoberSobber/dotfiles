/*--------------------------------------------------------------
>>> ACTIVE FEATURES
--------------------------------------------------------------*/

extension.skeleton.header.sectionEnd.menu.on.click.activeFeatures = {
	component: 'button',
	on: {
		click: {
			component: 'section',
			variant: 'card',
			on: {
				render: function () {
					var component = this;

					satus.search('', extension.skeleton, function (features) {
						var skeleton = {};

						for (var key in features) {
							var feature = features[key],
								default_value = feature.value,
								value = satus.storage.get(feature.storage || key),
								parent_object = feature;

							if (!satus.isset(default_value)) {
								if (feature.component === 'select') {
									if (feature.options && feature.options[0]) {
										default_value = feature.options[0].value;
									}
								} else {
									default_value = false;
								}
							}

							if (satus.isset(value) && value != default_value) {
								while (
									parent_object.parentObject &&
									!parent_object.parentObject.category
								) {
									parent_object = parent_object.parentObject;
								}

								if (parent_object.parentObject) {
									var category = parent_object.parentObject.label.text;

									parent_object = feature;

									while (
										parent_object.parentObject &&
										parent_object.parentObject.component !== 'button'
									) {
										parent_object = parent_object.parentObject;
									}

									parent_object = parent_object.parentObject;

									if (parent_object) {
										if (parent_object.label) {
											var subcategory = parent_object.label.text;
										} else {
											var subcategory = parent_object.text;
										}

										if (category === subcategory) {
											var text = satus.locale.get(category);
										} else {
											var text = satus.locale.get(category) + ' > ' + satus.locale.get(subcategory);
										}

										if (!skeleton[category + subcategory]) {
											skeleton[category + subcategory] = {
												component: 'section',
												variant: 'card',
												title: text
											};
										}

										skeleton[category + subcategory][key] = feature;
									} else {
										if (!skeleton[category]) {
											skeleton[category] = {
												component: 'section',
												variant: 'card',
												title: category
											};
										}

										skeleton[category][key] = feature;
									}
								}
							}
						}

						if (Object.keys(skeleton).length === 0) {
							satus.render({
								component: 'span',
								text: 'empty'
							}, component);
						} else {
							satus.render(skeleton, component.parentNode);

							component.remove();
						}
					});
				}
			}
		}
	},

	svg: {
		component: 'svg',
		attr: {
			'viewBox': '0 0 24 24',
			'fill': 'none',
			'stroke-width': '1.75'
		},

		path1: {
			component: 'path',
			attr: {
				'd': 'M22 11.08V12a10 10 0 11-5.93-9.14'
			}
		},
		path2: {
			component: 'path',
			attr: {
				'd': 'M22 4L12 14.01l-3-3'
			}
		}
	},
	label: {
		component: 'span',
		text: 'activeFeatures'
	}
};