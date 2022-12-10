//Создаём Vue приложение
const app = Vue.createApp({
  data() {
    return {
      //Определяем все необходимые переменные
      foots:0,
      meters:0,
      foot_meter_ratio:0.3048,

      sea_miles:0,
      kilometers:0,
      sea_mile_kilometer_ratio:1.852,

      degrees:0,
      radians:0,
      degree_radian_ratio:0.01745,

      celsius:0,
      farenheit:32,

    }
  },
  methods : {
    //обработка изменения поля с футами
    foots_changed() {
      this.meters = this.foots * this.foot_meter_ratio;
    },
    //обработка изменения поля с метрами
    meters_changed() {
      this.foots = this.meters / this.foot_meter_ratio;
    },

    //обработка изменения поля с морскими милями
    sea_miles_changed() {
      this.kilometers = this.sea_miles * this.sea_mile_kilometer_ratio;
    },
    //обработка изменения поля с километрами
    kilometers_changed() {
      this.sea_miles = this.kilometers / this.sea_mile_kilometer_ratio;
    },

    //обработка изменения поля с градусами
    degrees_changed() {
      this.radians = this.degrees * this.degree_radian_ratio;
    },
    //обработка изменения поля с радианами
    radians_changed() {
      this.degrees = this.radians / this.degree_radian_ratio;
    },

    //обработка изменения поля с цельсиями
    celsius_changed() {
      this.farenheit = this.celsius * (9.0/5.0) + 32;
    },
    //обработка изменения поля с фаренгейтами
    farenheit_changed() {
      this.celsius = (this.farenheit - 32) * (5.0/9.0);
    }

  }
})

//Завершаем инициализацию приложения
const vm = app.mount('#app')