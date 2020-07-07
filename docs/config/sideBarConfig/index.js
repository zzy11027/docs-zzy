const front = require('./frontConfig/index.js');
const back = require('./backConfig/index.js');
module.exports = {
    "/frontEnd/css/": front.css,
    "/frontEnd/html/": front.html,
    // "/frontEnd/javascript/": front.js,
    "/frontEnd/jsJC/": front.jsJC,
    "/frontEnd/jsJJ/": front.jsJJ,
    "/frontEnd/VAR/vue/": front.vue,
    "/frontEnd/VAR/react/": front.react,
    "/frontEnd/VAR/jquery/": front.jquery,
    "/other/tool/": front.tool,
    "/backEnd/node/": back.node,
};
