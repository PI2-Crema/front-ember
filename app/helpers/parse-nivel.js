import Ember from 'ember';

export function parseNivel(params/*, hash*/) {
  let nivel = params[0]
  switch (nivel) {
    case 'low':
      return 'Baixo';
      break;
    case 'medium':
      return 'Médio';
      break;
    case 'height':
      return 'Alto';
      break;
    default:
      return 'Baixo';
  }
}

export default Ember.Helper.helper(parseNivel);
