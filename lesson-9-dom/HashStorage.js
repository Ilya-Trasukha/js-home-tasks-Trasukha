(function() {
  function THashStorage() {
    this.store = {};
  }

  THashStorage.prototype.AddValue = function(key, value) {
    this.store[key] = value;
  };

  THashStorage.prototype.GetValue = function(key) {
    return this.store[key];
  };

  THashStorage.prototype.DeleteValue = function(key) {
    if (!(key in this.store)) {
      return false;
    } else {
      return delete this.store[key];
    }
  };

  THashStorage.prototype.GetKeys = function() {
    return Object.keys(this.store);
  };


  var DrinkStorage = new THashStorage();

  var add = document.querySelector('#add_cocktail');
  var get = document.querySelector('#get_cocktail');
  var remove = document.querySelector('#del_cocktail');
  var keys = document.querySelector('#all_cocktails');
  var info = document.querySelector('.content_info');

  add.addEventListener('click', function() {
    var name = prompt('Введите информацию о напитке');
    var alco = confirm('Нажмите OK если напиток алкогольный') ? 'Да' : 'Нет';
    var recipe = prompt('Введите рецепт');

    DrinkStorage.AddValue(name, {name: name, alco: alco, recipe: recipe});
    info.textContent = 'Напиток ' + name + ' Добавлен!';
  });

  get.addEventListener('click', function() {
    var name = prompt('Введите название');
    var value = DrinkStorage.GetValue(name);

    info.innerHTML = 'Напиток:' + value.name  + '<br>\n' + 'Алкогольный: ' + value.alco + '<br>\n' + 'Рецепт приготовления: ' +  value.recipe;
  });

  remove.addEventListener('click', function() {
    var key = prompt('Введите название');

    DrinkStorage.DeleteValue(key) ? info.textContent = 'Напиток ' + key + ' Удалён' : info.textContent = 'Напиток ' + key + ' отсутствует в хранилище';
  });

  keys.addEventListener('click', function() {
    info.textContent = DrinkStorage.GetKeys();
  });

})();

