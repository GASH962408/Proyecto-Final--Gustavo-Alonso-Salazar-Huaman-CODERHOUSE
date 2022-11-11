//Finalmente mi pagina de inicio de sesion 

button=document.getElementById("BUT");

let n=0  // Establezco la variable n=0 para contar las veces que el cliente inicio sesion mal
button.onclick = function()   // Cuando el usuario haga click en el boton ingresar una vez haya puesto sus datos se activaran los condicionales y bucles.
{
        X=document.getElementById("USE").value;  //de la pagina login.html convierto los valores que ingreso el cliente en este caso 
                                                 //el nombre de usuario y lo almaceno en una variable X.

        Y=document.getElementById("PAS").value; // de igual manera que el anterior pongo los valores que ingreso el cliente password en la variable Y
       
        if (X=="user" && Y==1234)      //En esta parte comparo si ingreso correctamente los valores de usuario y contrasena con if con un AND
           {

            localStorage.setItem('usuario',X); //Si se ingreso corectamente guardo los datos en localstorage antes de llevarlo a la tienda ussuario y password
            localStorage.setItem('password',Y);
            Swal.fire(
                'Bienvenido',
                'Cliente',
                'success'
              )
            setTimeout(() => window.open("Tienda.html"), 2000); // pongo un set Time out de 2 segundos antes de irse a la tienda virtual
            }
        else   //Si se equivoco el cliente saltara un mensaje para que pruebe 2 veces mas con el contador n
        {
            if (n==0)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o password incorrecto',
                  })
                n=n+1
            }
            else if (n==1)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o password incorrecto tiene un intento mas',
                  })
                n=n+1   
            }

            else if (n==2) //Si se equivoca el usuario la pagina lo retorna a la pagina principal en 2 segundos
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o password incorrecto contacte soporte al cliente',
                  })
                setTimeout(() => window.open("Index.html"), 2000);
            }

        }
    
      
}