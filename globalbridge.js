/*! For license information please see global-bridge-core.bundle.js.LICENSE.txt */
(() => {
  var e, r, t = {
    5757: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => n });
      const n = {
        "color.text": "--ds-text",
        "color.text.accent.lime": "--ds-text-accent-lime",
        "color.text.accent.lime.bolder": "--ds-text-accent-lime-bolder",
        "color.text.accent.red": "--ds-text-accent-red",
        "color.text.accent.red.bolder": "--ds-text-accent-red-bolder",
        "color.text.accent.orange": "--ds-text-accent-orange",
        "color.text.accent.orange.bolder": "--ds-text-accent-orange-bolder",
        "color.text.accent.yellow": "--ds-text-accent-yellow",
        "color.text.accent.yellow.bolder": "--ds-text-accent-yellow-bolder",
        "color.text.accent.green": "--ds-text-accent-green",
        "color.text.accent.green.bolder": "--ds-text-accent-green-bolder",
        "color.text.accent.teal": "--ds-text-accent-teal",
        "color.text.accent.teal.bolder": "--ds-text-accent-teal-bolder",
        "color.text.accent.blue": "--ds-text-accent-blue",
        "color.text.accent.blue.bolder": "--ds-text-accent-blue-bolder",
        "color.text.accent.purple": "--ds-text-accent-purple",
        "color.text.accent.purple.bolder": "--ds-text-accent-purple-bolder",
        "color.text.accent.magenta": "--ds-text-accent-magenta",
        "color.text.accent.magenta.bolder": "--ds-text-accent-magenta-bolder",
        "color.text.accent.gray": "--ds-text-accent-gray",
        "color.text.accent.gray.bolder": "--ds-text-accent-gray-bolder",
        "color.text.disabled": "--ds-text-disabled",
        "color.text.inverse": "--ds-text-inverse",
        "color.text.selected": "--ds-text-selected",
        "color.text.brand": "--ds-text-brand",
        "color.text.danger": "--ds-text-danger",
        "color.text.warning": "--ds-text-warning",
        "color.text.warning.inverse": "--ds-text-warning-inverse",
        "color.text.success": "--ds-text-success",
        "color.text.discovery": "--ds-text-discovery",
        "color.text.information": "--ds-text-information",
        "color.text.subtlest": "--ds-text-subtlest",
        "color.text.subtle": "--ds-text-subtle",
        "color.link": "--ds-link",
        "color.link.pressed": "--ds-link-pressed",
        "color.link.visited": "--ds-link-visited",
        "color.link.visited.pressed": "--ds-link-visited-pressed",
        "color.icon": "--ds-icon",
        "color.icon.accent.lime": "--ds-icon-accent-lime",
        "color.icon.accent.red": "--ds-icon-accent-red",
        "color.icon.accent.orange": "--ds-icon-accent-orange",
        "color.icon.accent.yellow": "--ds-icon-accent-yellow",
        "color.icon.accent.green": "--ds-icon-accent-green",
        "color.icon.accent.teal": "--ds-icon-accent-teal",
        "color.icon.accent.blue": "--ds-icon-accent-blue",
        "color.icon.accent.purple": "--ds-icon-accent-purple",
        "color.icon.accent.magenta": "--ds-icon-accent-magenta",
        "color.icon.accent.gray": "--ds-icon-accent-gray",
        "color.icon.disabled": "--ds-icon-disabled",
        "color.icon.inverse": "--ds-icon-inverse",
        "color.icon.selected": "--ds-icon-selected",
        "color.icon.brand": "--ds-icon-brand",
        "color.icon.danger": "--ds-icon-danger",
        "color.icon.warning": "--ds-icon-warning",
        "color.icon.warning.inverse": "--ds-icon-warning-inverse",
        "color.icon.success": "--ds-icon-success",
        "color.icon.discovery": "--ds-icon-discovery",
        "color.icon.information": "--ds-icon-information",
        "color.icon.subtlest": "--ds-icon-subtlest",
        "color.icon.subtle": "--ds-icon-subtle",
        "color.border": "--ds-border",
        "color.border.accent.lime": "--ds-border-accent-lime",
        "color.border.accent.red": "--ds-border-accent-red",
        "color.border.accent.orange": "--ds-border-accent-orange",
        "color.border.accent.yellow": "--ds-border-accent-yellow",
        "color.border.accent.green": "--ds-border-accent-green",
        "color.border.accent.teal": "--ds-border-accent-teal",
        "color.border.accent.blue": "--ds-border-accent-blue",
        "color.border.accent.purple": "--ds-border-accent-purple",
        "color.border.accent.magenta": "--ds-border-accent-magenta",
        "color.border.accent.gray": "--ds-border-accent-gray",
        "color.border.disabled": "--ds-border-disabled",
        "color.border.focused": "--ds-border-focused",
        "color.border.input": "--ds-border-input",
        "color.border.inverse": "--ds-border-inverse",
        "color.border.selected": "--ds-border-selected",
        "color.border.brand": "--ds-border-brand",
        "color.border.danger": "--ds-border-danger",
        "color.border.warning": "--ds-border-warning",
        "color.border.success": "--ds-border-success",
        "color.border.discovery": "--ds-border-discovery",
        "color.border.information": "--ds-border-information",
        "color.border.bold": "--ds-border-bold",
        "color.background.accent.lime.subtlest": "--ds-background-accent-lime-subtlest",
        "color.background.accent.lime.subtlest.hovered": "--ds-background-accent-lime-subtlest-hovered",
        "color.background.accent.lime.subtlest.pressed": "--ds-background-accent-lime-subtlest-pressed",
        "color.background.accent.lime.subtler": "--ds-background-accent-lime-subtler",
        "color.background.accent.lime.subtler.hovered": "--ds-background-accent-lime-subtler-hovered",
        "color.background.accent.lime.subtler.pressed": "--ds-background-accent-lime-subtler-pressed",
        "color.background.accent.lime.subtle": "--ds-background-accent-lime-subtle",
        "color.background.accent.lime.subtle.hovered": "--ds-background-accent-lime-subtle-hovered",
        "color.background.accent.lime.subtle.pressed": "--ds-background-accent-lime-subtle-pressed",
        "color.background.accent.lime.bolder": "--ds-background-accent-lime-bolder",
        "color.background.accent.lime.bolder.hovered": "--ds-background-accent-lime-bolder-hovered",
        "color.background.accent.lime.bolder.pressed": "--ds-background-accent-lime-bolder-pressed",
        "color.background.accent.red.subtlest": "--ds-background-accent-red-subtlest",
        "color.background.accent.red.subtlest.hovered": "--ds-background-accent-red-subtlest-hovered",
        "color.background.accent.red.subtlest.pressed": "--ds-background-accent-red-subtlest-pressed",
        "color.background.accent.red.subtler": "--ds-background-accent-red-subtler",
        "color.background.accent.red.subtler.hovered": "--ds-background-accent-red-subtler-hovered",
        "color.background.accent.red.subtler.pressed": "--ds-background-accent-red-subtler-pressed",
        "color.background.accent.red.subtle": "--ds-background-accent-red-subtle",
        "color.background.accent.red.subtle.hovered": "--ds-background-accent-red-subtle-hovered",
        "color.background.accent.red.subtle.pressed": "--ds-background-accent-red-subtle-pressed",
        "color.background.accent.red.bolder": "--ds-background-accent-red-bolder",
        "color.background.accent.red.bolder.hovered": "--ds-background-accent-red-bolder-hovered",
        "color.background.accent.red.bolder.pressed": "--ds-background-accent-red-bolder-pressed",
        "color.background.accent.orange.subtlest": "--ds-background-accent-orange-subtlest",
        "color.background.accent.orange.subtlest.hovered": "--ds-background-accent-orange-subtlest-hovered",
        "color.background.accent.orange.subtlest.pressed": "--ds-background-accent-orange-subtlest-pressed",
        "color.background.accent.orange.subtler": "--ds-background-accent-orange-subtler",
        "color.background.accent.orange.subtler.hovered": "--ds-background-accent-orange-subtler-hovered",
        "color.background.accent.orange.subtler.pressed": "--ds-background-accent-orange-subtler-pressed",
        "color.background.accent.orange.subtle": "--ds-background-accent-orange-subtle",
        "color.background.accent.orange.subtle.hovered": "--ds-background-accent-orange-subtle-hovered",
        "color.background.accent.orange.subtle.pressed": "--ds-background-accent-orange-subtle-pressed",
        "color.background.accent.orange.bolder": "--ds-background-accent-orange-bolder",
        "color.background.accent.orange.bolder.hovered": "--ds-background-accent-orange-bolder-hovered",
        "color.background.accent.orange.bolder.pressed": "--ds-background-accent-orange-bolder-pressed",
        "color.background.accent.yellow.subtlest": "--ds-background-accent-yellow-subtlest",
        "color.background.accent.yellow.subtlest.hovered": "--ds-background-accent-yellow-subtlest-hovered",
        "color.background.accent.yellow.subtlest.pressed": "--ds-background-accent-yellow-subtlest-pressed",
        "color.background.accent.yellow.subtler": "--ds-background-accent-yellow-subtler",
        "color.background.accent.yellow.subtler.hovered": "--ds-background-accent-yellow-subtler-hovered",
        "color.background.accent.yellow.subtler.pressed": "--ds-background-accent-yellow-subtler-pressed",
        "color.background.accent.yellow.subtle": "--ds-background-accent-yellow-subtle",
        "color.background.accent.yellow.subtle.hovered": "--ds-background-accent-yellow-subtle-hovered",
        "color.background.accent.yellow.subtle.pressed": "--ds-background-accent-yellow-subtle-pressed",
        "color.background.accent.yellow.bolder": "--ds-background-accent-yellow-bolder",
        "color.background.accent.yellow.bolder.hovered": "--ds-background-accent-yellow-bolder-hovered",
        "color.background.accent.yellow.bolder.pressed": "--ds-background-accent-yellow-bolder-pressed",
        "color.background.accent.green.subtlest": "--ds-background-accent-green-subtlest",
        "color.background.accent.green.subtlest.hovered": "--ds-background-accent-green-subtlest-hovered",
        "color.background.accent.green.subtlest.pressed": "--ds-background-accent-green-subtlest-pressed",
        "color.background.accent.green.subtler": "--ds-background-accent-green-subtler",
        "color.background.accent.green.subtler.hovered": "--ds-background-accent-green-subtler-hovered",
        "color.background.accent.green.subtler.pressed": "--ds-background-accent-green-subtler-pressed",
        "color.background.accent.green.subtle": "--ds-background-accent-green-subtle",
        "color.background.accent.green.subtle.hovered": "--ds-background-accent-green-subtle-hovered",
        "color.background.accent.green.subtle.pressed": "--ds-background-accent-green-subtle-pressed",
        "color.background.accent.green.bolder": "--ds-background-accent-green-bolder",
        "color.background.accent.green.bolder.hovered": "--ds-background-accent-green-bolder-hovered",
        "color.background.accent.green.bolder.pressed": "--ds-background-accent-green-bolder-pressed",
        "color.background.accent.teal.subtlest": "--ds-background-accent-teal-subtlest",
        "color.background.accent.teal.subtlest.hovered": "--ds-background-accent-teal-subtlest-hovered",
        "color.background.accent.teal.subtlest.pressed": "--ds-background-accent-teal-subtlest-pressed",
        "color.background.accent.teal.subtler": "--ds-background-accent-teal-subtler",
        "color.background.accent.teal.subtler.hovered": "--ds-background-accent-teal-subtler-hovered",
        "color.background.accent.teal.subtler.pressed": "--ds-background-accent-teal-subtler-pressed",
        "color.background.accent.teal.subtle": "--ds-background-accent-teal-subtle",
        "color.background.accent.teal.subtle.hovered": "--ds-background-accent-teal-subtle-hovered",
        "color.background.accent.teal.subtle.pressed": "--ds-background-accent-teal-subtle-pressed",
        "color.background.accent.teal.bolder": "--ds-background-accent-teal-bolder",
        "color.background.accent.teal.bolder.hovered": "--ds-background-accent-teal-bolder-hovered",
        "color.background.accent.teal.bolder.pressed": "--ds-background-accent-teal-bolder-pressed",
        "color.background.accent.blue.subtlest": "--ds-background-accent-blue-subtlest",
        "color.background.accent.blue.subtlest.hovered": "--ds-background-accent-blue-subtlest-hovered",
        "color.background.accent.blue.subtlest.pressed": "--ds-background-accent-blue-subtlest-pressed",
        "color.background.accent.blue.subtler": "--ds-background-accent-blue-subtler",
        "color.background.accent.blue.subtler.hovered": "--ds-background-accent-blue-subtler-hovered",
        "color.background.accent.blue.subtler.pressed": "--ds-background-accent-blue-subtler-pressed",
        "color.background.accent.blue.subtle": "--ds-background-accent-blue-subtle",
        "color.background.accent.blue.subtle.hovered": "--ds-background-accent-blue-subtle-hovered",
        "color.background.accent.blue.subtle.pressed": "--ds-background-accent-blue-subtle-pressed",
        "color.background.accent.blue.bolder": "--ds-background-accent-blue-bolder",
        "color.background.accent.blue.bolder.hovered": "--ds-background-accent-blue-bolder-hovered",
        "color.background.accent.blue.bolder.pressed": "--ds-background-accent-blue-bolder-pressed",
        "color.background.accent.purple.subtlest": "--ds-background-accent-purple-subtlest",
        "color.background.accent.purple.subtlest.hovered": "--ds-background-accent-purple-subtlest-hovered",
        "color.background.accent.purple.subtlest.pressed": "--ds-background-accent-purple-subtlest-pressed",
        "color.background.accent.purple.subtler": "--ds-background-accent-purple-subtler",
        "color.background.accent.purple.subtler.hovered": "--ds-background-accent-purple-subtler-hovered",
        "color.background.accent.purple.subtler.pressed": "--ds-background-accent-purple-subtler-pressed",
        "color.background.accent.purple.subtle": "--ds-background-accent-purple-subtle",
        "color.background.accent.purple.subtle.hovered": "--ds-background-accent-purple-subtle-hovered",
        "color.background.accent.purple.subtle.pressed": "--ds-background-accent-purple-subtle-pressed",
        "color.background.accent.purple.bolder": "--ds-background-accent-purple-bolder",
        "color.background.accent.purple.bolder.hovered": "--ds-background-accent-purple-bolder-hovered",
        "color.background.accent.purple.bolder.pressed": "--ds-background-accent-purple-bolder-pressed",
        "color.background.accent.magenta.subtlest": "--ds-background-accent-magenta-subtlest",
        "color.background.accent.magenta.subtlest.hovered": "--ds-background-accent-magenta-subtlest-hovered",
        "color.background.accent.magenta.subtlest.pressed": "--ds-background-accent-magenta-subtlest-pressed",
        "color.background.accent.magenta.subtler": "--ds-background-accent-magenta-subtler",
        "color.background.accent.magenta.subtler.hovered": "--ds-background-accent-magenta-subtler-hovered",
        "color.background.accent.magenta.subtler.pressed": "--ds-background-accent-magenta-subtler-pressed",
        "color.background.accent.magenta.subtle": "--ds-background-accent-magenta-subtle",
        "color.background.accent.magenta.subtle.hovered": "--ds-background-accent-magenta-subtle-hovered",
        "color.background.accent.magenta.subtle.pressed": "--ds-background-accent-magenta-subtle-pressed",
        "color.background.accent.magenta.bolder": "--ds-background-accent-magenta-bolder",
        "color.background.accent.magenta.bolder.hovered": "--ds-background-accent-magenta-bolder-hovered",
        "color.background.accent.magenta.bolder.pressed": "--ds-background-accent-magenta-bolder-pressed",
        "color.background.accent.gray.subtlest": "--ds-background-accent-gray-subtlest",
        "color.background.accent.gray.subtlest.hovered": "--ds-background-accent-gray-subtlest-hovered",
        "color.background.accent.gray.subtlest.pressed": "--ds-background-accent-gray-subtlest-pressed",
        "color.background.accent.gray.subtler": "--ds-background-accent-gray-subtler",
        "color.background.accent.gray.subtler.hovered": "--ds-background-accent-gray-subtler-hovered",
        "color.background.accent.gray.subtler.pressed": "--ds-background-accent-gray-subtler-pressed",
        "color.background.accent.gray.subtle": "--ds-background-accent-gray-subtle",
        "color.background.accent.gray.subtle.hovered": "--ds-background-accent-gray-subtle-hovered",
        "color.background.accent.gray.subtle.pressed": "--ds-background-accent-gray-subtle-pressed",
        "color.background.accent.gray.bolder": "--ds-background-accent-gray-bolder",
        "color.background.accent.gray.bolder.hovered": "--ds-background-accent-gray-bolder-hovered",
        "color.background.accent.gray.bolder.pressed": "--ds-background-accent-gray-bolder-pressed",
        "color.background.disabled": "--ds-background-disabled",
        "color.background.input": "--ds-background-input",
        "color.background.input.hovered": "--ds-background-input-hovered",
        "color.background.input.pressed": "--ds-background-input-pressed",
        "color.background.inverse.subtle": "--ds-background-inverse-subtle",
        "color.background.inverse.subtle.hovered": "--ds-background-inverse-subtle-hovered",
        "color.background.inverse.subtle.pressed": "--ds-background-inverse-subtle-pressed",
        "color.background.neutral": "--ds-background-neutral",
        "color.background.neutral.hovered": "--ds-background-neutral-hovered",
        "color.background.neutral.pressed": "--ds-background-neutral-pressed",
        "color.background.neutral.subtle": "--ds-background-neutral-subtle",
        "color.background.neutral.subtle.hovered": "--ds-background-neutral-subtle-hovered",
        "color.background.neutral.subtle.pressed": "--ds-background-neutral-subtle-pressed",
        "color.background.neutral.bold": "--ds-background-neutral-bold",
        "color.background.neutral.bold.hovered": "--ds-background-neutral-bold-hovered",
        "color.background.neutral.bold.pressed": "--ds-background-neutral-bold-pressed",
        "color.background.selected": "--ds-background-selected",
        "color.background.selected.hovered": "--ds-background-selected-hovered",
        "color.background.selected.pressed": "--ds-background-selected-pressed",
        "color.background.selected.bold": "--ds-background-selected-bold",
        "color.background.selected.bold.hovered": "--ds-background-selected-bold-hovered",
        "color.background.selected.bold.pressed": "--ds-background-selected-bold-pressed",
        "color.background.brand.subtlest": "--ds-background-brand-subtlest",
        "color.background.brand.subtlest.hovered": "--ds-background-brand-subtlest-hovered",
        "color.background.brand.subtlest.pressed": "--ds-background-brand-subtlest-pressed",
        "color.background.brand.bold": "--ds-background-brand-bold",
        "color.background.brand.bold.hovered": "--ds-background-brand-bold-hovered",
        "color.background.brand.bold.pressed": "--ds-background-brand-bold-pressed",
        "color.background.brand.boldest": "--ds-background-brand-boldest",
        "color.background.brand.boldest.hovered": "--ds-background-brand-boldest-hovered",
        "color.background.brand.boldest.pressed": "--ds-background-brand-boldest-pressed",
        "color.background.danger": "--ds-background-danger",
        "color.background.danger.hovered": "--ds-background-danger-hovered",
        "color.background.danger.pressed": "--ds-background-danger-pressed",
        "color.background.danger.bold": "--ds-background-danger-bold",
        "color.background.danger.bold.hovered": "--ds-background-danger-bold-hovered",
        "color.background.danger.bold.pressed": "--ds-background-danger-bold-pressed",
        "color.background.warning": "--ds-background-warning",
        "color.background.warning.hovered": "--ds-background-warning-hovered",
        "color.background.warning.pressed": "--ds-background-warning-pressed",
        "color.background.warning.bold": "--ds-background-warning-bold",
        "color.background.warning.bold.hovered": "--ds-background-warning-bold-hovered",
        "color.background.warning.bold.pressed": "--ds-background-warning-bold-pressed",
        "color.background.success": "--ds-background-success",
        "color.background.success.hovered": "--ds-background-success-hovered",
        "color.background.success.pressed": "--ds-background-success-pressed",
        "color.background.success.bold": "--ds-background-success-bold",
        "color.background.success.bold.hovered": "--ds-background-success-bold-hovered",
        "color.background.success.bold.pressed": "--ds-background-success-bold-pressed",
        "color.background.discovery": "--ds-background-discovery",
        "color.background.discovery.hovered": "--ds-background-discovery-hovered",
        "color.background.discovery.pressed": "--ds-background-discovery-pressed",
        "color.background.discovery.bold": "--ds-background-discovery-bold",
        "color.background.discovery.bold.hovered": "--ds-background-discovery-bold-hovered",
        "color.background.discovery.bold.pressed": "--ds-background-discovery-bold-pressed",
        "color.background.information": "--ds-background-information",
        "color.background.information.hovered": "--ds-background-information-hovered",
        "color.background.information.pressed": "--ds-background-information-pressed",
        "color.background.information.bold": "--ds-background-information-bold",
        "color.background.information.bold.hovered": "--ds-background-information-bold-hovered",
        "color.background.information.bold.pressed": "--ds-background-information-bold-pressed",
        "color.blanket": "--ds-blanket",
        "color.blanket.selected": "--ds-blanket-selected",
        "color.blanket.danger": "--ds-blanket-danger",
        "color.interaction.hovered": "--ds-interaction-hovered",
        "color.interaction.pressed": "--ds-interaction-pressed",
        "color.skeleton": "--ds-skeleton",
        "color.skeleton.subtle": "--ds-skeleton-subtle",
        "color.chart.categorical.1": "--ds-chart-categorical-1",
        "color.chart.categorical.1.hovered": "--ds-chart-categorical-1-hovered",
        "color.chart.categorical.2": "--ds-chart-categorical-2",
        "color.chart.categorical.2.hovered": "--ds-chart-categorical-2-hovered",
        "color.chart.categorical.3": "--ds-chart-categorical-3",
        "color.chart.categorical.3.hovered": "--ds-chart-categorical-3-hovered",
        "color.chart.categorical.4": "--ds-chart-categorical-4",
        "color.chart.categorical.4.hovered": "--ds-chart-categorical-4-hovered",
        "color.chart.categorical.5": "--ds-chart-categorical-5",
        "color.chart.categorical.5.hovered": "--ds-chart-categorical-5-hovered",
        "color.chart.categorical.6": "--ds-chart-categorical-6",
        "color.chart.categorical.6.hovered": "--ds-chart-categorical-6-hovered",
        "color.chart.categorical.7": "--ds-chart-categorical-7",
        "color.chart.categorical.7.hovered": "--ds-chart-categorical-7-hovered",
        "color.chart.categorical.8": "--ds-chart-categorical-8",
        "color.chart.categorical.8.hovered": "--ds-chart-categorical-8-hovered",
        "color.chart.lime.bold": "--ds-chart-lime-bold",
        "color.chart.lime.bold.hovered": "--ds-chart-lime-bold-hovered",
        "color.chart.lime.bolder": "--ds-chart-lime-bolder",
        "color.chart.lime.bolder.hovered": "--ds-chart-lime-bolder-hovered",
        "color.chart.lime.boldest": "--ds-chart-lime-boldest",
        "color.chart.lime.boldest.hovered": "--ds-chart-lime-boldest-hovered",
        "color.chart.neutral": "--ds-chart-neutral",
        "color.chart.neutral.hovered": "--ds-chart-neutral-hovered",
        "color.chart.red.bold": "--ds-chart-red-bold",
        "color.chart.red.bold.hovered": "--ds-chart-red-bold-hovered",
        "color.chart.red.bolder": "--ds-chart-red-bolder",
        "color.chart.red.bolder.hovered": "--ds-chart-red-bolder-hovered",
        "color.chart.red.boldest": "--ds-chart-red-boldest",
        "color.chart.red.boldest.hovered": "--ds-chart-red-boldest-hovered",
        "color.chart.orange.bold": "--ds-chart-orange-bold",
        "color.chart.orange.bold.hovered": "--ds-chart-orange-bold-hovered",
        "color.chart.orange.bolder": "--ds-chart-orange-bolder",
        "color.chart.orange.bolder.hovered": "--ds-chart-orange-bolder-hovered",
        "color.chart.orange.boldest": "--ds-chart-orange-boldest",
        "color.chart.orange.boldest.hovered": "--ds-chart-orange-boldest-hovered",
        "color.chart.yellow.bold": "--ds-chart-yellow-bold",
        "color.chart.yellow.bold.hovered": "--ds-chart-yellow-bold-hovered",
        "color.chart.yellow.bolder": "--ds-chart-yellow-bolder",
        "color.chart.yellow.bolder.hovered": "--ds-chart-yellow-bolder-hovered",
        "color.chart.yellow.boldest": "--ds-chart-yellow-boldest",
        "color.chart.yellow.boldest.hovered": "--ds-chart-yellow-boldest-hovered",
        "color.chart.green.bold": "--ds-chart-green-bold",
        "color.chart.green.bold.hovered": "--ds-chart-green-bold-hovered",
        "color.chart.green.bolder": "--ds-chart-green-bolder",
        "color.chart.green.bolder.hovered": "--ds-chart-green-bolder-hovered",
        "color.chart.green.boldest": "--ds-chart-green-boldest",
        "color.chart.green.boldest.hovered": "--ds-chart-green-boldest-hovered",
        "color.chart.teal.bold": "--ds-chart-teal-bold",
        "color.chart.teal.bold.hovered": "--ds-chart-teal-bold-hovered",
        "color.chart.teal.bolder": "--ds-chart-teal-bolder",
        "color.chart.teal.bolder.hovered": "--ds-chart-teal-bolder-hovered",
        "color.chart.teal.boldest": "--ds-chart-teal-boldest",
        "color.chart.teal.boldest.hovered": "--ds-chart-teal-boldest-hovered",
        "color.chart.blue.bold": "--ds-chart-blue-bold",
        "color.chart.blue.bold.hovered": "--ds-chart-blue-bold-hovered",
        "color.chart.blue.bolder": "--ds-chart-blue-bolder",
        "color.chart.blue.bolder.hovered": "--ds-chart-blue-bolder-hovered",
        "color.chart.blue.boldest": "--ds-chart-blue-boldest",
        "color.chart.blue.boldest.hovered": "--ds-chart-blue-boldest-hovered",
        "color.chart.purple.bold": "--ds-chart-purple-bold",
        "color.chart.purple.bold.hovered": "--ds-chart-purple-bold-hovered",
        "color.chart.purple.bolder": "--ds-chart-purple-bolder",
        "color.chart.purple.bolder.hovered": "--ds-chart-purple-bolder-hovered",
        "color.chart.purple.boldest": "--ds-chart-purple-boldest",
        "color.chart.purple.boldest.hovered": "--ds-chart-purple-boldest-hovered",
        "color.chart.magenta.bold": "--ds-chart-magenta-bold",
        "color.chart.magenta.bold.hovered": "--ds-chart-magenta-bold-hovered",
        "color.chart.magenta.bolder": "--ds-chart-magenta-bolder",
        "color.chart.magenta.bolder.hovered": "--ds-chart-magenta-bolder-hovered",
        "color.chart.magenta.boldest": "--ds-chart-magenta-boldest",
        "color.chart.magenta.boldest.hovered": "--ds-chart-magenta-boldest-hovered",
        "color.chart.gray.bold": "--ds-chart-gray-bold",
        "color.chart.gray.bold.hovered": "--ds-chart-gray-bold-hovered",
        "color.chart.gray.bolder": "--ds-chart-gray-bolder",
        "color.chart.gray.bolder.hovered": "--ds-chart-gray-bolder-hovered",
        "color.chart.gray.boldest": "--ds-chart-gray-boldest",
        "color.chart.gray.boldest.hovered": "--ds-chart-gray-boldest-hovered",
        "color.chart.brand": "--ds-chart-brand",
        "color.chart.brand.hovered": "--ds-chart-brand-hovered",
        "color.chart.danger": "--ds-chart-danger",
        "color.chart.danger.hovered": "--ds-chart-danger-hovered",
        "color.chart.danger.bold": "--ds-chart-danger-bold",
        "color.chart.danger.bold.hovered": "--ds-chart-danger-bold-hovered",
        "color.chart.warning": "--ds-chart-warning",
        "color.chart.warning.hovered": "--ds-chart-warning-hovered",
        "color.chart.warning.bold": "--ds-chart-warning-bold",
        "color.chart.warning.bold.hovered": "--ds-chart-warning-bold-hovered",
        "color.chart.success": "--ds-chart-success",
        "color.chart.success.hovered": "--ds-chart-success-hovered",
        "color.chart.success.bold": "--ds-chart-success-bold",
        "color.chart.success.bold.hovered": "--ds-chart-success-bold-hovered",
        "color.chart.discovery": "--ds-chart-discovery",
        "color.chart.discovery.hovered": "--ds-chart-discovery-hovered",
        "color.chart.discovery.bold": "--ds-chart-discovery-bold",
        "color.chart.discovery.bold.hovered": "--ds-chart-discovery-bold-hovered",
        "color.chart.information": "--ds-chart-information",
        "color.chart.information.hovered": "--ds-chart-information-hovered",
        "color.chart.information.bold": "--ds-chart-information-bold",
        "color.chart.information.bold.hovered": "--ds-chart-information-bold-hovered",
        "elevation.surface": "--ds-surface",
        "elevation.surface.hovered": "--ds-surface-hovered",
        "elevation.surface.pressed": "--ds-surface-pressed",
        "elevation.surface.overlay": "--ds-surface-overlay",
        "elevation.surface.overlay.hovered": "--ds-surface-overlay-hovered",
        "elevation.surface.overlay.pressed": "--ds-surface-overlay-pressed",
        "elevation.surface.raised": "--ds-surface-raised",
        "elevation.surface.raised.hovered": "--ds-surface-raised-hovered",
        "elevation.surface.raised.pressed": "--ds-surface-raised-pressed",
        "elevation.surface.sunken": "--ds-surface-sunken",
        "elevation.shadow.overflow": "--ds-shadow-overflow",
        "elevation.shadow.overflow.perimeter": "--ds-shadow-overflow-perimeter",
        "elevation.shadow.overflow.spread": "--ds-shadow-overflow-spread",
        "elevation.shadow.overlay": "--ds-shadow-overlay",
        "elevation.shadow.raised": "--ds-shadow-raised",
        "opacity.disabled": "--ds-opacity-disabled",
        "opacity.loading": "--ds-opacity-loading",
        "utility.UNSAFE.textTransformUppercase": "--ds-UNSAFE-textTransformUppercase",
        "utility.UNSAFE.transparent": "--ds-UNSAFE-transparent",
        "utility.elevation.surface.current": "--ds-elevation-surface-current",
        "border.radius.050": "--ds-border-radius-050",
        "border.radius": "--ds-border-radius",
        "border.radius.100": "--ds-border-radius-100",
        "border.radius.200": "--ds-border-radius-200",
        "border.radius.300": "--ds-border-radius-300",
        "border.radius.400": "--ds-border-radius-400",
        "border.radius.circle": "--ds-border-radius-circle",
        "border.width": "--ds-border-width",
        "border.width.0": "--ds-border-width-0",
        "border.width.indicator": "--ds-border-width-indicator",
        "border.width.outline": "--ds-border-width-outline",
        "space.0": "--ds-space-0",
        "space.025": "--ds-space-025",
        "space.050": "--ds-space-050",
        "space.075": "--ds-space-075",
        "space.100": "--ds-space-100",
        "space.150": "--ds-space-150",
        "space.200": "--ds-space-200",
        "space.250": "--ds-space-250",
        "space.300": "--ds-space-300",
        "space.400": "--ds-space-400",
        "space.500": "--ds-space-500",
        "space.600": "--ds-space-600",
        "space.800": "--ds-space-800",
        "space.1000": "--ds-space-1000",
        "space.negative.025": "--ds-space-negative-025",
        "space.negative.050": "--ds-space-negative-050",
        "space.negative.075": "--ds-space-negative-075",
        "space.negative.100": "--ds-space-negative-100",
        "space.negative.150": "--ds-space-negative-150",
        "space.negative.200": "--ds-space-negative-200",
        "space.negative.250": "--ds-space-negative-250",
        "space.negative.300": "--ds-space-negative-300",
        "space.negative.400": "--ds-space-negative-400",
        "font.letterSpacing.0": "--ds-font-letterSpacing-0",
        "font.letterSpacing.100": "--ds-font-letterSpacing-100",
        "font.letterSpacing.200": "--ds-font-letterSpacing-200",
        "font.letterSpacing.300": "--ds-font-letterSpacing-300",
        "font.letterSpacing.400": "--ds-font-letterSpacing-400",
        "font.heading.xxlarge": "--ds-font-heading-xxlarge",
        "font.heading.xlarge": "--ds-font-heading-xlarge",
        "font.heading.large": "--ds-font-heading-large",
        "font.heading.medium": "--ds-font-heading-medium",
        "font.heading.small": "--ds-font-heading-small",
        "font.heading.xsmall": "--ds-font-heading-xsmall",
        "font.heading.xxsmall": "--ds-font-heading-xxsmall",
        "font.body.large": "--ds-font-body-large",
        "font.body": "--ds-font-body",
        "font.body.small": "--ds-font-body-small",
        "font.body.UNSAFE_small": "--ds-font-body-UNSAFE_small",
        "font.code": "--ds-font-code",
        "font.weight.regular": "--ds-font-weight-regular",
        "font.weight.medium": "--ds-font-weight-medium",
        "font.weight.semibold": "--ds-font-weight-semibold",
        "font.weight.bold": "--ds-font-weight-bold",
        "font.family.heading": "--ds-font-family-heading",
        "font.family.body": "--ds-font-family-body",
        "font.family.code": "--ds-font-family-code",
        "font.family.monospace": "--ds-font-family-monospace",
        "font.family.sans": "--ds-font-family-sans",
        "font.family.brand.heading": "--ds-font-family-brand-heading",
        "font.family.brand.body": "--ds-font-family-brand-body",
        "font.size.050": "--ds-font-size-050",
        "font.size.075": "--ds-font-size-075",
        "font.size.100": "--ds-font-size-100",
        "font.size.200": "--ds-font-size-200",
        "font.size.300": "--ds-font-size-300",
        "font.size.400": "--ds-font-size-400",
        "font.size.500": "--ds-font-size-500",
        "font.size.600": "--ds-font-size-600",
        "font.lineHeight.1": "--ds-font-lineHeight-1",
        "font.lineHeight.100": "--ds-font-lineHeight-100",
        "font.lineHeight.200": "--ds-font-lineHeight-200",
        "font.lineHeight.300": "--ds-font-lineHeight-300",
        "font.lineHeight.400": "--ds-font-lineHeight-400",
        "font.lineHeight.500": "--ds-font-lineHeight-500",
        "font.lineHeight.600": "--ds-font-lineHeight-600"
      }
    }, 460: (e, r, t) => {
      "use strict";
      t.d(r, { Fs: () => n, cF: () => c, kO: () => s, mw: () => o, qN: () => a, ug: () => i });
      var n = "data-theme", o = "data-color-mode", a = "data-contrast-mode", c = "data-custom-theme",
        i = "--".concat("ds", "-token-not-found"), s = "--".concat("ds", "-elevation-surface-current")
    }, 4313: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, {
        CURRENT_SURFACE_CSS_VAR: () => a.kO,
        ThemeMutationObserver: () => ke,
        enableGlobalTheme: () => he,
        getGlobalTheme: () => we,
        getSSRAutoScript: () => pe,
        getThemeHtmlAttrs: () => q,
        getThemeStyles: () => ge,
        getTokenValue: () => i,
        setGlobalTheme: () => fe,
        themeConfig: () => n.ZP,
        themeObjectToString: () => F,
        themeStringToObject: () => C,
        token: () => c,
        useThemeObserver: () => _e
      });
      var n = t(5288), o = t(5757), a = t(460);
      const c = function (e, r) {
        var t = o.Z[e];
        return t || (t = a.ug), r ? "var(".concat(t, ", ").concat(r, ")") : "var(".concat(t, ")")
      }, i = function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", t = o.Z[e], n = r;
        return "undefined" == typeof window ? n : n = (n = window.getComputedStyle(document.documentElement).getPropertyValue(t).trim()) || r
      };

      function s(e, r, t, n, o, a, c) {
        try {
          var i = e[a](c), s = i.value
        } catch (e) {
          return void t(e)
        }
        i.done ? r(s) : Promise.resolve(s).then(n, o)
      }

      function d(e) {
        return function () {
          var r = this, t = arguments;
          return new Promise((function (n, o) {
            var a = e.apply(r, t);

            function c(e) {
              s(a, n, o, c, i, "next", e)
            }

            function i(e) {
              s(a, n, o, c, i, "throw", e)
            }

            c(void 0)
          }))
        }
      }

      var u, l, f, h = t(7054), b = t.n(h),
        g = !(null !== (u = void 0 !== (null === globalThis || void 0 === globalThis || null === (l = globalThis.process) || void 0 === l || null === (l = l.env) || void 0 === l ? void 0 : l.JEST_WORKER_ID)) && void 0 !== u && u) && "production" !== (null === globalThis || void 0 === globalThis || null === (f = globalThis.process) || void 0 === f || null === (f = f.env) || void 0 === f ? void 0 : f.NODE_ENV),
        p = "__PLATFORM_FEATURE_FLAGS__", v = "undefined" != typeof process && void 0 !== process.env,
        m = !!v && "true" === process.env.ENABLE_PLATFORM_FF,
        y = !!v && "true" === process.env.STORYBOOK_ENABLE_PLATFORM_FF, w = m || y, k = {
          earlyResolvedFlags: new Map, booleanResolver: function (e) {
            return !1
          }
        }, _ = "undefined" != typeof window ? window : globalThis;

      function x(e) {
        if (w) return function () {
          var e;
          g && (e = console).debug.apply(e, arguments)
        }('[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.', "@atlaskit/platform-feature-flags", e), !0;
        try {
          var r, t = null === (r = _[p]) || void 0 === r ? void 0 : r.booleanResolver(e);
          return "boolean" != typeof t ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")), !1) : t
        } catch (e) {
          return !1
        }
      }

      function E(e) {
        return x(e)
      }

      function S(e) {
        return x(e)
      }

      _[p] = _[p] || k;
      var O = t(7349), j = t(1635), P = t(2418), A = t(7680), M = ["light", "dark", "spacing", "typography", "shape"],
        T = "UNSAFE_themeOptions", N = function (e) {
          return void 0 !== M.find((function (r) {
            return r === e
          }))
        }, R = function (e) {
          return void 0 !== n.hB.find((function (r) {
            return r === e
          }))
        }, W = function (e) {
          return ["light", "dark", "auto"].includes(e)
        }, C = function (e) {
          return e.split(" ").map((function (e) {
            return e.split(/:([\s\S]*)/)
          })).reduce((function (e, r) {
            var t = (0, j.Z)(r, 2), n = t[0], o = t[1];
            if ("colorMode" === n && W(o) && (e[n] = o), N(n) && R(o) && (e[n] = o), n === T) try {
              e.UNSAFE_themeOptions = JSON.parse(o)
            } catch (e) {
              new Error("Invalid custom theme string")
            }
            return e
          }), {})
        }, F = function (e) {
          return Object.entries(e).reduce((function (e, r) {
            var t = (0, j.Z)(r, 2), n = t[0], o = t[1];
            return "colorMode" === n && "string" == typeof o && W(o) || n === T && "object" === (0, A.Z)(o) || N(n) && "string" == typeof o && R(o) ? e + "".concat(e ? " " : "") + "".concat(n, ":").concat("object" === (0, A.Z)(o) ? JSON.stringify(o) : o) : e
          }), "")
        }, L = t(5513);

      function I(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter((function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          }))), t.push.apply(t, n)
        }
        return t
      }

      function D(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? I(Object(t), !0).forEach((function (r) {
            (0, P.Z)(e, r, t[r])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach((function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          }))
        }
        return e
      }

      var Z = "light", z = "no-preference";
      const q = function () {
        var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = r.colorMode,
          o = void 0 === t ? n.KR.colorMode : t, c = r.dark, i = void 0 === c ? n.KR.dark : c, s = r.light,
          d = void 0 === s ? n.KR.light : s, u = r.contrastMode, l = void 0 === u ? n.KR.contrastMode : u, f = r.shape,
          h = void 0 === f ? n.KR.shape : f, b = r.spacing, g = void 0 === b ? n.KR.spacing : b, p = r.typography,
          v = void 0 === p ? n.KR.typography : p, m = r.UNSAFE_themeOptions,
          y = void 0 === m ? n.KR.UNSAFE_themeOptions : m,
          w = F({ dark: i, light: d, shape: h, spacing: g, typography: v }),
          k = (e = {}, (0, P.Z)(e, a.Fs, w), (0, P.Z)(e, a.mw, "auto" === o ? Z : o), e);
        if (E("platform.design-system-team.increased-contrast-themes") && (k = D(D({}, k), {}, (0, P.Z)({}, a.qN, "auto" === l ? z : l))), y && (0, O.aP)(y.brandColor)) {
          var _ = JSON.stringify(y), x = (0, L.v)(_);
          k[a.cF] = x
        }
        return k
      };
      var B = t(5304), U = t(8949), H = t(1060);
      const K = {
        light: function () {
          return t.e(334).then(t.bind(t, 6311))
        }, "light-future": function () {
          return t.e(338).then(t.bind(t, 5614))
        }, "light-increased-contrast": function () {
          return t.e(631).then(t.bind(t, 8799))
        }, dark: function () {
          return t.e(903).then(t.bind(t, 3320))
        }, "dark-future": function () {
          return t.e(983).then(t.bind(t, 2542))
        }, "dark-increased-contrast": function () {
          return t.e(555).then(t.bind(t, 6170))
        }, "legacy-light": function () {
          return t.e(25).then(t.bind(t, 9434))
        }, "legacy-dark": function () {
          return t.e(214).then(t.bind(t, 1886))
        }, spacing: function () {
          return t.e(436).then(t.bind(t, 3743))
        }, "typography-adg3": function () {
          return t.e(261).then(t.bind(t, 2850))
        }, shape: function () {
          return t.e(210).then(t.bind(t, 7925))
        }, "typography-minor3": function () {
          return t.e(682).then(t.bind(t, 9856))
        }, "light-brand-refresh": function () {
          return t.e(625).then(t.bind(t, 8973))
        }, "dark-brand-refresh": function () {
          return t.e(353).then(t.bind(t, 4634))
        }
      };
      var G = function () {
        var e = d(b().mark((function e(r) {
          var t, n;
          return b().wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                if (!document.head.querySelector("style[".concat(a.Fs, '="').concat(r, '"]:not([').concat(a.cF, "])"))) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return");
              case 2:
                if (r) {
                  e.next = 4;
                  break
                }
                return e.abrupt("return");
              case 4:
                return e.next = 6, V(r);
              case 6:
                t = e.sent, (n = document.createElement("style")).textContent = t, n.dataset.theme = r, document.head.appendChild(n);
              case 11:
              case"end":
                return e.stop()
            }
          }), e)
        })));
        return function (r) {
          return e.apply(this, arguments)
        }
      }(), V = function () {
        var e = d(b().mark((function e(r) {
          var t, n;
          return b().wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return "light" !== r && "dark" !== r || !S("platform-component-visual-refresh") || (r += "-brand-refresh"), e.next = 3, K[r]();
              case 3:
                return t = e.sent, n = t.default, e.abrupt("return", n);
              case 6:
              case"end":
                return e.stop()
            }
          }), e)
        })));
        return function (r) {
          return e.apply(this, arguments)
        }
      }(), $ = "(prefers-color-scheme: dark)", J = "(prefers-contrast: more)";

      function Y(e) {
        document.documentElement.setAttribute(a.mw, e.matches ? "dark" : "light")
      }

      var X = "undefined" != typeof window && "matchMedia" in window && window.matchMedia($);
      const Q = new (function () {
        function e() {
          (0, B.Z)(this, e), (0, P.Z)(this, "unbindThemeChangeListener", null)
        }

        return (0, U.Z)(e, [{
          key: "getColorMode", value: function () {
            return X && null != X && X.matches ? "dark" : "light"
          }
        }, {
          key: "bind", value: function () {
            X && null === this.unbindThemeChangeListener && (this.unbindThemeChangeListener = (0, H.ak)(X, {
              type: "change",
              listener: Y
            }))
          }
        }, {
          key: "unbind", value: function () {
            this.unbindThemeChangeListener && (this.unbindThemeChangeListener(), this.unbindThemeChangeListener = null)
          }
        }]), e
      }());

      function ee(e) {
        document.documentElement.setAttribute(a.qN, e.matches ? "more" : "no-preference")
      }

      var re = "undefined" != typeof window && "matchMedia" in window && window.matchMedia(J);
      const te = new (function () {
        function e() {
          (0, B.Z)(this, e), (0, P.Z)(this, "unbindContrastChangeListener", null)
        }

        return (0, U.Z)(e, [{
          key: "getContrastMode", value: function () {
            return re && null != re && re.matches ? "more" : "no-preference"
          }
        }, {
          key: "bind", value: function () {
            re && null === this.unbindContrastChangeListener && (this.unbindContrastChangeListener = (0, H.ak)(re, {
              type: "change",
              listener: ee
            }))
          }
        }, {
          key: "unbind", value: function () {
            this.unbindContrastChangeListener && (this.unbindContrastChangeListener(), this.unbindContrastChangeListener = null)
          }
        }]), e
      }());

      function ne(e) {
        "auto" === e.colorMode ? (e.colorMode = Q.getColorMode(), Q.bind()) : Q.unbind(), E("platform.design-system-team.increased-contrast-themes") && ("auto" === e.contrastMode ? (e.contrastMode = te.getContrastMode(), te.bind()) : te.unbind());
        var r = q(e);
        return Object.entries(r).forEach((function (e) {
          var r = (0, j.Z)(e, 2), t = r[0], n = r[1];
          document.documentElement.setAttribute(t, n)
        })), function () {
          Q.unbind(), E("platform.design-system-team.increased-contrast-themes") && te.unbind()
        }
      }

      var oe = t(7859), ae = t(6983);

      function ce(e) {
        var r;
        return null === (r = Object.entries(n.ZP).find((function (r) {
          return (0, j.Z)(r, 2)[1].increasesContrastFor === e
        }))) || void 0 === r ? void 0 : r[1].id
      }

      var ie = function (e) {
        var r = e.colorMode, t = e.contrastMode, n = e.dark, o = e.light, a = e.shape, c = e.spacing, i = e.typography,
          s = [o, n], d = [];
        if ("auto" === r) "no-preference" !== t && S("platform.design-system-team.increased-contrast-themes") && s.forEach((function (e) {
          var r = ce(e);
          r && s.push(r)
        })), d.push.apply(d, s); else if (d.push(e[r]), "no-preference" !== t && S("platform.design-system-team.increased-contrast-themes")) {
          var u = ce(e[r]);
          u && d.push(u)
        }
        return [a, c, i].forEach((function (e) {
          e && d.push(e)
        })), (0, ae.Z)(new Set(d))
      }, se = function (e) {
        return (0, ae.Z)(new Set([]))
      };

      function de(e, r) {
        var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!t) {
          if (Array.isArray(e) || (t = function (e, r) {
            if (e) {
              if ("string" == typeof e) return ue(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ue(e, r) : void 0
            }
          }(e)) || r && e && "number" == typeof e.length) {
            t && (e = t);
            var n = 0, o = function () {
            };
            return {
              s: o, n: function () {
                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
              }, e: function (e) {
                throw e
              }, f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, c = !0, i = !1;
        return {
          s: function () {
            t = t.call(e)
          }, n: function () {
            var e = t.next();
            return c = e.done, e
          }, e: function (e) {
            i = !0, a = e
          }, f: function () {
            try {
              c || null == t.return || t.return()
            } finally {
              if (i) throw a
            }
          }
        }
      }

      function ue(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n
      }

      var le = function () {
        var e = d(b().mark((function e() {
          var r, o, a, c, i, s, u, l, f, h, g, p, v, m, y, w, k, _, x, E, j, P, A, M, T, N, R, W, C, F = arguments;
          return b().wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return r = F.length > 0 && void 0 !== F[0] ? F[0] : {}, o = r.colorMode, a = void 0 === o ? n.KR.colorMode : o, c = r.contrastMode, i = void 0 === c ? n.KR.contrastMode : c, s = r.dark, u = void 0 === s ? n.KR.dark : s, l = r.light, f = void 0 === l ? n.KR.light : l, h = r.shape, g = void 0 === h ? n.KR.shape : h, p = r.spacing, v = void 0 === p ? n.KR.spacing : p, m = r.typography, y = void 0 === m ? n.KR.typography : m, w = r.UNSAFE_themeOptions, k = void 0 === w ? n.KR.UNSAFE_themeOptions : w, _ = F.length > 1 ? F[1] : void 0, S("platform.design-system-team.increased-contrast-themes") || ("light-increased-contrast" === f && (f = "light"), "dark-increased-contrast" === u && (u = "dark")), E = ie(x = {
                  colorMode: a,
                  contrastMode: i,
                  dark: u,
                  light: f,
                  shape: g,
                  spacing: v,
                  typography: y,
                  UNSAFE_themeOptions: _ ? void 0 : k
                }), j = _ || G, P = E.map(function () {
                  var e = d(b().mark((function e(r) {
                    return b().wrap((function (e) {
                      for (; ;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, j(r);
                        case 2:
                          return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                          return e.stop()
                      }
                    }), e)
                  })));
                  return function (r) {
                    return e.apply(this, arguments)
                  }
                }()), !_ && k && (0, O.aP)(null == k ? void 0 : k.brandColor) && (A = a || n.KR.colorMode, (M = (0, oe.b4)(k, A)).length > 0 && P.push(d(b().mark((function e() {
                  return b().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.e(389).then(t.bind(t, 9654));
                      case 2:
                        (0, e.sent.loadAndAppendCustomThemeCss)({
                          colorMode: 2 === M.length ? "auto" : M[0],
                          UNSAFE_themeOptions: k
                        });
                      case 5:
                      case"end":
                        return e.stop()
                    }
                  }), e)
                })))())), e.next = 10, Promise.all(P);
              case 10:
                T = se(), N = de(T), e.prev = 12, N.s();
              case 14:
                if ((R = N.n()).done) {
                  e.next = 20;
                  break
                }
                return W = R.value, e.next = 18, j(W);
              case 18:
                e.next = 14;
                break;
              case 20:
                e.next = 25;
                break;
              case 22:
                e.prev = 22, e.t0 = e.catch(12), N.e(e.t0);
              case 25:
                return e.prev = 25, N.f(), e.finish(25);
              case 28:
                return C = ne(x), e.abrupt("return", C);
              case 30:
              case"end":
                return e.stop()
            }
          }), e, null, [[12, 22, 25, 28]])
        })));
        return function () {
          return e.apply(this, arguments)
        }
      }();
      const fe = le, he = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e.colorMode,
          t = void 0 === r ? n.KR.colorMode : r, o = e.contrastMode, a = void 0 === o ? n.KR.contrastMode : o,
          c = e.dark, i = void 0 === c ? n.KR.dark : c, s = e.light, d = void 0 === s ? n.KR.light : s, u = e.shape,
          l = void 0 === u ? n.KR.shape : u, f = e.spacing, h = void 0 === f ? n.KR.spacing : f, b = e.typography,
          g = void 0 === b ? n.KR.typography : b, p = e.UNSAFE_themeOptions,
          v = void 0 === p ? n.KR.UNSAFE_themeOptions : p, m = arguments.length > 1 ? arguments[1] : void 0, y = {
            colorMode: t,
            contrastMode: a,
            dark: i,
            light: d,
            shape: l,
            spacing: h,
            typography: g,
            UNSAFE_themeOptions: m ? void 0 : v
          }, w = ie(y);
        m && w.map((function (e) {
          return m(e)
        }));
        var k = ne(y);
        return k
      };
      var be = function () {
        var e = d(b().mark((function e(r) {
          var o, a, c, i;
          return b().wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return a = [], "all" === r ? (o = n.ZI, S("platform.design-system-team.increased-contrast-themes") || (o = o.filter((function (e) {
                  return "light-increased-contrast" !== e && "dark-increased-contrast" !== e
                }))), o = o.filter((function (e) {
                  return "light-brand-refresh" !== e && "dark-brand-refresh" !== e
                }))) : (c = {
                  colorMode: (null == r ? void 0 : r.colorMode) || n.KR.colorMode,
                  contrastMode: (null == r ? void 0 : r.contrastMode) || n.KR.contrastMode,
                  dark: (null == r ? void 0 : r.dark) || n.KR.dark,
                  light: (null == r ? void 0 : r.light) || n.KR.light,
                  shape: (null == r ? void 0 : r.shape) || n.KR.shape,
                  spacing: (null == r ? void 0 : r.spacing) || n.KR.spacing,
                  typography: (null == r ? void 0 : r.typography) || n.KR.typography
                }, o = ie(c), a = se()), e.next = 4, Promise.all([].concat((0, ae.Z)([].concat((0, ae.Z)(o), (0, ae.Z)(a)).map(function () {
                  var e = d(b().mark((function e(r) {
                    var t;
                    return b().wrap((function (e) {
                      for (; ;) switch (e.prev = e.next) {
                        case 0:
                          return e.prev = 0, e.next = 3, V(r);
                        case 3:
                          return t = e.sent, e.abrupt("return", { id: r, attrs: { "data-theme": r }, css: t });
                        case 7:
                          return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", void 0);
                        case 10:
                        case"end":
                          return e.stop()
                      }
                    }), e, null, [[0, 7]])
                  })));
                  return function (r) {
                    return e.apply(this, arguments)
                  }
                }())), [d(b().mark((function e() {
                  var o, a, c, i;
                  return b().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                      case 0:
                        if ("all" === r || null == r || !r.UNSAFE_themeOptions || !(0, O.aP)(null == r || null === (o = r.UNSAFE_themeOptions) || void 0 === o ? void 0 : o.brandColor)) {
                          e.next = 15;
                          break
                        }
                        return e.prev = 1, e.next = 4, t.e(389).then(t.bind(t, 9654));
                      case 4:
                        return a = e.sent, c = a.getCustomThemeStyles, e.next = 8, c({
                          colorMode: (null == r ? void 0 : r.colorMode) || n.KR.colorMode,
                          UNSAFE_themeOptions: null == r ? void 0 : r.UNSAFE_themeOptions
                        });
                      case 8:
                        return i = e.sent, e.abrupt("return", i);
                      case 12:
                        return e.prev = 12, e.t0 = e.catch(1), e.abrupt("return", void 0);
                      case 15:
                      case"end":
                        return e.stop()
                    }
                  }), e, null, [[1, 12]])
                })))()]));
              case 4:
                return i = e.sent, e.abrupt("return", i.flat().filter((function (e) {
                  return void 0 !== e
                })));
              case 6:
              case"end":
                return e.stop()
            }
          }), e)
        })));
        return function (r) {
          return e.apply(this, arguments)
        }
      }();
      const ge = be, pe = function (e, r) {
        if ("auto" === e || "auto" === r) {
          var t = "auto" === e ? "\n  try {\n    const darkModeMql = window.matchMedia('".concat($, "');\n    const colorMode = darkModeMql.matches ? 'dark' : 'light';\n    document.documentElement.setAttribute('").concat(a.mw, "', colorMode);\n  } catch (e) {}") : "",
            n = E("platform.design-system-team.increased-contrast-themes") && "auto" === r ? "\n  try {\n    const contrastModeMql = window.matchMedia('".concat(J, "');\n    const contrastMode = contrastModeMql.matches ? 'more' : 'no-preference';\n    document.documentElement.setAttribute('").concat(a.qN, "', contrastMode);\n  } catch (e) {}") : "";
          return "(() => {".concat(t).concat(n, "})()")
        }
      };
      var ve = t(2784);

      function me(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter((function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          }))), t.push.apply(t, n)
        }
        return t
      }

      function ye(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? me(Object(t), !0).forEach((function (r) {
            (0, P.Z)(e, r, t[r])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : me(Object(t)).forEach((function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          }))
        }
        return e
      }

      const we = function () {
        if ("undefined" == typeof document) return {};
        var e = document.documentElement, r = e.getAttribute(a.mw) || "", t = e.getAttribute(a.Fs) || "";
        return ye(ye({}, C(t)), function (e) {
          return void 0 !== n.ZH.find((function (r) {
            return r === e
          }))
        }(r) && { colorMode: r })
      };
      var ke = function () {
        function e(r) {
          (0, B.Z)(this, e), (0, P.Z)(this, "legacyObserver", null), this.callback = r, e.callbacks.add(r)
        }

        return (0, U.Z)(e, [{
          key: "observe", value: function () {
            e.observer || (e.observer = new MutationObserver((function () {
              var r = we();
              e.callbacks.forEach((function (e) {
                return e(r)
              }))
            })), e.observer.observe(document.documentElement, { attributeFilter: [a.Fs, a.mw] }))
          }
        }, {
          key: "disconnect", value: function () {
            this.callback && e.callbacks.delete(this.callback), 0 === e.callbacks.size && e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }]), e
      }();
      (0, P.Z)(ke, "observer", null), (0, P.Z)(ke, "callbacks", new Set);
      const _e = function () {
        var e = (0, ve.useState)(we()), r = (0, j.Z)(e, 2), t = r[0], n = r[1];
        return (0, ve.useEffect)((function () {
          var e = new ke((function (e) {
            return n(e)
          }));
          return e.observe(), function () {
            return e.disconnect()
          }
        }), []), t
      }
    }, 5288: (e, r, t) => {
      "use strict";
      t.d(r, { KR: () => c, ZH: () => n, ZI: () => a, ZP: () => i, hB: () => o });
      var n = ["light", "dark", "auto"],
        o = ["light-increased-contrast", "light", "light-future", "light-brand-refresh", "dark", "dark-future", "dark-increased-contrast", "dark-brand-refresh", "legacy-light", "legacy-dark", "spacing", "shape", "typography-adg3", "typography-minor3"],
        a = [].concat(o, []), c = {
          colorMode: "auto",
          contrastMode: "auto",
          dark: "dark",
          light: "light",
          shape: void 0,
          spacing: "spacing",
          typography: void 0,
          UNSAFE_themeOptions: void 0
        };
      const i = {
        "atlassian-light": {
          id: "light",
          displayName: "Light Theme",
          palette: "defaultPalette",
          attributes: { type: "color", mode: "light" }
        },
        "atlassian-light-future": {
          id: "light-future",
          displayName: "Future Light Theme",
          palette: "defaultPalette",
          attributes: { type: "color", mode: "light" },
          override: "light"
        },
        "atlassian-light-increased-contrast": {
          id: "light-increased-contrast",
          displayName: "Light Theme (increased contrast)",
          palette: "defaultPalette",
          attributes: { type: "color", mode: "light" },
          extends: "light",
          increasesContrastFor: "light"
        },
        "atlassian-dark": {
          id: "dark",
          displayName: "Dark Theme",
          palette: "defaultPalette",
          attributes: { type: "color", mode: "dark" }
        },
        "atlassian-dark-future": {
          id: "dark-future",
          displayName: "Future Dark Theme",
          palette: "defaultPalette",
          attributes: { type: "color", mode: "dark" },
          override: "light"
        },
        "atlassian-dark-increased-contrast": {
          id: "dark-increased-contrast",
          displayName: "Dark Theme (increased contrast)",
          palette: "defaultPalette",
          attributes: { type: "color", mode: "dark" },
          extends: "dark",
          increasesContrastFor: "dark"
        },
        "atlassian-legacy-light": {
          id: "legacy-light",
          displayName: "Light Theme (legacy)",
          palette: "legacyPalette",
          attributes: { type: "color", mode: "light" }
        },
        "atlassian-legacy-dark": {
          id: "legacy-dark",
          displayName: "Dark Theme (legacy)",
          palette: "legacyPalette",
          attributes: { type: "color", mode: "dark" }
        },
        "atlassian-spacing": {
          id: "spacing",
          displayName: "Atlassian Spacing",
          palette: "spacingScale",
          attributes: { type: "spacing" }
        },
        "atlassian-typography-adg3": {
          id: "typography-adg3",
          displayName: "ADG3 Typography",
          palette: "typographyPalette",
          attributes: { type: "typography" }
        },
        "atlassian-shape": {
          id: "shape",
          displayName: "Atlassian Shape",
          palette: "shapePalette",
          attributes: { type: "shape" }
        },
        "atlassian-typography-minor3": {
          id: "typography-minor3",
          displayName: "Atlassian Typography (Minor Third)",
          palette: "typographyPalette",
          attributes: { type: "typography" }
        },
        "atlassian-light-brand-refresh": {
          id: "light-brand-refresh",
          displayName: "Light theme (Brand refresh)",
          palette: "brandRefreshPalette",
          attributes: { type: "color", mode: "light" }
        },
        "atlassian-dark-brand-refresh": {
          id: "dark-brand-refresh",
          displayName: "Dark theme (Brand refresh)",
          palette: "brandRefreshPalette",
          attributes: { type: "color", mode: "dark" }
        }
      }
    }, 7349: (e, r, t) => {
      "use strict";
      t.d(r, {
        Rc: () => l,
        YM: () => d,
        aP: () => n,
        aw: () => u,
        mR: () => i,
        mi: () => f,
        oo: () => s,
        vq: () => a,
        wC: () => h
      });
      var n = function (e) {
        return /^#[0-9A-F]{6}$/i.test(e)
      }, o = function (e) {
        return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e)
      };

      function a(e, r, t) {
        return "#" + ((1 << 24) + (e << 16) + (r << 8) + t).toString(16).slice(1)
      }

      function c(e) {
        if (9 === e.length) {
          var r = parseInt(e.slice(7, 9), 16) / 255;
          return Number(parseFloat(r.toString()).toFixed(2))
        }
        return 1
      }

      function i(e) {
        if (!o(e)) throw new Error("Invalid HEX");
        var r;
        return 3 === (r = e.substring(1).split("")).length && (r = [r[0], r[0], r[1], r[1], r[2], r[2]]), [(r = "0x" + r.join("")) >> 16 & 255, r >> 8 & 255, 255 & r, c(e)]
      }

      function s(e) {
        if (!o(e)) throw new Error("Invalid HEX");
        var r;
        return 3 === (r = e.substring(1).split("")).length && (r = [r[0], r[0], r[1], r[1], r[2], r[2]]), [(r = "0x" + r.join("")) >> 16 & 255, r >> 8 & 255, 255 & r]
      }

      function d(e) {
        if (!o(e)) throw new Error("Invalid HEX");
        var r = 0, t = 0, n = 0;
        4 === e.length ? (r = "0x" + e[1] + e[1], t = "0x" + e[2] + e[2], n = "0x" + e[3] + e[3]) : 7 === e.length && (r = "0x" + e[1] + e[2], t = "0x" + e[3] + e[4], n = "0x" + e[5] + e[6]), r /= 255, t /= 255, n /= 255;
        var a = Math.min(r, t, n), c = Math.max(r, t, n), i = c - a, s = 0, d = 0;
        return s = 0 === i ? 0 : c === r ? (t - n) / i % 6 : c === t ? (n - r) / i + 2 : (r - t) / i + 4, (s = Math.round(60 * s)) < 0 && (s += 360), d = (c + a) / 2, [s, +(100 * (0 === i ? 0 : i / (1 - Math.abs(2 * d - 1)))).toFixed(1), d = +(100 * d).toFixed(1)]
      }

      function u(e, r, t) {
        t /= 100;
        var n = function (r) {
          return (r + e / 30) % 12
        }, o = (r /= 100) * Math.min(t, 1 - t), a = function (e) {
          return t - o * Math.max(-1, Math.min(n(e) - 3, Math.min(9 - n(e), 1)))
        };
        return [255 * a(0), 255 * a(8), 255 * a(4)]
      }

      function l(e, r, t) {
        var n = e / 255, o = r / 255, a = t / 255;
        return .2126 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .7152 * (o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4)) + .0722 * (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
      }

      function f(e, r) {
        if (!o(e) || !o(r)) throw new Error("Invalid HEX");
        var t = s(e), n = s(r), a = l(t[0], t[1], t[2]), c = l(n[0], n[1], n[2]);
        return (Math.max(a, c) + .05) / (Math.min(a, c) + .05)
      }

      function h(e, r) {
        var t = b(e), n = b(r), o = t[0] - n[0], a = t[1] - n[1], c = t[2] - n[2],
          i = Math.sqrt(t[1] * t[1] + t[2] * t[2]), s = i - Math.sqrt(n[1] * n[1] + n[2] * n[2]),
          d = a * a + c * c - s * s, u = o / 1, l = s / (1 + .045 * i),
          f = (d = d < 0 ? 0 : Math.sqrt(d)) / (1 + .015 * i), h = u * u + l * l + f * f;
        return h < 0 ? 0 : Math.sqrt(h)
      }

      function b(e) {
        var r, t, n, o = e[0] / 255, a = e[1] / 255, c = e[2] / 255;
        return t = (.2126 * (o = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92) + .7152 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .0722 * (c = c > .04045 ? Math.pow((c + .055) / 1.055, 2.4) : c / 12.92)) / 1, n = (.0193 * o + .1192 * a + .9505 * c) / 1.08883, r = (r = (.4124 * o + .3576 * a + .1805 * c) / .95047) > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, [116 * (t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116) - 16, 500 * (r - t), 200 * (t - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
      }
    }, 7859: (e, r, t) => {
      "use strict";
      t.d(r, { Xm: () => u, b4: () => s, d1: () => d });
      var n = t(1635), o = t(6983), a = t(5757), c = t(460), i = t(5513);

      function s(e, r) {
        var t = JSON.stringify(e), n = (0, i.v)(t), o = [];
        return ("auto" === r ? ["light", "dark"] : [r]).forEach((function (e) {
          var r = document.head.querySelector("style[".concat(c.cF, '="').concat(n, '"][').concat(c.Fs, '="').concat(e, '"]'));
          r ? document.head.appendChild(r) : o.push(e)
        })), o
      }

      function d(e) {
        var r = (0, o.Z)(Array.from(document.head.querySelectorAll("style[".concat(c.cF, "][").concat(c.Fs, "]"))));
        r.length < e || r.slice(0, r.length - (e - 1)).forEach((function (e) {
          return e.remove()
        }))
      }

      function u(e, r) {
        return Object.entries(e).reduce((function (e, t) {
          var o = (0, n.Z)(t, 2), c = o[0], i = o[1], s = a.Z[c];
          return s ? "".concat(e, "\n  ").concat(s, ": ").concat("string" == typeof i ? i : r[i], ";") : e
        }), "")
      }
    }, 5513: (e, r, t) => {
      "use strict";
      t.d(r, { v: () => n });
      var n = function (e) {
        for (var r = 0, t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t), r &= r;
        return new Uint32Array([r])[0].toString(36)
      }
    }, 5087: function (e, r, t) {
      "use strict";
      var n = this && this.__assign || function () {
        return n = Object.assign || function (e) {
          for (var r, t = 1, n = arguments.length; t < n; t++) for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
          return e
        }, n.apply(this, arguments)
      };
      Object.defineProperty(r, "__esModule", { value: !0 }), r.bindAll = void 0;
      var o = t(6669);

      function a(e) {
        if (void 0 !== e) return "boolean" == typeof e ? { capture: e } : e
      }

      r.bindAll = function (e, r, t) {
        var c = r.map((function (r) {
          var c = function (e, r) {
            return null == r ? e : n(n({}, e), { options: n(n({}, a(r)), a(e.options)) })
          }(r, t);
          return (0, o.bind)(e, c)
        }));
        return function () {
          c.forEach((function (e) {
            return e()
          }))
        }
      }
    }, 6669: (e, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }), r.bind = void 0, r.bind = function (e, r) {
        var t = r.type, n = r.listener, o = r.options;
        return e.addEventListener(t, n, o), function () {
          e.removeEventListener(t, n, o)
        }
      }
    }, 1060: (e, r, t) => {
      "use strict";
      r.ak = void 0;
      var n = t(6669);
      Object.defineProperty(r, "ak", {
        enumerable: !0, get: function () {
          return n.bind
        }
      });
      t(5087)
    }, 1021: (e, r, t) => {
      var n = t(7908), o = t(232), a = n.globalBridge;
      void 0 === o.__bridge && (o.__bridge = a), e.exports = n
    }, 4175: (e, r, t) => {
      var n = t(6146), o = t(232);
      void 0 === o.postRobot && (o.postRobot = n), e.exports = n
    }, 232: (e, r, t) => {
      "use strict";
      e.exports = function () {
        if ("object" == typeof globalThis) return globalThis;
        var e;
        try {
          e = this || new Function("return this")()
        } catch (e) {
          if ("object" == typeof window) return window;
          if ("object" == typeof self) return self;
          if (void 0 !== t.g) return t.g
        }
        return e
      }()
    }, 7320: e => {
      "use strict";
      var r = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable;

      function o(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
      }

      e.exports = function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
          for (var r = {}, t = 0; t < 10; t++) r["_" + String.fromCharCode(t)] = t;
          if ("0123456789" !== Object.getOwnPropertyNames(r).map((function (e) {
            return r[e]
          })).join("")) return !1;
          var n = {};
          return "abcdefghijklmnopqrst".split("").forEach((function (e) {
            n[e] = e
          })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (e) {
          return !1
        }
      }() ? Object.assign : function (e, a) {
        for (var c, i, s = o(e), d = 1; d < arguments.length; d++) {
          for (var u in c = Object(arguments[d])) t.call(c, u) && (s[u] = c[u]);
          if (r) {
            i = r(c);
            for (var l = 0; l < i.length; l++) n.call(c, i[l]) && (s[i[l]] = c[i[l]])
          }
        }
        return s
      }
    }, 8170: function (e) {
      "undefined" != typeof self && self, e.exports = function (e) {
        var r = {};

        function t(n) {
          if (r[n]) return r[n].exports;
          var o = r[n] = { i: n, l: !1, exports: {} };
          return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        return t.m = e, t.c = r, t.d = function (e, r, n) {
          t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n })
        }, t.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
        }, t.t = function (e, r) {
          if (1 & r && (e = t(e)), 8 & r) return e;
          if (4 & r && "object" == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if (t.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
          }), 2 & r && "string" != typeof e) for (var o in e) t.d(n, o, function (r) {
            return e[r]
          }.bind(null, o));
          return n
        }, t.n = function (e) {
          var r = e && e.__esModule ? function () {
            return e.default
          } : function () {
            return e
          };
          return t.d(r, "a", r), r
        }, t.o = function (e, r) {
          return {}.hasOwnProperty.call(e, r)
        }, t.p = "", t(t.s = 0)
      }([function (e, r, t) {
        "use strict";

        function n(e) {
          return "[object RegExp]" === {}.toString.call(e)
        }

        t.r(r), t.d(r, "Promise", (function () {
          return M
        })), t.d(r, "TYPES", (function () {
          return Ue
        })), t.d(r, "ProxyWindow", (function () {
          return ye
        })), t.d(r, "setup", (function () {
          return qe
        })), t.d(r, "destroy", (function () {
          return Be
        })), t.d(r, "serializeMessage", (function () {
          return Ie
        })), t.d(r, "deserializeMessage", (function () {
          return De
        })), t.d(r, "createProxyWindow", (function () {
          return Ze
        })), t.d(r, "toProxyWindow", (function () {
          return ze
        })), t.d(r, "on", (function () {
          return Ce
        })), t.d(r, "once", (function () {
          return Fe
        })), t.d(r, "send", (function () {
          return Le
        })), t.d(r, "markWindowKnown", (function () {
          return se
        })), t.d(r, "cleanUpWindow", (function () {
          return He
        })), t.d(r, "bridge", (function () {
        }));
        var o = "Call was rejected by callee.\r\n";

        function a(e) {
          return void 0 === e && (e = window), "about:" === e.location.protocol
        }

        function c(e) {
          if (void 0 === e && (e = window), e) try {
            if (e.parent && e.parent !== e) return e.parent
          } catch (e) {
          }
        }

        function i(e) {
          if (void 0 === e && (e = window), e && !c(e)) try {
            return e.opener
          } catch (e) {
          }
        }

        function s(e) {
          try {
            return !0
          } catch (e) {
          }
          return !1
        }

        function d(e) {
          void 0 === e && (e = window);
          var r = e.location;
          if (!r) throw new Error("Can not read window location");
          var t = r.protocol;
          if (!t) throw new Error("Can not read window protocol");
          if ("file:" === t) return "file://";
          if ("about:" === t) {
            var n = c(e);
            return n && s() ? d(n) : "about://"
          }
          var o = r.host;
          if (!o) throw new Error("Can not read window host");
          return t + "//" + o
        }

        function u(e) {
          void 0 === e && (e = window);
          var r = d(e);
          return r && e.mockDomain && 0 === e.mockDomain.indexOf("mock:") ? e.mockDomain : r
        }

        function l(e) {
          if (!function (e) {
            try {
              if (e === window) return !0
            } catch (e) {
            }
            try {
              var r = Object.getOwnPropertyDescriptor(e, "location");
              if (r && !1 === r.enumerable) return !1
            } catch (e) {
            }
            try {
              if (a(e) && s()) return !0
            } catch (e) {
            }
            try {
              if (d(e) === d(window)) return !0
            } catch (e) {
            }
            return !1
          }(e)) return !1;
          try {
            if (e === window) return !0;
            if (a(e) && s()) return !0;
            if (u(window) === u(e)) return !0
          } catch (e) {
          }
          return !1
        }

        function f(e) {
          if (!l(e)) throw new Error("Expected window to be same domain");
          return e
        }

        function h(e, r) {
          if (!e || !r) return !1;
          var t = c(r);
          return t ? t === e : -1 !== function (e) {
            var r = [];
            try {
              for (; e.parent !== e;) r.push(e.parent), e = e.parent
            } catch (e) {
            }
            return r
          }(r).indexOf(e)
        }

        function b(e) {
          var r, t, n = [];
          try {
            r = e.frames
          } catch (t) {
            r = e
          }
          try {
            t = r.length
          } catch (e) {
          }
          if (0 === t) return n;
          if (t) {
            for (var o = 0; o < t; o++) {
              var a = void 0;
              try {
                a = r[o]
              } catch (e) {
                continue
              }
              n.push(a)
            }
            return n
          }
          for (var c = 0; c < 100; c++) {
            var i = void 0;
            try {
              i = r[c]
            } catch (e) {
              return n
            }
            if (!i) return n;
            n.push(i)
          }
          return n
        }

        var g = [], p = [];

        function v(e, r) {
          void 0 === r && (r = !0);
          try {
            if (e === window) return !1
          } catch (e) {
            return !0
          }
          try {
            if (!e) return !0
          } catch (e) {
            return !0
          }
          try {
            if (e.closed) return !0
          } catch (e) {
            return !e || e.message !== o
          }
          if (r && l(e)) try {
            if (e.mockclosed) return !0
          } catch (e) {
          }
          try {
            if (!e.parent || !e.top) return !0
          } catch (e) {
          }
          var t = function (e, r) {
            for (var t = 0; t < e.length; t++) try {
              if (e[t] === r) return t
            } catch (e) {
            }
            return -1
          }(g, e);
          if (-1 !== t) {
            var n = p[t];
            if (n && function (e) {
              if (!e.contentWindow) return !0;
              if (!e.parentNode) return !0;
              var r = e.ownerDocument;
              if (r && r.documentElement && !r.documentElement.contains(e)) {
                for (var t = e; t.parentNode && t.parentNode !== t;) t = t.parentNode;
                if (!t.host || !r.documentElement.contains(t.host)) return !0
              }
              return !1
            }(n)) return !0
          }
          return !1
        }

        function m(e) {
          return void 0 === e && (e = window), i(e = e || window) || c(e) || void 0
        }

        function y(e, r) {
          if ("string" == typeof e) {
            if ("string" == typeof r) return "*" === e || r === e;
            if (n(r)) return !1;
            if (Array.isArray(r)) return !1
          }
          return n(e) ? n(r) ? e.toString() === r.toString() : !Array.isArray(r) && Boolean(r.match(e)) : !!Array.isArray(e) && (Array.isArray(r) ? JSON.stringify(e) === JSON.stringify(r) : !n(r) && e.some((function (e) {
            return y(e, r)
          })))
        }

        function w(e) {
          try {
            if (e === window) return !0
          } catch (e) {
            if (e && e.message === o) return !0
          }
          try {
            if ("[object Window]" === {}.toString.call(e)) return !0
          } catch (e) {
            if (e && e.message === o) return !0
          }
          try {
            if (window.Window && e instanceof window.Window) return !0
          } catch (e) {
            if (e && e.message === o) return !0
          }
          try {
            if (e && e.self === e) return !0
          } catch (e) {
            if (e && e.message === o) return !0
          }
          try {
            if (e && e.parent === e) return !0
          } catch (e) {
            if (e && e.message === o) return !0
          }
          try {
            if (e && e.top === e) return !0
          } catch (e) {
            if (e && e.message === o) return !0
          }
          try {
            if (e && "__unlikely_value__" === e.__cross_domain_utils_window_check__) return !1
          } catch (e) {
            return !0
          }
          try {
            if ("postMessage" in e && "self" in e && "location" in e) return !0
          } catch (e) {
          }
          return !1
        }

        function k(e) {
          try {
            e.close()
          } catch (e) {
          }
        }

        function _(e) {
          try {
            if (!e) return !1;
            if ("undefined" != typeof Promise && e instanceof Promise) return !0;
            if ("undefined" != typeof window && "function" == typeof window.Window && e instanceof window.Window) return !1;
            if ("undefined" != typeof window && "function" == typeof window.constructor && e instanceof window.constructor) return !1;
            var r = {}.toString;
            if (r) {
              var t = r.call(e);
              if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
            }
            if ("function" == typeof e.then) return !0
          } catch (e) {
            return !1
          }
          return !1
        }

        var x, E = [], S = [], O = 0;

        function j() {
          if (!O && x) {
            var e = x;
            x = null, e.resolve()
          }
        }

        function P() {
          O += 1
        }

        function A() {
          O -= 1, j()
        }

        var M = function () {
          function e(e) {
            var r = this;
            if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], e) {
              var t, n, o = !1, a = !1, c = !1;
              P();
              try {
                e((function (e) {
                  c ? r.resolve(e) : (o = !0, t = e)
                }), (function (e) {
                  c ? r.reject(e) : (a = !0, n = e)
                }))
              } catch (e) {
                return A(), void this.reject(e)
              }
              A(), c = !0, o ? this.resolve(t) : a && this.reject(n)
            }
          }

          var r = e.prototype;
          return r.resolve = function (e) {
            if (this.resolved || this.rejected) return this;
            if (_(e)) throw new Error("Can not resolve promise with another promise");
            return this.resolved = !0, this.value = e, this.dispatch(), this
          }, r.reject = function (e) {
            var r = this;
            if (this.resolved || this.rejected) return this;
            if (_(e)) throw new Error("Can not reject promise with another promise");
            if (!e) {
              var t = e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
              e = new Error("Expected reject to be called with Error, got " + t)
            }
            return this.rejected = !0, this.error = e, this.errorHandled || setTimeout((function () {
              r.errorHandled || function (e, r) {
                if (-1 === E.indexOf(e)) {
                  E.push(e), setTimeout((function () {
                    throw e
                  }), 1);
                  for (var t = 0; t < S.length; t++) S[t](e, r)
                }
              }(e, r)
            }), 1), this.dispatch(), this
          }, r.asyncReject = function (e) {
            return this.errorHandled = !0, this.reject(e), this
          }, r.dispatch = function () {
            var r = this.resolved, t = this.rejected, n = this.handlers;
            if (!this.dispatching && (r || t)) {
              this.dispatching = !0, P();
              for (var o = function (e, r) {
                return e.then((function (e) {
                  r.resolve(e)
                }), (function (e) {
                  r.reject(e)
                }))
              }, a = 0; a < n.length; a++) {
                var c = n[a], i = c.onSuccess, s = c.onError, d = c.promise, u = void 0;
                if (r) try {
                  u = i ? i(this.value) : this.value
                } catch (e) {
                  d.reject(e);
                  continue
                } else if (t) {
                  if (!s) {
                    d.reject(this.error);
                    continue
                  }
                  try {
                    u = s(this.error)
                  } catch (e) {
                    d.reject(e);
                    continue
                  }
                }
                u instanceof e && (u.resolved || u.rejected) ? (u.resolved ? d.resolve(u.value) : d.reject(u.error), u.errorHandled = !0) : _(u) ? u instanceof e && (u.resolved || u.rejected) ? u.resolved ? d.resolve(u.value) : d.reject(u.error) : o(u, d) : d.resolve(u)
              }
              n.length = 0, this.dispatching = !1, A()
            }
          }, r.then = function (r, t) {
            if (r && "function" != typeof r && !r.call) throw new Error("Promise.then expected a function for success handler");
            if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
            var n = new e;
            return this.handlers.push({
              promise: n,
              onSuccess: r,
              onError: t
            }), this.errorHandled = !0, this.dispatch(), n
          }, r.catch = function (e) {
            return this.then(void 0, e)
          }, r.finally = function (r) {
            if (r && "function" != typeof r && !r.call) throw new Error("Promise.finally expected a function");
            return this.then((function (t) {
              return e.try(r).then((function () {
                return t
              }))
            }), (function (t) {
              return e.try(r).then((function () {
                throw t
              }))
            }))
          }, r.timeout = function (e, r) {
            var t = this;
            if (this.resolved || this.rejected) return this;
            var n = setTimeout((function () {
              t.resolved || t.rejected || t.reject(r || new Error("Promise timed out after " + e + "ms"))
            }), e);
            return this.then((function (e) {
              return clearTimeout(n), e
            }))
          }, r.toPromise = function () {
            if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
            return Promise.resolve(this)
          }, e.resolve = function (r) {
            return r instanceof e ? r : _(r) ? new e((function (e, t) {
              return r.then(e, t)
            })) : (new e).resolve(r)
          }, e.reject = function (r) {
            return (new e).reject(r)
          }, e.asyncReject = function (r) {
            return (new e).asyncReject(r)
          }, e.all = function (r) {
            var t = new e, n = r.length, o = [];
            if (!n) return t.resolve(o), t;
            for (var a = function (e, r, a) {
              return r.then((function (r) {
                o[e] = r, 0 == (n -= 1) && t.resolve(o)
              }), (function (e) {
                a.reject(e)
              }))
            }, c = 0; c < r.length; c++) {
              var i = r[c];
              if (i instanceof e) {
                if (i.resolved) {
                  o[c] = i.value, n -= 1;
                  continue
                }
              } else if (!_(i)) {
                o[c] = i, n -= 1;
                continue
              }
              a(c, e.resolve(i), t)
            }
            return 0 === n && t.resolve(o), t
          }, e.hash = function (r) {
            var t = {}, n = [], o = function (e) {
              if (r.hasOwnProperty(e)) {
                var o = r[e];
                _(o) ? n.push(o.then((function (r) {
                  t[e] = r
                }))) : t[e] = o
              }
            };
            for (var a in r) o(a);
            return e.all(n).then((function () {
              return t
            }))
          }, e.map = function (r, t) {
            return e.all(r.map(t))
          }, e.onPossiblyUnhandledException = function (e) {
            return function (e) {
              return S.push(e), {
                cancel: function () {
                  S.splice(S.indexOf(e), 1)
                }
              }
            }(e)
          }, e.try = function (r, t, n) {
            if (r && "function" != typeof r && !r.call) throw new Error("Promise.try expected a function");
            var o;
            P();
            try {
              o = r.apply(t, n || [])
            } catch (r) {
              return A(), e.reject(r)
            }
            return A(), e.resolve(o)
          }, e.delay = function (r) {
            return new e((function (e) {
              setTimeout(e, r)
            }))
          }, e.isPromise = function (r) {
            return !!(r && r instanceof e) || _(r)
          }, e.flush = function () {
            return r = x = x || new e, j(), r;
            var r
          }, e
        }();

        function T(e, r) {
          for (var t = 0; t < e.length; t++) try {
            if (e[t] === r) return t
          } catch (e) {
          }
          return -1
        }

        var N, R = function () {
          function e() {
            if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function () {
              if ("undefined" == typeof WeakMap) return !1;
              if (void 0 === Object.freeze) return !1;
              try {
                var e = new WeakMap, r = {};
                return Object.freeze(r), e.set(r, "__testvalue__"), "__testvalue__" === e.get(r)
              } catch (e) {
                return !1
              }
            }()) try {
              this.weakmap = new WeakMap
            } catch (e) {
            }
            this.keys = [], this.values = []
          }

          var r = e.prototype;
          return r._cleanupClosedWindows = function () {
            for (var e = this.weakmap, r = this.keys, t = 0; t < r.length; t++) {
              var n = r[t];
              if (w(n) && v(n)) {
                if (e) try {
                  e.delete(n)
                } catch (e) {
                }
                r.splice(t, 1), this.values.splice(t, 1), t -= 1
              }
            }
          }, r.isSafeToReadWrite = function (e) {
            return !w(e)
          }, r.set = function (e, r) {
            if (!e) throw new Error("WeakMap expected key");
            var t = this.weakmap;
            if (t) try {
              t.set(e, r)
            } catch (e) {
              delete this.weakmap
            }
            if (this.isSafeToReadWrite(e)) try {
              var n = this.name, o = e[n];
              return void (o && o[0] === e ? o[1] = r : Object.defineProperty(e, n, { value: [e, r], writable: !0 }))
            } catch (e) {
            }
            this._cleanupClosedWindows();
            var a = this.keys, c = this.values, i = T(a, e);
            -1 === i ? (a.push(e), c.push(r)) : c[i] = r
          }, r.get = function (e) {
            if (!e) throw new Error("WeakMap expected key");
            var r = this.weakmap;
            if (r) try {
              if (r.has(e)) return r.get(e)
            } catch (e) {
              delete this.weakmap
            }
            if (this.isSafeToReadWrite(e)) try {
              var t = e[this.name];
              return t && t[0] === e ? t[1] : void 0
            } catch (e) {
            }
            this._cleanupClosedWindows();
            var n = T(this.keys, e);
            if (-1 !== n) return this.values[n]
          }, r.delete = function (e) {
            if (!e) throw new Error("WeakMap expected key");
            var r = this.weakmap;
            if (r) try {
              r.delete(e)
            } catch (e) {
              delete this.weakmap
            }
            if (this.isSafeToReadWrite(e)) try {
              var t = e[this.name];
              t && t[0] === e && (t[0] = t[1] = void 0)
            } catch (e) {
            }
            this._cleanupClosedWindows();
            var n = this.keys, o = T(n, e);
            -1 !== o && (n.splice(o, 1), this.values.splice(o, 1))
          }, r.has = function (e) {
            if (!e) throw new Error("WeakMap expected key");
            var r = this.weakmap;
            if (r) try {
              if (r.has(e)) return !0
            } catch (e) {
              delete this.weakmap
            }
            if (this.isSafeToReadWrite(e)) try {
              var t = e[this.name];
              return !(!t || t[0] !== e)
            } catch (e) {
            }
            return this._cleanupClosedWindows(), -1 !== T(this.keys, e)
          }, r.getOrSet = function (e, r) {
            if (this.has(e)) return this.get(e);
            var t = r();
            return this.set(e, t), t
          }, e
        }();

        function W(e) {
          return e.name || e.__name__ || e.displayName || "anonymous"
        }

        function C(e, r) {
          try {
            delete e.name, e.name = r
          } catch (e) {
          }
          return e.__name__ = e.displayName = r, e
        }

        function F() {
          var e = "0123456789abcdef";
          return "xxxxxxxxxx".replace(/./g, (function () {
            return e.charAt(Math.floor(Math.random() * e.length))
          })) + "_" + function (e) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function (e, r) {
              return String.fromCharCode(parseInt(r, 16))
            })));
            if ("undefined" != typeof Buffer) return Buffer.from(e, "utf8").toString("base64");
            throw new Error("Can not find window.btoa or Buffer")
          }((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        }

        function L(e) {
          try {
            return JSON.stringify([].slice.call(e), (function (e, r) {
              return "function" == typeof r ? "memoize[" + function (e) {
                if (N = N || new R, null == e || "object" != typeof e && "function" != typeof e) throw new Error("Invalid object");
                var r = N.get(e);
                return r || (r = typeof e + ":" + F(), N.set(e, r)), r
              }(r) + "]" : r
            }))
          } catch (e) {
            throw new Error("Arguments not serializable -- can not be used to memoize")
          }
        }

        var I = [];

        function D(e, r) {
          var t = this;
          void 0 === r && (r = {});
          var n = new R, o = function () {
            for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++) o[a] = arguments[a];
            var c = n.getOrSet(r.thisNamespace ? this : e, (function () {
              return {}
            })), i = L(o), s = r.time;
            if (c[i] && s && Date.now() - c[i].time < s && delete c[i], c[i]) return c[i].value;
            var d = Date.now(), u = e.apply(this, arguments);
            return c[i] = { time: d, value: u }, c[i].value
          };
          return o.reset = function () {
            n.delete(r.thisNamespace ? t : e)
          }, I.push(o), C(o, (r.name || W(e)) + "::memoized")
        }

        function Z(e) {
          var r = {};

          function t() {
            for (var t = arguments, n = this, o = arguments.length, a = new Array(o), c = 0; c < o; c++) a[c] = arguments[c];
            var i = L(a);
            return r.hasOwnProperty(i) || (r[i] = M.try((function () {
              return e.apply(n, t)
            })).finally((function () {
              delete r[i]
            }))), r[i]
          }

          return t.reset = function () {
            r = {}
          }, C(t, W(e) + "::promiseMemoized")
        }

        function z() {
        }

        function q(e, r) {
          if (void 0 === r && (r = 1), r >= 3) return "stringifyError stack overflow";
          try {
            if (!e) return "<unknown error: " + {}.toString.call(e) + ">";
            if ("string" == typeof e) return e;
            if (e instanceof Error) {
              var t = e && e.stack, n = e && e.message;
              if (t && n) return -1 !== t.indexOf(n) ? t : n + "\n" + t;
              if (t) return t;
              if (n) return n
            }
            return e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
          } catch (e) {
            return "Error while stringifying error: " + q(e, r + 1)
          }
        }

        function B(e) {
          return "string" == typeof e ? e : e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
        }

        function U(e) {
          return "[object RegExp]" === {}.toString.call(e)
        }

        function H(e, r, t) {
          if (e.hasOwnProperty(r)) return e[r];
          var n = t();
          return e[r] = n, n
        }

        function K() {
          return Boolean(document.body) && "complete" === document.readyState
        }

        function G() {
          return Boolean(document.body) && "interactive" === document.readyState
        }

        D.clear = function () {
          for (var e = 0; e < I.length; e++) I[e].reset()
        }, D((function (e) {
          if (Object.values) return Object.values(e);
          var r = [];
          for (var t in e) e.hasOwnProperty(t) && r.push(e[t]);
          return r
        })), Error, D((function () {
          return new M((function (e) {
            if (K() || G()) return e();
            var r = setInterval((function () {
              if (K() || G()) return clearInterval(r), e()
            }), 10)
          }))
        }));
        var V = "undefined" != typeof document ? document.currentScript : null, $ = D((function () {
          if (V) return V;
          if (V = function () {
            try {
              var e = function () {
                try {
                  throw new Error("_")
                } catch (e) {
                  return e.stack || ""
                }
              }(), r = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e), t = r && r[1];
              if (!t) return;
              for (var n = 0, o = [].slice.call(document.getElementsByTagName("script")).reverse(); n < o.length; n++) {
                var a = o[n];
                if (a.src && a.src === t) return a
              }
            } catch (e) {
            }
          }()) return V;
          throw new Error("Can not determine current script")
        })), J = F();

        function Y(e) {
          void 0 === e && (e = window);
          var r = "__post_robot_10_0_41__";
          return e !== window ? e[r] : e[r] = e[r] || {}
        }

        D((function () {
          var e;
          try {
            e = $()
          } catch (e) {
            return J
          }
          var r = e.getAttribute("data-uid");
          return r && "string" == typeof r || (r = F(), e.setAttribute("data-uid", r)), r
        }));
        var X = function () {
          return {}
        };

        function Q(e, r) {
          return void 0 === e && (e = "store"), void 0 === r && (r = X), H(Y(), e, (function () {
            var e = r();
            return {
              has: function (r) {
                return e.hasOwnProperty(r)
              }, get: function (r, t) {
                return e.hasOwnProperty(r) ? e[r] : t
              }, set: function (r, t) {
                return e[r] = t, t
              }, del: function (r) {
                delete e[r]
              }, getOrSet: function (r, t) {
                return H(e, r, t)
              }, reset: function () {
                e = r()
              }, keys: function () {
                return Object.keys(e)
              }
            }
          }))
        }

        var ee, re = function () {
        };

        function te() {
          var e = Y();
          return e.WINDOW_WILDCARD = e.WINDOW_WILDCARD || new re, e.WINDOW_WILDCARD
        }

        function ne(e, r) {
          return void 0 === e && (e = "store"), void 0 === r && (r = X), Q("windowStore").getOrSet(e, (function () {
            var t = new R, n = function (e) {
              return t.getOrSet(e, r)
            };
            return {
              has: function (r) {
                return n(r).hasOwnProperty(e)
              }, get: function (r, t) {
                var o = n(r);
                return o.hasOwnProperty(e) ? o[e] : t
              }, set: function (r, t) {
                return n(r)[e] = t, t
              }, del: function (r) {
                delete n(r)[e]
              }, getOrSet: function (r, t) {
                return H(n(r), e, t)
              }
            }
          }))
        }

        function oe() {
          return Q("instance").getOrSet("instanceID", F)
        }

        function ae(e, r) {
          var t = r.domain, n = ne("helloPromises"), o = n.get(e);
          o && o.resolve({ domain: t });
          var a = M.resolve({ domain: t });
          return n.set(e, a), a
        }

        function ce(e, r) {
          return (0, r.send)(e, "postrobot_hello", { instanceID: oe() }, {
            domain: "*",
            timeout: -1
          }).then((function (r) {
            var t = r.origin, n = r.data.instanceID;
            return ae(e, { domain: t }), { win: e, domain: t, instanceID: n }
          }))
        }

        function ie(e, r) {
          var t = r.send;
          return ne("windowInstanceIDPromises").getOrSet(e, (function () {
            return ce(e, { send: t }).then((function (e) {
              return e.instanceID
            }))
          }))
        }

        function se(e) {
          ne("knownWindows").set(e, !0)
        }

        function de(e) {
          return "object" == typeof e && null !== e && "string" == typeof e.__type__
        }

        function ue(e) {
          return void 0 === e ? "undefined" : null === e ? "null" : Array.isArray(e) ? "array" : "function" == typeof e ? "function" : "object" == typeof e ? e instanceof Error ? "error" : "function" == typeof e.then ? "promise" : "[object RegExp]" === {}.toString.call(e) ? "regex" : "[object Date]" === {}.toString.call(e) ? "date" : "object" : "string" == typeof e ? "string" : "number" == typeof e ? "number" : "boolean" == typeof e ? "boolean" : void 0
        }

        function le(e, r) {
          return { __type__: e, __val__: r }
        }

        var fe, he = ((ee = {}).function = function () {
        }, ee.error = function (e) {
          return le("error", { message: e.message, stack: e.stack, code: e.code, data: e.data })
        }, ee.promise = function () {
        }, ee.regex = function (e) {
          return le("regex", e.source)
        }, ee.date = function (e) {
          return le("date", e.toJSON())
        }, ee.array = function (e) {
          return e
        }, ee.object = function (e) {
          return e
        }, ee.string = function (e) {
          return e
        }, ee.number = function (e) {
          return e
        }, ee.boolean = function (e) {
          return e
        }, ee.null = function (e) {
          return e
        }, ee), be = {}, ge = ((fe = {}).function = function () {
          throw new Error("Function serialization is not implemented; nothing to deserialize")
        }, fe.error = function (e) {
          var r = e.stack, t = e.code, n = e.data, o = new Error(e.message);
          return o.code = t, n && (o.data = n), o.stack = r + "\n\n" + o.stack, o
        }, fe.promise = function () {
          throw new Error("Promise serialization is not implemented; nothing to deserialize")
        }, fe.regex = function (e) {
          return new RegExp(e)
        }, fe.date = function (e) {
          return new Date(e)
        }, fe.array = function (e) {
          return e
        }, fe.object = function (e) {
          return e
        }, fe.string = function (e) {
          return e
        }, fe.number = function (e) {
          return e
        }, fe.boolean = function (e) {
          return e
        }, fe.null = function (e) {
          return e
        }, fe), pe = {};

        function ve() {
          for (var e = Q("idToProxyWindow"), r = 0, t = e.keys(); r < t.length; r++) {
            var n = t[r];
            e.get(n).shouldClean() && e.del(n)
          }
        }

        function me(e, r) {
          var t = r.send, n = r.id, o = void 0 === n ? F() : n, a = e.then((function (e) {
            if (l(e)) return f(e).name
          })), c = e.then((function (e) {
            if (v(e)) throw new Error("Window is closed, can not determine type");
            return i(e) ? "popup" : "iframe"
          }));
          return a.catch(z), c.catch(z), {
            id: o, getType: function () {
              return c
            }, getInstanceID: Z((function () {
              return e.then((function (e) {
                return ie(e, { send: t })
              }))
            })), close: function () {
              return e.then(k)
            }, getName: function () {
              return e.then((function (e) {
                if (!v(e)) return l(e) ? f(e).name : a
              }))
            }, focus: function () {
              return e.then((function (e) {
                e.focus()
              }))
            }, isClosed: function () {
              return e.then((function (e) {
                return v(e)
              }))
            }, setLocation: function (r) {
              return e.then((function (e) {
                var t = window.location.protocol + "//" + window.location.host;
                if (0 === r.indexOf("/")) r = "" + t + r; else if (!r.match(/^https?:\/\//) && 0 !== r.indexOf(t)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(r));
                if (l(e)) try {
                  if (e.location && "function" == typeof e.location.replace) return void e.location.replace(r)
                } catch (e) {
                }
                e.location = r
              }))
            }, setName: function (r) {
              return e.then((function (e) {
                var t = l(e), n = function (e) {
                  if (l(e)) return f(e).frameElement;
                  for (var r = 0, t = document.querySelectorAll("iframe"); r < t.length; r++) {
                    var n = t[r];
                    if (n && n.contentWindow && n.contentWindow === e) return n
                  }
                }(e);
                if (!t) throw new Error("Can not set name for cross-domain window: " + r);
                f(e).name = r, n && n.setAttribute("name", r), a = M.resolve(r)
              }))
            }
          }
        }

        new M((function (e) {
          if (window.document && window.document.body) return e(window.document.body);
          var r = setInterval((function () {
            if (window.document && window.document.body) return clearInterval(r), e(window.document.body)
          }), 10)
        }));
        var ye = function () {
          function e(e) {
            var r = e.send, t = e.win, n = e.serializedWindow;
            this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new M, this.serializedWindow = n || me(this.actualWindowPromise, { send: r }), Q("idToProxyWindow").set(this.getID(), this), t && this.setWindow(t, { send: r })
          }

          var r = e.prototype;
          return r.getID = function () {
            return this.serializedWindow.id
          }, r.getType = function () {
            return this.serializedWindow.getType()
          }, r.isPopup = function () {
            return this.getType().then((function (e) {
              return "popup" === e
            }))
          }, r.setLocation = function (e) {
            var r = this;
            return this.serializedWindow.setLocation(e).then((function () {
              return r
            }))
          }, r.getName = function () {
            return this.serializedWindow.getName()
          }, r.setName = function (e) {
            var r = this;
            return this.serializedWindow.setName(e).then((function () {
              return r
            }))
          }, r.close = function () {
            var e = this;
            return this.serializedWindow.close().then((function () {
              return e
            }))
          }, r.focus = function () {
            var e = this, r = this.isPopup(), t = this.getName(),
              n = M.hash({ isPopup: r, name: t }).then((function (e) {
                var r = e.name;
                e.isPopup && r && window.open("", r)
              })), o = this.serializedWindow.focus();
            return M.all([n, o]).then((function () {
              return e
            }))
          }, r.isClosed = function () {
            return this.serializedWindow.isClosed()
          }, r.getWindow = function () {
            return this.actualWindow
          }, r.setWindow = function (e, r) {
            var t = r.send;
            this.actualWindow = e, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = me(this.actualWindowPromise, {
              send: t,
              id: this.getID()
            }), ne("winToProxyWindow").set(e, this)
          }, r.awaitWindow = function () {
            return this.actualWindowPromise
          }, r.matchWindow = function (e, r) {
            var t = this, n = r.send;
            return M.try((function () {
              return t.actualWindow ? e === t.actualWindow : M.hash({
                proxyInstanceID: t.getInstanceID(),
                knownWindowInstanceID: ie(e, { send: n })
              }).then((function (r) {
                var o = r.proxyInstanceID === r.knownWindowInstanceID;
                return o && t.setWindow(e, { send: n }), o
              }))
            }))
          }, r.unwrap = function () {
            return this.actualWindow || this
          }, r.getInstanceID = function () {
            return this.serializedWindow.getInstanceID()
          }, r.shouldClean = function () {
            return Boolean(this.actualWindow && v(this.actualWindow))
          }, r.serialize = function () {
            return this.serializedWindow
          }, e.unwrap = function (r) {
            return e.isProxyWindow(r) ? r.unwrap() : r
          }, e.serialize = function (r, t) {
            var n = t.send;
            return ve(), e.toProxyWindow(r, { send: n }).serialize()
          }, e.deserialize = function (r, t) {
            var n = t.send;
            return ve(), Q("idToProxyWindow").get(r.id) || new e({ serializedWindow: r, send: n })
          }, e.isProxyWindow = function (e) {
            return Boolean(e && !w(e) && e.isProxyWindow)
          }, e.toProxyWindow = function (r, t) {
            var n = t.send;
            if (ve(), e.isProxyWindow(r)) return r;
            var o = r;
            return ne("winToProxyWindow").get(o) || new e({ win: o, send: n })
          }, e
        }();

        function we(e, r, t, n, o) {
          var a = ne("methodStore"), c = Q("proxyWindowMethods");
          ye.isProxyWindow(n) ? c.set(e, {
            val: r,
            name: t,
            domain: o,
            source: n
          }) : (c.del(e), a.getOrSet(n, (function () {
            return {}
          }))[e] = { domain: o, name: t, val: r, source: n })
        }

        function ke(e, r) {
          var t = ne("methodStore"), n = Q("proxyWindowMethods");
          return t.getOrSet(e, (function () {
            return {}
          }))[r] || n.get(r)
        }

        function _e(e, r, t, n, o) {
          var a, c, i;
          c = (a = {
            on: o.on,
            send: o.send
          }).on, i = a.send, Q("builtinListeners").getOrSet("functionCalls", (function () {
            return c("postrobot_method", { domain: "*" }, (function (e) {
              var r = e.source, t = e.origin, n = e.data, o = n.id, a = n.name, c = ke(r, o);
              if (!c) throw new Error("Could not find method '" + a + "' with id: " + n.id + " in " + u(window));
              var s = c.source, d = c.domain, l = c.val;
              return M.try((function () {
                if (!y(d, t)) throw new Error("Method '" + n.name + "' domain " + JSON.stringify(U(c.domain) ? c.domain.source : c.domain) + " does not match origin " + t + " in " + u(window));
                if (ye.isProxyWindow(s)) return s.matchWindow(r, { send: i }).then((function (e) {
                  if (!e) throw new Error("Method call '" + n.name + "' failed - proxy window does not match source in " + u(window))
                }))
              })).then((function () {
                return l.apply({ source: r, origin: t }, n.args)
              }), (function (e) {
                return M.try((function () {
                  if (l.onError) return l.onError(e)
                })).then((function () {
                  var r, t;
                  throw e.stack && (e.stack = "Remote call to " + a + "(" + (void 0 === (r = n.args) && (r = []), (t = r, [].slice.call(t)).map((function (e) {
                    return "string" == typeof e ? "'" + e + "'" : void 0 === e ? "undefined" : null === e ? "null" : "boolean" == typeof e ? e.toString() : Array.isArray(e) ? "[ ... ]" : "object" == typeof e ? "{ ... }" : "function" == typeof e ? "() => { ... }" : "<" + typeof e + ">"
                  })).join(", ") + ") failed\n\n") + e.stack), e
                }))
              })).then((function (e) {
                return { result: e, id: o, name: a }
              }))
            }))
          }));
          var s = t.__id__ || F();
          e = ye.unwrap(e);
          var d = t.__name__ || t.name || n;
          return "string" == typeof d && "function" == typeof d.indexOf && 0 === d.indexOf("anonymous::") && (d = d.replace("anonymous::", n + "::")), ye.isProxyWindow(e) ? (we(s, t, d, e, r), e.awaitWindow().then((function (e) {
            we(s, t, d, e, r)
          }))) : we(s, t, d, e, r), le("cross_domain_function", { id: s, name: d })
        }

        function xe(e, r, t, n) {
          var o, a = n.on, c = n.send;
          return function (e, r) {
            void 0 === r && (r = be);
            var t = JSON.stringify(e, (function (e) {
              var t = this[e];
              if (de(this)) return t;
              var n = ue(t);
              if (!n) return t;
              var o = r[n] || he[n];
              return o ? o(t, e) : t
            }));
            return void 0 === t ? "undefined" : t
          }(t, ((o = {}).promise = function (t, n) {
            return function (e, r, t, n, o) {
              return le("cross_domain_zalgo_promise", {
                then: _e(e, r, (function (e, r) {
                  return t.then(e, r)
                }), n, { on: o.on, send: o.send })
              })
            }(e, r, t, n, { on: a, send: c })
          }, o.function = function (t, n) {
            return _e(e, r, t, n, { on: a, send: c })
          }, o.object = function (e) {
            return w(e) || ye.isProxyWindow(e) ? le("cross_domain_window", ye.serialize(e, { send: c })) : e
          }, o))
        }

        function Ee(e, r, t, n) {
          var o, a = n.send;
          return function (e, r) {
            if (void 0 === r && (r = pe), "undefined" !== e) return JSON.parse(e, (function (e, t) {
              if (de(this)) return t;
              var n, o;
              if (de(t) ? (n = t.__type__, o = t.__val__) : (n = ue(t), o = t), !n) return o;
              var a = r[n] || ge[n];
              return a ? a(o, e) : o
            }))
          }(t, ((o = {}).cross_domain_zalgo_promise = function (e) {
            return function (e, r, t) {
              return new M(t.then)
            }(0, 0, e)
          }, o.cross_domain_function = function (t) {
            return function (e, r, t, n) {
              var o = t.id, a = t.name, c = n.send, i = function (t) {
                function n() {
                  var i = arguments;
                  return ye.toProxyWindow(e, { send: c }).awaitWindow().then((function (e) {
                    var s = ke(e, o);
                    if (s && s.val !== n) return s.val.apply({ source: window, origin: u() }, i);
                    var d = [].slice.call(i);
                    return t.fireAndForget ? c(e, "postrobot_method", { id: o, name: a, args: d }, {
                      domain: r,
                      fireAndForget: !0
                    }) : c(e, "postrobot_method", { id: o, name: a, args: d }, {
                      domain: r,
                      fireAndForget: !1
                    }).then((function (e) {
                      return e.data.result
                    }))
                  })).catch((function (e) {
                    throw e
                  }))
                }

                return void 0 === t && (t = {}), n.__name__ = a, n.__origin__ = r, n.__source__ = e, n.__id__ = o, n.origin = r, n
              }, s = i();
              return s.fireAndForget = i({ fireAndForget: !0 }), s
            }(e, r, t, { send: a })
          }, o.cross_domain_window = function (e) {
            return ye.deserialize(e, { send: a })
          }, o))
        }

        var Se = {};

        function Oe(e, r, t, n) {
          var o = n.on, a = n.send;
          return M.try((function () {
            var n = ne().getOrSet(e, (function () {
              return {}
            }));
            return n.buffer = n.buffer || [], n.buffer.push(t), n.flush = n.flush || M.flush().then((function () {
              if (v(e)) throw new Error("Window is closed");
              var t, c = xe(e, r, ((t = {}).__post_robot_10_0_41__ = n.buffer || [], t), { on: o, send: a });
              delete n.buffer;
              for (var i = Object.keys(Se), s = [], d = 0; d < i.length; d++) {
                var u = i[d];
                try {
                  Se[u](e, c, r)
                } catch (e) {
                  s.push(e)
                }
              }
              if (s.length === i.length) throw new Error("All post-robot messaging strategies failed:\n\n" + s.map((function (e, r) {
                return r + ". " + q(e)
              })).join("\n\n"))
            })), n.flush.then((function () {
              delete n.flush
            }))
          })).then(z)
        }

        function je(e) {
          return Q("responseListeners").get(e)
        }

        function Pe(e) {
          Q("responseListeners").del(e)
        }

        function Ae(e) {
          return Q("erroredResponseListeners").has(e)
        }

        function Me(e) {
          var r = e.name, t = e.win, n = e.domain, o = ne("requestListeners");
          if ("*" === t && (t = null), "*" === n && (n = null), !r) throw new Error("Name required to get request listener");
          for (var a = 0, c = [t, te()]; a < c.length; a++) {
            var i = c[a];
            if (i) {
              var s = o.get(i);
              if (s) {
                var d = s[r];
                if (d) {
                  if (n && "string" == typeof n) {
                    if (d[n]) return d[n];
                    if (d.__domain_regex__) for (var u = 0, l = d.__domain_regex__; u < l.length; u++) {
                      var f = l[u], h = f.listener;
                      if (y(f.regex, n)) return h
                    }
                  }
                  if (d["*"]) return d["*"]
                }
              }
            }
          }
        }

        function Te(e, r, t, n) {
          var o = n.on, a = n.send, c = Me({ name: t.name, win: e, domain: r }),
            i = "postrobot_method" === t.name && t.data && "string" == typeof t.data.name ? t.data.name + "()" : t.name;

          function s(n, c, s) {
            return M.flush().then((function () {
              if (!t.fireAndForget && !v(e)) try {
                return Oe(e, r, {
                  id: F(),
                  origin: u(window),
                  type: "postrobot_message_response",
                  hash: t.hash,
                  name: t.name,
                  ack: n,
                  data: c,
                  error: s
                }, { on: o, send: a })
              } catch (e) {
                throw new Error("Send response message failed for " + i + " in " + u() + "\n\n" + q(e))
              }
            }))
          }

          return M.all([M.flush().then((function () {
            if (!t.fireAndForget && !v(e)) try {
              return Oe(e, r, {
                id: F(),
                origin: u(window),
                type: "postrobot_message_ack",
                hash: t.hash,
                name: t.name
              }, { on: o, send: a })
            } catch (e) {
              throw new Error("Send ack message failed for " + i + " in " + u() + "\n\n" + q(e))
            }
          })), M.try((function () {
            if (!c) throw new Error("No handler found for post message: " + t.name + " from " + r + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!y(c.domain, r)) throw new Error("Request origin " + r + " does not match domain " + c.domain.toString());
            return c.handler({ source: e, origin: r, data: t.data })
          })).then((function (e) {
            return s("success", e)
          }), (function (e) {
            return s("error", null, e)
          }))]).then(z).catch((function (e) {
            if (c && c.handleError) return c.handleError(e);
            throw e
          }))
        }

        function Ne(e, r, t) {
          if (!Ae(t.hash)) {
            var n = je(t.hash);
            if (!n) throw new Error("No handler found for post message ack for message: " + t.name + " from " + r + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            try {
              if (!y(n.domain, r)) throw new Error("Ack origin " + r + " does not match domain " + n.domain.toString());
              if (e !== n.win) throw new Error("Ack source does not match registered window")
            } catch (e) {
              n.promise.reject(e)
            }
            n.ack = !0
          }
        }

        function Re(e, r, t) {
          if (!Ae(t.hash)) {
            var o, a = je(t.hash);
            if (!a) throw new Error("No handler found for post message response for message: " + t.name + " from " + r + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!y(a.domain, r)) throw new Error("Response origin " + r + " does not match domain " + (o = a.domain, Array.isArray(o) ? "(" + o.join(" | ") + ")" : n(o) ? "RegExp(" + o.toString() : o.toString()));
            if (e !== a.win) throw new Error("Response source does not match registered window");
            Pe(t.hash), "error" === t.ack ? a.promise.reject(t.error) : "success" === t.ack && a.promise.resolve({
              source: e,
              origin: r,
              data: t.data
            })
          }
        }

        function We(e, r) {
          var t = r.on, n = r.send, o = Q("receivedMessages");
          try {
            if (!window || window.closed || !e.source) return
          } catch (e) {
            return
          }
          var a = e.source, c = e.origin, i = function (e, r, t, n) {
            var o, a = n.on, c = n.send;
            try {
              o = Ee(r, t, e, { on: a, send: c })
            } catch (e) {
              return
            }
            if (o && "object" == typeof o && null !== o) {
              var i = o.__post_robot_10_0_41__;
              if (Array.isArray(i)) return i
            }
          }(e.data, a, c, { on: t, send: n });
          if (i) {
            se(a);
            for (var s = 0; s < i.length; s++) {
              var d = i[s];
              if (o.has(d.id)) return;
              if (o.set(d.id, !0), v(a) && !d.fireAndForget) return;
              0 === d.origin.indexOf("file:") && (c = "file://");
              try {
                "postrobot_message_request" === d.type ? Te(a, c, d, {
                  on: t,
                  send: n
                }) : "postrobot_message_response" === d.type ? Re(a, c, d) : "postrobot_message_ack" === d.type && Ne(a, c, d)
              } catch (e) {
                setTimeout((function () {
                  throw e
                }), 0)
              }
            }
          }
        }

        function Ce(e, r, t) {
          if (!e) throw new Error("Expected name");
          if ("function" == typeof (r = r || {}) && (t = r, r = {}), !t) throw new Error("Expected handler");
          (r = r || {}).name = e, r.handler = t || r.handler;
          var n = r.window, o = r.domain, a = function e(r, t) {
            var n = r.name, o = r.win, a = r.domain, c = ne("requestListeners");
            if (!n || "string" != typeof n) throw new Error("Name required to add request listener");
            if (Array.isArray(o)) {
              for (var i = [], s = 0, d = o; s < d.length; s++) i.push(e({ name: n, domain: a, win: d[s] }, t));
              return {
                cancel: function () {
                  for (var e = 0; e < i.length; e++) i[e].cancel()
                }
              }
            }
            if (Array.isArray(a)) {
              for (var u = [], l = 0, f = a; l < f.length; l++) u.push(e({ name: n, win: o, domain: f[l] }, t));
              return {
                cancel: function () {
                  for (var e = 0; e < u.length; e++) u[e].cancel()
                }
              }
            }
            var h = Me({ name: n, win: o, domain: a });
            if (o && "*" !== o || (o = te()), a = a || "*", h) throw o && a ? new Error("Request listener already exists for " + n + " on domain " + a.toString() + " for " + (o === te() ? "wildcard" : "specified") + " window") : o ? new Error("Request listener already exists for " + n + " for " + (o === te() ? "wildcard" : "specified") + " window") : a ? new Error("Request listener already exists for " + n + " on domain " + a.toString()) : new Error("Request listener already exists for " + n);
            var b, g, p = c.getOrSet(o, (function () {
              return {}
            })), v = H(p, n, (function () {
              return {}
            })), m = a.toString();
            return U(a) ? (b = H(v, "__domain_regex__", (function () {
              return []
            }))).push(g = { regex: a, listener: t }) : v[m] = t, {
              cancel: function () {
                delete v[m], g && (b.splice(b.indexOf(g, 1)), b.length || delete v.__domain_regex__), Object.keys(v).length || delete p[n], o && !Object.keys(p).length && c.del(o)
              }
            }
          }({ name: e, win: n, domain: o }, {
            handler: r.handler, handleError: r.errorHandler || function (e) {
              throw e
            }, window: n, domain: o || "*", name: e
          });
          return {
            cancel: function () {
              a.cancel()
            }
          }
        }

        function Fe(e, r, t) {
          "function" == typeof (r = r || {}) && (t = r, r = {});
          var n, o = new M;
          return r.errorHandler = function (e) {
            n.cancel(), o.reject(e)
          }, n = Ce(e, r, (function (e) {
            if (n.cancel(), o.resolve(e), t) return t(e)
          })), o.cancel = n.cancel, o
        }

        Se.postrobot_post_message = function (e, r, t) {
          0 === t.indexOf("file:") && (t = "*"), e.postMessage(r, t)
        };
        var Le = function e(r, t, n, o) {
          var a = (o = o || {}).domain || "*", i = o.timeout || -1, s = o.timeout || 5e3, d = o.fireAndForget || !1;
          return M.try((function () {
            if (function (e, r, t) {
              if (!e) throw new Error("Expected name");
              if (t && "string" != typeof t && !Array.isArray(t) && !U(t)) throw new TypeError("Can not send " + e + ". Expected domain " + JSON.stringify(t) + " to be a string, array, or regex");
              if (v(r)) throw new Error("Can not send " + e + ". Target window is closed")
            }(t, r, a), function (e, r) {
              var t = m(r);
              if (t) return t === e;
              if (r === e) return !1;
              if (function (e) {
                void 0 === e && (e = window);
                try {
                  if (e.top) return e.top
                } catch (e) {
                }
                if (c(e) === e) return e;
                try {
                  if (h(window, e) && window.top) return window.top
                } catch (e) {
                }
                try {
                  if (h(e, window) && window.top) return window.top
                } catch (e) {
                }
                for (var r = 0, t = function e(r) {
                  for (var t = [], n = 0, o = b(r); n < o.length; n++) {
                    var a = o[n];
                    t.push(a);
                    for (var c = 0, i = e(a); c < i.length; c++) t.push(i[c])
                  }
                  return t
                }(e); r < t.length; r++) {
                  var n = t[r];
                  try {
                    if (n.top) return n.top
                  } catch (e) {
                  }
                  if (c(n) === n) return n
                }
              }(r) === r) return !1;
              for (var n = 0, o = b(e); n < o.length; n++) if (o[n] === r) return !0;
              return !1
            }(window, r)) return function (e, r, t) {
              void 0 === r && (r = 5e3), void 0 === t && (t = "Window");
              var n = function (e) {
                return ne("helloPromises").getOrSet(e, (function () {
                  return new M
                }))
              }(e);
              return -1 !== r && (n = n.timeout(r, new Error(t + " did not load after " + r + "ms"))), n
            }(r, s)
          })).then((function (t) {
            return function (e, r, t, n) {
              var o = n.send;
              return M.try((function () {
                return "string" == typeof r ? r : M.try((function () {
                  return t || ce(e, { send: o }).then((function (e) {
                    return e.domain
                  }))
                })).then((function (e) {
                  if (!y(r, r)) throw new Error("Domain " + B(r) + " does not match " + B(r));
                  return e
                }))
              }))
            }(r, a, (void 0 === t ? {} : t).domain, { send: e })
          })).then((function (o) {
            var a, c = o, s = "postrobot_method" === t && n && "string" == typeof n.name ? n.name + "()" : t, l = new M,
              f = t + "_" + F();
            if (!d) {
              var h = { name: t, win: r, domain: c, promise: l };
              !function (e, r) {
                Q("responseListeners").set(e, r)
              }(f, h);
              var b = ne("requestPromises").getOrSet(r, (function () {
                return []
              }));
              b.push(l), l.catch((function () {
                !function (e) {
                  Q("erroredResponseListeners").set(e, !0)
                }(f), Pe(f)
              }));
              var g = function (e) {
                return ne("knownWindows").get(e, !1)
              }(r) ? 1e4 : 2e3, p = i, m = g, y = p, w = (function e() {
                a = setTimeout((function () {
                  v(r) ? l.reject(new Error("Window closed for " + t + " before " + (h.ack ? "response" : "ack"))) : h.cancelled ? l.reject(new Error("Response listener was cancelled for " + t)) : (m = Math.max(m - 500, 0), -1 !== y && (y = Math.max(y - 500, 0)), h.ack || 0 !== m ? 0 === y && l.reject(new Error("No response for postMessage " + s + " in " + u() + " in " + p + "ms")) : l.reject(new Error("No ack for postMessage " + s + " in " + u() + " in " + g + "ms"))), e()
                }), 500)
              }(), {
                cancel: function () {
                  clearTimeout(a)
                }
              });
              l.finally((function () {
                w.cancel(), b.splice(b.indexOf(l, 1))
              })).catch(z)
            }
            return Oe(r, c, {
              id: F(),
              origin: u(window),
              type: "postrobot_message_request",
              hash: f,
              name: t,
              data: n,
              fireAndForget: d
            }, { on: Ce, send: e }).then((function () {
              return d ? l.resolve() : l
            }), (function (e) {
              throw new Error("Send request message failed for " + s + " in " + u() + "\n\n" + q(e))
            }))
          }))
        };

        function Ie(e, r, t) {
          return xe(e, r, t, { on: Ce, send: Le })
        }

        function De(e, r, t) {
          return Ee(e, r, t, { on: Ce, send: Le })
        }

        function Ze(e) {
          return new ye({ send: Le, win: e })
        }

        function ze(e) {
          return ye.toProxyWindow(e, { send: Le })
        }

        function qe() {
          var e, r, t, n;
          Y().initialized || (Y().initialized = !0, r = (e = {
            on: Ce,
            send: Le
          }).on, t = e.send, (n = Y()).receiveMessage = n.receiveMessage || function (e) {
            return We(e, { on: r, send: t })
          }, function (e) {
            var r = e.on, t = e.send;
            Q().getOrSet("postMessageListener", (function () {
              return e = window, n = function (e) {
                !function (e, r) {
                  var t = r.on, n = r.send;
                  M.try((function () {
                    var r = e.source || e.sourceElement, o = e.origin || e.originalEvent && e.originalEvent.origin,
                      a = e.data;
                    if ("null" === o && (o = "file://"), r) {
                      if (!o) throw new Error("Post message did not have origin domain");
                      We({ source: r, origin: o, data: a }, { on: t, send: n })
                    }
                  }))
                }(e, { on: r, send: t })
              }, e.addEventListener("message", n), {
                cancel: function () {
                  e.removeEventListener("message", n)
                }
              };
              var e, n
            }))
          }({ on: Ce, send: Le }), function (e) {
            var r = e.on, t = e.send;
            Q("builtinListeners").getOrSet("helloListener", (function () {
              var e = r("postrobot_hello", { domain: "*" }, (function (e) {
                return ae(e.source, { domain: e.origin }), { instanceID: oe() }
              })), n = m();
              return n && ce(n, { send: t }).catch((function (e) {
              })), e
            }))
          }({ on: Ce, send: Le }))
        }

        function Be() {
          var e;
          !function () {
            for (var e = Q("responseListeners"), r = 0, t = e.keys(); r < t.length; r++) {
              var n = t[r], o = e.get(n);
              o && (o.cancelled = !0), e.del(n)
            }
          }(), (e = Q().get("postMessageListener")) && e.cancel(), delete window.__post_robot_10_0_41__
        }

        var Ue = !0;

        function He(e) {
          for (var r = 0, t = ne("requestPromises").get(e, []); r < t.length; r++) t[r].reject(new Error("Window " + (v(e) ? "closed" : "cleaned up") + " before response")).catch(z)
        }

        qe()
      }])
    }, 6146: (e, r, t) => {
      e.exports = t(8170), e.exports.default = e.exports
    }, 3426: (e, r, t) => {
      "use strict";
      var n = t(7320), o = "function" == typeof Symbol && Symbol.for;
      o && Symbol.for("react.element"), o && Symbol.for("react.portal"), o && Symbol.for("react.fragment"), o && Symbol.for("react.strict_mode"), o && Symbol.for("react.profiler"), o && Symbol.for("react.provider"), o && Symbol.for("react.context"), o && Symbol.for("react.forward_ref"), o && Symbol.for("react.suspense"), o && Symbol.for("react.memo"), o && Symbol.for("react.lazy"), "function" == typeof Symbol && Symbol.iterator;

      function a(e) {
        for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) r += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }

      var c = {
        isMounted: function () {
          return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
      }, i = {};

      function s(e, r, t) {
        this.props = e, this.context = r, this.refs = i, this.updater = t || c
      }

      function d() {
      }

      function u(e, r, t) {
        this.props = e, this.context = r, this.refs = i, this.updater = t || c
      }

      s.prototype.isReactComponent = {}, s.prototype.setState = function (e, r) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(a(85));
        this.updater.enqueueSetState(this, e, r, "setState")
      }, s.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, d.prototype = s.prototype;
      var l = u.prototype = new d;
      l.constructor = u, n(l, s.prototype), l.isPureReactComponent = !0;
      Object.prototype.hasOwnProperty;
      var f = null;

      function h() {
        var e = f;
        if (null === e) throw Error(a(321));
        return e
      }

      r.useEffect = function (e, r) {
        return h().useEffect(e, r)
      }, r.useState = function (e) {
        return h().useState(e)
      }
    }, 2784: (e, r, t) => {
      "use strict";
      e.exports = t(3426)
    }, 8942: function (e, r, t) {
      "use strict";
      var n = this && this.__createBinding || (Object.create ? function (e, r, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
          enumerable: !0, get: function () {
            return r[t]
          }
        })
      } : function (e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
      }), o = this && this.__exportStar || function (e, r) {
        for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(r, t) || n(r, e, t)
      };
      Object.defineProperty(r, "__esModule", { value: !0 }), r.ALLOWED_ORIGINS = void 0, o(t(8050), r), r.ALLOWED_ORIGINS = [/.*\.atlassian\.net$/, /^(http:\/\/|https:\/\/)?bitbucket.org$/, /.*\.jira\.com$/, /.*\.jira-dev\.com$/, /.*\.devbucket\.org$/, /^https:\/\/staging\.bb-inf\.net$/, /^https:\/\/integration\.bb-inf\.net$/, /.*\.stg\.atlassian\.com$/, /.*\.atlassian-fex\.net$/, /^(http:\/\/|https:\/\/)?localhost:8081$/, /^(http:\/\/|https:\/\/)?localhost:6006$/]
    }, 8050: (e, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }), r.AdapterManager = void 0;
      var n = function () {
        function e() {
        }

        return e.prototype.getActiveAdapters = function () {
          var e = [];
          if (this.shouldLoadAdapter("postrobot")) {
            var r = (0, t(5735).postRobotAdapterFactory)(window.postRobot, window.parent);
            e.push(r)
          }
          return e
        }, e.prototype.shouldLoadAdapter = function (e) {
          return "postrobot" === e || !1
        }, e
      }();
      r.AdapterManager = n
    }, 5735: function (e, r, t) {
      "use strict";
      var n = this && this.__awaiter || function (e, r, t, n) {
        return new (t || (t = Promise))((function (o, a) {
          function c(e) {
            try {
              s(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              s(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var r;
            e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t((function (e) {
              e(r)
            }))).then(c, i)
          }

          s((n = n.apply(e, r || [])).next())
        }))
      }, o = this && this.__generator || function (e, r) {
        var t, n, o, a, c = {
          label: 0, sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1]
          }, trys: [], ops: []
        };
        return a = {
          next: i(0),
          throw: i(1),
          return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
          return this
        }), a;

        function i(a) {
          return function (i) {
            return function (a) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                  case 0:
                  case 1:
                    o = a;
                    break;
                  case 4:
                    return c.label++, { value: a[1], done: !1 };
                  case 5:
                    c.label++, n = a[1], a = [0];
                    continue;
                  case 7:
                    a = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                      c.label = a[1];
                      break
                    }
                    if (6 === a[0] && c.label < o[1]) {
                      c.label = o[1], o = a;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(a);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                a = r.call(e, c)
              } catch (e) {
                a = [6, e], n = 0
              } finally {
                t = o = 0
              }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 }
            }([a, i])
          }
        }
      };
      Object.defineProperty(r, "__esModule", { value: !0 }), r.postRobotAdapterFactory = void 0;
      var a = t(3830);
      r.postRobotAdapterFactory = function (e, r) {
        if (e) return {
          name: "postrobot", request: function (t, c) {
            return n(void 0, void 0, void 0, (function () {
              var n, i, s;
              return o(this, (function (o) {
                switch (o.label) {
                  case 0:
                    return [4, e.send(r, t, c)];
                  case 1:
                    return n = o.sent(), i = n.data, s = n.origin, (0, a.checkOrigin)(s), [2, i]
                }
              }))
            }))
          }, once: function (t, n) {
            e.once(t, { window: r }, (function (e) {
              var r = e.source, t = e.origin, o = e.data;
              (0, a.checkOrigin)(t), n({ source: r, origin: t, data: o })
            }))
          }, on: function (t, n) {
            e.on(t, { window: r }, (function (e) {
              var r = e.source, t = e.origin, o = e.data;
              (0, a.checkOrigin)(t), n({ source: r, origin: t, data: o })
            }))
          }
        }
      }
    }, 3830: (e, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }), r.checkOrigin = void 0;
      var n = t(8942);
      r.checkOrigin = function (e) {
        var r, t = (r = window.location.pathname.split("/").find((function (e) {
          return e.startsWith("_hostname_")
        }))) ? r.substring("_hostname_".length) : null;
        if (null !== t) {
          if (t !== new URL(e).hostname) throw new Error("Message received from invalid origin: ".concat(e))
        } else if (!n.ALLOWED_ORIGINS.reduce((function (r, t) {
          return r || t.test(e)
        }), !1)) throw new Error("Message received from invalid origin: ".concat(e))
      }
    }, 7231: function (e, r, t) {
      "use strict";
      var n = this && this.__awaiter || function (e, r, t, n) {
        return new (t || (t = Promise))((function (o, a) {
          function c(e) {
            try {
              s(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              s(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var r;
            e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t((function (e) {
              e(r)
            }))).then(c, i)
          }

          s((n = n.apply(e, r || [])).next())
        }))
      }, o = this && this.__generator || function (e, r) {
        var t, n, o, a, c = {
          label: 0, sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1]
          }, trys: [], ops: []
        };
        return a = {
          next: i(0),
          throw: i(1),
          return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
          return this
        }), a;

        function i(a) {
          return function (i) {
            return function (a) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                  case 0:
                  case 1:
                    o = a;
                    break;
                  case 4:
                    return c.label++, { value: a[1], done: !1 };
                  case 5:
                    c.label++, n = a[1], a = [0];
                    continue;
                  case 7:
                    a = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                      c.label = a[1];
                      break
                    }
                    if (6 === a[0] && c.label < o[1]) {
                      c.label = o[1], o = a;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(a);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                a = r.call(e, c)
              } catch (e) {
                a = [6, e], n = 0
              } finally {
                t = o = 0
              }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 }
            }([a, i])
          }
        }
      };
      Object.defineProperty(r, "__esModule", { value: !0 }), r.IframeBridgeApi = void 0;
      var a = t(6797), c = t(4313), i = function () {
        function e(e, r) {
          void 0 === r && (r = 1e4), this.adapter = e, this.isThemingEnabled = !1;
          var t = new Promise((function (e, t) {
            setTimeout((function () {
              return t(new Error("Failed to establish ready state with product"))
            }), r)
          }));
          this.onBridgeReady = Promise.race([this.waitForBridge(), t])
        }

        return e.prototype.callBridge = function (e, r) {
          return n(this, void 0, void 0, (function () {
            return o(this, (function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.onBridgeReady];
                case 1:
                  return t.sent(), [2, this.adapter.request(e, r)]
              }
            }))
          }))
        }, e.prototype.enableTheming = function () {
          this.isThemingEnabled = !0
        }, e.prototype.setThemeFromEvent = function (e) {
          var r, t;
          return n(this, void 0, void 0, (function () {
            var n;
            return o(this, (function (o) {
              switch (o.label) {
                case 0:
                  return this.isThemingEnabled ? (null === (r = null == e ? void 0 : e.data) || void 0 === r ? void 0 : r.theme) && Object.keys(e.data.theme).length ? (n = function (e) {
                    switch (e) {
                      case"DEVELOPMENT":
                        return "dev";
                      case"STAGING":
                        return "stg";
                      default:
                        return "prod"
                    }
                  }(e.data.env), [4, (0, c.setGlobalTheme)(e.data.theme, (function (e) {
                    var r = "https://forge.cdn.".concat(n, ".atlassian-dev.net/atlaskit-tokens_").concat(e, ".css");
                    if (!document.querySelector('link[href="'.concat(r, '"]'))) {
                      var t = document.createElement("link");
                      t.rel = "stylesheet", t.href = r, t.dataset.theme = e, document.head.appendChild(t)
                    }
                  }))]) : [3, 2] : [2];
                case 1:
                  return o.sent(), [3, 3];
                case 2:
                  document.documentElement.removeAttribute("data-theme"), document.documentElement.removeAttribute("data-color-mode"), o.label = 3;
                case 3:
                  return (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.surfaceColor) ? (document.documentElement.style.removeProperty(c.CURRENT_SURFACE_CSS_VAR), document.documentElement.style.setProperty(c.CURRENT_SURFACE_CSS_VAR, e.data.surfaceColor)) : document.documentElement.style.removeProperty(c.CURRENT_SURFACE_CSS_VAR), [2]
              }
            }))
          }))
        }, e.prototype.waitForBridge = function () {
          var e = this;
          return new Promise((function (r) {
            e.adapter.once(a.READY_EVENT, (function (t) {
              e.setThemeFromEvent(t), r()
            })), e.adapter.on(a.THEME_CHANGE_EVENT, (function (r) {
              return n(e, void 0, void 0, (function () {
                return o(this, (function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.setThemeFromEvent(r)];
                    case 1:
                      return e.sent(), [2]
                  }
                }))
              }))
            })), e.adapter.once(a.THEME_ENABLE_EVENT, (function () {
              e.enableTheming()
            })), e.adapter.request(a.READY_EVENT, {}).then((function () {
              r()
            })).catch(a.handleMissingHandlerError)
          }))
        }, e
      }();
      r.IframeBridgeApi = i
    }, 2063: function (e, r, t) {
      "use strict";
      var n = this && this.__awaiter || function (e, r, t, n) {
        return new (t || (t = Promise))((function (o, a) {
          function c(e) {
            try {
              s(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              s(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var r;
            e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t((function (e) {
              e(r)
            }))).then(c, i)
          }

          s((n = n.apply(e, r || [])).next())
        }))
      }, o = this && this.__generator || function (e, r) {
        var t, n, o, a, c = {
          label: 0, sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1]
          }, trys: [], ops: []
        };
        return a = {
          next: i(0),
          throw: i(1),
          return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
          return this
        }), a;

        function i(a) {
          return function (i) {
            return function (a) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                  case 0:
                  case 1:
                    o = a;
                    break;
                  case 4:
                    return c.label++, { value: a[1], done: !1 };
                  case 5:
                    c.label++, n = a[1], a = [0];
                    continue;
                  case 7:
                    a = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                      c.label = a[1];
                      break
                    }
                    if (6 === a[0] && c.label < o[1]) {
                      c.label = o[1], o = a;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(a);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                a = r.call(e, c)
              } catch (e) {
                a = [6, e], n = 0
              } finally {
                t = o = 0
              }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 }
            }([a, i])
          }
        }
      };
      Object.defineProperty(r, "__esModule", { value: !0 }), r.IframeBridge = void 0;
      var a = t(7231), c = t(6797), i = function () {
        function e(e) {
          this.adapterManager = e, this.bridgeApis = []
        }

        return e.prototype.getGlobalBridge = function () {
          return { callBridge: this.callBridge.bind(this), __SEMVER: "1.5.1" }
        }, e.prototype.init = function () {
          var e = this, r = this.adapterManager.getActiveAdapters();
          return this.bridgeApis = r.map((function (r) {
            return e.getBridgeApi(r)
          })), this
        }, e.prototype.callBridge = function (e, r) {
          return n(this, void 0, void 0, (function () {
            return o(this, (function (t) {
              switch (t.label) {
                case 0:
                  return [4, (0, c.firstToResolve)(this.bridgeApis.map((function (t) {
                    return t.callBridge(e, r)
                  })))];
                case 1:
                  return [2, t.sent()]
              }
            }))
          }))
        }, e.prototype.getBridgeApi = function (e) {
          return new a.IframeBridgeApi(e)
        }, e
      }();
      r.IframeBridge = i
    }, 7999: function (e, r, t) {
      "use strict";
      var n = this && this.__createBinding || (Object.create ? function (e, r, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
          enumerable: !0, get: function () {
            return r[t]
          }
        })
      } : function (e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
      }), o = this && this.__exportStar || function (e, r) {
        for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(r, t) || n(r, e, t)
      };
      Object.defineProperty(r, "__esModule", { value: !0 }), o(t(2063), r)
    }, 7908: (e, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }), r.globalBridge = void 0;
      var n = t(7999), o = new (t(8942).AdapterManager), a = new n.IframeBridge(o).init();
      r.globalBridge = a.getGlobalBridge()
    }, 6797: function (e, r) {
      "use strict";
      var t = this && this.__awaiter || function (e, r, t, n) {
        return new (t || (t = Promise))((function (o, a) {
          function c(e) {
            try {
              s(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              s(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var r;
            e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t((function (e) {
              e(r)
            }))).then(c, i)
          }

          s((n = n.apply(e, r || [])).next())
        }))
      }, n = this && this.__generator || function (e, r) {
        var t, n, o, a, c = {
          label: 0, sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1]
          }, trys: [], ops: []
        };
        return a = {
          next: i(0),
          throw: i(1),
          return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
          return this
        }), a;

        function i(a) {
          return function (i) {
            return function (a) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                  case 0:
                  case 1:
                    o = a;
                    break;
                  case 4:
                    return c.label++, { value: a[1], done: !1 };
                  case 5:
                    c.label++, n = a[1], a = [0];
                    continue;
                  case 7:
                    a = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                      c.label = a[1];
                      break
                    }
                    if (6 === a[0] && c.label < o[1]) {
                      c.label = o[1], o = a;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(a);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                a = r.call(e, c)
              } catch (e) {
                a = [6, e], n = 0
              } finally {
                t = o = 0
              }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 }
            }([a, i])
          }
        }
      };
      Object.defineProperty(r, "__esModule", { value: !0 }), r.THEME_CHANGE_EVENT = r.THEME_ENABLE_EVENT = r.READY_EVENT = r.handleMissingHandlerError = r.firstToResolve = void 0;
      var o = function (e) {
        return new Promise((function (r, t) {
          return e.then(t, r)
        }))
      };
      r.firstToResolve = function (e) {
        return t(void 0, void 0, void 0, (function () {
          return n(this, (function (r) {
            switch (r.label) {
              case 0:
                return r.trys.push([0, 2, , 3]), [4, o(Promise.all(e.map(o)))];
              case 1:
                return [2, r.sent()];
              case 2:
                throw r.sent()[0];
              case 3:
                return [2]
            }
          }))
        }))
      }, r.handleMissingHandlerError = function (e) {
        return (null == e ? void 0 : e.message.startsWith("No handler found for post message:")) ? Promise.resolve() : Promise.reject("Error while sending bridge message: ".concat(null == e ? void 0 : e.message))
      }, r.READY_EVENT = "__ready", r.THEME_ENABLE_EVENT = "__theme_enable", r.THEME_CHANGE_EVENT = "__theme_change"
    }, 7200: (e, r, t) => {
      var n = t(2278).default;

      function o() {
        "use strict";
        e.exports = o = function () {
          return t
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
        var r, t = {}, a = Object.prototype, c = a.hasOwnProperty, i = Object.defineProperty || function (e, r, t) {
            e[r] = t.value
          }, s = "function" == typeof Symbol ? Symbol : {}, d = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";

        function f(e, r, t) {
          return Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }), e[r]
        }

        try {
          f({}, "")
        } catch (r) {
          f = function (e, r, t) {
            return e[r] = t
          }
        }

        function h(e, r, t, n) {
          var o = r && r.prototype instanceof y ? r : y, a = Object.create(o.prototype), c = new N(n || []);
          return i(a, "_invoke", { value: P(e, t, c) }), a
        }

        function b(e, r, t) {
          try {
            return { type: "normal", arg: e.call(r, t) }
          } catch (e) {
            return { type: "throw", arg: e }
          }
        }

        t.wrap = h;
        var g = "suspendedStart", p = "executing", v = "completed", m = {};

        function y() {
        }

        function w() {
        }

        function k() {
        }

        var _ = {};
        f(_, d, (function () {
          return this
        }));
        var x = Object.getPrototypeOf, E = x && x(x(R([])));
        E && E !== a && c.call(E, d) && (_ = E);
        var S = k.prototype = y.prototype = Object.create(_);

        function O(e) {
          ["next", "throw", "return"].forEach((function (r) {
            f(e, r, (function (e) {
              return this._invoke(r, e)
            }))
          }))
        }

        function j(e, r) {
          function t(o, a, i, s) {
            var d = b(e[o], e, a);
            if ("throw" !== d.type) {
              var u = d.arg, l = u.value;
              return l && "object" == n(l) && c.call(l, "__await") ? r.resolve(l.__await).then((function (e) {
                t("next", e, i, s)
              }), (function (e) {
                t("throw", e, i, s)
              })) : r.resolve(l).then((function (e) {
                u.value = e, i(u)
              }), (function (e) {
                return t("throw", e, i, s)
              }))
            }
            s(d.arg)
          }

          var o;
          i(this, "_invoke", {
            value: function (e, n) {
              function a() {
                return new r((function (r, o) {
                  t(e, n, r, o)
                }))
              }

              return o = o ? o.then(a, a) : a()
            }
          })
        }

        function P(e, t, n) {
          var o = g;
          return function (a, c) {
            if (o === p) throw Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw c;
              return { value: r, done: !0 }
            }
            for (n.method = a, n.arg = c; ;) {
              var i = n.delegate;
              if (i) {
                var s = A(i, n);
                if (s) {
                  if (s === m) continue;
                  return s
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                if (o === g) throw o = v, n.arg;
                n.dispatchException(n.arg)
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = p;
              var d = b(e, t, n);
              if ("normal" === d.type) {
                if (o = n.done ? v : "suspendedYield", d.arg === m) continue;
                return { value: d.arg, done: n.done }
              }
              "throw" === d.type && (o = v, n.method = "throw", n.arg = d.arg)
            }
          }
        }

        function A(e, t) {
          var n = t.method, o = e.iterator[n];
          if (o === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = r, A(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), m;
          var a = b(o, e.iterator, t.arg);
          if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, m;
          var c = a.arg;
          return c ? c.done ? (t[e.resultName] = c.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = r), t.delegate = null, m) : c : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m)
        }

        function M(e) {
          var r = { tryLoc: e[0] };
          1 in e && (r.catchLoc = e[1]), 2 in e && (r.finallyLoc = e[2], r.afterLoc = e[3]), this.tryEntries.push(r)
        }

        function T(e) {
          var r = e.completion || {};
          r.type = "normal", delete r.arg, e.completion = r
        }

        function N(e) {
          this.tryEntries = [{ tryLoc: "root" }], e.forEach(M, this), this.reset(!0)
        }

        function R(e) {
          if (e || "" === e) {
            var t = e[d];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1, a = function t() {
                for (; ++o < e.length;) if (c.call(e, o)) return t.value = e[o], t.done = !1, t;
                return t.value = r, t.done = !0, t
              };
              return a.next = a
            }
          }
          throw new TypeError(n(e) + " is not iterable")
        }

        return w.prototype = k, i(S, "constructor", { value: k, configurable: !0 }), i(k, "constructor", {
          value: w,
          configurable: !0
        }), w.displayName = f(k, l, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
          var r = "function" == typeof e && e.constructor;
          return !!r && (r === w || "GeneratorFunction" === (r.displayName || r.name))
        }, t.mark = function (e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k, f(e, l, "GeneratorFunction")), e.prototype = Object.create(S), e
        }, t.awrap = function (e) {
          return { __await: e }
        }, O(j.prototype), f(j.prototype, u, (function () {
          return this
        })), t.AsyncIterator = j, t.async = function (e, r, n, o, a) {
          void 0 === a && (a = Promise);
          var c = new j(h(e, r, n, o), a);
          return t.isGeneratorFunction(r) ? c : c.next().then((function (e) {
            return e.done ? e.value : c.next()
          }))
        }, O(S), f(S, l, "Generator"), f(S, d, (function () {
          return this
        })), f(S, "toString", (function () {
          return "[object Generator]"
        })), t.keys = function (e) {
          var r = Object(e), t = [];
          for (var n in r) t.push(n);
          return t.reverse(), function e() {
            for (; t.length;) {
              var n = t.pop();
              if (n in r) return e.value = n, e.done = !1, e
            }
            return e.done = !0, e
          }
        }, t.values = R, N.prototype = {
          constructor: N, reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(T), !e) for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r)
          }, stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
          }, dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;

            function n(n, o) {
              return i.type = "throw", i.arg = e, t.next = n, o && (t.method = "next", t.arg = r), !!o
            }

            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o], i = a.completion;
              if ("root" === a.tryLoc) return n("end");
              if (a.tryLoc <= this.prev) {
                var s = c.call(a, "catchLoc"), d = c.call(a, "finallyLoc");
                if (s && d) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                } else if (s) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                } else {
                  if (!d) throw Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                }
              }
            }
          }, abrupt: function (e, r) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc <= this.prev && c.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var o = n;
                break
              }
            }
            o && ("break" === e || "continue" === e) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
            var a = o ? o.completion : {};
            return a.type = e, a.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(a)
          }, complete: function (e, r) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && r && (this.next = r), m
          }, finish: function (e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var t = this.tryEntries[r];
              if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), T(t), m
            }
          }, catch: function (e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var t = this.tryEntries[r];
              if (t.tryLoc === e) {
                var n = t.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  T(t)
                }
                return o
              }
            }
            throw Error("illegal catch attempt")
          }, delegateYield: function (e, t, n) {
            return this.delegate = {
              iterator: R(e),
              resultName: t,
              nextLoc: n
            }, "next" === this.method && (this.arg = r), m
          }
        }, t
      }

      e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports
    }, 2278: e => {
      function r(t) {
        return e.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t)
      }

      e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
    }, 7054: (e, r, t) => {
      var n = t(7200)();
      e.exports = n;
      try {
        regeneratorRuntime = n
      } catch (e) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
      }
    }, 7006: (e, r, t) => {
      "use strict";

      function n(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
        return n
      }

      t.d(r, { Z: () => n })
    }, 5304: (e, r, t) => {
      "use strict";

      function n(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
      }

      t.d(r, { Z: () => n })
    }, 8949: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => a });
      var n = t(4841);

      function o(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0, n.Z)(o.key), o)
        }
      }

      function a(e, r, t) {
        return r && o(e.prototype, r), t && o(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e
      }
    }, 2418: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => o });
      var n = t(4841);

      function o(e, r, t) {
        return (r = (0, n.Z)(r)) in e ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[r] = t, e
      }
    }, 1635: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => o });
      var n = t(2479);

      function o(e, r) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, r) {
          var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != t) {
            var n, o, a, c, i = [], s = !0, d = !1;
            try {
              if (a = (t = t.call(e)).next, 0 === r) {
                if (Object(t) !== t) return;
                s = !1
              } else for (; !(s = (n = a.call(t)).done) && (i.push(n.value), i.length !== r); s = !0) ;
            } catch (e) {
              d = !0, o = e
            } finally {
              try {
                if (!s && null != t.return && (c = t.return(), Object(c) !== c)) return
              } finally {
                if (d) throw o
              }
            }
            return i
          }
        }(e, r) || (0, n.Z)(e, r) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
    }, 6983: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => a });
      var n = t(7006), o = t(2479);

      function a(e) {
        return function (e) {
          if (Array.isArray(e)) return (0, n.Z)(e)
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || (0, o.Z)(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
    }, 4841: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => o });
      var n = t(7680);

      function o(e) {
        var r = function (e, r) {
          if ("object" != (0, n.Z)(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != (0, n.Z)(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == (0, n.Z)(r) ? r : r + ""
      }
    }, 7680: (e, r, t) => {
      "use strict";

      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }

      t.d(r, { Z: () => n })
    }, 2479: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => o });
      var n = t(7006);

      function o(e, r) {
        if (e) {
          if ("string" == typeof e) return (0, n.Z)(e, r);
          var t = {}.toString.call(e).slice(8, -1);
          return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, n.Z)(e, r) : void 0
        }
      }
    }
  }, n = {};

  function o(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var a = n[e] = { exports: {} };
    return t[e].call(a.exports, a, a.exports, o), a.exports
  }

  o.m = t, o.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return o.d(r, { a: r }), r
  }, o.d = (e, r) => {
    for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] })
  }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce(((r, t) => (o.f[t](e, r), r)), [])), o.u = e => ({
    25: "@atlaskit-internal_atlassian-legacy-light",
    210: "@atlaskit-internal_atlassian-shape",
    214: "@atlaskit-internal_atlassian-legacy-dark",
    261: "@atlaskit-internal_atlassian-typography-adg3",
    334: "@atlaskit-internal_atlassian-light",
    338: "@atlaskit-internal_atlassian-light-future",
    353: "@atlaskit-internal_atlassian-dark-brand-refresh",
    389: "@atlaskit-internal_atlassian-custom-theme",
    436: "@atlaskit-internal_atlassian-spacing",
    555: "@atlaskit-internal_atlassian-dark-increased-contrast",
    625: "@atlaskit-internal_atlassian-light-brand-refresh",
    631: "@atlaskit-internal_atlassian-light-increased-contrast",
    682: "@atlaskit-internal_atlassian-typography-minor3",
    903: "@atlaskit-internal_atlassian-dark",
    983: "@atlaskit-internal_atlassian-dark-future"
  }[e] + ".chunk.js"), o.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@atlassian/bridge-core:", o.l = (t, n, a, c) => {
    if (e[t]) e[t].push(n); else {
      var i, s;
      if (void 0 !== a) for (var d = document.getElementsByTagName("script"), u = 0; u < d.length; u++) {
        var l = d[u];
        if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == r + a) {
          i = l;
          break
        }
      }
      i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.setAttribute("data-webpack", r + a), i.src = t), e[t] = [n];
      var f = (r, n) => {
        i.onerror = i.onload = null, clearTimeout(h);
        var o = e[t];
        if (delete e[t], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), r) return r(n)
      }, h = setTimeout(f.bind(null, void 0, { type: "timeout", target: i }), 12e4);
      i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), s && document.head.appendChild(i)
    }
  }, o.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
  }, (() => {
    var e;
    o.g.importScripts && (e = o.g.location + "");
    var r = o.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      t.length && (e = t[t.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
  })(), (() => {
    var e = { 447: 0 };
    o.f.j = (r, t) => {
      var n = o.o(e, r) ? e[r] : void 0;
      if (0 !== n) if (n) t.push(n[2]); else {
        var a = new Promise(((t, o) => n = e[r] = [t, o]));
        t.push(n[2] = a);
        var c = o.p + o.u(r), i = new Error;
        o.l(c, (t => {
          if (o.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
            var a = t && ("load" === t.type ? "missing" : t.type), c = t && t.target && t.target.src;
            i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + c + ")", i.name = "ChunkLoadError", i.type = a, i.request = c, n[1](i)
          }
        }), "chunk-" + r, r)
      }
    };
    var r = (r, t) => {
      var n, a, [c, i, s] = t, d = 0;
      if (c.some((r => 0 !== e[r]))) {
        for (n in i) o.o(i, n) && (o.m[n] = i[n]);
        s && s(o)
      }
      for (r && r(t); d < c.length; d++) a = c[d], o.o(e, a) && e[a] && e[a][0](), e[a] = 0
    }, t = self.webpackChunk_atlassian_bridge_core = self.webpackChunk_atlassian_bridge_core || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })(), o(4175), o(1021)
})();
