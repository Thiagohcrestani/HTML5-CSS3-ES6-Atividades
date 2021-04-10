  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="index_menu.php" ><img src="sicredi-logo.png" width="150" height="50" alt="login" ></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" ">
    <ul class="navbar-nav mr-auto">
	
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Usuário
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="Usuario.php">Novo Usuário</a>
          <a class="dropdown-item" href="PesquisaUsuario.php">Editar Usuário</a>
        </div>
      </li>
    </ul>
  </div>

  <span class="navbar-text">
		
		<font size="" face="verdana" color="" align="right"><?php echo $_SESSION["nome"];?></font>	
		<button onclick="window.location.href='logoff.php'" class="btn btn-sm btn-outline-secondary" type="button">Sair</button>
	</span>
</nav>

