(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['react'], function (React) {
      return (root.Pokemon = factory(React));
    });
  } else if (typeof exports === 'object') {
    // Node, sorta CommonJS
    module.exports = factory(require('react-tools').React);
  } else {
    // Browser global
    root.Pokemon = factory(root.React);
  }
}(this, function (React) {
  return React.createClass({
    propTypes: {
      name: React.PropTypes.string
    },

    render: function () {
      return React.DOM.img({
        className: 'pokemon',
        alt: this.props.name,
        src: 'http://img.pokemondb.net/artwork/' + this.props.name.toLowerCase() + '.jpg'
      });
    }
  });
}));
