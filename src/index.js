const App = {
  init: function () {
    this.print()
  },
  print: function () {
    console.log('Finished setup App.')
  },
}

// Starting the app after window object loaded.
window.onload = function () {
  App.init()
}
