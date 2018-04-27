let models = new Models();
let viewModels = new ViewModels(models.markers);
let view = new Views();
ko.applyBindings(viewModels);