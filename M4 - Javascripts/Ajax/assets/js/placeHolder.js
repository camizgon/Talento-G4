let requestConfig = {
    url: "https://jsonplaceholder.typicode.com/posts", // donde haré la petición URL base + /endpoint
    type: "GET", // verbo HTTP, GET, POST, PUT, DELETE
    dataType: "json", // tipo de dato que se manipulará
    success: function (response) {
      // respuesta como función para registrar en la consola si el dato es SUCCESS
      const posts = response;
      console.log(posts);
      
      let htmlPost = ''; // Definir la variable htmlPost
  
      posts.forEach((post) => { // Cambiar "posts" a "post" en el callback
        let postCard = `<p>${post.id} - ${post.title}</p>`; // Acceder a "post.title"
        htmlPost += postCard;
      });
  
      $("#posts-section").html(htmlPost);
      console.log(htmlPost); // Opcional: para ver el contenido generado
    }, // función que se ejecuta si la petición es exitosa

    error: function (error) {
      console.log(error);
      alert("PELIGRO! Hay un error");
    } // función que se ejecuta en caso de error para registrar en la consola
  };
  


  /*EJECUCIÓN DIRECTA*/
 // $.ajax(requestConfig); // Método .ajax => ejecuta una petición con las configuraciones pasadas por parámetro  

  /* EJECUCIÓN POR MÉTODO */
 $("#submit-btn").click(function (){
     $.ajax(requestConfig);
 })

    

