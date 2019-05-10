export const validateBudget = budget => {
  let totalBudget = parseInt(budget, 10)|| 0;
  if(totalBudget > 0 ) {
  return totalBudget;
      } else {
  return false;
      }
  }
  export const revisarPresupuesto = (budget, pending) => {
  let clase;
  // Comprobar el 25%
  if( (budget / 4) > pending) {
           clase = 'alert alert-danger';
      } else if( (budget / 2) > pending) {
          clase = 'alert alert-warning'
      } else {
          clase = 'alert alert alert-success';
      }
  return clase;
  }