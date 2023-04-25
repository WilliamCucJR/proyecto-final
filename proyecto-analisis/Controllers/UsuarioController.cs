using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using proyecto_analisis.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proyecto_analisis.Controllers
{
    public class UsuarioController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();

        }

        public IConfiguration Configuration { get; }

        public UsuarioController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IActionResult Registrar()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Registrar(UsuarioModel usuario)
        {
            using (SqlConnection con = new(Configuration["ConnectionStrings:ConexionSSQL"]))
            {
                using (SqlCommand cmd = new("sp_registrar", con))
                {
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.Parameters.Add("@nombre", System.Data.SqlDbType.VarChar).Value = usuario.nombre;
                    cmd.Parameters.Add("@usr", System.Data.SqlDbType.VarChar).Value = usuario.usr;
                    cmd.Parameters.Add("@contrasenia", System.Data.SqlDbType.VarChar).Value = usuario.contrasenia;
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
            }
            return Redirect("Index");
        }

    }
}

