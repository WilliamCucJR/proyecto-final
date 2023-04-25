private void LeerSelect()
{
    OSQL oSQL = new OSQL(SERVER, DBNAME, USER, PWD);

    DataTable dt = new DataTable();
    dt = oSQL.SelectEncabezado(turnoid);
    int i = 0;
    foreach (DataRow dr in dt.Rows)
    {
        'AQUI SE ITERA POR CADA FILA DEL SELECT
        'SE PUEDE ACCEDER A LOS CAMPOS DE LA TABLA
        'USANDO dr("NOMBRE_COLUMNA")
    }
}
