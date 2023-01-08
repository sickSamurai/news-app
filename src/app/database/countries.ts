import { SelectOption } from '../models/SelectOption'

export const AppCountries: SelectOption[] = [
  { 'value': 'ar', 'text': 'Argentina' },
  { 'value': 'au', 'text': 'Australia' },
  { 'value': 'br', 'text': 'Brasil' },
  { 'value': 'co', 'text': 'Colombia' },
  { 'value': 'us', 'text': 'Estados Unidos' },
  { 'value': 'fr', 'text': 'Francia' },
  { 'value': 'ru', 'text': 'Rusia' },
  { 'value': 've', 'text': 'Venezuela' },
  { 'value': 'mx', 'text': 'Mexico' },
  { 'value': 'gb', 'text': 'Gran Bretaña' }
].sort((a, b) => a.value.localeCompare(b.value))
