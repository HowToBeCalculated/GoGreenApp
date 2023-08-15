const all_months = [
    {'month' : '1', 'name': 'January'},
    {'month' : '2', 'name': 'Feburary'},
    {'month' : '3', 'name': 'March'},
    {'month' : '4', 'name': 'April'},
    {'month' : '5', 'name': 'May'},
    {'month' : '6', 'name': 'June'},
    {'month' : '7', 'name': 'July'},
    {'month' : '8', 'name': 'August'},
    {'month' : '9', 'name': 'September'},
    {'month' : '10', 'name': 'October'},
    {'month' : '11', 'name': 'November'},
    {'month' : '12', 'name': 'December'}
  ]

const categoryActivity = [
    {
      label: "International rail passenger train",
      apicode: "passenger_train-route_type_international_rail-fuel_source_na",
      value: 0,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "International long-haul flight - without RF effect",
      apicode: "passenger_flight-route_type_international-aircraft_type_na-distance_long_haul_gt_3700km-class_na-rf_excluded-distance_uplift_included",
      value: 1,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Automobile",
      apicode: "passenger_vehicle-vehicle_type_automobile-fuel_source_na-distance_na-engine_size_na",
      value: 2,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Regular Taxi",
      apicode: "passenger_vehicle-vehicle_type_taxi-fuel_source_na-distance_na-engine_size_na",
      value: 3,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Bus",
      apicode: "passenger_vehicle-vehicle_type_bus-fuel_source_na-distance_na-engine_size_na",
      value: 4,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Taxi",
      apicode: "passenger_vehicle-vehicle_type_taxi-fuel_source_na-distance_na-engine_size_na",
      value: 5,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Dairy products",
      apicode: "consumer_goods-type_dairy_products",
      value: 6,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Meat products (beef)",
      apicode: "consumer_goods-type_meat_products_beef",
      param_used: "money",
      value: 7,
      parameter: ['usd']
    },
    {
      label: "Meat products (pork)",
      apicode: "consumer_goods-type_meat_products_pork",
      value: 8,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Meat products (poultry)",
      value: 9,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Fish products",
      apicode: "consumer_goods-type_fish_products",
      value: 10,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Meat products (not elsewhere specified)",
      apicode: "consumer_goods-type_meat_products_not_elsewhere_specified",
      value: 11,
      param_used: "money",
      parameter: ['usd']
    },
    {
    label: "Electricity supplied from grid",
    apicode: "electricity-supply_grid-source_supplier_mix",
    value: 12,
    param_used: "energy",
    parameter: ['kWh']
    },
    {
    label: "Water supply",
    apicode: "water_supply-type_na",
    value: 13,
    param_used: "volume",
    parameter: ['l']
    },
    {
      label: "Clothing",
      apicode: "consumer_goods-type_clothing",
      value: 14,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Cosmetics and Toiletries",
      apicode: "consumer_goods-type_cosmetics_toiletries_personal_care",
      value: 15,
      param_used: "money",
      parameter: ['usd']
      }
  ]

export {categoryActivity, all_months};