using System;
using System.Data.SqlClient;
using proyecto_analisis.Models;

namespace proyecto_analisis
{
	public class DBConsultas
	{
        private readonly ConexionSSQL _conexion;

        public DBConsultas(ConexionSSQL conexion)
        {
            _conexion = conexion;
        }

        public async Task<IEnumerable<UsuarioModel>> Obtenerusuarios()
        {
            var usuarios = new List<UsuarioModel>();

            using (var ConexionSSQL = _conexion.ObtenerConexion())
            {
                await ConexionSSQL.OpenAsync();

                using (var comando = new SqlCommand("SELECT * FROM usuarios", ConexionSSQL))
                using (var reader = await comando.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        var usuario = new UsuarioModel
                        {
                            id_usuario = reader.GetInt32(0),
                            nombre = reader.GetString(1),
                            usr = reader.GetString(2),
                            contrasenia = reader.GetString(3)
                        };

                        usuarios.Add(usuario);
                    }
                }
            }

            return usuarios;
        }
    }
}

