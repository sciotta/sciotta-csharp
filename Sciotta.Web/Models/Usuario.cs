namespace Sciotta.Web.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }

        public static Usuario GetUsuarioByLoginAndSenha(string login, string senha)
        {
            if (login == "usuario" && senha == "teste")
            {
                return new Usuario { Id = 1, Login = "usuario", Senha = "teste" };
            }
            return null;
        }
    }
}