using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Security;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualBasic;
using System.Data.SqlClient;
using System.Data;

public class OSQL
{
    public string Sqlstring { get; set; }

    public OSQL(string server, string bd, string user, string pwd)
    {
        Sqlstring = "server=" + server + ";Database=" + bd + ";Uid=" + user + ";Pwd=" + pwd;
    }
    public DataTable SelectEncabezado(string turnoid)
    {
        DataSet ds = new DataSet();
        SqlConnection conn = new SqlConnection(Sqlstring);
        var cmd = new SqlCommand("Select TurnoID, TotalVentas from TurnoEnca where turnoid=@turnoid", conn);
        cmd.Parameters.Add(new SqlParameter("@turnoid", turnoid));
        SqlDataAdapter da = new SqlDataAdapter(cmd);
        cmd.Connection.Open();
        da.SelectCommand = cmd;
        da.Fill(ds, "Query");
        cmd.Connection.Close();
        //return ds.Tables(0);
    }
    public void UpdateTabla(string docentry, string turnoid)
    {
        SqlConnection conn = new SqlConnection(Sqlstring);
        var cmd = new SqlCommand(@"Update TurnoEnca
                                    set DocEntry=@DocEntry
                                    where TurnoID=@TurnoID", conn);
        cmd.Parameters.Add(new SqlParameter("@TurnoID", turnoid));
        cmd.Parameters.Add(new SqlParameter("@DocEntry", docentry));
        cmd.Connection.Open();
        cmd.ExecuteNonQuery();
        cmd.Connection.Close();
    }

}
