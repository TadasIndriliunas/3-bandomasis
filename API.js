const baseURL = 'http://localhost:3000';

class API {
  static fetchCar = (success, failure) => {
    fetch(`${baseURL}/Car`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }

  static deleteCar = (id, success, failure) => {
    fetch(`${baseURL}/Car/${id}`, { method: 'DELETE' })
      .then(success)
      .catch(failure)
  }
}

// const rodytiKlaidą = (klaida) => console.error('Klaida:', klaida)

// console.log('Siunčiami pradiniai duomenys...');
// API.fetchToys(
//   (duomenys) => {
//     console.log('Gauti pradiniai duomenys', duomenys);
//     console.log('trinamas Elementas su id \'1\'...');
//     API.deleteToy(
//       '2',
//       (duomenys) => {
//         console.log('Sėkimgai ištrinta', duomenys);
//         console.log('Siunčiami atnaujinti duomenys...');
//         API.fetchToys(
//           (duomenys) => console.log('Gauti Atnaujinti duomenys', duomenys),
//           rodytiKlaidą
//         )
//       },
//       rodytiKlaidą
//     )
//   },
//   rodytiKlaidą
// )

