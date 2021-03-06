'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  return setPostBodyComponents([_react2.default.createElement('script', { key: 'gatsby-plugin-stripe-checkout', dangerouslySetInnerHTML: { __html: 'src="https://checkout.stripe.com/checkout.js"' } })]);
};
