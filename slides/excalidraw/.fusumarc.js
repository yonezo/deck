const base = require('../../.fusumarc');

const url = 'https://github.com/yonezo/deck';
const title = 'excalidraw';

module.exports = {
  meta: {
    ...base,
    title,
    url: `${url}/${title}`,
    name: title,
    description: ''
  },
  extends: {
    css: 'style.css'
  }
};
