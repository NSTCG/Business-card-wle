WL.registerComponent("cursor-target-custom", {
}, {
  init: function () {
    this.hoverFunctions = [];
    this.unHoverFunctions = [];
    this.clickFunctions = [];
    this.moveFunctions = [];
    this.downFunctions = [];
    this.upFunctions = [];
  },
  onHover: function(object, cursor) {
      for(let f of this.hoverFunctions) f(object, cursor);
  },
  onUnhover: function(object, cursor) {
      for(let f of this.unHoverFunctions) f(object, cursor);
  },
  onClick: function(object, cursor) {
      for(let f of this.clickFunctions) f(object, cursor);
      window.alert("worked")
  },
  onMove: function(object, cursor) {
      for(let f of this.moveFunctions) f(object, cursor);
  },
  onDown: function(object, cursor) {
      for(let f of this.downFunctions) f(object, cursor);
      window.alert("worked")
  },
  onUp: function(object, cursor) {
      for(let f of this.upFunctions) f(object, cursor);
      window.alert("worked")
  },
  addHoverFunction: function(f) {
      this._validateCallback(f);
      this.hoverFunctions.push(f);
  },
  removeHoverFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.hoverFunctions, f);
  },
  addUnHoverFunction: function(f) {
      this._validateCallback(f);
      this.unHoverFunctions.push(f);
  },
  removeUnHoverFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.unHoverFunctions, f);
  },
  addClickFunction: function(f) {
      this._validateCallback(f);
      this.clickFunctions.push(f);
      window.alert("work")
  },
  removeClickFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.clickFunctions, f);
  },
  addMoveFunction: function(f) {
      this._validateCallback(f);
      this.moveFunctions.push(f);
  },
  removeMoveFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.moveFunctions, f);
  },
  addDownFunction: function(f) {
      this._validateCallback(f);
      this.downFunctions.push(f);
      window.alert("win")
  },
  removeDownFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.downFunctions, f);
  },
  addUpFunction: function(f) {
      this._validateCallback(f);
      this.upFunctions.push(f);
  },
  removeUpFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.upFunctions, f);
  },

  _removeItemOnce: function(arr, value) {
      var index = arr.indexOf(value);
      if(index > -1) arr.splice(index, 1);
      return arr;
  },
  _validateCallback: function(f) {
      if(typeof f !== "function") {
          throw new TypeError(this.object.name
              + ".cursor-target: Argument needs to be a function");
      }
  },
});