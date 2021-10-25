import ADODB from 'node-adodb';
const sql = ADODB.open(
	'Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=TCardOnline;Data Source=192.168.0.1;'
);
module.exports = sql;
