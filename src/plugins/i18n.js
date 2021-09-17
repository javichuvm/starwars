import Vue from 'vue'
import { createI18n } from 'vue-i18n'

const messages = {
    'en': {
        'starships': 'Starships',
        'planets': 'Planets',
        'people': 'People',        
        'pilots': 'Pilots',
        'name': 'Name',
        'height': 'Height',
        'hair_color': 'Hair color',
        'skin_color': 'Skin color',
        'eye_color': 'Eye color',
        'birth_year': 'Birth year',
        'gender': 'Gender',
        'url': 'Url',
        'model': 'Model',
        'manufacturer': 'Manufacturer',
        'cost_in_credits': 'Cost in credits',
        'length': 'Length',
        'max_atmosphering_speed': 'Max atmosphering speed',
        'crew': 'Crew',
        'passengers': 'Passengers',
        'cargo_capacity': 'Cargo capacity',
        'consumables': 'Consumables',
        'hyperdrive_rating': 'Hyperdrive rating',
        'MGLT': 'MGLT',
        'starship_class': 'Starship class',
        'rotation_period': 'Rotation period',
        'orbital_period': 'Orbital period',
        'diameter': 'Diameter',
        'climate': 'Climate',
        'gravity': 'Gravity',
        'terrain': 'Terrain',
        'surface_water': 'Surface water',
        'population': 'Population'
    },
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages
  })

export default i18n;