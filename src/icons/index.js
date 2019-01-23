import Vue from 'vue';
import SvgIcon from '@/components/Svgicon'

Vue.component('svg-icon',SvgIcon);

let req = require.context('./svg',false,/\.svg$/);

const requireAll = requireContext=>requireContext.keys().map(requireContext);
requireAll(req);