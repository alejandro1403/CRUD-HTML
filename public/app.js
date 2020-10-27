console.log('holaaa');

var formulario = document.getElementById('contact');
var eliminar = document.getElementById('eliminar');
var actualizar = document.getElementById('actualizar');
var get = document.getElementById('get');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');1
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');
  
  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }
  
  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

eliminar.addEventListener('submit', function (e) {
  e.preventDefault();
  let datos = new FormData(eliminar);
  let idpaciente = datos.get('identificacion');
  let myHeaders = new Headers();

  const options = {
    method: 'DELETE',
    headers: myHeaders,
    body: new URLSearchParams({
      'numid': idpaciente
    }),
  }
  console.log(options)
  
  fetch('/basedatos/borrarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

actualizar.addEventListener('submit', function (e) {
  e.preventDefault();
  let datos = new FormData(actualizar);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'PUT',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente,
    }),
  }
  

  fetch('/basedatos/modificarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

get.addEventListener('submit', function (e) {
  e.preventDefault();

  let myHeaders = new Headers();

  const options = {
    method: 'GET',
    headers: myHeaders,
  }
  
  fetch('/basedatos/consultatotalpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //ventana(data);
    });
});

/*function ventana(data) 
{
  
}*/
